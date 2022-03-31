---
weight: 90
title: Smart Rules-Sammlung
layout: redirect
---

<a name="business"></a>

{{< product-c8y-iot >}} enthält eine Reihe von vordefinierten Smart Rules. Für jeden globalen Smart Rules-Typen lassen sich verschiedene Parameter konfigurieren.

Folgende Typen sind verfügbar:


<table>
<thead>
<colgroup>
       <col style="width: 30%;">
       <col style="width: 70%;">
    </colgroup><thead>
<tr>
<th align="left">Smart Rule</th>
<th align="left">Funktionalität</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><a href="#alarm-sms">Bei Alarm SMS senden</a></td>
<td align="left">Wenn ein Alarm erzeugt wird, wird eine SMS gesendet.</td>
</tr>
<tr>
<td align="left"><a href="#alarm-email">Bei Alarm E-Mail senden</a></td>
<td align="left">Wenn ein Alarm erzeugt wird, wird eine E-Mail gesendet.</td>
</tr>
<tr>
<td align="left"><a href="#alarm-escalate">Bei Alarm eskalieren</a></td>
<td align="left">Wenn ein Alarm erzeugt wird, wird eine E-Mail oder SMS gesendet.</td>
</tr>
<tr>
<td align="left"><a href="#alarm-severity">Bei Alarmdauer Schweregrad erhöhen</a></td>
<td align="left">Wenn ein Alarm für einen bestimmten Zeitraum aktiviert ist, wird er Schweregrad erhöht.</td>
</tr>
<tr>
<td align="left"><a href="#geofence-alarm">Bei Geofence-Übertretung Alarm erzeugen</a></td>
<td align="left">Wird ein Geofence-Bereich überschritten, wird ein Alarm erzeugt.</td>
</tr>
<tr>
<td align="left"><a href="#geofence-email">Bei Geofence-Übertretung E-Mail senden</a></td>
<td align="left">Wenn ein Geofence-Bereich überschritten wird, wird eine E-Mail gesendet.</td>
</tr>
<tr>
<td align="left"><a href="#calculate-energy">Energieverbrauch berechnen</a></td>
<td align="left">Erstellt Verbrauchs-Datenpunkte basierend auf Daten von einem Strom-, Gas oder Wasserzähler.</td>
</tr>
<tr>
<td align="left"><a href="#missing-measurements">Bei fehlenden Messdaten Alarm erzeugen</a></td>
<td align="left">Gehen keine neuen Messdaten innerhalb eines bestimmten Zeitraums ein, wird ein Alarm erzeugt.</td>
</tr>
<tr>
<td align="left"><a href="#alarm-operation">Bei Alarm Operation ausführen</a></td>
<td align="left">Tritt ein bestimmter Alarm auf, wird die spezifizierte Operation zum Gerät gesendet.</td>
</tr>
<tr>
<td align="left"><a href="#threshold-explicit">Bei explizitem Schwellenwert Alarm erzeugen</a></td>
<td align="left">Wenn der Messwert den roten Bereich betritt oder verlässt, wird ein KRITISCHER Alarm erzeugt bzw. gelöscht. Die Regel ist ähnlich wie die Regel "Bei Schwellenwertüberschreitung Alarm erzeugen". Allerdings wird der rote Schwellenwert explizit bereitgestellt.</td>
</tr>
<tr>
<td align="left"><a href="#threshold-alarm">Bei Schwellenwert Alarm erzeugen</a></td>
<td align="left">Wenn der Messwert einen definierten roten oder gelben Bereich betritt oder verlässt, wird ein Alarm erzeugt bzw. gelöscht. Diese Regel nimmt die Schwellenwerte aus dem Gerät oder aus der Datenpunktbibliothek.</td>
</tr>
</tbody>
</table>

>**Info:** In bestimmten Regel-Parametern können verschiedene Auslösefelder als Variablen verwendet werden, siehe [Smart Rule-Variablen](#smart-rule-variables) am Ende dieses Abschnitts.  


<a name="alarm-sms"></a>
### Bei Alarm SMS senden

**Funktionalität**

Wenn ein Alarm erzeugt wird, wird eine SMS gesendet.

> **Info:** Diese Regel ist nur verfügbar, wenn Ihr Mandant über einen konfigurierten SMS-Anbieter verfügt.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On alarm send SMS](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-sendsms.png)

<table>
<thead>
<colgroup>
       <col style="width: 10%;">
       <col style="width: 20%;">
       <col style="width: 70%;">
    </colgroup><thead>
<tr>
<th align="left">Schritt</th>
<th align="left">Feld</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">1</td>
<td align="left">Name der Regel</td>
<td align="left">Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.</td>
</tr>
<tr>
<td align="left">2</td>
<td align="left">Bei Alarm vom Typ</td>
<td align="left">Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.</td>
</tr>
<tr>
<td align="left">3</td>
<td align="left">SMS senden</td>
<td align="left"><strong>Telefonnummer</strong>: Telefonnummer des Empfängers. Es empfiehlt sich, die Ländervorwahl hinzuzufügen, z. B. "+49" oder "0049" für Deutschland. Mehrere Telefonnummern können durch ein Komma getrennt werden (",", ohne Leerzeichen!).<br> <strong>Nachricht</strong>: SMS-Text mit max. 160 Zeichen. Es können Variablen im Format #{name} verwendet werden, siehe <a href="#smart-rule-variables" class="no-ajaxy">Smart Rule-Variablen</a>.</td>
</tr>
<tr>
<td align="left">4</td>
<td align="left">Ziel-Assets oder -geräte</td>
<td align="left">Wählen Sie eine Gruppe oder ein Gerät, auf die/das die Regel angewendet werden soll. Um die Smart Rule in anderen Assets oder Geräten anzuwenden, navigieren Sie zu den jeweiligen Objekten und aktivieren Sie dort die Smart Rule. In den Smart Rules-Details wird eine Liste namens "Aktiv für Ziel-Asset oder Geräte" angezeigt. <br>
Wenn Sie dieses Feld leer lassen, wird die Smart Rule auf jede Gruppe und jedes Gerät angewendet. Sie können dann die Smart Rule für spezifische Assets oder Geräte deaktivieren. In diesem Fall wird in den Smart Rules-Details eine Liste namens "Inaktiv für Ziel-Assets oder Geräte" angezeigt. <br>
Weitere Informationen zum Aktivieren/Deaktivieren einer Smart Rule finden Sie unter <a href="#toggle-rules" class="no-ajaxy">So deaktivieren oder aktivieren Sie eine Smart Rule für eine Gruppe oder ein Gerät</a>.
</td>
</tr>
</tbody>
</table>

Sie können eine einzelne Gruppe oder ein einzelnes Gerät auswählen (nicht mehrere). Um die dynamische Gruppe in anderen Assets oder Geräten zu aktivieren, müssen Sie zu dem jeweiligen Asset bzw. Gerät navigieren und die dynamische Gruppe dort aktivieren. Anschließend können Sie alle Ziel-Assets oder -geräte in einer Liste namens "Aktiv für Ziel-Asset oder Geräte" in den Smart Rules-Details sehen.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/benutzerhandbuch/device-management-de#maintenance-mode) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Alarmregeln](/benutzerhandbuch/administration-de#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

>**Wichtig:** Die Textgröße ist auf insgesamt 160 Zeichen beschränkt. Wenn Sie Variablen verwenden und der Text nach Anwenden der Variablen 160 Zeichen überschreitet, wird die SMS nicht gesendet.

<a name="alarm-email"></a>
### Bei Alarm E-Mail senden

**Funktionalität**

Wenn ein Alarm erzeugt wird, wird eine E-Mail gesendet.

>**Info:** Beachten Sie, dass die entsprechenden E-Mails mit dem Content-Typ "text/html" gesendet werden.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On alarm send email](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-sendemail.png)

<table>
<thead>
<colgroup>
       <col style="width: 10%;">
       <col style="width: 20%;">
       <col style="width: 70%;">
    </colgroup><thead>
<tr>
<th align="left">Schritt</th>
<th align="left">Feld</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">1</td>
<td align="left">Name der Regel</td>
<td align="left">Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.</td>
</tr>
<tr>
<td align="left">2</td>
<td align="left">Bei Alarm vom Typ</td>
<td align="left">Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.</td>
</tr>
<tr>
<td align="left">3</td>
<td align="left">E-Mail senden</td>
<td align="left"><strong>Senden an:/CC an:/BCC an</strong>: E-Mail-Adressen der Empfänger. Mehrere Adressen können durch ein Komma getrennt werden (",", ohne Leerzeichen!).<br><strong>Antwort an</strong>: Adresse, die für eine Antwort verwendet werden kann.<br> <strong>Betreff</strong>: Betreff der E-Mail. Es kann eine Variable im Format #{name} verwendet werden, siehe <a href="#smart-rule-variables" class="no-ajaxy">Smart Rule-Variablen</a>.<br> <strong>Nachricht</strong>: Text der E-Mail. Es kann eine Variable im Format #{name} verwendet werden, siehe <a href="#smart-rule-variables" class="no-ajaxy">Smart Rule-Variablen</a>.</td>
</tr>
<tr>
<td align="left">4</td>
<td align="left">Ziel-Assets oder -geräte</td>
<td align="left">Wählen Sie eine Gruppe oder ein Gerät, auf die/das die Regel angewendet werden soll. Um die Smart Rule in anderen Assets oder Geräten anzuwenden, navigieren Sie zu den jeweiligen Objekten und aktivieren Sie dort die Smart Rule. In den Smart Rules-Details wird eine Liste namens "Aktiv für Ziel-Asset oder Geräte" angezeigt. <br>
Wenn Sie dieses Feld leer lassen, wird die Smart Rule auf jede Gruppe und jedes Gerät angewendet. Sie können dann die Smart Rule für spezifische Assets oder Geräte deaktivieren. In diesem Fall wird in den Smart Rules-Details eine Liste namens "Inaktiv für Ziel-Assets oder Geräte" angezeigt. <br>
Weitere Informationen zum Aktivieren/Deaktivieren einer Smart Rule finden Sie unter <a href="#toggle-rules" class="no-ajaxy">So deaktivieren oder aktivieren Sie eine Smart Rule für eine Gruppe oder ein Gerät</a>.
</td>
</tr>
</tbody>
</table>

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/benutzerhandbuch/device-management-de#maintenance-mode) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Alarmregeln](/benutzerhandbuch/administration-de#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

* Sehen Sie in Ihr Spam-Verzeichnis.

<a name="alarm-escalate"></a>
### Bei Alarm eskalieren

**Funktionalität**

Sendet eine E-Mail oder SMS, wenn ein Alarm erzeugt wird.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On alarm escalate](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-escalate.png)

<table>
<thead>
<colgroup>
       <col style="width: 10%;">
       <col style="width: 20%;">
       <col style="width: 70%;">
    </colgroup><thead>
<tr>
<th align="left">Schritt</th>
<th align="left">Feld</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">1</td>
<td align="left">Name der Regel</td>
<td align="left">Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.</td>
</tr>
<tr>
<td align="left">2</td>
<td align="left">Bei Alarm vom Typ</td>
<td align="left">Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.</td>
</tr>
<tr>
<td align="left">3</td>
<td align="left">Wie folgt eskalieren</td>
<td align="left">Eskalationsschritte, die nacheinander ausgeführt werden. <br> Klicken Sie auf <strong>Schritt hinzufügen</strong>, um mindestens einen Schritt zu definieren: <br> <strong>Typ</strong>: Typ des ausgeführten Schritts. Mögliche Werte sind: <br> - E-Mail (siehe Regel "Bei Alarm E-Mail senden" für die Beschreibung der Parameter). <br> - SMS (siehe Regel "Bei Alarm SMS senden" für die Beschreibung der Parameter). <br> <strong>Bedingung</strong>: Die Bedingung, die angewendet wird, wenn die Regel ausgeführt wird. Mögliche Werte sind: <br> - Immer: Aktion wird immer ausgeführt. <br> - Immer: Wenn Schritt N fehlgeschlagen ist. Nur Schritte des Typs Telefon können fehlschlagen. Der Schritt wird als fehlgeschlagen gekennzeichnet, wenn alle Wiederholungen erfolglos ausgeführt wurden. Diese Option ist nur verfügbar, wenn bereits ein Schritt des Typs Telefon konfiguriert wurde, auf den Bezug genommen werden kann.</td>
</tr>
<tr>
<td align="left">4</td>
<td align="left">Ziel-Assets oder -geräte</td>
<td align="left">Wählen Sie eine Gruppe oder ein Gerät, auf die/das die Regel angewendet werden soll. Um die Smart Rule in anderen Assets oder Geräten anzuwenden, navigieren Sie zu den jeweiligen Objekten und aktivieren Sie dort die Smart Rule. In den Smart Rules-Details wird eine Liste namens "Aktiv für Ziel-Asset oder Geräte" angezeigt. <br>
Wenn Sie dieses Feld leer lassen, wird die Smart Rule auf jede Gruppe und jedes Gerät angewendet. Sie können dann die Smart Rule für spezifische Assets oder Geräte deaktivieren. In diesem Fall wird in den Smart Rules-Details eine Liste namens "Inaktiv für Ziel-Assets oder Geräte" angezeigt. <br>
Weitere Informationen zum Aktivieren/Deaktivieren einer Smart Rule finden Sie unter <a href="#toggle-rules" class="no-ajaxy">So deaktivieren oder aktivieren Sie eine Smart Rule für eine Gruppe oder ein Gerät</a>.
</td>
</tr>
</tbody>
</table>


**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/benutzerhandbuch/device-management-de#maintenance-mode) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Alarmregeln](/benutzerhandbuch/administration-de#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.


<a name="alarm-severity"></a>
### Bei Alarmdauer Schweregrad erhöhen

**Funktionalität**

Wenn ein Alarm für einen bestimmten Zeitraum aktiviert ist, wird er Schweregrad erhöht.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On alarm increase severity](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-severity.png)

<table>
<thead>
<colgroup>
       <col style="width: 10%;">
       <col style="width: 20%;">
       <col style="width: 70%;">
    </colgroup><thead>
<tr>
<th align="left">Schritt</th>
<th align="left">Feld</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">1</td>
<td align="left">Name der Regel</td>
<td align="left">Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.</td>
</tr>
<tr>
<td align="left">2</td>
<td align="left">Bei Alarm vom Typ</td>
<td align="left">Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.</td>
</tr>
<tr>
<td align="left">3</td>
<td align="left">Alarmschweregrad erhöhen:</td>
<td align="left">Dauer, die ein Alarm aktiv sein muss, bevor der Schweregrad erhöht wird.</td>
</tr>
<tr>
<td align="left">4</td>
<td align="left">Ziel-Assets oder -geräte</td>
<td align="left">Wählen Sie eine Gruppe oder ein Gerät, auf die/das die Regel angewendet werden soll. Um die Smart Rule in anderen Assets oder Geräten anzuwenden, navigieren Sie zu den jeweiligen Objekten und aktivieren Sie dort die Smart Rule. In den Smart Rules-Details wird eine Liste namens "Aktiv für Ziel-Asset oder Geräte" angezeigt. <br>
Wenn Sie dieses Feld leer lassen, wird die Smart Rule auf jede Gruppe und jedes Gerät angewendet. Sie können dann die Smart Rule für spezifische Assets oder Geräte deaktivieren. In diesem Fall wird in den Smart Rules-Details eine Liste namens "Inaktiv für Ziel-Assets oder Geräte" angezeigt. <br>
Weitere Informationen zum Aktivieren/Deaktivieren einer Smart Rule finden Sie unter <a href="#toggle-rules" class="no-ajaxy">So deaktivieren oder aktivieren Sie eine Smart Rule für eine Gruppe oder ein Gerät</a>.
</td>
</tr>
</tbody>
</table>

**Beschreibung**

Beim Auslösen eines konfigurierten Alarms wird erfasst, wie lange der Alarm aktiv bleibt.

Ist der Alarm nach Ablauf der spezifizierten Dauer immer noch aktiv, wird der Schweregrad um ein Level erhöht, z. B. von WENIGER WICHTIG auf WICHTIG.

Wenn der Alarm den Schweregrad KRITISCH erreicht hat, wird die Überwachung beendet, da keine weitere Aktion möglich ist.

> **Info:** Die Regel prüft einmal pro Minute, ob die konfigurierte Dauer überschritten ist. Daher ist es möglich, dass der Schweregrad sich nicht exakt dann ändert, wenn die Dauer überschritten ist, sondern erst nach der nächsten Prüfung.

<a name="geofence-alarm"></a>
### Bei Geofence-Übertretung Alarm erzeugen

**Funktionalität**

Wird ein Geofence-Bereich überschritten, wird ein Alarm erzeugt.

Diese Regel kann für das Betreten oder Verlassen eines Geofence-Bereichs oder für beides konfiguriert werden. Bestehende Alarme werden gelöscht, wenn wieder die gegenteilige Bedingung zutrifft, z. B. wenn ein Auto, das den Geofence-Bereich verlassen hat, wieder in den Bereich eintritt.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On geofence create alarm](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-geofencealarm.png)

|<table>
<thead>
<colgroup>
       <col style="width: 10%;">
       <col style="width: 20%;">
       <col style="width: 70%;">
    </colgroup><thead>
<tr>
<th align="left">Schritt</th>
<th align="left">Feld</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">1</td>
<td align="left">Name der Regel</td>
<td align="left">Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.</td>
</tr>
<tr>
<td align="left">2</td>
<td align="left">Bei Geofence-Übertretung</td>
<td align="left">Polygon, das die Grenzen des Bereich kennzeichnet. Klicken Sie auf <strong>Geofence bearbeiten</strong> und legen Sie den Bereich fest. Fügen Sie Punkte durch Doppelklicken hinzu und passen Sie diese durch Klicken und Ziehen an.</td>
</tr>
<tr>
<td align="left">3</td>
<td align="left">Alarm erzeugen</td>
<td align="left"><b>Auslösen:</b> Grund für das Auslösen eines Alarms: "Bei Betreten", "Bei Verlassen" (der Standardwert), "Bei Betreten und Verlassen".<br><b>Typ:</b> Typ des auszulösenden Alarms. Es wird dringend empfohlen, unterschiedliche Alarmtypen für die einzelnen Smart Rules zu verwenden. Wenn ein Alarmtyp für mehrere Smart Rules verwendet wird, können sich die Smart Rules beim Versuch, denselben Alarmtyp zu aktualisieren, gegenseitig beeinträchtigen. Dies kann zu unerwartetem Verhalten führen.<br> <b>Schweregrad:</b> Schweregrad des auszulösenden Alarms. <br><b>Text:</b> Alarm-Text.</td>
</tr>
<tr>
<td align="left">4</td>
<td align="left">Ziel-Assets oder -geräte</td>
<td align="left">Wählen Sie eine Gruppe oder ein Gerät, auf die/das die Regel angewendet werden soll. Um die Smart Rule in anderen Assets oder Geräten anzuwenden, navigieren Sie zu den jeweiligen Objekten und aktivieren Sie dort die Smart Rule. In den Smart Rules-Details wird eine Liste namens "Aktiv für Ziel-Asset oder Geräte" angezeigt. <br>
Wenn Sie dieses Feld leer lassen, wird die Smart Rule auf jede Gruppe und jedes Gerät angewendet. Sie können dann die Smart Rule für spezifische Assets oder Geräte deaktivieren. In diesem Fall wird in den Smart Rules-Details eine Liste namens "Inaktiv für Ziel-Assets oder Geräte" angezeigt. <br>
Weitere Informationen zum Aktivieren/Deaktivieren einer Smart Rule finden Sie unter <a href="#toggle-rules" class="no-ajaxy">So deaktivieren oder aktivieren Sie eine Smart Rule für eine Gruppe oder ein Gerät</a>.
</td>
</tr>
</tbody>
</table>

> **Info:** Damit ein Alarm ausgelöst wird, muss das Gerät mindestens einmal nach Erstellen der Regel innerhalb des Geofence-Bereichs gewesen sein.

**Fehlerbehebung**

* Stellen Sie sicher, dass das Gerät mindestens einmal im Geofence-Bereich war, nachdem die Regel erstellt/aktiviert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/benutzerhandbuch/device-management-de#maintenance-mode) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Alarmregeln](/benutzerhandbuch/administration-de#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

<a name="geofence-email"></a>
### Bei Geofence-Übertretung E-Mail senden

**Funktionalität**

Wird eine Geofence-Grenze durch Verlassen des Geofence-Bereichs überschritten, wird eine E-Mail gesendet.

>**Info:** Beachten Sie, dass die entsprechenden E-Mails mit dem Content-Typ "text/html" gesendet werden.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On geofence send email](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-geofenceemail.png)

<table>
<thead>
<colgroup>
       <col style="width: 10%;">
       <col style="width: 20%;">
       <col style="width: 70%;">
    </colgroup><thead>
<tr>
<th align="left">Schritt</th>
<th align="left">Feld</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">1</td>
<td align="left">Name der Regel</td>
<td align="left">Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.</td>
</tr>
<tr>
<td align="left">2</td>
<td align="left">Bei Geofence-Übertretung</td>
<td align="left">Polygon, das die Grenzen des Bereich kennzeichnet. Klicken Sie auf <strong>Geofence bearbeiten</strong> und legen Sie den Bereich fest. Fügen Sie Punkte durch Doppelklicken hinzu und passen Sie diese durch Klicken und Ziehen an.</td>
</tr>
<tr>
<td align="left">3</td>
<td align="left">E-Mail senden</td>
<td align="left"><strong>Senden an:/CC an:/BCC an</strong>: E-Mail-Adressen der Empfänger. Mehrere Adressen können durch ein Komma getrennt werden (",", ohne Leerzeichen!).<br><strong>Antwort an</strong>: Adresse, die für eine Antwort verwendet werden kann.<br> <strong>Betreff</strong>: Betreff der E-Mail. Es kann eine Variable im Format #{name} verwendet werden, siehe <a href="#smart-rule-variables" class="no-ajaxy">Smart Rule-Variablen</a>.<br> <strong>Nachricht</strong>: Text der E-Mail. Es kann eine Variable im Format #{name} verwendet werden, siehe <a href="#smart-rule-variables" class="no-ajaxy">Smart Rule-Variablen</a>.</td>
</tr>
<tr>
<td align="left">4</td>
<td align="left">Ziel-Assets oder -geräte</td>
<td align="left">Wählen Sie eine Gruppe oder ein Gerät, auf die/das die Regel angewendet werden soll. Um die Smart Rule in anderen Assets oder Geräten anzuwenden, navigieren Sie zu den jeweiligen Objekten und aktivieren Sie dort die Smart Rule. In den Smart Rules-Details wird eine Liste namens "Aktiv für Ziel-Asset oder Geräte" angezeigt. <br>
Wenn Sie dieses Feld leer lassen, wird die Smart Rule auf jede Gruppe und jedes Gerät angewendet. Sie können dann die Smart Rule für spezifische Assets oder Geräte deaktivieren. In diesem Fall wird in den Smart Rules-Details eine Liste namens "Inaktiv für Ziel-Assets oder Geräte" angezeigt. <br>
Weitere Informationen zum Aktivieren/Deaktivieren einer Smart Rule finden Sie unter <a href="#toggle-rules" class="no-ajaxy">So deaktivieren oder aktivieren Sie eine Smart Rule für eine Gruppe oder ein Gerät</a>.
</td>
</tr>
</tbody>
</table>

> **Info:** Damit die Regel ausgeführt wird, muss das Gerät mindestens einmal nach Erstellen der Regel innerhalb des Geofence-Bereichs gewesen sein. Beim Verlassen des Geofence-Bereichs wird eine E-Mail gesendet.

**Fehlerbehebung**

* Stellen Sie sicher, dass das Gerät mindestens einmal im Geofence-Bereich war, nachdem die Regel erstellt/aktiviert wurde.

* Sehen Sie in Ihr Spam-Verzeichnis.


<a name="calculate-energy"></a>
### Energieverbrauch berechnen

**Funktionalität**

Erstellt einen Verbrauchs-Datenpunkt basierend auf Daten von einem Strom-, Gas- oder Wasserzähler.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![Calculate energy consumption](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-energy.png)

<table>
<thead>
<colgroup>
       <col style="width: 10%;">
       <col style="width: 20%;">
       <col style="width: 70%;">
    </colgroup><thead>
<tr>
<th align="left">Schritt</th>
<th align="left">Feld</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">1</td>
<td align="left">Name der Regel</td>
<td align="left">Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.</td>
</tr>
<tr>
<td align="left">2</td>
<td align="left">Verwendeter Messwert</td>
<td align="left"><strong>Fragment/Series</strong>: Fragment/Series des Messwerts. Der eingehende Messwert muss exakt die gleichen Fragment/Series-Werte haben. Wenn eine Regel im Daten-Explorer erstellt wird, sind diese Felder bereits ausgefüllt. <br> <strong>Zeitintervall</strong>: Intervall, in welchem Verbrauchswerte berechnet werden. Spezifiziert, wie oft der Verbrauch pro Stunde berechnet wird.</td>
</tr>
<tr>
<td align="left">3</td>
<td align="left">Energieverbrauch</td>
<td align="left">Fragment/Series des zu erstellenden Messwerts.</td>
</tr>
<tr>
<td align="left">4</td>
<td align="left">Ziel-Assets oder -geräte</td>
<td align="left">Wählen Sie eine Gruppe oder ein Gerät, auf die/das die Regel angewendet werden soll. Um die Smart Rule in anderen Assets oder Geräten anzuwenden, navigieren Sie zu den jeweiligen Objekten und aktivieren Sie dort die Smart Rule. In den Smart Rules-Details wird eine Liste namens "Aktiv für Ziel-Asset oder Geräte" angezeigt. <br>
Wenn Sie dieses Feld leer lassen, wird die Smart Rule auf jede Gruppe und jedes Gerät angewendet. Sie können dann die Smart Rule für spezifische Assets oder Geräte deaktivieren. In diesem Fall wird in den Smart Rules-Details eine Liste namens "Inaktiv für Ziel-Assets oder Geräte" angezeigt. <br>
Weitere Informationen zum Aktivieren/Deaktivieren einer Smart Rule finden Sie unter <a href="#toggle-rules" class="no-ajaxy">So deaktivieren oder aktivieren Sie eine Smart Rule für eine Gruppe oder ein Gerät</a>.
</td>
</tr>
</tbody>
</table>

Die Einheit des Verbrauchsmesswerts bezieht sich immer auf eine Stunde (d. h. Messwerte in "kg" geben den Verbrauch in "kg/h" an).

Die Regel verwendet die letzten beiden Messungen in einem bestimmten Zeitraum, berechnet die Differenz von Wert und Zeit und berechnet dann den Verbrauch per Stunde.

**Beispiel**

Die Regel wurde so konfiguriert, dass alle 20 Minuten eine Berechnung stattfindet. Die folgenden Messdaten gehen ein:
100 kg um 11:59 und 200 kg um 12:14.
Um 12:20 Uhr wird die Regel ausgelöst und es werden die letzten beiden Messungen zugrunde gelegt. Es wird die Wert- und Zeit-Differenz berechnet. Der Verbrauchsmesswert von 12:20 Uhr beträgt also 400 kg/h.
Wenn keine weiteren Messdaten im letzten Intervall erzeugt wurden, wird ein Messwert mit dem Wert 0 erstellt.

<a name="missing-measurements"></a>
### Bei fehlenden Messdaten Alarm erzeugen

**Funktionalität**

Gehen keine neuen Messdaten innerhalb eines bestimmten Zeitraums ein, wird ein Alarm erzeugt.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On missing measurements create alarm](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-missingmeasurement.png)

<table>
<thead>
<colgroup>
       <col style="width: 10%;">
       <col style="width: 20%;">
       <col style="width: 70%;">
    </colgroup><thead>
<tr>
<th align="left">Schritt</th>
<th align="left">Feld</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">1</td>
<td align="left">Name der Regel</td>
<td align="left">Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.</td>
</tr>
<tr>
<td align="left">2</td>
<td align="left">Verwendeter Messwert</td>
<td align="left"><strong>Typ</strong>: Typ des Messwerts. Der eingehende Messwert muss den gleichen Typen haben. Wenn eine Regel im Daten-Explorer erstellt wird, ist der Typ bereits angegeben.<br> <strong>Zeitintervall</strong>: Intervall, in welchem Verbrauchswerte berechnet werden.</td>
</tr>
<tr>
<td align="left">3</td>
<td align="left">Alarm erzeugen</td>
<td align="left"><b>Typ:</b> Typ des auszulösenden Alarms. Es wird dringend empfohlen, unterschiedliche Alarmtypen für die einzelnen Smart Rules zu verwenden. Wenn ein Alarmtyp für mehrere Smart Rules verwendet wird, können sich die Smart Rules beim Versuch, denselben Alarmtyp zu aktualisieren, gegenseitig beeinträchtigen. Dies kann zu unerwartetem Verhalten führen.<br> <b>Schweregrad: </b>Schweregrad des auszulösenden Alarms.<br><b>Text: </b>Alarm-Text.</td>
</tr>
<tr>
<td align="left">4</td>
<td align="left">Ziel-Assets oder -geräte</td>
<td align="left">Wählen Sie eine Gruppe oder ein Gerät, auf die/das die Regel angewendet werden soll. Um die Smart Rule in anderen Assets oder Geräten anzuwenden, navigieren Sie zu den jeweiligen Objekten und aktivieren Sie dort die Smart Rule. In den Smart Rules-Details wird eine Liste namens "Aktiv für Ziel-Asset oder Geräte" angezeigt. <br>
Wenn Sie dieses Feld leer lassen, wird die Smart Rule auf jede Gruppe und jedes Gerät angewendet. Sie können dann die Smart Rule für spezifische Assets oder Geräte deaktivieren. In diesem Fall wird in den Smart Rules-Details eine Liste namens "Inaktiv für Ziel-Assets oder Geräte" angezeigt. <br>
Weitere Informationen zum Aktivieren/Deaktivieren einer Smart Rule finden Sie unter <a href="#toggle-rules" class="no-ajaxy">So deaktivieren oder aktivieren Sie eine Smart Rule für eine Gruppe oder ein Gerät</a>.
</td>
</tr>
</tbody>
</table>

> **Info:** Die Regel prüft einmal pro Minute, ob das konfigurierte Zeitintervall überschritten wurde. Daher kann es, nachdem das Zeitintervall überschritten wurde, bis zu einer Minute dauern, bis der Alarm erzeugt wird. Um das Überschreiten des Intervalls zu überprüfen, muss mindestens ein Messwert eingegangen sein, nachdem die Regel erstellt/aktiviert wurde.

<a name="alarm-operation"></a>
### Bei Alarm Operation ausführen

**Funktionalität**

Tritt ein bestimmter Alarm auf, wird die spezifizierte Operation zum Gerät gesendet.


**Parameter**

Die Regel verwendet die folgenden Parameter:

![On alarm execute operation](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-operation.png)

<table>
<colgroup>
       <col style="width: 10%;">
       <col style="width: 20%;">
       <col style="width: 70%;">
    </colgroup><thead>
<thead>
<tr>
<th style="text-align:left">Schritt</th>
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
<td style="text-align:left">Bei Alarm vom Typ</td>
<td style="text-align:left">Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm eines dieser Typen wird eine Regel ausgelöst.</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">Operation ausführen</td>
<td style="text-align:left">Die Operation, die gesendet wird. Die Operation wird als JSON-Beschreibung bereitgestellt. Unter dem <strong>Operation</strong>-Feld können einige Standardoperationen ausgewählt werden. Um eine Standardoperation zu verwenden, wählen sie die entsprechende Operation und klicken Sie die Pfeil-Schaltfläche auf der rechten Seite. Die JSON-Beschreibung der ausgewählten Operationen wird eingefügt.</td>
</tr>
<tr>
<td align="left">4</td>
<td align="left">Ziel-Assets oder -geräte</td>
<td align="left">Wählen Sie eine Gruppe oder ein Gerät, auf die/das die Regel angewendet werden soll. Um die Smart Rule in anderen Assets oder Geräten anzuwenden, navigieren Sie zu den jeweiligen Objekten und aktivieren Sie dort die Smart Rule. In den Smart Rules-Details wird eine Liste namens "Aktiv für Ziel-Asset oder Geräte" angezeigt. <br>
Wenn Sie dieses Feld leer lassen, wird die Smart Rule auf jede Gruppe und jedes Gerät angewendet. Sie können dann die Smart Rule für spezifische Assets oder Geräte deaktivieren. In diesem Fall wird in den Smart Rules-Details eine Liste namens "Inaktiv für Ziel-Assets oder Geräte" angezeigt. <br>
Weitere Informationen zum Aktivieren/Deaktivieren einer Smart Rule finden Sie unter <a href="#toggle-rules" class="no-ajaxy">So deaktivieren oder aktivieren Sie eine Smart Rule für eine Gruppe oder ein Gerät</a>.
</td>
</tr>
</tbody>
</table>

<a name="threshold-alarm"></a>
### Bei Schwellenwert Alarm erzeugen

**Funktionalität**

Wenn der Messwert einen definierten roten oder gelben Bereich betritt oder verlässt, wird ein Alarm erzeugt bzw. gelöscht.

Der Schweregrad des Alarms wird folgendermaßen bestimmt:

* Wenn der Messwert sich in den roten Bereich bewegt, wird ein Alarm des Schweregrads KRITISCH erzeugt. Wenn er sich aus dem roten Bereich hinausbewegt, wird der KRITISCHE Alarm gelöscht.

* Wenn der Messwert sich in den gelben Bereich bewegt, wird ein Alarm des Schweregrads WENIGER WICHTIG erzeugt. Wenn er sich aus dem gelben Bereich hinausbewegt, wird der WENIGER WICHTIGE Alarm gelöscht.

Diese Regel verwendet die folgenden Parameter vom Gerät oder aus der Datenpunktbibliothek:

* Datenpunktbibliothek roter/gelber Bereich: Roter Bereich, in welchem das System KRITISCHE Alarme erzeugen soll, und gelber Bereich, in welchem das System WENIGER WICHTIGE Alarme erzeugen soll. Beachten Sie, dass für den Datenpunkt mindestens einer der beiden Bereiche (rot oder gelb) konfiguriert sein sollte.

* Objekt roter Bereich: Bereich, in welchem das System KRITISCHE Alarme erzeugen soll. Diese Werte können im Daten-Explorer für jeden Datenpunkt bearbeitet werden. Beachten Sie, dass es sich hierbei um geschlossene Intervalle handelt ([rot min: rot max]), die den niedrigsten und den höchsten zulässigen Wert enthalten, siehe auch Beispiele unten.

* Objekt gelber Bereich: Bereich, in welchem das System WENIGER WICHTIGE Alarme erzeugen soll. Diese Werte können im Daten-Explorer für jeden Datenpunkt bearbeitet werden. Beachten Sie, dass es sich hierbei um halb offene Intervalle handelt ([gelb min : gelb max)), die den niedrigsten zulässigen Wert, aber nicht den höchsten zulässigen enthalten, siehe auch Beispiele unten.

#### Beispiele

**Beispiel 1 - roter Bereich:**

Wenn wir den roten Bereich auf "[60;90]" einstellen

* rot min: 60
* rot max: 90

und der Messwert zwischen 60 und 90 liegt (einschließlich der Werte 60 und 90), führt dies zur Erzeugung eines KRITISCHEN Alarms (rot).

**Beispiel 2 - gelber Bereich:**

Wenn wir den gelben Bereich auf "[30;50)" einstellen

* gelb min: 30
* gelb max: 50

und der Messwert zwischen 30 und 49 liegt, führt dies zur Erzeugung eines WENIGER WICHTIGEN Alarms (gelb). Der Wert 50 liegt außerhalb des gelben Bereichs.

**Beispiel 3 - roter und gelber Bereich:**

Aufgrund des oben genannten Verhaltens können wir Konfigurationen wie die folgende festlegen:

* rot min: 60
* rot max: 90
* gelb min: 30
* gelb max: 60

Wenn der Messwert 60 beträgt, führt dies zur Erzeugung eines KRITISCHEN Alarms (rot), da Rot den Wert 60 mit einschließt.

**Beispiel 4 - Überlappung:**

Der rote und der gelbe Bereich können sich überlappen. Ein Wert in diesem Überlappungsbereich wird als im gelben Bereich liegend behandelt.

Wenn wir den gelben Bereich auf "[30;60)" und den roten Bereich auf "[50;90]" einstellen:

* rot min: 50
* rot max: 90
* gelb min: 30
* gelb max: 60

und der Messwert 55 beträgt, wird ein WENIGER WICHTIGER Alarm (gelb) erzeugt.

Durch diese Mechanismen können globale Schwellenwertbereiche in der Datenpunktbibliothek definiert werden. Diese globalen Werte können dann von Fall zu Fall für bestimmte Objekte überschrieben werden.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On measurement threshold create alarm](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-thresholdalarm.png)

<table>
<thead>
<colgroup>
       <col style="width: 10%;">
       <col style="width: 20%;">
       <col style="width: 70%;">
    </colgroup><thead>
<tr>
<th align="left">Schritt</th>
<th align="left">Feld</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">1</td>
<td align="left">Name der Regel</td>
<td align="left">Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.</td>
</tr>
<tr>
<td align="left">2</td>
<td align="left">Bei Schwellenwert</td>
<td align="left"><strong>Fragment/Series</strong>: Fragment/Series des Messwerts. Der eingehende Messwert muss exakt die gleichen Fragment/Series-Werte haben. Wenn eine Regel im Daten-Explorer erstellt wird, sind diese Felder bereits ausgefüllt. <br> <strong>Eintrag in der Datenpunktbibliothek</strong>: Name des Eintrags in der Datenpunktbibliothek. Wird verwendet, um die Standardwerte für den roten und gelben Bereich zu ermitteln, wenn diese nicht individuell konfiguriert wurden. Beachten Sie, dass die im Datenpunkt festgelegte Einheit hier nicht berücksichtigt wird.</td>
</tr>
<tr>
<td align="left">3</td>
<td align="left">Alarm erzeugen</td>
<td align="left"><b>Typ:</b> Typ des auszulösenden Alarms. Es wird dringend empfohlen, unterschiedliche Alarmtypen für die einzelnen Smart Rules zu verwenden. Wenn ein Alarmtyp für mehrere Smart Rules verwendet wird, können sich die Smart Rules beim Versuch, denselben Alarmtyp zu aktualisieren, gegenseitig beeinträchtigen. Dies kann zu unerwartetem Verhalten führen.<br> <b>Text: </b>Alarm-Text.</td>
</tr>
<tr>
<td align="left">4</td>
<td align="left">Ziel-Assets oder -geräte</td>
<td align="left">Wählen Sie eine Gruppe oder ein Gerät, auf die/das die Regel angewendet werden soll. Um die Smart Rule in anderen Assets oder Geräten anzuwenden, navigieren Sie zu den jeweiligen Objekten und aktivieren Sie dort die Smart Rule. In den Smart Rules-Details wird eine Liste namens "Aktiv für Ziel-Asset oder Geräte" angezeigt. <br>
Wenn Sie dieses Feld leer lassen, wird die Smart Rule auf jede Gruppe und jedes Gerät angewendet. Sie können dann die Smart Rule für spezifische Assets oder Geräte deaktivieren. In diesem Fall wird in den Smart Rules-Details eine Liste namens "Inaktiv für Ziel-Assets oder Geräte" angezeigt. <br>
Weitere Informationen zum Aktivieren/Deaktivieren einer Smart Rule finden Sie unter <a href="#toggle-rules" class="no-ajaxy">So deaktivieren oder aktivieren Sie eine Smart Rule für eine Gruppe oder ein Gerät</a>.
</td>
</tr>
</tbody>
</table>

**Beschreibung**

Die Regel führt für jeden eingehenden Messwert folgende Schritte aus:

* Prüfen, ob die Smart Rule einen gültigen Datenpunkt hat. Ist dies nicht der Fall, wird ein Alarm des Schweregrads WICHTIG von der Regel-Engine (CEP) gesendet, der darüber informiert, dass die Regel eine ungültige Konfiguration aufweist.

* Prüfen, ob die Regel für das Quellobjekt aktiviert ist.

* Prüfen, ob der Messwert Daten für das Fragment/Series enthält (Parameter des konfigurierten Datenpunkts).

* Die Daten für den roten und gelben Bereich stammen aus:

- der Datenpunktbibliothek (Kontrollparameter).
- dem Quellobjekt (Messwert). Werden Bereiche aus der Datenpunkt-Außerkraftsetzung des Quellobjekts gefunden, so werden sie zusammengeführt.

Sind in den zusammengeführten Parametern keine roten/gelben Bereiche definiert, werden keine Alarme ausgelöst.

> **Info:** Bereichswerte, die im Quellobjekt definiert wurden, haben Priorität über Werte aus der Datenpunktbibliothek. Sie können auch lediglich einen einzelnen Wert überschreiben (z. B. gelber Bereich max), indem Sie diesen im Quellobjekt setzen. Die anderen Werte werden dann aus der Datenpunktbibliothek übernommen.

* Eingehende Werte innerhalb des roten Bereichs: <br> Wenn kein aktiver Alarm des Schweregrads KRITISCH des jeweiligen Typs für das Objekt vorliegt, KRITISCHEN Alarm erzeugen; andernfalls nichts tun.

* Eingehende Werte innerhalb des gelben Bereichs: <br> Wenn kein aktiver Alarm des Schweregrads WENIGER WICHTIG des jeweiligen Typs für das Objekt vorliegt, WENIGER WICHTIGEN Alarm erzeugen; andernfalls nichts tun.

* Messwert außerhalb des gelben und roten Bereichs: <br> Wenn ein aktiver Alarm des jeweiligen Typs für das Objekt vorliegt, den KRITISCHEN und/oder den WENIGER WICHTIGEN Alarm löschen.

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/benutzerhandbuch/device-management-de#maintenance-mode) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Alarmregeln](/benutzerhandbuch/administration-de#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

* Prüfen Sie, ob der Alarm bereits durch die nächste Messung mit Werten im grünen Bereich gelöscht wurde.

> **Info:**  Wenn Sie einen Alarm löschen, bestätigen Sie damit, dass der Alarm aufgehoben ist. Ein neuer Alarm wird nur erzeugt, wenn das Gerät den Zustand wechselt und den Schwellenwert wieder überschreitet.

>**Info:** Unter bestimmten Umständen, etwa wenn der zeitliche Abstand zwischen den Messungen sehr groß ist, kann diese Smart Rule einen falschen Alarmschweregrad hervorrufen. Wird beispielsweise der CEP/Apama-Pod neu gestartet, geht der interne Zustand verloren und es wird erneut ein Alarm ausgegeben, wenn dies nicht der Fall sein sollte, was zu einem falschen Alarmschweregrad führt.


<a name="threshold-explicit"></a>
### Bei explizitem Schwellenwert Alarm erzeugen

**Funktionalität**

Wenn der Messwert den roten Bereich betritt oder verlässt, wird ein KRITISCHER Alarm erzeugt bzw. gelöscht.

Der Schweregrad des Alarms wird folgendermaßen bestimmt:

* Wenn der Messwert sich in den roten Bereich bewegt, wird der Schweregrad auf KRITISCH gesetzt.

* Wenn der Messwert sich in den grünen Bereich bewegt, wird kein Alarm erzeugt.

> **Info:** Die Regel ist ähnlich wie die Regel "Bei Schwellenwertüberschreitung Alarm erzeugen". Allerdings wird in dieser Regel hier der rote Schwellenwert explizit bereitgestellt, während in der Regel "Bei Schwellenwert Alarm erzeugen" der Schwellenwert vom Gerät oder aus der Datenpunktbibliothek genommen wird.

**Parameter**

Die Regel verwendet die folgenden Parameter:

![On measurement explicit threshold create alarm](/images/benutzerhandbuch/cockpit/cockpit-globalsmartrules-measurementthreshold.png)

<table>
<thead>
<colgroup>
       <col style="width: 10%;">
       <col style="width: 20%;">
       <col style="width: 70%;">
    </colgroup><thead>
<tr>
<th align="left">Schritt</th>
<th align="left">Feld</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">1</td>
<td align="left">Name der Regel</td>
<td align="left">Vorausgefüllt mit dem Namen des Regel-Templates. Kann individuell geändert werden.</td>
</tr>
<tr>
<td align="left">2</td>
<td align="left">Bei Schwellenwert</td>
<td align="left"><strong>Fragment/Series</strong>: Fragment/Series des Messwerts. Der eingehende Messwert muss exakt die gleichen Fragment/Series-Werte haben. Wenn eine Regel im Daten-Explorer erstellt wird, sind diese Felder bereits ausgefüllt. <br> <strong>Minimum, Maximum</strong>: Wenn sich ein Wert im angegebenen Bereich [minimum; maximum] befindet, wird der konfigurierte Alarm ausgelöst.</td>
</tr>
<tr>
<td align="left">3</td>
<td align="left">Alarm erzeugen</td>
<td align="left"><strong>Typ:</strong> Typ des auszulösenden Alarms. Es wird dringend empfohlen, unterschiedliche Alarmtypen für die einzelnen Smart Rules zu verwenden. Wenn ein Alarmtyp für mehrere Smart Rules verwendet wird, können sich die Smart Rules beim Versuch, denselben Alarmtyp zu aktualisieren, gegenseitig beeinträchtigen. Dies kann zu unerwartetem Verhalten führen. <br><strong>Text:</strong> Alarm-Text.</td>
</tr>
<tr>
<td align="left">4</td>
<td align="left">Ziel-Assets oder -geräte</td>
<td align="left">Wählen Sie eine Gruppe oder ein Gerät, auf die/das die Regel angewendet werden soll. Um die Smart Rule in anderen Assets oder Geräten anzuwenden, navigieren Sie zu den jeweiligen Objekten und aktivieren Sie dort die Smart Rule. In den Smart Rules-Details wird eine Liste namens "Aktiv für Ziel-Asset oder Geräte" angezeigt. <br>
Wenn Sie dieses Feld leer lassen, wird die Smart Rule auf jede Gruppe und jedes Gerät angewendet. Sie können dann die Smart Rule für spezifische Assets oder Geräte deaktivieren. In diesem Fall wird in den Smart Rules-Details eine Liste namens "Inaktiv für Ziel-Assets oder Geräte" angezeigt. <br>
Weitere Informationen zum Aktivieren/Deaktivieren einer Smart Rule finden Sie unter <a href="#toggle-rules" class="no-ajaxy">So deaktivieren oder aktivieren Sie eine Smart Rule für eine Gruppe oder ein Gerät</a>.
</td>
</tr>
</tbody>
</table>

**Fehlerbehebung**

* Stellen Sie sicher, dass der Alarm erzeugt und nicht dupliziert wurde.

* Prüfen Sie, ob sich das Gerät im [Wartungsmodus](/benutzerhandbuch/device-management-de#maintenance-mode) befindet. In diesem Fall wird das Erzeugen eines Alarms unterdrückt.

* Wenn Sie eine Alarmregel erstellt haben (siehe [Administration > Alarmregeln](/benutzerhandbuch/administration-de#reprio-alarms)), die den Schweregrad des Alarms ändert, zeigt der Alarm einen anderen Schweregrad als möglicherweise erwartet.

* Prüfen Sie, ob der Alarm bereits durch die nächste Messung mit Werten im grünen Bereich gelöscht wurde.

> **Info:**  Wenn Sie einen Alarm löschen, bestätigen Sie damit, dass der Alarm aufgehoben ist. Ein neuer Alarm wird nur erzeugt, wenn das Gerät den Zustand wechselt und den Schwellenwert wieder überschreitet.

>**Info:** Unter bestimmten Umständen, etwa wenn der zeitliche Abstand zwischen den Messungen sehr groß ist, kann diese Smart Rule einen falschen Alarmschweregrad hervorrufen. Wird beispielsweise der CEP/Apama-Pod neu gestartet, geht der interne Zustand verloren und es wird erneut ein Alarm ausgegeben, wenn dies nicht der Fall sein sollte, was zu einem falschen Alarmschweregrad führt.

<a name="smart-rule-variables"></a>
### Smart Rule-Variablen

In bestimmten Regel-Parametern können verschiedene Auslösefelder als Variablen verwendet werden. Wird eine Regel ausgelöst, werden die Variablen durch die entsprechenden Werte dieser Auslösefelder ersetzt.

Sie können diesen Mechanismus verwenden, um etwa Gerätenamen oder Alarmtexte in mehreren Ausgaben einzufügen (E-Mail, SMS).


**Gemeinsame, von allen Auslösern zu verwendende Felder (Alarme, Messwerte, Operationen, Ereignisse)**

<table>
<colgroup>
       <col style="width: 30%;">
       <col style="width: 70%;">
    </colgroup>
  <tr>
  <td><b>Variable</b></td>
  <td><b>Inhalt</b></td>
  </tr>
  <tr>
    <td>#{id}</td>
    <td>Bezeichnung des Auslösers.</td>
  </tr>
  <tr>
    <td>#{type}</td>
    <td>Art des Auslösers.</td>
  </tr>
  <tr>
    <td>#{source}</td>
    <td>Bezeichnung der Quelle des Auslösers.</td>
  </tr>
  <tr>
    <td>#{time}</td>
    <td>Zeitstempel des Auslösers.  </td>
  </tr>
  <tr>
    <td>#{text}</td>
    <td>Text oder Nachricht des Auslösers.</td>
  </tr>
</table>

> **Info:** Bei Verwendung von Apama für Smart Rules (angezeigt durch ein Abonnement von Apama-ctrl in <b>Anwendungen</b> > <b>Abonnierte Anwendungen</b> in der "Administration"-Anwendung)
können Variablen für Uhrzeiten eine Zeitzone und ein Zeitformat enthalten, in denen die Uhrzeit angezeigt werden soll.
So zeigt zum Beispiel die Variable #{time:TZ=America/New_York,FORMAT="HH:mm:ssZ"} die Uhrzeit entsprechend der Zeitzone für New York im Format HH:mm:ssZ an.
Siehe auch [Unterstützte Zeitzonen]({{< link-apama-webhelp >}}/index.html#page/apama-webhelp%2Fco-DevApaAppInEpl_supported_time_zones.html)
und [Formatspezifikation für die TimeFormat-Funktionen]({{< link-apama-webhelp >}}/index.html#page/apama-webhelp%2Fco-DevApaAppInEpl_format_specification_for_the_time_format_plug_in_functions.html)
in der Apama-Dokumentation.

**Alarmspezifische Felder**

<table>
<colgroup>
       <col style="width: 30%;">
       <col style="width: 70%;">
    </colgroup>
  <tr>
  <td><b>Variable</b></td>
  <td><b>Inhalt</b></td>
  </tr>  
  <tr>
    <td>#{status}</td>
    <td>Status des Alarms: AKTIV, BESTÄTIGT oder GELÖSCHT.</td>
  </tr>
  <tr>
    <td>#{severity}</td>
    <td>Schweregrad des Alarms: KRITISCH, WICHTIG, WENIGER WICHTIG oder WARNUNG.</td>
  </tr>
  <tr>
    <td>#{count}</td>
    <td>Wie oft der Alarm gesendet wurde. Sich wiederholende Alarme zum selben Gerät und zum selben Alarmtyp werden zu einem Alarm zusammengefasst.</td>
  </tr>
</table>

**Operationsspezifische Felder**

<table>
<colgroup>
       <col style="width: 30%;">
       <col style="width: 70%;">
    </colgroup>
  <tr>
  <td><b>Variable</b></td>
  <td><b>Inhalt</b></td>
  </tr>  
  <tr>
    <td>#{status}</td>
    <td>Status der Operation: ERFOLGREICH, FEHLGESCHLAGEN, WIRD AUSGEFÜHRT oder AUSSTEHEND.</td>
  </tr>
</table>


**Messwertspezifische Felder**

<table>
<colgroup>
       <col style="width: 30%;">
       <col style="width: 70%;">
    </colgroup>
  <tr>
  <td><b>Variable</b></td>
  <td><b>Inhalt</b></td>
  </tr>  
  <tr>
    <td>#{valueFragment}</td>
    <td>Name des Messwertfragments.</td>
  </tr>  
  <tr>
    <td>#{valueSeries}</td>
    <td>Name des Messserienfragments.</td>
  </tr>
  <tr>
    <td>#{value}</td>
    <td>Vom Sensor stammender Wert.</td>
  </tr>
  <tr>
    <td>#{unit}</td>
    <td>Verwendete Einheit, zum Beispiel "mm", "lux".</td>
  </tr>
</table>


Darüber hinaus wird das folgende Pattern verwendet:

<table>
<colgroup>
       <col style="width: 30%;">
       <col style="width: 70%;">
    </colgroup>
  <tr>
  <td><b>Variable</b></td>
  <td><b>Inhalt</b></td>
  </tr>  
  <tr>
    <td>#{X.Y} oder #{X.Y.Z} </td>
    <td>Die in Extra-Parametern oder verschachtelten Strukturparametern verfügbaren Attributfeld-Informationen.</td>
  </tr>  
</table>

#### Beispiel

**{{< product-c8y-iot >}} trigger**

```json
{
  "source":{
    "id":"10200"
  },
  "type":"TestEvent",
  "text":"sensor was triggered",
  "time":"2014-03-03T12:03:27.845Z",
  "c8y_Position":{
    "lat":2,
    "lng":2
  },
  "c8y_evtdata":{
    "data1":111,
    "date2":222,
    "evtInnerData":{
      "indate1":333,
      "indate2":444
    }
  }
}
```

Hier lassen sich beispielsweise die folgenden Variablen definieren:

<table>
<colgroup>
       <col style="width: 30%;">
       <col style="width: 70%;">
    </colgroup>
  <tr>
  <td><b>Variable</b></td>
  <td><b>Inhalt</b></td>
  </tr>  
  <tr>
    <td>#{ c8y_Position.lat} </td>
    <td>Ruft den Breitengrad-Wert ab.</td>
  </tr>  
  <tr>
    <td>#{ c8y_evtdata.data1} </td>
    <td>Ruft den Wert data1 ab.</td>
  </tr>  
  <tr>
    <td>{ c8y_evtdata. evtInnerData . indate1} </td>
    <td>Ruft den verschachtelten Strukturwert ab.</td>
  </tr>  
  <tr>
    <td>#{source.X.Y} </td>
    <td>Die Eigenschaftsfeldinformationen des Quellgeräts (ManagedObject) des Triggers. Beispiel:
    <br> #{source.c8y_Hardware.serialNumber} > Seriennummer des Geräts.
    <br> #{source.c8y_Notes} > Anmerkungsfeld des Geräts.</td>
  </tr>  
</table>

> **Wichtig:** Wenn die Variable nicht existiert oder falsch geschrieben wurde, erfolgt keine Ersetzung.
