---
order: 50
layout: redirect
title: Building
---

Before building please ensure you have at least [JDK 1.7](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and [Maven 3](http://maven.apache.org/download.cgi). You can check this by running:

	mvn -version
	javac -version

Your Maven "settings.xml" file needs to point to the Cumulocity repository as described [here](https://bitbucket.org/m2m/cumulocity-clients-java). Source code is available at https://bitbucket.org/m2m/cumulocity-examples in the folder java-agent. To build the agent simply run:

	mvn clean install