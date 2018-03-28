---
order: 90
title: Sammlung von Smart Rules
layout: redirect
---
Die folgenden Smart Rules sind in unserem System verfügbar.

### Messschwellenalarme

Beim Überschreiten der definierten gelben und roten Bereiche werden Alarme generiert und gelöscht.

Die Regel verwendet den folgenden Parameter aus dem Geräteobjekt oder der Datenpunktbibliothek:

* Objektwert roter Bereich: Bereich, wenn das System kritische Alarme erstellen soll. Diese Werte können im Daten-Explorer für jeden Datenpunkt editiert werden.

* Objektwert gelber Bereich: Bereich, wenn das System kleinere Alarme erstellen sollte. Diese Werte können im Daten-Explorer für jeden Datenpunkt editiert werden.

* Datenpunktbibliothek roter Bereich: Wenn kein roter Bereich im jeweiligen Objekt gespeichert ist, wird die Datenpunktbibliothek nach dem konfigurierten Datenpunkteintrag durchsucht und der dazugehörige rote Bereich verwendet.

* Datenpunkt Bibliothek gelber Bereich: Ähnlich wie der rote Bereich.

Mit diesem Mechanismus können Sie globale Schwellenbereiche in der Datenpunktbibliothek konfigurieren. Diese globalen Werte können dann von Fall zu Fall für bestimmte Objekte überschrieben werden.

Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/image_28de.png)

* Fragment: Name des Messfragments. Die eingehende Messung muss genau den gleichen Fragmentnamen wie konfiguriert haben. Beim Erstellen einer Regel aus dem Daten-Explorer sind die Fragmentdaten bereits ausgefüllt.

* Serie: Ähnlich wie Fragment, nur für die Serie.

* Eintrag der Datenpunktbibliothek: Name des Eintrags in der Datenpunktbibliothek. Hier finden Sie die Standardwerte für rote und gelbe Bereiche, falls sie nicht für ein einzelnes Objekt konfiguriert sind.

* Typ: Typ von Alarm, der ausgelöst wird.

* Text: Text des Alarms, der ausgelöst wird.  

Eine detaillierte Beschreibung der Schritte, die diese Smart Rule für jeden eingehenden Messwert durchführt:

* Prüfen, ob die Messung Daten für das Fragment und die Serie enthält (Regelparameter).

* Prüfen, ob die Regel für das Quellobjekt aktiviert ist.

* Die Daten des roten und gelben Bereiches sammeln von entweder:

   - dem Quellobjekt (der Messung)

   - der Datenpunktbibliothek (Regelparameter).
   
Sind keine roten/gelben Bereiche definiert, werden folgerichtig keine Alarme generiert.

Im Quellobjekt definierte Bereichswerte haben eine höhere Priorität als die in der Datenpunktbibliothek definierten Werte. Sie können auch einfach einen einzelnen Wert (z. B. gelber Bereich max) überschreiben, indem Sie ihn im Quellobjekt setzen. Die anderen Werte werden dann von der Datenpunktbibliothek übernommen.

 - Liegt der eingehende Wert im gelben Bereich...
 
 - Gibt es einen aktiven Alarm für das Objekt...

* ..wird der Schweregrad "weniger wichtig" vergeben.

Sonst

* Einen neuen Alarm erstellen mit den geforderten Parametern.

 - Liegt der eingehende Wert im roten Bereich...

 - Gibt es einen aktiven Alarm für das Objekt...

* ..wird der Schweregrad "kritisch" vergeben.

Sonst

* Einen neuen Alarm erstellen mit den geforderten Parametern.

* Wenn die Messung außerhalb des gelben und roten Bereichs liegt.

* Wenn ein aktiver Alarm des gegebenen Typs für das Objekt vorhanden ist.

* ..wird der Alarm gestoppt.


**Troubleshooting**

* Stellen Sie sicher, dass der Alarm erstellt wurde und nicht irgendwo dupliziert wurde.

* Das Gerät befindet sich nicht im Wartungsmodus: In diesem Fall gibt es keinen neuen Alarm, weil diese unterdrückt werden.

* Wenn Sie keine Alarmzuordnungsregel haben (siehe: [Repriorisieren von Alarmen](/guides/images/benutzerhandbuch/administration-deutsch#reprio-alarms)), die die Alarmschwelle ändert: In diesem Fall kann der Alarm anders ausfallen als erwartet.

* Prüfen Sie, ob ein Alarm bereits durch die nächsten geplanten Messungen mit dem resultierenden Wert in einem grünen Bereich gelöscht wurde.

* Bitte beachten Sie, dass der Alarm behoben ist, wenn Sie ihn löschen. Ein neuer Alarm wird nur dann ausgelöst, wenn das Gerät seinen Zustand ändert und die Schwellen wieder überschreitet.

## Bei Schwellwertüberschreitung Alarm erzeugen 

Wenn der Messwert den roten Bereich erreicht oder verlässt, wird ein kritischer Alarm erzeugt oder gelöscht. Die Schwere des Alarms wird bestimmt durch:
* Wenn der Messwert in den roten Bereich wechselt, ist der Schweregrad kritisch.
* Wenn der Messwert im grünen Bereich war, wird der Alarm gelöscht.

Diese Regel ist ähnlich der obigen Schwellenregel. In dieser Regel wird jedoch der rote Schwellenwert explizit angegeben. Die andere Schwellenregel oben extrahiert die Schwellenwerte aus der Geräte- oder Datenpunktbibliothek.

Die Parameter dieser Regel:![image alt text](/guides/images/users-guide/image_37de.png)

* Fragment: Name des Messfragments. Die eingehende Messung muss genau den gleichen Fragmentnamen wie konfiguriert haben. Beim Erstellen einer Regel aus dem Daten-Explorer ist der Fragmentname bereits ausgefüllt.

* Serie: Ähnlich wie Fragment, nur für Serie.
* Minimum, Maximum: Wenn ein Wert im Bereich [minimum; Maximum] wird der konfigurierte Alarm ausgelöst.
* Typ: Typ des Alarms, der ausgelöst wird.
* Text: Text des Alarms, der ausgelöst wird.

**Troubleshooting**

* Bitte überprüfen Sie die gleichen Schritte wie für die Schwellenregel oben.


## Bei Alarm E-mail senden

Wenn ein Alarm erzeugt wird, wird eine E-Mail gesendet.

Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/image_29de.png)

* Alarmarten: Die Arten der Alarme, die die Regel auslösen. Für jeden neu erzeugten Alarm mit einem dieser Typen in der Liste wird die Regel ausgelöst.

* Senden an: E-Mail-Adressen für das Versenden der E-Mail. Mehrere Adressen können durch ein Komma getrennt werden (",", kein Leerzeichen!).

* CC senden an: Wie bei "Senden an", nur für das E-Mail-"CC"-Feld.

* BCC senden an: Wie bei "Senden an", nur für das E-Mail-"BCC"-Feld.

* Antwort an: Adresse, die verwendet werden soll, um auf die Nachricht zu antworten.

* Betreff: Betreff der E-Mail. Sie können eine Variable des Formulars # {name} verwenden. Unterstützte Variablen werden unter "Smart-Rule-Variablen" weiter unten aufgelistet.

* Text: Text der E-Mail. Sie können eine Variable des Formulars # {name} verwenden. Unterstützte Variablen werden unter "Smart-Rule-Variablen" weiter unten aufgelistet.


**Troubleshooting**

* Bitte überprüfen Sie die gleichen Schritte wie für die Schwellenregel oben.

* Bitte überprüfen Sie Ihren Spam-Ordner.

## Bei Alarm SMS senden

Wenn ein Alarm erzeugt wird, wird eine SMS gesendet.

Diese Regel ist nur verfügbar, wenn Ihr Mandant über einen konfigurierten SMS-Anbieter verfügt.

Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/image_30de.png)

* Alarmtypen: Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm wird eine Regel ausgelöst.

* Telefonnummer: Zielrufnummer. Mobiler Ländercode wird für alle Nummern empfohlen, z. B. "+49" oder "0049" für Deutschland. Mehrere Nummern können durch ein Komma getrennt werden (",", kein Leerzeichen!).

* Nachricht: SMS-Text mit max. 160 Zeichen. Sie können die Variable # {name} verwenden. Unterstützte Variablen werden unter "Smart-Rule-Variablen" weiter unten aufgelistet.

**Troubleshooting** 

* Bitte überprüfen Sie die gleichen Schritte wie für die Schwellenregel oben.

* Wenn Sie eine Variable verwenden, wird ein Limit von 160 als Gesamtzahl angewendet. Wenn nach dem Anwenden der Variablen der Text mehr als 160 Zeichen enthält, wird die SMS nicht gesendet.

##Bei Alarmdauer Schweregrad erhöhen

Wenn ein Alarm für eine bestimmte Zeit aktiv ist, wird der Schweregrad erhöht.

Die Parameter der Regel:![image alt text](/guides/images/users-guide/image_31de.png)

* Alarmtypen: Die Alarmtypen, die die Regel auslösen.

* Dauer: Wie lange muss es einen aktiven Alarm geben, um die Regel auszulösen?

Beschreibung:

* Wenn ein konfigurierter Alarm ausgelöst wird, beginnt die Überwachung, wie lange der Alarm aktiv bleibt.
* Wenn der Alarm nach einer bestimmten Zeit noch aktiv ist, wird sein Schweregrad um eine Stufe erhöht, zum Beispiel von "WENIGER WICHTIG" auf "WICHTIG".
* Wenn der Alarm "KRITISCH" ist, wird die Überwachung gestoppt, da keine weiteren Maßnahmen zur Verfügung stehen.

Die Regel überprüft, ob die konfigurierte Dauer einmal pro Minute überschritten wurde. Daher kann es vorkommen, dass sich der Alarmschweregrad nicht in der Sekunde ändert, wenn sie die Dauer überschreitet, sondern nur während der folgenden Überprüfung.

## Bei Geofence-Überschreitung Alarm erzeugen

Die Geofence-Smart-Regel kann so konfiguriert werden, dass ein Alarm beim Überschreiten des Geofence (oder beides) erzeugt wird. Bestehende Alarme werden gelöscht, wenn die entgegengesetzte Bedingung wahr ist, zum Beispiel wenn ein verfolgtes Fahrzeug, das den Geofence-Bereich verlassen hat, wieder in den Geofence-Bereich eintritt.

Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/image_32de.png)

* Geofence: Definieren Sie ein Polygon, das den Rand eines Bereichs definiert. Klicken Sie auf "Geofence bearbeiten", navigieren Sie zu Ihrem Bereich (z. B. mit dem Feld "Suchadresse") und definieren Sie ein Polygon, indem Sie einmal an jedem Punkt des Rahmens klicken. ![image alt text](/guides/images/users-guide/image_33.png)

* Typ: Typ des Alarms, der ausgelöst wird.

* Text: Text des Alarms, der ausgelöst wird.

* Schweregrad: Schweregrad des Alarms, der ausgelöst wird.

* TriggerAlarmOn: Definition, welche Geofence-Interaktion den Alarm erzeugt. Werte: "verlassen", "hineinfahren" oder "beide". "Verlassen" wird automatisch als Voreinstellung gesetzt.

Es wird kein Alarm ausgelöst, bis das Gerät zum ersten Mal die Geofence-Grenze überquert.

**Troubleshooting** 

* Bitte stellen Sie sicher, dass das Gerät mindestens einmal nach dem Erstellen bzw. Aktivieren der Regel innerhalb der Geofence war.

* Wenn sich das Gerät nicht im Wartungsmodus befindet: Es wird kein neuer Alarm aufgrund der Unterdrückungsrichtlinie erzeugt.

* Wenn Sie keine Alarmzuordnungsregel haben (siehe: [Repriorisieren von Alarmen](/guides/images/benutzerhandbuch/administration-deutsch#reprio-alarms)), die den Alarmschweregrad ändern: In diesem Fall kann der Alarm eine andere Schwere haben, als erwartet.
 
## Berechne Energieverbrauch

Erstellen Sie den Verbrauchsdatenpunkt anhand von Daten aus einem Elektro-, Gas- und Wasserzähler.

Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/image_34de.png)

* Fragment: Name des Messfragments. Die eingehende Messung muss genau den gleichen Fragmentnamen wie konfiguriert haben. Beim Erstellen einer Regel aus dem Daten-Explorer ist das Fragment bereits ausgefüllt.

* Serie: Ähnlich wie Fragment, nur für die Serie.

* Dauer: Zeitraum, in dem Verbrauchswerte berechnet werden sollen. Hier wird nur definiert, wie oft der Verbrauch berechnet wird, nicht aber die Einheit der Verbrauchsmessung.

* Verbrauchsmessfragment: Name des Messfragments, das generiert werden soll.

* Verbrauchsmessreihe: Name der Messreihe, die generiert werden soll.

Die Einheit der Verbrauchsmessung ist immer pro Stunde (z. B. wenn die Messungen in "kg" sind, liegt der Verbrauch in "kg/h").
Die Regel nimmt die letzten zwei Messungen für eine definierte Zeit.
Sie berechnet dann die Differenz von Wert und Zeit und berechnet den Verbrauch pro Stunde.

Beispiel:

Die Regel sei so konfiguriert, dass sie alle 20 Minuten berechnet wird. Es folgen folgende Messungen: 100 kg bei 11:59 und 200 kg bei 12:14.Um 12:20 wird die Regel das nächste Mal ausgelöst und es dauert die letzten beiden Messungen. Wert und Zeitdifferenz werden berechnet. Die um 12:20 erstellte Verbrauchsmessung beträgt somit 400 kg/h.
Falls im letzten Zeitraum keine neue Messung angelegt wurde, wird eine Messung mit Verbrauch 0 angelegt.

## Bei fehlenden Messdaten Alarm erzeugen

Erstellen Sie einen Alarm, wenn keine neuen Messdaten für eine bestimmte Zeit empfangen wurden.

Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/image_35de.png)
  
* Typ: Art der Messung. Die eingehende Messung muss den gleichen Typ haben wie konfiguriert. Beim Erstellen einer Regel aus dem Daten-Explorer ist der Typ bereits ausgefüllt.
* Zeitintervall: Zeitintervall für die Berechnung von Verbrauchswerten.
* Typ: Typ des ausgelösten Alarms.
* Schweregrad: Schweregrad des Alarms.
* Text: Text des ausgelösten Alarms.

Die Regel prüft, ob das konfigurierte Zeitintervall einmal pro Minute überschritten wurde. Daher kann es bis zu einer Minute dauern, bis der Alarm nach Überschreiten des Zeitintervalls erzeugt wurde. Um zu prüfen, ob das Zeitintervall überschritten wurde, muss nach der Aktivierung der Regel mindestens eine eingehende Messung erfolgen.

## Bei Alarm Kommando ausführen

Wenn ein bestimmter Alarm aufgetreten ist, wird das angegebene Kommando an das Gerät gesandt.

Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/image_36de.png)

* Alarmarten: Die Alarmtypen lösen die Regel aus. Für jeden neu festgelegten Alarm wird diese Regel ausgelöst.

* Kommando: Das Kommando, das gesendet wird. Das Kommando wird als JSON-Beschreibung bereitgestellt. Einige Standardkommandos können unter dem "Kommando"-Feld ausgewählt werden. Um ein Standardkommando zu verwenden, wählen Sie eins aus und drücken Sie die Pfeiltaste rechts. Dadurch wird die JSON des ausgewählten Kommandos eingefügt.


## Bei Geofence-Überschreitung E-Mail senden

Eine E-Mail wird verschickt, wenn ein Gerät das definierte Geofence-Gebiet verlässt oder es betritt.

Die Regel verwendet die folgenden Parameter:
![image alt text](/guides/images/users-guide/ongeofenceemailde.png)

* Geofence: Definieren Sie ein Polygon in der Weise ähnlich der Regel "Bei Geofence-Überschreitung einen Alarm auslösen".

* Senden an: E-Mail-Adressen für das Versenden der E-Mail. Mehrere Adressen können durch ein Komma getrennt werden (",", kein Leerzeichen!).

* CC senden an: Wie bei "Senden an", nur für das E-Mail-"CC"-Feld.

* BCC senden an: Wie bei "Senden an", nur für das E-Mail-"BCC"-Feld.

* Antwort an: Adresse, die verwendet wird, um auf die Nachricht zu antworten.

* Betreff: Betreff der E-Mail. Sie können eine Variable des Formulars # {name} verwenden. Unterstützte Variablen werden unter "Smart-Rule-Variablen" weiter unten aufgelistet.

* Text: E-Mail-Text. Sie können eine Variable des Formulars # {name} verwenden. Unterstützte Variablen werden unter "Smart-Rule-Variablen" weiter unten aufgelistet.

**Troubleshooting**

* Es wird kein Alarm ausgelöst, bis das Gerät zum ersten Mal die Geofence-Grenze überquert.
* Den Spam-Ordner überprüfen.


## Bei Alarm Anruf starten

Wenn ein Alarm erzeugt wird, leitet er einen Text-zu-Sprache-Anruf ein.
Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/onalarmsendtexttospeachde.png)

* Alarmtypen: Diese Alarmtypen lösen die Regel aus. Sie wird auf alle neuen Alarme angewendet.

* Telefonnummer: Zielrufnummer. Es wird empfohlen, den mobilen Ländercode für alle Nummern, wie "+49" oder "0049" für Deutschland, zu verwenden.

* Nachricht: Der von der Regel ausgelesene Text.

* Wiederholungen: Die Anzahl der Wiederholungen, die Zieltelefonnummer zu erreichen, wenn der Anruf nicht erfolgreich ist (Telefon besetzt oder Anruf abgelehnt).

* Intervall: Zeitintervall zwischen den Wiederholungen (in Minuten).

* Acknowledgement: Flag, der angibt, dass der Empfänger des Anrufs den Anruf quittieren muss (wenn ein nicht quittierter Anruf nicht als erfolgreicher Anruf gezählt wird).

* Quittierungstext: Die Quittierungsmeldung (wird nach der Hauptmeldung gelesen), z. B.: "Bitte bestätigen Sie diesen Anruf mit einem Klick auf 5.".

* Bestätigungsnummer: Die Nummer der Taste, die der Empfänger zur Bestätigung drücken muss. Wenn die Taste gedrückt wird, ist der Anruf erfolgreich und der Alarmstatus wird quittiert.

**Troubleshooting**

* Überprüfen Sie, dass der Alarm erstellt und nicht dupliziert wurde.

* Wenn sich das Gerät nicht im Wartungsmodus befindet: Es wird kein neuer Alarm aufgrund der Unterdrückungsrichtlinie erzeugt.

* Wenn Sie keine Alarmzuordnungsregel haben (siehe: [Repriorisieren von Alarmen](/guides/images/benutzerhandbuch/administration-deutsch#reprio-alarms)), die den Alarmschweregrad ändern: In diesem Fall kann der Alarm einen anderen Schweregrad haben, als erwartet.

## Bei Alarm eskalieren

Wenn ein Alarm erzeugt wird, wird eine E-Mail, SMS oder/und ein Text-to-Speech Anruf initiiert.

Die Regel verwendet die folgenden Parameter:
![image alt text](/guides/images/users-guide/escalatealarmde.png)

* Alarmtypen: Die Alarmtypen lösen diese Regel aus. Sie wird auf alle neuen Alarme angewendet.

Die Regel definiert eine Kette von Aktionen in Schritten. Um Schritte hinzuzufügen, klicken Sie auf die Schaltfläche "Schritt hinzufügen". Es erscheint ein Formular mit folgenden Parametern:

![image alt text](/guides/images/users-guide/escalatealarm2.png)

* Aktionstyp: Art der Aktion, die im Schritt ausgeführt wird. Mögliche Werte sind:

* E-Mail senden (siehe unter Alarm E-Mail-Regel für Parameterbeschreibungen senden)

* Sms senden (siehe Alarm-SMS-Regel für Parameterbeschreibungen senden)

* Telefon anrufen (siehe Auf Alarm initiieren Text-to-Speech-Aufrufregel für Parameterbeschreibungen)

* Bedingung: Die Bedingung, die angewendet wird, wenn die Regel ausgeführt wird. Mögliche Werte sind:

* Immer: Aktion wird immer ausgeführt.

* Immer: Wenn Schritt N fehlgeschlagen ist: Nur Telefonschritte können fehlschlagen. Der Schritt wird als fehlgeschlagen markiert, sobald alle Wiederholungen ohne erfolgreichen Aufruf durchgeführt wurden. Diese Option wird angezeigt, wenn bereits ein Telefonschritt konfiguriert ist, auf den verwiesen werden kann.

**Troubleshooting**

* Überprüfen Sie, dass der Alarm erstellt und nicht dupliziert wurde.

* Wenn sich das Gerät nicht im Wartungsmodus befindet: Es wird kein neuer Alarm aufgrund der Unterdrückungsrichtlinie erzeugt.

* Wenn Sie keine Alarmzuordnungsregel haben (siehe: [Repriorisieren von Alarmen](/guides/images/benutzerhandbuch/administration-deutsch#reprio-alarms)), die den Alarmschweregrad ändern: In diesem Fall kann der Alarm einen anderen Schweregrad haben, als erwartet.


### Smart-Rule-Variablen

Sie können Variablen in bestimmten Regelparametern verwenden. Wenn eine Regel ausgelöst wird, werden die Variablen durch ihre Istwerte ersetzt. Mit diesem Mechanismus können Sie Gerätenamen oder Alarmtexte in verschiedene Ausgaben (E-Mail, SMS, Text-to-Voice) einfügen.
Sie können alle Informationen über das auslösende Ereignis (wie den Alarm) und das Quellgerät davon enthalten.

Beispiel Variablen:

<table>
  <tr>
    <td>Variable</td>
    <td>Content</td>
  </tr>
  <tr>
    <td>#{creationTime}</td>
    <td>Zeitpunkt wann der Alarm erstellt wurde</td>
  </tr>
  <tr>
    <td>#{type}</td>
    <td>Typ des Alarms.</td>
  </tr>
  <tr>
    <td>#{time}</td>
    <td>Zeitpunkt des Auslösens.  </td>
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
    <td>Zusatzinformation.</td>
  </tr>
  <tr>
    <td>#{status}</td>
    <td>Status des Alarms: AKTIV, zur Kenntnis genommen oder GELÖSCHT.</td>
  </tr>
  <tr>
    <td>#{severity}</td>
    <td>Schweregrad des Alarms: KRITISCH, WICHTIG, WENIGER WICHTIG oder WARNUNG. </td>
  </tr>
  <tr>
    <td>#{count}</td>
    <td>Anzahl der Alarm Nachrichten für ein Gerät: Nachrichtenwiederholungen für ein Gerät werden nur fuer das Gerät gewertet.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.street}</td>
    <td>Strasse, wo sich das Gerät befindet.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.cityCode}</td>
    <td>Postleitzahl, wo sich das Gerät befindet.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.city}</td>
    <td>Ortsname, wo sich das Gerät befindet.</td>
  </tr>
</table>


**Falls die Variable nicht existiert oder falsch geschrieben ist, wird der generierte Inhalt angezeigt.** 
