#!/usr/bin/python
"""
This script is to synchronize the Cumulocity IoT Edge dependencies from the remote Harbor registry to the local Harbor registry.
usage: <action> [<args>]
Allowed actions are:
    sync     Synchronize the Cumulocity IoT Edge dependencies from the remote Harbor registry to the local Harbor registry.
    setup    Setup a local Harbor registry.
registrysync.py: error: the following arguments are required: action
=================
COMMAND FOR SYNC
=================
usage: registrysync.py [-h] -v EDGE_VERSION -sr SOURCE_REGISTRY -sru SOURCE_REGISTRY_USERNAME -srp SOURCE_REGISTRY_PASSWORD -tr TARGET_REGISTRY -tru TARGET_REGISTRY_USERNAME -trp TARGET_REGISTRY_PASSWORD [-dr DRYRUN]
Synchronize the Cumulocity IoT Edge dependencies from the remote Harbor registry to the local Harbor registry.
options:
  -h, --help            show this help message and exit
  -v EDGE_VERSION, --edge-version EDGE_VERSION
                        Cumulocity IoT Edge version (e.g. 1018.0.0)
  -sr SOURCE_REGISTRY, --source-registry SOURCE_REGISTRY
                        URI of the Cumulocity IoT Edge Harbor registry (e.g. registry.c8y.io)
  -sru SOURCE_REGISTRY_USERNAME, --source-registry-username SOURCE_REGISTRY_USERNAME
                        Username to access the Cumulocity IoT Edge Harbor registry
  -srp SOURCE_REGISTRY_PASSWORD, --source-registry-password SOURCE_REGISTRY_PASSWORD
                        Password to access the Cumulocity IoT Edge Harbor registry
  -tr TARGET_REGISTRY, --target-registry TARGET_REGISTRY
                        URI of the local Harbor registry (hostname/IP Address)
  -tru TARGET_REGISTRY_USERNAME, --target-registry-username TARGET_REGISTRY_USERNAME
                        Username to access the local Harbor registry
  -trp TARGET_REGISTRY_PASSWORD, --target-registry-password TARGET_REGISTRY_PASSWORD
                        Password to access the local Harbor registry
  -dr DRYRUN, --dryrun DRYRUN
                        --dryrun true option, identifies and list the artifacts which would be synced from source registry to target. Defaults to 'false'
"""

import argparse
import logging
import os
import subprocess
import sys
import tempfile
import yaml
import re

# Setup logging
logging.basicConfig(
    format = "%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level = logging.INFO
)
_logger = logging.getLogger(__name__)


_SYNC_COMMAND_DESCRIPTION = 'Synchronize the Cumulocity IoT Edge dependencies from the remote Harbor registry to the local Harbor registry.'
_SETUP_COMMAND_DESCRIPTION = 'Setup a local Harbor registry.'

_EDGE_DEPENDENCIES_FOLDER = 'edge/dependencies'
_DEPENDENCIES_YAML_LOCATION = f'{_EDGE_DEPENDENCIES_FOLDER}/dependencies.yaml'

class RegistrySync(object):
    def __init__(self, *args):
        if not args:
            return

        _logger = logging.getLogger(self.__class__.__name__)

        ## https://chase-seibert.github.io/blog/2014/03/21/python-multilevel-argparse.html
        action_parser = argparse.ArgumentParser(description='Synchronize the Cumulocity IoT Edge dependencies from the remote Harbor registry to the local Harbor registry.',
                                                usage=f'''<action> [<args>]
Allowed actions are:
    sync     {_SYNC_COMMAND_DESCRIPTION}
    setup    {_SETUP_COMMAND_DESCRIPTION}
''')

        action_parser.add_argument("action", help="Action to perform. sync or setup")

        args = action_parser.parse_args(args[1:2])
        action_function = f"_{args.action}"
        if not hasattr(self, action_function):
            message = f"Unrecognized action '{args.action}"
            _logger.error(message, exc_info=False)

            exit(1)

        # use dispatch pattern to invoke method with same name
        getattr(self, action_function)()

    def _sync(self):
        parser = argparse.ArgumentParser(description=_SYNC_COMMAND_DESCRIPTION)

        parser.add_argument("-v", "--edge-version",
                            help="Cumulocity IoT Edge version (e.g. 1018.0.0)", required=True)
        parser.add_argument("-sr", "--source-registry",
                            help="URI of the Cumulocity IoT Edge Harbor registry (e.g. registry.c8y.io)", required=True)
        parser.add_argument("-sru", "--source-registry-username",
                            help="Username to access the Cumulocity IoT Edge Harbor registry", required=True)
        parser.add_argument("-srp", "--source-registry-password",
                            help="Password to access the Cumulocity IoT Edge Harbor registry", required=True)
        parser.add_argument("-tr", "--target-registry",
                            help="URI of the local Harbor registry (hostname/IP Address)", required=True)
        parser.add_argument("-tru", "--target-registry-username",
                            help="Username to access the local Harbor registry", required=True)
        parser.add_argument("-trp", "--target-registry-password",
                            help="Password to access the local Harbor registry", required=True)
        parser.add_argument("-dr", "--dryrun",
                            help="--dryrun true option, identifies and list the artifacts which would be synced from source registry to target. Defaults to 'false'", required=False, default='false')

        kwargs = vars(parser.parse_args(sys.argv[2:]))
        self.sync(**kwargs)

    def _setup(self):
        parser = argparse.ArgumentParser(description=_SETUP_COMMAND_DESCRIPTION)

        kwargs = vars(parser.parse_args(sys.argv[2:]))
        self.setup(**kwargs)

    def setup(self):

        _logger.info("Setup command is not supported.")
        raise Exception("Setup command is not supported.")

    def sync(self, edge_version, source_registry, source_registry_username, source_registry_password, target_registry, target_registry_username, target_registry_password, dryrun='false'):
        if not dryrun:
            # This initialization is necesssary as generate() when invoked using **kwargs
            # the is_continuous_integration default specified in the function signature will not take effect.
            dryrun = False
        else:
            dryrun = dryrun.lower() in ['true', '1']

        try:
            _logger.info(f"======= Started copying dependencies of Cumulocity IoT Edge version '{edge_version}' from the source ragistry '{source_registry}' into the target registry '{target_registry}'.")

            with tempfile.TemporaryDirectory() as tmpDirectory:
                sourceRegistryClient = HarborRegistryClient(source_registry, source_registry_username, source_registry_password, tmpDirectory)
                targetRegistryClient = HarborRegistryClient(target_registry, target_registry_username, target_registry_password, tmpDirectory)

                # Download and read the dependencies.yaml file tagged with 'edge_version', from the source registry
                try:
                    dependencies_file_path = sourceRegistryClient.oras_pull(_DEPENDENCIES_YAML_LOCATION, edge_version, dryrun=False) # Download even when the dryrun flag is set to true
                except:
                    # This could happen when the major version changes after the release
                    message = f"Couldn't find the Cumulocity IoT Edge version '{edge_version}' in the provided source registry '{source_registry}'."
                    _logger.error(message)
                    raise Exception(message)

                with open(dependencies_file_path, 'r') as dependencies_file:
                    dependencies = yaml.safe_load(dependencies_file)

                # For each component in the dependencies,
                #   download the component from the source registry
                #   upload the same into the target registry
                for _, category in dependencies.items():
                    for _, component in category.items():
                        if 'chart-name' in component:
                            chart_file_path = sourceRegistryClient.chart_pull(component['edge-repository'], component['chart-name'], component['version'], dryrun=False)
                            targetRegistryClient.chart_push(chart_file_path, component['edge-repository'], dryrun=dryrun)

                            _logger.info(f"copied helm chart\t {component['edge-repository']}/{component['chart-name']}:{component['version']}")
                        elif component['edge-repository'].startswith('edge/dependencies/'):
                            oras_file_path = sourceRegistryClient.oras_pull(component['edge-repository'], component['version'], dryrun=False)
                            targetRegistryClient.oras_push(oras_file_path, component['edge-repository'], component['version'], dryrun=dryrun)

                            _logger.info(f"copied file\t\t {component['edge-repository']}:{component['version']}")
                        else:
                            component_file_path = sourceRegistryClient.docker_pull(component['edge-repository'], component['version'], dryrun=False)
                            targetRegistryClient.docker_push(component_file_path, component['edge-repository'], component['version'], dryrun=dryrun)

                            _logger.info(f"copied docker image\t {component['edge-repository']}:{component['version']}")

                # Finally upload the dependencies.yaml file into the target registry
                targetRegistryClient.oras_push(dependencies_file_path, _DEPENDENCIES_YAML_LOCATION, edge_version, dryrun=dryrun)

            _logger.info(f"======= Successfully copied dependencies of Cumulocity IoT Edge version '{edge_version}' from the source registry '{source_registry}' into the target registry '{target_registry}'.")
        except:
            _logger.exception("", exc_info=True)

            _logger.info(f"======= Failed to copy dependencies of Cumulocity IoT Edge version '{edge_version}' from the source registry '{source_registry}' into the target registry '{target_registry}'.")

        return

class HarborRegistryClient():
    def __init__(self, hostname, username, password, tmpDirectory):
        self.hostname = hostname
        self.username = username
        self.password = password
        self.tmpDirectory = tmpDirectory

    def oras_pull(self, repo :str, tag :str, dryrun :bool) -> str:
        pull_command = f"echo {self.password} | oras pull -u {self.username} --password-stdin {self.hostname}/{repo}:{tag}"
        response = self._execute(pull_command, cwd=self.tmpDirectory, dryrun=dryrun)
        if response['returnCode'] == 0:
            downloaded_file_path = os.path.join(self.tmpDirectory, os.path.basename(repo))
            _logger.debug(f"Successfully pulled '{repo}:{tag}' from registry '{self.hostname}' into file '{downloaded_file_path}'.")
            return downloaded_file_path
        else:
            message = f"Failed to pull '{repo}:{tag}' from registry '{self.hostname}'.\n{response['stdout']}"
            _logger.error(message, exc_info=False)
            raise Exception(message)

    def oras_push(self, file_path :str, repo :str, tag :str, dryrun :bool):
        push_command = f"echo {self.password} | oras push -u {self.username} --password-stdin {self.hostname}/{repo}:{tag} {os.path.basename(file_path)}"
        response = self._execute(push_command, cwd=os.path.dirname(file_path), dryrun=dryrun)
        if response['returnCode'] == 0:
            _logger.debug(f"Successfully pushed oras file '{file_path}' into repo '{repo}:{tag}' of registry '{self.hostname}'.")
        else:
            message = f"Failed to push oras file '{file_path}' into repo '{repo}:{tag}' of registry '{self.hostname}'.\n{response['stdout']}"
            _logger.error(message, exc_info=False)
            raise Exception(message)

    def docker_pull(self, repo :str, tag :str, dryrun :bool) -> str:
        source_image = f"{self.hostname}/{repo}:{tag}"

        commands = [
            f"echo {self.password} | docker login {self.hostname} -u '{self.username}' --password-stdin",
            f"docker pull {source_image}", # Pull image from source repository
        ]
        response = self._execute(" && ".join(commands), dryrun=dryrun)
        if response['returnCode'] == 0:
            _logger.debug(f"Successfully pulled docker image '{repo}:{tag}' from registry '{self.hostname}'.")
            return source_image
        else:
            message = f"Failed to pull docker image '{repo}:{tag}' from registry '{self.hostname}'.\n{response['stdout']}"
            _logger.error(message, exc_info=False)
            raise Exception(message)

    def docker_push(self, source_image, repo :str, tag :str, dryrun :bool):
        target_image = f"{self.hostname}/{repo}:{tag}"

        commands = [
            f"echo {self.password} | docker login {self.hostname} -u '{self.username}' --password-stdin",

            f"docker tag {source_image} {target_image}", # Move to target repository on local
            f"docker push {target_image}" # Push image to target repository on remote
        ]
        response = self._execute(" && ".join(commands), dryrun=dryrun)
        if response['returnCode'] == 0:
            _logger.debug(f"Successfully pushed docker image '{repo}:{tag}' into registry '{self.hostname}'.")
        else:
            message = f"Failed to push docker image '{repo}:{tag}' into registry '{self.hostname}'.\n{response['stdout']}"
            _logger.error(message, exc_info=False)
            raise Exception(message)

    def chart_pull(self, repo :str, chart_name :str, tag :str, dryrun :bool) -> str:
        commands = [
            f"echo {self.password} | helm registry login --username '{self.username}' --password-stdin {self.hostname}",
            f"helm repo add --force-update source-harbor-charts-repo https://{self.hostname}/{repo} --username '{self.username}' --password '{self.password}'",
            f"helm pull source-harbor-charts-repo/{chart_name} --version {tag}",  # Pull chart from source repository
        ]

        response = self._execute(" && ".join(commands), cwd=self.tmpDirectory, dryrun=dryrun)
        if response['returnCode'] == 0:
            _logger.debug(f"Successfully pulled chart '{repo}/{chart_name}:{tag}' from registry '{self.hostname}'.")
            return os.path.join(self.tmpDirectory, f"{chart_name}-{tag}.tgz")
        else:
            message = f"Failed to pull chart '{repo}/{chart_name}:{tag}' from registry '{self.hostname}'.\n{response['stdout']}"
            _logger.error(message, exc_info=False)
            raise Exception(message)


    def chart_push(self, chart_file_path :str, repo :str, dryrun :bool):
        commands = [
            f"echo {self.password} | helm registry login --username '{self.username}' --password-stdin {self.hostname}",
            f"helm repo add --force-update target-harbor-charts-repo https://{self.hostname}/{repo} --username '{self.username}' --password '{self.password}'",
            f"helm cm-push --force {chart_file_path} target-harbor-charts-repo" # Push chart to target repository
        ]

        response = self._execute(" && ".join(commands), dryrun=dryrun)
        if response['returnCode'] == 0:
            _logger.debug(f"Successfully pushed chart '{chart_file_path}' into registry '{self.hostname}'.")
        else:
            message = f"Failed to push chart '{chart_file_path}' into registry '{self.hostname}'.\n{response['stdout']}"
            _logger.error(message, exc_info=False)
            raise Exception(message)

    def _execute(self, cmd, cwd=None, shell=True, dryrun=False):
        """
        Executes the given command and returns the exit code.
        Returns 0 if the command execution is successful
        Returns non-zero, when the command execution competed with non-zero exit code or command execution time out.
        """
        try:
            _logger.debug(f"Command execution begin: {self._mask_sensitive_words(cmd)}")
            if not dryrun:
                result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, cwd=cwd, shell=shell, check=True)
                returnValue = {"returnCode": result.returncode, "stdout": result.stdout.decode()}
            else:
                returnValue = {"returnCode": 0, "stdout": ""}

        except subprocess.CalledProcessError as err:
            _logger.exception(f'Subprocess exited with exit code: {err.returncode}, Error: {self._mask_sensitive_words(err.output)}')
            returnValue = {"returnCode": err.returncode, "stdout": self._mask_sensitive_words(err.stdout.decode())}
        except subprocess.TimeoutExpired as err:
            _logger.exception(f'Subprocess timeout.')
            returnValue = {"returnCode": 1, "stdout": self._mask_sensitive_words(err.stdout.decode())}  #There is no specific return-code incase of timeout returned here hence using 1 as return code, in general linux uses exitcode 124
        except Exception as err:
            _logger.exception(f'Command execution failed.')
            returnValue = {"returnCode": 1, "stdout": None}
        finally:
            if returnValue['stdout']:
                _logger.debug(f"Command execution's standard output follows... \n{self._mask_sensitive_words(returnValue['stdout'])}")
            else:
                _logger.debug(f"Command execution's standard output follows... \nNONE")

            _logger.debug(f"Command execution end: {self._mask_sensitive_words(cmd)}")

        return returnValue

    def _mask_sensitive_words(self, text):
        # Constructing regex pattern to match any of the sensitive words
        pattern = re.compile('|'.join(re.escape(word) for word in [self.password]), re.IGNORECASE)

        # Replace sensitive words with asterisks
        masked_text = pattern.sub('****', text)

        return masked_text

if __name__ == "__main__":
    RegistrySync(*sys.argv)
