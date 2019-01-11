---
order: 90
title: Smart Rules-Sammlung
layout: redirect
---
Cumulocity enthält eine Reihe von vordefinierten Smart Rules. 

<img src="/guides/images/benutzerhandbuch/cockpit-global-smart-rule-add.png" name="Global Smart Rules" style="width:75%;"/>

Für jeden globalen Smart Rules-Typen lassen sich verschiedene Parameter konfigurieren.

Im folgenden Abschnitt werden alle verfügbaren Typen mit den jeweils konfigurierbaren Parametern beschrieben. 

### Bei Alarm SMS senden

**Funktionalität** 

Wenn ein Alarm erzeugt wird, wird eine SMS gesendet.

>**Info:** Diese Regel ist nur verfügbar, wenn Ihr Mandant über einen konfigurierten SMS-Anbieter verfügt.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/cockpit-smart-rule-on-alarm-send-sms.png" name="Smart Rule SMS senden" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Alarm vom Typ:|Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.
|3|SMS senden:|"Telefonnummer": Telefonnummer des Empfängers. Es empfiehlt sich, die Ländervorwahl hinzuzufügen, z. B. "+49" or "0049" für Deutschland. Mehrere Telefonnummern können durch ein Komma getrennt werden (",", ohne Leerzeichen!).<br> "Nachricht": SMS-Text mit max. 160 Zeichen. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter "Smart Rules-Variablen" aufgelistet. 
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

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

<img src="/guides/images/benutzerhandbuch/cockpit-smart-rule-on-alarm-send-sms.png" name="Smart Rule E-Mail senden" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Alarm vom Typ:|Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.
|3|E-Mail senden:|**Senden an / CC an / BCC an**: E-Mail-Adressen der Empfänger. Mehrere Adressen können durch ein Komma getrennt werden (",", ohne Leerzeichen!).<br>**Antwort an**: Adresse, die für eine Antwort verwendet werden kann.<br> **Betreff**: Betreff der E-Mail. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter **Smart Rules-Variablen** aufgelistet. <br> **Nachricht**: Text der E-Mail. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter **Smart Rules-Variablen** aufgelistet. 
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde. 

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/guides/reference/device-management) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.  

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/guides/benutzerhandbuch/administration#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

* Sehen Sie in Ihr Spam-Verzeichnis.


### Bei Alarm eskalieren

**Funktionalität** 

Wenn ein Alarm erzeugt wird, wird eine E-Mail oder SMS gesendet.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/cockpit-smart-rule-on-alarm-escalate.png" name="Smart Rule Eskalieren" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Alarm vom Typ:|Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.
|3|Wie folgt eskalieren:|Eskalationsschritte, die nacheinander ausgeführt werden. <br> Klicken Sie **Schritt hinzufügen** um mindestens einen Schritt zu definieren: <br> **Typ**: Typ des ausgeführten Schritts. Mögliche Werte sind: <br>  * E-Mail (siehe Regel "Bei Alarm E-Mail senden" für die Beschreibung der Parameter). <br> * SMS (siehe Regel "Bei Alarm SMS senden" für die Beschreibung der Parameter). <br> **Bedingung**: Die Bedingung, die angewendet wird, wenn die Regel ausgeführt wird. Mögliche Werte sind: <br> * Immer: Aktion wird immer ausgeführt. <br> * Immer, wenn Schritt N fehlgeschlagen ist: Nur Schritte des Typs Telefon können fehlschlagen. Der Schritt wird als fehlgeschlagen gekennzeichnet, wenn alle Wiederholungen erfolglos ausgeführt wurden. Diese Option ist nur verfügbar, wenn bereits ein Schritt des Typs Telefon konfiguriert wurde, auf den Bezug genommen werden kann. 
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde. 

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/guides/reference/device-management) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.  

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/guides/benutzerhandbuch/administration#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

### Bei Alarmdauer Schweregrad erhöhen

**Funktionalität** 

Wenn ein Alarm für einen bestimmten Zeitraum aktiviert ist, wird er Schweregrad erhöht.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/cockpit-smart-rule-on-alarm-increase.png" name="Smart Rule Schweregrad erhöhen" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
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

<img src="/guides/images/benutzerhandbuch/cockpit-smart-rule-geofence-alarm.png" name="Smart Rule Geofence Alarm" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Geofence-Übertretung:|Polygon, das die Grenzen des Bereich kennzeichnet. Klicken Sie **Geofence bearbeiten** und legen Sie den Bereich fest. Fügen Sie Punkte durch Doppelklicken hinzu und passen Sie diese durch Klicken und Ziehen an.
|3|Alarm erzeugen:|Grund für das Auslösen eines Alarms: "Bei Betreten", "Bei Verlassen" (der Standardwert), "Bei Betreten und Verlassen".<br>Typ des auszulösenden Alarms.<br> Schweregrad des auszulösenden Alarms. <br>Alarm-Text.
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Info**: Damit ein Alarm ausgelöst wird, muss das Gerät mindestens einmal nach Erstellen der Regel innerhalb des Geofence-Bereichs gewesen sein.

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

<img src="/guides/images/benutzerhandbuch/cockpit-smart-rule-geofence-email.png" name="Smart Rule Geofence E-Mail" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Geofence-Übertretung:|Polygon, das die Grenzen des Bereich kennzeichnet. Klicken Sie **Geofence bearbeiten** und legen Sie den Bereich fest. Fügen Sie Punkte durch Doppelklicken hinzu und passen Sie diese durch Klicken und Ziehen an.
|3|E-Mail senden:|**Senden an / CC an / BCC an**: E-Mail-Adressen der Empfänger. Mehrere Adressen können durch ein Komma getrennt werden (",", ohne Leerzeichen!).<br>**Antwort an**: Adresse, die für eine Antwort verwendet werden kann.<br> **Betreff**: Betreff der E-Mail. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter **Smart Rules-Variablen** aufgelistet. <br> **Nachricht**: Text der E-Mail. Es können Variablen im Format #{name} verwendet werden. Die unterstützten Variablen werden weiter unten unter **Smart Rules-Variablen** aufgelistet. 
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Info**: Damit ein Alarm ausgelöst wird, muss das Gerät mindestens einmal nach Erstellen der Regel innerhalb des Geofence-Bereichs gewesen sein.

**Fehlerbehebung**

* Stellen Sie sicher, dass das Gerät mindestens einmal im Geofence-Bereich war, nachdem die Regel erstellt/aktiviert wurde.

* Sehe Sie in Ihr Spam-Verzeichnis.


### Energieverbrauch berechnen

**Funktionalität** 

Erstellt einen Verbrauchs-Datenpunkt basierend auf Daten von einem Strom-, Gas oder Wasserzähler.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/cockpit-smart-rule-consumption.png" name="Smart Rule Energieverbrauch" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Verwendeter Messwert:|**Fragment/Series**: Fragment/Series des Messwerts. Der eingehende Messwert muss exakt die gleichen Fragment/Series-Werte haben. Wenn eine Regel im Daten-Explorer erstellt wird, sind diese Felder bereits ausgefüllt.  <br> **Zeitintervall**: Intervall, in welchem Verbrauchswerte berechnet werden. Spezifiziert, wie oft der Verbrauch pro Stunde berechnet wird.
|3|Energieverbrauch:|Fragment/Series des zu erstellenden Messwerts.  
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

>**Info**: Die Einheit des Verbrauchsmesswerts ist immer pro Stunde. Hat der Messwert die Einheit "kg" wird der Verbrauch in "kg/h" ausgegeben.

Die Regel verwendet die letzten beiden Messungen in einem bestimmten Zeitraum, berechnet die Differenz von Wert und Zeit und berechnet dann den Verbrauch per Stunde. 

**Beispiel**
Die Regel wurde so konfiguriert, dass alle 20 Minuten eine Berechnung stattfindet. Die folgenden Messdaten gehen ein: 
100 kg um 11:59h und 200 kg um 12:14h.
um 12:20h wird die Regel ausgelöst und es werden die letzten beiden Messungen zugrunde gelegt. Es wird die Wert- und Zeit-Differenz berechnet. Der Verbrauchsmesswert von 12:20h beträgt also 400 kg/h.
Wenn keine weiteren Messdaten im letzten Intervall erzeugt wurden, wird ein Messwert mit dem Wert 0 erstellt. 

### Bei fehlenden Messdaten Alarm erzeugen

**Funktionalität**  

Gehen keine neuen Messdaten innerhalb eines bestimmten Zeitraums ein, wird ein Alarm erzeugt. 

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/cockpit-smart-rule-missing-measurements.png" name="Smart Rule fehlende Messwerte" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Verwendeter Messwert:|**Typ**: Typ des Messwerts. Der eingehende Messwert muss den gleichen Typen haben. Wenn eine Regel im Daten-Explorer erstellt wird, sind diese Felder bereits ausgefüllt.  <br> **Zeitintervall**: Intervall, in welchem Verbrauchswerte berechnet werden. 
|3|Alarm erzeugen:|Typ des auszulösenden Alarms.<br> Schweregrad des auszulösenden Alarms. <br>Alarm-Text.  
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

>**Info:** Die Regel prüft einmal pro Minute, ob das konfigurierte Zeitintervall überschritten wurde. Daher kann es, nachdem das Zeitintervall überschritten wurde, bis zu einer Minute dauern, bis der Alarm erzeugt wird. Um das Überschreiten des Intervalls zu überprüfen, muss mindestens ein Messwert eingegangen sein, nachdem die Regel erstellt/aktiviert wurde. 

### Bei Alarm Kommando ausführen

**Funktionalität**  

Tritt ein bestimmter Alarm auf, wird das spezifizierte Kommando zum Gerät gesendet.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/cockpit-smart-rule-execute-command.png" name="Smart Rule Kommando ausführen" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Alarm vom Typ:|Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.
|3|Kommando ausführen:|Das Kommando, das gesendet wird. Das Kommando wird als JSON-Beschreibung bereitgestellt. Unter dem Feld **Kommando** können einige Standardkommandos ausgewählt werden. Um ein Standardkommando zu verwenden, wählen sie das entsprechende Kommando und klicken Sie die Pfeil-Schaltfläche auf der rechten Seite. Die JSON-Beschreibung des ausgewählten Kommandos wird eingefügt.
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

### Bei Schwellwert Alarm erzeugen

**Funktionalität**  

Wenn der Messwert einen definierten roten oder gelben Bereich betritt oder verlässt, wird ein Alarm erzeugt bzw. gelöscht.  

Der Schweregrad des Alarms wird folgendermaßen bestimmt:

* Wenn der Messwert sich in den roten Bereich bewegt, wird der Schweregrad auf KRITISCH gesetzt.

* Wenn der Messwert sich in den gelben Bereich bewegt, wird der Schweregrad auf WENIGER WICHTIG gesetzt.

* Wenn der Messwert sich in den grünen Bereich bewegt, wird der Alarm gelöscht.

Diese Regel verwendet die folgenden Parameter vom Gerät oder aus der Datenpunktbibliothek: 

* Objekt roter Bereich: Bereich, in welchem das System KRITISCHE Alarme erzeugen soll. Diese Werte können im Daten-Explorer für jeden Datenpunkt bearbeitet werden. 
* 
* Objekt gelber Bereich: Bereich, in welchem das System WENIGER WICHTIGE Alarme erzeugen soll. Diese Werte können im Daten-Explorer für jeden Datenpunkt bearbeitet werden. 

* Datenpunktbibliothek roter/gelber Bereich: Wenn in dem entsprechenden Objekt kein roter/gelber Bereich definiert ist, wird in der Datenpunktbibliothek nach dem konfigurierten Datenpunkteintrag gesucht und die jeweiligen Werte für den roten/gelben Bereich verwendet.

Durch diesen Mechanismus können globale Schwellwertbereiche in der Datenpunktbibliothek definiert werden. Diese globalen Werte können dann von Fall zu Fall für bestimmte Objekte überschrieben werden.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/cockpit-smart-rule-exceed-threshold.png" name="Smart Rule Schwellwertüberschreitung" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Schwellwertbereich:|**Fragment/Series**: Fragment/Series des Messwerts. Der eingehende Messwert muss exakt die gleichen Fragment/Series-Werte haben. Wenn eine Regel im Daten-Explorer erstellt wird, sind diese Felder bereits ausgefüllt. <br> **Eintrag in der Datenpunktbibliothek**: Name des Eintrags in der Datenpunktbibliothek. Wird verwendet, um die Standardwerte für den roten und gelben Bereich zu ermitteln, wenn diese nicht individuell konfiguriert wurden. 
|3|Alarm erzeugen:|Typ des auszulösenden Alarms.<br> Schweregrad des auszulösenden Alarms. <br>Alarm-Text.  
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Beschreibung**

Die Regel führt für jeden eingehenden Messwert folgende Schritte aus:

* Prüfen, ob der Messwert Daten für das Fragment/Series enthält (Regelparameter).

* Prüfen, ob die Regel für das Quellobjekt aktiviert ist.

* Die Daten für den roten und gelben Bereich stammen aus:

- dem Quellobjekt (Messwert) oder

- der Datenpunktbibliothek (Kontrollparameter).

Sind keine roten/gelben Bereiche definiert, werden keine Alarme ausgelöst.

>**Info:** Bereichswerte, die im Quellobjekt definiert wurden, haben Priorität über Werte aus der Datenpunktbibliothek. Sie können auch lediglich einen einzelnen Wert überschreiben (z. B. gelber Bereich max), indem Sie diesen im Quellobjekt setzen. Die anderen Werte werden dann aus der Datenpunktbibliothek übernommen.

* Eingehende Werte innerhalb des gelben Bereichs: <br>Wenn es einen aktiven Alarm des entsprechenden Typs für das Objekt gibt, wird der Schweregrad auf WENIGER WICHTIG gesetzt. Ansonsten wird ein neuer Alarm mit dem Schweregrad WENIGER WICHTIG mit den vorgegebenen Parametern erstellt. 

* Eingehende Werte innerhalb des roten Bereichs:  <br> Wenn es einen aktiven Alarm des entsprechenden Typs für das Objekt gibt, wird der Schweregrad auf KRITISCH gesetzt. Ansonsten wird ein neuer Alarm mit dem Schweregrad KRITISCH mit den vorgegebenen Parametern erstellt.

* Messwert außerhalb des gelben und roten Bereichs: <br>Wenn es einen aktiven Alarm des entsprechenden Typs für das Objekt gibt, wird der Alarm gelöscht.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/guides/reference/device-management) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.  

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/guides/benutzerhandbuch/administration#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

* Prüfen Sie, ob der Alarm bereits durch die nächste Messung mit Werten im grünen Bereich gelöscht wurde. 

>**Info:**  Wenn Sie einen Alarm löschen, bestätigen Sie damit, dass der Alarm aufgehoben ist. Ein neuer Alarm wird nur erzeugt, wenn das Gerät den Zustand wechselt und den Schwellwert wieder überschreitet. 


### Bei explizitem Schwellwert Alarm erzeugen

**Funktionalität**  

Wenn der Messwert den roten Bereich betritt oder verlässt, wird ein KRITISCHER Alarm erzeugt bzw. gelöscht. 

Der Schweregrad des Alarms wird folgendermaßen bestimmt:

* Wenn der Messwert sich in den roten Bereich bewegt, wird der Schweregrad auf KRITISCH gesetzt.

* Wenn der Messwert sich in den grünen Bereich bewegt, wird der Alarm gelöscht.

>**Info:** Die Regel ist ähnlich wie die Regel "Bei Schwellwertüberschreitung Alarm erzeugen". Allerdings wird in dieser Regel hier der rote Schwellwert explizit bereitgestellt, während in der Regel "Bei Schwellwert Alarm erzeugen" der Schwellwert vom Gerät oder aus der Datenpunktbibliothek  genommen wird.

**Parameter**

Die Regel verwendet die folgenden Parameter:

<img src="/guides/images/benutzerhandbuch/cockpit-smart-rule-explicit-threshold.png" name="Smart Rule Messbereichsüberschreitung" style="width:50%;"/>

|Schritt|Feld|Beschreibung|
|:---|:---|:---|
|1|Name der Regel|Vorausgefüllt mit dem Namen der Regelvorlage. Kann individuell geändert werden.
|2|Bei Schwellwertbereich:|**Fragment/Series**: Fragment/Series des Messwerts. Der eingehende Messwert muss exakt die gleichen Fragment/Series-Werte haben. Wenn eine Regel im Daten-Explorer erstellt wird, sind diese Felder bereits ausgefüllt. <br> Minimum, Maximum: Wenn sich ein Wert im angegebenen Bereich [minimum; maximum] befindet, wird der konfigurierte Alarm ausgelöst.
|3|Alarm erzeugen:|Typ des auszulösenden Alarms.<br> Schweregrad des auszulösenden Alarms. <br>Alarm-Text.  
|4|Ziel-Assets oder -geräte|Gruppen oder Geräte, auf die die Regel angewendet werden soll.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/guides/reference/device-management) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.  

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Priorisieren von Alarmen](/guides/benutzerhandbuch/administration#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

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


>**Info:** Wenn die Variable nicht existiert oder falsch geschrieben wurde, wird der erzeugte Inhalt angezeigt. 