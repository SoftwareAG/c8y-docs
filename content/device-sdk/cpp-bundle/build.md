---
weight: 20
title: Building the C++ library
layout: redirect
---

Before starting developing your C++ agents for {{< product-c8y-iot >}}, you must build the library. The prerequisites for building it are listed in the table below.

<table id="tab:prereq" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="left" />
<col  class="left" />
<col  class="left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="left">Software</th>
<th scope="col" class="left">Minimal Version</th>
<th scope="col" class="left">Comment</th>
</tr>
</thead>
<tbody>
<tr>
<td class="left">Linux</td>
<td class="left">2.6.32</td>
<td class="left">&#xa0;</td>
</tr>
<tr>
<td class="left">gcc (clang)</td>
<td class="left">4.7 (3.3)</td>
<td class="left">both gcc and clang are supported</td>
</tr>
<tr>
<td class="left">libcurl</td>
<td class="left">7.26.0</td>
<td class="left">older versions might work, but not tested</td>
</tr>
<tr>
<td class="left">Lua</td>
<td class="left">5.0</td>
<td class="left">optional, for Lua plugin support only</td>
</tr>
</tbody>
</table>

{{< c8y-admon-info >}}
There are several libcurl packages against different TLS libraries. You can select the one you prefer.
{{< /c8y-admon-info >}}

### Compiling the library

Download a copy of the library from the GitHub repository and change to the directory.

```shell
$ git clone https://github.com/SoftwareAG/cumulocity-sdk-c
$ cd cumulocity-sdk-c
```

Initialize and update your submodule dependencies – the library depends on the [paho.mqtt.embedded-c](https://github.com/eclipse/paho.mqtt.embedded-c) library for MQTT support.

```shell
$ git submodule init
$ git submodule update
```

Create an *init.mk* file and define the specific macros `CPPFLAGS`, `CXXFLAGS` and `LDFLAGS`, `LDLIBS` and `CXX` if cross-compiling.

```
CXX:=/usr/bin/g++
CPPFLAGS:=-I/usr/include
CXXFLAGS:=-Wall -pedantic -Wextra
LDFLAGS:=-L/usr/lib
LDLIBS:=-lcurl
```

This is a typical *init.mk* file example. In essence, it defines the search path for the required C++ header files, preferred warning levels, search path for the required C++ library files, and the necessary linking flags.

When you do host compiling, many of these settings can be omitted; these are more relevant for cross-compiling, which shall be the prevalent use case for the library. Later we will explain that the *init.mk* file is also very important for another purpose, that is, build customization to tailor the library to your needs.

With the *init.mk* being defined, it's time to define your *makefile*.

```shell
$ cp Makefile.template Makefile
```

The default *Makefile.template* can be used unchanged in most cases. In case some settings are not suitable for your use case, for example, you may want `-Os` optimization level instead of the default `-O2`, simply edit the copied *Makefile*.

Now that we have done all the preparation work, it's time to build the library for your target device.

```shell
$ make
```

If everything is configured correctly, this should compile the library and output the final binary into the *lib/* directory, and a watchdog daemon *srwatchdogd* into the *bin/* directory in the root directory.

The build system supports both "debug" and "release" modes. The above command calling `make` without any target defaults to "debug" build. The "debug" build produces a much larger binary, more verbose output, etc; which is suitable for development phase. When releasing your software, you will likely want a "release" build. You can clear all intermediate build files and re-build the library in "release" mode when you want to release your software.

```shell
$ make clean
$ make release
```
