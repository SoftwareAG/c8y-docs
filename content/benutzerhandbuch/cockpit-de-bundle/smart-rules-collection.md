---
weight: 90
title: Smart Rules-Sammlung
layout: redirect
---


<a name="business"></a>

Cumulocity enthält eine Reihe von vordefinierten Smart Rules.

![Global smart rules](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules.png)

Für jeden globalen Smart Rules-Typen lassen sich verschiedene Parameter konfigurieren.

Im folgenden Abschnitt werden alle verfügbaren Typen mit den jeweils konfigurierbaren Parametern beschrieben.

### Bei Alarm SMS senden

**Funktionalität**

Wenn ein Alarm erzeugt wird, wird eine SMS gesendet.

>**Info:** Diese Regel ist nur verfügbar, wenn Ihr Mandant über einen konfigurierten SMS-Anbieter verfügt.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On alarm send SMS](/images/benutzerhandbuch/cockpit/cockpit-smart-rule-on-alarm-send-sms.png)

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.
|2|Bei Alarm vom Typ:|Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.
|3|SMS senden:|Telefonnummer: Telefonnummer des Empfängers. Es empfiehlt sich, die Ländervorwahl hinzuzufügen, z. B. "+49" or "0049" für Deutschland. Mehrere Telefonnummern können durch ein Komma getrennt werden (",", ohne Leerzeichen!).<br> Nachricht: SMS-Text mit max. 160 Zeichen. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter "Smart Rules-Variablen" aufgelistet.
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/benutzerhandbuch/device-management/#maintenance-mode) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/benutzerhandbuch/administration-de#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

>**Wichtig:** Die Textgröße ist auf insgesamt 160 Zeichen beschränkt. Wenn Sie Variablen verwenden und der Text nach Anwenden der Variablen 160 Zeichen überschreitet, wird die SMS nicht gesendet.

### Bei Alarm E-Mail senden

**Funktionalität**

Wenn ein Alarm erzeugt wird, wird eine E-Mail gesendet.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On alarm send email](/images/benutzerhandbuch/cockpit/cockpit-smart-rule-on-alarm-send-email.png)

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.
|2|Bei Alarm vom Typ:|Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.
|3|E-Mail senden:|Senden an:/CC an:/BCC an: E-Mail-Adressen der Empfänger. Mehrere Adressen können durch ein Komma getrennt werden (",", ohne Leerzeichen!).<br>"Antwort an": Adresse, die für eine Antwort verwendet werden kann.<br> "Betreff": Betreff der E-Mail. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter "Smart Rules-Variablen" aufgelistet.<br> Nachricht: Text der E-Mail. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter "Smart Rules-Variablen" aufgelistet.
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/benutzerhandbuch/device-management/#maintenance-mode) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/benutzerhandbuch/administration-de#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

* Sehen Sie in Ihr Spam-Verzeichnis.

### Bei Alarm eskalieren

**Funktionalität**

Sendet eine E-Mail oder SMS, wenn ein Alarm erzeugt wird.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On alarm escalate](/images/benutzerhandbuch/cockpit/cockpit-smart-rule-on-alarm-escalate-it.png)

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.
|2|Bei Alarm vom Typ:|Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.
|3|Wie folgt eskalieren:|Eskalationsschritte, die nacheinander ausgeführt werden. <br> Klicken Sie **Schritt hinzufügen**, um mindestens einen Schritt zu definieren: <br> **Typ**: Typ des ausgeführten Schritts. Mögliche Werte sind: <br> - E-Mail (siehe Regel "Bei Alarm E-Mail senden" für die Beschreibung der Parameter). <br> - SMS (siehe Regel "Bei Alarm SMS senden" für die Beschreibung der Parameter). <br> **Bedingung**: Die Bedingung, die angewendet wird, wenn die Regel ausgeführt wird. Mögliche Werte sind: <br> * Immer: Aktion wird immer ausgeführt. <br> * Immer: Wenn Schritt N fehlgeschlagen ist. Nur Schritte des Typs Telefon können fehlschlagen. Der Schritt wird als fehlgeschlagen gekennzeichnet, wenn alle Wiederholungen erfolglos ausgeführt wurden. Diese Option ist nur verfügbar, wenn bereits ein Schritt des Typs Telefon konfiguriert wurde, auf den Bezug genommen werden kann.
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.


**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/benutzerhandbuch/device-management/#maintenance-mode) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/benutzerhandbuch/administration-de#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.


### Bei Alarmdauer Schweregrad erhöhen

**Funktionalität**

Wenn ein Alarm für einen bestimmten Zeitraum aktiviert ist, wird er Schweregrad erhöht.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On alarm increase severity](/images/benutzerhandbuch/cockpit/cockpit-smart-rule-increase.png)

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.
|2|Bei Alarm vom Typ:|Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.
|3|Alarmschweregrad erhöhen:|Dauer, die ein Alarm aktiv sein muss, bevor der Schweregrad erhöht wird.
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Beschreibung**

Beim Auslösen eines konfigurierten Alarms wird erfasst, wie lange der Alarm aktiv bleibt.

Ist der Alarm nach Ablauf der spezifizierten Dauer immer noch aktiv, wird der Schweregrad um ein Level erhöht, z. B. von WENIGER WICHTIG auf WICHTIG.

Wenn der Alarm den Schweregrad KRITISCH erreicht hat, wird die Überwachung beendet, da keine weitere Aktion möglich ist.

>**Info:** Die Regel prüft einmal pro Minute, ob die konfigurierte Dauer überschritten ist. Daher ist es möglich, dass der Schweregrad sich nicht exakt dann ändert, wenn die Dauer überschritten ist, sondern erst nach der nächsten Prüfung.

### Bei Geofence Alarm erzeugen

**Funktionalität**

Wird ein Geofence-Bereich überschritten, wird ein Alarm erzeugt.

Diese Regel kann für das Betreten oder Verlassen eines Geofence-Bereichs oder für beides konfiguriert werden. Bestehende Alarme werden gelöscht, wenn wieder die gegenteilige Bedingung zutrifft, z. B. wenn ein Auto, das den Geofence-Bereich verlassen hat, wieder in den Bereich eintritt.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On geofence create alarm](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-geofencealarm.png)

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.
|2|Bei Geofence-Übertretung:|Polygon, das die Grenzen des Bereich kennzeichnet. Klicken Sie **Geofence bearbeiten** und legen Sie den Bereich fest. Fügen Sie Punkte durch Doppelklicken hinzu und passen Sie diese durch Klicken und Ziehen an.
|3|Alarm erzeugen:|Grund für das Auslösen eines Alarms: "Bei Betreten", "Bei Verlassen" (der Standardwert), "Bei Betreten und Verlassen".<br>Typ des auszulösenden Alarms. <br> Schweregrad des auszulösenden Alarms. <br>Alarmtext.
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Info**: Damit ein Alarm ausgelöst wird, muss das Gerät mindestens einmal nach Erstellen der Regel innerhalb des Geofence-Bereichs gewesen sein.

**Fehlerbehebung**

* Stellen Sie sicher, dass das Gerät mindestens einmal im Geofence-Bereich war, nachdem die Regel erstellt/aktiviert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/benutzerhandbuch/device-management/#maintenance-mode) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/benutzerhandbuch/administration-de#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

### Bei Geofence E-Mail senden

**Funktionalität**

Wenn ein Geofence-Bereich überschritten wird, wird eine E-Mail gesendet.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On geofence send e-mail](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-geofenceemail.png)

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.
|2|Bei Geofence-Übertretung:|Polygon, das die Grenzen des Bereich kennzeichnet. Klicken Sie **Geofence bearbeiten** und legen Sie den Bereich fest. Fügen Sie Punkte durch Doppelklicken hinzu und passen Sie diese durch Klicken und Ziehen an.
|3|E-Mail senden:|**Senden an:/CC an:/BCC an**: E-Mail-Adressen der Empfänger. Mehrere Adressen können durch ein Komma getrennt werden (",", ohne Leerzeichen!).<br>**Antwort an**: Adresse, die für eine Antwort verwendet werden kann.<br> **Betreff**: Betreff der E-Mail. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter "Smart Rules-Variablen" aufgelistet.<br> **Nachricht**: Text der E-Mail. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter "Smart Rules-Variablen" aufgelistet.
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Info**: Damit die Regel ausgeführt wird, muss das Gerät mindestens einmal nach Erstellen der Regel innerhalb des Geofence-Bereichs gewesen sein.

**Fehlerbehebung**

* Stellen Sie sicher, dass das Gerät mindestens einmal im Geofence-Bereich war, nachdem die Regel erstellt/aktiviert wurde.

* Sehen Sie in Ihr Spam-Verzeichnis.


### Energieverbrauch berechnen

**Funktionalität**

Erstellt einen Verbrauchs-Datenpunkt basierend auf Daten von einem Strom-, Gas oder Wasserzähler.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![Calculate energy consumption](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-energy.png)

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.
|2|Verwendeter Messwert:|**Fragment/Series**: Fragment/Series des Messwerts. Der eingehende Messwert muss exakt die gleichen Fragment/Series-Werte haben. Wenn eine Regel im Daten-Explorer erstellt wird, sind diese Felder bereits ausgefüllt. <br> **Zeitintervall**: Intervall, in welchem Verbrauchswerte berechnet werden. Spezifiziert, wie oft der Verbrauch pro Stunde berechnet wird.
|3|Energieverbrauch:|Fragment/Series des zu erstellenden Messwerts.
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

Die Einheit des Verbrauchsmesswerts bezieht sich immer auf eine Stunde (Beispiel: Messwerte in "kg" geben den Verbrauch in "kg/h" an).

Die Regel verwendet die letzten beiden Messungen in einem bestimmten Zeitraum, berechnet die Differenz von Wert und Zeit und berechnet dann den Verbrauch per Stunde.

**Beispiel**

Die Regel wurde so konfiguriert, dass alle 20 Minuten eine Berechnung stattfindet. Die folgenden Messdaten gehen ein:
100 kg at 11:59 and 200 kg at 12:14.
Um 12:20h wird die Regel ausgelöst und es werden die letzten beiden Messungen zugrunde gelegt. Es wird die Wert- und Zeit-Differenz berechnet. Der Verbrauchsmesswert von 12:20h beträgt also 400 kg/h.
Wenn keine weiteren Messdaten im letzten Intervall erzeugt wurden, wird ein Messwert mit dem Wert 0 erstellt.

### Bei fehlenden Messdaten Alarm erzeugen

**Funktionalität**

Gehen keine neuen Messdaten innerhalb eines bestimmten Zeitraums ein, wird ein Alarm erzeugt.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On missing measurements create alarm](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-missingmeasurement.png)

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.
|2|Verwendeter Messwert:|**Typ**: Typ des Messwerts. Der eingehende Messwert muss den gleichen Typen haben. Wenn eine Regel im Daten-Explorer erstellt wird, ist der Typ bereits angegeben.<br> **Zeitintervall**: Intervall, in welchem Verbrauchswerte berechnet werden.
|3|Alarm erzeugen:|Typ des auszulösenden Alarms. <br> Schweregrad des auszulösenden Alarms. <br>Alarmtext.
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

>**Info:** Die Regel prüft einmal pro Minute, ob das konfigurierte Zeitintervall überschritten wurde. Daher kann es, nachdem das Zeitintervall überschritten wurde, bis zu einer Minute dauern, bis der Alarm erzeugt wird. Um das Überschreiten des Intervalls zu überprüfen, muss mindestens ein Messwert eingegangen sein, nachdem die Regel erstellt/aktiviert wurde.

### Bei Alarm Kommando ausführen

**Funktionalität**

Tritt ein bestimmter Alarm auf, wird das spezifizierte Kommando zum Gerät gesendet.


**Parameter**

Die Regel verwendet die folgenden Parameter:

![On alarm execute operation](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-operation.png)

<table>
<col style="width:5%">
<col style="width:10%">
<col style="width:85%">
<thead>
<tr>
<th style="text-align:center">Schritt</th>
<th style="text-align:left">Feld</th>
<th style="text-align:left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Name der Regel</td>
<td style="text-align:left">Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">Bei Alarm vom Typ:</td>
<td style="text-align:left">Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">Kommando ausführen:</td>
<td style="text-align:left">Das Kommando, das gesendet wird. Das Kommando wird als JSON-Beschreibung bereitgestellt. Unter dem "Kommando"-Feld können einige Standardkommandos ausgewählt werden. Um ein Standardkommando zu verwenden, wählen sie das entsprechende Kommando und klicken Sie die Pfeil-Schaltfläche auf der rechten Seite. Die JSON-Beschreibung des ausgewählten Kommandos wird eingefügt.</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Ziel-Assets oder -geräte</td>
<td style="text-align:left">Gruppen oder Geräte, auf die die Regel angewendet werden soll.</td>
</tr>
</tbody>
</table>

### Bei Schwellwert Alarm erzeugen

**Funktionalität**

Wenn der Messwert einen definierten roten oder gelben Bereich betritt oder verlässt, wird ein Alarm erzeugt bzw. gelöscht.

Der Schweregrad des Alarms wird folgendermaßen bestimmt:

* Wenn der Messwert sich in den roten Bereich bewegt, wird der Schweregrad auf KRITISCH gesetzt.

* Wenn der Messwert sich in den gelben Bereich bewegt, wird der Schweregrad auf WENIGER WICHTIG gesetzt.

* Wenn der Messwert sich in den grünen Bereich bewegt, wird der Alarm gelöscht.

Diese Regel verwendet die folgenden Parameter vom Gerät oder aus der Datenpunktbibliothek:

* Objekt roter Bereich: Bereich, in welchem das System KRITISCHE Alarme erzeugen soll. Diese Werte können im Daten-Explorer für jeden Datenpunkt bearbeitet werden.

* Objekt gelber Bereich: Bereich, in welchem das System WENIGER WICHTIGE Alarme erzeugen soll. Diese Werte können im Daten-Explorer für jeden Datenpunkt bearbeitet werden.

* Datenpunktbibliothek roter/gelber Bereich: Wenn in dem entsprechenden Objekt kein roter/gelber Bereich definiert ist, wird in der Datenpunktbibliothek nach dem konfigurierten Datenpunkteintrag gesucht und die jeweiligen Werte für den roten/gelben Bereich verwendet.

Durch diesen Mechanismus können globale Schwellwertbereiche in der Datenpunktbibliothek definiert werden. Diese globalen Werte können dann von Fall zu Fall für bestimmte Objekte überschrieben werden.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On measurement threshold create alarm](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-thresholdalarm.png)

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.
|2|Bei Schwellwertbereich:|**Fragment/Series**: Fragment/Series des Messwerts. Der eingehende Messwert muss exakt die gleichen Fragment/Series-Werte haben. Wenn eine Regel im Daten-Explorer erstellt wird, sind diese Felder bereits ausgefüllt. <br> **Eintrag in der Datenpunktbibliothek**: Name des Eintrags in der Datenpunktbibliothek. Wird verwendet, um die Standardwerte für den roten und gelben Bereich zu ermitteln, wenn diese nicht individuell konfiguriert wurden.
|3|Alarm erzeugen:|**Typ**: Typ des auszulösenden Alarms. <br>**Text**: Alarm-Text.
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Beschreibung**

Die Regel führt für jeden eingehenden Messwert folgende Schritte aus:

* Prüfen, ob der Messwert Daten für das Fragment/Series enthält (Regelparameter).

* Prüfen, ob die Regel für das Quellobjekt aktiviert ist.

* Die Daten für den roten und gelben Bereich stammen aus:

- dem Quellobjekt (Messwert) oder

- der Datenpunktbibliothek (Kontrollparameter).

Sind keine roten/gelben Bereiche definiert, werden keine Alarme ausgelöst.

>**Info:** Bereichswerte, die im Quellobjekt definiert wurden, haben Priorität über Werte aus der Datenpunktbibliothek. Sie können auch lediglich einen einzelnen Wert überschreiben (z. B. gelber Bereich max), in dem Sie diesen im Quellobjekt setzen. Die anderen Werte werden dann aus der Datenpunktbibliothek übernommen.

* Eingehende Werte innerhalb des gelben Bereichs: <br>Wenn es einen aktiven Alarm des entsprechenden Typs für das Objekt gibt, wird der Schweregrad auf WENIGER WICHTIG gesetzt. Ansonsten wird ein neuer Alarm mit dem Schweregrad WENIGER WICHTIG mit den vorgegebenen Parametern erstellt.

* Eingehende Werte innerhalb des roten Bereichs: <br> Wenn es einen aktiven Alarm des entsprechenden Typs für das Objekt gibt, wird der Schweregrad auf KRITISCH gesetzt. Ansonsten wird ein neuer Alarm mit dem Schweregrad KRITISCH mit den vorgegebenen Parametern erstellt.

* Messwert außerhalb des gelben und roten Bereichs: <br>Wenn es einen aktiven Alarm des entsprechenden Typs für das Objekt gibt, wird der Alarm gelöscht.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/benutzerhandbuch/device-management/#maintenance-mode) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/benutzerhandbuch/administration-de#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

* Prüfen Sie, ob der Alarm bereits durch die nächste Messung mit Werten im grünen Bereich gelöscht wurde.

>**Info:**  Wenn Sie einen Alarm löschen, bestätigen Sie damit, dass der Alarm aufgehoben ist. Ein neuer Alarm wird nur erzeugt, wenn das Gerät den Zustand wechselt und den Schwellwert wieder überschreitet.

### Bei explizitem Schwellwert Alarm erzeugen

**Funktionalität**

Wenn der Messwert den roten Bereich betritt oder verlässt, wird ein KRITISCHER Alarm erzeugt bzw. gelöscht.

Der Schweregrad des Alarms wird folgendermaßen bestimmt:

* Wenn der Messwert sich in den roten Bereich bewegt, wird der Schweregrad auf KRITISCH gesetzt.

* Wenn der Messwert sich in den grünen Bereich bewegt, wird der Alarm gelöscht.

>**Info:** Die Regel ist ähnlich wie die Regel "Bei Schwellwertüberschreitung Alarm erzeugen". Allerdings wird in dieser Regel hier der rote Schwellwert explizit bereitgestellt, während in der Regel "Bei Schwellwert Alarm erzeugen" der Schwellwert vom Gerät oder aus der Datenpunktbibliothek genommen wird.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On measurement explicit threshold create alarm](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-measurementthreshold.png)

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.
|2|Bei Schwellwertbereich:|**Fragment/Series**: Fragment/Series des Messwerts. Der eingehende Messwert muss exakt die gleichen Fragment/Series-Werte haben. Wenn eine Regel im Daten-Explorer erstellt wird, sind diese Felder bereits ausgefüllt. <br> **Minimum, Maximum**: Wenn sich ein Wert im angegebenen Bereich [minimum; maximum] befindet, wird der konfigurierte Alarm ausgelöst.
|3|Alarm erzeugen:|**Typ**: Typ des auszulösenden Alarms. <br>**Text**: Alarm-Text.
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/benutzerhandbuch/device-management/#maintenance-mode) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/benutzerhandbuch/administration-de#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

* Prüfen Sie, ob der Alarm bereits durch die nächste Messung mit Werten im grünen Bereich gelöscht wurde.

>**Info:**  Wenn Sie einen Alarm löschen, bestätigen Sie damit, dass der Alarm aufgehoben ist. Ein neuer Alarm wird nur erzeugt, wenn das Gerät den Zustand wechselt und den Schwellwert wieder überschreitet.

### Smart Rule-Variablen

In einigen Regelparametern können Variablen verwendet werden. Wird eine Regel ausgelöst, werden die Variablen durch die entsprechenden Werte ersetzt. Sie können diesen Mechanismus verwenden, um etwa Gerätenamen oder Alarmtexte in mehreren Ausgaben einzufügen (E-Mail, SMS). Sie können jede Information des auslösenden Ereignisses (wie der Alarm) und des Quellgeräts einbinden.

Die folgende Tabelle enthält eine Liste von Beispielvariablen:

<table>
  <tr>
    <td>Variable</td>
    <td>Inhalt</td>
  </tr>
  <tr>
    <td>#{creationTime}</td>
    <td>Zeit, zu der der Alarm in der Datenbank erstellt wurde.</td>
  </tr>
  <tr>
    <td>#{type}</td>
    <td>Typ des Alarms.</td>
  </tr>
  <tr>
    <td>#{time}</td>
    <td>Zeit des Alarms, wie vom Alarm angegeben.  </td>
  </tr>
  <tr>
    <td>#{text}</td>
    <td>Textbeschreibung des Alarms.</td>
  </tr>
  <tr>
    <td>#{source.name}</td>
    <td>Name des Geräts.</td>
  </tr>
  <tr>
    <td nowrap>#{source.c8y_Hardware.serialNumber}</td>
    <td>Seriennummer des Geräts.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Notes}</td>
    <td>Anmerkungsfeld des Geräts.</td>
  </tr>
  <tr>
    <td>#{status}</td>
    <td>Status des Alarms: AKTIV, BESTÄTIGT oder GELÖSCHT.</td>
  </tr>
  <tr>
    <td>#{severity}</td>
    <td>Schweregrad des Alarms: KRITISCH, WICHTIG, WENIGER WICHTIG oder WARNUNG. </td>
  </tr>
  <tr>
    <td>#{count}</td>
    <td>Anzahl der Alarmnachrichten für dieses Gerät: Sich wiederholende Nachrichten zum selben Gerät und zum selben Alarmtyp werden zu einem Alarm zusammengefasst.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.street}</td>
    <td>Straße des Geräts.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.cityCode}</td>
    <td>Postleitzahl des Geräts.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.city}</td>
    <td>Stadt des Geräts.</td>
  </tr>
</table>


>**Info:** Wenn die Variable nicht existiert oder falsch geschrieben wurde, wird der erzeugte Inhalt angezeigt.
