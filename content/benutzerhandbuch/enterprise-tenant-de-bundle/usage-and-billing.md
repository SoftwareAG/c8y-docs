---
aliases:
- /benutzerhandbuch/enterprise-edition-de/#usage-and-billing
layout: redirect
title: Nutzungsstatistiken und Abrechnung
weight: 70
---

<a name="usage-stats"></a>
### Anzeigen von Nutzungsstatistiken

Die Seite **Nutzungsstatistiken** zeigt statistische Informationen für jeden Untermandanten an.

![Subtenant statistics](/images/benutzerhandbuch/enterprise-tenant/et-subtenants-usage-statistics.png)

Die folgenden Informationen werden für jeden Untermandanten bereitgestellt (im Screenshot oben aus Platzgründen nicht vollständig zu sehen):

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup>
<tr>
<th align="left">Feld</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">ID</td>
<td align="left">ID des Untermandanten</td>
</tr>
<tr>
<td align="left">Name</td>
<td align="left">Name des Untermandanten</td>
</tr>
<tr>
<td align="left">API-Anfragen</td>
<td align="left">Gesamtanzahl der API-Anfragen, einschließlich Anfragen von Geräten und Anwendungen</td>
</tr>
<tr>
<td align="left">API-Anfrage von Geräten</td>
<td align="left">Anzahl der API-Anfragen von Geräten</td>
</tr>
<tr>
<td align="left">Speicherplatz (MB)</td>
<td align="left">Gespeicherte Daten in Ihrem Konto</td>
</tr>
<tr>
<td align="left">Höchstwert Speicher (MB)</td>
<td align="left">Höchstwert der Speicherung</td>
</tr>
<tr>
<td align="left">Hauptgeräte</td>
<td align="left">Anzahl der Geräte ohne Kindgeräte</td>
</tr>
<tr>
<td align="left">Höchstwert Hauptgeräte</td>
<td align="left">Höchstanzahl Hauptgeräte, ohne Kindgeräte</td>
</tr>
<tr>
<td align="left">Geräte</td>
<td align="left">Die Gesamtanzahl der mit dem Untermandanten verbundenen Geräte</td>
</tr>
<tr>
<td align="left">Höchstwert Geräte</td>
<td align="left">Höchstanzahl Geräte, einschließlich Kindgeräte</td>
</tr>
<tr>
<td align="left">Endpunktgeräte</td>
<td align="left">Blattgeräte (ohne Gateways und Kinder)</td>
</tr>
<tr>
<td align="left">Abonnierte Anwendungen</td>
<td align="left">Anzahl der vom Untermandanten abonnierten Anwendungen</td>
</tr>
<tr>
<td align="left">Erstellungszeitpunkt</td>
<td align="left">Datum und Zeit der Erstellung des Untermandanten</td>
</tr>
<tr>
<td align="left">Erzeugte Alarme</td>
<td align="left">Anzahl der erzeugten Alarme</td>
</tr>
<tr>
<td align="left">Aktualisierte Alarme</td>
<td align="left">Anzahl der aktualisierten Alarme</td>
</tr>
<tr>
<td align="left">Erstellte Stammdaten</td>
<td align="left">Anzahl der erstellten Managed Objects</td>
</tr>
<tr>
<td align="left">Aktualisierte Stammdaten</td>
<td align="left">Anzahl der aktualisierten Managed Objects</td>
</tr>
<tr>
<td align="left">Erstellte Ereignisse</td>
<td align="left">Anzahl der erstellten Ereignisse</td>
</tr>
<tr>
<td align="left">Aktualisierte Ereignisse</td>
<td align="left">Anzahl der aktualisierten Ereignisse</td>
</tr>
<tr>
<td align="left">Erstellte Messwerte</td>
<td align="left">Anzahl der erstellten Messwerte</td>
</tr>
<tr>
<td align="left">Gesamt Inbound-Transfer</td>
<td align="left">Summe aller Inbound-Transfers (erzeugte Alarme, aktualisierte Alarme, erstellte Ereignisse, aktualisierte Ereignisse, erstellte Stammdaten, aktualisierte Stammdaten, erstellte Messwerte).</td>
</tr>
<tr>
<td align="left">CPU (m)</td>
<td align="left">Microservice-CPU-Nutzung, angegeben in CPU-Millisekunden, weitere Informationen siehe <a href="#microservice-usage">Microservice-Nutzung</a></td>
</tr>
<tr>
<td align="left">Speicher (MB)</td>
<td align="left">Microservice-Speichernutzung, weitere Informationen siehe <a href="#microservice-usage">Microservice-Nutzung</a></td>
</tr>
<tr>
<td align="left">Übergeordneter Mandant</td>
<td align="left">Name des übergeordneten Mandanten (nur verfügbar für den {{< management-tenant-de >}})</td>
</tr>
<tr>
<td align="left">Externe Referenz</td>
<td align="left">Dieses Feld ist für den individuellen Gebrauch. Sie können hier beispielsweise einen Link zum CRM-System oder eine interne Kundennummer einfügen.</td>
</tr>
</tbody>
</table>

Außerdem werden benutzerdefinierte Attribute angezeigt, falls vorhanden.

Benutzerdefinierte Attribute können in der [Attributsbibliothek](/benutzerhandbuch/administration-de#properties) definiert werden. Anschließend können entsprechende Werte in der Registerkarte [Benutzerdefinierte Attribute](#tenants-custom-properties) des Mandanten eingestellt werden.

Sie können die Liste der Nutzungsstatistiken nach einem bestimmten Zeitraum filtern, indem Sie einen Start- und einen Endzeitpunkt in der oberen Menüleiste eingeben und **Filter** klicken. Die Seite **Nutzungsstatistiken** zeigt die Zahlen für alle Untermandanten in diesem Zeitraum an.

>**Info:** Wenn ein Mandant nach dem gewählten Zeitraum erstellt wurde, wird er angezeigt, aber die Zahlen stehen auf "0".

Sie können außerdem die Liste nach jeder Spalte filtern und sortieren, indem Sie auf das Filtersymbol neben dem Namen der entsprechenden Spalte klicken und die Filterkriterien eingeben. Siehe auch [Erste Schritte > Eigenschaften und Funktionen der Benutzeroberfläche > Filtern](/benutzerhandbuch/getting-started-de/#filtering).

> **Wichtig:** Der hier verwendete Datums-/Uhrzeitbereich kann sich aufgrund unterschiedlicher Zeitzonen von der Uhrzeit Ihres Servers unterscheiden.

#### So exportieren Sie die Nutzungsstatistik-Tabelle

1. Klicken Sie auf CSV-Export rechts oben in der Menüleiste, um die aktuelle Ansicht der Statistikentabelle als CSV-Datei zu exportieren.
2. Im darauf folgenden Dialog können Sie die CSV-Ausgabe individuell anpassen, indem Sie ein Feldtrennzeichen, ein Dezimaltrennzeichen und einen Zeichensatz festlegen.
<br> <img src="/images/benutzerhandbuch/enterprise-tenant/et-subtenant-statistics-export.png"></img> <br>
3. Klicken Sie auf **Herunterladen**, um den Export zu starten.

Die CSV-Datei wird in Ihr Dateisystem heruntergeladen.


<a name="microservice-usage"></a>
### Microservice-Nutzung

Die Funktion Microservice-Nutzung sammelt Informationen über die Ressourcennutzung je Untermandant für jeden Microservice. So können {{< enterprise-tenant-de >}}s und Service Provider die Gebühren für Mandanten nicht nur auf Basis von Abonnements, sondern auch auf Basis der Ressourcennutzung berechnen.


#### Abrechnungsmodi

{{< product-c8y-iot >}} bietet zwei Abrechnungsmodi:

* **Abonnementbasierte Abrechnung**: Berechnet einen Festpreis, wenn ein Mandant einen Microservice abonniert hat, während die Ressourcennutzung dem Eigentümer zugewiesen wird.

* **Ressourcenbasierte Abrechnung**: Legt die Menge der von einem Microservice genutzten Ressourcen offen, um die Gebühr zu berechnen.

Die Abrechnungsmodi werden pro Microservice im [Microservice-Manifest](/microservice-sdk/concept/#manifest) angegeben und im Feld "billingMode" festgelegt.

RESOURCES: Legt den ressourcenbasierten Abrechnungsmodus fest. Dies ist der Standardmodus. Er wird auf alle Microservices angewendet, für die nicht explizit der abonnementbasierte Abrechnungsmodus festgelegt wurde.

SUBSCRIPTION: Legt den abonnementbasierten Abrechnungsmodus fest.

#### Isolationsstufe

Bei Microservices wird zwischen zwei Isolationsstufen unterschieden: Isolation nach Mandant und Isolation mehrerer Mandanten.

Bei abonnementbasierter Abrechnung wird die gesamte Ressourcennutzung unabhängig von der Isolationsstufe stets dem Microservice-Eigentümer zugewiesen, während dem abonnierenden Mandanten das Abonnement in Rechnung gestellt wird.

Bei ressourcenbasierter Abrechnung hängt die Berechnung von der Isolationsstufe ab:

* Per-tenant (Pro Mandant) - Dem abonnierenden Mandanten werden die genutzten Ressourcen in Rechnung gestellt.
* Multi-tenant (Mehrere Mandanten) - Dem Eigentümer des Microservice werden die genutzten Ressourcen in Rechnung gestellt.

Im Falle der Mehrmandanten-Isolationsstufe werden dem Eigentümer eines Microservice (z. B. der {{< management-tenant-de >}} eines {{< management-tenant-de >}} oder Service Providers) die genutzten Ressourcen der Untermandanten in Rechnung gestellt. Die Gebühren der Untermandanten sollten auf Basis des Abonnements gemäß der Vereinbarung zwischen dem Microservice-Eigentümer und dem abonnierten Mandanten berechnet werden. Die Liste der abonnierten Anwendungen ist als Teil der [Mandantenanwendungen](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Tenant-applications) als `subscribedApplications` verfügbar.

#### Ressourcennutzungszuweisung für Abrechnungsmodus und Isolationsstufe

|Abrechnungsmodus|Microservice-Isolation|Ressourcennutzung zugewiesen zu
|:--------|:-----|:-----
|Abonnementbasiert|Per-tenant|Eigentümer
|Abonnementbasiert|Multi-tenant|Eigentümer
|Ressourcenbasiert|Per-tenant|Abonnent
|Ressourcenbasiert|Multi-tenant|Eigentümer

#### Erfasste Werte

Die folgenden Werte werden täglich bei jedem Mandanten erfasst:

* CPU-Nutzung, angegeben in CPU-Millisekunden (1000m = 1 CPU)
* Speichernutzung, angegeben in MB

Microservice-Ressourcen werden täglich anhand von Grenzwerten erfasst, die im Microservice-Manifest definiert sind. Am Ende jedes Tages werden die Informationen zur Ressourcennutzung in den Mandantenstatistiken erfasst. Es wird auch berücksichtigt, dass ein Microservice eventuell nicht für einen ganzen Tag abonniert wird.

**Beispiel**: Wenn ein Mandant einen Microservice 12 Stunden lang abonniert hat und der Microservice 4 CPUs und 4 GB Speicher aufweist, ist dies als 2000 CPU-Millisekunden und 2048 MB Speicher zu zählen.

Für Abrechnungszwecke wird zusätzlich zur CPU- und Speichernutzung die Ursache der Abrechnung erfasst (z. B. Eigentümer, Abonnement für Mandanten):

```json
{
  "name": "cep",
	"cpu": 6000,
	"memory": "20000",
	"cause": "Owner"
},
{
  "name": "cep-small",
  "cpu": 1000,
  "memory": "2000",
  "cause": "Subscription for tenant"
}
```

Die Informationen über die Microservice-Nutzung werden auf der Seite **Nutzungsstatistiken** aufgeführt.

![Tenant statistics](/images/benutzerhandbuch/enterprise-tenant/et-subtenants-usage-statistics-microservice.png)

Näheres hierzu finden Sie unter [Tenants](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Tenants) in der {{< openapi >}}. Beachten Sie, dass Detailinformationen nur bezüglich der täglichen Nutzung verfügbar sind. Bei einer zusammenfassenden Anfrage wird nur die Summe aller ausgegebenen Anfragen zurückgegeben.

#### Skalierung

Die automatische Skalierung überwacht Ihre Microservices und passt automatisch die Kapazität an, um eine stetige, prognostizierbare Leistung zu geringstmöglichen Kosten aufrechtzuerhalten. Die Microservice-Skalierung lässt sich durch Festlegen des Attributs `scale` im [Microservice-Manifest](/microservice-sdk/concept/#manifest) leicht konfigurieren.

Wenn Sie beispielsweise einen Microservice haben, dessen Skalierungsregel auf AUTO gesetzt ist und der über die notwendigen CPU-Nutzungspunkte zum Starten einer neuen Microservice-Instanz für drei Stunden verfügt, wird Folgendes abgerechnet: (24/24 + 3/24) * verbrauchte Ressourcen.

24/24 - eine Instanz den ganzen Tag aktiv<br>
 3/24 - zweite Instanz nur drei Stunden aktiv

Beachten Sie, dass für jede Änderung der Anzahl der Instanzen ein Auditeintrag vorgenommen wird.

![Audit logs](/images/benutzerhandbuch/enterprise-tenant/et-audit-logs-microscaling.png)

Näheres hierzu finden Sie unter [Audits](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Audits) in der {{< openapi >}}.


### Handhabung von Zeitzonen

>**Wichtig:** Die Server der {{< product-c8y-iot >}}-Plattform laufen standardmäßig in der UTC-Zeitzone. Andere Zeitzonen werden von der Plattform ebenfalls unterstützt und können vom Service Provider zum Zeitpunkt der Installation ausgewählt werden. Die allgemeine Messfunktion wird daher auch für Nicht-UTC-Zeitzonen der Server angeboten.

Die Mandanten-Nutzungsstatistiken werden täglich entsprechend dem durch die Zeitzone des Servers bestimmten Beginn des Tages (`BOD`) und Ende des Tages (`EOD`) erfasst. Wenn die lokale Zeitzone eines Benutzers nicht mit der Zeitzone des Servers übereinstimmt, kann folglich eine vom Benutzer gestartete Operation je nach Serverzeit einem anderen Tag zugewiesen werden.

#### Beispiele

##### Berechnung von Anfragen - Beispiel 1

||Gerät| Server|
|:---|:----|:-----|
|Zeitzone| CEST +2h |UTC|
|Zeitpunkt Messwerterzeugung | 26.08.2020T01:30:00+02:00| 25.08.2020T23:30:00Z|

**Ergebnis:**

Die Anfrage wird für den 25.08.2020 in Rechnung gestellt, da sie laut Serverzeit dann eingereicht wurde.
<br><br>

##### Berechnung von Anfragen - Beispiel 2

||Gerät| Server|
|:---|:----|:-----|
|Zeitzone| UTC |UTC|
|Zeitpunkt Messwerterzeugung | 26.08.2020T01:30:00Z| 26.08.2020T01:30:00Z|

**Ergebnis:**

Die Anfrage wird für den 26.08.2020 in Rechnung gestellt, da die Serverzeit mit der Gerätezeit übereinstimmt.
<br><br>

##### Ressourcenbasierte Abrechnung von Microservices - Beispiel 1

||Benutzer| Server|
|:---|:----|:-----|
|Zeitzone| CEST +2h |UTC|
|Zeitpunkt Abonnement | 26.08.2020T12:00:00+02:00| 26.08.2020T10:00:00Z|
|Zeitpunkt Abbestellung | 27.08.2020T12:00:00+02:00| 27.08.2020T10:00:00Z|

**Ergebnis:**

Die Ressourcen werden hauptsächlich dem 26.08.2020 zugewiesen, da der Microservice gemäß UTC-Zeitzone an diesem Tag 14 Stunden und am darauf folgenden Tag 10 Stunden aktiv war. Dies entspricht möglicherweise nicht den Erwartungen des Benutzers, aus dessen Sicht der Microservice täglich 12 Stunden aktiv war.
<br><br>

##### Ressourcenbasierte Abrechnung von Microservices - Beispiel 2

||Benutzer| Server|
|:---|:----|:-----|
|Zeitzone| KI +14h (Kiribati)|UTC|
|Zeitpunkt Abonnement | 26.08.2020T12:00:00+14:00| 25.08.2020T22:00:00Z|
|Zeitpunkt Abbestellung | 26.08.2020T20:00:00+14:00| 26.08.2020T06:00:00Z|

**Ergebnis:**

Aus Sicht des Benutzers wurde der Microservice am 26.08.2020 für 8 Stunden abonniert. In Serverzeit waren es jedoch 2 Stunden vor Ende des Tages (EOD) am 25.08.2020 und 6 Stunden nach Beginn des Tages (BOD) am 26.08.2020.
<br><br>

##### Ressourcenbasierte Abrechnung von Microservices - Beispiel 3

||Benutzer| Server|
|:---|:----|:-----|
|Zeitzone| CEST| AS -11h (Amerikanisch-Samoa)|
|Zeitpunkt Abonnement | 26.08.2020T12:30:00+2:00| 25.08.2020T23:30:00Z|
|Zeitpunkt Abbestellung | 26.08.2020T13:00:00+2:00| 25.08.2020T24:00:00Z|

**Ergebnis:**

In diesem Fall haben wir einen großen Zeitunterschied zwischen der Zeit des Servers und der des Benutzers. Gemäß der Serverzeit werden alle Ressourcen für den 25.08.2020 in Rechnung gestellt.


### Tägliche Routine

Nutzungsstatistiken bestehen aus progressiven Werten wie der Anzahl der Anfragen und aus Werten, die Snapshots eines Status in einem bestimmten Zeitraum darstellen. Im Falle des zweiten Datentyps werden die Werte mehrmals täglich neu geladen, aber der Wert vom Ende des Tages (EOD) ist der Wert, der für den bestimmten Tag zugewiesen wird.

|Werttyp|Neu geladen|
|:--------|:--------|
|Leerung der Anzahl der Anfragen| Alle 5 Minuten|
|Verwendeter Speicher | 9, 17 und EOD|
|Geräteanzahl | 9, 17 und EOD|
|Abonnierte Anwendungen | 9, 17 und EOD|
|Microservice-Ressourcen | 9, 17 und EOD|

<a name="lifecycle"></a>
### Lebenszyklus

**Mandant**

Ein Mandant der {{< product-c8y-iot >}}-Platform kann mehrere Status besitzen:

  * Aktiv - Der allgemeine Status, wenn der Mandant mit der Plattform interagieren kann. In diesem Status werden alle Abrechnungswerte gespeichert und aktualisiert.
  * Gesperrt - Bei gesperrten Mandanten werden die Anzahl der Anfragen und die Microservice-Ressourcen nicht in Rechnung gestellt; der einzige Wert, der weiterhin berechnet wird, ist die Existenz des Mandanten und die Speichergröße. Die Microservice-Ressourcennutzung wird "wie verbraucht" in Rechnung gestellt, d. h. wenn der Mandant in den Status "Gesperrt" wechselt, werden alle Microservices gestoppt, so dass keine Ressourcen berechnet werden können.
  * Gelöscht - Dieser Vorgang kann nicht rückgängig gemacht werden. Dem Mandanten werden keine Ressourcen in Rechnung gestellt, aber es gibt auch keine Möglichkeit, die Daten wiederherzustellen.


**Microservice**

Sämtliche Erweiterungen, die auf der Plattform als Microservice bereitgestellt werden, werden "wie verbraucht" in Rechnung gestellt; dabei entspricht der Rechnungsbeginn dem Verbrauchsbeginn. Nachdem die Anwendung für den Mandanten abonniert wurde, wird ein Anwendungsstart-Prozess ausgelöst, der verschiedene Phasen auf oberster Ebene durchläuft:

  * Ausstehend - Der Start des Microservice wurde geplant, aber der Docker-Container läuft noch nicht. In diesem Status wird der Microservice noch nicht in Rechnung gestellt.
  * Geplant - Der Microservice wurde einem Knoten zugewiesen, die Initialisierung des Docker-Containers wurde gestartet. Die Ressourcen für den Microservice wurden bereits zugewiesen, die Abrechnung wird somit gestartet.
  * Nicht bereit - Der Microservice-Container ist noch nicht bereit, eingehenden Datenverkehr zu verarbeiten, aber die Anwendung läuft bereits.
  * Bereit - Der Microservice-Container ist bereit, eingehenden Datenverkehr zu verarbeiten. Der Status wird ausgehend von Liveness- und Readiness-Proben, die im [Microservice-Manifest](/microservice-sdk/concept/#manifest) definiert sind, auf "Bereit" gestellt. Wenn keine Proben definiert wurden, ist der Microservice direkt bereit.

Ein Mandant, bei dem Ressourcen in Rechnung gestellt werden, kann den Zeitpunkt anzeigen, zu dem die Abrechnung in den [Audit-Logs](/benutzerhandbuch/administration-de/#audit-logs) geändert wurde. Die Audit-Log-Einträge, z. B. " Anwendung '...' wird von X auf Y Instanzen skaliert", enthalten Informationen über Änderungen von Instanzen und Ressourcen, die vom Microservice verbraucht werden.

  <img src="/images/benutzerhandbuch/enterprise-tenant/et-ms-billing-audit-logs.png" name="Microservice audit logs"/>

Mandanten sollten auch in der Lage sein, den vollständigen Lebenszyklus einer Anwendung in den Anwendungsdetails anzuzeigen. Auf der Registerkarte **Status** werden im Abschnitt **Ereignisse** sehr niedrigstufige Phasen des Anwendungsstarts angezeigt. Einige der wichtigsten sind:

  * `Pod "apama-ctrl-starter-scope-..." erstellt.` - Der Start einer Microservice-Instanz wurde für den Mandanten geplant. Dies bedeutet, dass die Ressourcenzuweisung erfolgreich war, die Anwendung jedoch noch nicht ausgeführt wird (verweist auf den Zustand "Geplant").
  * `Image "apama-ctrl-starter-scope-..." wird gelesen` - Der Microservice-Initialisierungsprozess wurde gestartet und das Docker-Image wird bereits heruntergeladen (Zustand "Geplant").
  * `Container erstellt.` - Der Microservice-Container wurde erstellt, aber noch nicht gestartet (Zustand "Geplant").
  * `Container gestartet.` - Der Microservice-Container wurde gestartet, ist jedoch noch nicht bereit, eingehenden Datenverkehr zu verarbeiten (Zustand "Nicht bereit").

>**Info:** Im Abschnitt **Ereignisse** wird kein Ereignis angezeigt, wenn der Microservice den Status "Bereit" erreicht hat, da dies entsprechend der Readiness-Probe geschieht.

  <img src="/images/benutzerhandbuch/enterprise-tenant/et-ms-billing-events.png" name="Microservice details - Events"/>

Audit-Logs und Ereignisse werden entsprechend der Isolationsstufe im Mandantenbereich gespeichert. Bei Microservices mit Isolation mehrerer Mandanten handelt es sich dabei um den Mandanten, der der Eigentümer des Microservice ist, und bei Isolation nach Mandant um den abonnierten Mandanten.

### Gebührenabrechnungsmodelle

Die {{< product-c8y-iot >}}-Plattform sammelt zahlreiche unterschiedliche Nutzungsstatistik-Daten, die zur Gebührenabrechnung verwendet werden.

Je nach Vertrag gibt es zwei Abrechnungs-Preismodelle:

* Mandantennutzungs-Preismodell - basierend auf den Mandanten-Nutzungsstatistiken
* Geräte-Preismodell - hauptsächlich basierend auf Gerätestatistiken und Microservice-Ressourcennutzung

Die folgende Tabelle führt auf, welche Werte in welchem Modell zur Gebührenabrechnung verwendet werden:

<table>
<col style="width:25%">
<col style="width:25%">
<col style="width:30%">
<col style="width:20%">
<thead>
<tr>
<th style="text-align:left">Quelle</th>
<th style="text-align:left">Name</th>
<th style="text-align:left">Mandantennutzungs-Preismodell</th>
<th style="text-align:left">Geräte-Preismodell</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">ID</td>
<td style="text-align:left">x</td>
<td style="text-align:left">x</td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Name</td>
<td style="text-align:left">x</td>
<td style="text-align:left">x</td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">API-Anfragen</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">API-Anfrage von Geräten</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Speicher</td>
<td style="text-align:left">x</td>
<td style="text-align:left">x</td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Höchstwert Speicher</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Hauptgerät</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Höchstwert Hauptgerät</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Geräte</td>
<td style="text-align:left">x</td>
<td style="text-align:left">x</td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Höchstwert Geräte</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Endpunktgeräte</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Abonnierte Anwendungen</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Erstellungszeitpunkt</td>
<td style="text-align:left">x</td>
<td style="text-align:left">x</td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Erzeugte Alarme</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Aktualisierte Alarme</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Erstellte Stammdaten</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Aktualisierte Stammdaten</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Erstellte Ereignisse</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Aktualisierte Ereignisse</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Erstellte Messwerte</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Gesamt Inbound-Transfer</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Übergeordneter Mandant</td>
<td style="text-align:left">x</td>
<td style="text-align:left">x</td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Mandanten-Domain</td>
<td style="text-align:left"></td>
<td style="text-align:left">x</td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Kann Untermandanten erstellen</td>
<td style="text-align:left"></td>
<td style="text-align:left">x</td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Externe Referenz</td>
<td style="text-align:left">x</td>
<td style="text-align:left">x</td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Microservice-CPU-Nutzung gesamt</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#usage-stats">TenantUsageStatistics</a></td>
<td style="text-align:left">Microservice-Speichernutzung gesamt</td>
<td style="text-align:left">x</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="#microservice-usage">MicroserviceUsageStatistics</a></td>
<td style="text-align:left">CPU-Nutzung pro Microservice</td>
<td style="text-align:left"></td>
<td style="text-align:left">x</td>
</tr>
<tr>
<td style="text-align:left"><a href="#microservice-usage">MicroserviceUsageStatistics</a></td>
<td style="text-align:left">Speichernutzung pro Microservice</td>
<td style="text-align:left"></td>
<td style="text-align:left">x</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Tenant-API">DeviceStatistics</a></td>
<td style="text-align:left">Monatliche Messwerte, Ereignisse und Alarme, pro Gerät erstellt und aktualisiert.</td>
<td style="text-align:left"></td>
<td style="text-align:left">x</td>
</tr>
</tbody>
</table>
