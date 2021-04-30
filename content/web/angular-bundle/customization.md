---
title: Branding and language customization
layout: redirect
weight: 70
---

Using [application options](#application-options), each tenant can customize the look and feel of built-in applications and add or replace the languages available in the applications. As described in [Application options](#application-options), the underlying mechanism is static hosted web application.

In this tutorial we are publishing 2 web applications:

* `public-options`, where the JSON file containing the configuration will be stored
* `ui-assets`, where any required assets will be hosted: images, favicon and translation files

For deploying we use the nodejs `@c8y/cli` that can be installed with the command:

```
npm install -g @c8y/cli
```

### Downloading or cloning the initial repository

For your convenience you can download or clone the repository available at [https://github.com/Cumulocity/ui-customization](https://github.com/Cumulocity/ui-customization), in which you can find an example for branding and for adding a new language.

```
git clone https://github.com/Cumulocity/ui-customization
```

Inside this folder you can find two other folders:

```
public-options
ui-assets
```

### Branding options

Edit the file *public-options/options.json* and change the sub-properties of `brandingCssVars`. These properties will be converted into [CSS custom properties](#css-custom-properties) at runtime.

Note that the properties `brand-logo-img` and `navigator-platform-logo` are both URLs. Therefore the corresponding files must be placed inside the folder *ui-assets*.

To change the favicon, edit the property `faviconUrl` and/or add the corresponding file inside the *ui-assets* folder.

To change the browser window title, change the property `globalTitle`.

If these configurations are not enough you can still add a list of URLs to the property `extraCssUrls` and load extra CSS at runtime:

```json
{
  "extraCssUrls": [
    "/apps/ui-assets/extra.css"
  ]
}
```

### Languages

The platform UI strings used for internationalization are stored in [gettext](https://en.wikipedia.org/wiki/Gettext). If you want to add a new language to the platform you need a software to edit these files, for example [Poedit](https://poedit.net/).

Each translated catalog is loaded at runtime in a JSON format. To convert .po (gettext) files into .json files we rely on `@c8y/cli` installed during the first step.

#### How to add your own translations

1. Download the string catalog from [@c8y/ngx-components@1004.0.6/locales/locales.pot](https://unpkg.com/@c8y/ngx-components@latest/locales/locales.pot) (starting from version 1004.0.6,`latest` can be replaced by your current used version).
2. Load the downloaded locales.pot template file in your preferred .pot file editor and create a new translation from it. Choose the target language of the translation, e.g. Afrikaans, and translate each string. Repeat the process for as many languages as you like.
The outcome of this step will be a .po catalog file for each language. Make sure to store these files in a safe place, as they will be useful when updating the strings in subsequent versions.
3. Transform the newly created .po file into a .json file using the `c8ycli`:

 ```
 c8ycli locale-compile path/to/language.po
 ```

4. Copy the generated .json file into the *ui-assets* folder.
5. Update the languages fragment in *public-options/options.json*.

```
languages?: {
  [langCode: string]: {
    name: string;
    nativeName: string;
    url: string;
  }
}
```

In the example provided in the repository to be downloaded you can find an example of a Russian translation which looks like this:

```json
"languages": {
  "ru": {
    "name": "Russian",
    "nativeName": "русский язык",
    "url": "/apps/public/ui-assets/ru.json"
  }
}
```

The imported language can be changed in the UI after login. To do so, click the User icon at the top right, select User settings from the menu and in the upcoming window select the language of your choice.

### Deploying

Inside the folder `ui-customization` that contains both `public-options`and `ui-assets` run the command:

```
c8ycli deploy public-options ui-assets
```

Fill in your tenant/instance information and the applications will be deployed and will be visible to that specific tenant and its subtenants.

>**Info**: For performance reasons the options are cached. Therefore the application must be refreshed twice to make the changes visible.
