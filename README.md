# Cumulocity Guides website
##### Built with [DocPad](http://docpad.org)


## Structure

The Cumulocity Guides website arquitecture has the following structure:
* Section (e.g. *<http://cumulocity.com/guides/user-guide>*)
  * Subsection - renders as a single page (e.g. *<http://cumulocity.com/guides/user-guide/overview>*)
    * Anchor section - anchor tag in the subsection page (e.g. *<http://cumulocity.com/guides/user-guide/overview#user-settings>*) 



Now let's take a look on how to build up this structure.


### 1. Add a new section
Before adding a new section, check if the content you plan to add doesn't fit in any of the available sections:

* Concepts guide
* User guide
* Handbuch *(user guide - German version)*
* CEL analytics guide
* Apama analytics guide
* Device guides
* Reference guide
* REST developer's guide
* MQTT developer's guide
* Java developer's guide
* Web developer's guide
* C++ developer's guide

To insert a new section, add it in the `docpad.coffee` configuration file under ```docpadConfig.templateData.site.sections``` with the following format:
```json 
{ 
  title: 'Section title', 
  folder: 'folder-path', // don't forget to start with 'guides/'
  slug: 'section-slug', // will be used for url
  icon: 'c8y-icon c8y-icon-c8y-engine', // icon to diplay in the homepage and section selector
  description: 'Section description' // used in the homepage
}
```
#### 1.1 Add the section root directory
All guides are stored in ```src/render/guides/```. To add a new section, create a directory here and name it with the section slug

#### 1.2 Add a subsection
Inside the newly created directory create a file with the subsection slug and extensions — e.g. *overview.html.md* (make sure to always add html as an extension, if you're writing in markdown, add `.md` in the end)

This file should contain metadata in the following format:
```markdown
---
title: Section title
order: 10
layout: layout-type
---
```
Title is obvious, order is for ordering the subsections, as for layout there are two possible use cases:
1. Short content
2. Long content with several anchors

For option 1, simply set `layout: standalone` and add content in markdown or HTML - this will add a navigator link

For option 2, you'll have to set `layout: subsections` and add a `collection` property to the metadata, for example:
```markdown
---
title: Section title
order: 10
layout: subsections
collection: 'guides/mysection/my_subsection'
---
```

Basically you're using this page to display all documents stored in the path defined in `collection` - this will add a navigator link with a collapsible page navigation.

  

#### 1.3 Add blocks of content to a page
Now that we set our subsection's layout as subsections and collection as a path, we will have to create the directory and start adding as many blocks of content as needed. Simply add in the directory files in HTML / markdown with the following metadata:
```markdown
---
title: content block title
order: 10
layout: redirect
---
```
The property `layout`must be set to `redirect` to ensure that any link for this file will be redirected to the parent page. The file name will be used as an anchor to allow page navigation and will be added as an anchor link in the section in navigator.



1.4 Add media
Media should be added to `src/static/guides/images/`. Add a new directory if none of the available is suited.
To display the images in your pages, you'll have to add the relative path starting with `/guides/images/…`.



## Redirects
There's a `redirects.coffee`file in the root of the project that manages all the redirects of the site, when adding a new section, don't forget to add a redirect for the section's root path, e.g. `'guides/my_new_section':'guides/my_new_section/overview'`

### Broken links
Add redirects to broken links in `redirects.coffee`.






&nbsp;


---
&copy; Cumulocity GmbH  2018 + All rights reserved.