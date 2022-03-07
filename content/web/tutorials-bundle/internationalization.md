---
title: Implementing internationalization
layout: redirect
weight: 70
---

 **Version:** 1013.57.0 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

### Introduction

{{< product-c8y-iot >}} provides integrated tools that allow you to translate your content. It is based on the `ngx-translate` library. The `CoreModule` exports a preconfigured instance of this tool, with {{< product-c8y-iot >}} already being integrated. Refer to the [ngx-translate Github page](https://github.com/ngx-translate/core) for more information.

For this tutorial, create a new application with minimal configuration.

#### Configuration of a fresh environment

Start with creating a new application.

Execute the following commands:

```
c8ycli new my-app-i18n
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
    import { TextTranslationComponent } from "./text-translation.component";

    /**
     * Angular Routes.
     * Within this array at least path (url) and components are linked.
     */
    const routes: Routes = [
        {
            path: 'translations',
            component: TextTranslationComponent
        },
    ];

    const translations = new NavigatorNode({
        label: gettext('Translations'),
        icon: 'star',
        path: '/translations',
        routerLinkExact: false
    });

    export const navigatorNodes = {
        provide: HOOK_NAVIGATOR_NODES,
        useValue: { get: () => translations },
        multi: true
    };

    @NgModule({
        declarations: [TextTranslationComponent],
        imports: [RouterModule.forChild(routes), CoreModule],
        providers: [navigatorNodes]
    })
    export class TranslationsModule {}
    ```

* `translations/translate-text.component.ts`:

    ```ts
    import { Component } from '@angular/core';

    @Component({
        selector: 'text-translation',
        templateUrl: './text-translation.component.html'
    })
    export class TextTranslationComponent {
    }
    ```

* `translations/translate-text.component.html`:

    ```html
    Index
    ```

Now you can run the application. When starting, the application renders a blank page that contains the `Index`.

### Extending default translations

{{< product-c8y-iot >}} comes with a wide range of content that is already translated in multiple languages. These translations can be extended.

1. Create the new file `translations/locales/de.po`:

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

>**Info:** If the application is set to German, the user settings menu will show **User settings (de)** instead of the default **Benutzereinstellungen**.

This allows you to add new or to modify existing translations. Doing so does not disable default translations as a new file will extend existing translations.

You can retrieve the default translation *.po-files* from *./my-app-i18n/node_modules/@c8y/ngx-components/locales*. To edit these files copy them to your *locales* directory.

### Adding new languages

To define new languages that are not supported by default, follow the example below. This examples defines the translation in Italian.

1. Create the new translation file `translations/locales/it.po`:

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

    msgid "Mr. Smith is {age} years old"
    msgstr "Mr. Smith is {age} years old (it)"
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
              "nativeName": "Italian"
            }
          }
        },
        "cli": {}
      }
    }
    ```

3. Restart the server and the application.

Now you can select Italian, while your user settings are translated to **User settings (it)**, as defined in the `it.po` file.

### Basic text translation

There are multiple ways to translate content. The most common is the `translate` pipe and directive, which is explained in the following section.

#### Translate pipe

This is the most common way to translate content that is present in your HTML views. The following example is for a translation in Italian.

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

The result is: `msgstr "Sig. Smith ha 40 anni"`.

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

Similar to the example regarding the `translate` pipe, the content will be translated to `User settings (it)`.

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

In this example you must use Angular's `ngNonBindable` directive in addition to the `translate` directive.
This way, Angular will ignore curly braces in order to be interpreted by the translation service.

Furthermore, you can translate entire HTML code blocks, as shown in the examples below:

* `translations/locales/it.po`:

    ```po
    msgid "Read about Your current language in <a href="#guide">our guide</a>"
    msgstr "Read about Your italian language in <a href="#italian-guide">our italian guide</a>"
    ```

* `translations/text-translation.component.html`:

    ```html
    <div class="card">
        <div class="card-header separator">
            <h4 class="card-title">Translate directive with parameters example</h4>
        </div>
        <div class="card-block">
            <span class="m-r-4" translate ngNonBindable
            >Read about Your current language in <a href="#guide">our guide</a></span
            >
        </div>
    </div>
    ```

In general we recommend you to have `ngNonBindable` present while translating HTML blocks, because the Angular compiler might otherwise interfere with the translation service.

#### Translating content of variables

Your content can be located in TypeScript code files. For example, in a file like `translations/text-translation.component.ts`, as shown in the example below:

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'text-translation',
    templateUrl: './text-translation.component.html'
})
export class TextTranslationComponent {
 variableWithText = 'Text inside variable that is translatable';
}
```

It is possible to translate such variable, as shown below:

```html
{{variableWithText | translate}}
```

Wrap such strings with the `gettext` function. This will enable automatic extraction of the strings to your *.po file*. This also indicates that such strings are meant to be translated, as shown in the example below for `translations/text-translation.component.ts`:

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

See [Extracting translations using the locale extract tool](#extracting-translations-using-locale-extract-tool) for information about translation extraction.

#### Manual translation by TypeScript code

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
    Translating content using the `instant` method, requires you to keep track of language changes. Make sure that if a user changes the language, the text is translated again. See the example below for reference:
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

#### Extracting translations using the locale-extract tool

The `c8ycli locale-extract` command automatically copies all translations from the `node_modules/@c8y/locales.` This makes it easier to edit and add new translations.
After using this command, the directory *./locales* will contain all available translations.

By default, a new directory `locales` will be created in the root directory. It will include all available languages with their respective current translations.
You can edit and copy these files to the *translations/locales* directory as well as adding necessary imports.

The file `locales.pot` contains all strings that were marked with the `translate` pipe, the `translate` directive or the `gettext` method.
You can append these values to your language files, and add the necessary translations.

#### Translating dates

In order to display dates with correct localization rules., use the Angular `date` pipe, as shown in the example below:

```ts
currentDate = new Date();
```


```html
<div class="card">
  <div class="card-header separator">
    <h4 class="card-title">Angular pipe example</h4>
  </div>
  <div class="card-block">This date will be translated: {{ currentDate | date: 'medium' }}.</div>
</div>
```

Alternatively, use the `c8yDate` pipe to return dates in `medium` format. This also works with values outside of the by ECMAScript supported range:

```html
<div class="card">
  <div class="card-header separator">
    <h4 class="card-title">Cumulocity pipe example</h4>
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
