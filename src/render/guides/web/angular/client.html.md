---
title: @c8y/client
layout: redirect
order: 50
---


The @c8y/client is an isomorphic (node and browser) Javascript client library for the [Cumulocity IoT](http://www.cumulocity.com) platform API.

### Installation

```
npm install @c8y/client
```


### Usage

Use `client.<endpoint>.list()` to request listed data from the Cumulocity REST API and 
`client.<endpoint>.detail(<id>)` to request detail information. These methods always return a promise. To get an observable use `list$` or `detail$`. 

In the following sections, the default signature of these functions is described. For detailed information, refer to the [complete documentation](http://resources.cumulocity.com/documentation/jssdk/c8y_client/latest/)).


### Get detail and list data with promises (pull)

| Method | Description | Parameters | Return | 
| --- | --- | --- | --- |
`detail(entityOrId)` | Request detail data of a specific entity. |  `entityOrId: string | number | IIdentified`: An object which contains an id or an id as number or string. | `Promise<IResult<TData>>`: The list as Promise wrapped in an IResult. IResultList contains data and response. | 
`list(filter)` | Request a list of data with an optional filter. | `filter:object`: (optional) A filter for [paging](/guides/reference/rest-implementation/#-a-name-paging-a-query-result-paging) or [filtering](/guides/reference/inventory/#query-language) of the list. | `Promise<IResultList<TData>>`: The list as Promise wrapped in an IResultList. IResultList contains data, response and paging.

* Example for receiving details of one managedObject of the inventory via `detail`:
* 
   ```js
    const managedObjId: number = 1;

    (async () => {
      const {data, res} = await client.inventory.detail(managedObjId);
    })();
   ```

* Example for receiving a list of one managedObject of the inventory via `list`:
* 
   ```js
    const filter: object = {
      pageSize: 100,
      withTotalPages: true
    };

    (async () => {
      const {data, res, paging} = await client.inventory.list(filter);
    })();
   ```


### Subscribe to detail and list data with observables (push)

The `detail$` and `list$` functions allow to subscribe to realtime channels that omit data on each change:

| Method | Description | Parameters | Return | 
| --- | --- | --- | --- |
| `detail$(entityOrId, options)` | Returns an observable for detail data of one entity | `entityOrId: string | number | IIdentified`: An object which contains an id or an id as number or string.<br>`options: IObservableOptions`: (optional) An configuration object to define the observable. | `Observable<TData>>`: The list as subscribable observable. |
| `list$(filter, options)` | Returns an observable for a list of entities. | `filter: object`: (optional) A filter for [paging](https:/guides/reference/rest-implementation/#-a-name-paging-a-query-result-paging) or [filtering](/guides/reference/inventory/#query-language) of the list (optional).<br>`options: IObservableOptions`: (optional) An configuration object to define the observable. | `ObservableList<TData>>`: The list as subscribable observable.

* Example for receiving details of one managedObject of the inventory via `detail$`:
 
   ```js
  const managedObjId: number = 1;

  const detail$ = client.inventory.detail$(managedObjId);
  detail$.subscribe((data) => console.log(data));
   ```
* Example for receiving a list of one managedObject of the inventory via `list$`:

   ```js
  const list$ = client.inventory.list$();
  list$.subscribe((data) => console.log(data));
   ```

Observables can be configured by adding an `IObservableOptions` object with these default properties:
   
  ```js
  {
    hot: true,                                    // true = shares one network request
    realtime: true,                               // true = listen to realtime changes
    pagingStrategy: PagingStrategy.PROGRESSIVE,   // ALL = All pages are loaded
                                                  // NONE = only current page is loaded
                                                  // PROGRESSIVE = load pages with more()
    realtimeAction: RealtimeAction.FULL,          // FULL = use all CRUD realtime actions
    pagingDelay: 0                                // Delay the next page load by x ms
    realtimeFilter: undefined                     // A optional additional filter
  }
   ``` 
---

### Examples

Below some examples are provided which may help you to get started. To see a complex and full implementation of the client into Angular, have a look at [@c8y/cli](/guides/web/angular#cli) and the `new` command to spin up a example application for Angular.


#### Requesting list data from the inventory:
```js
import { Client } from '@c8y/client';

const baseUrl = 'https://demos.cumulocity.com/';
const tenant = 'demos';
const user = 'user';
const password = 'pw';

(async () => {
  const client = await Client.authenticate({
    tenant,
    user,
    password
  }), baseUrl);
  const { data, paging } = await client.inventory.list();
  // data = first page of inventory
  const nextPage = await paging.next();
  // nextPage.data = second page of inventory
})();
```

#### Getting an observable of the inventory endpoint:
```js
import { Client } from '@c8y/client';

const baseUrl = 'https://demos.cumulocity.com/';
const tenant = 'demos';
const user = 'user';
const password = 'pw';

(async () => {
  const client = await Client.authenticate({
    tenant,
    user,
    password
  }), baseUrl);
  client.inventory.list$().subscribe((data) => {
    // request inventory data via fetch and adds realtime if data changes
    console.log(data);
  });
})();
```

#### Using realtime:
```js
// realtime event
const subscription = client.realtime.subscribe('/alarms/*', (data) => {
  console.log(data); // logs all alarm CRUD changes
});
client.realtime.unsubscribe(subscription);

// realtime observable
const observable$ = client.realtime.observable('/alarms/*');
const observableSubscription = observable$.subscribe((data) => {
  console.log(data)); // logs all alarm CRUD changes
});
observableSubscription.unsubscribe();
```



