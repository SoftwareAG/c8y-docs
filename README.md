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

Before adding a new section, check if the content fit in any of the available sections:

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

A new section is defined by a markdown file with the following front matter:

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

Grab the icon classes in the [styleguide](http://styleguide.cumulocity.com/icons/)

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
# add optional content as markdown
Cumulocity gives you very fast visibility and control over your remote assets, be these houses, cars, machines or any other assets that you need to manage.
```

If you're looking to have a short page without anchors, you're good to go, but if you want to add multiple subsections with anchors then proceed to the next step.

When adding multiple subsections, the content provided in this file will be rendered as a lead (text slightly larger) in the top of the page.

### 4. Add blocks of content with anchors to a page

To display multiple blocks of content and provide anchor links to display in the navigator, you'll have to follow these steps:

1. add a directory with the exact same name as the markdown file adding the suffix `-bundle`, e.g. `introduction-bundle`.

&nbsp;

2. Add a `index.html` file into the new directory with the following front matter:

```yaml
---
title: Introduction # not important as we won't use it, but we need the title
headless: true # states that all content inside this directory is just a resource to be used in another page
---
```

&nbsp;
3. Add a markdown file for each block of content with the following front matter:

```yaml
---
title: Overview # will be used as anchor, i.e. guides/users-guide/introduction/#overview
weight: 10 # to set the position in the page
---

## Add content as markdown or HTML

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

Redirects must be processed through aliases. Add aliases as an array, and make sure to remove `/guides` out of the url. Check the folowing example:

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

Cumulocity provides documentation for multiple releases, for that you'll have to create a release branch for every public release, e.g. `release/r10.5.0-GA`. When creating these branches follow the next steps:
- Create the branch following the same pattern: `release/r[version number]-GA`

- Edit the `config.toml` file and append the version number to the base url, e.g.: `baseURL = "https://cumulocity.com/guides/10.5.0"`
- Still on `config.toml` change the `guidesRedirect` to target the about page on the release, e.g.: `guidesRedirect = "https://cumulocity.com/guides/10.5.0/welcome/intro-documentation/"`
- Add the file `properties.json` adding the name and the long name for the release version, e.g.: ```{
  "name":"10.5.0",
  "longname": "Release 10.5.0 (GA)"
}```
- Deploy using the jenkins task `Deploy-c8y-docs-manual-release` and provide the release version
- Deploy the `default` branch using the jenkins task `Deploy-c8y-docs`  to regenerate the version dropdown links

## Release switch

When a new release version is added to the release dropdown menu on https://cumulocity.com/guides/ and replaces the standard URL, there are a couple of things to do.

### Alter the deployment Python script

Update the `blacklist` variable in the method `readProperties` in the [deployment Python script](https://github.softwareag.com/IOTA/c8y-jenkins-docker/blob/develop/hugo/docsRepoScanner.py) according to your intended changes.

For example, when version 10.13.0 of the Cumulocity IoT documentation replaces 10.11.0 on the standard URL, thus deprecating version 10.7.0, the `blacklist` changes from:

```python
        blacklist = ["releasenotes", "10.4.6", "10.5.0", "10.5.7", "10.6.0", "10.6.6", "10.3.0", "10.14.0", "10.15.0"]
```

to:

```python
        blacklist = ["releasenotes", "10.4.6", "10.5.0", "10.5.7", "10.6.0", "10.6.6", "10.7.0", "10.14.0", "10.15.0"]
```

The change is actually two steps:

* Version 10.7.0 is added to the `blacklist`, as it's no longer supposed to show up in the release dropdown
* Version 10.13.0 is removed from the blacklist, as it is supposed to show up in the release drowdown from now on

Merge this change to the develop branch of `c8y-jenkins-docker`, then run the [Jenkins job](https://jenkins.dev.c8y.io/view/C8Y-TOOLS/job/cumulocity-docker-images-rebuild/) to update the script.

### (Optional) Add a preview banner

If your new release is a preview version at first, add a preview banner by adding the following JavaScript snippet to `themes/c8y-docs/static/js/main.js` in the `.done` function of the `$.getJSON` statement, below the second `for`-loop and in the respective release branch:

```javascript
        if (true) {
          offset = 45;
          $('<div/>', {
            id: 'preview-banner',
            style: 'position: fixed; top: 0; left: 0; width: 100%; background-color: #fff794; height: ' + offset + 'px; padding: 10px 5px 5px 5px; z-index: 50;'
          }).prependTo('body');
          $('<p style="text-align: center; vertical-align: center;">This is a preview of the documentation for the Cumulocity IoT ' + v + ' release that will soon be publicly available.</p>').appendTo('#preview-banner');
          $('.main-top-bar').css('top', offset);
          $('.main-nav.navbar').css('top', offset);
          $('.dropdown.version').css('top', (offset + 10));
        }
```

If you decide to remove the banner at a later time, it suffices to change the boolean value from `true` to `false`.

### (Optional) Add a deprecation banner

If you remove an old release branch from the release dropdown, you can add a deprecation banner that will show up when a user navigates to the old URL which remains on the server.

To add the banner, add the following JavaScript snippet to `themes/c8y-docs/static/js/main.js` in the `.done` function of the `$.getJSON` statement, inside the scope of the `if`-statement `if (vs.indexOf(v) < 0)` and in the respective release branch:

```javascript
          offset = 45;

          $('<div/>', {
            id: 'deprecation-banner',
            style: 'position: fixed; top: 0; left: 0; width: 100%; background-color: #ff9301; height: ' + offset + 'px; padding: 10px 5px 5px 5px; z-index: 50;'
          }).prependTo('body');

          backURL = prefix + suffix;

          $('<p style="text-align: center; vertical-align: center;">This documentation refers to a Cumulocity IoT release that is no longer maintained (version ' + v + '). Click <a href="' + backURL + '">here</a> to switch to the latest version.</p>').appendTo('#deprecation-banner');

          $('.main-top-bar').css('top', offset);
          $('.main-nav.navbar').css('top', offset);
```

### Change the baseURL fields

Set the `baseURL` field inside your `config.toml` file of your new branch which will be the standard URL to `"https://cumulocity.com/guides"`.
In the branch that was previously the standard URL, set the this field to `"https://cumulocity.com/guides/[RELEASE_NUMBER]"`.

---
© Cumulocity GmbH  2019 + All rights reserved.
