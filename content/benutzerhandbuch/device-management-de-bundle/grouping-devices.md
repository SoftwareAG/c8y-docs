---
weight: 30
title: Gruppieren von Geräten
layout: redirect
---


Sie können Geräte beliebig nach Ihren Bedürfnissen gruppieren. Ein Gerät kann sich in mehreren Gruppen befinden und Gruppen selbst können wiederum Teil von mehreren anderen Gruppen sein. 

Cumulocity unterscheidet zwischen Top-Level-Gruppen und untergeordneten Gruppen. 


### Anzeigen von Gruppen

Um eine Liste aller Gruppe in Ihrem Konto anzuzeigen, klicken Sie **Gruppen** im Navigator. 

<img src="/images/benutzerhandbuch/devmgmt-groups.png" alt="Gruppen" style="max-width: 100%">

Für jede Gruppe wir der Name und die Anzahl der Kindern angezeigt.

Klicken Sie auf eine Gruppe, um Details dieser Gruppe anzuzeigen. 

<img src="/images/benutzerhandbuch/devmgmt-group-details.png" alt="Gruppendetails" style="max-width: 100%">

**Registerkarte Info**

In der Registerkarte **Info** werden folgende Informationen angezeigt:

|Karte|Beschreibung|
|:---|:---|
|Anmerkungen|Optionale Anmerkungen, die beispielsweise über aktuelle Aktivitäten informieren. Diese können üblicherweise nur von einem Administrator editiert werden. Um Anmerkungen hinzuzufügen oder zu editieren, klicken Sie **Bearbeiten**, geben Sie Ihre Änderungen im Textfeld ein und speichern Sie Ihre Eingaben, indem Sie auf das grüne Häkchen rechts vom Textfeld klicken. 
|Gruppendaten|Editierbare Informationen zur Gruppe (Name, Beschreibung).
|Aktive kritische Alarme|Aktive kritische Alarme für die Geräte in der Gruppe.

**Kind-Assets**

In der Registerkarte **Kind-Assets** werden alle Geräte angezeigt, die der Gruppe zugewiesen wurden. Für jedes Kind-Asset wird der Name und im Fall einer Gruppe die Anzahl der Kinder angezeigt. 

<img src="/images/benutzerhandbuch/devmgmt-child-assets.png" alt="Kind-Assets" style="max-width: 100%">

Um eine Gerät einer Gruppe zuzuweisen, klicken Sie **Geräte zuweisen** rechts in der oberen Menüleiste (siehe [Zuweisen eines Geräts zu einer bestehenden Gruppe](#assigning-devices)).

Um eine Zuweisung aufzuheben, öffnen Sie in dem entsprechenden Eintrag das Kontextmenü über das Menüsymbol und wählen Sie **Zuordnung aufheben**.

**Stapelkommandos**

In der Registerkarte **Stapelkommandos** können Stapelkommandos, die für die Gruppe erstellt wurden, verwaltet werden. Mit Stapelkommandos können Sie in einem Schritt Kommandos für jedes Gerät in der Gruppe ausführen. Weitere Informationen finden Sie unter [Stapelkommandos](#bulk-operations) in "Überwachen und Steuern von Geräten".


### Erstellen einer neuen Gruppe

Um eine neue Gruppe zu erstellen, führen Sie folgende Schritte aus:

1. Klicken Sie die **Plus**-Schaltfläche rechts in der oberen Leiste und wählen Sie im Kontextmenü **Neue Gruppe**.
2. Geben Sie im folgenden Fenster einen eindeutigen Namen für die Gruppe an.  
3. Im Suchfeld können Sie Suchkriterien für die Geräte eingeben, die Sie zu der Gruppe hinzufügen möchten (z.B. "ublox"). Es wird eine Liste der passenden Geräte angezeigt.
4. Wählen Sie durch Aktivieren des jeweiligen Kontrollkästchens die Geräte aus, die Sie zur Gruppe hinzufügen möchten.
5. Klicken Sie **Gruppe mit X Gerät(en) erstellen**, um die neue Gruppe zu erstellen. 

>**Info:** Eine Gruppe kann auch mit "0" Geräten erstellt werden.

<img src="/images/benutzerhandbuch/devmgmt-new-group.png" alt="Gruppe erstellen" style="max-width: 50%">

### <a name="assigning-devices"></a>Zuweisen eines Geräts zu einer bestehenden Gruppe

Geräte können auf zwei Arten zu einer bestehenden Gruppe hinzugefügt werden. 

Aus der Geräteperspektive:

1. Wählen Sie ein Gerät aus der Geräteliste und öffnen Sie es. 
2. Scrollen Sie in der Registerkarte **Info** zur Karte **Gruppenzuordnung**. Wählen Sie im Auswahlfeld die Gruppe aus, der Sie das Gerät zuweisen möchten.
3. Klicken Sie **Zuweisen**.

<img src="/images/benutzerhandbuch/devmgmt-assign-device.png" alt=" Gruppe zuweisen" style="max-width: 50%">

Aus der Gruppenperspektive:

1. Wählen Sie im Navigator eine Gruppe aus dem Menü **Gruppe** und wechseln Sie zur Registerkarte **Kind-Assets**. Alle Geräte, die dieser Gruppe zugeordnet sind, werden angezeigt.  
2. Klicken Sie **Geräte zuweisen** rechts in der oberen Menüleiste. Im folgenden Fenster können Sie Suchkriterien für die Geräte eingeben, die Sie zu der Gruppe hinzufügen möchten (z.B. "ublox"). Es wird eine Liste der passenden Geräte angezeigt.
3. Wählen Sie durch Aktivieren des jeweiligen Kontrollkästchens die Geräte aus, die Sie zur Gruppe hinzufügen möchten.
5. Klicken Sie **Gruppe mit X Gerät(en) erstellen**, um die Geräte zur Gruppe hinzuzufügen. 

<img src="/images/benutzerhandbuch/devmgmt-assign-devices-from-group.png" alt=" Geräte zuweisen" style="max-width: 50%">

### Erstellen einen untergeordneten Gruppe

1. Wählen Sie im Navigator eine Gruppe aus. 
2. Klicken Sie **Gruppe hinzufügen** rechts in der oberen Menüleiste. 
2. Geben Sie im folgenden Fenster einen Namen für die untergeordnete Gruppe an und klicken Sie **Gruppe hinzufügen**.

### Bearbeiten einer Gruppe

1. Klicken Sie im Menü **Gruppe** im Navigator auf eine Gruppe, um diese zu öffnen. 
2. Klicken Sie **Bearbeiten** in der Registerkarte **Info**. Sie können den Namen der Gruppe bearbeiten sowie Benutzerberechtigungen für die Gruppe zuweisen. Weitere Informationen zu den Berechtigungen finden Sie unter Administration > [Verwalten von Berechtigungen](/benutzerhandbuch/administration#managing-permissions).

### <a name="smart-groups"></a>Verwenden von dynamischen Gruppen

Dynamische Gruppen werden basierend auf Filterkriterien erstellt. Sie sind insofern temporär, als die Gruppenelemente sich ständig ändern können. Dynamische Gruppen haben keine feststehenden Elemente, sondern feststehende Kriterien. Dieser Gruppentyp kann beispielsweise eingesetzt werden, um Bulk-Upgrades von Geräten eines bestimmten Typs auf eine neue Software- oder Firmware-Version durchzuführen. 

Dynamische Gruppen werden in der Geräteliste erstellt. 

1. Klicken Sie **Alle Geräte** im Navigator, um die Geräteliste anzuzeigen.
2. Filtern Sie die Geräte in der Liste nach den gewünschten Kriterien. Nähere Information zum Filtern finden Sie unter [Filtern von Geräten](#filtering-devices).
3. Klicken Sie **Dynamische Gruppe erstellen** rechts in der oberen Menüleiste.
4. Geben Sie einen Namen für die Gruppe ein und klicken Sie **Erstellen**.

<img src="/images/benutzerhandbuch/devmgmt-smartgroup-create.png" alt="Dynamische Gruppe erstellen" style="max-width: 50%">

Die neue Gruppe erscheint als Top-Level-Gruppe im Menü **Gruppe** im Navigator. Dynamische Gruppen werden durch ein kleines Zahnrad im Ordnersymbol gekennzeichnet.  

<img src="/images/users-guide/DeviceManagement/DevMgmt_SmartgroupIcon.png" alt="Smart groups" style="max-width: 100%">

In der Registerkarte **Kind-Assets** können Sie Ihre Auswahl anpassen und die Filtereinstellungen ändern.

Um eine dynamische Gruppe zu löschen, klicken Sie **Gruppen** im Navigator, klicken Sie in der Gruppenliste das Menüsymbol des entsprechenden Eintrags und klicken Sie **Löschen** im Kontextmenü. 

<img src="/images/benutzerhandbuch/devmgmt-smartgroup-delete.png" alt="Dynamische Gruppe löschen" style="max-width: 100%">

**Wichtig**: Das Löschen einer dynamischen Gruppe ist irreversibel. 

>**Info**: In der Cockpit-Anwendung werden dynamische Gruppen nicht angezeigt.
