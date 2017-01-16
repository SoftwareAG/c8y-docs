---
layout: default
title: SaaS Integration
---

## Übersicht

Das Zapier-Add-on zu Cumulocity hilft Ihnen, echte Daten aus Ihren Assets in ERP, CRM und andere Enterprise-IT-Services zu bringen. Es ermöglicht Ihnen auch die Fernsteuerung Ihrer Assets aus diesen Diensten. Das Zapier-Add-on verbindet effektiv mehr als 350 IT-Services mit dem Internet der Dinge. Verwenden Sie das Add-On um ..

* Wartungsmeldungen an das CRM-System zu senden.
* Verkaufsinformationen von Automaten an das ERP-System zu senden.
* Bringen Sie tatsächliche Daten in die Tabellenkalkulation zur Analyse.
* Erstellen Sie Formulare für die manuelle Pflege der Stammdaten Ihrer Assets.
* Verbessern Sie den Kundendienst durch die Automatisierung von Standardinteraktionen, wie z. B. das Zurücksetzen von Maschinen aus Ihren Helpdesk-Tools.

Dieser Abschnitt beschreibt, wie diese und viele andere Anwendungsfälle implementiert werden, indem Cumulocity mit [Zapier](https://zapier.com) kombiniert wird. Es zeigt alle verfügbaren Trigger und Aktionen der Cumulocity Zapier App an und beschreibt, wie Sie sie mit anderen Diensten verbinden können.
Alle Beispiele in diesem Abschnitt erfordern ein Zapier-Konto, das Sie kostenlos unter https://zapier.com beziehen können.

## Zugriff auf Cumulocity App in Zapier

Wenn Sie Zugang zu der App erhalten und Dinge ausprobieren möchten, nehmen Sie bitte Kontakt mit uns auf [Support](https://support.cumulocity.com).

## Wie funktioniert es?

Das Zapier Add-on verbindet Cumulocity auf zwei Arten mit Enterprise IT Services:

* Sie können Daten aus dem Sensor-Netzwerk und von Cumulocity zu diesen IT-Services senden.
* Sie können Daten aus den IT-Services an Cumulocity und das Sensornetzwerk senden.

### Vom Internet der Dinge zu den IT-Dienstleistungen von Unternehmen

Um Daten an Enterprise-IT-Services zu senden, müssen Sie eine CEL-Anweisung in Cumulocity (oder eine der vorhandenen SmartRules) und einen Zap in Zapier einrichten (siehe Abbildung unten).

![Triggers](/guides/zapier/triggersde.png)


#### Neues SmartRule-Ereignis

Mit dem New SmartRule Event-Trigger können Sie zusätzliche Aktionen hinzufügen, wenn Ihr SmartRule ausgeführt wird (z. B. eine Schwellenregel einen Schwellenalarm erzeugt).
Bitte stellen Sie sicher, dass Sie ein SmartRule in Cumulocity erstellt und aktiviert haben, bevor Sie diese Funktion nutzen.
Nachdem Sie diesen Trigger ausgewählt und Ihr Cumulocity-Konto ausgewählt haben, können Sie Ihr SmartRule angeben:

![Cumulocity account](/guides/zapier/setUpSmartRule.png)

|Input|Beschreibung|
|:--|:-------------|
|SmartRule Typ |Die Art der Smart Rule, die mittels Zapier angesprochen werden soll.|
|Aussage|Die Aussage innerhalb der Smart Rule, die angesprochen werden soll. Manche SmartRules unterstützen multiple trigger.|
|SmartRule|Die spezifische Smart Rule, die angesprochen wird. Wenn hier keine Auswahl gegeben wird, müssen Sie eine entsprechenede Smart Rule erstellen.|

Alle Eingaben werden als Dropdown-Liste zur Verfügung gestellt.

Im Testschritt in Zapier geben wir Ihnen ein Beispiel, wie Zapier die Daten erhalten wird.


#### Neue CEL Ereignisse

Der neue CEL-Ereignis-Trigger bietet eine vereinfachte Möglichkeit beliebige Anweisungen von einem Ihrer CEL-Modul an Zapier weiterzuleiten. Bevor Sie diese Funktion nutzen, müssen Sie Ihr Modul in Cumulocity einrichten.
Nachdem Sie den Trigger ausgewählt und Ihr Cumulocity-Konto ausgewählt haben, können Sie dem CEL-Modul angeben:

![Cumulocity account](/guides/zapier/setUpCEL.png)

|Input|Beschreibung|
|:--|:-------------|
|Modul Name|Das CEL Modul in Cumulocity.|
|Aussage|Die Aussage innerhalb CEL Modul, die angesprochen werden soll.|
|Channel?|Ob Sie eine Anweisung oder einen Kanal anhören möchten.|

Im Testschritt in Zapier geben wir Ihnen ein Beispiel, wie Zapier die Daten erhalten wird, aber die Struktur hängt ganz davon ab, wie Ihre Aussage im CEL aussieht. Daher kann es sein, dass einige der Felder in unserem Beispiel in Ihrer CEL-Anweisung nicht vorhanden sind.

Ein [Beispiel](/guides/zapier#examples) für einen Trigger, um mehr zu sehen .

### Von Enterprise IT Services zum Internet der Dinge

Das Zapier-Add-On stellt eine Anzahl von Zapier-Aktionen bereit, um Daten an Cumulocity und an das von Cumulocity verwaltete Gerät zu senden. Die derzeit unterstützten Aktionen sind:

* Neues Gerät.
* Inventar aktualisieren.
* Erstellen der Operation

![Actions](/guides/zapier/actionsde.png)

#### Neues Gerät

"Neues Gerät" registriert ein neues Gerät, so dass Sie es direkt anschließen können. Geben Sie dieselbe Geräte-ID (IMEI, Seriennummer) wie üblich in der Benutzeroberfläche "Geräteregistrierung" ein.

![Device Registration](/guides/zapier/actionDeviceRegistration.png)

#### Stammdaten Aktualisieren

"Stammdaten Aktualisieren" Dadurch können Sie Assets im Cumulocity-Inventar erstellen und aktualisieren. Folgende Parameter können definiert werden:

|Input|Beschreibung|
|:--|:-------------|
|ID|Ein technischer Bezeichner für das Asset.|
|Name|Ein lesbarer Name für das Asset.|
|Fragment|Ein Fragment Typ, das erstellt oder aktualisiert wird.|
|Daten|Die Fragmentdaten als Liste der Schlüssel und Werte.|
|Ist ein Gerät?|Ein Flag, das den Asset als Gerät markiert. Das Asset erscheint, wenn auf "Alle Geräte" geklickt wird.|

Die Assets migrieren in die Stammdaten nach folgendem Verfahren:

1. Die ID wird als Asset-ID interpretiert und das Zapier-Add-on überprüft, ob ein vorhandenes Asset mit der angegebenen Asset-ID existiert.
2. Die ID wird als Cumulocity-globale ID und die Zapier-Add-on-Checks für ein Asset mit dieser globalen ID interpretiert.
3. Der Name wird verwendet, um ein Asset mit einem genau passenden Namen zu finden.

Wenn einer der drei Schritte erfolgreich ist, wird das abgerufene Asset aktualisiert. Wenn nichts gefunden werden konnte, wird ein neues Asset erstellt.

![Inventory](/guides/zapier/actionInventory.png)

#### Vorgang erstellen

"Trigger Geräte Neustart" sendet einen Neustart an ein Gerät.

|Input|Beschreibung|
|:--|:-------------|
|ID|Eine technische Kennung für ein Gerät.|
|Name|Ein lesbarer Name für ein Gerät.|
|Beschreibung|Die Beschreibung der Operation.|
|Fragment|Das Fragment, das der Operation hinzugefügt wird.|
|Data|Die Fragmentdaten als Liste der Schlüssel und Werte.|

Das Gerät wird mit demselben dreistufigen Mechanismus identifiziert, wie oben in der Aktion "Stammdaten Aktualisieren" dargestellt.

![Operation](/guides/zapier/actionOperation.png)

### Konfigurieren des Cumulocity-Kontos in Zapier

Für jeden Trigger und jede Aktion müssen Sie gültige Cumulocity-Anmeldeinformationen hinzufügen. Wenn Sie Ihre erste Zap mit Cumulocity-Verbindung erstellen, müssen Sie ein neues Konto verbinden und in das folgende Dialogfeld gelangen, in dem Sie Ihre Cumulocity-Anmeldeinformationen eingeben.

![Cumulocity account](/guides/zapier/credentials.png)

## Beispiele

> Detaillierte Informationen zum Einrichten von Zaps finden Sie unter https://zapier.com/help/. Beachten Sie, dass die Zapier-Nutzungspläne Einschränkungen für die zu übertragenden Datenmengen aufweisen. Das Versenden von Daten außerhalb Ihres Plans kann Ihr Zap vorübergehend deaktivieren.

### Speichern Sie CEL-Daten in einem Google-Tabellenblatt

Im ersten Beispiel verbinden wir Cumulocity mit Google Spreadsheet und übertragen Live-Messungen von Ihrem Konto in die Tabelle. Sie können die Messungen für die Ad-hoc-Analyse verwenden, um beispielsweise die Leistung verschiedener Geräte zu vergleichen. Das Beispiel besteht aus vier Schritten.

Um das Beispiel auszuführen, benötigen Sie neben Ihrem Zapier-Konto ein Google-Konto. Wenn Sie noch kein Google-Konto haben, besuchen Sie https://google.com und klicken Sie auf "Anmelden" und dann auf "Konto erstellen". Wir nehmen auch an, dass Sie die standardmäßig simulierten Geräte in Ihrem Konto ausgeführt haben.

Öffnen Sie Cumulocity, klicken Sie auf "Event Processing" und wählen Sie "Neues Modul". Geben Sie Ihrem neuen Modul den Namen "zapier". Wählen Sie im Dropdown-Menü "Beispiele" die Option "Simulatortemperatur an Zapier senden". Klicken Sie auf die Schaltfläche "Speichern". Ihr Bildschirm sollte wie der Screenshot unten aussehen.

![Sample CEL statement](/guides/zapier/samplestatement.png)

Die obige Anweisung wählt alle neuen Temperaturmessungen in Ihrem Konto aus und formatiert sie für das Zapier Add-on. Die Ausgabe der Anweisung wird live neben der Anweisung gedruckt. Wenn die Standard-Simulator-Konfiguration läuft, sollte sie mit den Werten beginnen. Mehr Information unter "[Echtzeit Verarbeitung](/guides/concepts/realtime)".

Sie müssen eine Tabelle für das Einfüllen der Daten erstellen, die von Cumulocity kommen. Besuchen Sie https://docs.google.com und klicken Sie auf "Neu" und wählen Sie "Google Tabellen". Klicken Sie auf den Text "Untitled Spreadsheet" am oberen Rand des Bildschirms und geben Sie Ihre Tabelle einen Namen wie "Testkalkulationstabelle". Erstellen Sie in der Kalkulationstabelle eine Kopfzeile und eine Zeile mit Beispieldaten, wie im folgenden Screenshot dargestellt. Die Kopfzeile und die Beispieldaten werden von Zapier verwendet, um die Einrichtung Ihrer "Zap", Ihrer neuen Systemintegration, zu vereinfachen.

![Sample spreadsheet](/guides/zapier/samplespreadsheet.png)

Weitere Informationen zur Verwendung von Kalkulationstabellen mit Zapier finden Sie unter  https://zapier.com/support/questions/2301/using-zapier-with-google-docs/.

Jetzt können Sie Ihr Zap einrichten:

* Wählen Sie "Cumulocity" als "Trigger App".
* Wählen Sie "Neues CEL-Ereignis".
* Verbinden Sie Ihr Cumulocity-Konto in Zapier (oder wählen Sie es aus, wenn Sie es zuvor verbunden haben).
* Eingabe "zapier" bei "Modulname" und "Simulatortemperatur" im Eingang "Statement"
* Wählen Sie "Google Tabellen" als "Action-App" auf der rechten Seite.
* Wählen Sie "Create Spreadsheet Row".
* Verbinden Sie Ihr Google-Konto in Zapier (oder wählen Sie es aus, wenn Sie es zuvor verbunden haben).
* Wählen Sie aus den Pulldown-Menüs Ihre Tabelle und Ihr Arbeitsblatt aus
Ihr Bildschirm sollte wie der Screenshot unten aussehen, nachdem Sie durch alle Schritte gegangen sind:

![Example 1](/guides/zapier/example1.png)

Aktivieren Sie die Zap in Zapier und öffnen Sie das Spreadsheet, um Daten aus dem Simulator zu sehen.

![Result](/guides/zapier/result.png)

### Ein Gerät registrieren aus einem Spreadsheet

In diesem Beispiel gehen wir davon aus, dass Sie eine Tabellenkalkulation pflegen, um Ihre Geräte, ihre IMEIs, ihre SIM-Karten und ihren Einsatzort zu verfolgen - ein "armes Asset Management". Wenn neue Geräte diese Tabelle eingegeben haben, sollte sie automatisch in die Geräteregistrierung von Cumulocity eingetragen werden. Anschließend können Sie das Gerät einschalten und mit Ihrem Konto verknüpfen.

Als ersten Schritt, bereiten Sie eine Tabelle ähnlich wie die unten im Screenshot. Die Spalte "IMEI" liefert die Kennung des Gerätes bei der Registrierung.

![Device spreadsheet](/guides/zapier/devicessheet.png)

Jetzt können Sie Ihr Zap einrichten:

* Wählen Sie "Google Tabellen" als "Trigger App".
* Wählen Sie "Neue Spreadsheet-Zeile".
* Verbinden Sie Ihr Google-Konto in Zapier (oder wählen Sie es aus, wenn Sie es zuvor verbunden haben).
* Wählen Sie aus den Pulldown-Menüs Ihre Tabelle und Ihr Arbeitsblatt aus
* Wählen Sie "Cumulocity" als "Action-App" auf der rechten Seite.
* Wählen Sie "Neues Gerät".
* Verbinden Sie Ihr Cumulocity-Konto in Zapier (oder wählen Sie es aus, wenn Sie es zuvor verbunden haben).
* Wählen Sie die IMEI-Spalte aus der Felderliste aus, die in der Eingabe "Device ID" verwendet werden soll

Ihr Bildschirm sollte wie der Screenshot unten aussehen, nachdem Sie durch alle Schritte durchgegangen sind:

![Example 2](/guides/zapier/example2.png)

Testen Sie den Zap und schalten Sie ihn ein. Geben Sie ein neues Gerät in Ihre Tabelle ein.

![Enter device](/guides/zapier/enterdevice.png)

Nach einer Weile erscheint die Geräte-ID im Dialog "Geräteregistrierung" von Cumulocity.

![Device registered](/guides/zapier/deviceregistration.png)

> Es kann bis zu fünfzehn Minuten dauern, bis Zapier die Änderung im Spreadsheet aufnimmt.

Jetzt können Sie mit diesem Setup spielen. Beispielsweise können Sie eine Workflow-Spalte einführen, die den Zustand des Gerätes (geordnet, auf Lager, Ausrollen, in Produktion) anzeigt und das Gerät nur in Arbeit registriert.

### Verwenden Sie ein Formular, um Kunden in Stammdaten einzugeben

In diesem Beispiel aktualisieren wir das Cumulocity-Inventar mit einem Wufoo-Formular.

Um das Beispiel auszuführen, benötigen Sie eine [Wufoo Konto](http://www.wufoo.com/).

Öffnen Sie den Wufoo Form Builder und erstellen Sie ein Formular für Ihren Inventareintrag. Im Beispiel wollen wir Kundenkontakte im Inventar anlegen. Speichern Sie das Formular.

![Wufoo form](/guides/zapier/wufooform.png)

Jetzt können Sie Ihr Zap einrichten:

* Wählen Sie "Wufoo" als "Trigger App".
* Wählen Sie "Neuer Eintrag".
* Verbinden Sie Ihr Wufoo-Konto in Zapier (oder wählen Sie es aus, wenn Sie es zuvor verbunden haben).
* Wählen Sie aus den Pulldown-Menüs Ihr Formular aus
* Wählen Sie "Cumulocity" als "Action-App" auf der rechten Seite.
* Wählen Sie "Inventar aktualisieren".
* Verbinden Sie Ihr Cumulocity-Konto in Zapier (oder wählen Sie es aus, wenn Sie es zuvor verbunden haben).
* Füllen Sie die Datenfelder aus dem Wufoo-Formular in die Update Inventory-Eingaben (z. B. wie im Screenshot unten)

In diesem Fall erstellen wir für jeden Kunden, der in Wufoo eingetragen ist, einen neuen Eintrag. Die Wufoo-Eintrags-ID kann als Asset-ID in Cumulocity verwendet werden. Als Namen verwenden wir den Vor- und Nachnamen des Kontaktes. "Daten" enthält eine Liste von Schlüssel / Wert-Paaren, die Sie für die verbleibenden Formulardaten verwenden können. Diese Schlüssel / Wert-Paare werden in einem Cumulocity-Fragment "c8y_Contact" gespeichert. Sie können "Ist es ein Gerät?" auf "true" stellen, um die eingegebenen Daten in der Geräteverwaltungsanwendung zu sehen (obwohl Ihr Kontakt nicht genau ein Gerät ist).
![Wufoo Zap](/guides/zapier/wufoozap.png)

Ihr Bildschirm sollte wie der Screenshot unten aussehen, nachdem Sie durch alle Schritte gegangen sind:

![Example 3](/guides/zapier/example3.png)

## Erweiterungen

Zapier bietet eine integrierte Aktion zum Senden von reinen "REST"-Anfragen namens "Webhooks". Sie können diese Aktion verwenden, um Daten direkt an unsere dokumentierten APIs zu senden.

Immer noch Ideen für Features in der Cumulocity App? Schreiben Sie uns.
