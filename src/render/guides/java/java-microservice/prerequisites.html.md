---
order: 10
layout: redirect
title: Prerequisites
---

Create an account on cumulocity.com, for example by using a free trial. At this step you will be provided with a dedicated URL address.

Verify, that you have Maven 3 installed with Java (7+):

    $ mvn -v
    Apache Maven 3.1.1 (0728685237757ffbf44136acec0402957f723d9a; 2013-09-17 17:22:22+0200)
    Maven home: /usr/local/Cellar/maven/3.1.1/libexec
    Java version: 1.7.0_45, vendor: Oracle Corporation
    Java home: /Library/Java/JavaVirtualMachines/jdk1.7.0_45.jdk/Contents/Home/jre
    Default locale: en_US, platform encoding: UTF-8
    OS name: "mac os x", version: "10.9.4", arch: "x86_64", family: "mac"

>**Info:** Maven can be downloaded from http://maven.apache.org.

Verify the docker installation:

Cumulocity hosts linux/amd64 docker containers and not Windows containers. The docker version must be >= 1.12.6

    $ docker version
    Client:
     Version:         1.12.6
     API version:     1.24
     OS/Arch:         linux/amd64

    Server:
     Version:         1.12.6
     API version:     1.24
     OS/Arch:         linux/amd64


   