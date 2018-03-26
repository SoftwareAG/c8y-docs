---
title: Create device/alarm/event lists
layout: redirect
order: 110
---

![Devices screen](/guides/images/smart-toolkit/devices.png)

As all section screens, the screens for devices, alarms and events, will share a common functionality defined in "js/section_dir.js":

```js
angular.module('helloCoreApi').controller('SectionCtrl', [
  '$scope',
  SectionCtrl
]).directive('egSection', [
  egSection
]);

function SectionCtrl(
  $scope
) {
  this.filter = $scope.filter || {};
  this.filter.pageSize = 10;
  this.service = $scope.service;
  $scope.$watch('section.refresh', function (val) {
    $scope.refresh = val;
  });
}

function egSection(
) {
  return {
    restrict: 'AE',
    templateUrl: 'section.html',
    controller: 'SectionCtrl',
    controllerAs: 'section',
    transclude: true,
    replace: true,
    scope: {
      service: '@',
      filter: '=?',
      refresh: '=?'
    }
  };
}
```

The lists also share a view defined in "section.html":

```html
<div>
  <div ng-transclude></div>
  <p class="text-warning">Page size is {{section.filter.pageSize}} by default. See <code>pageSize</code> filter.</p>
  <table class="table">
    <h2>List</h2>
    <tr c8y-repeat="x in {{section.service}}" filter="section.filter" refresh="section.refresh">
      <td>{{x.id}}</td>
      <td>{{x.type}}</td>
      <td>{{x.text}}</td>
      <td>{{x.name}}</td>
      <td>{{x.severity}}</td>
    </tr>
  </table>
</div>
```

We define a directive `eg-section` that will be used for all section screens. It makes use of the [`ngTransclude`](https://docs.angularjs.org/api/ng/directive/ngTransclude), [`$watch`](https://docs.angularjs.org/api/ng/type/$rootScope.Scope) and [`controllerAs`](https://docs.angularjs.org/api/ng/directive/ngController) syntax. It assigns `filter.pageSize` to 10. If you are familiar with the [Cumulocity REST API](https://www.cumulocity.com/guides/reference/rest-implementation/), you should have noticed we are limiting the number of result objects that are returned from GET-requests.

The decisive component here is the `c8y-repeat` directive. Its signature is as follows:

```html
<ANY
  c8y-repeat="repeat_expression"
  filter="optionalFilter"
  refresh="optionalFunction">
...
</ANY>
```

`repeat_expression` can be an expression similar to `someVar in *`, where `*` can be one of the supported services. See the bottom of this document.

We use the `controllerAs` syntax here as we did when we defined the routes. You can use `refresh` set by `c8y-repeat` to refresh the data. Note that you must obey to the [dot rule](https://www.youtube.com/watch?v=DTx23w4z6Kc) as it uses two-way data-binding.

For supported filters, see the respective [service documentation](http://resources.cumulocity.com/documentation/jssdk/latest/#/api/c8y.core).

Now we have a fully functional web application that can list devices, alarms and events.
