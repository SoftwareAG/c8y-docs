    ---
order: 30
title: Netcomm Agent Developer's Guide
layout: default
---

# Index:
* Configuration
 - [Credentials](#credentials)
 - [Event notifications](#notifications).
 - View [logs](#logs).


# Configuration

## <a name="credentials"></a>Credentials

Credentials are stored in RDB in values:
* `service.cumulocity.connection.username` – with tenant, for e.g. `management/device_006064ce80bf`
* `service.cumulocity.connection.password` – mangled password

Password format is:
* `*1*` – prefix
* mangle process:
 - password, if is smaller that 16 character it's filled up to 16 bytes from string `fN4\033q8!7n\n13Q$8f`
 - xor'ed with string `\x21\x63\x0e\x30\x2f\x1b\x9a\xc2\x34\x55\xe8\x7d\x32\xda\x30\xea\x59`
 - base64
* `*`– suffix



## <a name="notifications"></a>Event notifications

Cumulocity alarms are base on NetComm UDP events described in NetComm Wireless M2M Device Model (ver.1.3).
The agent use definitions from file `/usr/local/etc/udp_alarms.ini`. There are:
* general section \[alarm\]
* per event sections \[alarm.N\], where `N` is event number (from M2M Device Model)

Alarm section contains `severity` value, default is `MAJOR`. You can overwrite  it.

Each event section contains:
* event number in section name 
* `name` – alarm name, defined in M2M Device Model, used also as notification type
* `severity` – overwrites default severity, optional, default: non exists
* `type`  – Cumulocity notification type, overwrites names, optional, default: non exists

Text from UDP event is directly set as notification in Cumulocity.


## <a name="logs"></a>Log viewer

Log viewer plug-in (lua\_\_logs) uses definitions from file `/usr/local/etc/logs.ini`.
There are list of supported logs in global value `logs`:

    logs = logread, dmesg, sragent
    
This is names of logs declared in Cumulocity and list of sections with log details.

Each section contains:
* `file` or `execute` – log source, when `execute` is used, log is got from standard output
* `pattern` – line parse pattern in [Lua RegEx syntax](http://lua-users.org/wiki/PatternsTutorial) ([tutorial](http://lua-users.org/wiki/PatternsTutorial))
* `fields` – names of parsed fields in RegEx sub-patterns, if name is used more that one time sub-patterns are joined with space separator
* `timeFormat` – time format used in this log:
 - [strptime format](http://man7.org/linux/man-pages/man3/strptime.3.html),
 - `$(uptime)` – time offset form system start (useful for dmesg)

Example:
    [syslog]
    file = /var/log/syslog
    pattern = (%a+ +%d+ +%d+:%d+:%d+)%s+%S+%s+(%S+):%s*(.*)%s*$
    fields = time, module, text
    timeFormat = %B %d %T
    
    [logread]
    execute = logread
    pattern = (%a+ +%d+ +%d+:%d+:%d+)%s+%S+%s+(%S+)%s+(%S+):%s*(.*)%s*$
    fields = time, level, module, text
    timeFormat = %B %d %T

