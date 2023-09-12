---
weight: 50
title: Libraries
layout: bundle
section: 
  - app_development
---

{{< c8y-admon-info >}}
Since August, 1st 2023, we are unable to publish new releases of the Web SDK package `@c8y/ngx-components` due to an ongoing issue with npm.
Until the issue with npm is resolved, the node packages can be loaded from another registry.
To configure this additional registry for the packages prefixed with `@c8y`, a file with the name `.npmrc` and the following content must be present in your project directory:
```
registry=https://registry.npmjs.org/
@c8y:registry=https://download.cumulocity.com/npm/
```

The scaffolding process via `c8ycli` will already include this additional file depending on the version that you use.
Note that this is only a temporary workaround until the issue with the npm registry has been resolved.
{{< /c8y-admon-info >}}
