---
order: 20
title: Cumulocitys Domain Model
layout: default
---

## Übersicht

***Cumulocity  erfasst alle relevanten Aspekte von Geräten und Vermögenswerten im Internet der Dinge.***

![model](/guides/concepts-guide/modelde.png)


- Die *Stammdaten* speichern alle master data in Bezug auf Geräte, ihre Konfigurierung und ihre Verbindungen. Ebenso werden alle weiteren Geräte und Werte aufgenommen (wie Fahrzeuge, Maschinen und Gebäude) und ihre Strukturierung.


* *Die Messwerte* beinhalten alle numerischen Daten, die von den Sensoren generiert werden (wie Temperaturdaten o.ä.) oder berechnete Daten basierend auf Informationen von Geräten.


* *Ereignisse* beinhalten real-time Daten aus dem Sensornetzwerk, wie bsp das Betätigen eines Türsensors. Ereignisse können auch  *Warnungen* beinhalten, bei denen eine Aktion zur Lösung vom Operator oder Administrator erwartet wird. (wie ein Stromausfall).Zusätzlich werden sicherheitsrelevante Ereignisse auch in den  *Überwachungsprotokollen* aufgelistet.


* *Der Betrieb* beinhaltet die Daten, die an Geräte gesendet werden, um etwas auszuführen oder zu verarbeiten. Beispiele hierzu wären das Umlegen eines Schalters in einem Zähler oder die Gutschrift eines Kredites in einem Verkaufsautomaten.


- Eine der großen Innovationen innerhalb von Cumulocity ist die standarisierte Abbildung von gemeinsamen Geräten und Sensoren sowie der flexiblen Erweiterung  und Modifikation der Abbildung dieser Geräte. Standardmäßig beinhaltet Cumulocity detailierte Visualiserungen von Sensoren, intellegenten Zählern, Ortungsgeräten und anderen Geräten. Es gibt viele Möglichkeiten ihre Abbildungen lokal anzupassen. 


- Als Resultat können "Internet der Dinge Anwendungen" unabhängig von verbundenen Geräten und zugrunde liegenden Sensornetzwerken geschrieben werden spezialisiert auf bestimmte Fälle in verschiedenen Web Konfiguartionen oder für verschiedene Geräte von bestimmten Herstellern.

Der folgende Abschnitt ist ein Durchlauf durch diese Konzepte und beschreibt die Hintergrundideen und wird viele Beispiele hierzu bringen. [JavaScript object notation (JSON)](http://json.org/) Das Format der Beispiele ist Cumulocity's REST APIs. Um den Gebrauch mit anderen Progarmmiersprachen nachzuvollziehen, sehen Sie bitte in den entsprechenden Abschnitten im Referenzhandbuch nach. 

## Stammdaten


**Die Stammdaten speichern Geräte und sonstige Assets, die für Ihre IoT-Lösung relevant sind. Wir verweisen auf diese Geräte und Werte als *Objekte*.**


Diese Objekte können intellegente Objekte sein, so wie intellegente Zähler, Home-Automatisierungs Gateways and GPS Geräte. Das können Geräte sein, die man beaufsichtigen möchte, wie bsp Räume mit installierten Sensoren oder Fahrzeuge mit GPS Geräten.


Der folgende JSON Code zeigt ein  kleines Beispiel eines verwalteten Objektes im Inventar, in diesem Fall ein einfacher Schalter.

<pre><code class="json">{
	"id": "47635",
	"type": "ge_45609",
	"c8y_Relay" : 
	{
		"relayState" : "OPEN"
	},
	...
}</code></pre>

Ein weiteres Beispiel für ein Gerät aus den Stammdaten könnte auch ein Raum sein mit einem installierten Schalter. (Vergleiche hierbei die "id" property des Schalters mit der verwalteten Objekt Referenz.  "managedObject" .)

<pre><code class="json">{
	"id": "47636",
	"type": "resortenergymgmt_Room",
	"name": "Sauna",
	"childAssets": {
		"references" : [
			{ "managedObject": { "id": "47635", ... },
			...
			} 
		]
	},
	"resortenergymgmt_RoomProperty": {
		"size": 56,
		...
	}
}</code></pre>

**Generell besteht jedes Objekt aus**


- einer eindeutigen Kennung, die auf das gewünschte Objekt verweist.
* eine Typenzeichenfolge, die den Objekttyp definiert.
* ein Zeitstempel mit den Daten des letzten Updates.
* zusätzliche *Fragmente*.

### Fragmente

Zum Beispiel möchten Sie elektrische Zähler von verschiedenen Anbietern beschreiben. Je nach Ausstattung des Messgerätes kann ein Relais vorgesehen sein und man kann eine einzelne Phase oder drei Phasen messen. Diese Merkmale werden durch das Speichern von Fragmenten für jeden von ihnen identifiziert:

<pre><code class="json">{
	"id": "47635",
	"type": "elstermetering_AS220",
	"lastUpdated": "2010-11-13T18:28:36.000Z",
	"c8y_Position": {
		"alt": 67,
		"lng": 6.15173,
		"lat": 51.211977
	},
	"c8y_ThreePhaseElectricitySensor": {},
	"c8y_Relay": {
		"state": "CLOSED"
	}
}</code></pre>

In diesem Beispiel beschreibt ein Fragment "c8y\_ThreePhaseElectricitySensor" einen dreiphasigen Zähler. Zusätzlich beinhaltet das Gerät ein Relais,  welches das Gerät ein- und ausschalten kann.


Mit diesem Ansatz können Geräte einen Unterschied machen zwischen der Modellierung von elementaren Sensoren und Steuerungen als Fragmente und der Modellierung der gesamten Vorrichtung als eine Kombination von Sensoren, Steuerungen und möglicherweise patentrechtlichen Aspekten der Vorrichtung.

Dieser Ansatz ermöglicht auch die Entwicklung von generischen Anwendungskomponenten. Zum Beispiel kann ein Objekt ein Positionsfragment ("c8y\_Position") haben, und auf einer Karte plaziert werden. Sobald es ein Relais hat, kann es mit dem jeweiligen Gerätesteuerungsbefehl wie unten beschrieben ein- und ausgeschaltet werden.

### Namenskonventionen bei Fragmenten
**Fragmente benutzen eine Namenskonvention um Konflikte zwischen verschiedenen Informationsquellen von Frgament Information zu vermeiden. Ähnliches verwendet auch Java, oder andere Programmiersprachen.** 

Im obenstehenden Beispiel, "c8y_Position"ist eine Kombination von "c8y" (Kürzel für "Cumulocity"), einem Unterstrich und "Position". Zusammen gestalten sie ein Standard Fragement Set. Fragment Definitionen finden Sie auch hier [Sensor Bibliothek](/guides/reference/sensor-library) und hier [Device Management Bibliothek](/guides/reference/device-management).


Cumulocity folgt einem dokumentorientierten Ansatz zur Speicherung von Daten. Alle Eigenschaften eines Objektes können von den Objektdaten selbst abgeleitet werden. Es gibt kein bestimmtes Metadaten Modell, welchem man folgen muss oder welches konfiguriert werden muss. Programme können aber zusätzlich noch Metadaten im Inventar speichern. Eine Verkaufsprogramm kann Metadaten über  slot Konfigurationen von verschiedenen Verkaufsautomaten speichern.

### Objekt Identifizierung

***Jedes Objekt hat einen eigene "globale" Kennung (ID) im Inventar, welche automatisch generiert wird von Cumulocity in dem Moment, wenn das Objekt erstellt wird.***

Diese ID wird immer bei dem Objekt bleiben, egal ob Netzwerke restrukturiert werden oder ob das Objekt neue Hardware Komponenten erhält.

![Identity service](/guides/concepts-guide/identificationde.png)

### Identitätsdienst
***Um Anwendungen vor Massen von Identifikatoren zu schützen, gibt es innerhalb von Cumulocity einen Identitätsdienst, der alle Identifikatoren für ein Asset registriert, die ausserhalb von Cumulocity benutzt werden and diese einem einzigen globalen Identitätsdienst zuordnet, der von den Anwendungen benutzt wird.***

Dieser Dienst wird von Agenten benutzt  (um externe Identifikatoren zu registrieren) und er wird von Prozessen verwendet, die Reorganisierung und den Wechsel von Geräten überwachen.  (um die Kartierung der externen Identifikatoren auf den globalen Identifikatoren zu verändern).

Als Beispiel sei angenommen, dass ein intelligenter Zähler fehlerhaft wäre und ein neuer Zähler mit einer anderen Zählernummer und einem Asset-Tag in einem Haushalt installiert werden muss. Der routinemäßige Geschäftsprozess zum Ersetzen fehlerhafter Hardware kann nun nur die Asset-ID und die Zähler-ID aktualisieren, die einem Kunden im Identitätsdienst zugeordnet ist. Danach werden sowohl vorher gesammelte als auch neue Zählerstände auf den richtigen Kunden bezogen.

Weitere Informationen hierzu sind in der Referenz abgelegt. [Identität](/guides/reference/identity).

## Objekt Hierarchien
***Das Stammdaten Model unterstützt zwei Standardhierarchien von Objekten: Eine Kommunikationshierarchie ("Kindgerät") und eine Assethierarchie ("Kindasset").***


Die Kommunikationshierarchie zeigt, wie Geräte mit der M2M-Plattform kommunikativ verbunden sind. 
Eine typische Kommunikationshierarchie ist in der folgenden Abbildung dargestellt:  Agenten verbinden ein Sensornetzwerk mit Cumulocity. Sie kommunizieren mit dem Sensornetzwerk durch Modems oder Gateway-Geräte. Umgekehrt verbinden sich Gateway-Geräte mit Geräten im Sensornetzwerk.

![Example communication hierarchy](/guides/concepts-guide/commshierarchyde.png)

Die Asset Hierarchie strukturiert die Assets, die ferngesteuert überwacht werden durch M2M Geräte. 

Eine Beispiel Asset Hierarchie für Gebäudemanagement wäre ein Standardkomplex mit verschiedenen Gebäuden und Räumen. Gebäude würden mit Gateways assoziiert , die diese mit Cumulocity verbinden, während die Räume mit zugeordneten Sensoren und Steuerungen assoziiert werden.  Dieses Beispiel zeigt das untenstehende Schema:

![Example asset hierarchy](/guides/concepts-guide/assethierarchyde.png)

### "Kindobjekte" in Hierarchien 
Diese Beispielhierarchien werden unterstützt durch die Stammdaten Benutzeroberfläche [Stammdaten Benutzeroberfläche](/guides/reference/inventory) und durch die Bibliothek, die beispielhafte Methoden untergeordnete Objekte zu definieren beinhaltet. Die Hierarchien selber werden mit Anwendungen konstruiert. Die Kommunikationshierarchie wird von Agenten konstruiert, die Asset Hierarchie wird von Anwendungen hinzugefügt.

Die Objekthierarchien müssen nicht notwendigerweise eine Baumstruktur besitzen. Ein Asset kann ein Kindbjekt verschiedener übergeordneter Objekte sein. Damit können Anwendungen verschiedene Nutzergruppen von Objekten (virtuelle Netzwerke) erstellen.  Anwendungen können zusätzlich Fragmente zur Schaffung von alternativen Hierarchien benutzen.

## Objekt Lebenszyklus

Die zuvor beschriebenen Identifikations- und Hierarchiemechanismen bilden einen sehr flexiblen Lebenszyklus-Ansatz, der an die meisten Geschäftsprozesse angepasst werden kann. Wenn ein Gerät zum ersten Mal eingeschaltet wird, ist es weder mit dem System verbunden noch mit einem Asset verknüpft. Das Verknüpfen eines Geräts mit einem Agenten in der Kommunikationshierarchie (gegebenfalls indirekt über ein Gateway) signalisiert, dass das Gerät verbunden ist. Nur verbundene Geräte können ferngesteuert werden.Das Verknüpfen eines Geräts mit einem Asset mithilfe der Asset-Hierarchie zeigt, dass das Gerät physisch installiert wurde. 

Das Trennen und Deinstallieren eines Geräts bedeutet nicht unbedingt, dass das Gerätentfernt oder deaktiviert wurde und aus dem System gelöscht werden sollte. Es kann stattdessen bedeuten, dass das Gerät in das Lager zurückgebracht wurde und an anderer Stelle später installiert wird. Es hängt vom jeweiligen Geschäftsprozess ab, ob Daten für das Gerät behalten werden sollen oder nicht. Das physikalische Löschen eines Gerätes aus dem Inventar bedeutet, dass alle Daten, die für dieses Gerät gesammelt wurden, auch gelöscht werden - dies ist wahrscheinlich nur dann erwünscht, wenn alte Daten bereinigt werden sollen. Um Daten für ein Gerät zu speichern, das verworfen wurde, können Identifikationszuordnungen aus dem Identitätsdienst entfernt werden. Wenn ein neues Gerät an der gleichen Stelle wie das alte Gerät installiert wird, wird ein neuer "globaler" Identifikator erzeugt.

Der Lebenszyklus von Geräten muss richtig behandelt werden, wenn man Agenten gestaltet. Ein Agent, der eine Verbindung zu Geräten herstellt, sollte nicht automatisch davon ausgehen, dass Geräte aus dem Inventar gelöscht werden können, wenn sie nicht verbunden werden können. In gleicher Weise sollte ein Agent, der ein CRM-System anbindet, nicht davon ausgehen, dass ein Gerät gelöscht werden kann, wenn es aus dem CRM-System entfernt wurde.

### Arbeiten mit Stammdaten

Weitere Beispiele zum Arbeiten mit Stammdaten befinden sich hier:  [Stammdaten Referenz](/guides/reference/inventory).

## Ereignisse

***Ereignisse werden benutzt um Echtzeit Information durch Cumulocity zu übermitteln.*** 

Es gibt drei verschiedene Arten von Ereignissen:

-  Ein Basisereignis signalisiert, wenn etwas passiert. Ein Ereignis wird dann ausgelöst, wenn ein Schalter ein- oder ausgeschaltet wird.

-   Ein Alarm signalisiert ein Ereignis, das eine manuelle Aktion erfordert, beispielsweise wenn ein Messgerät manipuliert wurde oder die Temperatur eines Kühlschranks über einen bestimmten Schwellenwert ansteigt.

-   Ein Audit-Protokoll speichert Ereignisse, die sicherheitsrelevant sind und für die Überwachung gespeichert werden sollten. Beispielsweise sollte ein Überwachungsprotokoll generiert werden, wenn sich ein Benutzer bei einem Gateway anmeldet.

Ein Ereignis hat einen bestimmten Typ (wie in seiner Namenskonvention angegeben), eine Zeit, in der das Ereignis aufgetreten ist, und ein Text, um das Ereignis zu beschreiben. Ein Ereignis bezieht sich auf ein verwaltetes Objekt im Inventar. Dies ist ein Beispiel für ein Ereignis:

<pre><code class="json">{
	"type": "c8y_LocationUpdate",
	"time": "2010-11-13T18:28:36.000Z",
	"text": "Location updated",
	"source": { "id": "47634", ... },
	"c8y_Position": {
		"alt": 67,
		"lng": 6.15173,
		"lat": 51.211977
	}
}</code></pre>

Jedes Ereignis kann in der gleichen Weise erweitert werden, wie für verwaltete Objekte oben beschrieben. In diesem Beispiel haben wir nicht nur signalisiert, dass ein Objekt bewegt wurde, sondern auch die neue Position des Objekts in Form eines Fragments "c8y_Position".

Ein Audit-Protokoll erweitert ein Ereignis um

-  Ein Benutzername des Benutzers, der die Aktivität ausgeführt hat.
-   Eine Anwendung, die zur Durchführung der Aktivität verwendet wurde.
-   Die eigentliche Aktivität.
-   Der Schweregrad.

Dies ist ein Beispiel für eine Audit-Datensatzstruktur:

<pre><code class="json">{
	"type": "c8y_SecurityEvent",
	"time": "2010-11-13T18:28:36.000Z",
	"text": "Gateway login failed",
	"user": "vvirtanen",
	"application": "Resort energy management",
	"activity": "login",
	"severity": "MINOR",
	"source": { "id": "47633", ... },
	...
}</code></pre>

Ein Alarm erweitert Ereignisse um:

-   Einen Status der zeigt, ob der Alarm aktiv ist oder aufgehoben.
-  Ein Zeitstempel wann die letzte Aktivität hierzu verzeichnet wurde.
-   Er kann Klassifikationen wie kritisch, groß, klein und kann eine Warnung enthalten.
-   Ein Verlauf der Änderungen des Ereignisses in Form von Überwachungsprotokollen.

Dies ist ein Beispiel für einen Alarm, der geklärt wurde:

<pre><code class="json">{
	"type": "c8y_UnavailabilityAlarm",
	"time": "2010-11-13T19:28:36.000Z",
	"text": "No communication with device since 2013-11-05T15:23:55.284+01:00",
	"status": "CLEARED",
	"severity": "MINOR",
	"source": { "id": "47633", ... },
	"history": {
		"auditRecords": [ {
			"activity": "Alarm updated",
			"application": "devicemanagement",
			"user": "vvirtanen",
			"time": "2013-11-05T16:37:48.494+01:00",
			"changes": [ {
				"attribute": "status",
				"newValue": "CLEARED",
				"previousValue": "ACTIVE",
				"type": "com.cumulocity.model.event.CumulocityAlarmStatuses"
			} ],
			...
		} ]
		...
	} 
	...
}</code></pre>

Mehr Beispiele hier:  [Ereignisse](/guides/reference/events), [Alarme](/guides/reference/alarms) and [Auditing](/guides/reference/auditing).

## Messungen

*Messungen repräsentieren regelmäßig erfasste Messwerte und Statistiken von Sensoren.*

Die Messungen bestehen aus einer Zeitmessung, den eindeutigen Kennungen der Messquelle und einer Fragmentliste. Hier ein Beispiel für eine Messung:

<pre><code class="json">{
	"time": "2011-01-02T03:04:00.000Z",
	"source": { "id": "1235", ... },
	"c8y_ThreePhaseElectricityMeasurement": {
		"A+": { "value": 435, "unit": "kWh" },
		"A-": { "value": 23, "unit": "kWh" },
		"P+": { "value": 657, "unit": "W" },
		"P-": { "value": 0, "unit": "W" },
		"A+:1": { "value": 123, "unit": "kWh" },
		"A-:1": { "value": 2, "unit": "kWh" },
		"P+:1": { "value": 56, "unit": "W" },
		"P-:1": { "value": 0, "unit": "W" },
		"A+:2": { "value": 231, "unit": "kWh" },
		"A-:2": { "value": 23, "unit": "kWh" },
		"P+:2": { "value": 516, "unit": "W" },
		"P-:2": { "value": 2, "unit": "W" },  
		...
	},
	...
}</code></pre>

Ähnlich dem Inventarmodell werden Fragmente verwendet, um die Eigenschaften bestimmter Vorrichtungen zu identifizieren. Im obigen Beispiel sendet ein Dreiphasen-Stromzähler Messwerte für die verschiedenen elektrischen Phasen. Jedes solches Fragment bildet die Namen der einzelnen Messwerte ( "A +", "A-", ... in diesem Beispiel) auf den aktuellen numerischen Wert und die Maßeinheit ab.


Messwerte können verschiedene zusätzliche Informationen enthalten, die Anwendungen erfordern können. Nähere Informationen dazu finden Sie im Referenzhandbuch [Messungen](/guides/reference/measurements).

## Fernsteuerung von Geräten

### Betrieb

**Geräte können ferngesteuert agieren und verwaltet werden.** 

Beispiele:

-   Gerätesteuerung: Einstellung eines Temperaturreglers
-   Gerätekonfiguration: eine Kostentabelle in einem Smart-Meter einrichten.
-   Gerätewartung: Anfordern eines Gateways zum Herunterladen und Installieren einer neuen Firmware.

In Cumulocity werden diese Anwendungsfälle implementiert, indem * Operationen * an ein Gerät gesendet werden. Das folgende Snippet zeigt eine Operation zur Einstellung des Zustands des Relais mit der ID "42" auf "OPEN":

<pre><code class="json">{
	"deviceId": "42",
	"c8y_Relay": {
		"relayState": "OPEN"
	}
}</code></pre>

Genau wie andere Datentypen werden auch Operationen durch die Sensorbibliothek standardisiert, um die Anwendungsentwicklung zu vereinfachen (siehe unten). Beispielsweise sollte die Einstellung eines Schalters für alle Schalter gleich sein, unabhängig von ihrer Herstellung.

Operationen werden ebenso wie Fragmente im Inventarmodell geformt (siehe oben). Es gilt dasselbe Konzept der Erweiterung. Zufällige hersteller-proprietäre Erweiterungen der Standardoperationen sind möglich. Diese werden von Cumulocity weder verweigert noch modifiziert.

### Versenden von Vorgängen an Geräte

**Cumulocity liefert Operationen an Geräte über ein beliebiges Netzwerk mit einer zuverlässigen Warteschlangenroutine. Diese Warteschlangenroutine berücksichtigt die Beschränkungen und Sicherheitsanforderungen von IoT-Netzwerken:**

-   Geräte werden häufig über unzuverlässige Verbindungen mit niedriger Bandbreite verbunden, die nur gelegentlich verfügbar sein können. Geräte können z. B. nur einmal am Tag in das Netzwerk einwählen, um Befehle zur Ausführung abzurufen. Daher kommuniziert Cumulocity asynchron mit Geräten.

-   Geräteprotokolle sind oft nicht ausgelegt für eine sichere Online-Kommunikation. Sie dürfen nicht durch NAT-Netzwerke, Firewalls und Web-Proxies. Sie sind nicht sicher genug für das öffentliche Internet. Cumulocity bietet die Möglichkeit, diese Geräte als HTTPS-Clients zu verbinden.

-  Manchmal ist es nichteinmal möglich ein Mobilgerät über das Internet zu erreichen. Cumulocity nutzt Push-Technologie, um Operationen an Geräte zu senden.

Um einen Vorgang von einer Anwendung an ein Gerät zu übergeben, ist ein Prozess mehrerer Schritte erforderlich, wie in der folgenden Abbildung dargestellt. Angenommen, der Benutzer gibt eine Fernsteuerungsoperation für ein Gerät (wie beispielsweise einen Neustart eines Geräts) von einer Anwendung aus. Die Anwendung erstellt die Operation in Cumulocity (Schritt "1"). Cumulocity wird den Vorgang für die Ausführung und die Rückführungssteuerung sofort in die Warteschlange stellen. 

Zu einem bestimmten Zeitpunkt fordert der für das Gerät zuständige Mitarbeiter Operationen auf, die für die von ihm verwalteten Geräte in die Warteschlange gestellt werden ( "Schritt 2"). Dies geschieht sofort über den Push-Mechanismus von Cumulocity oder in einem regelmäßigen oder geplanten Intervall. 

Der Agent führt die Operationen auf den von ihm verwalteten Geräten aus (Schritt 3) und aktualisiert Cumulocity mit den Ergebnissen der Ausführung (Schritt 4). Die von dem Agenten verwalteten Geräte sind direkte oder untergeordnete Geräte( "Kindgerätes") des Agenten.

Schließlich kann die Anwendung die Ergebnisse der Operation abfragen (Schritt 5). Überwachungsprotokolle werden sowohl für die ursprüngliche Anforderung zum Ausführen des Vorrichtungssteuerungsvorgangs als auch für die Bestätigung, dass der Vorgang tatsächlich ausgeführt wurde, erzeugt.

![Device control architecture](/guides/concepts-guide/controlde.png)

Wenn während der Bereitstellung einer Operation an einem Gerät Kommunikationsprobleme auftreten, sollte ein Alarm vom Agenten ausgelöst werden.

Manchmal gibt es Verzögerungen zwischen dem Senden einer Operation an ein Gerät und dem Abrufen einer Antwort. Das System nimmt einen korrekten Verlauf an, solange kein Fehler gemeldet wird, um die Funktionalität zu erhalten.

### Zuverlässige Ausführung

***Operationen sollten immer idempotent sein. Idempotent bedeutet, dass, egal wie oft Sie die Operation ausführen, das Ergebnis immer das gleiche ist.*** 

Zum Beispiel ist eine Operation zum Setzen eines Schalters auf einen bestimmten Zustand idempotent. Egal wie oft der Schalter auf "an" gestellt ist, danach wird er "an" sein. Eine Operation zum Umschalten eines Schalters ist nicht idempotent - das Ergebnis hängt davon ab, ob der Vorgang eine ungerade oder eine gerade Zahl ausgeführt wurde.

Mehr Information hierzu im Referenzhandbuch.  [Gerätesteuerung](/guides/reference/device-control).

## Die Sensorbibliothek

Cumulocity beinhaltet eine [Sensoren Bibliothek](/guides/reference/sensor-library "Sensor library") um spezifische Sensor- und Steuerungs-Fähigkeiten von Geräten und Produkten zu formen. Ein einziges Gerät kann viele Sensor- und Steuereigenschaften aufweisen. Die Sensorbibliothek ermöglicht Anwendungen die Beantwortung von Fragen wie:

-   Welche Geräte sind installiert, die den Energiedurchfluss messen??
-   Wie sind die Messwerte?
-   Hat der Zähler auch einen Schalter zum Ein- und Ausschalten?

Es umfasst grundlegende Sensoren und Steuerelemente und wird von den Cumulocity-Clientbibliotheken unterstützt. Es ermöglicht auch das Schreiben von leistungsfähigen generischen IoT-Software-Plugins. 


Technisch definiert die Sensorbibliothek nach der Namenskonvention (wie bereits erwähnt) Standardfragmente für Inventar, Messungen, Ereignisse und Gerätekontrolle. Das folgende Beispiel zeigt zwei Fragmente eines Stromzählers:
Eu
<pre><code class="json">{
	"id" : "1",
	"type" : "com_kamstrup_382",
	"c8y_SinglePhaseElectricityMeasurement": {},
	"c8y_Relay" : { "state": "OPEN" }
}</code></pre>

Für einen Java-Entwickler sieht die Überprüfung des Zustands eines Schalters in einem Gerät "mo" wie folgt aus:

<pre><code class="java">ManagedObject mo = ...;
Relay relay = mo.get(Relay.class);
RelayState state = relay.getRelayState();</code></pre>

Um einen JavaScript-Entwickler, würde die gleiche Prüfung wie folgt aussehen:

<pre><code class="js">var state = mo.c8y_Relay.relayState</code></pre>

Mehr Information hierzu im Referenzhandbuch. "[Sensoren Bibliothek](/guides/reference/sensor-library "Sensor library")".


Das Cumulocity-Team begrüßt Beiträge zur Sensorbibliothek. Wenn Sie Geräte, Steuerelemente, Sensoren oder andere Objekte integrieren und feststellen, dass Ihre Modellfragmente über Ihren eigenen Fall oder Ihr Gerät hinaus eine allgemeinere Benutzerfreundlichkeit haben, empfehlen wir Ihnen, diese in Cum
Zentrale Darstellung von IoT-Geräten, Netzwerken und Assets im Inventar,ulocity aufzunehmen, indem Sie unseren Support kontaktieren.

## Zusammenfassung

**Cumulocity stellt ein Referenzmodell für die Verwaltung und Steuerung von IoT-Systemen zur Verfügung**

-   Zentrale Darstellung von IoT-Geräten, Netzwerken und Assets im Inventar,
-   Konfiguration von Geräten,
-   Ablesen von Sensoren,
-   Manipulation von Seinerteuerungen und
-   Handling von Echtzeit Ereignissen.

Dieses Modell soll sich horizontal über Gerätemodelle legen. Darüber hinaus ist es auch erweiterbar auf alle Bedürfnisse und Eigenschaften der verschiedenen Geräte und Anwendungen.
