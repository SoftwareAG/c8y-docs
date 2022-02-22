---
title: Implementing internationalization
layout: redirect
weight: 70
---

 **Version:** 1013.57.0 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

### Introduction
Cumulocity provides integrated tools that allow to translate Your content.
It is based on `ngx-translate` library. `CoreModule` exports preconfigured instance of this tool, already integrated with cumulocity. 

You can get more information on ngx-translate [github page](https://github.com/ngx-translate/core).

For this tutorial we will create new application with minimal configuration needed.

#### Configuration of fresh environment

Start with creating new application,
execute commands:
```
c8ycli new my-app-i18n
cd my-app-i18n
npm install
```

After application is successfully scaffolded we can create new basic module, that we will use to fill and translate our content.

Create files:

`translations/translations.module.ts`
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

`translations/translate-text.component.ts`
```ts
import { Component } from '@angular/core';

@Component({
    selector: 'text-translation',
    templateUrl: './text-translation.component.html'
})
export class TextTranslationComponent {
}
```

`translations/translate-text.component.html`
```html
Index
```

At this point we can run our application, and blank Page containing `Index` is rendered.

### Extending default translations
Cumulocity is provided with already wide range of content that is already translated in multiple languages.
These translations can be easily extended. To do so, just create new file: 
`translations/locales/de.po`
```po
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

Next, open `index.ts` file and import this freshly created file like so:

```ts
(...)
import { AppModule } from './app.module';

import './translations/locales/de.po';

declare const __MODE__: string;
(...)
```

After this is done, we can reload our server and application.
Opening User settings menu while Deutsch language is selected will show us "`User settings (de)`" instead of default "`Benutzereinstellungen`"

This way we can add new translations or modify already existing. Please note that doing so does not disable default translations. New file will extend already existing translations.

You can also retrieve default translation .po files from `./my-app-i18n/node_modules/@c8y/ngx-components/locales` These files can be copied to our locales directory, and then edited.

### Adding new languages
In is possible to define new languages, that are not supported by default.
In this example, we will introduce Italian language.
To do so, create new translate file in our `translations/locales` directory like in previous example:

`translations/locales/it.po`
```po
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

next, open `package.json` file, and modify `c8y.application` object like so:
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

Now, after server and application is reloaded, it is possible to choose Italian language, and our User settings is translated to `User settings (it)`, as defined in our `it.po
 file.



### Basic text translation
There are multiple ways to translate content. Most common is `translate` pipe and directive

#### Translate pipe
This is the most common way to translate content that is present in our html views.

In our `translations/text-translation.component.html` file add 
```html
<div>{{'User settings' | translate}}</div>
```
If our current language is set to italian, reloading application will result in our content rendered as `User settings (it)`.

Translate pipe also allows for use of parameters:

`translations/locales/it.po`
```
msgid "Mr. Smith is {{ age }} years old"
msgstr "Sig. Smith ha {{ age }} anni"
```
`translations/text-translation.component.html` 
```
<div>{{ "Mr. Smith is \{\{ age \}\} years old" | translate:{age: 40} }}</div>
```

And the result is: `msgstr "Sig. Smith ha 40 anni"`
Note that in case of translate pipe, string templates must have their interpolation marks escaped, in order to avoid compilation errors.

#### Translate directive
Another way to have our content translated is to use attribute `translate`. 

`translations/text-translation.component.html`
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
Similar to translate pipe, this sentence will be translated to `User settings (it)`

We can use parameters with translate directive in this way:

`translations/locales/it.po`
```po
msgid "{{ filteredItemsCount }} of {{ allItemsCount }} items."
msgstr "{{ filteredItemsCount }} of {{ allItemsCount }} items. (it)"

```
`translations/text-translation.component.html`
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
In this example we must use Angular's `ngNonBindable` directive in pair with `translate` directive. This way angular will ignore interpolation marks, so they can be interpreted by Translation service.

It is possible to translate whole html code blocks:

`translations/locales/it.po`
```po
msgid "Read about Your current language in <a href="#guide">our guide</a>"
msgstr "Read about Your italian language in <a href="#italian-guide">our italian guide</a>"

```
`translations/text-translation.component.html`
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
Note that it is good to have `ngNonBindable` present while translating html blocks, because in some cases, Angular compiler might interfere with Translate service.

#### Translating content of variables
In some cases we might have our text defined in typescript code. 
`translations/text-translation.component.ts`
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
While it is possible to translate such variable like so:

```html
{{variableWithText | translate}}
```

It is best to wrap such strings with `gettext` function. This will enable us for automatic extraction of such string to our .po file. It will also work as indication, that such string is meant to be translated.

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
translation extraction will be explained later in this tutorial.

#### Manual translation by typescript code
It is also possible to translate item manually in typescript code. to do so, we have to inject
`TranslateService` to our component```

At this point we can use `translateService.instant` method to translate text:
`translations/text-translation.component.ts`
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

`translations/text-translation.component.html`
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

Alternatively we can use `stream` method. This will provide us Observable object, that will emit new value if language is changed by user:

`translations/text-translation.component.ts`
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
`translations/text-translation.component.html`
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

Note that all Subscription needs to be unsubscribed, in order to prevent memory leaks.
This can be avoided by using Angular's `async` Pipe on observables instead.

#### Extracting translations using locale-extract tool
`c8ycli locale-extract` is the command that automatically copies all translations from the `node_modules/@c8y/locales.` This makes it easier to edit and add new translations.
After using this command, the folder ./locales will contain all available translations.


By default, there will be new directory `locales` created in root directory - There will be all available languages with actual translations.
We can edit and copy these files to our `translations/locales` directory and add necessary imports.

File `locales.pot` contains all strings that were marked with `translate` pipe, `translate` directive or `gettext` method. 
We can append these values to our language files, and fill with necessary translations. 

#### Translating dates
In order to display date with current localisation rules we can use Angular's `date` pipe:

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

Alternatively there is also `c8yDate` pipe, that returns date in `medium` format. It also works with values outside of 
ECMAScript supported range:

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

