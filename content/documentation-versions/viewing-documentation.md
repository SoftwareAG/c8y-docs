---
weight: 30
title: Viewing documentation in HTML format
layout: bundle
section:
  - about_website
aliases:
  - /about-doc/intro-documentation
  - /users-guide/enterprise-edition
  - /users-guide/enterprise-tenant
  - /benutzerhandbuch/enterprise-edition-de
  - /benutzerhandbuch/enterprise-tenant-de
  - /release-notes
  - /apama/apama-release-notes
  - /datahub/datahub-release-notes
  - /edge/edge-release-notes
  - /machine-learning/release-notes
  - /web-sdk-for-plugins
  - /event-language
---

To view the documentation in HTML format you need to be a bit familiar with working in a version control system like Git.

First you must make a copy of the repository (called a "clone") on your local machine either by using a desktop client (for example Sourcetree) or through the command line in a terminal.

Switch to the branch of your choice.

#### To convert the sources to HTML format

The Markdown files are converted to HTML files by an application called "Hugo".

1. Follow the instructions in [https://gohugo.io/getting-started/installing/](https://gohugo.io/getting-started/installing/) to install the appropriate Hugo version for your operating system.

2. Open a terminal window.

3. Change to the directory that contains your local repository, for example:

		cd .. /users/my-user-name/c8y-docs

4. Enter the following command:

		hugo server

5. Open a browser and enter the following URL:

		http://localhost:1313/guides/welcome

The documentation will show up.
