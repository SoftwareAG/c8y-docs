---
order: 10
title: Getting started
layout: redirect
---

Before we really get started, we will need a *Cumulocity* account. Go to <https://cumulocity.com/>, you can apply for a free trial account by click the "TRY CUMULOCITY FREE" button on the top-right corner. After signing-up and login to your tenant, you would find the device registration page in *Device Management*. Next, we will demonstrate how to register a device to *Cumulocity* using the library.

![img](/guides/images/cpp/img/register.png "Cumulocity Registration Page.")

Without any further ado, let's write our first program, the customary *hello world* example shown in Listing 1.

    // ex-01-hello: src/main.cc
    #include <iostream>
    #include <sragent.h>
    #include <srlogger.h>
    using namespace std;
    
    int main()
    {
            const char *server = "http://developer.cumulocity.com";
            const char *credentialPath = "/tmp/helloc8y";
            const char *deviceID = "13344568";   // unique device identifier
            srLogSetLevel(SRLOG_DEBUG);          // set log level to debug
            SrAgent agent(server, deviceID);     // instantiate SrAgent
            if (agent.bootstrap(credentialPath)) // bootstrap to Cumulocity
                    return 0;
            cerr << "Hello, Cumulocity!" << endl;
            return 0;
    }

<div class="note">
It's strongly encouraged that you pick a different random value for `deviceID`, as it's the unique identifier of your device.

</div>

For convenience, let's define a shell variable `C8Y_LIB_PATH` to hold the library root path and use it to feed the compiler so it can find all necessary `C++` header files and shared library `.so` file.

    $ export C8Y_LIB_PATH=/library/root/path
    $ g++ -std=c++11 -I$C8Y_LIB_PATH/include -L$C8Y_LIB_PATH/lib -lsera main.cc

<div class="note">
You can define the variable `C8Y_LIB_PATH` in your `.bashrc` file so you don't need to define it every time when launching a new terminal. From now on, I'd assume you have done so and will mention no more about `C8Y_LIB_PATH` in later examples.

</div>

    $ LD_LIBRARY_PATH=$C8Y_LIB_PATH/lib ./a.out
    ...
    Hello, Cumulocity!

Finally, it's time to run our first program. Type the `deviceID` into the text field in your registration page (Fig 2) and click *Register device*. After the program is running, a green *Accept* button shall show up, click it to accept your device into your tenant.

As illustrated, the program will print *Hello, Cumulocity!* then exit. Voila, that's all we need to register a device to *Cumulocity*.

The obtained device credential is stored in `/tmp/helloc8y` as defined in variable `credentialPath`. You can also find the credential in the *Device credential* page in your *Cumulocity* portal.

<div class="note">
If you re-run the program the second time, the program will print *Hello, Cumulocity!* and exit immediately. This is because the program has loaded available credential from the given credential file. You can manually delete the credential file if you want the program to request a new credential.

</div>


