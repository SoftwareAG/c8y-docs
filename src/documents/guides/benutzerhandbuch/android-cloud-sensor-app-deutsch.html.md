---
order: 80
title: Android Cloud Sensor App
layout: default
---

## Übersicht

Diese Bedienungsanleitung beschreibt die Android Cloud Sensor Anwendung. Die App sendet die Sensormessungen von einem Texas Instruments (TI) Sensor Tag und einem Android-Smartphone an Cumulocity, um verarbeitet und verwaltet zu werden. Zusätzlich können beide Geräte von Cumulocity aus ferngesteuert werden. Das TI-Sensor-Tag ist ein kabelloses niedrigenergie Gerät, hergestellt von Texas Instruments © [http://www.ti.com/](http://www.ti.com/).

## Wie erhalte ich die Android Cloud Sensor App?

Zur Nutzung der Android Cloud Sensor App benötigen Sie ein Smartphone mit Android Version 5.0 (Lollipop) oder höher. Um die Android-Version zu ermitteln, konsultieren Sie bitte [http://www.wikihow.com/Check-What-Android-Version-You-Have](http://www.wikihow.com/Check-What-Android-Version-You-Have).

Um das Android Cloud Sensor App-Programm herunterzuladen, öffnen Sie bitte die Cockpit-Anwendung in Ihrem Cumulocity IoT Sensor Mandant und klicken Sie auf "Telefon hinzufügen" aus den Quick-Links auf der Willkommen-Seite:

![Quick Links](/guides/users-guide/androidapp01.png)

Wenn Sie auf "Telefon hinzufügen" klicken, wird ein Assistent gestartet, der den QR-Code zum Herunterladen der Android Cloud Sensor App zeigt:

![Install App](/guides/users-guide/androidapp02.png)

Scannen Sie diesen QR-Code mit jeder Scan-Anwendung auf Ihrem Smartphone oder installieren Sie einen QR-Scanner. Scannen Sie den Code und laden Sie die App herunter. Die Android Cloud Sensor App wird nach dem Herunterladen gestartet.

## Registrieren der Cloud Sensor App für Ihren Cumulocity IoT Sensor Mandanten

Um ein Smartphone als neues Gerät in Ihrem Mandanten zu registrieren, haben Sie zwei Möglichkeiten:

- Schnellste Option: Einen QR-Code mit verschlüsselten Anmeldeinformationen scannen
- Verwenden Sie eine webbasierte Registrierung

> Wenn Sie Ihr Smartphone neu registrieren müssen und von Option 1 auf Option 2 (oder umgekehrt) wechseln, müssen Sie das Smartphone-Objekt in der Geräteverwaltung löschen.

Der QR-Code-Registrierungsprozess (Option 1) verwendet Anmeldeinformationen, die aus dem Benutzernamen und dem Kennwort des Benutzers abgeleitet werden, der aktuell an dem IoT Sensor-Mandanten angemeldet ist. Bei der webbasierten Registrierung werden eindeutige Geräte-Anmeldeinformationen verwendet (Option 2).

### Registrierung mit einem QR-Code und Anmeldeinformationen 

Klicken Sie im Cockpit-Assistenten auf die Schaltfläche "Weiter", um den QR-Code mit Anmeldeinformationen für die Registrierung der Cloud-Sensor-App auf Ihrem Cumulocity-IoT-Sensor-Mandanten anzuzeigen:

![Register phone](/guides/users-guide/androidapp03.png)

Die Anmeldeinformationen sind verschlüsselt, jedoch empfehlen wir, speziell erstellte Demo-Benutzerkonten auf Ihrem Mandanten für große öffentliche Präsentationen zu verwenden.

> Wichtig: Verwenden Sie diese Methode nicht für Produktionsmandanten oder für Mandanten mit sensiblen Daten.

### Registrierung über Web-basierte Registrierung

Der Registrierungsprozess wird gestartet, indem Sie den "Web-based Registration"  Knopf drücken.

<center><img src="/guides/users-guide/androidapp04.png" alt="bild" style="max-width: 100%">
</center>

Als nächstes wählen Sie die Instanz, in der Ihr IoT Sensor Mandant wie cumulocity.com gehostet wird.

<center><img src="/guides/users-guide/androidapp05.png" alt="bild" style="max-width: 100%">
</center>

Klicken Sie auf die Schaltfläche "Registrieren", um die Registrierung zu starten. Danach navigieren Sie zum unteren Rand eines Haupt-Cloud-Sensor-App-Bildschirms, dort ist die Geräte-ID, die bei der Geräte-Registrierung im Cumulocity IoT Sensor Demo Mandant eingegeben werden muss:

<center><img src="/guides/users-guide/androidapp06.png" alt="bild" style="max-width: 100%">
</center>

Geben Sie die Geräte-ID in Ihrem Cumulocity-Mandanten unter Geräteverwaltung -> Geräte -> Registrierung ein:

![Register device](/guides/users-guide/androidapp07.png)

Klicken Sie anschließend auf die Schaltfläche "Akzeptieren".

![Accept device](/guides/users-guide/androidapp08.png)

Nach Anklicken der Schaltfläche "Akzeptieren" erscheint ein Smartphone in der Liste "Alle Geräte" in der Geräteverwaltung:

![All devices](/guides/users-guide/androidapp09.png)

Weitere Informationen zur manuellen Registrierung eines Geräts auf der Plattform finden Sie hier: [https://goo.gl/8KNVN3](https://goo.gl/8KNVN3).

## Senden von Sensordaten an Cumulocity

Sobald das Smartphone den Registrierungs-QR-Code gescannt hat, wird es der automatisch erstellten Gruppe "Phones" hinzugefügt. Sie können die Gruppe in der Cockpit-Anwendung navigieren, indem Sie auf die Schaltfläche "Gehe zu den Phones" klicken. 

> Bitte beachten Sie, dass die Schaltfläche im ausstehenden Zustand mit dem Text "Warten ..." bleibt, bis Sie den Registrierungs-QR-Code scannen. Damit wird der Registrierungsprozess abgeschlossen.

![registerphone](/guides/users-guide/androidapp10.png)

Sobald Ihre Cloud-Sensor-App entweder mit einem QR-Code oder manuell registriert ist, wird im unteren Teil des Hauptbildschirms der Gerätename und der Name des Mandanten angezeigt, an den die Daten gesendet werden: Die Anfragen um Erlaubnis im Netzwerk, auf die GPS Information zuzugreifen und die Karten im Bilder Cache abzuspeichern, werden abgefragt sobald die Anwendung started. Sie müssen dem Datentransfer zustimmen ,damit das Smartphone Daten in die Cloud übertragen kann.

![main screen](/guides/users-guide/androidapp11.png)

Sie können auch den Gerätenamen ändern, oder ihn auf den Werkseinstellungen lassen.

<center><img src="/guides/users-guide/androidapp12.png" alt="bild" style="max-width: 100%">
</center>

Ein neues Gerät mit dem Modellnamen und ein Gerätename auf der Plattform erscheint auf dem Bildschirm der Cloud Sensor App. Die Messungen von den Sensoren Ihres Smartphones werden automatisch an Ihren Cumulocity-Mandanten gesendet. Sie können die Daten von Sensoren anzeigen, indem Sie auf die Schaltfläche "Sensoren anzeigen" klicken:

![dashboard graph](/guides/users-guide/androidapp13.png)

Danach erscheinen die Datenpunkte für die Sensor-Tag-Kurven in Ihrem Cumulocity-Mandanten:

<center><img src="/guides/users-guide/androidapp14.png" alt="bild" style="max-width: 100%">
</center>

Ein 3D-Rotations-Widget auf diesem Dashboard zeigt die Daten von einem Gyroskop-Sensor auf Ihrem Smartphone, falls vorhanden: 

<center><img src="/guides/users-guide/androidapp15.png" alt="bild" style="max-width: 100%">
</center>

Um die Batterieleistung zu sparen, sendet die Cloud Sensor App Messungen an Cumulocity nur, wenn die Datenänderung signifikant oder alle 20 Minuten standardmäßig ist. Dieses Sendeintervall kann mit dem Konfigurationsupdate geändert werden. Zu diesem Zweck öffnen Sie bitte die Geräte Verwaltungsanwendung und wählen Ihr Smartphone aus einer Liste von Geräten aus:

![Generate GUI](/guides/users-guide/androidapp16.png)

Eine Registerkarte "Konfiguration" erscheint auf der linken Seite und das Intervall kann in Millisekunden angegeben werden:

![Demo Phone](/guides/users-guide/androidapp17.png)

## Den TI-Sensor-Tag mit der  Cloud-Sensor App verbinden

Die Cloud Sensor App verbindet sich mit den  TI Sensor Tag Version 1.20 und 1.30 via Bluetooth. Benutzen Sie den “Scan devices” Knopf in der Cloud Sensor App um einen Sensor Tag zu verbinden.

<center><img src="/guides/users-guide/androidapp18.png" alt="bild" style="max-width: 100%">
</center>

Auf dem nächsten Bildschirm werden Sie aufgefordert, nach verfügbaren Sensor-Tags zu suchen, die entdeckt wurden. Drücken Sie "Scan", um den Scanvorgang zu starten. Um einen Sensor-Tag sichtbar zu machen, klicken Sie auf den roten runden Knopf an seiner Seite. Der Sensor-Tag beginnt zu blinken, um anzuzeigen, dass er anschlussbereit ist. Er sollte sofort in der Liste der sichtbaren Bluetooth-Geräte in der Cloud Sensor App erscheinen:

<center><img src="/guides/users-guide/androidapp19.png" alt="bild" style="max-width: 100%">
</center>

Klicken Sie auf "Connect" neben dem Sensor Tag Ihrer Wahl. Die Bluetooth-Verbindung wird zwischen dem Sensor-Tag und Ihrem Smartphone hergestellt. Sobald der Sensor Tag mit Ihrem Smartphone gepaart ist, sehen Sie es als Rekord auf dem Bildschirm der Cloud Sensor App:

<center><img src="/guides/users-guide/androidapp20.png" alt="bild" style="max-width: 100%">
</center>

Die Beobachtung von Informationen und Sensordaten vom TI Sensor Tag ist möglich, indem Sie die Taste "Sensoren anzeigen" auf der Karte drücken:

![Scan](/guides/users-guide/androidapp21.png)

Die Datenpunkte für Sensor Tag erscheinen in Ihrem Cumulocity-Mandanten auf dem Diagramm des Cockpit-Smartphone-Dashboards und als Maße in der Geräteverwaltung:

![Sensoren](/guides/users-guide/androidapp22.png)

Um den Sensor-Tag von Ihrem Smartphone zu trennen, drücken Sie bitte die Schaltfläche "Entfernen" .



## Gerätesteuerung

Die Cloud Sensor App kann Echtzeit-Steuerbefehle von Cumulocity empfangen. Mit dem Messaging-Widget können Sie Textbenachrichtigungen an das Smartphone senden. Die Vibrationsrelaissteuerung kann zum Ein- / Ausschalten des Vibrationsmotors verwendet werden. Um beispielsweise eine Nachricht von Cumulocity zu senden, geben Sie den Text in das Messaging-Widget ein:

![Verbinden](/guides/users-guide/androidapp22b.png)

Wenn die Taste "Senden" gedrückt wird, erscheint diese Meldung als Pop-up auf dem Bildschirm des Smartphones:


<center><img src="/guides/users-guide/androidapp23.png" alt="bild" style="max-width: 100%">
</center>

Wenn der Vibrationsschalter eingeschaltet wird, beginnt das Smartphone zu vibrieren, bis der Schalter ausgeschaltet wird.

Um mehr über Dashboard-Widgets zu erfahren, konsultieren Sie bitte:https://www.cumulocity.com/guides/users-guide/cockpit/#widget. 
