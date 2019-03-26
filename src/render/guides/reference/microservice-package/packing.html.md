---
order: 20
title: Packing
layout: redirect
---

The following directory structure is required to pack a microservice:

```bash
/docker/Dockerfile      # Instructions to build the Docker image
/docker/*               # All files within the directory will be included in the Docker build
/cumulocity.json        # The application manifest
```

The script can be run in a parent folder holding such structure, or by passing the path to the directory using the `-dir` option. For instance, to pack a Hello World microservice application, execute:

```shell
$ ./microservice pack --name hello-world
```

It will create a ZIP file with named _hello-world.zip_, and an intermediate _image.tar_ which is an exported Docker image.
