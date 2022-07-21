---
layout: redirect
title: Verwalten und Überwachen von Microservices
weight: 35
---

Klicken Sie auf **Microservices** im Menü **Ecosystem** des Navigators, um eine Liste oder Tabelle aller Microservices anzuzeigen, die für Ihr Konto abonniert werden.

<img src="/images/benutzerhandbuch/Administration/admin-microservices.png" alt="Microservices list">

Ein Microservice ist eine spezielle Art von Anwendung, und zwar eine serverseitige Anwendung, die zum Entwickeln von Zusatzfunktionalitäten für {{< product-c8y-iot >}} dient. Als Webanwendungen können Microservices entweder von der Plattform oder von einem Service Provider für Ihren Mandanten abonniert werden oder als benutzerdefinierte Anwendungen in Ihrem Besitz sein, siehe [Abonnierte Miroservices](#custom-microservices).

### Abonnierte Microservices

{{< product-c8y-iot >}} stellt vielerlei Microservice-Anwendungen für verschiedene Zwecke bereit. Je nach Ihrer Installation und/oder Ihren optionalen Services zeigt Ihr Mandant eine Auswahl der potenziell verfügbaren Anwendungen an.

Nachstehend finden Sie eine Liste aller Microservices, die in einem {{< standard-tenant-de >}}en und/oder {{< enterprise-tenant-de >}}en standardmäßig abonniert sind. Darüber hinaus können zahlreiche optionale Microservices für Ihren Mandanten abonniert sein.

#### Standardmäßig abonnierte Microservices

<table>
<col width="200">
<col width="400">
<col width="200">
<col width="200">
<thead>
<tr>
<th style="text-align:left">Name auf der Benutzeroberfläche</th>
<th style="text-align:left">Funktionalität</th>
<th style="text-align:left">Identifikation in der API</th>
<th style="text-align:left">Verfügbarkeit</th>
</tr>
</thead>
<tbody>

<tr>
<td style="text-align:left"><a href="/apama/overview-analytics/#microservice-and-applications" class="no-ajaxy">Apama-ctrl-1c-4g</a></td>
<td style="text-align:left">Vollversion des Microservice "Apama". Laufzeit für Analytics Builder, EPL Apps und Smart Rules</td>
<td style="text-align:left">apama-ctrl-1c-4g</td>
<td style="text-align:left">{{< enterprise-tenant-de >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/apama/overview-analytics/#microservice-and-applications" class="no-ajaxy">Apama-ctrl-starter</a></td>
<td style="text-align:left">Eingeschränkte Version des Microservice "Apama". Laufzeit für eine unbeschränkte Anzahl von Smart Rules und eine beschränkte Anzahl von Analytics Builder-Modellen</td>
<td style="text-align:left">apama-ctrl-starter</td>
<td style="text-align:left">{{< standard-tenant-de >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/apama/overview-analytics/#microservice-and-applications" class="no-ajaxy">Apama-ctrl-smartrules</a></td>
<td style="text-align:left">Eingeschränkte Version des Microservice "Apama". Laufzeit nur für Smart Rules, keine Analytics Builder-Modelle oder EPL-Apps verfügbar</td>
<td style="text-align:left">apama-ctrl-smartrules</td>
<td style="text-align:left">Nur für selbst gehostete Installationen verfügbar</td>
</tr>

<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/device-management-de#simulator" class="no-ajaxy">Device-simulator</a></td>
<td style="text-align:left">Simulation aller Aspekte von IoT-Geräten</td>
<td style="text-align:left">device-simulator</td>
<td style="text-align:left">{{< standard-tenant-de >}}, {{< enterprise-tenant-de >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/cockpit-de#reports" class="no-ajaxy">Report agent</a></td>
<td style="text-align:left">Planen von Datenexporten aus der Cockpit-Anwendung heraus</td>
<td style="text-align:left">report agent</td>
<td style="text-align:left">{{< standard-tenant-de >}}, {{< enterprise-tenant-de >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/cockpit-de#smart-rules" class="no-ajaxy">Smartrule</a></td>
<td style="text-align:left">Verwenden Sie die Smart Rules Engine und erstellen Sie Smart Rules, um Aktionen anhand von Echtzeitdaten auszuführen. Erfordert einen der folgenden Microservices: apama-ctrl-1c-4g, apama-ctrl-starter oder apama-ctrl-smartrules</td>
<td style="text-align:left">smartrule</td>
<td style="text-align:left">{{< standard-tenant-de >}}, {{< enterprise-tenant-de >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/enterprise-tenant-de#customization" class="no-ajaxy">Sslmanagement</a></td>
<td style="text-align:left">Aktivieren eines eigenen benutzerdefinierten Domain-Namens durch Verwendung eines SSL-Zertifikats</td>
<td style="text-align:left">sslmanagement</td>
<td style="text-align:left">{{< enterprise-tenant-de >}}</td>
</tr>

</tbody>
</table>

>**Info:** Alle hier aufgelisteten Anwendungen sind vom Typ "Microservice".

<a name="custom-microservices"></a>
### Benutzerdefinierte Microservices

<a name="adding-microservices"></a>
#### So fügen Sie einen Microservice als benutzerdefinierte Anwendung hinzu

1. Klicken Sie rechts oben auf **Microservice hinzufügen**.
2. Legen Sie im darauf folgenden Dialog eine entsprechende ZIP-Datei ab oder navigieren Sie in Ihrem Dateisystem zu der Datei. Beachten Sie, dass die hochzuladende Datei nicht größer als 500 MB sein darf.
3. Der Microservice wird erstellt, sobald die ZIP-Datei erfolgreich hochgeladen wurde.

>**Wichtig:** Um Microservices zur Plattform hinzuzufügen, muss die ZIP-Datei die Manifest-Datei und das Docker Image für den Microservice enthalten. Zur Vorbereitung und Bereitstellung des Microservice-Pakets lesen Sie den Abschnitt [General aspects](/microservice-sdk/concept) im *Microservice SDK Guide*.

<a name="microservice-properties"></a>
### Microservice-Attribute

Um weitere Details zu einem Microservice anzuzeigen, klicken Sie auf ihn, um seine Registerkarte **Attribute** zu öffnen.

<img src="/images/benutzerhandbuch/Administration/admin-microservice-properties.png" alt="Microservice properties" style="max-width: 100%">

In der Registerkarte **Attribute** werden für jeden Microservice folgende Informationen angezeigt:

<table>
<col width="250">
<col width="450">
<col width="300">
<thead>
<tr>
<th style="text-align:left">Feld</th>
<th style="text-align:left">Beschreibung</th>
<th style="text-align:left">Kommentar</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ID</td>
<td style="text-align:left">Eindeutige ID zur Identifikation des Microservice</td>
<td style="text-align:left">Automatisch generiert</td>
</tr>
<tr>
<td style="text-align:left">Name</td>
<td style="text-align:left">Anwendungsname; wird als Titel der Microservice-Anwendung in der oberen Leiste angezeigt</td>
<td style="text-align:left">Automatisch generiert, basierend auf dem Namen der ZIP-Datei</td>
</tr>
<tr>
<td style="text-align:left">Anwendungsschlüssel</td>
<td style="text-align:left">Wird zur Identifikation des Microservice verwendet. Wird außerdem verwendet, um ihn als Abonnement zur Verfügung zu stellen, siehe <a href="/concepts/applications" class="no-ajaxy">Concepts Guide</a>.</td>
<td style="text-align:left">Automatisch generiert, basierend auf dem Namen der ZIP-Datei</td>
</tr>
<tr>
<td style="text-align:left">Typ</td>
<td style="text-align:left">Anwendungstyp</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left">Pfad</td>
<td style="text-align:left">Teil der URL, die die Anwendung aufruft</td>
<td style="text-align:left">Automatisch generiert als .../service/<microservice-name></td>
</tr>
</tbody>
</table>

Nachstehend finden Sie zusätzlich Informationen zur Microservice-Version sowie zur Isolationsstufe und zum Abrechnungsmodus. Details zu diesen Parametern siehe [Enterprise Tenant > Nutzungsstatistiken und Abrechnung > Microservice-Nutzung](/benutzerhandbuch/enterprise-tenant-de/#microservice-usage).

#### Microservice-Abonnement

Rechts oben in der Registerkarte **Attribute** finden Sie einen Umschalter zum Abonnieren oder Abbestellen eines Microservice.

<img src="/images/benutzerhandbuch/Administration/admin-microservice-subscribe.png" alt="Microservice subscription" style="max-width: 100%">

Eine Änderung des Abonnements ist nur möglich bei benutzerdefinierten Microservices, d. h. bei Microservices, die Sie besitzen.

### Microservice-Berechtigungen

In der Registerkarte **Berechtigungen** können Sie die Berechtigungen, die für den jeweiligen Microservice erforderlich sind, und die dafür bereitstehenden Rollen anzeigen.

<img src="/images/benutzerhandbuch/Administration/admin-microservice-permissions.png" alt="Microservice permissions" style="max-width: 100%">

### Überwachen von Microservices

Es gibt zwei Möglichkeiten, Microservices in der {{< product-c8y-iot >}}-Plattform zu überwachen.

#### Statusinformation

Der Status eines Microservice kann in der Registerkarte **Status** der entsprechenden Microservice-Anwendung überprüft werden.

<img src="/images/benutzerhandbuch/Administration/admin-microservice-status.png" alt="Microservice status" style="max-width: 100%">

Zum Anzeigen des Status benötigen Sie folgende Berechtigungen: Rolle Anwendungsverwaltung LESEN und Rolle Stammdaten LESEN.

Folgende Information werden in der Registerkarte **Status** angezeigt:

* Instanzen - Anzahl der aktiven, gestörten und erwarteten Microservice-Instanzen für den aktuellen Mandanten.
* Abonnements - Anzahl der aktiven, gestörten und erwarteten Microservice-Instanzen für alle Untermandanten, für die der Microservice abonniert ist.
* Alarme - Alarme für die aktuelle Anwendung, angezeigt in Echtzeit.
* Ereignisse - Ereignisse für die aktuelle Anwendung, angezeigt in Echtzeit.
* Smart Rules - Alarme für die aktuelle Anwendung.

Die Statusinformation ist sowohl für abonnierte als auch für eigene Anwendungen verfügbar. Die Informationen zu den abonnierten Mandanten sind jedoch nur für den Besitzer der Anwendung sichtbar.

##### Alarme und Ereignisse

Die meisten in der Registerkarte **Status** angezeigten Alarme und Ereignisse sind rein technische Beschreibungen dessen, was mit dem Microservice geschieht.

Es gibt zwei benutzerfreundliche Alarmtypen:

* `c8y_Application_Down` - kritischer Alarm, der erzeugt wird, wenn keine Microservice-Instanz verfügbar ist.
* `c8y_Application_Unhealthy` - weniger wichtiger Alarm, der erzeugt wird, wenn mindestens eine Microservice-Instanz korrekt funktioniert, aber nicht alle Instanzen vollständig in Betrieb sind.

Benutzerfreundliche Alarme werden nur für den Microservice-Eigentümer-Mandanten erzeugt. Sie werden auch automatisch gelöscht, wenn der Normalzustand wiederhergestellt ist, d. h. wenn alle Microservice-Instanzen korrekt funktionieren.

Benutzerfreundliche Alarme können zum Erstellen von Smart Rules verwendet werden. Weitere Informationen zum Erstellen verschiedener Arten von Smart Rules finden Sie unter [Smart Rules](/benutzerhandbuch/cockpit-de/#smart-rules).

Soll zum Beispiel eine E-Mail gesendet werden, wenn ein Microservice außer Betrieb ist, erstellen Sie eine Smart Rule "Bei Alarm E-Mail senden".

Verwenden Sie im Bereich **Bei Alarm vom Typ** den Alarmtyp `c8y_Application_Down`. Wählen Sie als Ziel-Asset den Microservice, den Sie überwachen möchten, z. B. "echo-agent-server".

#### Logdateien

{{< product-c8y-iot >}} ermöglicht das Anzeigen von Logdaten, die weitere Informationen zum Status von Microservices liefern.

Um Logdaten anzuzeigen, öffnen Sie die Registerkarte **Logdaten** des jeweiligen Microservice.

<img src="/images/benutzerhandbuch/Administration/admin-microservice-logs.png" alt="Microservice log" style="max-width: 100%">

Links oben auf der Seite können Sie die Microservice-Instanz auswählen, für die Sie Logdaten anzeigen möchten.

> **Info:** Falls Ihr Microservice in zwei Instanzen aufgeteilt wurde, können Sie zwar zwischen diesen wechseln, es ist jedoch nicht möglich, die Logdaten beider Instanzen gleichzeitig anzuzeigen.

Neben der Instanz-Auswahlliste können Sie das Zeitintervall wählen, in dem die Logeinträge angezeigt werden sollen, indem Sie ein Datum im Kalender auswählen und eine Uhrzeit eingeben.

> **Info:** Die hier eingegebene Uhrzeit kann sich aufgrund unterschiedlicher Zeitzonen von der Uhrzeit des Servers unterscheiden.

Rechts oben stehen weitere Funktionalitäten zur Verfügung:

* **Herunterladen** - zum Herunterladen der Logdaten für ein festgelegtes Zeitintervall.
* **Dunkles Design** - zum Ein- oder Ausschalten des dunklen Designs.
* **Auto-Refresh** - zum Aktivieren der Auto-Refresh-Funktionalität. Wenn aktiviert, werden die Logdaten alle 10 Sekunden automatisch aktualisiert.

Anfänglich werden auf der Registerkarte **Logdaten** der ausgewählten Microservice-Instanz die neuesten Logdaten angezeigt.

Rechts unten finden Sie die folgenden Navigationsschaltflächen:

* **Zum Anfang** - führt direkt zu den ältesten verfügbaren Logeinträgen für den Microservice nach dessen Neustart (maximale Logkapazität: 350 MB).
* **Zurück** - erhöht das Zeitintervall in Schritten von 10 Minuten.
* **Vor** - verringert das Zeitintervall in Schritten von 10 Minuten.
* **Zum Ende** - führt direkt zu den neuesten verfügbaren Logeinträgen.

Wenn im ausgewählten Zeitintervall keine Logdaten verfügbar sind, wird eine entsprechende Meldung angezeigt:

<img src="/images/benutzerhandbuch/Administration/admin-microservice-no-logs.png" alt="Microservice log">

> **Info:** Es gibt keine Möglichkeit, die Logdaten der zuvor ausgeführten Instanzen anzuzeigen. Allerdings wird in jeder Instanz ein Docker-Container ausgeführt, und wenn nur dieser (nicht die gesamte Instanz) neu gestartet wurde, sollten die Logdaten des aktuell aktiven sowie des kürzlich beendeten Docker-Containers angezeigt werden.

>Logdaten werden aus dem Docker-Container immer mittels der beiden Quellen `stdout` und `stderr` geladen und es gibt keine Möglichkeit, nach der Quelle zu unterscheiden bzw. zu filtern.
