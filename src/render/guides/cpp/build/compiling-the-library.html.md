---
order: 20
title: Compiling the library
layout: redirect
---

First, download a copy of the library from the git repository and change to the directory.

    $ git clone git@bitbucket.org:m2m/cumulocity-sdk-c.git
    $ cd cumulocity-sdk-c

Second, initialize and update your submodule dependencies, since the library depends on the [paho.mqtt.embedded-c](https://github.com/eclipse/paho.mqtt.embedded-c) library for MQTT support.

    $ git submodule init
    $ git submodule update

Then, create a *init.mk* file, and define specific macros *CPPFLAGS*, *CXXFLAGS* and *LDFLAGS*, *LDLIBS* and *CXX* if cross-compiling.

    CXX:=/usr/bin/g++
    CPPFLAGS:=-I/usr/include
    CXXFLAGS:=-Wall -pedantic -Wextra
    LDFLAGS:=-L/usr/lib
    LDLIBS:=-lcurl

Listing 3 shows a typical *init.mk* file example. In essence, *init.mk* defines search path for required `c++` header files, preferred warning levels, search path for required `c++` library files, and necessary linking flags.

When you do host compiling, many of these settings can obviously be omitted, these are more relevant for cross-compiling, which shall be the prevalent use case for the library. Later we will explain the *init.mk* file is also very important for another purpse, i.e., build customization to tailor the library to your needs.

With the *init.mk* being defined, it's time to define your *makefile*.

    $ cp Makefile.template Makefile

The default *Makefile.template* can be used unchanged in most cases. In case some settings are not suitable for your use case, e.g., you may want `-Os` optimization level instead of the default `-O2`, simply edit the copied *Makefile*.

Now we have done all preparation work, it's time to build the library for your target device.

    $ make

If everything is configured correctly, this should compile the library and output the final binary into the *lib/* directory, and a watchdog daemon *srwatchdogd* into the *bin/* directory in the root directory.

The build system supports both *debug* and *release* modes. The above command calling make without any target defaults to *debug* build. *debug* build produces much larger binary, more verbose output, etc, which is suitable for development phase. When releasing your software, you will likely want a *release* build, you can clear all intermediate build files and re-build the library in *release* mode when you want to release your software.

    $ make clean
    $ make release

<div id="footnotes">
<h2 class="footnotes">Footnotes: </h2>
<div id="text-footnotes">

<div class="footdef"><sup><a id="fn.1" name="fn.1" class="footnum" href="#fnr.1">1</a></sup> You can also access the library repository at <https://bitbucket.org/m2m/cumulocity-sdk-c>.</div>


</div>
</div>