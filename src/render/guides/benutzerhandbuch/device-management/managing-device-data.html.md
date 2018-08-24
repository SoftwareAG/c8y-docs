---
order: 60
title: Verwalten von Gerätedaten
layout: redirect
---

### <a name="software-repo"></a> Verwalten von Firmware und Software

Mit dem Firmware-Repository und dem Software-Repository bietet Cumulocity die Möglichkeit, Referenz-Firmware bzw. -Software für Geräte zu verwalten.

Die folgende Beschreibung bezieht sich exemplarisch auf Firmware, gilt aber analog auch für Geräte-Software.

Öffnen Sie das **Firmware-Repository** im Menü **Verwaltung** im Navigator.

Die verfügbaren Firmware-Objekte werden angezeigt, dargestellt als Karten in einem Raster.

<img src="/guides/images/benutzerhandbuch/devmgmt-firmware.png" alt="Firmware-Repository" style="max-width: 100%">

Klicken Sie **Details** auf einer Karte, um diese "umzudrehen" und Details zum Firmware-Objekt anzuzeigen.

Zusätzlich zum Objektnamen und der Version finden Sie hier den Namen der Datei, die die Firmware enthält. 

Darüber hinaus gibt es verschiedene Schaltflächen, die das Aktualisieren der Informationen ermöglichen (siehe unten Hinzufügen eines Firmware-Objekts).

**Hinzufügen eines Firmware-Objekts**

Um ein Firmware-Objekt hinzuzufügen, führen Sie folgende Schritte aus:

1. Laden Sie die Firmware-Datei in der ["Administration"-Anwendung](/guides/benutzerhandbuch/administration#files) hoch. Dieser Schritt ist nicht immer erforderlich, da manche Hersteller die Firmware online anbieten. 
2. Klicken Sie in der Seite **Firmware-Repository** rechts in der oberen Menüleiste **Firmware hinzufügen**. 
3. Geben Sie im folgenden Fenster einen Namen und die Version der Firmware ein.
4. Geben Sie die Datei an, die die Firmware enthält, indem Sie entweder zur Datei navigieren bzw.  diese hochladen oder die URL angeben, unter welcher das Gerät die Firmware herunterladen kann. 
5. Klicken Sie **Speichern**, um Ihre Einstellungen zu speichern.

Analog können Sie eine neue Software zum Software-Repository hinzufügen. 

**Installieren von Firmware auf einem Gerät**

Klicken Sie im Navigator auf **Alle Geräte**, um die Geräteliste anzuzeigen und wählen Sie ein Gerät aus. 

Wechseln Sie zur Registerkarte **Software** für das Gerät und klicken Sie **Firmware installieren**. 

Weitere Informationen finden Sie in der Beschreibung der Registerkarte [**Software**](#software).

>**Info:** Um andere Binärcode-Typen in Cumulocity zu speichern, wechseln Sie zur ["Administration"-Anwendung](/guides/benutzerhandbuch/administration#files).

**Installieren von Firmware auf mehreren Geräten**

Cumulocity bietet die Möglichkeit, Updates von Firmware oder Software für mehrere Geräte gleichzeitig durchzuführen. Führen Sie dazu die folgenden Schritte aus:

1. Führen Sie das Update zunächst für ein Gerät aus, um sicherzustellen, dass das Update funktioniert.
2. Navigieren Sie zu **Kommandos** und wählen Sie **Für alle Gruppenelemente ausführen**.
3. Geben Sie einen Zeitpunkt an, an welchem das Sammelkommando ausgeführt werden soll und klicken Sie **Erstellen**.

Der Kommandostatus wird in der Registerkarte **Stapelkommandos** der ausgewählten Gruppe angezeigt. Weitere Informationen finden Sie unter [Stapelkommandos](#bulk-operations).

### <a name="credentials"></a>Verwalten von Gerätezugangsdaten

Die Seite **Gerätezugangsdaten** listet alle Zugangsdaten auf, die für Ihre verbundenen Geräte erstellt wurden. Jedes Gerät, das [registriert](#device-registration) wurde, wird hier mit der Namenskonvention "device_&lt;id&gt;" angezeigt.

<img src="/guides/images/benutzerhandbuch/devmgmt-device-credentials.png" alt="Gerätezugangsdaten" style="max-width: 100%">

Klicken Sie auf den Pfeil in der Spalte **Globale Rollen**, um eine Liste mit globalen Rollen anzuzeigen. Weisen Sie Berechtigungen für ein Gerät zu oder entfernen Sie Berechtigungen, indem Sie die entsprechenden Kontrollkästchen aktivieren oder deaktivieren. Klicken Sie **Anwenden**, um Ihre Einstellungen zu speichern.

Klicken Sie auf das Menüsymbol rechts von einem Gerät, um über ein Kontextmenü auf folgenden Funktionen zuzugreifen:

* **Bearbeiten** - Um die Details der Gerätezugangsdaten anzuzeigen (siehe unten).

* **Abschalten** - Um zeitweise die Verbindung zu einem Gerät zu unterbrechen.

* **Löschen** - Um die Zugangsdaten für ein Gerät zu löschen. Dies kann erforderlich sein, wenn Sie ein Gerät auf die Werkseinstellungen zurückgesetzt haben. In diesem Fall verliert das Gerät häufig seine zugewiesenen Zugangsdaten. Löschen Sie diese und fahren Sie mit dem normalen [Registrierungsprozess](#device-registration) fort, um das Gerät erneut zu registrieren.

In der Detail-Seite der Gerätezugangsdaten, die angezeigt wird, wenn Sie im Kontextmenü eines Geräts **Bearbeiten** klicken, können Sie 

* ein Gerät per Schieberegler ein-, bzw. abschalten,
* das Passwort für ein Gerät ändern,
* Berechtigungen zuweisen oder entfernen durch aktivieren bzw. deaktivieren der Kontrollkästchen in der Liste **Globale Rollen**. 

<img src="/guides/images/benutzerhandbuch/devmgmt-device-credentials-details.png" alt="Details Gerätezugangsdaten" style="max-width: 100%">

<!--
![Bulk provisioning](/guides/images/users-guide/autoregister.png)

Device credentials can also be provided from a CSV file. Files can be uploaded using the button pointed with an arrow. More details on the file structure can be found in under [Bulk-registering devices](#creds-upload) above.-->
