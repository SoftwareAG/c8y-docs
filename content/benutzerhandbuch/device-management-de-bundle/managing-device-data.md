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

![Firmware List](/images/users-guide/DeviceManagement/devmgmt-management-firmwarerepo.png)

Klicken Sie **Details** auf einer Karte, um diese "umzudrehen" und Details zum Firmware-Objekt anzuzeigen.

![Firmware details](/images/users-guide/DeviceManagement/devmgmt-firmware-details.png)

Neben dem Objektnamen und der Version finden Sie hier den Namen der Datei, die die Firmware enthält. 

Zusätzlich sind mehrere Aktionsschaltflächen verfügbar, die im Folgenden erläutert werden.


#### So fügen Sie ein Firmware-Objekt hinzu

1. Klicken Sie auf der Seite **Firmware-Repository** rechts in der oberen Menüleiste auf **Firmware hinzufügen**. <br><br>![Add firmware](/images/users-guide/DeviceManagement/devmgmt-firmware-add.png)
2. Geben Sie im darauf folgenden Dialog einen Namen und die Version der Firmware ein.
3. Geben Sie die Datei an, die die Firmware enthält, indem Sie sie aus dem Dateisystem hochladen, indem Sie eine URL angeben, über die die Firmware abgerufen werden kann, oder indem Sie eine Datei auswählen, die zuvor in der ["Administration"-Anwendung](/users-guide/administration#files) hinzugefügt wurde. 
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
2. Öffnen Sie die Registerkarte **Software** für das Gerät und klicken Sie **Firmware installieren**. Siehe dazu auch die Beschreibung der Registerkarte **Software** unter [Gerätedetails](/users-guide/device-management#software).

>**Info:** Um andere Binärcode-Typen in Cumulocity zu speichern, wechseln Sie zur ["Administration"-Anwendung](/users-guide/administration#files).

#### So installieren Sie Firmware/Software auf mehreren Geräten

Cumulocity bietet die Möglichkeit, Updates von Firmware oder Software für mehrere Geräte gleichzeitig durchzuführen. Führen Sie dazu die folgenden Schritte aus:

1. Führen Sie das Update zunächst für ein Gerät aus, um sicherzustellen, dass das Update funktioniert.
2. Navigieren Sie zu Kommandos und wählen Sie **Für alle Gruppenelemente ausführen**.
3. Geben Sie einen Zeitpunkt an, zu dem das Stapelkommando ausgeführt werden soll, und klicken Sie **Erstellen**.

Der Kommandostatus wird in der Registerkarte **Stapelkommandos** der ausgewählten Gruppe angezeigt, siehe [Stapelkommandos](#bulk-operations).

#### So löschen Sie ein Firmware-/Software-Objekt

Klicken Sie auf das Menüsymbol rechts oben in der jeweiligen Firmware-/Software-Karte und klicken Sie **Firmware löschen** (bzw. **Software löschen**).

Das Objekt wird aus der Liste gelöscht.


### <a name="configuration-repository"></a>Konfigurations-Repository

In Cumulocity können Sie Konfigurationsdaten von einem Gerät abrufen oder aus einer Datei laden und diese in einem Konfigurations-Repository speichern und verwalten. Konfigurationsdaten enthalten die Grundeinstellungen und Parameter eines Geräts.

Solche Konfigurationssnapshots sind beispielsweise nützlich, um die gleiche Konfiguration auf mehrere Geräte anzuwenden, wie im Folgenden beschrieben. 

Klicken Sie **Konfigurations-Repository** im Menü **Verwaltung** des Navigators. Auf der Seite **Konfigurations-Repository** werden alle verfügbaren Konfigurationen aufgelistet. Jeder Eintrag enthält den Konfigurationsnamen, das Gerät, von welchem die Konfiguration stammt und den Zeitpunkt des Uploads.

![Configuration Repository](/images/users-guide/DeviceManagement/devmgmt-management-configrepo.png)

Um einen Konfigurationssnapshot zu öffnen, klicken Sie auf den entsprechenden Eintrag. Sie können die Angaben hier bearbeiten. Klicken Sie **Speichern**, um Ihre Änderungen zu speichern. Nähere Informationen zu den einzelnen Feldern finden Sie im nächsten Abschnitt.

![Configuration Repository](/images/users-guide/DeviceManagement/devmgmt-management-configrepoedit.png)

#### So fügen Sie einen Konfigurationssnapshot aus einer Datei hinzu

1. Klicken Sie **Konfigurationssnapshot hinzufügen** rechts in der oberen Menüleiste. 
2. Geben Sie im darauf folgenden Dialog einen eindeutigen Namen und eine optionale Beschreibung für die Konfiguration ein.
3. Geben Sie im Feld **Gerätetyp** einen Gerätetypen ein. Den Gerätetypen finden Sie in der Registerkarte **Info** des Zielgeräts.
4. Geben Sie die Datei mit dem Konfigurationssnapshot an, indem Sie sie aus dem Dateisystem hochladen, indem Sie eine URL angeben, über die der Konfigurationssnapshot abgerufen werden kann, oder indem Sie eine Datei auswählen. 
5. Klicken Sie **Konfigurationssnapshot hinzufügen**.

Der Snapshot wird dem Konfigurations-Repository hinzugefügt.

![Configuration Snapshot Repository](/images/users-guide/DeviceManagement/devmgmt-management-configrepo-addsnapshot.png)


#### So laden Sie einen Snapshot von einem Gerät

Neben dem Hinzufügen einer Konfiguration aus einer Datei können Sie auch eine Konfiguration hinzufügen, indem Sie diese von einem Gerät abrufen.

Um eine Konfiguration von einem Gerät zu laden, führen Sie folgende Schritte aus:

1. Navigieren Sie unter **Geräte** > **Alle Geräte** zu dem entsprechenden Gerät und wechseln Sie zur Registerkarte **Konfiguration**. 
2. Klicken Sie **Neuen Snapshot vom Gerät laden** rechts oben unter **Konfigurationssnapshot**. 

Der geladene Snapshot wird im **Konfigurations-Repository** im Menü **Verwaltung** des Navigators angezeigt.

![Retrieve Configuration Snapshot](/images/users-guide/DeviceManagement/devmgmt-devices-config-getnewsnapshot.png)

#### So wenden Sie einen Konfigurationssnapshot auf ein Gerät an

1. Navigieren Sie zu dem entsprechenden Gerät und wechseln Sie zur Registerkarte **Konfiguration**. 
2. Wählen Sie unter **Konfigurationssnapshot** eine Konfiguration aus der Auswahlliste.
3. Klicken Sie **Snapshot an Gerät senden**, um den ausgewählten Snapshot an das Gerät zu senden.

![Apply new snapshot to a device](/images/users-guide/DeviceManagement/devmgmt-devices-config-putsnapshot.png)

#### So wenden Sie den Konfigurationssnapshot eines Geräts auf ein anderes Gerät an

1. Navigieren Sie zu dem entsprechenden Gerät und wechseln Sie zur Registerkarte **Konfiguration**.
2. Klicken Sie **Neuen Snapshot vom Gerät laden** rechts oben unter **Konfigurationssnapshot**.
3. Navigieren Sie zu dem anderen Gerät und wechseln Sie zur Registerkarte **Konfiguration**.
4. Wählen Sie unter **Konfigurationssnapshot** die neue Konfiguration aus der Auswahlliste und klicken Sie **Snapshot an Gerät senden**.
 
>**Info**: Wenn Sie einen Konfigurationssnapshot von einem Gerät auf ein anderes anwenden, enthält die Konfiguration möglicherweise gerätespezifische Daten.

### <a name="credentials"></a>Verwalten von Gerätezugangsdaten

Die Registerkarte **Gerätezugangsdaten** listet alle Zugangsdaten auf, die für Ihre verbundenen Geräte erstellt wurden. Jedes Gerät, das [registriert](#device-registration) wurde, wird hier mit der Namenskonvention "device_&lt;id&gt;" angezeigt.

![Device credentials](/images/users-guide/DeviceManagement/devmgmt-device-credentials.png)

#### So verwalten Sie Berechtigungen für ein Gerät

1. Klicken Sie auf den Pfeil in der Spalte **Globale Rollen**, um eine Liste mit globalen Rollen anzuzeigen. 
2. Zum Zuweisen oder Entfernen von Berechtigungen für ein einzelnes Gerät aktivieren bzw. deaktivieren Sie die jeweiligen Rollen.
3. Klicken Sie **Anwenden**.

Die Rollen für die Geräte werden entsprechend aktualisiert.

#### So bearbeiten Sie Gerätezugangsdaten

1. Klicken Sie auf das Menüsymbol rechts neben einem Gerätezugangsdaten-Eintrag und anschließend auf **Bearbeiten**, um die Gerätedetails zu öffnen.
 
2. In der Detail-Seite können Sie ein Gerät deaktivieren/aktivieren, indem Sie auf den Umschalter **Aktiv** klicken, das Passwort für ein Gerät ändern oder in der Liste **Globale Rollen** Berechtigungen zuweisen oder entfernen. 
 
	![Device credentials details](/images/users-guide/DeviceManagement/devmgmt-device-credentials-details.png)

3. Klicken Sie **Speichern**.

Die Gerätezugangsdaten werden entsprechend aktualisiert.


#### So deaktivieren Sie Gerätezugangsdaten

Klicken Sie auf das Menüsymbol rechts neben dem Gerätezugangsdaten-Eintrag und anschließend auf **Abschalten**.

Die Gerätezugangsdaten werden vorübergehend deaktiviert.

#### So löschen Sie Gerätezugangsdaten

Klicken Sie auf das Menüsymbol rechts neben dem Gerätezugangsdaten-Eintrag und anschließend auf **Löschen**.

Die Gerätezugangsdaten werden dauerhaft gelöscht.

Das Löschen von Gerätezugangsdaten kann erforderlich sein, wenn Sie ein Gerät auf die Werkseinstellungen zurückgesetzt haben. In diesem Fall verliert das Gerät häufig seine zugewiesenen Zugangsdaten. Löschen Sie diese und fahren Sie mit dem normalen [Registrierungsprozess](#device-registration) fort, um das Gerät erneut zu registrieren.