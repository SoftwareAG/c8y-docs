---
title: Client library
layout: redirect
weight: 20
---

The @c8y/client is an isomorphic (node and browser) Javascript client library for the [{{< product-c8y-iot >}}](http://www.{{< domain-c8y >}}) platform API.

### Installation

```
npm install @c8y/client
```


### Usage

Use `client.<endpoint>.list()` to request listed data from the {{< product-c8y-iot >}} REST API and
`client.<endpoint>.detail(<id>)` to request detail information. These methods always return a promise. To get an observable use `list$` or `detail$`.

In the following sections, the default signature of these functions is described. For detailed information, refer to the [complete documentation](http://resources.cumulocity.com/documentation/websdk/client/).


### Get detail and list data with promises (pull)

<table>
<col style="width:20%">
<col style="width:20%">
<col style="width:30%">
<col style="width:30%">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Parameters</th>
<th>Return</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>detail(entityOrId)</code></td>
<td>Request detail data of a specific entity.</td>
<td><code>entityOrId: string | number | IIdentified</code>: An object which contains an id or an id as number or string.</td>
<td><code>Promise&lt;IResult&lt;TData&gt;&gt;</code>: The list as Promise wrapped in an IResult. IResultList contains data and response.</td>
</tr>
<tr>
<td><code>list(filter)</code></td>
<td>Request a list of data with an optional filter.</td>
<td><code>filter:object</code>: (optional) A filter for query result paging, see<a href="https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#section/REST-implementation/REST-usage"> Inventory > Query language</a></td>
<td><code>Promise&lt;IResultList&lt;TData&gt;&gt;</code>: The list as Promise wrapped in an IResultList. IResultList contains data, response and paging.</td>
</tr>
</tbody>
</table>


* Example for receiving details of one managedObject of the inventory via `detail`:

   ```js
    const managedObjId: number = 1;

    (async () => {
      const {data, res} = await client.inventory.detail(managedObjId);
    })();
   ```

* Example for receiving a list of one managedObject of the inventory via `list`:

   ```js
    const filter: object = {
      pageSize: 100,
      withTotalPages: true
    };

    (async () => {
      const {data, res, paging} = await client.inventory.list(filter);
    })();
   ```

### Accessing a microservice with the Fetch API

The client internally uses the Fetch API. By accessing this core function, you can do any authenticated request to any resource. Standalone you can use `core.client.fetch(url, options)` and in `@c8y/ngx-components/data` for Angular you simply need to inject the `FetchClient`:

```js
constructor(private fetchClient: FetchClient) {} // di

async getData() {
  const options: IFetchOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
  const response = await fetchClient.fetch('/service/my-service', options); // Fetch API Response
}
```

All fetch responses can be parsed to JSON if the content type is set correctly. Find more information on handling fetch responses in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

### Authentication strategy

In the {{< product-c8y-iot >}} platform we currently allow two ways to authenticate:

 * Basic Auth: The authentication header is injected into each request.
 * Oauth: The client doesn't know about the authentication header. The header is set in a cookie.

To quickly get you started, the @c8y/client provides a shorthand static function which always uses Basic Auth and verifies the login directly:

```js
await Client.authenticate({ tenant, user, password }), url);
```

It internally creates a client instance and tries to contact the API to verify if the given credentials are correct. In some cases you must use a more fine-grained authentication, for example, when you don't know which authentication strategy the user is going to use. In this case you must construct an own instance of the client and pass the authentication strategy to it:

```js
 const baseUrl = 'https://acme.{{< domain-c8y >}}';
 const client = new Client(new CookieAuth(), baseUrl); // use here `new BasicAuth()` to switch to Basic Auth
 try {
  const { data, paging, res } = await client.user.currentUser();
  console.log('Login with cookie successful');
 } catch(ex) {
  console.log('Login failed: ', ex)
 }
```


### Subscribe to detail and list data with observables (push)

The `detail$` and `list$` functions allow to subscribe to realtime channels that omit data on each change:

<table>
<col style="width:20%">
<col style="width:20%">
<col style="width:30%">
<col style="width:30%">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Parameters</th>
<th>Return</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>detail$(entityOrId, options)</code></td>
<td>Returns an observable for detail data of one entity</td>
<td><code>entityOrId: string | number | IIdentified</code>: An object which contains an id or an id as number or string.<br><code>options: IObservableOptions</code>: (optional) An configuration object to define the observable.</td>
<td><code>Observable&lt;TData&gt;&gt;</code>: The list as subscribable observable.</td>
</tr>
<tr>
<td><code>list$(filter, options)</code></td>
<td>Returns an observable for a list of entities.</td>
<td><code>filter: object</code>: (optional) A filter for query result paging, see<a href="https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#section/REST-implementation/REST-usage"> Inventory > Query language</a> <br><code>options: IObservableOptions</code>: (optional) An configuration object to define the observable.</td>
<td><code>ObservableList&lt;TData&gt;&gt;</code>: The list as subscribable observable.</td>
</tr>
</tbody>
</table>

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
    realtime: false,                              // true = listen to real-time changes
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

Below some examples are provided which may help you to get started. To see a complex and full implementation of the client into Angular, have a look at [@c8y/cli](/web/development-tools/#c8y-cli) and the `new` command to spin up a example application for Angular.


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
  }, baseUrl);
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
  }, baseUrl);
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

#### Authenticate in node.js

The constructor `new Client([...])` initializes a new client which allows to request data from the API. Unlike to `Client.authenticate([...])` it needs a tenant given and does not verify if the login is correct. This is useful if you are developing a node.js microservice.

```js
const auth = new BasicAuth({
   user: 'youruser',
   password: 'yourpassword',
   tenant: 'acme'
 });

 const baseUrl = 'https://acme.cumulocity.com';
 const client = new Client(auth, baseUrl);
 (async () => {
   const { data, paging, res }); =  await client.inventory.list({ pageSize: 100 });
 })();
```
