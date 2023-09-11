---
weight: 50
title: Libraries
layout: bundle
section: 
  - app_development
---

{{< c8y-admon-info >}}
Because of an ongoing issue with npm, we are since 01.08.2023 unable to publish new releases of the Web SDK package `@c8y/ngx-components` there.
Until the issue with npm is resolved the node packages can be loaded from a another registry.
To configure this additional registry for the packages prefixed with `@c8y`, a file with the name `.npmrc` and the following content should be present in your project directory:
```
registry=https://registry.npmjs.org/
@c8y:registry=https://download.cumulocity.com/npm/
```

The scaffolding process via `c8ycli` should already include this additional file depending on the version that you use.
Once the issue with npm is resolved, we plan to deprecate this registry again. This will be announced in advance.
{{< /c8y-admon-info >}}
