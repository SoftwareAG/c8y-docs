---
weight: 10
title: The Command Line Interface (CLI)
layout: redirect
---

### Tedge command

```
tedge 0.2.0
tedge is the cli tool for thin-edge.io

USAGE:
    tedge <SUBCOMMAND>

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information

SUBCOMMANDS:
    cert          Create and manage device certificate
    config        Configure Thin Edge
    connect       Connect to connector provider
    disconnect    Remove bridge connection for a provider
    help          Print this message or the help of the given subcommand(s)
    mqtt          Publish a message on a topic and subscribe a topic
```

### Tedge config command

```
tedge-config 0.2.0
Configure Thin Edge

USAGE:
    tedge config <SUBCOMMAND>

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information

SUBCOMMANDS:
    get      Get the value of the provided configuration key
    help     Print this message or the help of the given subcommand(s)
    list     Print the configuration keys and their values
    set      Set or update the provided configuration key with the given value
    unset    Unset the provided configuration key
```

#### Get

```
tedge-config-get 0.2.0
Get the value of the provided configuration key

USAGE:
    tedge config get <key>

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information

ARGS:
    <key>    Configuration key. Run `tedge config list --doc` for available keys
```

#### Set

```
tedge-config-set 0.2.0
Set or update the provided configuration key with the given value

USAGE:
    tedge config set <key> <value>

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information

ARGS:
    <key>      Configuration key. Run `tedge config list --doc` for available keys
    <value>    Configuration value
```

#### List

```
tedge-config-list 0.2.0
Print the configuration keys and their values

USAGE:
    tedge config list [FLAGS]

FLAGS:
    -h, --help       Print help information
        --all        Print all the configuration keys, even those without a configured value
        --doc        Print all keys and descriptions with example values
    -V, --version    Print version information
```

#### Unset

```
tedge-config-unset 0.2.0
Unset the provided configuration key

USAGE:
    tedge config unset <key>

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information

ARGS:
    <key>    Configuration key. Run `tedge config list --doc` for available keys
```


### Tedge cert command

```
tedge-cert 0.2.0
Create and manage device certificate

USAGE:
    tedge cert <SUBCOMMAND>

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information

SUBCOMMANDS:
    create    Create a self-signed device certificate
    help      Print this message or the help of the given subcommand(s)
    remove    Remove the device certificate
    show      Show the device certificate, if any
    upload    Upload root certificate
```

#### Create

```
tedge-cert-create 0.2.0
Create a self-signed device certificate

USAGE:
    tedge cert create --device-id <id>

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information

OPTIONS:
        --device-id <id>    The device identifier to be used as the common name for the certificate
```

#### Show

```
tedge-cert-show 0.2.0
Show the device certificate, if any

USAGE:
    tedge cert show

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information
```

#### Remove

```
tedge-cert-remove 0.2.0
Remove the device certificate

USAGE:
    tedge cert remove

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information
```

#### Upload

```
tedge-cert-upload 0.2.0
Upload root certificate

USAGE:
    tedge cert upload <SUBCOMMAND>

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information


SUBCOMMANDS:
    c8y     Upload root certificate to {{< product-c8y-iot >}}
    help    Print this message or the help of the given subcommand(s)
```

### Tedge connect command

```
tedge-connect 0.2.0
Connect to connector provider

USAGE:
    tedge connect <SUBCOMMAND>

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information


SUBCOMMANDS:
    az      Create connection to Azure
    c8y     Create connection to {{< product-c8y-iot >}}
    help    Print this message or the help of the given subcommand(s)
```

#### Azure

```
tedge-connect-az 0.2.0
Create connection to Azure

The command will create config and start edge relay from the device to az instance

USAGE:
    tedge connect az [FLAGS]

FLAGS:
    -h, --help       Print help information
        --test       Test connection to Azure
    -V, --version    Print version information
```

#### Cumulocity IoT

```
tedge-connect-c8y 0.2.0
Create connection to {{< product-c8y-iot >}}

The command will create config and start edge relay from the device to c8y instance

USAGE:
    tedge connect c8y [FLAGS]

FLAGS:
    -h, --help       Print help information
        --test       Test connection to {{< product-c8y-iot >}}
    -V, --version    Print version information
```

### Tedge disconnect command

```
tedge-disconnect 0.2.0
Remove bridge connection for a provider

USAGE:
    tedge disconnect <SUBCOMMAND>

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information

SUBCOMMANDS:
    az      Remove bridge connection to Azure
    c8y     Remove bridge connection to {{< product-c8y-iot >}}
    help    Print this message or the help of the given subcommand(s)
```

#### Azure

```
tedge-disconnect-az 0.2.0
Remove bridge connection to Azure

USAGE:
    tedge disconnect az

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information
```

#### Cumulocity IoT

```
tedge-disconnect-c8y 0.2.0
Remove bridge connection to {{< product-c8y-iot >}}

USAGE:
    tedge disconnect c8y

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information
```

### Tedge mqtt command

```
tedge-mqtt 0.2.0
Publish a message on a topic and subscribe a topic

USAGE:
    tedge mqtt <SUBCOMMAND>

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information

SUBCOMMANDS:
    help    Print this message or the help of the given subcommand(s)
    pub     Publish a MQTT message on a topic
    sub     Subscribe a MQTT topic
```

#### Pub

```
tedge-mqtt-pub 0.2.0
Publish a MQTT message on a topic

USAGE:
    tedge mqtt pub [OPTIONS] <topic> <message>

FLAGS:
    -h, --help       Print help information
    -V, --version    Print version information

OPTIONS:
    -q, --qos <qos>    QoS level (0, 1, 2) [default: 0]

ARGS:
    <topic>      Topic to publish
    <message>    Message to publish
```

#### Sub

```
tedge-mqtt-sub 0.2.0
Subscribe a MQTT topic

USAGE:
    tedge mqtt sub [FLAGS] [OPTIONS] <topic>

FLAGS:
    -h, --help        Print help information
        --no-topic    Avoid printing the message topics on the console
    -V, --version     Print version information

OPTIONS:
    -q, --qos <qos>    QoS level (0, 1, 2) [default: 0]

ARGS:
    <topic>    Topic to subscribe to
```
