---
order: 30
title: Geräteschnittstellen
layout: default
---

## Einführung in Geräteschnittstellen

In diesem Abschnitt werden Konzepte für die Anbindung von IoT-Geräten und anderen IoT-bezogenen Datenquellen mit Cumulocity erläutert.

Um diese Systeme mit Cumulocity zu verbinden, ist eine Treibersoftware, ein "Agent" erforderlich. Wir beschreiben zunächst die Hauptaufgaben eines Agenten und stellen die Strukturoptionen für Agenten vor. Wir gehen Schritt für Schritt durch die Aufgaben eines Agenten. Schließlich diskutieren wir die Verwendung von Agenten für den Erwerb von Daten aus anderen Datenquellen wie einem IT-System eines Nutzers.

Verwandte Themen hierzu befinden sich in den folgenden Abschnitten:

-   [Cumulocity's Domain Model](/guides/concepts/domain-model), erklärt den Austausch von Datenstrukturen zwischen Agenten und Cumulocity. 
-   [Geräte Integration](/guides/rest/device-integration), erklärt wie man Agenten selber entwickelt.
-   [Referenz Handbuch](/guides/reference/rest-implementation), für eine detaillierte Spezifikation der Schnittstellen zwischen Agenten und dem Cumulocity-Kern.

## Was ist ein Agent?

Maschine-zu-Maschine (M2M) Geräte haben viele unterschiedliche Protokolle, Parameter und Netzwerkverbindungsoptionen. Protokolle von Geräten variieren vom Low-Level seriellen Links zu umfassenden IT-Protokollen wie Web-Services. Die heutigen IoT-Standards definieren selten genau, wie man auf bestimmte Messwerte von Sensoren zugreifen oder bestimmte Steuerungen manipulieren kann. Geräte können über Mobilfunknetze und Gateways angeschlossen werden.

Um Maschinen-zu-Maschine-Anwendungen vor dieser Anzahl von Zugriffsoptionen zu schützen, verwendet Cumulocity sogenannte *Agenten*. Ein Agent ist eine Funktion, die drei Aufgaben für einen bestimmten Anbieter und Gerätetyp erfüllt:

-   Es übersetzt das gerätespezifische Schnittstellenprotokoll in ein einziges Referenzprotokoll.
-   Es übersetzt das spezifische Domänenmodell des Geräts zu einem Referenzdomänenmodell.
-   Es ermöglicht eine sichere Fernkommunikation in verschiedenen Netzwerkarchitekturen.

![Agent architecture](/guides/concepts-guide/agentsde.png)

**Protokoll Übersetzung:** Die Konfiguration von Parametern, Messwerten, Ereignissen und anderen Informationen erfolgt entweder über ein gerätespezifisches Protokoll auf der einen Seite an einen Agenten ( "push") oder von einem Agenten abgefragt ("pull"). Der Agent konvertiert diese Nachrichten in das Protokoll, das Cumulocity benötigt. Es werden auch Geräte- Steuerbefehle von Cumulocity ( "Relais ausschalten") empfangen und diese übersetzt in ein passendes Geräte- Protokoll.

Cumulocity benutzt ein einfaches und sicheres Protokoll basierend auf REST (i.e., HTTPS) und JSON, die für eine Vielzahl von Programmierumgebungen bis hin zu kleinen eingebetteten Systemen verwendet werden können. Um Echtzeit-Szenarien zu unterstützen, wird das Protokoll um ein "Push" -Modell herum entworfen, d.h. Daten werden gesendet, sobald sie verfügbar sind.

**Modell Transformierung** 
Die Konfigurationsparameter, Messwerte, Ereignisse, alle haben ihren gerätespezifischen Namen (und ggf. Einheiten). Ein Agent für ein bestimmtes Gerät wird dieses gerätespezifische Modell in das Cumulocity-Referenzmodell umwandeln. Zum Beispiel liefert ein Elektrizitätszähler die Hauptablesung als Parameter "Received Wh", so dass der Agent diese Lesung in eine Referenz "Gesamte aktive Energie" in kWh umwandelt.

**Sichere Fernkommunikation** Die Geräte und Vorrichtungen können ein Protokoll bereitstellen, das für eine sichere Fernkommunikation ungeeignet ist, insbesondere in öffentlichen Cloud-Umgebungen. Das Protokoll unterstützt nur lokale Netzwerke und geht nicht über Firewalls und Proxys und kann sensible Daten in Klartextform enthalten. Um Sicherheitsprobleme wie diese zu vermeiden, kann ein Agent an dem Gerät zusammen sein und über Cumulocity eine sichere, internetfähige Verbindung zum entfernten Gerät bereitstellen.

Um die Vorteile des Agentenkonzepts zusammenzufassen: Agents ermöglichen IoT-Anwendungen, sich sicher mit jedem beliebigen Remote-IoT-Gerät zu verbinden und ohne obligatorische Systemanforderungen auf das Gerät selbst zu übertragen. Sie vereinfachen die Entwicklung von IoT-Anwendungen drastisch, indem sie die Anwendungen von der Vielzahl der IoT-Geräte und Protokolle abschirmen.

## Welche Agenten Architektur wird unterstützt?

Agenten können auf verschiedene Weise bereitgestellt werden, wie im Bild unten dargestellt. Wir unterscheiden zwei Hauptvarianten: *Serverseitige Agenten* und *geräteseitige Agenten*.

![Agent architectures](/guides/concepts-guide/agentarchitecturede.png)

Serverseitige Agenten werden in einer Cloud ausgeführt, die von Cumulocity gehostet oder von Ihnen verwaltet wird. Geräte werden über ein gerätespezifisches Protokoll mit Server-Agents verbunden. Diese Option wird hauptsächlich gewählt, wenn eine oder mehrere der folgenden Bedingungen erfüllt ist:

* Das Gerät ist "geschlossen", es ist nicht programmierbar und unterstützt nur ein bestimmtes, definiertes Protokoll um mit der Aussenwelt zu kommunizieren.
* Das Protokoll ist sicher und internetfähig.
* Es gibt eine VPN Infrastuktur von dem Gerät zu Cumulocity.

Geräteseitige Agenten laufen auf den Geräten im Sensornetz. Solche Geräte können Router, Mobiltelefone oder Modems sein. Die Agenten funktionieren in jeder Art von Laufzeitumgebung, die das Gerät unterstützt, von den sehr batterieverbrauchenden und speicherintensiven eingebettetem Mikrocontrollern bis zu Minicomputern mit eingebettetem Linux. Die Agenten werden die angeschlossenen Sensoren abfragen und die angeschlossenen Steuerungen manipulieren. Dies führt in der Regel zu einer einfacheren Architektur als serverseitige Agenten.

## Der Agent im Lebenszyklus des Systems
### Den Agenten starten

Server-seitige Agenten werden kontinuierlich in der Cloud ausgeführt und akzeptieren Verbindungen von den Gerätetypen, die sie unterstützen. Geräteseitige Agenten laufen auf dem Gerät und werden zusammen mit anderen Geräten gestartet, wenn das Gerät eingeschaltet wird.

Beide Arten von Agenten sind mit einer festen Plattformendpunkt-URL vorkonfiguriert. Mit dieser Plattformendpunkt-URL werden Anmeldeinformationen für jedes verbundene Gerät erfasst. Diese Anmeldeinformationen ermöglichen es dem Gerät, eine Verbindung zu einem Nutzer in Cumulocity herzustellen und Daten an den Nutzer zu senden sowie Operationen vom Nutzer zu akzeptieren.

Nach dem Start synchronisiert der Agent das Inventar mit dem Sensor-Subnetz, für das der Agent zuständig ist.

### Synchronisieren der Stammdaten

Um die Stammdaten Synchronisation zu verstehen, sollte man sich kurz die Kommunikationshierarchie aus dem Domain Modell in Erinnerung rufen. ["Cumulocity's Domain Model"](/guides/concepts/domain-model). In den Stammdateb befinden sich die Agenten an den Wurzeln der Hierarchie. Unterhalb jedes Agenten wird die Topology des Subnetzwerkes, für das der Agent verantwortlich ist, abgebildet. Diese Topologie existiert sowohl im realen Netzwerk als auch als Abbild im Inventar. Sie kann sich im realen Netzwerk ändern, und diese Änderungen müssen in den Stammdaten widergespiegelt werden.

![Communication hierarchy](/guides/concepts-guide/commshierarchyde.png)

Stammdatensynchronisierung ist ein zweistufiges Verfahren: Der erste Schritt besteht darin, den Eintrag des Agenten aus den Stammdaten abzufragen und im Netzwerk zu erstellen. Der zweite Schritt besteht dann darin, das Subnetzwerk zu ermitteln und mit dem Inventar zu synchronisieren, basierend auf dem Eintrag des abgefragten Agenten.

Der erste Schritt bietet die Möglichkeit, Konfigurationsinformationen an einen Agenten als Teil des Agenteneintrags in das Netzwerk weiterzugeben. Diese Konfigurationsinformation wird durch die Art des Agenten und der angeschlossenen Geräte bestimmt. Sie enthält beispielsweise Abfrageintervalle für Messungen. Sie kann dem Agenten auch Subnetzwerk-Aufgaben zuweisen, falls der Agent sein zugehöriges Netzwerk nicht automatisch erkennen kann.

Zum Beispiel kann ein Agent, der auf einem Mobiltelefon installiert ist, einen angeschlossenen Bluetooth-Herzmonitor ohne weitere Konfiguration entdecken. Ein Agent, der auf einem lokalen IP-Netzwerk installiert ist, kann ein Discovery-Verfahren in einem lokalen Netzwerk ausführen. Im Gegensatz zu einem Multispeak-Agenten erfordert die URL eines Multispeak-Servers und Anmeldeinformationen, um in der Lage sein, verbundene Smart Meter zu entdecken.

Um Stammdateninformationen up-to-date zu halten und eine zentrale Sicht auf Geräten beizubehalten, werden zwei Mechanismen angewendet:

-   Ein regelmäßiger Inventar-Upload, der zuerst ausgeführt wird, wenn der Agent gestartet wird und periodisch wiederholt wird.
-   Eine Verbreitung von individuellen Veränderungen, während der Agent läuft.

Die Notwendigkeit eines regelmäßigen Inventar-Uploads hängt vom jeweiligen Geräteprotokoll ab, was eventuell Änderungsbenachrichtigungen unterstützt. Es sei beispielsweise angenommen, dass eine Vorrichtung lokal durch Bedienelemente am Gerät oder unter Verwendung einer lokalen Geräteverwaltungssoftware betrieben wird. Wenn das Geräteprotokoll diese Änderungen nicht propagiert, können sie nur durch eine reguläre Abfrage entdeckt werden. Ein anderes Beispiel wäre die Annahme, dass neue Geräte nur durch regelmäßiges Scannen eines Netzwerkadressbereichs im Sensornetzwerk entdeckt werden können. Diese muss von einem Agenten ausgeführt werden.

Es ist wichtig zu wissen, dass der Geräteagent Dateneigentum an Konfigurationseigenschaften oder Gerätetopologie-Daten voraussetzt und diese Daten entsprechend modifiziert oder überschreibt.

### Empfangen von Daten und Befehlen aus Anwendungen

Nachdem die Topologie in den Stammdaten erstellt wurde, sind die Geräte sichtbar und können von IoT-Applikationen betrieben werden. Wie in der Geräte Management Sektion beschrieben ["Cumulocity's Domain Model"](/guides/concepts/domain-model), IoT Anwendungen können Vorgänge an Vorrichtungen senden, die in der Warteschlange stehen. Der Agent muss den Cumulocity-Kern nach Vorgänge abfragen, die für seine Geräte bestimmt sind.

Wenn eine Operation an ein Agentengerät gesendet wurde, übersetzt der Agent die Operation in die gerätespezifische Darstellung. Beispielsweise würde ein Multispeak-Agent eine Operation zum Setzen des Zustands eines Schalters auf eine SOAP-Anfrage "initiateConnectDisconnect" für einen Elektrizitätszähler übersetzen. Der übersetzte Vorgang wird dann an das Gerät gesendet.

Schließlich erkennt der Agent die Ausführung der Operation, und er würde den Zustand des Schalters in dem Inventar aktualisieren.

### Senden von Sensorwerten, Ereignissen, Alarmen und Prüfprotokollen

Neben der Fernbedienung von Geräten besteht die Hauptaufgabe der Agenten darin, Daten von Sensoren zu übertragen. Diese Daten können wie im Abschnitt Domänenmodell beschrieben variieren:

-   Messungen werden durch Lesen von Sensorwerten erzeugt. In einigen Fällen werden diese Daten in statischen Intervallen gelesen und an die Plattform gesendet (z. B. Temperatursensoren oder elektrische Zähler). In einigen Fällen werden die Daten auf Anforderung oder in unregelmäßigen Intervallen (z.B. Gesundheitsvorrichtungen, wie etwa Gewichtskalen) gelesen. Unabhängig davon, welche Art von Protokoll das Gerät unterstützt, ist der Agent verantwortlich für die Umwandlung in ein "Push" -Protokoll durch das Hochladen von Daten an Cumulocity.Die Java-Agentenbibliothek vereinfacht die regelmäßige Abfrage von Sensoren über einen Scheduler( [Java Agent](/guides/java/agents)).
-   Ereignisse, die in Echtzeit durch IoT-Anwendungen verarbeitet werden müssen, z. B. Benachrichtigungen von einem Bewegungsdetektor oder Transaktionen von einem Verkaufsautomaten.
-   Alarme sind Ereignisse, die menschlichen Eingriff erfordern, z. B. Sabotageereignisse, die von einem elektrischen Zähler gesendet werden.
-   Prüfprotokolle sind Ereignisse, die für Risikomanagementzwecke aufgezeichnet werden, z. B. Anmeldefehler.

### Aktualisierung der Agentenkonfiguration

Die Agentenkonfiguration muss möglicherweise während der Laufzeit geändert werden. Zum Beispiel wird ein neues Gateway zu einem Sensornetzwerk  installiert und die Adresse und die Anmeldeinformationen für dieses Gateway müssen an den Agenten gesendet werden. Dies geschieht durch Senden einer an den Agenten gerichteten Gerätesteuerungsanforderung. Nach der Verarbeitung der Konfiguration wird der Agent Änderungen innerhalb des Gerätenetzwerks veröffentlichen.

## Integration von anderen Datenquellen
### System Integration

Unternehmen, die IoT-fähige Dienste anbieten, betreiben normalerweise andere IT-Systeme, die wichtige Informationen über IoT-Assets und -Geräte bereitstellen. Beispiele für solche Systeme sind:

-   Asset-Management-Systeme, die zusätzliche Informationen über die verfügbaren Geräte und deren Standort bereithalten.
-   Kundenbeziehungsmanagementsysteme können Informationen über den Kunden als Geräteinhaber bereitstellen.
-   Workforce-Management-Systeme können Informationen über den Wartungsstatus von Geräten bereitstellen.

Technisch ist die Entwicklung und der Betrieb eines Agenten für die Systemintegration nicht anders als ein Agent für die Geräteintegration. Die Untermenge der Daten, die den Systemen gehören, ist jedoch unterschiedlich. Agenten für die Geräteintegration besitzen die Gerätehierarchie und die Gerätekonfigurationsinformationen. Agenten für die Systemintegration stellen zusätzliche Informationen für Geräte und eigene Teile der Assethierarchie bereit. Zusammen tragen sie zu den im Inventar gespeicherten Geräteinformationen bei, um eine zentrale Sicht auf alles, was die für den IoT-Service relevanten Assets und Geräte betrifft, zur Verfügung zu stellen.

## Wie unterstützt Cumulocity die Entwicklung von Agenten?

Cumulocity unterstützt Agentenentwicklung auf drei verschiedenen Ebenen:

* Es gibt eine Reihe von voll ausgestatteten Open-Source-Agenten und Treiber in Cumulocity Repositories.[bitbucket.org](https://bitbucket.org/m2m/cumulocity-examples) and [mbed.org](http://mbed.org/users/vwochnik/code/) Mehr dazu gibt es auch im Kapitel zu Geräten in dieser Dokumentation.
* Clientbibliotheken für große Laufzeitumgebungen wie C / C ++, JavaME / SE und Lua, wieder als Open Source [bitbucket.org](https://bitbucket.org/m2m).
* Technologie-neutral [REST APIs](/guides/rest/device-integration) für andere Runtime Environments.

## Zusammenfassung

Zur Anbindung von IoT-Datenquellen wie Geräten und externen IT-Systemen werden Agenten bereitgestellt. Agenten sind Softwarekomponenten, die eine zentrale Sicht auf alle Aspekte des IoT-Netzwerks und den zentralen Betrieb des IoT-Netzwerks ermöglichen.