---
title: Add a Jest based unit test
layout: redirect
weight: 70
---

**Version:** 1013.0.0 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

Unit testing is an essential part of every development process. By default all new `c8ycli` scaffolded application include since version 10.13.0.0 the unit test framework [Jest](https://jestjs.io/). This tutorial will show, how to write and verify your first unit test.

### 1. Initialize the example app

As a starting point, you need an application. We are using the default empty application, but any application supports unit tests in the same way.

```js
c8ycli new my-app application -a @c8y/apps@1013.0.62
```

Next, you need to install all dependencies. Switch to the new folder and run `npm install`.

> **Tip:** The `c8ycli new` command has a `-a` flag which defines which package to use for scaffolding. This way you can also define which version of the app you want to scaffold, e.g.:
>
> - `c8ycli new my-cockpit cockpit -a @c8y/apps@1013.0.62` will scaffold an app with the version `1013.0.62`
> - `c8ycli new my-cockpit cockpit -a @c8y/apps@latest` will scaffold an app with the latest official release. Same as if used without the `-a` flag
> - `c8ycli new my-cockpit cockpit -a @c8y/apps@next` will scaffold an app with the latest beta release.

### 2. Adding a component
To test something, we first need a component that we can verify. Therefore add a new file called `test.component.ts`:
```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1>Hello world</h1>`
})
export class TestComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

```

And add the new created component to the decelerations of your `app.module.ts`:

```js
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as ngRouterModule } from '@angular/router';
import { CoreModule, BootstrapComponent, RouterModule } from '@c8y/ngx-components';

// --- 8< changed part ----
import { TestComponent } from ### 2. Adding a component
    ngRouterModule.forRoot([], { enableTracing: false, useHash: true }),
    CoreModule.forRoot()
  ],
  bootstrap: [BootstrapComponent],
  
  // --- 8< changed part ----
  declarations: [
    TestComponent
  ]
  // --- >8 ----
})
export class AppModule {}


```

After the example component is added to the module, the component can get tested.

### 2. Adding a unit test for the test component
Test files always end withe the file extension `.spec.ts`. There is already an example spec file in the repository called `app.module.spec.ts`. Easiest is to rename this spec file to `test.component.spec.ts` and align the content to:

```js
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';
import { TestComponent } from './test.component';

describe('Test component test', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
    fixture = TestBed.createComponent(TestComponent);
  });

  test('should be defined', () => {
    expect(fixture).toBeDefined();
  });
});
```

This is your first test file. It simply configures a Angular testing module and checks if the `TestComponent` can be defined. You can read more about Angular testing support on the [Angular website](https://angular.io/guide/testing).

To start the test simply run `npm test` on your command line which executes the predefined script in the `package.json` which simply starts Jest. After a while, you should see the test result:
```
 PASS  ./test.component.spec.ts (32.071 s)
  Test component test
    ✓ should be defined (123 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        32.858 s
```

If the test says `PASS` everything went well and you first component test was successful. You can now add more detailed test cases to verify your component works as intended.

### 3. (Bonus) Using Snapshot test to verify the component template
We precisely choose Jest over Karma as it gives you the possibility to use so called Snapshot-Test. It allows, to verify the outcome of a test, without defining all results. Therefore you can use the Jest function `toMatchSnapshot()`. This function will create a file which contains the snapshot of the test on the first run.
We will now add another test, which will use Snapshot-Testing to verify the template of our `TestComponent`. Add the following test to your `test.component.spec.ts` file:

```js
test("should show a title tag", () => {
  expect(fixture.debugElement.nativeElement).toMatchSnapshot();
});
```

If you now run `npm test` you will get a result saying that a snapshot is written:
```
PASS  ./test.component.spec.ts
  Test component test
    ✓ should be defined (94 ms)
    ✓ should show a title tag (29 ms)

 › 1 snapshot written.
Snapshot Summary
 › 1 snapshot written from 1 test suite.

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   1 written, 1 total
Time:        5.154 s
```
You can find and verify this snapshot in the newly created folder `./__snapshot__`. It is common practice to commit those snapshots with your code. When the template now change, the test will fail and you need to overwrite your test with `npm test -- -u`. You can simply test this behavior, by changing your template in the `test.component.ts` file.

### Conclusion
This tutorial showed, how you can simply add tests to newly scaffold application withing the `c8ycli` command. Additional the advanced snapshot testing gives you the possibility to verify templates quickly.
