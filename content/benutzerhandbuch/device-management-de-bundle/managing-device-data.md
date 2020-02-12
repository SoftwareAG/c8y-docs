---
weight: 60
title: Verwalten von Gerätedaten
layout: redirect
---


### <a name="software-repo"></a> Verwalten von Firmware und Software

Mit dem Firmware-Repository und dem Software-Repository bietet Cumulocity die Möglichkeit, Referenz-Firmware bzw. -Software für Geräte zu verwalten.

**Info**: Die folgenden Beschreibungen beziehen sich auf Firmware, gelten aber analog auch für Geräte-Software.

Klicken Sie **Firmware Repository** im Menü **Verwaltung** des Navigators.

Die verfügbaren Firmware-Objekte werden angezeigt, dargestellt als Karten in einem Raster.

![Firmware List](/images/benutzerhandbuch/DeviceManagement/devmgmt-management-firmwarerepo.png)

Klicken Sie **Details** auf einer Karte, um diese "umzudrehen" und Details zum Firmware-Objekt anzuzeigen.

![Firmware details](/images/benutzerhandbuch/DeviceManagement/devmgmt-firmware-details.png)

Neben dem Objektnamen und der Version finden Sie hier den Namen der Datei, die die Firmware enthält. 

Zusätzlich sind mehrere Aktionsschaltflächen verfügbar, die im Folgenden erläutert werden.


#### So fügen Sie ein Firmware-Objekt hinzu

1. Klicken Sie auf der Seite **Firmware-Repository** rechts in der oberen Menüleiste auf **Firmware hinzufügen**. <br><br>![Add firmware](/images/benutzerhandbuch/DeviceManagement/devmgmt-firmware-add.png)
2. Geben Sie im darauf folgenden Dialog einen Namen und die Version der Firmware ein.
3. Geben Sie die Datei an, die die Firmware enthält, indem Sie sie aus dem Dateisystem hochladen, indem Sie eine URL angeben, über die die Firmware abgerufen werden kann, oder indem Sie eine Datei auswählen, die zuvor in der ["Administration"-Anwendung](/benutzerhandbuch/administration-de#files) hinzugefügt wurde. 
4. Klicken Sie **Speichern**.

Das Firmware-Objekt wird der Firmware-Liste hinzugefügt.

Analog können Sie eine neue Software zum Software-Repository hinzufügen.

#### So aktualisieren Sie ein Firmware-/Software-Objekt

1. Klicken Sie **Details** auf einer Karte, um diese "umzudrehen" und Details zum Firmware-Objekt anzuzeigen.
3. Aktualisieren Sie den Namen oder die Beschreibung oder geben Sie eine neue Datei für die Firmware an, indem Sie sie aus dem Dateisystem hochladen oder indem Sie eine Datei auswählen. 
4. Klicken Sie **Speichern**.

Das Objekt wird aktualisiert.

#### So laden Sie ein Firmware-/Software-Objekt herunter

1. Klicken Sie **Details** auf einer Karte, um diese "umzudrehen" und Details zum Firmware-Objekt anzuzeigen.
2. Klicken Sie auf das Download-Symbol. 

Das Objekt wird in Ihr Dateisystem heruntergeladen.

#### So installieren Sie Firmware/Software auf einem Gerät

1. Klicken Sie auf **Alle Geräte** im Menü **Geräte** des Navigators und wählen Sie ein Gerät aus der Geräteliste.
2. Öffnen Sie die Registerkarte **Software** für das Gerät und klicken Sie **Firmware installieren**. Siehe dazu auch die Beschreibung der Registerkarte **Software** unter [Gerätedetails](/benutzerhandbuch/device-management-de#software).

>**Info:** Um andere Binärcode-Typen in Cumulocity zu speichern, wechseln Sie zur ["Administration"-Anwendung](/benutzerhandbuch/administration-de#files).

#### So installieren Sie Firmware/Software auf mehreren Geräten

Cumulocity bietet die Möglichkeit, Updates von Firmware oder Software für mehrere Geräte gleichzeitig durchzuführen. Führen Sie dazu die folgenden Schritte aus:

1. Führen Sie das Update zunächst für ein Gerät aus, um sicherzustellen, dass das Update funktioniert.
2. Navigieren Sie zu Kommandos und wählen Sie **Für alle Gruppenelemente ausführen**.
3. Geben Sie einen Zeitpunkt an, zu dem das Stapelkommando ausgeführt werden soll, und klicken Sie **Erstellen**.

Der Kommandostatus wird in der Registerkarte **Stapelkommandos** der ausgewählten Gruppe angezeigt, siehe [Stapelkommandos](#bulk-operations).

#### So löschen Sie ein Firmware-/Software-Objekt

Klicken Sie auf das Menüsymbol rechts oben in der jeweiligen Firmware-/Software-Karte und klicken Sie **Firmware löschen** (bzw. **Software löschen**).

Das Objekt wird aus der Liste gelöscht.

### <a name="credentials"></a>Verwalten von Gerätezugangsdaten

Die Registerkarte **Gerätezugangsdaten** listet alle Zugangsdaten auf, die für Ihre verbundenen Geräte erstellt wurden. Jedes Gerät, das [registriert](/benutzerhandbuch/device-management-de/#connecting-devices) wurde, wird hier mit der Namenskonvention "device_&lt;id&gt;" angezeigt.

![Device credentials](/images/benutzerhandbuch/DeviceManagement/devmgmt-device-credentials.png)

#### So verwalten Sie Berechtigungen für ein Gerät

1. Klicken Sie auf den Pfeil in der Spalte **Globale Rollen**, um eine Liste mit globalen Rollen anzuzeigen. 
2. Zum Zuweisen oder Entfernen von Berechtigungen für ein einzelnes Gerät aktivieren bzw. deaktivieren Sie die jeweiligen Rollen.
3. Klicken Sie **Anwenden**.

Die Rollen für die Geräte werden entsprechend aktualisiert.

#### So bearbeiten Sie Gerätezugangsdaten

1. Klicken Sie auf das Menüsymbol rechts neben einem Gerätezugangsdaten-Eintrag und anschließend auf **Bearbeiten**, um die Gerätedetails zu öffnen.
 
2. In der Detail-Seite können Sie ein Gerät deaktivieren/aktivieren, indem Sie auf den Umschalter **Aktiv** klicken, das Passwort für ein Gerät ändern oder in der Liste **Globale Rollen** Berechtigungen zuweisen oder entfernen. 
 
	![Device credentials details](/images/benutzerhandbuch/DeviceManagement/devmgmt-device-credentials-details.png)

3. Klicken Sie **Speichern**.

Die Gerätezugangsdaten werden entsprechend aktualisiert.


#### So deaktivieren Sie Gerätezugangsdaten

Klicken Sie auf das Menüsymbol rechts neben dem Gerätezugangsdaten-Eintrag und anschließend auf **Abschalten**.

Die Gerätezugangsdaten werden vorübergehend deaktiviert.

#### So löschen Sie Gerätezugangsdaten

Klicken Sie auf das Menüsymbol rechts neben dem Gerätezugangsdaten-Eintrag und anschließend auf **Löschen**.

Die Gerätezugangsdaten werden dauerhaft gelöscht.

Das Löschen von Gerätezugangsdaten kann erforderlich sein, wenn Sie ein Gerät auf die Werkseinstellungen zurückgesetzt haben. In diesem Fall verliert das Gerät häufig seine zugewiesenen Zugangsdaten. Löschen Sie diese und fahren Sie mit dem normalen [Registrierungsprozess](/benutzerhandbuch/device-management-de/#connecting-devices) fort, um das Gerät erneut zu registrieren.