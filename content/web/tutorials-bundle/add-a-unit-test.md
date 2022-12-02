---
title: Add a Jest-based unit test
layout: redirect
weight: 20
---

**Version:** 1013.0.0 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

Unit testing is an essential part of every development process.
Since version 10.13.0.0, all new `c8ycli` scaffolded applications include the unit test framework [Jest](https://jestjs.io/) by default.
This tutorial shows you how to write and verify your first unit test.

### 1. Initialize the example application

You need an application, for example, the empty default application:

```js
c8ycli new my-app application -a @c8y/apps@1013.0.62
```

However, any application supports unit tests in the same way. Next, you must install all dependencies.

Switch to the new folder and run `npm install`.

{{< c8y-admon-info >}}
The `c8ycli new` command has a `-a` flag which defines which package to use for scaffolding. This way you can also define which version of the application you want to scaffold, for example:
 - `c8ycli new my-cockpit cockpit -a @c8y/apps@1013.0.62` will scaffold an application with the version `1013.0.62`.
 - `c8ycli new my-cockpit cockpit -a @c8y/apps@latest` will scaffold an application with the latest official release. Same as if used without the `-a` flag.
 - `c8ycli new my-cockpit cockpit -a @c8y/apps@next` will scaffold an application with the latest beta release.
{{< /c8y-admon-info >}}

### 2. Add a component

To test something, you first need a component that you can verify.
Therefore, add a new file called `test.component.ts`:

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

Add the newly created component to the declarations of your `app.module.ts`:

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

After the example component is added to the module, the component is ready for testing.

### 2. Add a unit test for the test component

Test files have the file extension `.spec.ts`.
There is an example spec file in the repository called `app.module.spec.ts`.
Rename this spec file to `test.component.spec.ts` and align the content to:

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

This is your first test file.
It configures an Angular testing module and checks if the `TestComponent` can be defined.
You can read more about Angular testing support on the [Angular website](https://angular.io/guide/testing).

To start the test, run `npm test` on your command line.
This executes the predefined script in the `package.json` which then starts Jest.
You should see the following test result:

```
 PASS  ./test.component.spec.ts (32.071 s)
  Test component test
    ✓ should be defined (123 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        32.858 s
```

If the test says `PASS`, everything went well and your first component test was successful.
Now, you can add more detailed test cases to verify your component works as intended.

### 3. Use a snapshot test to verify the component template

This section provides you with additional information on other ways to verify the component template.


We use Jest instead of Karma as it comes with the option to use so called snapshot tests.
Snapshot tests allow the verification of the outcome of a test without defining all results.
The Jest function `toMatchSnapshot()` creates a file which contains the snapshot of the test on the first run.
Create another test, which will use snapshot testing, to verify the template of our `TestComponent` by adding the following to your `test.component.spec.ts` file:

```js
test("should show a title tag", () => {
  expect(fixture.debugElement.nativeElement).toMatchSnapshot();
});
```

Run `npm test`. The result should say that a snapshot is written:

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

You can find and verify this snapshot in the newly created folder `./__snapshot__`.
When the template changes, the test will fail and you must overwrite your test with `npm test -- -u`.
You can test this behavior by changing your template in the `test.component.ts` file.

{{< c8y-admon-info >}}
It is common practice to commit these snapshots with your code.
{{< /c8y-admon-info >}}

### Conclusion

This tutorial showed you how to add tests to newly scaffolded applications via the `c8ycli` command.
The advanced snapshot testing has the option to verify templates quickly.
