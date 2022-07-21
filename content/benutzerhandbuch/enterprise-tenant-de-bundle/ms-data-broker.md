---
aliases:
- /benutzerhandbuch/enterprise-edition-de/#ms-data-broker
layout: redirect
title: Microservice-basierter Data Broker
weight: 90
---

Der Microservice-basierte Data Broker nutzt den {{< product-c8y-iot >}} Messaging Service, der eine zuverlässige, skalierbare und hochleistungsfähige Bewegung von IoT-Daten ermöglicht. Der Microservice-basierte Data Broker ähnelt in seiner Funktionalität dem bisherigen Data Broker, außer dass zu seiner Nutzung ein Microservice, der `databroker-agent-server`, aktiviert werden muss.

> **Wichtig:** Der {{< product-c8y-iot >}} Messaging Service und der Microservice-basierte Data Broker sind derzeit als eingeschränkte Testversionen verfügbar und noch nicht in allen {{< product-c8y-iot >}} Public-Cloud-Umgebungen aktiviert. Bitte wenden Sie sich an den [Produkt-Support](/welcome/contacting-support/), um Näheres über die Verwendung dieser Fähigkeiten in Ihrer {{< product-c8y-iot >}}-Umgebung zu erfahren. Der ursprüngliche Data Broker wird vorerst neben dem Microservice-basierten Data Broker weiter betriebsfähig bleiben. Die Benutzer können somit für jeden Mandanten individuell auswählen, welcher Data Broker verwendet werden soll.

<a name="enabling-ms-data-broker"></a>
###  So aktivieren Sie den Microservice-basierten Data Broker

1. Navigieren Sie im {{< management-tenant-de >}} zu **Administration** > **Mandanten** > **Untermandanten** und wählen Sie den Mandanten, der als Quelle des Datenkonnektors dienen soll.
2. Abonnieren Sie in der Registerkarte **Anwendungen** den Data Broker-Agenten (databroker-agent-server) für den Mandanten.

![Databroker-Agent-Server](/images/benutzerhandbuch/enterprise-tenant/et-new-data-broker-agent.png)

> **Info:** Mandanten, die einen Datenkonnektor abonnieren, benötigen kein Data Broker-Agent-Abonnement.

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

Der {{< management-tenant-de >}} kann nicht als Data-Broker-Ursprungsmandant verwendet werden und dieser Alarm wird beim Versuch ausgelöst, den Data Broker-Agenten für einen {{< management-tenant-de >}} zu abonnieren.

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

> **Info:** Näheres darüber, wie sich diese Parameter konfigurieren lassen, finden Sie im *Messaging Service Installation & Operations Guide*.