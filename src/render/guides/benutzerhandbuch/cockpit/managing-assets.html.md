---
order: 20
title: Verwalten von Assets
layout: redirect
---
### Einleitung

Assets repräsentieren ganz allgemein Geschäftsobjekte wie Gebäude, Maschinen, Produktionseinheiten oder Autos.

Assets sind in Hierarchien organisiert. Eine Anwendung zur Energieüberwachung kann beispielsweise die folgende Hierarchie aufweisen:

![image alt text](/guides/images/users-guide/image_2de.png)

Die Asset-Hierarchie besteht aus zwei Objekttypen:

* **Gruppen**: Objekte, die einzelne Geräte oder andere Gruppen gruppieren. Gruppen können sowohl in der Cockpit-Anwendung als auch in der Device-Management-Anwendung erstellt werden.

* **Geräte**: Geräte, die mit der Asset-Hierarchie verknüpft werden. Bevor Sie Geräte in der Cockpit-Anwendung verwenden können, müssen diese mit Cumulocity verbunden werden. Dies erfolgt in der Device Management-Anwendung. Nähere Informationen zum Verbinden von Geräten finde Sie im Abschnitt [Device Management](/guides/users-guide/device-management).

In Beispiel oben repräsentieren die Gruppenobjekte einen Gebäudebestand und die Geräteobjekte die Räume. Die Namen und Hierarchien können individuell vom Benutzer festgelegt werden. Hierarchien können mehrere Ebenen haben wie etwa Ebenen für Region, Stadt, Straße, Gebäude, Etage oder Raum. Jedes Gerät kann mit mehreren und verschiedenen Hierarchien verknüpft sein, und etwa Teil einer regionalen Hierarchie sowie einer Kundenhierarchie sein. 

Um ein Gerät mit der Asset-Hierarchie zu verknüpfen, muss das Gerät einer Gruppe zugewiesen werden (siehe [Assigning devices to groups](#assigning-devices). 

> **Info:** Einzelne Geräte werden nicht in der Cockpit-Anwendung, sondern in der Device Management-Anwendung verwaltet.

### <a name="hierarchies"></a>Asset-Hierarchie versus Gerätehierarchie

Cumulocity unterstützt zwei Hierarchietypen: die Gerätehierarchie und die
Asset-Hierarchie.

Die Gerätehierarchie bildet die Verknüpfung von Geräten mit Cumulocity aus Kommunikationssicht ab. Die Asset-Hierarchie strukturiert die Assets, die über die M2M-Geräte fernüberwacht und gesteuert werden. Nähere Informationen finden Sie unter [Cumulocity's Domain Model](/guides/concepts/domain-model) im Concepts guide.

In the Cockpit-Anwendung kontruieren Sie Ihre Asset-Hierarchie in dem Sie Gruppenobjekte erstellen und Geräte mit den Gruppen verknüpfen. 
Die Asset-Hierarchie hängt von den verwendeten IoT-Geräten ab. 

Es gibt viele verschiedene Typen von IoT-Geräten, wobei diese zwei Typen besonders häufig sind:

* **Smart-Geräte** sind eigenständige Geräte, die Sensoren, Aktoren und ein Kommunikationsmodul enthalten. Diese sind typischerweise mit einem einzelnen Asset verbunden. Smart-Geräte sind etwa Tracker, Wetterstationen oder ganz allgemein "intelligente" Sensoren mit eingebautem Kommunikationsmodul. 

* **Gateway-Geräte** errichten die Kommunikation von anderen Geräten zu Cumulocity, enthalten jedoch keine  Sensoren oder Aktoren. Typische Gateways sind etwa Zigbee, Modbus, M-Bus oder KNX-Gateways.

Der folgende Abschnitt beschreibt, wie Sie in der Cockpit-Anwendung mit Smart-Geräten und Gateway-Geräten arbeiten.

Das erste Beispiel zeigt, wie Smart-Geräte mit der Asset-Hierarchie verknüpft werden:

![image alt text](/guides/images/users-guide/image_3de.png)

Smart-Geräte werden in der Device Management-Anwendung als Top-Level-Geräte dargestellt. In der Cockpit-Anwendung können Sie intelligente Geräte in Gruppen organisieren, wie die Pfeile in der Abbildung oben zeigen. 

Das zweite Beispiel zeigt, wie Gateway-Geräte in der Cockpit-Anwendung verwendet werden:

![image alt text](/guides/images/users-guide/image_4de.png)

In der Device Management-Anwendung werden Gateway-Geräte als Top-Level-Geräte dargestellt. Die angeschlossenen Geräte (wie Zigbee-, Modbus- oder KNX-Geräte) werden als untergeordneten Geräte angezeigt. In der Cockpit-Anwendung können diese "Kindgeräte" wie in der Abbildung oben dargestellt in einer Asset-Hierarchie organisiert werden.

Wie die Beispiele zeigen, sind die Asset-Hierarchie und die Gerätehierarchie autark: Während sich innerhalb der Device Management-Anwendung alle Kindgeräte unterhalb des Gateway-Geräts befinden, sind dieselben Kindgeräte in zwei verschiedenen Gebäuden in der Cockpit-Anwendung organisiert.


### Cockpit-Assets versus Business-Assets

Die Abbildung von Objekten in der Cockpit-Asset-Hierarchie ist eine virtuelle Hierarchie.

Wenn Sie LKWs innerhalb der Cumulocity-Plattform verwalten, wird jeder LKW durch sein individuelles Tracking-Gerät, das mit Cumulocity kommuniziert, dargestellt.

Beim Gebäudemanagement ist es häufig so, dass eine Gruppe von Sensoren in einem Gebäude als eine Gruppe darstellt wird, die mit der Cumulocity-Plattform kommuniziert.


### Navigieren durch die Assets

In der Asset-Hierarchie unterscheidet Cumulocity zwischen Top-Level-Gruppen und untergeordneten Assets (Kind-Assets).

Im Navigator werden Top-Level-Gruppen im Menü "Gruppen" auf oberster Ebene angezeigt. Untergeordnete Assets werden darunter angezeigt oder in der Registerkarte "Kind-Assets" einer bestimmten Gruppe.

<img src="/guides/images/users-guide/Cockpit/Cockpit_SubAssets.png" name="Sub-assets" style="width:100%;"/>

Wenn Sie ein Objekt Im Navigator auswählen, werden auf der rechten Seite entsprechende Informationen zum ausgewählten Objekt angezeigt.

<img src="/guides/images/users-guide/Cockpit/Cockpit_InfoTab.png" name="Info tab" style="width:100%;"/>

Wenn Sie ein Gateway-Gerät hinzufügen, werden die Kindgeräte nicht angezeigt. Um Kindgeräte anzuzeigen, müssen diese zum jeweiligen Asset hinzugefügt werden. Details zur untergeordneten Hierarchie können in der Device Management-Anwendung eingesehen und editiert werden.

Um in der Asset-Hierarchie weiter zu navigieren, verwenden Sie den Navigator oder wählen Sie ein Objekt in der Registerkarte "Kind-Asset" aus. Um in der Asset-Hierarchie nach oben zu navigieren, verwenden Sie den Eintrag in der Pfadnavigation unter dem Namen des Assets.


### Asset details

Für jedes Objekt gibt es verschiedene Registerkarten, je nach Objekttyp: 

|Registerkarte|Beschreibung|Verfügbarkeit
|:---|:---|:---
|Info|Zeigt eine Liste von [Smart Rules](#smart-rules), die für dieses Objekt erstellt wurden.|Gruppe, Gerät
|Alarme|Zeigt Alarme für das Gerät. Nähere Informationen zu Alarmen finden Sie unter [Arbeiten mit Alarmen](/guides/users-guide/device-management/#alarm-monitoring) im Abschnitt Device Management.|Gerät
|Kind-Assets|Zeigt die Kind-Assets einer Gruppe.|Gruppe
|Daten-Explorer|Zeigt alle Datenpunkte der Kinder, siehe auch [Visualisieren von Daten mit dem Daten-Explorer](#data-explorer).|Gruppe, Gerät
|Standort|Zeigt den aktuellen Standort des Geräts.|Gerät

If dashboards have been created for an object, they will also be added as a tab. See [Working with Dashboards](#dashboards) for details.

Es können zusätzliche Registerkarten angezeigt werden, falls die Anwendung mit Plugins erweitert wurde. Siehe auch [Web SDK for plugins](/guides/images/web/introduction).

### <a name="creating-groups"></a>Adding groups

To create a new group, follow these steps:

1. Click the **Plus** button at the right of the top bar, then select **New group** from the menu. <br><br>
<img src="/guides/images/users-guide/Cockpit/Cockpit_CreateGroup.png" name="Create group" style="width:50%;"/><br>
2. In the window that comes up enter a unique group name to identify your group.
3. In the "Device Search" field, enter the search criteria for the devices you might want to add to your group (e.g. "ublox"). A list of devices that match your search criteria will be displayed. 
4. Checkmark the devices you want to add from the list.
5. Click **Create group with X device(s)** to finally create your new group. 

>**Info:** A group can be created with "0" devices in it.

To add a new group as a child of an existing asset, navigate to its "Sub-asset" tab and click **Add Group** in the top menu bar.

### <a name="assigning-devices"></a>Assigning devices to groups

Before adding a device to the Asset-Hierarchie, it must be connected to Cumulocity. Connecting devices to the platform is done in the Device Management application. For details on connecting devices refer to [Device Management](/guides/users-guide/device-management).

To assign a device to a group, follow these steps:

1. In the navigator, select a group from the "Group" menu and then open the "Sub-assets" tab. In the "Sub-assets" tab, all devices that are assigned to the respective group are displayed. 
2. Click **Assign devices** at the right of the top menu bar. In the upcoming window search for the devices you might want to add to your group (e.g. "ublox"). A list of devices that match your search criteria will be displayed. 
3. Checkmark the devices you want to add from the list.
4. Click **Assign X device(s)** to assign the selected devices. 

The devices will be shown as sub-assets in the "Sub-assets" tab.

### Editing groups

To edit the name of a group, navigate to its "Info" tab and click **Edit** next to its name. Edit the name and optionally leave some notes to be displayed in the "Info" tab. Click **Save changes** to apply your settings.

### Deleting groups

To delete a top-level group from the navigator, follow these steps:

1. Click "Groups" in the navigator. 
2. Click the menu icon for the group you want to delete.
3. From the context menu, select **Delete**.

To delete a group from the "Sub-assets" tab of another group, follow these steps:

1. Navigate to the "Sub-assets" tab.
2. Click the menu icon for the group you want to delete.
3. From the context menu, select **Delete**.

### Unassigning devices

To unassign a device from a group, follow these steps:

1. Navigate to the "Sub-assets" tab of the group.
2. Click the menu icon for the device you want to unassign.
3. From the context menu, select **Unassign**.

Unassigning a device does not remove the device, sub-devices or any associated data. The device is only removed from its location in the Asset-Hierarchie. It can be assigned to this group or other groups later.




### Assets durchsuchen

Um nach Gruppen oder Geräten zu suchen, geben Sie den Namen der Gruppe oder des Geräts in das Suchfeld ein und klicken Sie auf "Enter". Sie können auf die Ergebnisse klicken. Die ausgewählte Gruppe bzw. das ausgewählte Gerät wird dann im Navigator links ausgewählt und auf der rechten Seite angezeigt.

### Gruppen hinzufügen

Um eine neue Top-Level-Gruppe hinzuzufügen, klicken Sie auf "+" im oberen Bereich der Anwendung und wählen Sie "Gruppe hinzufügen ...". Daraufhin erscheint der folgende Dialog:

![image alt text](/guides/images/users-guide/image_7de.png)

Dadurch wird eine neue Gruppe mit den ausgewählten zugewiesenen Geräten erstellt. Nach dem Klicken auf "Gruppe mit Geräten erstellen" wird die Gruppe im Navigator als oberstes Objekt angezeigt.

Um eine neue Gruppe als Kind eines vorhandenen Assets hinzuzufügen, klicken Sie auf die Schaltfläche "+ Gruppe hinzufügen" auf der Registerkarte "Sub-Assets".

![image alt text](/guides/images/users-guide/image_8de.png)

### <a name="Gruppenzuweisung"></a>Geräte Gruppen zuweisen

Vor dem Hinzufügen eines Geräts zur Asset-Hierarchie muss es mit Cumulocity verbunden sein. Verbinden Sie Geräte über das Device Management mit der Plattform. Genaues dazu finden Sie hier: [Manuell Geräte verbinden](/guides/images/benutzerhandbuch/device-management-deutsch#device-registration).

Um neu verbundene Geräte der Asset-Hierarchie zuzuordnen, markieren Sie die Gruppe, in der das Gerät erscheinen soll, klicken Sie auf "Sub-Assets" und klicken Sie auf die Schaltfläche "+ Gerät zuordnen".

Suchen Sie im folgenden Dialog nach Geräten und wählen Sie die zuzuordnenden Geräte (oder Kindgeräte) aus.

![image alt text](/guides/images/users-guide/image_9de.png)

### Gruppen löschen

Sie können eine Gruppe löschen, indem Sie den Mauszeiger über die Gruppe auf der Registerkarte "Sub-Assets" bewegen und dort belassen. Sie sehen ein rotes [X], das Sie klicken können, um die Gruppe zu löschen.

### Geräte trennen

Um ein Gerät von einer Gruppe zu trennen, wählen Sie die Gruppe im Navigator aus. In der Registerkarte "Sub-Assets" werden die untergeordneten Geräte angezeigt. Dort können Sie einzelnde Geräte auswählen und trennen. Klicken Sie auf die rote Schaltfläche [X].

Das Trennen eines Geräts bedeutet nicht, dass die Kindgeräte oder die zugehörigen Daten entfernt werden. Das Gerät wird nur aus seiner Position in der Asset-Hierarchie entfernt. Es kann danach anderen Gruppen zugeordnet werden.

### Gruppen editieren

Um den Namen der Gruppe zu bearbeiten, klicken Sie auf die Registerkarte "Info" und bearbeiten den Namen.


