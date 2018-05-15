---
order: 90
title: Smart Rules-Sammlung
layout: redirect
---
Cumulocity enthält eine Reihe von vordefinierten Smart Rules. 

<img src="/guides/images/benutzerhandbuch/Cockpit/cockpit-global-smart-rule-add.png" name="Global Smart Rules" style="width:75%;"/>

Für jeden globalen Smart Rules-Typen lassen sich verschiedene Parameter konfigurieren.

Im folgenden Abschnitt werden alle verfügbaren Typen mit den jeweils konfigurierbaren Parametern beschrieben. 

### Bei Alarm SMS senden

**Funktionalität** 

Wenn ein Alarm erzeugt wird, wird eine SMS gesendet.

>**Info:** Diese Regel ist nur verfügbar, wenn Ihr Mandant über einen konfigurierten SMS-Anbieter verfügt.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/Cockpit/cockpit-smart-rule-on-alarm-send-sms.png" name="Smart Rule SMS senden" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Alarm vom Typ:|Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.
|3|SMS senden:|"Telefonnummer": Telefonnummer des Empfängers. Es empfiehlt sich, die Ländervorwahl hinzuzufügen, z. B. "+49" or "0049" für Deutschland. Mehrere Telefonnummern können durch ein Komma getrennt werden (",", ohne Leerzeichen!).<br> "Nachricht": SMS-Text mit max. 160 Zeichen. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter "Smart Rules-Variablen" aufgelistet. 
|4|Ziel-Assets oder Geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde. 

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/guides/reference/device-management) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.  

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/guides/benutzerhandbuch/administration#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

>**Wichtig:** Die Textgröße ist auf insgesamt 160 Zeichen beschränkt. Wenn Sie Variablen verwenden und der Text nach Anwenden der Variablen 160 Zeichen überschreitet, wird die SMS nicht gesendet.

### Bei Alarm E-Mail senden

**Funktionalität** 

Wenn ein Alarm erzeugt wird, wird eine E-Mail gesendet.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/Cockpit/cockpit-smart-rule-on-alarm-send-sms.png" name="Smart Rule E-Mail senden" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Alarm vom Typ:|Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.
|3|E-Mail senden:|"Senden an:/CC an:/BCC an": E-Mail-Adressen der Empfänger. Mehrere Adressen können durch ein Komma getrennt werden (",", ohne Leerzeichen!).<br>"Antwort an": Adresse, die für eine Antwort verwendet werden kann.<br> "Betreff": Betreff der E-Mail. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter "Smart Rules-Variablen" aufgelistet. <br> "Nachricht": Text der E-Mail. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter "Smart Rules-Variablen" aufgelistet. 
|4|Ziel-Assets oder Geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde. 

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/guides/reference/device-management) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.  

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/guides/benutzerhandbuch/administration#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

* Sehen Sie in Ihr Spam-Verzeichnis.


### Bei Alarm eskalieren

**Funktionalität** 

Wenn ein Alarm erzeugt wird, wird eine E-Mail oder SMS gesendet und/oder eine Sprachausgabe generiert.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/Cockpit/cockpit-smart-rule-on-alarm-escalate.png" name="Smart Rule Eskalieren" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Alarm vom Typ:|Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.
|3|Wie folgt eskalieren:|Eskalationsschritte, die nacheinander ausgeführt werden. <br> Klicken Sie **Schritt hinzufügen** um mindestens einen Schritt zu definieren: <br> "Typ": Typ des ausgeführten Schritts. Mögliche Werte sind: <br>  * E-Mail (siehe Regel "Bei Alarm E-Mail senden" für die Beschreibung der Parameter). <br> * SMS (siehe Regel "Bei Alarm SMS senden" für die Beschreibung der Parameter). <br> * Telefon (siehe Regel "Bei Alarm Sprachanruf starten" für die Beschreibung der Parameter). <br> "Bedingung": Die Bedingung, die angewendet wird, wenn die Regel ausgeführt wird. Mögliche Werte sind: <br> * Immer: Aktion wird immer ausgeführt. <br> * Immer, wenn Schritt N fehlgeschlagen ist: Nur Schritte des Typs Telefon können fehlschlagen. Der Schritt wird als fehlgeschlagen gekennzeichnet, wenn alle Wiederholungen erfolglos ausgeführt wurden. Diese Option ist nur verfügbar, wenn bereits ein Schritt des Typs Telefon konfiguriert wurde, auf den Bezug genommen werden kann. 
|4|Ziel-Assets oder Geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde. 

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/guides/reference/device-management) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.  

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/guides/benutzerhandbuch/administration#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

### Bei Alarmdauer Schweregrad erhöhen

**Funktionalität** 

Wenn ein Alarm für einen bestimmten Zeitraum aktiviert ist, wird er Schweregrad erhöht.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/Cockpit/cockpit-smart-rule-on-alarm-increase.png" name="Smart Rule Schweregrad erhöhen" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Alarm vom Typ:|Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.
|3|Alarmschweregrad erhöhen:|Dauer, die ein Alarm aktiv sein muss, bevor der Schweregrad erhöht wird.
|4|Ziel-Assets oder Geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

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

<img src="/guides/images/benutzerhandbuch/Cockpit/cockpit-smart-rule-geofence-alarm.png" name="Smart Rule Geofence Alarm" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Geofence-Verletzung:|Polygon, das die Grenzen des Bereich kennzeichnet. Klicken Sie **Geofence bearbeiten** und legen Sie den Bereich fest. Fügen Sie Punkte durch Doppelklicken hinzu und passen Sie diese durch Klicken und Ziehen an.
|3|Alarm erzeugen:|Grund für das Auslösen eines Alarms: "Bei Betreten", "Bei Verlassen" (der Standardwert), "Bei Betreten und Verlassen".<br>Typ des auszulösenden Alarms.<br> Schweregrad des auszulösenden Alarms. <br>Alarm-Text.
|4|Ziel-Assets oder Geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

Es wird kein Alarm ausgelöst, bis das Gerät den Geofence-Bereich zum ersten mal überschreitet.

**Fehlerbehebung**

* Stellen Sie sicher, dass das Gerät mindestens einmal im Geofence-Bereich war, nachdem die Regel erstellt/aktiviert wurde.
 
* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/guides/reference/device-management) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.  

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/guides/benutzerhandbuch/administration#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

### Bei Geofence E-Mail senden

**Funktionalität**  

Wenn ein Geofence-Bereich überschritten wird, wird eine E-Mail gesendet. 

Diese Regel kann für das Betreten oder Verlassen eines Geofence-Bereichs oder für beides konfiguriert werden. 

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/Cockpit/cockpit-smart-rule-geofence-email.png" name="Smart Rule Geofence E-Mail" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Geofence-Verletzung:|Polygon, das die Grenzen des Bereich kennzeichnet. Klicken Sie **Geofence bearbeiten** und legen Sie den Bereich fest. Fügen Sie Punkte durch Doppelklicken hinzu und passen Sie diese durch Klicken und Ziehen an.
|3|E-Mail senden:|"Senden an:/CC an:/BCC an": E-Mail-Adressen der Empfänger. Mehrere Adressen können durch ein Komma getrennt werden (",", ohne Leerzeichen!).<br>"Antwort an": Adresse, die für eine Antwort verwendet werden kann.<br> "Betreff": Betreff der E-Mail. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter "Smart Rules-Variablen" aufgelistet. <br> "Nachricht": Text der E-Mail. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter "Smart Rules-Variablen" aufgelistet. 
|4|Ziel-Assets oder Geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Info**: Damit die E-Mail versendet wird, muss das Gerät mindestens einmal nach Erstellen der Regel innerhalb des Geofence-Bereichs gewesen sein.

**Fehlerbehebung**

* Stellen Sie sicher, dass das Gerät mindestens einmal im Geofence-Bereich war, nachdem die Regel erstellt/aktiviert wurde.

* Sehe Sie in Ihr Spam-Verzeichnis.


### Energieverbrauch berechnen

**Funktionalität** 

Erstellt einen Verbrauchs-Datenpunkt basierend auf Daten von einem Strom-, Gas oder Wasserzähler.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/Cockpit/cockpit-smart-rule-consumption.png" name="Smart Rule Energieverbrauch" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Verwendeter Messwert:|"Fragment/Series": Fragment/Series des Messwerts. Der eingehende Messwert muss exakt die gleichen Fragment/Series-Werte haben. Wenn eine Regel im Daten-Explorer erstellt wird, sind diese Felder bereits ausgefüllt.  <br> "Zeitintervall": Intervall, in welchem Verbrauchswerte berechnet werden. Spezifiziert, wie oft der Verbrauch berechnet wird, z. B. 1 x pro Stunde. 
|3|Energieverbrauch:|Fragment/Series des zu erstellenden Messwerts.  
|4|Ziel-Assets oder Geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

The unit of the consumption measurement is always per hour (i.e. if the measurements are in "kg" the consumption will be in "kg/h").

The rule takes the last two measurements for a specified time, calculates the difference in value and time and then calculates the consumption per hour.

**Beispiel**
Die Regel wurde so konfiguriert, dass alle 20 Minuten eine Berechnung stattfindet. Die folgenden Messdaten gehen ein: 
100 kg um 11:59h und 200 kg um 12:14h.
um 12:20h wird die Regel ausgelöst und es werden die letzten beiden Messungen zugrunde gelegt. Es wird der Wert- und Zeit-Unterschied berechnet. Der Verbrauchsmesswert von 12:20h beträgt also 400 kg/h.
Wenn keine weiteren Messdaten im letzten Intervall erzeugt wurden, wird ein Messwert mit dem Wert 0 erstellt. 

### Bei fehlenden Messdaten Alarm erzeugen

**Funktionalität**  

Gehen keine neuen Messdaten innerhalb eines bestimmten Zeitraums ein, wird ein Alarm erzeugt. 

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/Cockpit/cockpit-smart-rule-missing-measurements.png" name="Smart Rule fehlende Messwerte" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Verwendeter Messwert:|"Typ": Typ des Messwerts. Der eingehende Messwert muss den gleichen Typen haben. Wenn eine Regel im Daten-Explorer erstellt wird, sind diese Felder bereits ausgefüllt.  <br> "Zeitintervall": Intervall, in welchem Verbrauchswerte berechnet werden. 
|3|Alarm erzeugen:|Typ des auszulösenden Alarms.<br> Schweregrad des auszulösenden Alarms. <br>Alarm-Text.  
|4|Ziel-Assets oder Geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

>**Info:** Die Regel prüft einmal pro Minute, ob das konfigurierte Zeitintervall überschritten wurde. Daher kann es, nachdem das Zeitintervall überschritten wurde, bis zu einer Minute dauern, bis der Alarm erzeugt wird. Um das Überschreiten des Intervalls zu überprüfen, muss mindestens ein Messwert eingegangen sein, nachdem die Regel erstellt/aktiviert wurde. 

### Bei Alarm Kommando ausführen

**Funktionalität**  

Tritt ein bestimmter Alarm auf, wird das spezifizierte Kommando zum Gerät gesendet.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/cockpit/cockpit-smart-rule-execute-command.png" name="Smart Rule Kommando ausführen" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Alarm vom Typ:|Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.
|3|Kommando ausführen:|Das Kommando, das gesendet wird. Das Kommando wird als JSON-Beschreibung bereitgestellt. Unter dem "Kommando"-Feld können einige Standardkommandos ausgewählt werden. Um ein Standardkommando zu verwenden, wählen sie das entsprechende Kommando und klicken Sie die Pfeil-Schaltfläche auf der rechten Seite. Die JSON-Beschreibung des ausgewählten Kommandos wird eingefügt.
|4|Ziel-Assets oder Geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

### Bei Schwellwertüberschreitung Alarm erzeugen

**Funktionalität**  

Wenn definierte gelbe oder rote Bereiche überschritten werden, werden Alarme erzeugt. 

Diese Regel verwendet die folgenden Parameter vom Gerät oder aus der Datenpunktbibliothek: 

* Objekt roter Bereich: Bereich, in welchem das System KRITISCHE Alarme erzeugen soll. Diese Werte können im Daten-Explorer für jeden Datenpunkt bearbeitet werden. 
* 
* Objekt gelber Bereich: Bereich, in welchem das System WENIGER WICHTIGE Alarme erzeugen soll. Diese Werte können im Daten-Explorer für jeden Datenpunkt bearbeitet werden. 

* Datenpunktbibliothek roter/gelber Bereich: Wenn in dem entsprechenden Objekt kein roter/gelber Bereich definiert ist, wird in der Datenpunktbibliothek nach dem konfigurierten Datenpunkteintrag gesucht und die jeweiligen Werte für den roten/gelben Bereich verwendet.

Durch diesen Mechanismus können globale Schwellwertbereiche in der Datenpunktbibliothek definiert werden. Diese globalen Werte können dann von Fall zu Fall für bestimmte Objekte überschrieben werden.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/Cockpit/cockpit-smart-rule-exceed-threshold.png" name="Smart Rule Schwellwertüberschreitung" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Schwellwertüberschreitung:|"Fragment/Series": Fragment/Series des Messwerts. Der eingehende Messwert muss exakt die gleichen Fragment/Series-Werte haben. Wenn eine Regel im Daten-Explorer erstellt wird, sind diese Felder bereits ausgefüllt. <br> "Eintrag in der Datenpunktbibliothek": Name des Eintrags in der Datenpunktbibliothek. Wird verwendet, um die Standardwerte für den roten und gelben Bereich zu ermitteln, wenn diese nicht individuell konfiguriert wurden. 
|3|Alarm erzeugen:|Typ des auszulösenden Alarms.<br> Schweregrad des auszulösenden Alarms. <br>Alarm-Text.  
|4|Ziel-Assets oder Geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

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

* Eingehende Werte innerhalb des roten Bereichs:  <br> Wenn es einen aktiven Alarm des entsprechenden Typs für das Objekt gibt, wird der Schweregrad auf KRITISCH gesetzt. Ansonsten wird ein neuer Alarm mit dem Schweregrad KRITISCH mit den vorgegebenen Parametern erstellt.

* Messwert außerhalb des gelben und roten Bereichs: <br>Wenn es einen aktiven Alarm des entsprechenden Typs für das Objekt gibt, wird der Alarm gelöscht.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/guides/reference/device-management) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.  

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/guides/benutzerhandbuch/administration#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

* Prüfen Sie, ob der Alarm bereits durch die nächste Messung mit Werten im grünen Bereich gelöscht wurde. 

>**Info:**  Wenn Sie einen Alarm löschen, bestätigen Sie damit, dass der Alarm aufgehoben ist. Ein neuer Alarm wird nur erzeugt, wenn das Gerät den Zustand wechselt und den Schwellwert wieder überschreitet. 


### Bei Messbereichsüberschreitung Alarm erzeugen

**Funktionalität**  

When the measurement value enters or leaves the RED range, a CRITICAL alarm is generated or cleared.

The severity of alarm is determined as follows:

* If the measurement value moves into RED range, then the severity is CRITICAL.

* If the measurement value moves into GREEN range, the alarm is cleared.

>**Info:** This rule is similar to the rule "On measurement threshold create alarm". However, in this rule here the RED threshold value is provided explicitly. The threshold rule "On measurement threshold create alarm" extracts the thresholds values from the device or Data Point Library.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/users-guide/Cockpit/cockpit-smart-rule-explicit-threshold.png" name="Smart Rule Messbereichsüberschreitung" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Schwellwertüberschreitung:|"Fragment/Series": Fragment/Series des Messwerts. Der eingehende Messwert muss exakt die gleichen Fragment/Series-Werte haben. Wenn eine Regel im Daten-Explorer erstellt wird, sind diese Felder bereits ausgefüllt. <br> Minimum, Maximum: Wenn sich ein Wert im angegebenen Bereich [minimum; maximum] befindet, wird der konfigurierte Alarm ausgelöst.
|3|Alarm erzeugen:|Typ des auszulösenden Alarms.<br> Schweregrad des auszulösenden Alarms. <br>Alarm-Text.  
|4|Ziel-Assets oder Geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/guides/reference/device-management) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.  

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/guides/benutzerhandbuch/administration#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

* Prüfen Sie, ob der Alarm bereits durch die nächste Messung mit Werten im grünen Bereich gelöscht wurde. 

>**Info:**  Wenn Sie einen Alarm löschen, bestätigen Sie damit, dass der Alarm aufgehoben ist. Ein neuer Alarm wird nur erzeugt, wenn das Gerät den Zustand wechselt und den Schwellwert wieder überschreitet. 


### On alarm initiate text-to-speech call

**Funktionalität**  

When an alarm is created, it initiates a text-to-speech call.

**Parameters**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleInitiateCall.png" name="Smart Rule initiate call" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On alarm matching:|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|3|Text-to-speech:|"Phone number": Valid international phone number. Use country codes in the format "+49" (as an example for Germany).<br> "Message": The text read out by the rule. <br> Retries: The number of retries to reach the target phone number if not successful (default is "0", max is "20").<br> "Interval": The time interval between the retries in minutes (default is "5").<br>"Acknowledgment": If selected the receiver of the call has to acknowledge the call (a call not acknowledged will not count as successful)<br> "Acknowledgment text": The acknowledgment message which will be read after the main message, for example: "Please acknowledge this call by pressing the button 5". <br> "Acknowledgment number": The number of the button the receiver has to push to acknowledge. If the button has been pushed, the call will be successful and the alarm status will be changed to acknowledged.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Fehlerbehebung**

* Make sure that the alarm was created and not duplicated from somewhere.

* Check if the device is in [maintenance](/guides/reference/device-management) mode. No new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Administration > Reprioritizing alarms](/guides/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.


### Smart Rule-Variablen

In einigen Regelparametern können Variablen verwendet werden. Wird eine Regel ausgelöst, werden die Variablen durch die entsprechenden Werte ersetzt. Sie können diesen Mechanismus verwenden, um etwa Gerätenamen oder Alarmtexte in mehreren Ausgaben einzufügen (E-Mail, SMS, Sprachausgabe). Sie können jede Information des auslösenden Ereignisses (wie der Alarm) und des Quellgeräts einbinden.

Die folgende Tabelle enthält eine Liste von Beispielvariablen:

<table>
  <tr>
    <td>Variable</td>
    <td>Inhalt</td>
  </tr>
  <tr>
    <td>#{creationTime}</td>
    <td>Zeitpunkt, an dem der Alarm in der Datenbank erstellt wurde .</td>
  </tr>
  <tr>
    <td>#{type}</td>
    <td>Alarmtyp.</td>
  </tr>
  <tr>
    <td>#{time}</td>
    <td>Zeitpunkt des Alarms, der vom Gerät bereitgestellt wird. </td>
  </tr>
  <tr>
    <td>#{text}</td>
    <td>Beschreibung des Alarms.</td>
  </tr>
  <tr>
    <td>#{source.name}</td>
    <td>Gerätename.</td>
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
    <td>Anzahl der Alarmbenachrichtigungen für dieses Gerät: Wiederholte Benachrichtigungen für dasselbe Gerät und denselben Alarmtypen werden zu einem Alarm zusammengefasst. </td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.street}</td>
    <td>Straße des Gerätestandorts.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.cityCode}</td>
    <td>Postleitzahl des Gerätestandorts.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.city}</td>
    <td>Stadt des Gerätestandorts.</td>
  </tr>
</table>


>**Info:** In case the variable does not exist or is misspelled, the generated content is displayed.