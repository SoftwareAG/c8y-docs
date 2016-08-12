---
order: 1
title: Introduction
layout: default
---
<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#ch:intro">1. Introduction</a></li>
</ul>
</div>
</div>

# Introduction<a id="ch:intro" name="ch:intro"></a>


The SmartREST `c++` library is a `c++` Software Developer Kit (SDK) for facilitating device integration to *Cumulocity*'s Internet of Things (IoT) platform.

SmartREST is *Cumulocity*'s innovative communication protocol specifically designed for the IoT world. It incorporates the highly expressive strength of the REST API, whereas at the same time replace JSON with Comma Separated Values (CSV) to avoid the complexity of JSON parsing for embedded devices. Additionally, the terseness of CSV renders it highly efficient for IoT communication via mobile networks. It can save up to 80% more mobile traffic compared to other HTTP APIs.

The SmartREST `c++` library is designed for a wide range of devices which are powered by embedded Linux. It implements iterator-style lazy CSV lexer and parser, sophisticated request aggregation and robust request sending, and functionality for *Cumulocity*'s IoT integration, e.g., device registration, real-time device control, SmartREST template registration. The library employs a event-driven design which supports periodical timer callbacks and message based callbacks, which will greatly reduce the development process of integrating your IoT devices to *Cumulocity*'s IoT platform.