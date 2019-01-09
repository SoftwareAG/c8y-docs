---
order: 30
title: Data Broker
layout: redirect
---

Mit Data Broker können Daten gezielt mit anderen Mandanten geteilt werden. Sie können folgenden Daten teilen:

*   Geräte (und ganz allgemein Objekte),
*   Ereignisse,
*   Alarme,
*   Messwerte,
*   Kommandos.

Navigieren Sie zur Seite **Datenkonnektor** im Menü **Data Broker**, wenn Sie anderen Mandanten Daten senden möchten. Navigieren Sie zur Seite **Datenabonnements**, wenn Sie von anderen Mandanten Daten erhalten möchten.

> **Info**: Geräte, die über Data Broker weitergeleitet werden, werden wie normale Geräte im Zielmandanten abgerechnet.

>Beachten Sie folgende Einschränkungen im Zusammenhang mit Data Broker:<br> 

>* Cloud Remote Access kann im Ursprungsmandanten nicht verwendet werden.  
* Derzeit funktioniert das Fieldbus-Widget nicht in Mandanten, die Fieldbus-Geräte durch Data Broker erhalten, da die entsprechenden Datenmodelle nicht synchronisiert werden. 
* Während wir Rückwärtskompatibilität gewährleisten, können wir nicht garantieren, dass Data Broker Daten an Cumulocity-Mandanten senden kann, die auf späteren Cumulocity-Versionen laufen als der Ursprungsmandant.

### <a name="data-broker-connectors"></a>Datenkonnektoren

Ein Datenkonnektor beschreibt die Daten, die Sie zu einem Zielmandanten senden möchten sowie die URL dieses Mandanten.

<a name="data-broker-connectors-list"></a>**Anzeigen von Datenkonnektoren**

Auf der Seite **Datenkonnektor** können Sie bestehende Datenkonnektoren verwalten und neue anlegen. Klicken Sie **Datenkonnektor**, um eine Liste mit allen aktuell definierten Datenkonnektoren mit ihrem jeweiligen Status anzuzeigen.

![Datenkonnektor](/guides/images/benutzerhandbuch/ee-data-connector.png)

Für jeden Datenkonnektor wird die folgenden Information bereitgestellt:

*   der Name des Datenkonnektors
*   der Zielmandant
*   eine Beschreibung
*   der Status
*   die Anzahl der Filter, die für den Datenkonnektor gesetzt sind

Verwenden Sie den Regler, um das Weiterleiten von Daten an den Zielmandanten zu aktivieren bzw. deaktivieren. Werden Daten weitergeleitet, steht der Regler auf "aktiv". Werden keine Daten weitergeleitet, steht der Regler auf "gesperrt" oder "ausstehend". "Gesperrt" bedeutet, dass Sie das Weiterleiten deaktiviert haben. "Ausstehend" bedeutet, dass der Zielmandant das Weiterleiten deaktiviert hat.

*   Um die Konfiguration für einen Datenkonnektor zu bearbeiten, öffnen Sie das Kontextmenü über das Menüsymbol und wählen Sie **Bearbeiten**. Die Konfiguration wird weiter unten detailliert beschrieben.
*   Klicken Sie **Duplizieren** im Kontextmenü um einen weiteren Datenkonnektor mit der gleichen Konfiguration zu erstellen.
*   Klicken Sie **Löschen** im Kontextmenü, um die Datenweiterleitung zu beenden und den Datenkonnektor zu löschen.

<a name="data-broker-connector-edit"></a>**Erstellen und Bearbeiten von Datenkonnektoren**

Klicken Sie **Datenkonnektor hinzufügen** in der oberen Menüleiste, um einen neuen Datenkonnektor zu erstellen.

![Konnektor bearbeiten](/guides/images/benutzerhandbuch/ee-data-connector-add.png)

Stellen Sie folgende Informationen bereit, um einen Datenkonnektor zu bearbeiten:

<table>

<thead>

<tr>

<th style="text-align: left">Feld</th>

<th style="text-align: left">Beschreibung</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align: left">Titel</td>

<td style="text-align: left">Name des Datenkonnektors</td>

</tr>

<tr>

<td style="text-align: left">Ziel-URL für den Datenkonnektor</td>

<td style="text-align: left">URL des Mandanten, zu dem Daten weitergeleitet werden. Dieser Wert kann nach dem Speichern nicht mehr geändert werden.</td>

</tr>

<tr>

<td style="text-align: left">Beschreibung</td>

<td style="text-align: left">Beschreibung der Konfiguration. Sowohl der Name als auch die Beschreibung sind auf der Zielseite sichtbar, nachdem das Abonnement angenommen wurde.</td>

</tr>

<tr>

<td style="text-align: left">Datenfilter</td>

<td style="text-align: left">Ein oder mehrere Filter, die definieren, was zum Ziel kopiert wird. Sie müssen mindestens einen Filter konfigurieren.</td>

</tr>

</tbody>

</table>

Jeder Datenfilter enthält die folgenden Informationen:

<table>

<thead>

<tr>

<th style="text-align: left">Feld</th>

<th style="text-align: left">Beschreibung</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align: left">Gruppe oder Gerät</td>

<td style="text-align: left">Die Gruppe oder das Gerät, die/das weitergeleitet wird. Wird hier eine Gruppe ausgewählt, werden alle Untergruppen und Untergeräte ebenfalls weitergeleitet. Standardmäßig werden alle Daten weitergeleitet.</td>

</tr>

<tr>

<td style="text-align: left">API</td>

<td style="text-align: left">Der Datentyp, der weitergeleitet wird (Alarme, Ereignisse, Messwerte, Objekte) oder empfangen wird (Kommandos).</td>

</tr>

<tr>

<td style="text-align: left">Zu filternde Fragmente</td>

<td style="text-align: left">Fragmente, die in einem Gerät vorhanden sein müssen, damit dieses weitergeleitet wird.</td>

</tr>

<tr>

<td style="text-align: left">Zu kopierende Fragmente</td>

<td style="text-align: left">Fragmente, die zum Ziel kopiert werden. Wenn hier nichts angegeben wird, werden nur die Standardattribute wie Objekte, Alarme, Ereignisse und Messwerte weitergeleitet (siehe unten). Wählen Sie **Alle Fragmente kopieren**, um das gesamte Objekt weiterzuleiten.</td>

</tr>

<tr>

<td style="text-align: left">Type-Filter</td>

<td style="text-align: left">Weitergeleitete Daten müssen diesen Wert in ihrem "Type"-Attribut haben.</td>

</tr>

</tbody>

</table>

> **Info:** Wenn das Feld  **Gruppe oder Gerät** ausgefüllt ist, wird die gesamte nachfolgende Struktur der Stammdaten an den Zielmandanten weitergeleitet, sobald der Konnektor aktiv ist. Wenn das Feld  **Gruppe oder Gerät** leer ist oder "Alle" enthält, wird die nachfolgende Struktur nicht weitergeleitet. in diesem Fall arbeitet der Filter im "Lazy Mode", dass heißt, das Gerät oder Asset wird erst mit dem ersten Ereignis/Messwert/Alarm weitergeleitet. 

Wenn der Datentyp Kommando in Filtern ausgewählt ist, werden die Kommandos, die im Zielmandanten erstellt wurden, an den Ursprungsmandanten weitergeleitet. Dies trifft jedoch nur auf Kommandos zu, die die folgenden Bedingungen erfüllen:

* das Gerät des Kommandos selbst stammt aus weitergeleiteten Daten,
* das Kommando entspricht anderen Filterkriterien.

Aktualisierungen des Kommandostatus vom Ursprungsmandanten werden an den Zielmandanten weitergeleitet.

Die Kopfzeile eines Datenfilters fasst die Konfiguration in einer Zeile zusammen. Die Attribute, die standardmäßig kopiert werden, sind:

*   **Für erzeugte Alarme**: type, text, time, severity, status.
*   **Für aktualisierte Alarme**: status, text, severity.
*   **Für erzeugte Ereignisse**: type, text, time.
*   **Für erzeugte Messwerte**: type, text, time.
*   **Für erstellte und aktualisierte Geräte**: type, name, c8y&#95;IsBinary, c8y&#95;IsDeviceGroup, c8y&#95;IsDevice, c8y&#95;DeviceGroup, c8y&#95;DeviceSubgroup, c8y&#95;SmartRule, c8y&#95;DynamicGroup, c8y&#95;DeviceQueryString.
*   **Für aktualisierte Kommandos**: status

Wenn Sie den Datenkonnektor konfiguriert haben, klicken Sie **Speichern**, um die Konfiguration zu speichern.

Nach dem Speichern wird ein Sicherheitscode unter der Konfiguration angezeigt. Dieser Sicherheitscode verhindert unbeabsichtigtes Weiterleiten von Daten. Sie müssen diesen Sicherheitscode getrennt einem Benutzer mit Administrationsrechten für den Zielmandanten mitteilen. Über das Symbol neben dem Sicherheitscode können Sie diesen in Ihr Clipboard kopieren.

![Sicherheitscode](/guides/images/users-guide/securitycode.png)

### <a name="data-broker-subscriptions"></a>Datenabonnements

Auf der Seite **Datenabonnements** können Sie bestehende Datenabonnements verwalten und neue anlegen.

Klicken Sie **Datenabonnements**, um eine Liste mit allen aktuell zu Ihrem Mandanten weitergeleiteten Daten anzuzeigen.

![Datenabonnements](/guides/images/benutzerhandbuch/ee-data-subscription.png)

Für jedes Abonnement wird der Name, der Zielmandant und der Status (aktiviert oder deaktiviert) auf einer Karte bereitgestellt.

Verwenden Sie den Regler, um zeitweilig das Weiterleiten von Daten in Ihren Mandanten zu beenden.

Um das Weiterleiten von Daten ganz zu beenden und den Datenkonnektor zu entfernen, klicken Sie auf das Menüsymbol und wählen Sie im Kontextmenü **Löschen**.

**Wie Sie die Datenweiterleitung auf der Empfängerseite einrichten können**

1.  Klicken Sie **Datenabonnement hinzufügen** in der oberen Menüleiste, um Daten zu empfangen.
2.  Geben Sie in der neuen Karte den Sicherheitscode ein, den Sie vom Sender der Daten erhalten haben.
3.  Wenn die Verbindung hergestellt ist, klicken Sie **Annehmen**, um das Weiterleiten in Ihren Mandanten zu starten. Das Abonnement ist nun aktiv.
4.  Verwenden Sie den Regler in der Karte, um zeitweilig das Weiterleiten von Daten in Ihren Mandanten zu beenden.

Navigieren Sie nun zur Device Management- oder Cockpit-Anwendung. Dort gibt es eine neue "virtuelle Gruppe" mit einem speziellen Symbol (siehe Abbildung unten), die die weitergeleiteten Geräte anzeigt. Diese Gruppe hat denselben Namen wie das Abonnement. Geräte werden auf der Empfängerseite verzögert erstellt, sobald sie, nach Einrichten eines aktiven Abonnements, das erste mal Daten senden.

![Data Broker-Gruppe in Cockpit-Anwendung](/guides/images/benutzerhandbuch/ee-data-broker-group.PNG)

### <a name="data-broker-troubleshooting"></a> Fehlerbehebung

**Fehlermeldung**

	Data broker processing is currently overloaded and may stop processing your events. Please contact support.

**Beschreibung**

Die Data Broker-Queue für den entsprechenden Mandanten ist voll. Dies kann beispielsweise geschehen, wenn mehr Ereignisse erstellt werden als aktuell bearbeitet werden können.  

In diesem Fall wird ein Alarm erzeugt. Um keine neu eingehenden Ereignisse zu verlieren, werden die ältesten Ereignisse gelöscht. Um Spam zu vermeiden, werden Alarme und Logs nur einmal pro Minute ausgelöst. 