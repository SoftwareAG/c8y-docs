---
title: Check dependency versions
layout: redirect
order: 40
---

### Node

Start with checking your node version and make sure that it is `0.10` or newer:

```sh
~ $ node --version
v0.10.39
```

### Bower

You need Bower installed globally. First check if you have it:

```sh
~ $ bower --version
1.4.1
```

If the "bower" command cannot be found:

```sh
~ $ npm install bower -g
```

To update Bower to the latest version:

```sh
~ $ npm update bower -g
```

### Grunt CLI

You need the command line interface of Grunt installed globally. First check if you have it:

```sh
~ $ grunt --version
grunt-cli v0.1.13
grunt v0.4.5
```

If the "grunt" command cannot be found:

```sh
~ $ npm install grunt-cli -g
```

To update "grunt-cli" to the latest version:

```sh
~ $ npm update grunt-cli -g
```
