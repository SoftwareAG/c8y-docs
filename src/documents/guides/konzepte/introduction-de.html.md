
---
order: 10
title: Einführung in Cumulocity
layout: default
---

## Übersicht

#### Bestimmungsgemäßer Gebrauch

Cumulocity gibt Ihnen sehr schnelle Kontrolle und Sichtbarkeit von Geräten und Assets, seien sie Häuser, Autos, Maschinen oder andere Geräte, die Sie überwachen und steuern möchten. Cumulocity hat hierzu:

* Zertifizierte Hardware Baukästen und Software Bibliotheken um fernsteuerbare Assets in eine Cloud zu bringen.
* Gerätemanagement, Datenvisualisierung und Fernsteuerfunktionen über das Internet.
* Schnelle Anpassung der oben genannten Eigenschaften mit [Cumulocity Event Language](/guides/concepts/realtime) Regelwerken und [Cumulocity applications](/guides/concepts/applications).
* APIs um existierende Funktionalität auszubauen  oder um Cumulocity mit anderen IT Services wie ERP oder CRM zu vereinen. Cumulocity kann auch ihre HTML5 Anwendungen hosten.

Alle diese Dienste werden über einen Cloud Service zur Verfügung gestellt, mit dem Sie "Internet of Things" (IoT) Lösungen mit Cumulocity fundamental anders als mit massgeschneiderten Entwicklungen und RAD angehen werden. Sie können sofort mit einer grossen Anzahl an bestehender Funktionalität und Lösungen starten und Sie können kostenlos starten. Sie brauchen sich keine Gedanken über IT Infrastruktur zu machen (wie etwa Hosting, Netzwerke, Sicherheit, Kapazität und Backup) und ebenso nicht über IT Management (das alle Software für alle beteiligten User installiert wäre). 

Cumulocity arbeitet mit jeder Netzwerk Architektur, ist aber speziell ausgelegt mit mobilen Netzwerken zu arbeiten. Hier nachfolgend geben wir Ihnen eine kurze Übersicht über die verschiedenen Funktionen mit Referenzen und detailierten Beschreibungen.
![Solution building](/guides/concepts-guide/solutionde.png)

Terms and Conditions zum Gebrauch von Cumulocity:
[Terms and Conditions](http://cumulocity.com/terms-and-conditions/)
## Hardware Baukästen und Software Bibliotheken
###Funktionalität innerhalb von Cumulocity

Cumulocity unterstützt direkt verschiedene Geräte mit fertigen Software-Bibliotheken und Beispielen. Diese können spezialisierte Geräte für einen bestimmten Anwendungsfall sein, wie beispielsweise Standorterfassungsgeräte, OBUs und Verkaufs-Telemetriegeräte. Sie können auch Entwickler-Kits für den Bau von generischen Geräten, wie [Arduino](/guides/devices/arduino), [Raspberry Pi](/guides/devices/raspberry-pi), [Cinterion boards](/guides/devices/cinterion), [Tinkerforge sensors](/guides/devices/tinkerforge) und andere sein. Diese Entwickler-Kits werden in den entsprechenden Kapiteln des Abschnittes "Geräte" in dieser Dokumentation genauer beschrieben.

Außerhalb der spezifischen Baukästen können viele andere Geräte die Software ohne oder mit wenig Modifikation implementieren. Deshalb ist die Software im Quellcode-Form bereitgestellt, um sie auf jedem anderen Gerät anwenden zu können oder zu modifizieren, das Sie möglicherweise haben könnten. Es gibt auch generische Client-Bibliotheken für Java, JavaME, C / C ++ und Lua für Ihre eigene Implementierung. Wenn Ihr Gerät eine vollständig proprietäre Laufzeitumgebung verwendet, können immer Cumulocity REST HTTP-Schnittstellen verwendet werden. Diese werden an praktisch jedem Internet verbundenen Gerät, bis hin zu den kleinsten Systemen, funktionieren.
![Supported devices](/guides/concepts-guide/devices.png)

## Mobile Netzwerk Unterstützung

Cumulocity unterstützt alle Arten von Internetverbindungen auf sichere Weise. Es funktioniert auch mit Verbindungen, die bandbreitenbeschränkt und undirektional sind (wie zum Beispiel die Kommunikation über NAT). Wenn gewünscht, kann Cumulocity Remote-Geräte in nahezu Echtzeit-Modus steuern.

Mobile Internetkonnektivität ist eine ideale Wahl für viele Maschine-zu-Maschine-Anwendungen, da sie sicher fast überall funktioniert, ohne dass eine Integration in die Netzwerkinfrastruktur eines Unternehmens erforderlich ist. Dies gilt insbesondere, wenn Ihre M2M-SIM-Karte freies Roaming zwischen Mobilfunknetzen ermöglicht. Auch sind die Anforderungen an die hohen Bandbreiten von Verbraucheranwendungen oft nicht erforderlich. Mit Cumulocity können Sie von der mobilen Konnektivität profitieren, ohne dass zusätzliche Netzanbieterdienste wie VPNs und öffentliche oder sogar statische IP-Adressen erforderlich sind.

## Geräte Management

Cumulocity bietet umfangreiche Geräteverwaltung für vollständig zertifizierte Geräte. Das beinhaltet

* Hardware und Modem Information.
* Verbindungsüberwachung.
* Dazu gehört zentrale Fehlerverwaltung und die Überwachung der Serviceebene.
* Konfigurationsmanagement.
* Software and Firmware Management.
* Grafiken von Gerätestatistiken.
* Häufig verwendete Fernbedienungen (z. B. Neustart, Schalter).
* Fehlerbehebungsfunktionen wie Ereignisliste und Operationswarteschlange.

Die Intensität der Geräteverwaltung kann von den Geräteeigenschaften abhängen. (Z. B., wenn ein Gerät keine Remote-Firmware-Aktualisierung unterstützt, wird es auch nicht über Cumulocity verfügbar sein.) Für Schnittstellengeräte, die noch nicht mit Cumulocity zertifiziert sind, kann man hierzu in der [Device Management Library](/guides/reference/device-management) und im [REST Developer's Guide](/guides/rest/device-integration) nachsehen.

![Device Management](/guides/concepts-guide/devicemanagement.png)

## Visualisierung und Fernsteuerung

Cumulocity visualisiert Ihre Sensordaten zentral und grafisch über die moderne Web-Oberfläche. Es zeigt auch gemeinsame Remote-Steuerelemente für Benutzer mit den entsprechenden Berechtigungen.

Die Benutzeroberfläche passt sich automatisch an angeschlossene Geräte an - keine Konfiguration erforderlich. Wenn Sie beispielsweise ein Gerät anschließen, das von einem Remote-Neustart aus gestartet wird, wird eine Schaltfläche "Neustart" angezeigt. Wenn das Gerät Lichtsensordaten sendet, sehen Sie ein Diagramm mit den Messwerten des Sensors.
Es passt sich auch an den Webbrowser an, den Sie verwenden. Wenn Sie beispielsweise ein Mobiltelefon oder ein Tablet mit eingeschränkter Bildschirmgröße verwenden, ändert es die Benutzeroberflächen-Steuerelemente, entsprechend der Bildschirmgrösse.

Durch die [Sensor Library](/guides/reference/sensor-library), werden gemeinsame Sensor- und Steuerungstypen unabhängig von der Einrichtung, die die Sensordaten erzeugt, korrekt wiedergegeben.

![Dashboard](/guides/concepts-guide/dashboard.png)

## Anpassung

Die oben beschriebene Funktionalität bietet bereits eine breite Palette an Geräteverwaltungs-, Visualisierungs- und Steuerungsoptionen. Aber was über benutzerdefinierte Visualisierung, neue Steuerelement Widgets und benutzerdefinierte Business-Logik? Versuchen Sie die umfangreichen Anpassungsoptionen von Cumulocity:

* Schreiben Sie Regeln zu Warnungen oder unterdrücken Sie Alarm oder repriorisieren Sie Warnungen indem Sie SLA Parameter definieren.
* Mit Hilfe von [Cumulocity Event Language](/guides/concepts/realtime) implementieren Sie Regeln. Bsp dass Sie eine Email bekommen, wenn Grenzwerte überschritten werden oder andere automatisierte Nachrichten. 
* Richten Sie eine grafisches Anzeige mit den wichtigsten KPIs ein.
* Abonnieren von Plugins, die neue Funktionen zur Cumulocity-Anwendung beitragen.
* 
![Rules](/guides/concepts-guide/rules.png)

## APIs

Cumulocity stellt seine vollständige Funktionalität durch Programmierschnittstellen (APIs) zur Verfügung. Dies bedeutet, dass alle Funktionen von Cumulocity für Sie verfügbar sind, um in unterschiedlichen Kontexten außerhalb von Cumulocity direkt - in Ihren eigenen Anwendungen, in Ihren eigenen Geräten zu verwenden.

Im Gegensatz zu vielen anderen M2M- und IoT-Plattformen verwendet Cumulocity für alle Anwendungsfälle dieselben APIs und dieselbe Schnittstellentechnologie. Infolgedessen haben Sie viel Auswahl, wie Sie Intelligenz in Ihre IoT Vorrichtungen setzen, abhängig davon, wie leistungsfähig sie sind. Sie müssen auch nur einen Satz von APIs und eine Technologie verwenden, um eine komplette Lösung vom Gerät zur eigenen Anwendung zu kreieren.

Cumulocity nutzt HTTP und REST, die heute die am weitesten verbreitete Schnittstellentechnologie. Sie arbeitet auf jedem mit dem Internet verbundenen Gerät, vom kleinen eingebetteten Mikrocontrollern bis hin zu Desktop-PCs. Die sichere Variante, HTTPS, wird für die meisten sicherheitskritischen Anwendungen verwendet und gibt Ihnen bestmögliche Sicherheit.

Das Plugin-Konzept von Cumulocity ermöglicht Ihnen, neue Benutzeroberflächen-Funktionalität zu gestalten, die die vorhandenen Cumulocity-Anwendungen nahtlos erweitert.

## Wo kann ich noch mehr erfahren?

Weitere konzeptionelle Informationen finden Sie in den folgenden Abschnitten des Leitfadens:

* Das generelle technische Konzept hinter Cumulocity wird in diesem Leitfaden beschrieben. [Cumulocity's domain model](/guides/concepts/domain-model).
* Konzepte im Zusammenhang mit Schnittstellengeräten und anderen IT-Systemen mit Cumulocity werden hier beschrieben: [Interfacing devices](/guides/concepts/interfacing-devices).
* Anpassungskonzepte von Cumulocity werden beschrieben in [Real-time processing in](/guides/concepts/realtime) and [Developing  applications](/guides/concepts/applications).
* Sicherheitskonzepte werden beschrieben in [Security aspects](/guides/concepts/security).

#Zusammenfassung:
Cumulocity ist eine unabhängige Geräte- and Anwendungs -Management Internet der Dinge (Io T) Plattform. Es verbindet und verwaltet Ihre Geräte und Anlagen effizient und kann sie fernsteuern.

* Verbinden Sie Ihre Geräte und Anlagen über jedes Netzwerk
* Überwachen Sie die Bedingungen und generieren Sie Echtzeit-Analysen
* Reagieren Sie sofort auf Bedingungen oder Situationen