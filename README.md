# Cumulocity Guides website
##### Built with [DocPad](http://docpad.org)


## Structure

The Cumulocity Guides website arquitecture has the following structure:
* Section (e.g. *cumulocity.com/guides/user-guide*)
  * Subsection - renders as a single page (e.g. *cumulocity.com/guides/user-guide/overview*)
    * Anchor section - anchor tag in the subsection page (e.g. *cumulocity.com/guides/user-guide/overview#user-settings*) 



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
Inside the newly created directory create a file with the subsection slug and extensions (e.g. *overview.html.md*)
This file should contain metadata in the following format:
```markdown
---
title: Section title
layout: layout-type
order: 10
---
```
Order is used to order the subsections accordingly





## License
Copyright &copy; 2018+ All rights reserved.