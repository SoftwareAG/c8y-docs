---
title: Implement filtering
layout: redirect
order: 120
---

In this part, we will implement device filtering by text and alarm filtering by severity.

### Device search

![Device search screen](/guides/images/smart-toolkit/fdevices.png)

Add the following to "sections/devices.html" at the beginning, inside the tag `<div ng-controller=...`:

```html
<form ng-submit="main.filter.text = main.textFilter">
  <div class="input-group">
    <input type="text" ng-model="main.textFilter" class="form-control" placeholder="Filter with device name...">
    <span class="input-group-btn">
      <button type="submit" class="btn btn-default" type="button">Submit</button>
    </span>
  </div>
</form>
```

There are `main.filter.text` and `main.textFilter` variables which are almost the same thing but differ a little. `c8y-repeat` will refresh its data when the filter changes. Because we do not want it to be refreshed each time the user types in a character in the search field, we use two separate variables and synchronize them in `ng-submit`.

Now check [localhost:8080/index.html/#/devices](http://localhost:8080/index.html/#/devices) again.

### Alarm filtering by severity

Alarm filtering by severity will be more verbose so let us create a controller in "js/alarms_ctrl.js" first:

```js
angular.module('helloCoreApi').controller('AlarmsCtrl', [
    AlarmsCtrl
  ]);

  function AlarmsCtrl(
  ) {
    this.severities = [
      {name: 'Critical', value: 'CRITICAL', cls: 'btn-danger'},
      {name: 'Major', value: 'MAJOR', cls: 'btn-warning'},
      {name: 'Minor', value: 'MINOR', cls: 'btn-primary'},
      {name: 'Warning', value: 'WARNING', cls: 'btn-info'}
    ];

    this.onClick = function (filter, severity) {
      if (filter.severity === severity.value) {
        filter.severity = undefined;
      } else {
        filter.severity = severity.value;
      }
    };

    this.isActive = function (filter, severity) {
      return filter.severity === severity.value;
    };
  }
```

The respective HTML file looks as follows:

```html
<div ng-controller="AlarmsCtrl as alarms" class="btn-group alarm-severity" role="group" aria-label="...">
  <style>
  .alarm-severity .btn:focus {
    outline: none;
  }
  </style>
  <button
    ng-repeat="severity in alarms.severities"
    class="btn {{severity.cls}}"
    ng-class="{'active': alarms.isActive(main.filter, severity)}"
    ng-click="alarms.onClick(main.filter, severity)">
    {{severity.name}}
  </button>
</div>
```

For this filtering, we define an array of objects that can represent alarm severities. Iterating over them using `ng-repeat` is trivial. When one of them is clicked, it either toggles off and sets `filter.severity` to `undefined`, or actually sets the severity. As `c8y-repeat` refreshes automatically when the filter changes, there is nothing else we have to do.
