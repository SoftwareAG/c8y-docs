---
title: Implementing internationalization
layout: redirect
weight: 90
---

 **Version:** 1016.0.321 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

### Introduction

{{< product-c8y-iot >}} provides an integrated tool which allows you to translate your content. This tool is based on the ngx-translate library. The `CoreModule` exports a preconfigured instance of this tool, with {{< product-c8y-iot >}} already being integrated. Refer to the [ngx-translate Github page](https://github.com/ngx-translate/core) for more information.

For this tutorial, create a new application with minimal configuration.

#### Setting up a new application

Start with creating a new application based on version 1016.0.321 or higher, and based on the basic `application` project.

Execute the following commands:

```
c8ycli new my-app-i18n
cd my-app-i18n
npm install
```

After the application is set up, create a new basic module that you can use to add and translate your content.

Create the following files:

* *translations/translations.module.ts*:

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

* *translations/text-translation.component.ts*:

    ```ts
    import { Component } from '@angular/core';

    @Component({
      selector: 'text-translation',
      templateUrl: './text-translation.component.html'
    })
    export class TextTranslationComponent {}
    ```

* *translations/text-translation.component.html*:

    ```html
    Index
    ```

Import `TranslationsModule` to the application's module:

* *app.module.ts*:

    ```ts
    import { NgModule } from '@angular/core';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { RouterModule as ngRouterModule } from '@angular/router';
    import { CoreModule, BootstrapComponent, RouterModule } from '@c8y/ngx-components';
    import { TranslationsModule } from './translations/translations.module';    // <--

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
Initially, the application displays a single **Translations** menu item, which renders a blank page with the text: `Index`.

### Extending default translations

{{< product-c8y-iot >}} comes with a wide range of content that is already translated into multiple languages. These translations can be extended by adding a custom <i>*.po</i> file for a language. This allows for both adding new translations and modifying the existing ones.

**Example**

You can override one of the existing strings, for example, "User settings", to display "User settings (de)" instead of the default "Benutzereinstellungen", with the following steps:

1. Create a new file *translations/locales/de.po*:

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

2. Open the *index.ts* file and import the newly created file as shown below:

    ```ts
    (...)
    import { AppModule } from './app.module';

    import './translations/locales/de.po';

    declare const __MODE__: string;
    (...)
    ```

3. Restart the server and the application. Now you can select German and the **User settings** label is changed to **User settings (de)**, as defined in the *de.po* file.

{{< c8y-admon-info >}}
You can find `*.po` files with default translations under *node_modules/@c8y/ngx-components/locales*. To override these files, copy them to your *locales* directory and add an import statement to *index.ts* like the one for *de.po* above.
{{< /c8y-admon-info >}}

### Adding new languages

To define new languages which are not supported by default, follow the example below. It adds an Italian translation.

1. Create a new translation file *translations/locales/it.po*:

    ```
    msgid ""
    msgstr ""
    "Project-Id-Version: c8yui.core\n"
    "Report-Msgid-Bugs-To: \n"
    "POT-Creation-Date: \n"
    "PO-Revision-Date: \n"
    "Last-Translator: \n"
    "Language: it\n"
    "Language-Team: \n"
    "Content-Type: text/plain; charset=UTF-8\n"
    "Content-Transfer-Encoding: 8bit\n"
    "Plural-Forms: nplurals=2; plural=(n != 1);\n"


    msgid "User settings"
    msgstr "User settings (it)"
    ```

2. Open the *package.json* file, and modify the `c8y.application` object as shown below:

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

3. Import the new *it.po* file within *index.ts*:

    ```ts
    (...)
    import { AppModule } from './app.module';

    import './translations/locales/de.po';
    import './translations/locales/it.po'; // <--

    declare const __MODE__: string;
    (...)
    ```

4. Restart the server and the application.

Now you can select Italian and the **User settings** label is changed to **User settings (it)**, as defined in the *it.po* file.

### Basic text translation

There are multiple ways of translating content. The most common is the `translate` pipe and directive, which is explained in the following section.

#### Translate pipe

The `translate` pipe is the most common way to translate content that is present in your HTML views. The following example works assuming that you have added a custom *it.po* file as described in the previous section.  

In your *translations/text-translation.component.html* file, add:

```html
<div>{{ 'User settings' | translate }}</div>
```

If your language is set to Italian, reloading the application renders the content as **User settings (it)**.

The `translate` pipe allows you to include parameters in the translated strings.

* Add a new entry in *translations/locales/it.po*:
    ```
    msgid "Mr. Smith is {{ age }} years old"
    msgstr "Sig. Smith ha {{ age }} anni"
    ```

* *translations/text-translation.component.ts*:

    ```ts
    export class TextTranslationComponent {
      textWithParam = gettext('Mr. Smith is {{ age }} years old');
    }
    ```

* *translations/text-translation.component.html*:

    ```html
    <div>{{ textWithParam | translate:{ age: 40 } }}</div>
    ```

The result is: `"Sig. Smith ha 40 anni"`.

{{< c8y-admon-info >}}
If you put the text wrapped with `{{ ... }}` directly in the template, you must escape curly braces which are part of the text.

For example: `<div>{{ 'Mr. Smith is \{\{ age \}\} years old' | translate:{ age: 40 } }}</div>`

This avoids compilation issues. The string extraction tool does not support such cases currently and you must put such a string in `*.po` files yourself.
{{< /c8y-admon-info >}}

#### Translate directive

Another way of translating content is to use the attribute `translate`, as shown in the example for *translations/text-translation.component.html*:

```html
<div class="card">
  <div class="card-header separator">
    <h4 class="card-title">Translate directive example</h4>
  </div>
  <div class="card-block">
    This phrase will be translated:
    <span class="m-r-4" translate>User settings</span>
  </div>
</div>
```

Similar to the example with the `translate` pipe, the content of the `span` is translated to **User settings (it)**.

You can use parameters with the `translate` directive in the following way:

* *translations/locales/it.po*:

    ```
    msgid "{{ filteredItemsCount }} of {{ allItemsCount }} items."
    msgstr "{{ filteredItemsCount }} of {{ allItemsCount }} items. (it)"

    ```

* *translations/text-translation.component.html*:

    ```html
    <div class="card">
      <div class="card-header separator">
        <h4 class="card-title">Translate directive with parameters example</h4>
      </div>
      <div class="card-block">
        This sentence will be translated:
        <span class="m-r-4" ngNonBindable translate [translateParams]="{filteredItemsCount: 10, allItemsCount: 100 }">
          {{ filteredItemsCount }} of {{ allItemsCount }} items.
        </span>
      </div>
    </div>
    ```

In the example above, you must use Angular's `ngNonBindable` directive in addition to the `translate` directive, so that Angular ignores curly braces and lets the translation service handle them.

Furthermore, you can translate entire HTML code blocks, as shown in the example below:

* *translations/locales/it.po*:

    ```
    msgid "Read about your current language in <a href=\"#guide\">our guide</a>"
    msgstr "Read about your Italian language in <a href=\"#italian-guide\">our Italian guide</a>"
    ```

* *translations/text-translation.component.html*:

    ```html
    <div class="card">
      <div class="card-header separator">
        <h4 class="card-title">Translate directive used on html code</h4>
      </div>
      <div class="card-block">
        <span class="m-r-4" translate ngNonBindable>
          Read about your current language in <a href="#guide">our guide</a>
        </span>
      </div>
    </div>
    ```

{{< c8y-admon-important >}}
In general we recommend you to have `ngNonBindable` present while translating HTML blocks, because the Angular compiler might otherwise interfere with the translation service.
{{< /c8y-admon-important >}}

#### Translating content of variables

Your content can be located in TypeScript as string variables.
It is possible to translate such variables, as in the example below:

* *translations/text-translation.component.ts*:
    ```ts
    import { Component } from '@angular/core';
    import { gettext } from '@c8y/ngx-components';

    @Component({
      selector: 'text-translation',
      templateUrl: './text-translation.component.html'
    })
    export class TextTranslationComponent {
      variableWithText = gettext('Text inside variable that is translatable');
    }
    ```
* *translations/text-translation.component.html*:
    ```html
    <div class="card">
      <div class="card-header separator">
        <h4 class="card-title">
          Translate pipe on variable example
        </h4>
      </div>
      <div class="card-block">
        <span class="m-r-4">
          {{ variableWithText | translate }}
        </span>
      </div>
    </div>
    ```
* *translations/locales/it.po*:
    ```
    msgid "Text inside variable that is translatable"
    msgstr "Text inside variable that is translatable (it)"
    ```

{{< c8y-admon-info >}}
Wrap such strings with the `gettext` function. This enables automatic extraction of the strings to the *locales/locales.pot* file. This also indicates that such strings are meant to be translated.
See [Extracting strings for translation using the locale-extract tool](#extracting-strings-for-translation-using-the-locale-extract-tool) for information about extracting strings for translation.
{{< /c8y-admon-info >}}

#### Manual translation in TypeScript code

It is also possible to translate strings manually in TypeScript code.
To do so, inject the `TranslateService` into the component and use its `instant` method to translate the content:


* *translations/text-translation.component.ts*:

    ```ts
    import { Component } from '@angular/core';
    import { gettext } from '@c8y/ngx-components';
    import { TranslateService } from '@ngx-translate/core';

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

* *translations/text-translation.component.html*:

    ```html
    <div class="card">
      <div class="card-header separator">
        <h4 class="card-title">Translated in typescript example</h4>
      </div>
      <div class="card-block">
        <span class="m-r-4">
          {{ translatedVariableWithText }}
        </span>
      </div>
    </div>
    ```

Translating content using the `instant` method is a one-time operation, so the translation won't be updated if the user changes the language and decides not to reload the application.
If you want the translation to be updated in such a case, we recommend you to use the `stream` method instead.

* *translations/text-translation.component.ts*:

```ts
this.textStream = this.translateService.stream(this.variableWithText);
```

* *translations/text-translation.component.html*:

```html
{{ textStream | async }}
```

Alternatively, you can subscribe to the `onLangChange` event emitter and re-translate the text explicitly.

* *translations/text-translation.component.ts*:

```ts
this.translateService.onLangChange.subscribe(() => {
  this.translatedVariableWithText = this.translateService.instant(this.variableWithText);
});
```

{{< c8y-admon-important >}}
All subscriptions must be unsubscribed in order to prevent memory leaks. This can be avoided by using Angular's `async` pipe on observables instead.
{{< /c8y-admon-important >}}

#### Extracting strings for translation using the locale-extract tool

You can use the `c8ycli locale-extract` command to extract strings from:

- *node_modules/@c8y/locales* - which contains all the default strings and translations, which makes it easier to edit or add new ones.
- *.* - which contains your custom modules, components, templates, services and more.

After using the command, a new directory *./locales* will be created if it doesn't exist yet.
It contains:

- Files with the *.po* extension for all available languages. You can copy these files to the *./translations/locales* directory, add necessary imports, and edit the translations as needed.
- The *locales.pot* file which contains all strings that were marked with the `translate` pipe, the `translate` directive or the `gettext` method in your own source code. That means it does not include any default strings from *node_modules/@c8y/locales*. You can append these values to your custom `*.po` files and translate them.

#### Translating dates

In order to display dates according to the current locale settings, use the Angular `date` pipe, as shown in the example below:

* *translations/text-translation.component.ts*:
    ```ts
    export class TextTranslationComponent {
      currentDate = new Date();
    }
    ```

* *translations/text-translation.component.html*:
    ```html
    <div class="card">
      <div class="card-header separator">
        <h4 class="card-title">Angular date pipe example</h4>
      </div>
      <div class="card-block">This date will be translated: {{ currentDate | date: 'medium' }}.</div>
    </div>
    ```

Alternatively, use the `c8yDate` pipe to return dates in `medium` format. This also works with values outside of the range supported by ECMAScript:

* *translations/text-translation.component.html*:
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
