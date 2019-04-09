---
title: Migrating
layout: redirect
order: 50
---

Since 9.16.0 we have introduced Angular support and as such the build process had to change. There is a transition period where both tools are expected to work.

<!-- https://codepen.io/confraria/pen/VRrpPV -->
<table style="width:100%;font-family:sans-serif" class="support-versions">
  <style>
    .support-versions .green {
       background-color: green !important;
    }
    .support-versions .red {
       background-color: red !important;
    }
    .support-versions .yellow {
       background-color: gold !important;
    }
    .support-versions tr > td:first-child {
      font-weight:bold;
      text-align:right;
    }
    .support-versions .sub {
      font-weight: normal !important;
      color: gray;
    }
  </style>
  <tr style="text-align:center">
    <td></td>
    <th>9.16.x</th>
    <th>9.22.x</th>
    <th>9.25.x</th>
    <th>10.4.0.x</th>
  <tr>
  <tr>
    <td>cumulocity-node-tools</td>
    <td colspan="3" class="green"></td>
    <td class="red"></td>
  </tr>
  <tr>
    <td>@c8y/cli</td>
    <td colspan="4"></td>
  </tr>
  <tr>
    <td class="sub">AngularJS</td>
    <td colspan="3" class="green"></td>
    <td class="red"></td>
  </tr>
  <tr>
    <td class="sub">Angular</td>
    <td colspan="2" class="yellow"></td>
    <td colspan="2" class="green"></td>
  </tr>
  <tr>
    <td class="sub">Hybrid (Angular & AngularJS)</td>
    <td colspan="2" class="red"></td>
    <td colspan="2" class="green"></td>
  </tr>
  <tr>
    <td>@c8y/cli build in production</td>
    <td colspan="4"></td>
  </tr>
   <tr>
    <td class="sub">AngularJS</td>
    <td class="red"></td>
    <td class="green"></td>
    <td colspan="2" class="red"></td>
  </tr>
  <tr>
    <td class="sub">Hybrid (Angular & AngularJS)</td>
    <td colspan="2" class="red"></td>
    <td colspan="2" class="green"></td>
  </tr>
</table>

The cumulocity.json manifest is in practice a module descriptor so with `@c8y/cli` (which uses webpack as a module bundler) applications and plugin manifests are resolved and loaded into webpack as any other module, by using a custom loaders and resolvers.

For example built-in AngularJS plugins are now included like this

```javascript
import '@c8y/ng1-modules/dashboard2/cumulocity.json';
import '@c8y/ng1-modules/dashboardUI/cumulocity.json';
import '@c8y/ng1-modules/groupsHierarchy/cumulocity.json';
import '@c8y/ng1-modules/measurements/cumulocity.json';
import '@c8y/ng1-modules/map/cumulocity.json';
```

And they can also be imported inside any js file:

```javascript
import './plugins/mywidget/cumulocity.json';
```

## Running an existing app with @c8y/cli

As observed in [this diff](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples/branches/compare/next%0Dc5431a1#diff) the changes to include the new tooling to an existing project are quite concise.

In [@c8y/cli](/guides/web/angular#cli) the entry point of an application can be a cumulocity.json application manifest or a plain javascript file.

```bash
npx c8ycli serve ./cumulocity.json
npx c8ycli serve ./src/main.js
```

## Using target files

Although target files are deprecated, it is still possible to use them if the entry point of an application is a cumulocity.json manifest.

```
# To run the Cockpit application with a specific target
npx c8ycli serve node_modules/@c8y/ng1-modules/apps/cockpit/cumulocity.json --env.target=mytarget.json
```

Although the modifications to the application is read from the target file, the definition of application to run or build must be passed as an argument to the cli.


## Alternative to target files

As an alternative to target files developers should now use [applications options](/guides/web/angular#applications-options).

There is no alternative to mutating the list of imported plugins. The recommended approach is to explicitly import the required modules.





