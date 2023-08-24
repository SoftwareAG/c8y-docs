---
title: Angular Command Line Tool (CLI)
layout: redirect
weight: 20
---


When developing a pure Angular you can create an Angular CLI (`ng`-cli) project and add {{< product-c8y-iot >}} CLI to it.
This functionality is available for Angular 7 from version 10.4.2.0, for Angular 8 from version 10.5.9.0 and for Angular 11 from version 10.10.4.0.

### Install Angular CLI {#install-angular-cli}

Follow the [instructions](https://angular.io/cli) to install @c8y/cli globally.

```sh
npm install -g @angular/cli@v8-lts
```

### Create a new project {#create-a-new-project}

```sh
ng new my-first-iot-project
cd my-first-iot-project
```

### Add {{< product-c8y-iot >}} CLI {#add-platform-cli}

```sh
ng add @c8y/cli
```

### Run application {#run-application}

```sh
ng serve
```

In your browser, open `http://localhost:4200/` to see the new application run.

You can configure the [application options](/web/application-configuration/#application-options) inside the package.json file and customize [branding](/web/application-configuration#branding) with LESS or CSS custom variables.
