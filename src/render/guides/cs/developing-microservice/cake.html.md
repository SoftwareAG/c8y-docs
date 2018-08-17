---
order: 100
title: Cake
layout: redirect
---
Cake is a cross platform build automation system, built on top of Roslyn and the Mono Compiler, which uses C# as the scripting language to do things like compiling code, copy files/folders, running unit tests, compress files and build NuGet packages.
The cake script called build.cake has has the predefined tasks. Tasks represent a unit of work in Cake, and you use them to perform specific work in a specific order.

*	Clean - Cleans the specified directory, deletes files.
*	Build – Restores the dependencies and tools of projects and the task builds all projects, but before that it does the cleaning task. 
*	Publish – The task compiles the application, reads through its dependencies specified in the project file, and publishes the resulting set of files to a directory. The result will be placed in the output folder
*	Docker-Build - Will save an image and an application manifest  to images/multi/image.zip. Inside the root folder of your application, the so-called "application manifest" is stored in a file cumulocity.json. The zip archive contains image.tar and cumulocity.json. 
*	Single-DockerImage - Will save an image and an application manifest  to images/single /image.zip. Inside the root folder of your application, the so-called "application manifest" is stored in a file cumulocity.json. The zip archive contains image.tar and cumulocity.json.
*	Docker-Run - Creates a new container using default settings.
