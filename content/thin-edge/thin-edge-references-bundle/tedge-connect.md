---
weight: 40
title: The tedge connect command
layout: redirect
---

```
tedge-connect 0.2.0
Connect to connector provider

USAGE:
    tedge connect <SUBCOMMAND>

FLAGS:
    -h, --help       
            Prints help information

    -V, --version    
            Prints version information


SUBCOMMANDS:
    az      Create connection to Azure
    c8y     Create connection to {{< company-c8y >}}
    help    Prints this message or the help of the given subcommand(s)
```

### Azure

```
tedge-connect-az 0.2.0
Create connection to Azure

The command will create config and start edge relay from the device to az instance

USAGE:
    tedge connect az [FLAGS]

FLAGS:
    -h, --help       
            Prints help information

        --test       
            Test connection to Azure

    -V, --version    
            Prints version information
```

### Cumulocity IoT

```
tedge-connect-c8y 0.2.0
Create connection to {{< company-c8y >}}

The command will create config and start edge relay from the device to c8y instance

USAGE:
    tedge connect c8y [FLAGS]

FLAGS:
    -h, --help       
            Prints help information

        --test       
            Test connection to {{< company-c8y >}}

    -V, --version    
            Prints version information
```
