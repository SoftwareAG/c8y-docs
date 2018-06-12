---
order: 10
title: Preface
layout: redirect
---

This document describes how to use Cumulocity Edge (Cumulocity local version) in a Virtual Machine (VM).

>**Info**: A virtual machine is an emulation of a computer (guest system) by a real computer (host system), i.e. like creating a computer within a computer. The virtual machine behaves like an actual computer.


### Conventions in this document

Lines starting with ´&#36;´ represent commands to be executed by a non-root user. Example:
	
	$ ls /etc

Items marked in brackets &lt;x&gt; need to be replaced by a custom value when executing commands or editing files. Example:

	user=&lt;username&gt;

should be edited like

	user=johndoe


### Software requirements

The following software versions are currently used with Cumulocity Edge:

|Edge component|Version|
|:---|:---|
|Cumulocity Core |8.19-10|
|Apama|10.1.0.4|


### Hardware requirements

The following hardware requirements need to be met to use Cumulocity Edge:

* 200 GB of free disk space
* 8 GB RAM
* 4 CPU cores

