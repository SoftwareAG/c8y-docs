---
order: 50
title: Sicherheitsaspekte
layout: default
---

## Überblick

Dieser Abschnitt zeigt Sicherheitskonzepte und Aspekte von Cumulocity, die in physische Sicherheit, Netzwerksicherheit, Anwendungssicherheit und Zugriffskontrolle gegliedert ist. Schließlich zeigt es, wie Cumulocity bei der Verwaltung der Sicherheit Ihrer IoT-Lösung hilft. Dieser Abschnitt ist speziell für IT-Sicherheitspersonal und Führungskräfte gedacht. IT-Sicherheitsexpertise ist erforderlich, wenn Sie Cumulocity ausführen und anwenden möchten.

Mehr hierzu gibt es auch noch in anderen Abschnitten der Nutzerdokumentation, wie die [REST Implementation](/guides/reference/rest-implementation) und [Benutzer API](/guides/reference/users). Für einzelne API-Aufrufe erforderliche Berechtigungen sind in den jeweiligen Referenzleitfaden-Abschnitten für die APIs dokumentiert.

Cumulocity entspricht den Richtlinien von Nokia Networks, die nicht öffentlich zugänglich sind, und der "Privacy and Security Assessment, PSA Richtlinie" der Deutschen Telekom.

(PSA,[detailed criteria in English](https://www.telekom.com/en/corporate-responsibility/data-protection---data-security/security/security/privacy-and-security-assessment-process-358312)  
[PSA Richtlinie](http://www.telekom.com/psa)).

## Physische Sicherheitsaspekte

Die physische Sicherheit von IT-Systemen verhindert den unbefugten Zugriff auf Server, Speicher und Netzwerkgeräte.

Cumulocity Standard Edition-Konten werden bei Amazon Web Services (AWS) gehostet. AWS ist zertifiziert nach [ISO 27001, DSS und andere Standards](http://aws.amazon.com/compliance/). Es verfügt über umfangreiche physische Sicherheitsmaßnahmen und wird unabhängig auditiert. Nicht alle Details sind aus tatsächlichen Sicherheitsgründen veröffentlicht. Audit Berichte erhalten Sie direkt bei[AWS Compliance](http://aws.amazon.com/compliance/contact/).
Unsere strategischen Hosting-Partner nutzen aktuelle Konzepte für ihre Kundendatensicherheit.

In IoT-Lösungen schließt die physische Sicherheit auch den unberechtigten Zugriff auf IoT-Geräte ein, beispielsweise um Daten von Geräten umzulenken oder zu manipulieren, Anmeldeinformationen von Geräten zu lesen oder die Konfiguration eines Geräts zu ändern. Wir empfehlen Ihnen, die physische Sicherheit der Geräte, die Sie für Ihre IoT-Lösung verwenden möchten, zu überprüfen und **Konfigurations-Ports für nicht autorisierte Personen nicht verfügbar zu machen** oder Manipulationsentdecker-Sensoren als zusätzliche Sicherheitskontrolle in Ihrem eigenen System einzuführen.
Als Betreiber der Plattform Cumulocity kontrollieren wir nicht interne Systeme unserer Mandanten. Als Mandant und Nutzer müssen Sie ein leistungsstarkes und durchdachtes Sicherheitskonzept für Ihr eigenes System verfolgen.

## Netzwerksicherheitsaspekte

Die Netzwerksicherheit verhindert den unberechtigten Zugriff auf Daten, die über das Netzwerk übertragen werden, und die unbefugte Veränderung der Daten. Es stellt auch sicher, dass Netzwerkdienste  zur Verfügung stehen.

Cumulocity stellt von der Platformseite her sicher, dass Daten vertraulich bleiben mit Hilfe von HTTPS [HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure) von Geräten zu Programmen. Es benutzt moderne Encryptions- Technologie, die unabhängig mit "A" bewertet wurde von den SSL Labs. [SSLlabs](https://www.ssllabs.com/). Jede Kommunikation mit Cumulocity unterliegt der individuellen Authentifizierung und Autorisierung.

Diese Kommunikationsarchitektur ist nachfolgend dargestellt. Innerhalb der Sensornetze und von den Sensornetzwerken zu Agenten können geräte- und Gateway-spezifische Protokolle verwendet werden (wie z. B. ZigBee oder Modbus). Die Sicherung ist eine gerätespezifische Angelegenheit. Agenten kommunizieren mit der Cumulocity-Plattform mit HTTPS zum Senden und Empfangen von Daten. Ebenso verwenden IoT-Anwendungen HTTPS zur Kommunikation. Wenn eine IoT-Anwendung eigene Schnittstellen zu Webbrowsern freigibt, wird empfohlen, dass diese HTTPS verwenden. Auf diese Weise wird der gesamte Weg von Agenten zum Endverbraucher gesichert.

<center><img src="/guides/concepts-guide/commsecurityde.png" alt="Communication security" style="max-width: 100%"></center>

Wie oben erwähnt, erfordert Cumulocity kein Gerät, welches evtl. Ports oder Dienste im Internet freilegen könnte. Dies ist eine wichtige Eigenschaft: Es vereinfacht nicht nur die Verbindung von Geräten zu Cumulocity, sondern vereinfacht auch die Sicherung dieser Geräte drastisch. Überprüfen Sie bei der Bereitstellung einer IoT-Lösung auch andere Dienste, die möglicherweise ein Gerät im Internet verfügbar machen , z. B. durch webbasierte Geräteverwalter oder SMS-basierte Konfigurationsmöglichkeiten.

## Anwendungssicherheitsaspekte

Anwendungssicherheit adressiert Sicherheit auf Softwareebene.

Cumulocity folgt Standardpraktiken für die Härtung auf Anwendungsebene, um sicherzustellen, dass nur richtig aktualisierte Betriebssysteme und Webserver verwendet werden. Eine Reihe von zusätzlichen "Best Practices" werden eingesetzt, um Cumulocity durch Design zu sichern. 

* Die gesamte Funktionalität von Cumulocity wird kohärent mit dem gleichen Satz von öffentlich dokumentierten, sessionlosen REST-APIs implementiert. Dies bedeutet, dass keine der beliebten "Session Stealing" Techniken bei Cumulocity funktionieren.
* Cumulocity verwendet keine SQL-Datenbank für die IoT-Datenspeicherung und basiert nicht auf einer Skriptsprache. Das bedeutet, dass sogenannte "Injection-Angriffe" nicht bei Cumulocity funktionieren.
* Wie oben diskutiert, sind Geräte Clienten bei Cumulocity und daher werden "beliebte" Angriffe auf Geräte nicht funktionieren.
* Die Geräte werden einzeln bei Cumulocity registriert. Dies bedeutet, dass, wenn ein Gerät gestohlen oder manipuliert wird, kann es individuell von Cumulocity getrennt werden.

##Zugangskontrolle

Cumulocity verwendet einen standardmäßigen Authentifizierungs- und Berechtigungsprozess basierend auf Realms, Benutzern, Benutzergruppen und Behörden. Ein * realm * ist eine Datenbank von Benutzern und Benutzergruppen, die die gleiche Authentifizierungs- und Autorisierungsrichtlinie verfolgen. Ein * Benutzer * ist eine Person oder ein externes System, das berechtigt ist, auf geschützte Ressourcen in Cumulocity zuzugreifen. Der Zugriff wird über Berechtigungen gesteuert. Zur Vereinfachung der Administration können Benutzer in * Benutzergruppen * gruppiert werden, die ähnliche Berechtigungen verwenden. Ein Benutzer kann Mitglied mehrerer Benutzergruppen sein, sodass der Benutzer über die Berechtigungen für die Gruppen verfügt.

Cumulocity schafft einen neuen Realm für jeden Mandanten, um die Benutzer des Mieters zu speichern. Realms bietet einen eigenen Namensraum für Benutzernamen, so dass Benutzer die Namen, die sie kennen, aus ihren eigenen Unternehmen IT oder andere IT-Systeme zu halten. Es gibt keinen Konflikt zwischen Benutzernamen: Ein Benutzer "smith" eines bestimmten Mandanten unterscheidet sich von einem Benutzer "Smith" eines anderen Mandanten. Dieser Benutzername ist gültig für alle Cumulocity-Anwendungen, die ein Mandant abonniert hat.

Jeder neue Bereich wird automatisch mit einem ersten Administrator-Benutzer gefüllt, der weitere Benutzer und Benutzergruppen erstellen kann und die Berechtigungen für diese Benutzer und Benutzergruppen vergeben können. Dies ermöglicht es einem Unternehmen, Benutzer und ihre Berechtigungen über die Administrationsanwendung selbst zu verwalten.

![User management screenshot](/guides/concepts-guide/usermanagement.png)

Die Fähigkeit, bestimmte Funktionalität auf dem System auszuführen, hängt von zwei Konzepten: Berechtigungen und Besitz. Berechtigungen definieren explizit, welche Funktionalität von einem Benutzer ausgeführt werden kann. Cumulocity unterscheidet Leseberechtigungen und Administratorrechte. Leseberechtigungen ermöglichen es Benutzern, Daten zu lesen. Mit Administratorberechtigungen können Benutzer Daten erstellen, aktualisieren und löschen. Lese- und Administrationsberechtigungen sind separat für die verschiedenen Datentypen in Cumulocity verfügbar. Zum Beispiel gibt es Leseberechtigungen für Bestandsdaten, Messungen, Operationen und so weiter.

Objekte im Inventar haben auch einen Eigentümer mit ihnen verbunden. Eigentümer können immer, unabhängig von ihren anderen Berechtigungen,

-   lesen, Aktualisieren und Löschen der Inventarobjekte, die sie besitzen.
-   erstellen, Lesen, Aktualisieren und Löschen von Daten, die den Objekten zugeordnet sind.

Wenn Sie zum Beispiel der Besitzer eines Smart Meter in den Stammdaten sind, können Sie Zählerstände für diesen Smart Meter speichern, auch wenn Sie keine anderen Messberechtigungen besitzen.

Die Stammdaten enthalten auch eine Erlaubnis zur Erstellung. Ein Benutzer, der nur die Erstellungsberechtigung hat, kann neue Objekte in den Stammdaten speichern, aber keine anderen Daten lesen, ändern oder löschen. Dies ist vor allem für Geräte relevant. Die Berechtigung "erstellen" beinhaltet auch die Möglichkeit, ein Objekt als untergeordnetes Element oder untergeordnetes Objekt mit einem anderen Objekt zu verknüpfen.

## Begrenzung des Zugriffs auf Objekte
Mit Cumulocity können Sie globale Berechtigungen festlegen, die für alle Objekte, Messungen, Ereignisse und so weiter gelten. Es erlaubt auch eine Beschränkung der Genehmigungen.

* An bestimmte verwaltete Objekte oder einen Satz verwalteter Objekte.
* An einen einzelnen Benutzer oder eine Gruppe von Benutzern.
* An individuelle Fragmente.

### Bearbeitungsberechtigungen

Berechtigungen können sowohl durch Navigieren zu einem bestimmten verwalteten Objekt in der Geräteverwaltungsanwendung als auch durch Navigieren zu einem Benutzer oder einer Gruppe in der Verwaltungsanwendung bearbeitet werden.

Um einem Benutzer eine neue Berechtigung hinzuzufügen, wählen Sie den Benutzer in der Administrationsanwendung aus. Im Abschnitt "Benutzerberechtigungen",

* Geben Sie den Namen oder die ID des Geräts ein, für das eine Berechtigung erteilt werden soll. Die automatische Vervollständigung wird unterstützt.
* Wählen Sie den Berechtigungsbereich aus, wenn die Berechtigung für das Inventar ( "MANAGED_OBJECT"), Operationen ( "OPERATIONS") und die Option "*" gilt, damit die Berechtigung für alle Features gilt.
* Wählen Sie die Fragmenttypen aus, für die die Berechtigung gilt. Wenn Sie z. B. "OPERATIONS" als Bereich, "c8y_Restart" als Typ und "ADMIN" als Berechtigung auswählen, kann der Benutzer nur Geräte neu starten. Beachten Sie, dass ein Benutzer Berechtigungen für alle Fragmente eines Objekts haben muss, um ein Objekt abzurufen oder zu bearbeiten. Verwenden Sie "*", um alle Fragmente auszuwählen oder um Berechtigungen für Objekte ohne Fragmente festzulegen. Die automatische Vervollständigung basierend auf dem ausgewählten Gerät wird unterstützt, aber Sie können jedes Fragment im Textfeld (wie Fragmente von untergeordneten Objekten) verwenden.
* Wählen Sie die Berechtigung ( "READ", "ADMIN"). Verwenden Sie "*", um "READ" und "ADMIN" auszuwählen.

![Adding new user permissions](/guides/acl/acl_admin1.jpg)

Es ist auch möglich, eine neue Berechtigung zu einem Gerät hinzuzufügen. In diesem Fall müssen Sie zu einem Gerät navigieren und den Benutzer oder die Gruppe auswählen, für die die Berechtigung gilt. Verwenden Sie die Umschalttasten, um zwischen Benutzern und Gruppen zu wechseln.

![Adding new device permissions](/guides/acl/acl_dm2.png)

### Weltweit zugängliche Objekte

Es ist möglich, jedes Objekt ohne spezielle Rechte von jedem Benutzer zugänglich zu machen. Um diese Rechte einzuräumen, fügen Sie einfach ein neues Fragment namens "c8y_Global" auf das Objekt.

### Ausweiten von Berechtigungen

Berechtigungen werden in zwei Dimensionen erweitert:

* Berechtigungen für eine Gruppe gelten für alle Benutzer in dieser Gruppe.
* Berechtigungen für ein Objekt gelten für alle Kindgeräte und untergeordneten Elemente.

### Beispiele

Erlauben Sie einem Benutzer, die Temperaturmessung des Gerätes "10200" zu lesen:

	10200, MEASUREMENT, c8y_TemperatureMeasurement, READ
	
Erlauben Sie einem Benutzer, jede Messung des Gerätes "10200" zu lesen:

	10200, MEASUREMENT, *, READ

Erlauben Sie einem Benutzer das Gerät neu zu starten "10200":

	10200, OPERATION, c8yRestart, ADMIN

### Fehlerbehebung von Berechtigungen

Um die Berechtigungen eines bestimmten Benutzers auf einem bestimmten Gerät zu ermitteln, navigieren Sie zu dem Gerät in der Geräteverwaltungsanwendung und klicken Sie auf die Registerkarte "Berechtigungen". Geben Sie dann den Namen des Benutzers in das Feld "Benutzer" ein. Dadurch werden alle Berechtigungen des Benutzers für das Gerät gedruckt.

![Viewing user permissions](/guides/acl/acl_dm1.png)

## Aspekte des Sicherheitsmanagements

Immer wenn ein sicherheitsrelevantes Ereignis eintritt, muss es für potenzielle Audits protokolliert werden. Sicherheitsrelevante Ereignisse können sowohl auf Applikationsebene als auch im IoT-Netzwerk auftreten. Ein einfaches Beispiel für ein sicherheitsrelevantes Ereignis auf Anwendungsebene ist eine Anmeldung zur Anwendung. Ein Beispiel für ein sicherheitsrelevantes Ereignis auf Netzwerkebene ist die Verwendung einer lokalen Software oder einer lokalen Steuerung auf einem Gerät, um das Gerät zu manipulieren.

Zur Erfassung sicherheitsrelevanter Ereignisse bietet Cumulocity eine [Auditing Nutzeroberfläche](/guides/reference/auditing).Diese Schnittstelle ermöglicht Anwendungen und Agenten, Prüfprotokolle zu schreiben, die persistent gespeichert und nach dem Schreiben nicht extern geändert werden können. Cumulocity selbst schreibt auch eigene Prüfprotokolle, die sich auf Login- und Device-Control-Operationen beziehen.

Um sicherheitsrelevante Berichte über Cumulocity selbst zu erhalten, können sich Interessierte an die [Cumulocity Sicherheits Bulletin](https://cumulocity.zendesk.com/hc/en-us/sections/200381178-Security-bulletin). Um Sicherheitsvorfälle zu melden, senden Sie bitte eine E-Mail an security@cumulocity.com.

## Zusammenfassung

Cumulocity adressiert Sicherheit auf verschiedenen Ebenen.Alle Geschäftspartner und Hosting-Services haben anerkannte Sicherheitszertifikate. Cumulocity befasst sich auch mit den Aspekten der Netzwerksicherheit durch individuelle Authentifizierungs- und Autorisierungsmethoden.Verbindungen von und zu Cumulocity werden mittels HTTPS-Technologie hergestellt.Alle Mieter haben volle Rechte, Benutzer und Benutzergruppen hinzuzufügen oder zu beenden. Der Mieter ausschliesslich vergibt Rechte an Agenten und Geräte.