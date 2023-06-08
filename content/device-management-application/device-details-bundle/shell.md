---
weight: 150
title: Shell
layout: redirect
---

The device shell enables you to interactively work with remote devices. Many industrial devices support some form of command language, like AT commands for modems, CSV-style commands for many tracking devices or elaborate scripting mechanisms such as Tixi TiXML. In the shell, you can send commands in the respective language of the device and interactively view the results of the commands.

The **Shell** tab presents a command prompt to enter commands.

In the command prompt you can enter arbitrary command text. To send the command text to the device, click **Execute**. This button only is activated once the command is written in the text area.

![Device shell](/images/users-guide/DeviceManagement/devmgmt-devices-shell.png)

{{< c8y-admon-important >}}
When using {{< product-c8y-iot >}} to remotely operate machinery, make sure that all remote operations follow the safety standards and do not cause any harm.
{{< /c8y-admon-important >}}

For your convenience, {{< product-c8y-iot >}} provides several frequently used commands for some devices. Click **Predefined commands** above the command prompt area to open a window containing a list of available pre-defined commands. Select the command of your choice and click **Use**, to copy the command to the command prompt. You may also add new commands here for re-use.
