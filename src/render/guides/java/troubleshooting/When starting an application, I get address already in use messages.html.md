---
order: 60
layout: redirect
title: When starting an application, I get "address already in use" messages
---

Check if you are running another instance of the application. Click on the "Display Selected Console" icon in the console toolbar (the terminal icon) to browse through your consoles. Terminate other running instances by pressing the red stop icon in the toolbar.

Under Unix/MacOSX you can also use the *lsof* command to see which process is using a particular port, for example to see which process is using TCP port 8080 enter:

    lsof -i tcp:8080

which will return something like:

    COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME java 12985 pitchfor 45u IPv6 0x077c76d0 0t0 TCP *:8080 (LISTEN)

so process 12985 is using that port which can then be killed if necessary.
