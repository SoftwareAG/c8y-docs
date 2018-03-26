---
title: Create a refresh button
layout: redirect
order: 130
---

In this final example, we will not create a filter. As we will not have a filter, we need another way of refreshing data. Here is how we do it in "sections/events.html":

```html
<div>
  <button class="btn btn-default pull-right" ng-click="main.refresh()" class="margin-bottom:2em">Refresh</button>
</div>
```

If you have not figured already, there is a two-level chain of two-way bindings in this example. The `eg-section` directive binds `main.refresh` and `section.refresh` to each other. `c8y-repeat` binds `section.refresh` to its own private refresh function. Inside "events.html", we have no access to `section` because it is *ngIncluded* inside "main.html" and not "section.html".