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

![Quick Links](/guides/users-guide/quicklinks.png)

Wenn Sie auf "Telefon hinzufügen" klicken, wird ein Assistent gestartet, der den QR-Code zum Herunterladen der Android Cloud Sensor App zeigt:

![Install App](/guides/users-guide/installapp.png)

Scannen Sie diesen QR-Code mit jeder Scan-Anwendung auf Ihrem Smartphone oder installieren Sie einen QR-Scanner. Scannen Sie den Code und laden Sie die App herunter. Die Android Cloud Sensor App wird nach dem Herunterladen gestartet.

## Registrieren der Cloud Sensor App für Ihren Cumulocity IoT Sensor Mandanten

Um ein Smartphone als neues Gerät in Ihrem Mandanten zu registrieren, haben Sie zwei Möglichkeiten:

- Schnellste Option: Einen QR-Code mit verschlüsselten Anmeldeinformationen scannen
- Ansonsten: Verwenden Sie eine webbasierte Registrierung

> Wenn Sie Ihr Smartphone neu registrieren müssen und von Option 1 auf Option 2 (oder umgekehrt) wechseln, müssen Sie das Smartphone-Objekt in der Geräteverwaltung löschen.

Der QR-Code-Registrierungsprozess (Option 1) verwendet Anmeldeinformationen, die aus dem Benutzernamen und dem Kennwort des Benutzers abgeleitet werden, der aktuell an dem IoT Sensor-Mandanten angemeldet ist. Bei der webbasierten Registrierung werden eindeutige Geräteanmeldeinformationen verwendet (Option 2).

### Registrierung mit einem QR-Code 

Klicken Sie im Cockpit-Assistenten auf die Schaltfläche "Weiter", um den QR-Code mit Anmeldeinformationen für die Registrierung der Cloud-Sensor-App auf Ihrem Cumulocity-IoT-Sensor-Mandanten anzuzeigen:

![Register phone](/guides/users-guide/registerphone.png)

Die Anmeldeinformationen sind verschlüsselt, jedoch empfehlen wir, speziell erstellte Demo-Benutzerkonten auf Ihrem Mandanten für große öffentliche Präsentationen zu verwenden.

> Wichtig: Verwenden Sie diese Methode nicht für Produktionsmandanten oder für Mandanten mit sensiblen Daten.

### Registrierung über Web-basierte Registrierung

Der Registrierungsprozess wird gestartet, indem Sie in der Aktionsleiste der Cloud Sensor App auf den Menüpunkt "Manuelle Registrierung" klicken. Das Widget der Aktion sieht aus wie eine Zahnrad-Schaltfläche oder es wird in das Optionen-Menü abhängig von der Auflösung und Ausrichtung des Bildschirms konsolidiert:

![Action bar](/guides/users-guide/actionbar.png)

Als nächstes wählen Sie die Instanz, in der Ihr IoT Sensor Mandant wie cumulocity.com gehostet wird.

![Select Instance](/guides/users-guide/selectinstance.png)

Klicken Sie auf die Schaltfläche "Registrieren", um die Registrierung zu starten. Danach navigieren Sie zum unteren Rand eines Haupt-Cloud-Sensor-App-Bildschirms, dort ist die Geräte-ID, die bei der Geräte-Registrierung im Cumulocity IoT Sensor-Mandant eingegeben werden muss:

![Get device Id](/guides/users-guide/getdeviceid.png)

Geben Sie die Geräte-ID in Ihrem Cumulocity-Mandanten unter Geräteverwaltung -> Geräte -> Registrierung ein:

![Register device](/guides/users-guide/registerdeviceid.png)

Klicken Sie anschließend auf die Schaltfläche "Akzeptieren".

![Accept device](/guides/users-guide/acceptdevice.png)

Nach Anklicken der Schaltfläche "Akzeptieren" erscheint ein Smartphone in der Liste "Alle Geräte" in der Geräteverwaltung:

![All devices](/guides/users-guide/alldevices.png)

Weitere Informationen zur manuellen Registrierung eines Geräts auf der Plattform finden Sie hier: [https://goo.gl/8KNVN3](https://goo.gl/8KNVN3).

## Senden von Sensordaten an Cumulocity

Sobald das Smartphone den Registrierungs-QR-Code gescannt hat, wird es der automatisch erstellten Gruppe "Phones" hinzugefügt. Sie können die Gruppe in der Cockpit-Anwendung navigieren, indem Sie auf die Schaltfläche "Gehe zu den Phones" klicken. 

> Bitte beachten Sie, dass die Schaltfläche im ausstehenden Zustand mit dem Text "Warten ..." bleibt, bis Sie den Registrierungs-QR-Code scannen. Damit wird der Registrierungsprozess abgeschlossen.

![registerphone](/guides/users-guide/registerphone.png)

Sobald Ihre Cloud-Sensor-App entweder mit einem QR-Code oder manuell registriert ist, wird im unteren Teil des Hauptbildschirms der Gerätename und der Name des Mandanten angezeigt, an den die Daten gesendet werden:

![main screen](/guides/users-guide/mainscreen.png)

Die Messungen von den Sensoren Ihres Smartphones werden automatisch an den Cumulocity-Mandanten gesendet, sobald die Registrierung erfolgreich war. Der Pfeil neben dem Wolkenbild zeigt an, dass die Daten an den Mandanten gesendet werden:

![cloud image](/guides/users-guide/cloudimage.png)

Die Datenpunkte werden auch in den Graphen des Dashboards für Ihr Smartphone in der Gruppe "Phones" angezeigt.

![dashboard graph](/guides/users-guide/dashboardgraph.png)

Um die Batterie zu sparen, sendet die Cloud Sensor App keine Messungen an Cumulocity im Hintergrund. Die Daten werden an Cumulocity gebucht, während die App aktiv und sichtbar ist. Die App nimmt die Datenübertragung automatisch wieder auf, wenn sie aus dem Inaktiv- oder Hintergrundmodus zurückkehrt.

## TI-Sensor-Tag an den Cloud-Sensor anschließen

Die Cloud Sensor App wird über Bluetooth mit den beiden TI Sensor Tag Versionen 1.20 und 1.30 verbunden. Verwenden Sie die Plus-Symbolleistenschaltfläche in der Cloud-Sensor-App, um einen Sensor-Tag zu verbinden.

![Plus toolbar button](/guides/users-guide/plustoolbarbutton.png)

Auf dem nächsten Bildschirm werden Sie aufgefordert, nach verfügbaren Sensor-Tags zu suchen, die entdeckt wurden. Drücken Sie "Scan", um den Scanvorgang zu starten. Um einen Sensor-Tag sichtbar zu machen, klicken Sie auf den roten runden Knopf an seiner Seite. Der Sensor-Tag beginnt zu blinken, um anzuzeigen, dass er anschlussbereit ist. Er sollte sofort in der Liste der sichtbaren Bluetooth-Geräte in der Cloud Sensor App erscheinen:

![Connect Sensor Tag](/guides/users-guide/connectsensortag.png)

Drücken Sie "Connect" neben dem Sensor-Tag Ihrer Wahl. Die Bluetooth Verbindung wird zwischen dem Sensor Tag und dem Smartphone hergestellt. Abhängig von der Bluetooth-Hardware Ihres Smartphones kann die zum Herstellen dieser Verbindung benötigte Zeit variieren, und die Fortschrittsleiste gibt den Fortschritt an:

![Generate GUI](/guides/users-guide/generategui.png)

Sobald die Sensor-Tag mit Ihrem Smartphone verbunden ist, sehen Sie die Liste der Sensoren im Sensor-Tag und deren aktuellen Messungen:

![Sensors list](/guides/users-guide/sensorslist.png)

Danach erscheinen die Datenpunkte für die Sensor-Tag-Kurven in Ihrem Cumulocity-Mandanten:

![Sensor tag data points](/guides/users-guide/sensortagdatapoints.png)

Um den Sensor Tag von Ihrem Smartphone zu trennen, klicken Sie bitte auf die Minus-Symbolleistenschaltfläche.

## Gerätesteuerung

Die Cloud Sensor App kann Echtzeit-Steuerbefehle von Cumulocity empfangen. Mit dem Messaging-Widget können Sie Textbenachrichtigungen an das Smartphone senden. Die Vibrationsrelaissteuerung kann zum Ein- / Ausschalten des Vibrationsmotors verwendet werden. Um beispielsweise eine Nachricht von Cumulocity zu senden, geben Sie den Text in das Messaging-Widget ein:

![message widget](/guides/users-guide/messagewidget.png)

Wenn die Taste "Senden" gedrückt wird, erscheint diese Meldung als Pop-up auf dem Bildschirm des Smartphones:

![App message](/guides/users-guide/appmessage.png)

Wenn der Vibrationsschalter eingeschaltet wird, beginnt das Smartphone zu vibrieren, bis der Schalter ausgeschaltet wird.

> Das Smartphone muss mit der Plattform verbunden bleiben, um diese Kommandos zu empfangen.

Um mehr über Dashboard-Widgets zu erfahren, konsultieren Sie bitte
[https://www.cumulocity.com/guides/users-guide/cockpit/#widget.](https://www.cumulocity.com/guides/users-guide/cockpit/#widget.)