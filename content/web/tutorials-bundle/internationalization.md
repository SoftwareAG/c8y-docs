---
title: Implementing internationalization
layout: redirect
weight: 70
---

 **Version:** 1013.0.63 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

### Introduction

{{< product-c8y-iot >}} provides integrated tools that allow you to translate your content. It is based on the `ngx-translate` library. The `CoreModule` exports a preconfigured instance of this tool, with {{< product-c8y-iot >}} already being integrated. Refer to the [ngx-translate Github page](https://github.com/ngx-translate/core) for more information.

For this tutorial, create a new application with minimal configuration.

#### Setting up a new application

Start with creating a new application.

Execute the following commands:

```
c8ycli new my-app-i18n -a @c8y/apps@1013.0.63
cd my-app-i18n
npm install
```

After the application is successfully set up, create a new basic module that you can use to add and translate your content.

Create the following files:

* `translations/translations.module.ts`:

    ```ts
    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import {
        CoreModule,
        NavigatorNode,
        gettext,
        HOOK_NAVIGATOR_NODES
    } from '@c8y/ngx-components';
    import { TextTranslationComponent } from './text-translation.component';
 
    const routes: Routes = [
        {
            path: 'translations',
            component: TextTranslationComponent
        },
    ];

    const translationsNode = new NavigatorNode({
        label: gettext('Translations'),
        icon: 'star',
        path: '/translations',
        routerLinkExact: false
    });

    export const navigatorNodes = {
        provide: HOOK_NAVIGATOR_NODES,
        useValue: { get: () => translationsNode },
        multi: true
    };

    @NgModule({
        declarations: [TextTranslationComponent],
        imports: [RouterModule.forChild(routes), CoreModule],
        providers: [navigatorNodes]
    })
    export class TranslationsModule {}
    ```

* `translations/text-translation.component.ts`:

    ```ts
    import { Component } from '@angular/core';

    @Component({
        selector: 'text-translation',
        templateUrl: './text-translation.component.html'
    })
    export class TextTranslationComponent {
    }
    ```

* `translations/text-translation.component.html`:

    ```html
    Index
    ```

Import `TranslationsModule` to the application's module:

* `app.module.ts`

    ```ts
    import { NgModule } from '@angular/core';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { RouterModule as ngRouterModule } from '@angular/router';
    import { CoreModule, BootstrapComponent, RouterModule } from '@c8y/ngx-components';
    import { TranslationsModule } from "./translations/translations.module";        // <--
    
    @NgModule({
        imports: [
            BrowserAnimationsModule,
            RouterModule.forRoot(),
            ngRouterModule.forRoot([], { enableTracing: false, useHash: true }),
            CoreModule.forRoot(),
            TranslationsModule                                                      // <--
        ],
        bootstrap: [BootstrapComponent]
    })
    export class AppModule {}    
    ```

Now you can run the application.
When starting, the application displays a single **Translations** menu item, which renders a blank page with the text: `Index`.

### Extending default translations

{{< product-c8y-iot >}} comes with a wide range of content that is already translated into multiple languages. These translations can be extended by adding a custom *.po file for a language. This allows you for both adding new translations and modifying the existing ones.

**Example** 

Let's say you want to override one of the existing strings, e.g. "User settings", to display "User settings (de)" instead of the default "Benutzereinstellungen". This can be achieved by the following steps:

1. Create a new file `translations/locales/de.po`:

    ```
    msgid ""
    msgstr ""
    "Project-Id-Version: c8yui.core\n"
    "Report-Msgid-Bugs-To: \n"
    "POT-Creation-Date: \n"
    "PO-Revision-Date: \n"
    "Last-Translator: \n"
    "Language: de\n"
    "Language-Team: \n"
    "Content-Type: text/plain; charset=UTF-8\n"
    "Content-Transfer-Encoding: 8bit\n"
    "Plural-Forms: nplurals=2; plural=(n != 1);\n"


    msgid "User settings"
    msgstr "User settings (de)"
    ```

2. Open the `index.ts` file and import the newly created file as shown in the example below:

    ```ts
    (...)
    import { AppModule } from './app.module';

    import './translations/locales/de.po';

    declare const __MODE__: string;
    (...)
    ```

3. Restart the server and the application.

>**Info:** You can find *.po files with default translations under *./my-app-i18n/node_modules/@c8y/ngx-components/locales*. To edit these files copy them to your *locales* directory.

### Adding new languages

To define new languages that are not supported by default, follow the example below. This example adds an Italian translation.

1. Create a new translation file `translations/locales/it.po`:

    ```
    msgid ""
    msgstr ""
    "Project-Id-Version: c8yui.core\n"
    "Report-Msgid-Bugs-To: \n"
    "POT-Creation-Date: \n"
    "PO-Revision-Date: \n"
    "Last-Translator: \n"
    "Language: de\n"
    "Language-Team: \n"
    "Content-Type: text/plain; charset=UTF-8\n"
    "Content-Transfer-Encoding: 8bit\n"
    "Plural-Forms: nplurals=2; plural=(n != 1);\n"


    msgid "User settings"
    msgstr "User settings (it)"

    msgid "Mr. Smith is  {{ age }} years old"
    msgstr "Mr. Smith is  {{ age }} years old (it)"
    ```

2. Open the `package.json` file, and modify the `c8y.application` object as shown below:

    ```json
    {
      (...)
      "c8y": {
        "application": {
          "name": "my-app-i18n",
          "contextPath": "my-app-i18n",
          "key": "my-app-i18n-application-key",
          "dynamicOptionsUrl": "/apps/public/public-options/options.json",
          "languages": {
            "it": {
              "name": "Italian",
              "nativeName": "Italiano"
            }
          }
        },
        "cli": {}
      }
    }
    ```

3. Restart the server and the application.

Now you can select Italian and see that user setting's label is translated as **User settings (it)**, as defined in the `it.po` file.

### Basic text translation

There are multiple ways to translate content. The most common is the `translate` pipe and directive, which is explained in the following section.

#### Translate pipe

This is the most common way to translate content that is present in your HTML views. The following example will work assuming that you added a custom it.po file as described in the previous section.  

In your `translations/text-translation.component.html` file, add:

```html
<div>{{'User settings' | translate}}</div>
```

If your language is set to Italian, reloading the application will render the content as `User settings (it)`.

The translate pipe allows to set different parameters, as shown in the example for `translations/locales/it.po`:

```
msgid "Mr. Smith is {{ age }} years old"
msgstr "Sig. Smith ha {{ age }} anni"
```
`translations/text-translation.component.html`
```
<div>{{ "Mr. Smith is \{\{ age \}\} years old" | translate:{age: 40} }}</div>
```

The result is: `"Sig. Smith ha 40 anni"`.

>**Important:** The string templates must have the curly braces escaped in order to avoid compilation errors.

#### Translate directive

Another way to translate content is to use the attribute `translate`, as shown in the example for `translations/text-translation.component.html`:

```html
<div class="card">
    <div class="card-header separator">
        <h4 class="card-title">Translate directive example</h4>
    </div>
    <div class="card-block">
        This sentence will be translated:
        <span class="m-r-4" translate
        >User settings</span
        >
    </div>
</div>
```

Similarly to the example with `translate` pipe, the content of the `span` will be translated to `User settings (it)`.

You can use parameters with the `translate` directive in the following way:

* `translations/locales/it.po`:

    ```
    msgid "{{ filteredItemsCount }} of {{ allItemsCount }} items."
    msgstr "{{ filteredItemsCount }} of {{ allItemsCount }} items. (it)"

    ```

* `translations/text-translation.component.html`:

    ```html

    <div class="card">
        <div class="card-header separator">
            <h4 class="card-title">Translate directive with parameters example</h4>
        </div>
        <div class="card-block">
            This sentence will be translated:
            <span class="m-r-4" ngNonBindable translate [translateParams]="{filteredItemsCount: 10, allItemsCount: 100 }"
            >{{ filteredItemsCount }} of {{ allItemsCount }} items.</span
            >
        </div>
    </div>
    ```

In the example above, you must use Angular's `ngNonBindable` directive in addition to the `translate` directive, so that Angular ignores curly braces and lets the translation service to handle them.

Furthermore, you can translate entire HTML code blocks, as shown in the example below:

* `translations/locales/it.po`:

    ```po
    msgid "Read about your current language in <a href="#guide">our guide</a>"
    msgstr "Read about your italian language in <a href="#italian-guide">our italian guide</a>"
    ```

* `translations/text-translation.component.html`:

    ```html
    <div class="card">
        <div class="card-header separator">
            <h4 class="card-title">Translate directive used on html code</h4>
        </div>
        <div class="card-block">
            <span class="m-r-4" translate ngNonBindable
            >Read about your current language in <a href="#guide">our guide</a></span
            >
        </div>
    </div>
    ```

>**Important:** In general we recommend you to have `ngNonBindable` present while translating HTML blocks, because the Angular compiler might otherwise interfere with the translation service.

#### Translating content of variables

Your content can be located in TypeScript as string variables
It is possible to translate such variable, as in example below:

`translations/text-translation.component.ts`
```ts
import { Component } from '@angular/core';
import { gettext } from "@c8y/ngx-components";

@Component({
 selector: 'text-translation',
 templateUrl: './text-translation.component.html'
})
export class TextTranslationComponent {
 variableWithText = gettext('Text inside variable that is translatable');
}
```
`translations/text-translation.component.html`
```html
<div class="card">
    <div class="card-header separator">
        <h4 class="card-title">Translate pipe on variable example</h4>
    </div>
    <div class="card-block">
        <span class="m-r-4"
        >{{variableWithText|translate}}</span
        >
    </div>
</div>
```
>**Info:** Wrap such strings with the `gettext` function. This will enable automatic extraction of the strings to */locales/locales.pot file*. This also indicates that such strings are meant to be translated.
>
>See [Extracting translations using the locale extract tool](#extracting-translations-using-locale-extract-tool) for information about extracting strings for translation.

#### Manual translation in TypeScript code

It is also possible to translate strings manually in TypeScript code. To do so, inject the `TranslateService` to the component and use the `translateService.instant` method to translate the content:

* `translations/text-translation.component.ts`:

    ```ts
    import { Component } from '@angular/core';
    import { gettext } from "@c8y/ngx-components";
    import { TranslateService } from "@ngx-translate/core";

    @Component({
     selector: 'text-translation',
     templateUrl: './text-translation.component.html'
    })
    export class TextTranslationComponent {
     variableWithText = gettext('Text inside variable that is translatable');

     translatedVariableWithText;

     constructor(private translateService: TranslateService) {
      this.translatedVariableWithText = this.translateService.instant(this.variableWithText);
     }
    }
    ```

* `translations/text-translation.component.html`:

    ```html

    <div class="card">
        <div class="card-header separator">
            <h4 class="card-title">Translated in typescript example</h4>
        </div>
        <div class="card-block">
            <span class="m-r-4"
            >{{translatedVariableWithText}}</span
            >
        </div>
    </div>
    ```
Translating content using the `instant` method, has a flaw that given translation will not be updated upon language change.
In order to achieve this, it is required to keep track of language changes.
Make sure that if a user changes the language, the text is translated again. See the example below for reference:
    ```ts
        this.translateService.onLangChange.subscribe(()=>{
            this.translatedVariableWithText = this.translateService.instant(this.variableWithText);
    })
    ```

Alternatively, use the `stream` method. This will provide an `Observable` object that will output a new value if the language is changed by the user.
See the example below for reference:

* `translations/text-translation.component.ts`

    ```ts
    import { Component } from '@angular/core';
    import { gettext } from "@c8y/ngx-components";
    import {TranslateService} from "@ngx-translate/core";

    @Component({
     selector: 'text-translation',
     templateUrl: './text-translation.component.html'
    })
    export class TextTranslationComponent {
    (...)

     textStream
     translatedVariableStream

     constructor(private translateService: TranslateService) {
      (...)

      this.textStream = this.translateService.stream(this.variableWithText)
      this.textStream.subscribe(
              (text) => {
               this.translatedVariableStream = text
              }
      )


     }
    }

    ```

* `translations/text-translation.component.html`:

    ```html
    <div class="card">
        <div class="card-header separator">
            <h4 class="card-title">Stream examples:</h4>
        </div>
        <div class="card-block">
            <div class="m-r-4">This is translated by `stream` using async pipe: {{textStream|async}}</div>
            <div class="m-r-4">This is translated by subscribing `stream` method: {{translatedVariableStream}}</div>
        </div>
    </div>
    ```

>**Important:** All subscriptions need to be unsubscribed in order to prevent memory leaks. This can be avoided by using Angular's `async` pipe on observables instead.

#### Extracting strings for translation using the locale-extract tool

You can use the `c8ycli locale-extract` command to extract strings from:

- `node_modules/@c8y/locales` which contains all the default strings and translations, which makes it easier to edit or add new ones.
- `.` which contains your custom modules, components, templates, services and more.

After using the command, a new directory `./locales` will be created if it doesn't exist yet.
It contains:

- Files with the `.po` extension for all available languages. You can edit and copy these files to the *./translations/locales* directory and add necessary imports.
- The `locales.pot` file which contains all strings that were marked with the `translate` pipe, the `translate` directive or the `gettext` method in your own source code under `.`. That means it does not include any default strings from `node_modules/@c8y/locales`. You can append these values to your custom `.po` files and translate them.

#### Translating dates

In order to display dates according to current locale settings, use the Angular `date` pipe, as shown in the example below:

```ts
currentDate = new Date();
```


```html
<div class="card">
  <div class="card-header separator">
    <h4 class="card-title">Angular date pipe example</h4>
  </div>
  <div class="card-block">This date will be translated: {{ currentDate | date: 'medium' }}.</div>
</div>
```

Alternatively, use the `c8yDate` pipe to return dates in `medium` format. This also works with values outside of range supported by ECMAScript:

```html
<div class="card">
  <div class="card-header separator">
    <h4 class="card-title">Cumulocity date pipe example</h4>
  </div>
  <div class="card-block">
    <div>This date will be translated: {{ currentDate | c8yDate }}.</div>
    <div>
      This date exceeding the range supported by ECMAScript will be translated:
      {{ 8640000000000000 + 1 | c8yDate }}.
    </div>
  </div>
</div>
```
