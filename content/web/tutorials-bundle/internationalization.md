---
title: Implementing internationalization
layout: redirect
weight: 70
---

 **Version:** 1013.57.0 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

### Introduction

{{< product-c8y-iot >}} provides integrated tools that allow to translate your content.
It is based on the `ngx-translate` library.
The `CoreModule` exports a preconfigured instance of this tool, already integrated with {{< product-c8y-iot >}}.
Refer to the [ngx-translate github page](https://github.com/ngx-translate/core) for more information.

For this tutorial we will create a new application with a minimal configuration.

#### Configuration of a fresh environment

Start with creating a new application.
Execute the follwing commands:

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

Now you can run our application.
A blank page that contains `Index` is rendered.

### Extending default translations

{{< product-c8y-iot >}} comes with a wide range of content that is already translated in multiple languages.
These translations can be extended.

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

2. Open the `index.ts` file and import the newly created file like so:

    ```ts
    (...)
    import { AppModule } from './app.module';

    import './translations/locales/de.po';

    declare const __MODE__: string;
    (...)
    ```

3. Restart your server and application.

If the application is set to German language, the user settings menu will show **User settings (de)** instead of the default **Benutzereinstellungen**.

This way you can add new or modify existing translations.
Note that doing so does not disable default translations.
A new file will extend existing translations.

You can also retrieve default translation .po files from *./my-app-i18n/node_modules/@c8y/ngx-components/locales*.
These files can be copied to your *locales* directory, and then edited.

### Adding new languages

It is possible to define new languages that are not supported by default.
The example below introduces Italian language.

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

2. Open the `package.json` file, and modify the `c8y.application` object like so:

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

It is now possible to select the Italian language, and your user settings are translated to **User settings (it)**, as defined in the `it.po` file.

### Basic text translation

There are multiple ways to translate content.
The most common is the `translate` pipe and directive.

#### Translate pipe

This is the most common way to translate content that is present in your HTML views.

In your `translations/text-translation.component.html` file, add:

```html
<div>{{'User settings' | translate}}</div>
```

If your language is set to italian, reloading the application will render the content as `User settings (it)`.

The translate pipe also allows parameters, for example in `translations/locales/it.po`:

```
msgid "Mr. Smith is {{ age }} years old"
msgstr "Sig. Smith ha {{ age }} anni"
```
`translations/text-translation.component.html`
```
<div>{{ "Mr. Smith is \{\{ age \}\} years old" | translate:{age: 40} }}</div>
```

The result is: `msgstr "Sig. Smith ha 40 anni"`.
Note that the string templates must have their parentheses escaped in order to avoid compilation errors.

#### Translate directive

Another way to translate content is to use the attribute `translate`, for example in `translations/text-translation.component.html`:

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

Similar to the translate pipe, the content will be translated to `User settings (it)`.

You can use parameters with the translate directive in the following way:

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
This way angular will ignore parentheses, so they can be interpreted by the translation service.

It is possible to translate entire HTML code blocks:

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

We recommend you to have `ngNonBindable` present while translating HTML blocks because otherwise the Angular compiler might interfere with the translation service.

#### Translating content of variables

Your content may be located in TypeScript code files, for example in a file like `translations/text-translation.component.ts`:

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

It is possible to translate such variable like so:

```html
{{variableWithText | translate}}
```

It is best to wrap such strings with the `gettext` function.
This will enable automatic extraction of the strings to your .po file.
It will also indicate that such strings are meant to be translated.
For example in `translations/text-translation.component.ts`:

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

See [Extracting translations using th locale extract tool](#extracting-translations-using-locale-extract-tool) for information about translation extraction.

#### Manual translation by TypeScript code

It is also possible to translate strings manually in TypeScript code.
To do so, inject the `TranslateService` to our component:

[Missing code block?]

Now you can use the `translateService.instant` method to translate text:

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
    Translating conent with `instant` method, requires us to keep track of language changes - we need to make sure that when user changes language,
    text is translated again:
    ```ts
        this.translateService.onLangChange.subscribe(()=>{
            this.translatedVariableWithText = this.translateService.instant(this.variableWithText);
    })
    ```

Alternatively you can use the `stream` method.
This will provide an `Observable` object that will output a new value if the language is changed by the user:

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

Note that all subscriptions need to be unsubscribed in order to prevent memory leaks.
This can be avoided by using Angular's `async` pipe on observables instead.

#### Extracting translations using the locale-extract tool

The `c8ycli locale-extract` command automatically copies all translations from the `node_modules/@c8y/locales.`
This makes it easier to edit and add new translations.
After using this command, the directory *./locales* will contain all available translations.

By default, a new directory `locales` will be created in the root directory. There will be all available languages with actual translations.
We can edit and copy these files to our *translations/locales* directory and add necessary imports.

The file `locales.pot` contains all strings that were marked with the `translate` pipe, the `translate` directive or the `gettext` method.
You can append these values to your language files, and add the necessary translations.

#### Translating dates

In order to display dates with correct localisation rules. use Angular's `date` pipe:

```ts
currentDate = new Date();
```

For example:

```html
<div class="card">
  <div class="card-header separator">
    <h4 class="card-title">Angular pipe example</h4>
  </div>
  <div class="card-block">This date will be translated: {{ currentDate | date: 'medium' }}.</div>
</div>
```

Alternatively there is the `c8yDate` pipe that returns dates in `medium` format.
It also works with values outside of the ECMAScript supported range:

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
