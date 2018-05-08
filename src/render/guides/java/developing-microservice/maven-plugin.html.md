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
        <version>9.0.0</version>
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

The package plugin is responsible for creation of a docker container, rpm file and for creating a zip file, that can be deployed on the platform. 
It can be configured with the following parameters:

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
* manifestFile - points to a manifest file location. Default value: ${basedir}/src/main/configuration/cumulocity.json

Example configuration:

    <configuration>
      <name>hello-world</name>
      <encoding>UTF-8</encoding>
      <rpmSkip>true</rpmSkip>
      <containerSkip>false</containerSkip>
      <manifestFile>${basedir}/src/main/microservice/cumulocity.json</manifestFile>
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

### Upload goal

Microservice upload goal is responsible for deploying the microservice to a server. 
We have three options to configure server url and credentials:

* settings.xml - maven global configuration placed at ~/.m2/settings.xml
* pom.xml - maven project configuration file
* command line

The command line configuration has the highes priority and settings xml configuration the lowest.

To upload microservice to the server we need to configure following properties

* url - Mandatory url that will be used for deployment. Empty by default.
* username - Mandatory tenant name and user name used for authorization. Empty by default.
* password - Mandatory password used for authorization. Empty by default.
* name - Optional name of uploaded application. By default the same as "package.name" property or "artifactId" if "package.name" is not provided.

#### settings.xml

To configure the goal in setting xml file we need to add server configuration as follows:

    <server>
        <id>microservice</id>
        <username>management/admin</username>
        <password>Py****</password>
        <configuration>
            <url>http://cumulocity.default.svc.cluster.local</url>
        </configuration>
    </server>
    
#### pom.xml

To configure plugin in pom xml file we need to add server configuration as follows:

    <plugin>
        <groupId>com.nsn.cumulocity.clients-java</groupId>
        <artifactId>microservice-package-maven-plugin</artifactId>
        <configuration>
            <credentials>
                <url>http://cumulocity.default.svc.cluster.local</url>
                <username>management/admin</username>
                <password>Py****</password>
            </credentials>
            
            <application>
                <name>cep</name>
            </application>
        </configuration>
    </plugin>

#### command line

To pass configuration only to the particular build

    mvn microservice:upload -Dupload.application.name=cep -Dupload.url=http://cumulocity.default.svc.cluster.local -Dupload.username=management/admin -Dupload.password=Py****