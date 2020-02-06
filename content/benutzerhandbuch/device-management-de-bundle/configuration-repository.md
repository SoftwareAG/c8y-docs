---
weight: 70
title: Konfigurations-Repository
layout: redirect
---


In Cumulocity können Sie Konfigurationsdaten von einem Gerät abrufen oder aus einer Datei laden und diese in einem Konfigurations-Repository speichern und verwalten. Konfigurationsdaten enthalten die Grundeinstellungen und Parameter eines Geräts.

Solche Konfigurationssnapshots sind beispielsweise nützlich, um die gleiche Konfiguration auf mehrere Geräte anzuwenden, wie im Folgenden beschrieben. 

Weitere Informationen zum Konfigurationsmanagement finden Sie auch unter [Device management library > Configuration management](/reference/device-management/#configuration-management) im Reference Guide.

Klicken Sie **Konfigurations-Repository** im Menü **Management** im Navigator, um alle verfügbaren Konfigurationen anzuzeigen. Jeder Eintrag enthält den Konfigurationsnamen, das Gerät, von welchem die Konfiguration stammt und den Zeitpunkt des Uploads.

![Configuration repository](/images/benutzerhandbuch/DeviceManagement/devmgmt-configuration-repository.png)

Um einen Konfigurationssnapshot zu öffnen, klicken Sie auf den entsprechenden Eintrag. Sie können die Angaben hier bearbeiten. Klicken Sie **Speichern**, um Ihre Änderungen zu speichern. Nähere Informationen zu den einzelnen Feldern finden Sie im nächsten Abschnitt.

![Configuration snapshot details](/images/benutzerhandbuch/DeviceManagement/devmgmt-configuration-snapshot-details.png)

### So fügen Sie eine Snapshot-Konfiguration aus einer Datei hinzu

1. Klicken Sie **Konfigurationssnapshot hinzufügen** rechts in der oberen Menüleiste. 
2. Geben Sie im darauf folgenden Dialog einen eindeutigen Namen und eine optionale Beschreibung für die Konfiguration ein.
3. Geben Sie im Feld **Gerätetyp** einen Gerätetypen ein. Den Gerätetypen finden Sie in der Registerkarte **Info** des Zielgeräts.
4. Klicken Sie unter **Datei mit Konfigurationssnapshot** auf eine der verfügbaren Optionen, um die Datei auszuwählen:
 
	* 	Hochladen - Dient zum Hochladen einer Datei aus ihrem Dateisystem.
	* 	Externe URL - Dient zum Bereitstellen einer externen URL.
	* 	Datei auswählen - Dient zum Auswählen einer Datei aus einer Liste.

5. Klicken Sie **Konfigurationssnapshot hinzufügen**, um Ihre Einstellungen zu speichern.

Der Snapshot wird dem Konfigurations-Repository hinzugefügt.


### So laden Sie einen Snapshot von einem Gerät

Neben dem Hinzufügen einer Konfiguration aus einer Datei können Sie auch eine Konfiguration hinzufügen, indem Sie diese von einem Gerät abrufen.

1. Navigieren Sie zu dem entsprechenden Gerät und wechseln Sie zur Registerkarte **Konfiguration**. 
2. Klicken Sie **Neuen Snapshot vom Gerät laden** rechts oben unter **Konfigurationssnapshot**. 

Der geladene Snapshot wird dem Konfigurations-Repository hinzugefügt.

![Retrieve snapshot](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-config-getnewsnapshot.png)

### So wenden Sie einen Konfigurationssnapshot auf ein Gerät an

1. Navigieren Sie zu dem entsprechenden Gerät und wechseln Sie zur Registerkarte **Konfiguration**. 
2. Wählen Sie unter **Konfigurationssnapshot** eine Konfiguration aus der Auswahlliste.
3. Klicken Sie **Snapshot an Gerät senden**, um den ausgewählten Snapshot an das Gerät zu senden.

![Apply snapshot](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-config-putsnapshot.png)

### So wenden Sie den Konfigurationssnapshot eines Geräts auf ein anderes Gerät an

1. Navigieren Sie zu dem entsprechenden Gerät und wechseln Sie zur Registerkarte **Konfiguration**.
2. Klicken Sie **Neuen Snapshot vom Gerät laden** rechts oben unter **Konfigurationssnapshot**.
3. Navigieren Sie zu dem anderen Gerät und wechseln Sie zur Registerkarte **Konfiguration**.
4. Wählen Sie unter **Konfigurationssnapshot** die neue Konfiguration aus der Auswahlliste und klicken Sie **Snapshot an Gerät senden**.
 
>**Info**: Wenn Sie eine Konfiguration von einem Gerät auf ein anderes anwenden, enthält die Konfiguration möglicherweise gerätespezifische Daten.


