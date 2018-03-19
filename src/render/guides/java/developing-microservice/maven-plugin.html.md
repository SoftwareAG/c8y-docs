---
order: 90
layout: redirect
title: Maven plugin
---

The package module provides maven plugin to prepare a zip file required by the microservice deployment, with simple configuration. The build requires an executable jar. To create one, a developer can use spring-boot-maven-plugin. 

An example with minimum configuration is presented below:

    <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
        <executions>
            <execution>
                <goals>
                    <goal>repackage</goal>
                </goals>
            </execution>
        </executions>
        <configuration>
            <mainClass>${main.class}</mainClass>
        </configuration>
    </plugin>
    <plugin>
        <groupId>com.nsn.cumulocity.clients-java</groupId>
        <artifactId>microservice-package-maven-plugin</artifactId>
        <version>8.21.0</version>
        <executions>
            <execution>
                <id>package</id>
                <phase>package</phase>
                <goals>
                  <goal>package</goal>
                </goals>
                <configuration>
                  <name>hello-world</name>
                  <encoding>UTF-8</encoding>
                  <rpmSkip>true</rpmSkip>
                  <containerSkip>false</containerSkip>
                </configuration>
            </execution>
            <execution>
                <id>microservice-package</id>
                <phase>package</phase>
                <goals>
                  <goal>microservice-package</goal>
                </goals>
                <configuration>
                  <name>hello-world</name>
                  <image>hello-world</image>
                  <encoding>UTF-8</encoding>
                  <skip>false</skip>
                </configuration>
            </execution>
        </executions>
    </plugin>

### Package goal

The package plugin is responsible for creation of a docker container and rpm file. It can be configured with the following parameters:

* name (alias package.name) - defaults to project.artifactId
*  description (alias package.description) - defaults to project.description
*  jvmArgs (alias agent-package.jvmArgs) - jvm-gc arguments
*  arguments (alias agent-package.arguments) - arguments passed on Java application startup
*  encoding (alias project.build.sourceEncoding)  - defaults to UTF-8
*  heap (alias agent-package.heap) - defaults to min = 128MB max = 384MB
*  perm (alias agent-package.perm) - defaults to min = 64MB max = 128MB
*  skip (alias skip.agent.package) - to skip the whole packaging part
*  rpmSkip (alias skip.agent.package.rpm) - to skip rpm file creation. False by default
*  containerSkip (alias skip.agent.package.container) - to skip docker image creation. True by default

Example configuration:

    <configuration>
      <name>hello-world</name>
      <encoding>UTF-8</encoding>
      <rpmSkip>true</rpmSkip>
      <containerSkip>false</containerSkip>
    </configuration>

### Push goal

The push plugin is responsible for pushing the docker image to a registry. The registry can be configured by:

* containerSkip  (alias skip.agent.package.container) - prevents the push to execute.  True by default
* registry (alias agent-package.container.registry) - docker registry address

Example configuration:

	    <configuration>
	      <registry>http://{yourregistry.com}</registry>
	      <containerSkip>false</containerSkip>
	    </configuration>

### Microservice-package goal

The microservice-package plugin is responsible for creating a zip file, that can be deployed on the platform. It can be configured by:

* skip (alias skip.microservice.package) - skip the zip creation. True by default
* manifestFile - points to a manifest file location. Default value: ${basedir}/src/main/configuration/cumulocity.json
 

Example configuration:

    <configuration>
      <skip>false</registry>
      <manifestFile>${basedir}/src/main/microservice/cumulocity.json</manifestFile>
    </configuration>

### Microservice-deploy goal

Microservice-deploy is responsible for deploying the microservice to a server, defined in standard maven settings.xml file. The plugin can be configured by:

* skip (alias skip.microservice.deploy) - indicates whether the deploy should be skipped or not. True by default
* serviceId (alias serviceId) - service ID that will be used for the deployment. Default value: "microservice".

Example configuration:

    <configuration>
      <serviceId>microservice</serviceId>
      <skip>false</skip>
    </configuration>