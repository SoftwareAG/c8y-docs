---
weight: 15
title: Previous versions
layout: bundle
---

The Cumulocity documentation sources are located in a Mercurial repository called "c8y-docs" in Bitbucket. The c8y-docs repository is public which means that no credentials are required to view or copy it. 

>**Info**: Providing documentation for various versions on the documentation website is currently under development.

You find the documentation sources for the maintenance release versions in the following branches:

Release 9.20: [https://bitbucket.org/m2m/c8y-docs/branch/release/r9.20.0](https://bitbucket.org/m2m/c8y-docs/branch/release/r9.20.0)

Release 10.4.0: [https://bitbucket.org/m2m/c8y-docs/branch/release/10.4.0-GA](https://bitbucket.org/m2m/c8y-docs/branch/release/10.4.0-GA)

Release 10.4.6: [https://bitbucket.org/m2m/c8y-docs/branch/release/r10.4.6-GA](https://bitbucket.org/m2m/c8y-docs/branch/release/r10.4.6-GA)

The actual content of the documentation is stored in source files in Markdown format. These Markdown files are located in the folder */content*. You will find a subfolder for every guide here, which again contains subfolders.

For further details on the architecture of the Cumulocity documentation website refer to the [README](https://bitbucket.org/m2m/c8y-docs/src/develop/README.md) at the top level of the repository. 

#### Viewing documentation in HTML format

To view the documentation in HTML format you need to be a little familiar with working in a version control system like Git or Mercurial.

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

		http://localhost:1313/concepts

The documentation will show up.



