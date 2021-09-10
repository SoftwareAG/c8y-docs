---
weight: 80
title: Package Manager Plugin API
layout: redirect
---

>**Info:** This API is not released yet. The Software Management feature will be released for version 0.3.

Thin Edge uses plugins to delegate all the software management operations to the appropriate package managers and installers: installation of packages, uninstallations and queries.

A package manager plugin acts as a facade for a specific package manager.
A plugin is an executable that follows the [plugin API](/thin-edge/thin-edge-developer-tools/#pluginapi).
On a device, several plugins can be installed to deal with different kinds of software modules.
Each plugin is given a name that is used by Thin Edge to determine the appropriate plugin for a software module.
All the actions on a software module are directed to the plugin that is named like the module type name.
Among all the plugins, one can be distinguished as the default plugin.
The default plugin is invoked when no software module type can be determined by the system.
Several plugins can co-exist for a given package manager as long as they have different names.
Each plugin can implement a specific software management policy.

## Plugin repository

To be used by thin-edge, a plugin has to be stored in the directory */etc/tedge/sm-plugins*.
The same plugin can have different names, using virtual links.
One of the plugins can have the name `default`. This plugin is then used as the default plugin.

On start-up and sign-up, the sm-agent registers the plugins as follows:

1. Iterate over the executable file of the directory */etc/tedge/sm-plugins*.
2. Check if the executable is indeed a plugin, calling the [`list` command](/thin-edge/thin-edge-developer-tools/#list).

<a name="pluginapi"></a>
## Plugin API

A plugin must implement all the commands used by the sm-agent of Thin Edge, and support all the options for these commands.
A plugin should not support additional commands or options.
A plugin might have a configuration file.
It can be a list of remote repositories, or a list of software modules to be excluded.
These configuration files can be managed from the cloud via the sm-agent.

[comment]: # (TODO: how?)

### Input, output and errors

The plugins are called by the sm-agent using a child process for each action.
For the current list of commands there is no input beyond the command arguments, and a plugin can close its `stdin`.
The `stdout` and `stderr` of the process running a plugin command are captured by the sm-agent.
These streams don't have to be the streams returned by the underlying package manager. It can be a one sentence summary of the error, redirecting the administrator to the package manager logs.
A plugin must return the appropriate exit status after each command.
In no cases, the error status of the underlying package manager should be reported.

The exit statuses are interpreted by sm-agent as follows:

* `0`: success.
* `1`: usage. The command arguments cannot be interpreted, and the command has not been launched.
* `2`: failure. The command failed and there is no point in retrying.
* `3`: retry. The command failed but might be successful later (for instance, when the network will be back).

If the command fails to return within 5 minutes, the sm-agent reports a timeout error:

* `4`: timeout.

<a name="the-list-command"></a>
### List command

When called with the `list` command, a plugin returns the list of software modules that have been installed with this plugin.

```shell
$ debian-plugin list
...
{"name":"collectd-core","version":"5.8.1-1.3"}
{"name":"mosquitto","version":"1.5.7-1+deb10u1"}
...
```

This command takes no arguments.
If an error status is returned, the executable is removed from the list of plugins.
The list is returned using the [jsonlines](https://jsonlines.org/) format.
The parameter `name` ishe name of the module. This is the name that has been used to install it and must be used to remove it.
The parameter `version` is he version currently installed. This is a string that can only been interpreted in the context of the plugin.

### Prepare command

The `prepare` command is invoked by the sm-agent before a sequence of install and remove commands.

```
$ /etc/tedge/sm-plugins/debian prepare
$ /etc/tedge/sm-plugins/debian install x
$ /etc/tedge/sm-plugins/debian install y
$ /etc/tedge/sm-plugins/debian remove z
$ /etc/tedge/sm-plugins/debian finalize
```

For many plugins this command will do nothing.
However, it gives the plugin an opportunity to:
* Update the dependencies before an operation, i.e. a sequence of actions.
   Notably, a debian plugin can update the `apt` cache issuing an `apt-get update`.
* Start a transaction, in case the plugin is able to manage rollbacks.

This command takes no arguments.
No output is expected.
If the `prepare` command fails, then the planned sequences of actions (i.e. the whole sm operation) is cancelled.

### Finalize command

The `finalize` command closes a sequence of install and remove commands started by a `prepare` command.

This can be a no-op, but it's also an opportunity to:
* remove any unnecessary software module after a sequence of actions.
* commit or rollback the sequence of actions.
* restart any processes using the modules, e.g. restart the analytics engines if the modules have changed.

This command takes no arguments.
No output is expected.
This command might check (but doesn't have to) that the list of install and remove command has been consistent.
For instance, a plugin might raise an error after the sequence `prepare;install a; remove a-dependency; finalize`.
If the `finalize` command fails, then the planned sequences of actions (i.e. the whole sm operation) is reported as failed, even if all the atomic actions have been successfully completed.

### Install command

The `install` command installs a software module, possibly of some expected version.

```
$ plugin install NAME [--version VERSION] [--file FILE]
```

The command requires a single mandatory argument: the software module name.
This module name is meaningful only to the plugin.

An optional version string can be provided.
This version string is meaningful only to the plugin and is transmitted unchanged from the cloud to the plugin.
The version string can include constraints (as at least that version), from the sm-agent viewpoint this is no more than a string.
If no version is provided the plugin is free to install the more appropriate version.

An optional file path can be provided.
When the device administrator provides a URL, the sm-agent downloads the software module on the device, then invokes the install command with a path to that file.
If no file is provided, the plugin has to derive the appropriate location from its repository and to download the software module accordingly.
The command installs the requested software module and any dependencies that might be required.

It is up to the plugin to define if this command triggers an installation or an upgrade. It depends on the presence of a previous version on the device and on the ability of the package manager to deal with concurrent versions for a module.
A plugin might not be able to install dependencies. In that case, the device administrator will have to request explicitly the dependencies to be installed first.

After a successful sequence `prepare; install foo; finalize` the module `foo` must be reported by the `list` command.

After a successful sequence `prepare; install foo --version v; finalize` the module `foo` must be reported by the `list` command with the version `v`. If the plugin manages concurrent versions, the module `foo` might also be reported with versions already installed before the operation.

A plugin is not required to detect inconsistent actions as `prepare; install a; remove a-dependency; finalize`.
It will not result in an error if you run this command twice or if the module is already installed.  

An error is reported if:

* The module name is unknown.
* There is no version for the module that matches the constraint provided by the `--version` option.
* The file content provided by `--file` option:
   * is not in the expected format,
   * doesn't correspond to the software module name,
   * has a version that doesn't match the constraint provided by the `--version` option (if any).
* The module cannot be downloaded.
* The module cannot be installed.

### Remove command

The `remove` command uninstalls a software module, and possibly its dependencies if no other modules are dependent on those.

```
$ plugin remove NAME [--version VERSION]
```

The command requires a single mandatory argument: the module name.
This module name is meaningful only to the plugin and is transmitted unchanged from the cloud to the plugin.

An optional version string can be provided.
This version string is meaningful only to the plugin and is transmitted unchanged from the cloud to the plugin.
The command uninstalls the requested module and possibly any dependencies that are no longer required.

If a version is provided, only the module of that version is removed.
In practice this is only useful for a package manager that is able to install concurrent versions of a module.

After a successful sequence `prepare; remove foo; finalize` the module `foo` must no more be reported by the `list` command.

After a successful sequence `prepare; remove foo --version v; finalize` the module `foo` is no longer reported by the `list` command with the version `v`. If the plugin manages concurrent versions, the module `foo` might still be reported with versions already installed before the operation.

A plugin is not required to detect inconsistent actions as `prepare; remove a; install a-reverse-dependency; finalize`.
It will not result in an error if you run this command twice or if the module is not installed.  

An error is reported if:
* The module name is unknown.
* The module cannot be uninstalled.
