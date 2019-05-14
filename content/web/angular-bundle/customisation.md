---
title: Branding and language customisation
layout: redirect
weight: 70
---

Using [application options](#application-options) each tenant can costumise the look and feel of the built-in applications as well as adding or replacing the languages available in the applications.
As description in the [application options](#application-options) the underlying mechanism is static hosted web application.

For this tutorial tutorial we are going to publishing 2 web applications `public-options` where the json file containing the configuration will be stored and `ui-assets` where any needed assets will be hosted: images, favicon, translation files.

For deploying we are going to use the nodejs `@c8y/cli` that can be installed with:

```
npm install -g @c8y/cli
```

## Download or clone the initial repo

For your convenience you can download or clone the repository available at https://github.com/Cumulocity/ui-customisation where you can find an example for a branding and adding a new language.

```
git clone https://github.com/Cumulocity/distribution
```

Inside this folder you can find two other folders:

```
public-options
ui-assets
```

## Branding options

Open the file `public-options/options.json` and change the sub properties of `brandingCssVars`.
These properties will be converted into [CSS custom properties](#css-custom-properties) at runtime.

Please note that the properties `brand-logo-img` and `navigator-platform-logo` are both urls so the corresponding files must be placed inside the folder `ui-assets`.

To change the favicon edit the property `faviconUrl` and/or add the corresponding file inside the `ui-assets` folder.

To change the browser window title change the property `globalTitle`.

If these configurations are not enough you can still add a a list of urls to the property `extraCssUrls` and load extra css at runtime:

```json
{
  "extraCssUrls": [
    "/apps/ui-assets/extra.css"
  ]
}
```

## Languages

The platform UI strings used for internationalisation are stored in [gettext](https://en.wikipedia.org/wiki/Gettext).
So if you wish to add new a language to the platform you must a piece of software adequate for editing these files, for example [poedit](https://poedit.net/).

Each translated catalog is loaded at runtime in a json format. To convert .po (gettext) files into .json files we rely on `@c8y/cli` installed during the first step.

To add your own translations:

* Download the the string catalogue from https://unpkg.com/@c8y/ngx-components@1004.0.6/locales/de.po (changing the version to whatever version you desire)
* Load the file in your prefered .po file editor and translate each string to the appropriate language and save that file. Repeat the process to as many languages as you like.
* Transform the newly created .po file into a .json file using the `c8ycli`

```
c8ycli locale-compile path/to/language.po
```

* Copy the generated .json file into `ui-assets` folder
* Update the languages fragment in `public-options/options.json`

```
languages?: {
  [langCode: string]: {
    name: string;
    nativeName: string;
    url: string;
  }
}
```

In the example you downloaded above you can find an example of a russian translation, which look like this:

```
"languages": {
  "ru": {
    "name": "Russian",
    "nativeName": "русский язык",
    "url": "/apps/public/ui-assets/ru.json"
  }
}`
```

## Deploying

Inside the folder that contains both `public-options`and `ui-assets` run the command:

```
c8ycli deploy ui-options ui-assets
```

Fill in your tenant / instance information and the applications will be deployed and made available to that specific tennat and it's subtenants.

Note that for performance reasons the options are cached, so you need to refresh the applications twice to actually experience the changes.




