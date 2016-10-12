---
order: 50
title: Cloud Fieldbus
layout: default
---

## <a name="overview"></a>Übersicht

Beim Cloud-Fieldbus handelt es sich um eine Cumulocity-Anwendung, die es Ihnen ermöglicht, Fieldbusgeräte zu verwalten und Daten von ihnen zu sammeln. In den folgenden Abschnitten wird gezeigt, wie Sie

* Fieldbus-Geräte mit Cumulocity [verbinden](#connect) können.
* Verbundene Fieldbus-Geräte [verwalten](#manage) können.
* Die Fernsteuerungsmöglichkeiten eines bestimmten Gerätetyps [konfigurieren](#configure), sowie [importieren und exportieren](#import) können.

Die Anwendung befindet sich zurzeit in der Beta. Modbus wird auf folgenden Endgeräten unterstützt:

* [Pssystec Smartbox-Modbus](/guides/devices/smartbox-modbus) für Modbus/RTU.
* [Netcomm Wireless NTC-6200](/guides/devices/netcommwireless) für Modbus/TCP.

> Falls Sie Cloud-Fieldbus auf Ihrem Endgerät unterstützen möchten, schreiben Sie eine E-Mail an info@cumulocity.com für mehr Informationen.

## <a name="connect"></a>Verbinden von Modbus-Geräten

Im Folgenden gehen wir davon aus, dass Sie ein Cloud-Fieldbus-Endgerät besitzen und dass Sie es in Ihrem Mandanten in Cumulocity registriert haben. Folgen Sie den Anweisungen, die mit dem Endgerät geliefert werden, um das Endgerät in Cumulocity zu registrieren.

### Verbinden von Modbus/RTU-Geräten

Um ein Modbus/RTU-Gerät zu verbinden:

* Verkabeln Sie das Modbus/RTU-Gerät mit dem Endgerät über die Schnittstellen RS/485 oder RS/232.
* Geben Sie dem Gerät eine eindeutige Modbus-Adresse gemäß den Anweisungen, die mit dem Modbus-Gerät bereitgestellt wurden (z.B. durch das Setzen einer Brücke auf dem Gerät).
* Überprüfen Sie die seriellen Kommunikationseinstellungen gemäß den Anweisungen, die mit dem Modbus-Gerät bereitgestellt wurden (d.h. Baud-Raten und Kommunikationsprotokoll). Diese müssen bei allen Geräten auf dem Bus übereinstimmen.
* Gehen Sie zum Endgerät in Cumulocity und klicken Sie auf den "Modbus"-Reiter.
* Falls nötig, ändern Sie die Kommunikationseinstellungen in dem Bereich "serielle Kommunikation", um sie an die Einstellungen des Busses anzupassen.
* Ändern Sie die Übertragungs- und Abfragerate entsprechend Ihrer Anforderungen. Die Abfragerate gibt die Frequenz an, in welcher die Modbus-Geräte nach Änderungen abgefragt werden. Die Übertragungsrate gibt die Frequenz an, in welcher Messungen an Cumulocity versendet werden.
* Klicken Sie auf "Speichern", falls Sie Änderungen vorgenommen haben.

![Modbus-Gerät hinzufügen](/guides/benutzerhandbuch/cloud-fieldbus/newmodbusrtudevice.png)

* Klicken Sie auf "Neues Gerät hinzufügen", um die Kommunikation zwischen dem Endgerät und dem Modbus-Gerät zu starten.
* Tragen Sie einen Namen für das Gerät ein und wählen Sie den Gerätetypen in dem Auswahlmenü aus. In dem Abschnitt "[Modbus-Gerätetypen konfigurieren](#configure)" wird gezeigt, wie Sie ein Gerätetyp hinzufügen.
* Klicken Sie auf "Hinzufügen". Anschließend verschickt Cumulocity eine Benachrichtigung an das Modbus-Endgerät, dass ein neues Gerät zur Verwaltung bereitsteht. Dieser Vorgang kann einige Sekunden dauern.

Nachdem die Fortschrittanzeige verschwindet, wurde ein neues Kindgerät zum Endgerät hinzugefügt und kann nun verwaltet werden. Sie können auf den Namen des Geräts in der Tabelle klicken, um zum Gerät zu gelangen. Falls noch keine Modbus-Geräte zum Endgerät hinzugefügt worden sind, müssen Sie wahrscheinlich Ihr Browser-Fenster aktualisieren, um den "Kindgeräte"-Reiter sehen zu können.

### Verbinden von Modbus/TCP-Geräten

Um ein Modbus/TCP-Gerät zu verbinden:

* Stellen Sie sicher, dass das Modbus/TCP-Gerät mit Ihrem Endgerät verbunden ist, z.B. durch ein Ethernetkabel oder einem Schalter. Falls Sie ein Modbus-Gateway verwenden, konfigurieren Sie das Gateway so, dass es mit den Modbus-Geräten hinter dem Gateway kommunizieren kann.
* Überprüfen Sie die Netzwerkeinstellung der Geräte mit Hilfe der mit dem Gerät gelieferten Anleitung.
* Gehen Sie zum Endgerät in Cumulocity und klicken Sie auf den "Netzwerk"-Reiter. Verifizieren Sie, dass die LAN-Einstellung des Endgeräts mit der Einstellung des Geräts übereinstimmt, so dass eine TCP-Verbindung hergestellt werden kann.
* Gehen Sie in den "Modbus"-Reiter.
* Ändern Sie die Übertragungs- und Abfragerate entsprechend Ihrer Anforderungen. Die Abfragerate gibt die Frequenz an, in welcher die Modbus-Geräte nach Änderungen abgefragt werden. Die Übertragungsrate gibt die Frequenz an, in welcher Messungen an Cumulocity versendet werden. Klicken Sie auf "Speichern", falls Sie Änderungen vorgenommen haben.
* Klicken Sie auf "Neues Gerät hinzufügen", um die Kommunikation zwischen dem Endgerät und dem Modbus-Gerät zu starten.
* Tragen Sie einen Namen für das Gerät ein und wählen Sie den Gerätetypen in dem Auswahlmenü aus. In dem Abschnitt "[Modbus-Gerätetypen konfigurieren](#configure)" wird gezeigt, wie Sie ein Gerätetyp hinzufügen. Ändern Sie die Modbus- und IP-Adresse des verbundenen Geräts.
* Klicken Sie auf "Hinzufügen". Anschließend verschickt Cumulocity eine Benachrichtigung an das Modbus-Endgerät, dass ein neues Gerät zur Verwaltung bereitsteht. Dieser Vorgang kann einige Sekunden dauern.

![Modbus-Gerät hinzufügen](/guides/benutzerhandbuch/cloud-fieldbus/newmodbustcpdevice.png)

> Wir gehen davon aus, dass jegliche Modbus/TCP-Kommunikation über den Standard-Modbus/TCP-Port 502 läuft. Der Port kann auf dem NTC-6200 verändert werden, indem Sie die Variable "service.cumulocity.plugin.lua__modbus.port" neu setzen. Nutzen Sie dafür beispielsweise das Geräte-Shell oder die lokale Web-Benutzeroberfläche des Geräts. 

## <a name="manage"></a>Modbus-Geräte verwalten

Sobald Ihr Gerät verbunden ist, können Sie es verwalten. Gehen Sie zum Endgerät und klicken Sie auf "Kindgeräte", um alle verbundenen Modbus-Geräte aufzulisten. Klicken Sie auf eines der Geräte. Abhängig von den Funktionalitäten und der Konfiguration des Geräts können Sie:

* [Messungen sammeln](#collect).
* [Send alarms on coil or register changes](#alarms).
* [Log coil and register changes as events](#logging).
* [Monitor the status of coils and registers](#status).

### <a name="collect"></a>Messungen sammeln

Falls der Gerätetyp des Modbus-Geräts zur Sammlung von Messwerten konfiguriert wurde, werden diese in dem "Messungen"-Reiter sichtbar sein. Die Messwerte können ebenfalls zur Darstellung im [Daten-Explorer](/guides/benutzerhandbuch/cockpit#using-the-data-explorer-to-visualize-data) und in [Dashboard-Widgets](/guides/benutzerhandbuch/cockpit#working-with-dashboards) verwendet werden.

Daten werden in dem Intervall gesammelt, wie er in der "Abfragerate"-Eigenschaft des Endgeräts festgelegt wurde. Um den Datenverkehr zu optimieren, werden Daten nur versendet, falls sie sich von den vorherigen Daten unterscheiden.

![Modbus-Messungen](/guides/benutzerhandbuch/cloud-fieldbus/modbusmeasurements.png)

### <a name="alarms"></a>Alarme überwachen

Falls der Gerätetyp des Modbus-Geräts dahingegend konfiguriert wurde, Alarme zu versenden, werden diese im "Alarme"-Reiter und in Widgets sichtbar sein. Um den Alarmstatus zu bestimmen, wird die Abfragerate des Modbus-Geräts überwacht und mit der Einstellung des Endgeräts verglichen.

If the device type of the Modbus device is configured to send alarms, these will be visible in the "Alarms" tab and usable in widgets. To determine the alarm status, the Modbus devices are monitored for changes according to the "polling rate" setting of the terminal. If a particular coil or register is non-zero, an alarm will be raised. If the value goes back to zero, the alarm will be cleared.

![Modbus-Alarme](/guides/benutzerhandbuch/cloud-fieldbus/modbusalarms.png)

### <a name="logging"></a>Ereignisse aufzeichnen

Similar to alarms, changes in Modbus devices can be monitored and logged as events. Each time, the value of the monitored coil or register changes, an event is created. You can see the events in the "Events" tab of the device or use them in widgets. You can inspect the new value of the monitored coil or register by clicking on the event and unfolding the event details.

![Modbus-Ereignisse](/guides/benutzerhandbuch/cloud-fieldbus/modbusevents.png)

### <a name="status"></a>Gerätestatus überwachen 

The status of devices can be monitored in real-time using dashboard widgets in the Cockpit application. Navigate to the Cockpit application, create a dashboard or report, and add widgets as described in the [Cockpit user's guide](/guides/benutzerhandbuch/cockpit). Cloud Fieldbus adds two new widgets: The "Fieldbus Device" widget and the "SCADA" widget.

### Gerätestatus mit dem Fieldbus-Gerät-Widget überwachen

The Fieldbus Device widget provides you with a tabular display of the status of a device. The status of the device can also be modified through the widget. To use the Fieldbus Device widget,

* Select a dashboard and click "Add widget to dashboard" using the cogwheel on the top right.
* Select the "Fieldbus Device Widget" and edit the title of the widget.
* Choose the device that should be shown in the widget in the "Target assets or devices" section.
* Select the coils and registers that should be shown on the widget.

![Fieldbus-Gerät-Widget hinzufügen](/guides/benutzerhandbuch/cloud-fieldbus/modbusedit.png)

In the widget, the selected coils and registers are grouped into display categories as configured in the device type. The Fieldbus Device Widget updates automatically as soon as there is new data available. You do not need to click reload.

![Fieldbus-Gerät-Widget verwenden](/guides/benutzerhandbuch/cloud-fieldbus/modbusstatus.png)

Registers and coils that can be changed are represented by active widgets. For example, in the screenshot above, the "Master switch" coil and the "Mode" register are editable. If you click a switch, an operation to change the corresponding coil or register is sent to the terminal. Similar, if you change a value and click "Set", an operation is created. The terminal will then carry out the configuration change on the device, as requested through the operation. While the operation is being processed, a progress indicator is shown.

### <a name="scada"></a>Status mit dem SCADA-Widget überwachen

The SCADA widget provides you with a graphical representation of the status of a device. To use the SCADA widget:

* Select a dashboard and click "Add widget to dashboard" using the cogwheel on the top right.
* Select the "SCADA" widget and edit the title of the widget.
* Choose the device that should be shown in the widget in the "Target assets or devices" section.
* Upload an SVG file with the graphical representation of the device. SVG files are vector graphics that have to be specifically prepared with placeholders for the status information. See "[Preparing SVG files for the SCADA widget](#scadasvg)" below.
* Assign placeholders to devices. Note that multiple devices can be taken as source.
* You now need to assign each placeholder to a property of the device. Hover over each placeholder and select the "Assign device property" button or the "Assign fieldbus property" button. A dialog box will pop-up, it allows you to choose basic device properties or fieldbus properties (i.e., status coils and registers). Select the desired property and click "Select".
* After assigning all placeholders, a preview of the widget with the current values of the properties is shown. Click "Save" to place the widget on the dashboard.

![Hinzufügen des SCADA Widgets](/guides/benutzerhandbuch/cloud-fieldbus/scadaedit.png)

## <a name="configure"></a>Modbus-Gerätetypen konfigurieren

New Modbus device types can be set up in the "Device Database" menu. Click "New", give the new device type a name and start adding coils and register definitions to the device type.

![Geräte-Datenbank](/guides/benutzerhandbuch/cloud-fieldbus/devicedatabase.png)

Click the "Add" link next to "Coils (discrete inputs)" to add a coil definition. This will open a dialog to specify the coil. Enter the following information:

* Enter the name of the coil as shown in the user interface.
* Optionally, enter the display category to structure your data in widgets.
* Enter the number of the coil in the Modbus device.
* Check "Show status" if you want to show the coil's current value in the Fieldbus Device Widget. In this case, you can enter the text that the Fieldbus Device Widget should show for unset and set coils.
* Check "Update status" if you want to be able to edit the coil from the Fieldbus Device Widget.
* Check "Raise alarm" if an alarm should be raised when the coil is set in the device. In this case, you can specify the type of the alarm that is raised, its text and its severity. Note that there can be only one alarm active of a particular type for a particular device.
* Check "Send event" if an event should be generated each time the value of the coil changes. If "Send event" is checked, you can specify the type of event and the text in the event.
* Click "OK" to finish editing the coil.

![Add coil](/guides/benutzerhandbuch/cloud-fieldbus/addcoil.png)

The same functionality is available for discrete inputs. However, it is not possible to update the status of a discrete input.

Click the "Add" link next to "Holding Registers" to add a register definition. This opens a dialog to enter the details of the register definition:

* Enter the name of the register as shown in the user interface.
* Optionally, enter the display category to structure your data in widgets.
* Enter the number of the register in the Modbus device. You can indicate a subset of bits to be used from a register by providing a start bit and a number of bits. This allows you to split a physical Modbus register into a set of "logical registers".
* To scale the integer value read from the Modbus device, you can enter a multiplier, a divisor and a number of decimal places. The register value is first multiplied by the "multiplier", then divided by the "divisor" and then shifted by the number of decimal places. Note that the terminal may use integer arithmetic to calculate values sent to Cumulocity. For example, if you use a divisor of one and one decimal place, a value of 231 read from the terminal will be sent as 23.1 to Cumulocity. If you use a divisor of ten and no decimal places, the terminal may send 23 to Cumulocity (depending on its implementation).
* Indicate the unit of the data, for example, "C" for temperature values.
* Check "Signed" if the register value should be interpreted as signed number.
* Check "Enumeration type" if the register value should be interpreted as enumeration of discrete values. If "Enumeration type" is checked, you can click "Add value" to add mappings from a discrete value to a text to be shown for this value in the widget. Click "Remove value" to remove the mapping.
* Check "Show status" if you want to show the current value of the register in the Fieldbus Device Widget.
* Check "Update status" if you want to be able to edit the register from the Fieldbus Device Widget. If "Update status" is checked, two additional fields "Minimum" and "Maximum" appear. Using these fields, you can constrain numerical values entered in the widget.
* Click "Send measurement" if you want the values of the register to be regularly collected according to the transmit interval (see [above](#connect)). In this case, add a measurement type and a series to be used. For each measurement type, a chart is created in the "Measurements" tab. For each series, a graph is created in the chart. The unit is used for labeling the measurement in the chart and in the Fieldbus Device Widget.
* Check "Raise alarm" if an alarm should be raised when the register is non-zero in the device. In this case, you can specify the type of the alarm that is raised, its text and its severity. Note that there can be only one alarm active of a particular type for a particular device.
* Check "Send event" if an event should be generated each time the value of the register changes. If "Send event" is checked, you can specify the type of event and the text in the event.
* Click "OK" to finish editing the register.

![Hinzufügen eines Regisers](/guides/benutzerhandbuch/cloud-fieldbus/addregister.png)

"Use server time" lets you select if the time stamps for data are generated on the terminal or on the server. If you need to support buffering of data on the terminal, leave this checkbox unchecked.

Finally, don't forget to click "Save" to store your edits. If you edit a device type that is currently in use, you may need to

* Restart the terminals that use the device type.
* Reconfigure dashboards and widgets that use the device type.

## <a name="import"></a>Importing and exporting device types

To more conveniently manage device types, you can export device types to a file once they are edited in the user interface. The file can be imported again to more easily set up other Cumulocity accounts or to restore the types from a backup. The import functionality also supports importing ready-made device types provided by device manufacturers.

To export a device type, hover over the device type that you would like to export and click the download symbol. You browser will download a file named "&lt;device type&gt;.json" with the device type definition.

![Gerätetyp exportieren](/guides/benutzerhandbuch/cloud-fieldbus/fieldbusexport.png)

To import a device type, click the "Import" link. This will open a dialog that lets you choose between importing a ready-made device type and uploading a previously exported device type. You can change the name of the device type during import using the "New device type name" field.

![Gerätetyp importieren](/guides/benutzerhandbuch/cloud-fieldbus/fieldbusimport.png)

## <a name="scadasvg"></a>Preparing SVG files for the SCADA widget

The SCADA widgets inspects uploaded SVG files for placeholders. These placeholders are replaced by actual values from devices. Placeholders have a specific syntax and can be used anywhere in the SVG file. To add a placeholder, enter the name of the placeholder in double curly braces using your design application or a text editor. This is an example of a text element containing a placeholder "batteryValue", taken from our [sample SVG file](/guides/users-guide/scadademo.svg):

	<text class="text" xt-anchor="middle" x="100" y="236.982125" width="200" ...>
		{{batteryValue}}
	</text>




