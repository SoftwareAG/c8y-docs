---
weight: 15
title: Documentation versions and sources
layout: bundle
---

The Cumulocity IoT documentation website provides the documentation for all GA releases under maintenance, i.e. for the current GA release and the previous two GA releases.

You can switch between the versions by using the dropdown list at the top right.

### Documentation sources

The Cumulocity IoT documentation sources are located in a Git repository called "c8y-docs" in GitHub. The c8y-docs repository is public which means that no credentials are required to view or copy it.

You find the documentation sources for the GA release versions in the following branches:

Release 10.5.7: [https://github.com/SoftwareAG/c8y-docs/tree/release/r10.5.7](https://github.com/SoftwareAG/c8y-docs/tree/release/r10.5.7)

Release 10.6.0: [https://github.com/SoftwareAG/c8y-docs/tree/release/r10.6.0](https://github.com/SoftwareAG/c8y-docs/tree/release/r10.6.0)

Release 10.6.6: [https://github.com/SoftwareAG/c8y-docs/tree/release/r10.6.6](https://github.com/SoftwareAG/c8y-docs/tree/release/r10.6.6)

You may also find the sources of older versions here in corresponding branches.

The actual content of the documentation is stored in source files in Markdown format. These Markdown files are located in the folder */content*. You will find a subfolder for every guide here, which again contains subfolders.

For further details on the architecture of the Cumulocity IoT documentation website refer to the [README](https://github.com/SoftwareAG/c8y-docs/blob/develop/README.md) at the top level of the repository.

#### Viewing documentation in HTML format

To view the documentation in HTML format you need to be a bit familiar with working in a version control system like Git.

First you need to make a copy of the repository (called a "clone") on your local machine either by using a desktop client (for example Sourcetree) or through the command line in a terminal.

Switch to the branch of your choice.

##### To convert the sources to HTML format

The Markdown files are converted to HTML files by an application called "Hugo".

1. Follow the instructions in [https://gohugo.io/getting-started/installing/](https://gohugo.io/getting-started/installing/) to install the appropriate Hugo version for your operating system.

2. Open a terminal window.

3. Change to the directory that contains your local repository, for example:

		cd .. /users/my-user-name/c8y-docs

4. Enter the following command:

		hugo server

5. Open a browser and enter the following URL:

		http://localhost:1313/guides/about-doc

The documentation will show up.
