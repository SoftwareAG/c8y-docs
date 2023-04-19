---
weight: 90
title: Microservice-basierter Data Broker
layout: redirect
aliases:
  - /users-guide/enterprise-edition/#ms-data-broker
---

Der Microservice-basierte Data Broker nutzt den {{< product-c8y-iot >}} Messaging Service, der eine zuverlässige, skalierbare und hochleistungsfähige Bewegung von IoT-Daten ermöglicht. Der Microservice-basierte Data Broker ähnelt in seiner Funktionalität dem bisherigen Data Broker, außer dass zu seiner Nutzung ein Microservice, der `databroker-agent-server`, aktiviert werden muss.

{{< c8y-admon-req >}}
Der {{< product-c8y-iot >}} Messaging Service ist eine optionale Komponente der {{< product-c8y-iot >}}-Plattform, die eventuell aktiviert werden muss, bevor der Microservice-basierte Data Broker verwendet werden kann.
Der ursprüngliche Data Broker wird vorerst neben dem Microservice-basierten Data Broker weiter betriebsfähig bleiben, und die Benutzer können für jeden Mandanten individuell auswählen, welcher Data Broker verwendet werden soll.

Für die gemeinsam genutzten Public-Cloud-Instanzen der {{< product-c8y-iot >}}-Plattform ist der Messaging Service ab Version 10.13 standardmäßig aktiviert, und der Microservice-basierte Data Broker kann auf Wunsch für einzelne Mandanten aktiviert werden, die bereits Zugriff auf den ursprünglichen Data Broker haben.
Für dedizierte und selbst gehostete Instanzen sind der Messaging Service und der Microservice-basierte Data Broker für Version 10.10 und höher verfügbar, müssen aber explizit aktiviert werden.

Bitte [wenden Sie sich an den Produkt-Support](/welcome/contacting-support/), um Näheres über die Verwendung von Messaging Service und Microservice-basiertem Data Broker in Ihrer {{< product-c8y-iot >}}-Umgebung zu erfahren.
Im *Messaging Service - Installation & Operations Guide* finden Sie technische Details zur erforderlichen Konfiguration. Beachten Sie jedoch, dass diese Aufgaben nur von einem {{< product-c8y-iot >}}-Plattform-Administrator und nicht von einem normalen Benutzer ausgeführt werden können.

Zusammenfassung: Um mit dem Microservice-basierten Data Broker arbeiten zu können, müssen die folgenden Anforderungen erfüllt sein:
  * Der {{< product-c8y-iot >}} Messaging Service muss auf Ihrer {{< product-c8y-iot >}}-Plattform verfügbar sein.
  * Ihr Mandant muss die Anwendung "feature-broker" abonniert haben.
  * Ihr Mandant muss den Microservice "databroker-agent-server" abonniert haben.

{{< /c8y-admon-req >}}

<a name="enabling-ms-data-broker"></a>
###  So aktivieren Sie den Microservice-basierten Data Broker

1. Navigieren Sie im {{< management-tenant >}} zu **Administration** > **Mandanten** > **Untermandanten** und wählen Sie den Mandanten, der als Quelle des Datenkonnektors dienen soll.
2. In der Registerkarte **Anwendungen**:
    * Abonnieren Sie für den Mandanten die Data-Broker-Funktion (Anwendung `feature-broker`), sofern diese noch nicht abonniert ist.
    * Abonnieren Sie für den Mandanten den Data Broker-Agenten (Anwendung `databroker-agent-server`).

![Databroker-Agent-Server](/images/benutzerhandbuch/enterprise-tenant/et-new-data-broker-agent.png)

{{< c8y-admon-info >}}
Mandanten, die einen Datenkonnektor abonnieren, benötigen kein Data Broker-Agent-Abonnement.
{{< /c8y-admon-info >}}

<a name="ms-data-broker-connectors"></a>
###  Datenkonnektoren

Nähere Informationen zur Handhabung von Datenkonnektoren finden Sie unter [Datenkonnektoren](#data-broker-connectors).

<a name="ms-data-broker-subscriptions"></a>
###  Datenabonnements

Nähere Informationen zur Handhabung von Datenabonnements finden Sie unter [Datenabonnements](#data-broker-subscriptions).

<a name="migrating-data-broker-connectors-to-ms-data-broker"></a>
###  Migration vorhandener Datenkonnektoren auf den Microservice-basierten Data Broker

Nach dem Aktivieren des Microservice-basierten Data Brokers sollten Ihre vorhandenen Datenkonnektoren ohne weitere Konfiguration weiterhin funktionieren.

<a name="troubleshooting-ms-data-broker"></a>
###  Troubleshooting

#### Abonnement-Alarm

Der {{< management-tenant >}} kann nicht als Data-Broker-Ursprungsmandant verwendet werden und dieser Alarm wird beim Versuch ausgelöst, den Data Broker-Agenten für einen {{< management-tenant >}} zu abonnieren.

#### Data Broker-Verbindungsfehler

Der Data Broker-Agent ist vorkonfiguriert für die Überwachung aller Konnektoren bezüglich der Anzahl der gesendeten Weiterleitungsanfragen. Wenn diese Anzahl einen vorkonfigurierten Schwellenwert erreicht, wird beim Mandanten ein KRITISCHER Alarm ausgelöst.
Geschieht dies, werden die Daten gespeichert, bis die Verbindung wiederhergestellt ist und die Daten wieder weitergeleitet werden können.
Zu fehlgeschlagenen Anfragen kann es kommen, wenn der den Data Broker abonnierende Mandant nicht mehr erreichbar ist.

#### Data Broker-Alarm wegen langsamer Verarbeitung

Der Data Broker-Agent ist so vorkonfiguriert, dass er die Rate überwacht, mit der Ereignisse an ihr Ziel geliefert werden. Wenn Ereignisse nicht schnell genug geliefert werden können, werden Alarme wegen langsamer Verarbeitung ausgelöst. Ein Alarm wegen langsamer Verarbeitung enthält eine Konnektor-ID, an der Sie erkennen können, welcher Mandant betroffen ist.

##### Queue-Backlog

Dieser Alarm wird ausgelöst, wenn die Latenz für die Nachrichtenübermittlung einen festgelegten Schwellenwert überschreitet. Dies erfolgt in der Regel dann, wenn es aufgrund verschiedener Faktoren zu einem Rückstand an unzugestellten Ereignissen an den Zielmandanten gekommen ist.

##### Durchschnittlich gesendete Bytes pro Sekunde bei Anfragen

Der Data Broker überwacht die Datenrate, mit der Ereignisse weitergeleitet werden. Liegt diese Rate unterhalb eines vorkonfigurierten Schwellenwerts, wird ein Alarm wegen langsamer Verarbeitung ausgelöst. Hierzu kann es aufgrund eines langsamen Netzwerks kommen.

![New Data-Broker Alarms](/images/benutzerhandbuch/enterprise-tenant/et-new-data-broker-alarms.png)

{{< c8y-admon-info >}}
Näheres darüber, wie sich diese Parameter konfigurieren lassen, finden Sie im *Messaging Service Installation & Operations Guide*.
{{< /c8y-admon-info >}}
