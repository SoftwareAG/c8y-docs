# Cumulocity Guides website

<https://cumulocity.com/guides>

**Built with [Hugo](https://gohugo.io/)** (version 0.92.1)

## Development environment

- Clone the repository
- Install hugo by using snap `snap install hugo --channel=extended`
- Open a terminal window on project directory and type `hugo server`

## Structure

The Cumulocity Guides website architecture has the following structure:

- Section (e.g. *<http://cumulocity.com/guides/user-guide>*)
  - Subsection - renders as a single page (e.g. *<http://cumulocity.com/guides/user-guide/overview>*)
    - Anchor section - anchor tag in the subsection page (e.g. *<http://cumulocity.com/guides/user-guide/overview#user-settings>*)

The architecture is built with a mix of front matter and directory structure

## Adding content

### 1. Add a new section

Before adding a new section, check if the content fits in any of the available sections:

- Release notes
- Concepts guide
- User guide
- User guide (german version)
- Device guides
- Cumulocity-IoT Edge
- Microservice SDK guide
- Device SDK guide
- Web SDK guide
- Analytics guide
- Reference guide

A new section is defined by a Markdown file with the following front matter:

```yaml
---
title: My new section # add the section title
bundle: new-section # add the directory holding the section pages
icon: "c8y-icon c8y-icon-tools" # use either fontawesome or c8y-icons
type: root # don't change
layout: root # don't change
weight: 90 # order the section in the section dropdown in ascending order
---
```
Grab the icon classes in the [Styleguide](https://styleguide.cumulocity.com/#/icons/cumulocity)

### 2. Add the section root directory

All guides are stored in the `content` directory. To add a new section, create a directory here and name it with the `bundle` value set in the front matter.

### 3. Add a subsection

Inside the newly created directory create a markdown file with the name you wish to use as a url — e.g. `introduction.md` with the following front matter:

```yaml
---
title: Introduction to Cumulocity # the page title
layout: bundle # don't change
weight: 10 # set the position of the page within the section in ascending order
aliases: # if needed, add the redirects here, otherwise remove this
  - /concepts-guide/introduction-to-cumulocity/
  - /concepts-guide/introduction-to-cumulocity.html
---
# add optional content as Markdown
Cumulocity gives you very fast visibility and control over your remote assets, be these houses, cars, machines or any other assets that you need to manage.
```

If you're looking to have a short page without anchors, you're good to go, but if you want to add multiple subsections with anchors then proceed to the next step.

When adding multiple subsections, the content provided in this file will be rendered as a lead (text slightly larger) in the top of the page.

### 4. Add blocks of content with anchors to a page

To display multiple blocks of content and provide anchor links to display in the navigator, you'll have to follow these steps:

1. Add a directory with the exact same name as the Markdown file adding the suffix `-bundle`, e.g. `introduction-bundle`.

&nbsp;

2. Add a `index.html` file into the new directory with the following front matter:

```yaml
---
title: Introduction # not important as we won't use it, but we need the title
headless: true # states that all content inside this directory is just a resource to be used in another page
---
```

&nbsp;
3. Add a Markdown file for each block of content with the following front matter:

```yaml
---
title: Overview # will be used as anchor, i.e. guides/users-guide/introduction/#overview
weight: 10 # to set the position in the page
---

## Add content as Markdown or HTML

* Certified hardware kits and software libraries you can use to bring your remote assets into the cloud.
* Device management, data visualization and remote control functionality through the web.
* Rapid customization of the above through [real-time processing](/concepts/realtime) and [Cumulocity applications](/concepts/applications).
* APIs for extending the existing functionality or interfacing Cumulocity with your other IT services such as ERP or CRM systems. Cumulocity can also host your HTML5 applications.
[…]
```

### 5. Add media

Media should be added to `/static/images/`. Add a new directory if none of the available suits your needs.

Keep all file names url friendly (lowercase, no special characters, and no empty spaces).

To use the images in your pages, just add the relative path e.g `![image title](/images/<directory name>/<file name>)`.


## Redirects

Redirects must be processed through aliases. Add aliases as an array, and make sure to remove `/guides` out of the url. Check the following example:

```yaml
---
title: Introduction to Cumulocity
layout: bundle
weight: 10
aliases:
  - /concepts-guide/introduction-to-cumulocity/
  - /concepts-guide/introduction-to-cumulocity.html
# this will redirect cumulocity.com/guides/concepts-guide/introduction-to-cumulocity/
# to cumulocity.com/guides/concepts/introduction
---
```

## Deploying to cumulocity.com/guides

Cumulocity provides documentation for multiple releases.
For that, you must create a release branch for every public release, for example `release/r10.15.0`.
When creating these branches follow the next steps:

- Create the branch following the same pattern: `release/r[version number]`
- Edit the *config.toml* file and append the version number to the base url, for example: `baseURL = "https://cumulocity.com/guides/10.15.0"`
- Add the file *properties.json*, adding the name and the long name for the release version, for example:
    ```
    {
      "name":"10.15.0",
      "longname": "Release 10.15.0"
    }
    ```
- Execute the [Jenkins job](https://jenkins.dev.c8y.io/view/C8Y-DOCS/job/Deploy-c8y-docs-by-branch/) `Deploy-c8y-docs-by-branch` by clicking **Build with Parameters** in the left side navigation.
- Enter the branch name as the **BRANCH** parameter and click **Build**.
- If necessary, deploy the `default` branch by executing the [Jenkins job](https://jenkins.dev.c8y.io/view/C8Y-DOCS/job/Deploy-c8y-docs/) `Deploy-c8y-docs` to regenerate the version dropdown links.

## Cherry-picking

There are two ways of applying changes done to the develop branch also to release branches.

### Manual cherry-picking

To cherry-pick changes from a PR that was merged to the develop branch:

1. Find out the ID of the merge commit of said PR, either from the merge message for the PR on GitHub or via `git log` on the console.
2. Make sure the develop branch is updated for your git or git UI tool.
3. Checkout the release branch to which you want to apply the changes, and update the branch locally (for example, via `git pull` using git on the console).
4. Apply the cherry-pick, for example, via `git cherry-pick -m 1 [COMMIT_ID]` using git on the console.

Note that members of the documentation team usually do this for PRs they review.
You need WRITE access to the release branch to do this.
If you don't have WRITE access or are unsure whether or not you do, the documentation team can and will do the cherry-picking for you.
To let them know what the target release versions for the change are, use GitHub labels, for example "10.17.0" for release 10.17.0.

### Automatic cherry-picking and labels

Automatic cherry-picking allows you to automatically cherry-pick your PRs to one or multiple release branches.
It works via the [backport-github-action](https://github.com/sqren/backport-github-action) which uses the [backport cli tool](https://github.com/sqren/backport) internally.

#### To enable automatic cherry-picking on a PR

To enable automatic cherry-picking on a PR, add the label `auto-backport` to it.
Otherwise the responsible GitHub action is not going to be triggered.

To select the target branches you would like to cherry-pick your PR to, add labels of the following structure: `auto-backport-to-<targetBranch>`.
For example: `auto-backport-to-release/r10.15.0` to cherry-pick it to the branch `release/r10.15.0` or `auto-backport-to-release/r10.14.0` for the branch `release/r10.14.0`.

The feature is triggered by either merging a PR with the `auto-backport` label or by adding the `auto-backport` label to an already closed and merged PR.
In the latter case, ensure that you first add the labels containing the target branches and then finally the `auto-backport` label.
Otherwise the automation starts without any target branches.

#### Details

The PRs created by this GitHub action have their heading prefixed with `[GRAFT] [<targetBranch>]`. So, for example, for `release/r10.15.0` as the target branch and `[MTM-47706] fix publishing documentation` as the original PR heading, it results in `[GRAFT] [release/r1015.0.0] [MTM-47706] fix publishing documentation` as the heading for the backport PR.
In case an assignee was set for the original PR, the cherry-picked PRs also receive the same assignee. You must add reviewers manually after the cherry-picked PRs have been created.

The creation of cherry-picked PRs can take a few minutes.
If you are an assignee of the original PR, you receive an email notification once the cherry-picked PRs have been created.
The original PR is updated with a comment that contains links to the newly created cherry-picked PRs.

In case of a merge conflict while cherry-picking to a specific release branch, the branch will be skipped. Information on skipped branches is also included in the comment added to the original PR.
In that case you will have to take care of cherry-picking manually and resolve the conflicts.
This is not going to influence the other release branches as long as they do not have conflicts.

---
© Cumulocity GmbH  2022 + All rights reserved.
