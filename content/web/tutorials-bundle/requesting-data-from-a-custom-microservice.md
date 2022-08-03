---
title: Request data from a custom microservice
layout: redirect
weight: 70
---

**Version:** 1009.0.18 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

In some situations, the UI needs data from a custom microservice.
While you can always read that data with any HTTP client, for example, Angular's `HttpModule`, you might want authentication out of the box.

This recipe shows how to access custom endpoints with the `@c8y/client` and get authenticated automatically.
First, it will take a deeper look at the basics to explain how the client works in Angular applications.

### Basic: How the client works

Let's first look at how the `@c8y/client` works and what its benefits are.

The client handles HTTP requests from the browser or, if desired, from node.js to the platform.
As most platform APIs are secured it allows to set the authentication to use.

Currently, there are two options for the authentication method:

- `BasicAuth`: Adds a header to each request with the authentication details. This is less secure, as the password can be read by JavaScript.
- `CookieAuth`: Reads a cookie set by the backend which allows accessing the platform. As a cookie is sent on each HTTP request, there is no particular authentication handling for this method except that it also sets an `XSRF-TOKEN` header to prevent cross-site scripting attacks.

When you set the authentication method on a new client instance you can define which authentication to use.
The client returns an object with all common endpoints of the platform.
For example, the following example requests data from the inventory via `BasicAuth`:

```js
const client = new Client(new BasicAuth({
  user: 'admin',
  password: 'password',
  tenant: 'acme'
}), 'https://acme.{{< domain-c8y >}}');
try {
 const { data, paging, res } = await client.inventory.list();
 console.log('Login with admin:password successful');
 console.log(data);
} catch(ex) {
 console.log('Login failed: ', ex)
}
```

Each of the pre-configured endpoints returns an object containing the `data`, an optional `paging` object and the `res` object.
The response is given by [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), a next-generation XHR API which is implemented in all modern browsers (and can be polyfilled for IE11).

In conclusion, the `@c8y/client` is a helper library for JavaScript that abstracts fetch to allow easy authentication and direct access on the common platform APIs.

The next section shows how you can use that concept in an Angular application with the help of the Dependency Injection (DI) model of Angular.

### Basic: Interaction between @c8y/client and an Angular application

`@c8y/ngx-components` is an Angular component that allows to spin up an application.
It is, for example, used in our basic applications like Cockpit, Administration and Device Management to display the login screen.
When you spin up a new Angular-based application the `@c8y/client` and the `@c8y/ngx-components` are always included.
Moreover the ngx-components have a subpackage which is called `@c8y/ngx-components/api` and which exports a `DataModule`.
That module already imports all common endpoint services, so that you can use the standard dependency injection of Angular to access data.

The example above in an Angular application would look like this:

```js
import { InventoryService } from '@c8y/client';                       // 1

@Component({
  selector: '[app-hello]',
  template: `<h1>hello</h1>`
})
export class HelloComponent {
  constructor(public inventory: InventoryService) {}                  // 2

  async ngOnInit() {
    const { data, paging, res } = await client.inventory.list();      // 3
    console.log(data);
  }
}
```

1. Import the desired service from the client.
2. Use dependency injection to use the desired service. The DI concept of Angular will take care of all dependencies needed when the `DataModule` has been imported correctly in your main module.
3. You can now request data. Authentication is already handled. When used directly in a constructor or as an `EntryComponent`, the request might fail unauthorized as the component is loaded previous to the login module. To avoid this, inject the `AppStateService`. It provides a `currentUser` observable that updates as soon as a user is logged in.

This covers the overview on how to use the common endpoints.
The following recipe shows how to add a custom endpoint.


### 1. Initialize the example application

As a starting point, you need an application showing dashboards.
For this purpose, create a new Cockpit application using the `c8ycli`:

```js
c8ycli new my-cockpit cockpit -a @c8y/apps@1009.0.18
```

Next, you must install all dependencies.
Switch to the new folder and run `npm install`.

{{< c8y-admon-info >}}
The `c8ycli new` command has a `-a` flag which defines which package to use for scaffolding. This way you can also define which version of the application you want to scaffold, for example:

- `c8ycli new my-cockpit cockpit -a @c8y/apps@1009.0.18` will scaffold an application with the version `1009.0.18`
- `c8ycli new my-cockpit cockpit -a @c8y/apps@latest` will scaffold an application with the latest official release. Same as if used without the `-a` flag
- `c8ycli new my-cockpit cockpit -a @c8y/apps@next` will scaffold an application with the latest beta release.
{{< /c8y-admon-info >}}

### 2. Request data directly with fetch

If you want to access data from the endpoint `service/acme` via HTTP GET, the easiest way to achieve this with authentication is to reuse the `fetch` implementation of the client.
Add a file to the application and call it `acme.component.ts`:

```js
import { Component, OnInit } from '@angular/core';
import { FetchClient } from '@c8y/client';

@Component({
  selector: 'app-acme',
  template: '<h1>Hello world</h1>{{data | json}}'
})
export class AcmeComponent implements OnInit {
  data: any;

  constructor(private fetchClient: FetchClient) {}                    // 1

  async ngOnInit() {
    const response = await this.fetchClient.fetch('service/acme');    // 2
    this.data = await response.json();                                // 3
  }
}
```

1. Inject the `FetchClient` which is the `fetch` abstraction used by the client.
2. Request the data via `fetchClient.fetch`. The function is identical to the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), as a second parameter it accepts, for example, the method or data, except that it adds the authentication to the platform.
3. Parse the data and set it onto your controller to display it in the template.

Next, add a route to your application where you can show the component.
The following code does this in the `app.module.ts`, also refer to our other tutorials for more details:

```js
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as NgRouterModule } from '@angular/router';
import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';
import { CoreModule, RouterModule } from '@c8y/ngx-components';
import { DashboardUpgradeModule, UpgradeModule, HybridAppModule, UPGRADE_ROUTES} from '@c8y/ngx-components/upgrade';
import { AssetsNavigatorModule } from '@c8y/ngx-components/assets-navigator';
import { CockpitDashboardModule, ReportDashboardModule } from '@c8y/ngx-components/context-dashboard';
import { ReportsModule } from '@c8y/ngx-components/reports';
import { SensorPhoneModule } from '@c8y/ngx-components/sensor-phone';
import { BinaryFileDownloadModule } from '@c8y/ngx-components/binary-file-download';

// ---- 8< added part ----
import { AcmeComponent } from './acme.component';
// ---- >8 ----

@NgModule({
  imports: [
    // Upgrade module must be the first
    UpgradeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    // ---- 8< added part ----
    NgRouterModule.forRoot([
      { path: 'acme', component: AcmeComponent },
      ...UPGRADE_ROUTES,
    ], { enableTracing: false, useHash: true }),
    // ---- >8 ----
    CoreModule.forRoot(),
    AssetsNavigatorModule,
    ReportsModule,
    NgUpgradeModule,
    DashboardUpgradeModule,
    CockpitDashboardModule,
    SensorPhoneModule,
    ReportDashboardModule,
    BinaryFileDownloadModule
  ],

  // ---- 8< added part ----
  declarations: [
    AcmeComponent
  ]
  // ---- >8 ----

})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}
```

### 3. Run and verify the application

When you run the application with `c8ycli server` and point your browser to the path defined in the module `http://localhost:9000/apps/cockpit/#/acme`, you should see the following:

![Custom client service](/images/web-sdk/custom-client-service.png)

The request fails as we don't have a microservice with this context path running.
However, as you can see in the developer tools the request has an authorization cookie attached.
If the microservice existed, the request would pass and the data would be displayed.

### 4. Bonus: Write a Service.ts abstraction

In the example above, you have used the underlying `fetch` abstraction to directly access a custom microservice.
You might want to achieve the same simplicity for the common service of the client. It handles the URL and the JSON parsing for you internally.
To do so, extend the `Service` class returned by the `@c8y/client` and override the necessary methods or properties.

Do this for the `acme` microservice example by creating a new file called `acme.service.ts`:

```js
import { Injectable } from '@angular/core';
import { Service, FetchClient } from '@c8y/client';

@Injectable({
  providedIn: 'root'
})
export class AcmeService extends Service<any> {  // 1
  baseUrl = 'service';                           // 2
  listUrl = 'acme';

  constructor(client: FetchClient) {             // 3
    super(client);
  }

  detail(entityOrId) {                           // 4
    return super.detail(entityOrId);
  }

  list(filter?) {                                // 4
    return super.list(filter);
  }
}
```

Explanation of the numbers above:

1. By extending the service you get the same capabilities as of all common services in `@c8y/client`. The generic type, in this case, is set to `any`, to keep the example as easy as possible. It is a common pattern to create an interface that reflects the data you are sending via this service and replace `any` by this interface.
2. The URLs are the main entry points for this service. The pattern is always `<<url>>/<<baseUrl>>/<<listUrl>>/<id>`. If your microservice follows a different structure, you can override the `getUrl` method of the service class.
3. The constructor needs the current `FetchClient` imported via dependency injection. It also needs to get it passed to the extended `Service` class via `super()`. If you want your endpoint to support real time, you also must inject the `RealTime` abstraction here and pass it.
4. You can now override the `detail()` or `list()` implementation. You can call the super method only, modify the result of the super call or write your own implementation. The choice depends on the implementation details of your microservice.

Now you can reuse the `AcmeService` in the `acme.component.ts`:

```js
import { Component, OnInit } from '@angular/core';
import { AcmeService } from './acme.service';
import { AlertService } from '@c8y/ngx-components';

@Component({
  selector: 'app-acme',
  template: '<h1>Hello world</h1>{{data | json}}'
})
export class AcmeComponent implements OnInit {
  data: any;

  constructor(private acmeService: AcmeService, private alert: AlertService) {} // 1

  async ngOnInit() {
    try {
      const { data } = await this.acmeService.list();                           // 2
      this.data = data;
    } catch (ex) {
      this.alert.addServerFailure(ex);                                          // 3
    }
  }
}
```

Inject the services (1.) and directly do a `list` request on the service (2.). The service will throw an error which is why you wrap the call in a try/catch block and on error show an `alert` by adding the exception to the `addServerFailure` method (3.).

### Conclusion

The examples above show how to access custom microservices via the client. While it might be simpler to use a well-known client abstraction like Angular's `HttpModule`, reusing the `@c8y/client` gives you authentication out of the box.
This solution is more robust against changes as you can update the `@c8y/client` without worrying about underlying changes.
