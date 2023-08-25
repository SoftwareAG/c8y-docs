---
weight: 20
title: Compatibility and limitations
layout: redirect
---

#### VNC protocol {#vnc-protocol}

The following versions of the VNC protocol are currently supported:

* RFB 003.003
* RFB 003.007
* RFB 003.008

The functionality has been tested on the following VNC servers:

* Real VNC 5.3.2
* Tiger VNC 1.6.0/1.7.0
* TightVNC 1.3.9
* EfonVNC 4.2
* Vino

The following operating systems/browsers are currently supported:

|Operating system|Browser|Touch|Swipe|Keyboard|Pointer
|:---|:---|:---|:---|:---|:---
|Windows 10|Edge 38|Yes|Yes|Yes|Minor
|Windows 10|Internet Explorer 11.5.6.7|Yes|Yes|Yes|Minor
|Windows 10|Firefox 51|Yes|Yes|Yes|Yes
|Ubuntu 16.04|Chrome 56|Minor|Yes|Yes|Yes
|Ubuntu 16.04|Firefox 51|Minor|Yes|Yes|Yes
|MacOS|Safari|Yes|Yes|Yes|Yes
|iOS 10.2.1|Safari|Yes|Minor|No|n/a
|Android 6.0.1|Chrome|Yes|Minor|No|n/a
|Android 6.0.1|Stock browser 5.0|Yes|Minor|No|n/a

#### Telnet protocol {#telnet-protocol}

The following limitations apply to Cloud Remote Access for Telnet:

|Area|Scrolling|Reflow on width change|Bitmap fonts|Vector fonts|Mouse tracking|Application keypad|Tabs|Split screen
|:---|:---|:---|:---|:---|:---|:---|:---|:---
|Console|Yes|No|Yes|Yes|Yes|Yes|?|Yes
|xterm|Yes|No|Yes|Yes|Yes|Yes|No|No


#### SSH protocol {#ssh-protocol}

For Cloud Remote Access for SSH, the same limitations as for Telnet apply (see above). Moreover, the following additional limitations are known:

* International characters are not supported yet.
* Only a limited number of control characters is working. 
* Mouse movements are not supported.
* SSH version 1 is not supported.