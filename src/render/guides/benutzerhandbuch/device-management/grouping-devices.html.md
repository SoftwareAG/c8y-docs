---
order: 30
title: Gruppieren von Geräten
layout: redirect
---

Sie können Geräte beliebig nach Ihren Bedürfnissen gruppieren. Ein Gerät kann sich in mehreren Gruppen befinden und Gruppen selbst können wiederum Teil von mehreren anderen Gruppen sein. 

Cumulocity unterscheidet zwischen Top-Level-Gruppen und untergeordneten Gruppen. 


### Anzeigen von Gruppen

Um eine Liste aller Gruppe in Ihrem Konto anzuzeigen, klicken Sie "Gruppen" im Navigator. 

<img src="/guides/images/benutzerhandbuch/devmgmt_groups.png" alt="Gruppen" style="max-width: 100%">

Für jede Gruppe wir der Name und die Anzahl der Kindern angezeigt.

Klicken Sie auf eine Gruppe, um Details dieser Gruppe anzuzeigen. 

<img src="/guides/images/benutzerhandbuch/devmgmt-group-details.png" alt="Gruppendetails" style="max-width: 100%">

**Registerkarte Info**

In der Registerkarte "Info" werden folgende Informationen angezeigt:

|Karte|Beschreibung|
|:---|:---|
|Anmerkungen|Optionale Anmerkungen, die beispielsweise über aktuelle Aktivitäten informieren. Diese können üblicherweise nur von einem Administrator editiert werden. Um Anmerkungen hinzuzufügen oder zu editieren, klicken Sie **Bearbeiten**, geben Sie Ihre Änderungen im Textfeld ein und speichern Sie Ihre Eingaben, in dem Sie auf das grüne Häkchen rechts vom Textfeld klicken. 
|Gruppendaten|Editierbare Informationen zur Gruppe (Name, Beschreibung).
|Aktive kritische Alarme|Aktive kritische Alarme für die Geräte in der Gruppe.

**Kind-Assets**

In der Registerkarte "Kind-Assets" werden alle Geräte angezeigt, die der Gruppe zugewiesen wurden. Für jedes Kind-Asset wird der Name und im Fall einer Gruppe die Anzahl der Kinder angezeigt. 

<img src="/guides/images/benutzerhandbuch/devmgmt-child-assets.png" alt="Kind-Assets" style="max-width: 100%">

Um eine Gerät einer Gruppe zuzuweisen, klicken Sie **Geräte zuweisen** rechts in der oberen Menüleiste (siehe [Zuweisen eines Geräts zu einer bestehenden Gruppe](#assigning-devices)).

Um eine Zuweisung aufzuheben, öffnen Sie in dem entsprechenden Eintrag das Kontextmenü über das Menüsymbol und wählen Sie **Zuordnung aufheben**.

**Sammelkommandos**

In der Registerkarte "Sammelkommandos" können Sammelkommandos, die für die Gruppe erstellt wurden, verwaltet werden. Mit Sammelkommandos können Sie in einem Schritt Kommandos für jedes Gerät in der Gruppe ausführen. Weitere Informationen finden Sie unter [Sammelkommandos](#bulk-operations) in "Überwachen und Steuern von Geräten".


### Erstellen einer neuen Gruppe

Um eine neue Gruppe zu erstellen, führen Sie folgende Schritte aus:

1. Klicken Sie die **Plus**-Schaltfläche rechts in der oberen Leiste und wählen Sie im Kontextmenü **Neue Gruppe**.
2. Geben Sie im folgenden Fenster einen eindeutigen Namen für die Gruppe an.  
3. Im Suchfeld können Sie Suchkriterien für die Geräte eingeben, die Sie zu der Gruppe hinzufügen möchten (z.B. "ublox"). Es wird eine Liste der passenden Geräte angezeigt.
4. Wählen Sie durch Aktivieren des jeweiligen Kontrollkästchens die Geräte aus, die Sie zur Gruppe hinzufügen möchten.
5. Klicken Sie **Gruppe mit X Gerät(en) erstellen**, um die neue Gruppe zu erstellen. 

>**Info:** Eine Gruppe kann auch mit "0" Geräten erstellt werden.

<img src="/guides/images/benutzerhandbuch/devmgmt-new-group.png" alt="Gruppe erstellen" style="max-width: 100%">

### <a name="assigning-devices"></a>Zuweisen eines Geräts zu einer bestehenden Gruppe

Geräte können auf zwei Arten zu einer bestehenden Gruppe hinzugefügt werden. 

Aus der Geräteperspektive:

1. Wählen Sie ein Gerät aus der Geräteliste und öffnen Sie es. 
2. Scrollen Sie in der Registerkarte "Info" zur Karte "Gruppenzuordnung". Wählen Sie im Auswahlfeld die Gruppe aus, der Sie das Gerät zuweisen möchten.
3. Klicken Sie **Zuweisen**.

<img src="/guides/images/benutzerhandbuch/devmgmt-assign-device.png" alt=" Gruppe zuweisen" style="max-width: 50%">

Aus der Gruppenperspektive:

1. Wählen Sie im Navigator eine Gruppe aus dem Menü "Gruppe" und wechseln Sie zur Registerkarte "Kind-Assets". Alle Geräte, die dieser Gruppe zugeordnet sind, werden angezeigt.  
2. Klicken Sie **Geräte zuweisen** rechts in der oberen Menüleiste. Im folgenden Fenster können Sie Suchkriterien für die Geräte eingeben, die Sie zu der Gruppe hinzufügen möchten (z.B. "ublox"). Es wird eine Liste der passenden Geräte angezeigt.
3. Wählen Sie durch Aktivieren des jeweiligen Kontrollkästchens die Geräte aus, die Sie zur Gruppe hinzufügen möchten.
5. Klicken Sie **Gruppe mit X Gerät(en) erstellen**, um die Geräte zur Gruppe hinzuzufügen. 

<img src="/guides/images/benutzerhandbuch/devmgmt-assign-devices-from-group.png" alt=" Geräte zuweisen" style="max-width: 50%">

### Erstellen einen untergeordneten Gruppe

1. Wählen Sie im Navigator eine Gruppe aus. 
2. Klicken Sie **Gruppe hinzufügen** rechts in der oberen Menüleiste. 
2. Geben Sie im folgenden Fenster einen Namen für die untergeordnete Gruppe an und klicken Sie **Gruppe hinzufügen**.

### Bearbeiten einer Gruppe

1. In the navigator, click a group to open it. 
2. In the "Info" tab, click **Edit**. This allows you to edit the name of the group and to assign user permissions for the group. 
For further information on permissions, see the [Administration Guide](/guides/users-guide/administration#managing-permissions).

### <a name="smart-groups"></a>Using smart groups

Smart groups are groups dynamically constructed based on filtering criteria. They have a temporary character because the group members can change constantly. Smart groups do not have fixed member listings.They have fixed criteria instead. This type of group can be used, for example, for bulk upgrades of devices of a certain type to a new software or firmware version.

<img src="/guides/images/users-guide/smartfilters.png" alt="Adding top-level groups" style="max-width: 100%">

Smart groups can be created from the device list. 

1. To open the device list, click "All devices" in the navigator.
2. Filter the devices in the list to select the desired devices. Refer to [Filtering devices](#filtering-devices) for details on filtering.
3. Click **Create smart group** at the right of the top menu bar.
4. Enter a name for the group and click **Create**.

<img src="/guides/images/users-guide/smartgroup1.png" alt="Create a smart group" style="max-width: 100%">

The new group will appear as a top-level group in the "Groups" menu of the navigator. Smart groups can be distinguished by a small cogwheel in the folder icon. 

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_SmartgroupIcon.png" alt="Smart groups" style="max-width: 100%">

In the "Sub-asset" tab you can adjust your selection and modify the filter settings.

To delete a smart group, click the menu icon and from the context menu select **Delete**. 

<img src="/guides/images/users-guide/smartgroupdelete1.png" alt="Adding top-level groups" style="max-width: 100%">

**Important**: Deleting a smart group is irreversible.

>**Info**: Smart groups are not shown when using the Cockpit application.
