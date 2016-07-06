---
order: 10
title: Build
layout: default
---
<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#ch:build">1. Building the Library</a>
<ul>
<li><a href="#sec-1-1">1.1. Prerequisites</a></li>
<li><a href="#sec-1-2">1.2. Compiling the Library</a></li>
</ul>
</li>
</ul>
</div>
</div>

# Building the Library<a id="ch:build" name="ch:build"></a>



## Prerequisites<a id="sec-1-1" name="sec-1-1"></a>

<table id="tab:prereq" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption class="t-above"><span class="table-number">Table 1:</span> Prerequisites for building the library.</caption>

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

## Compiling the Library<a id="sec-1-2" name="sec-1-2"></a>

First, download a copy of the library from the git repository and change to the directory.

    $ git clone git@bitbucket.org:m2m/cumulocity-sdk-c.git
    $ cd cumulocity-sdk-c

Second, create a *init.mk* file, and define specific macros *CPPFLAGS*, *CXXFLAGS* and *LDFLAGS*, *LDLIBS* and *CXX* if cross-compiling.

    CXX:=/usr/bin/g++
    CPPFLAGS:=-I/usr/include
    CXXFLAGS:=-Wall -pedantic -Wextra
    LDFLAGS:=-L/usr/lib
    LDLIBS:=-lcurl

Listing 2 shows a typical *init.mk* file example. In essence, *init.mk* defines search path for required `c++` header files, preferred warning levels, search path for required `c++` library files, and necessary linking flags.

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