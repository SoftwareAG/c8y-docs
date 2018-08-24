---
order: 70
title: Konfigurations-Repository
layout: redirect
---

In Cumulocity können Sie Konfigurationsdaten von einem Gerät abrufen oder aus einer Datei laden und diese in einem Konfigurations-Repository speichern und verwalten. Konfigurationsdaten enthalten die Grundeinstellungen und Parameter eines Geräts. 

Solche Konfigurationssnapshots sind beispielsweise nützlich, um die gleiche Konfiguration auf mehrere Geräte anzuwenden, wie im Folgenden beschrieben. 

Klicken Sie **Konfigurations-Repository** im Menü **Management** im Navigator, um alle verfügbaren Konfigurationen anzuzeigen. Jeder Eintrag enthält den Konfigurationsnamen, das Gerät, von welchem die Konfiguration stammt und den Zeitpunkt des Uploads.  

![Konfigurations-Repository](/guides/images/benutzerhandbuch/devmgmt-configuration-repository.png)

Um einen Konfigurationssnapshot zu öffnen, klicken Sie auf den entsprechenden Eintrag. Sie können die Angaben hier bearbeiten. Klicken Sie **Speichern**,um Ihre Änderungen zu speichern. Nähere Informationen zu den einzelnen Feldern finden Sie im nächsten Abschnitt. 

![Konfigurationssnapshot](/guides/images/benutzerhandbuch/devmgmt-configuration-details.png)

### Hinzufügen einer Snapshot-Konfiguration aus einer Datei 

Um eine neue Konfiguration aus einer Datei hinzuzufügen, führen Sie folgende Schritte aus:

1. Klicken Sie **Konfigurationssnapshot hinzufügen** rechts in der oberen Menüleiste. 
2. Geben Sie im folgenden Fenster einen eindeutigen Namen und eine optionale Beschreibung für die Konfiguration ein. 
3. Geben Sie im Feld **Gerätetyp** einen Gerätetypen ein. Den Gerätetypen finden Sie in der Registerkarte **Info** des Zielgeräts. 
4. Wählen Sie die Datei mit dem Konfigurationssnapshot, indem Sie eine Datei von Ihrem Computer hochladen, eine externe URL bereitstellen oder eine vorhandene Datei auswählen. 
5. Klicken Sie **Konfigurationssnapshot hinzufügen**, um Ihre Einstellungen zu speichern. 

Der Snapshot wird dem Konfigurations-Repository hinzugefügt.

![Konfigurationssnapshot hinzufügen](/guides/images/benutzerhandbuch/devmgmt-config-snapshot-new.png)


### Laden eines Snapshots von einem Gerät

Neben dem Hinzufügen einer Konfiguration aus einer Datei können Sie auch eine Konfiguration hinzufügen, indem Sie diese von einem Gerät abrufen.

Um eine Konfiguration von einem Gerät zu laden, führen Sie folgende Schritte aus:

1. Navigieren Sie zu dem entsprechenden Gerät und wechseln Sie zur Registerkarte  **Konfiguration**. 
2. Klicken Sie **Neuen Snapshot vom Gerät laden** rechts oben unter **Konfigurationssnapshot**.

Der geladene Snapshot wird zum Konfigurations-Repository hinzugefügt.

<img src="/guides/images/benutzerhandbuch/devmgmt-snapshot-retrieve.png" alt="Konfigurationssnapshot laden" style="max-width: 75%"> 

### Anwenden eines Konfigurationssnapshots auf ein Gerät

Um einen Konfigurationssnapshot auf ein Gerät anzuwenden, führen Sie folgende Schritte aus:

1. Navigieren Sie zu dem entsprechenden Gerät und wechseln Sie zur Registerkarte  **Konfiguration**. 
2. Wählen Sie unter **Konfigurationssnapshot** eine Konfiguration aus der Auswahlliste.
3. Klicken Sie **Snapshot an Gerät senden**, um den ausgewählten Snapshot an das Gerät zu senden. 

![Senden eines Snapshots](/guides/images/users-guide/addsnap.png)

### Anwenden des Konfigurationssnapshots eines Geräts auf ein anderes Gerät

Um den Konfigurationssnapshot eines Geräts auf ein anderes Gerät anzuwenden, führen Sie folgende Schritte aus:

1. Navigieren Sie zu dem entsprechenden Gerät und wechseln Sie zur Registerkarte  **Konfiguration**. 
2. Klicken Sie **Neuen Snapshot vom Gerät laden** rechts oben unter **Konfigurationssnapshot**.
3. Navigieren Sie zu dem anderen Gerät und wechseln Sie zur Registerkarte  **Konfiguration**. 
4. Wählen Sie unter **Konfigurationssnapshot** die neue Konfiguration aus der Auswahlliste und klicken Sie **Snapshot an Gerät senden**.
 
>**Info**: Wenn Sie eine Konfiguration von einem Gerät auf ein anderes anwenden, enthält die Konfiguration möglicherweise gerätespezifische Daten.
