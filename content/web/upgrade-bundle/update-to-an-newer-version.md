---
title: Updating the Web SDK version
layout: redirect
weight: 5
---

 **Version:** 10.6.0.0 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

A UI build with an earlier version of the Web SDK is locked to the current version.
A platform update doesn't update the UI version, however a UI running against a newer backend always keeps working as all APIs are backwards compatible.
That's why an update makes mostly sense if a newer feature of the UI or the Web SDK needs to be used.
Therefore, a new application needs to be built and deployed to the platform.
This recipe describes best practices to do so.

### Preparation

We recommend you to use a Source Control System to backup the data and to get better diffing of the code.
If you are not using an SCM yet, see below for an introduction on how to use [git](https://git-scm.com) to store your changes.
If you are already using an SCM or you don't want to use any, you can jump to the next section.
If you decide not to use an SCM, backup your application before running the update.

Ensure that you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed on your system.
Then open a terminal and run the following commands:

```shell
cd <<path/to-you-app>>
git init
git add .
git commit -m "init commit"
```

Now your code is committed to a local git repository stored in the `.git` folder.
Next this recipe explains you how to update the Web SDK.
If you don't want to use git anymore after the update, you can simply erase the `.git` folder.

### Updating

To update the Web SDK you can simply use the `new` command that is used for scaffolding:

```shell
c8ycli new <<app-name>> <<cockpit|devicemanagement|administration>> -a @c8y/apps@<<version>>
```

So for example if your current working directory is an application called "my-cockpit" based on {{< product-c8y-iot >}}'s Cockpit application and you want to update to version 10.6.2.0, you must run the following command:

```shell
cd ..
c8ycli new my-cockpit cockpit -a @c8y/apps@1006.2.0
```

{{< c8y-admon-info >}}
The first two numbers of the version are combined (eg. 10.6 becomes 1006) as npm only supports semver version numbers. You can also remove the `-a` flag to always update to the latest version (the version our cloud platform is running on).
{{< /c8y-admon-info >}}

The command simply copies over the files that are used for building a new application in the particular version.
The following files are currently overwritten:

 - `app.module.ts`: The Angular module imports which might be aligned by your application to import custom Angular modules.
 - `index.ts`: The bootstrapping file which is called first. This file is usually not changed.
 - `ng1.ts`: The angularjs imports which might have been aligned to add or remove angularjs plugins.
 - `package.json`: The npm dependencies, application options and names are stored in this file. This is very likely changed, for example, when different options or a different dependency are used.
 - `tsconfig.json`: The typescript configuration. It is usually unchanged.
 - `angular.json`: The Angular project configuration defaults for build and development tools

These are the files that are overwritten by an update based on the version of that article.
The list might change in later versions.
Next, we must reapply the changes that were made earlier to these files.
A git diffing tool can be very helpful for that.

### Diffing to reapply changes

A git diffing tool is useful to identify which changes have been made with the upgrade and which have been made earlier and now need to be reapplied.
In the following screenshot we are using [Visual Studio Code](https://code.visualstudio.com/) to identify the changes, as it has a well integrated diffing tool for git (mostly all other IDEs have support for git diffing as well):

![Comparing the difference with vscode](/images/web-sdk/update-diff.png)

With that tool it is easy to compare which file was changed with the upgrade and where custom changes may need to be reapplied.
In this case `MyCustomModule` must only be placed in the upgrade `app.module.ts`.
When this change is done, the update can be verified.

### Verifying the update

To check if the version update worked, it is usually a good practice to run it locally first.
Therefore, you need first to install the dependencies again.
Remove the current `node_modules` directory and run `npm install` (or `yarn`) again to refresh the dependencies.
After this, start the application with `npm start`. After login you can check the current UI version by clicking on you username.

If everything worked as expected, you can now deploy your application by running the command`npm run deploy`.

### Conclusion

The update process is sometimes a bit tricky, especially if you have many changes in the `app.module.ts`.
However, with git and Visual Studio Code the visual diffing may help you to accomplish this task.
Also, it is a good practice to put your own Angular customizations into a module and only to make changes to the `app.module.ts` when it is absolutely necessary.
