---
title: Developer command line tool
layout: redirect
order: 20
---

### Usage

```
c8ycli [options] [command]
```

### Options

```
    -u, --url <url>                 url of the remote instance
    -V, --version                   Provides version number
    -h, --help                      Provides usage information
```

### Commands

All the commands except of ```new``` take an array of [glob patterns](https://en.wikipedia.org/wiki/Glob_(programming)). These will be solved to folders or entry point manifests.

```
    new [name] [template]                   Creates a folder to start a brand new application
    serve [options] [appPaths...]           Runs local development server
    build [options] [appPaths...]           Builds the specified apps
    deploy [options] [appPaths...]          Deploys apps from the specified paths
    locale-extract [options] [srcPaths...]  Extracts all strings for translation and outputs the .po files to defined folder
```

### Application options

Application options can be defined with ```--app.<option>=<value>```. These will be applied to all applications found with ```[appPaths...]```.

```
    --app.name="My Application"
    --app.key=myapp-key
    --app.contextPath=myapplication
    --app.brandingEntry="./branding/mybranding.less"
```

### Webpack options

Webpack options can be defined with ```--webpack.<option>=<value>```. These will be directly passed to the webpack configuration.

```
    --webpack.mode="production"
```

