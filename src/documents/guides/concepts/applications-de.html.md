---
order: 40
title: Anwendungen entwickeln
layout: default 
---

## Übersicht


Cumulocity wurde entworfen, um beliebige vertikale IoT-Anwendungen zusätzlich zu seiner generischen Funktionalität unterzubringen. Nutzer können Anwendungen abonnieren, um ...

* Erweiterungen zur Nutzeroberfläche zu erhalten.
* Ganz neue Benutzeroberflächen zu erhalten.
* Ein Branding der Benutzeroberfläche zu erhalten.
* Neue serverseitige "Business Regeln" zu erhalten.

In diesem Abschnitt werden die grundlegenden Konzepte um Anwendungen in Cumulocity vorgestellt.

## Anwendungen und Abonnements

Anwendungen werden in Cumulocity entweder als "eigene" Anwendungen oder "Markt" -Anwendungen registriert.

"Eigene" Anwendungen stehen nur Nutzern eines bestimmten Mandanten (= Hauptnutzers) zur Verfügung und werden vom Administrator des Mandanten registriert. Eigene Anwendungen werden beispielsweise während der Anwendungsentwicklung verwendet, wenn Sie noch keine spezielle Anwendungsversion für ein breites Publikum zur Verfügung stellen möchten. Sie werden auch für firmeneigene Funktionen verwendet, wie z. B. Interaktionen mit Inhouse-IT-Systemen.

"Markt" -Anwendungen stehen allen Nutzern von Cumulocity zur Verfügung. Die Anmeldung eines Mandanten an eine Markt Anwendung stellt diese Anwendung dem Nutzer zur Verfügung. Um eine Anwendung als Markt Anwendung zu nutzen, bitte [contact us](mailto:info@cumulocity.com).

Applikationen werden durch einen sogenannten *Application Key* gekennzeichnet. Der Anwendungsschlüssel ermöglicht Cumulocity, eine Anfrage mit einer bestimmten Anwendung zu verknüpfen.
Eine Anwendung ist eine der folgenden Kombinationen:

* Eine komplette, eigenständige Benutzeroberflächenanwendung, unabhängig davon, ob sie auf dem Cumulocity-UI-Framework (siehe unten) oder anderen Webkomponenten Ihrer Wahl basiert.
* Eine Reihe von Benutzeroberflächen- Plugins.
* Ein Satz von Anweisungen in Cumulocity Event Language.

Benutzeroberflächen-Anwendungen werden im Anwendungs-Switcher-Widget oben rechts in Cumulocity angezeigt, so dass Benutzer zwischen den abonnierten Anwendungen navigieren können. Sie können auf einer externen Website gehostet werden, in diesem Fall die Anwendung Switcher nur leitet den Benutzer auf diese Website. Sie können auch über Cumulocity gehostet werden. In diesem Fall wird die Anwendung über eine URL <tenant> .cumulocity.com / apps / <application> zur Verfügung gestellt.

![App switcher](/guides/concepts-guide/appswitcher.png)

## Cumulocity Anwendungen

Die Cumulocity-Benutzeroberfläche selbst basiert auf einem Framework, das auf AngularJS und Bootstrap basiert, dem derzeit modernsten HTML5-Webanwendungs-Framework. Es ist modular aufgebaut um eine Reihe von Plugins, die auch von Endbenutzern dynamisch aktiviert und deaktiviert werden können. Benutzer können ihre eigenen Konfigurationen der Cumulocity-Benutzeroberfläche mit nur Funktionalität, die sie für ihren speziellen Zweck benötigen, erstellen. Zu diesem Zweck enthält die Administrationsanwendung einen Plugin-Editor - der selbst ein Plugin ist.

![Plugin editor](/guides/concepts-guide/plugineditor.png)

## Plugins

Wenn die Funktionalität der Cumulocity-Benutzeroberfläche Ihren Anwendungsfall nicht abdeckt, können Sie sie mit eigenen Plugins erweitern. Erweiterungspunkte für Plugins sind:

* Suchfunktionalität hinzufügen.
* Menüpunkte können am linken Navigationsbalken hinzugefügt werden.
* Hinzufügen von Ansichten oder "Tabs" zu Geräten. 
* Fügen Sie dem Dropdown-Menü eines Geräts Menüelemente hinzu. 
* Widgets hinzufügen.
* Ändern des Brandings


![Extension points for plugins](/guides/concepts-guide/extensionpoints.png)

Weitere Informationen zum Entwickeln von Plugins finden Sie im Entwicklerhandbuch. [Plugin Developer's Guide](/guides/web/introduction)

## Module

Wenn Ihre Anwendung eine neue serverseitige Verarbeitung benötigt, können Sie ein [Cumulocity Event Language](/guides/reference/real-time-statements) Modul hinzufügen. Dies ist einfach eine Datei in Ihrer Anwendung an einem bestimmten Ort (META-INF / application-module.cel).

	module paypalhere;
	@Name('store_purchase_details1_on_purchase_operation')
	insert into PurchaseDetailsTmp1
	select
	    findManagedObjectById(purchaseEvent.operation.deviceId.value) as vendingMachine,
	    getString(purchaseEvent.operation, "c8y_Purchase.tabId") as tabId,
	    getNumber(purchaseEvent.operation, "c8y_Purchase.amount") as amount,
	    purchaseEvent.operation.id as purchaseOperationId,
	    purchaseEvent.operation.deviceId as deviceId
	from
	...

Beachten Sie, dass die Bereitstellung von Modulen innerhalb der Anwendung nicht für lokale Zip-Anwendungen unterstützt wird. Daher muss die Ressourcen-URL auf eine externe Ressource zeigen, von der die Datei heruntergeladen werden kann. Die Datei muss als application-module.cel benannt werden und sich im Verzeichnis META-INF befinden.

## Hosting

Um Ihre eigenen HTML5- und JavaScript-Webanwendungen über Cumulocity zu hosten, besuchen Sie "Eigene Anwendungen" in der Cumulocity-Verwaltungsanwendung und klicken Sie auf "Neu hinzufügen".

![List of own applications](/guides/concepts-guide/ownapplications.png)

Es gibt zwei Arten von Anwendungen, die konfiguriert werden können:

-   Typ "Hosted" : Die Anwendungen werden von einem Repository wie Bitbucket oder Github zu einem benutzerdefinierten Pfad verknüpft und sind im Application Switcher sichtbar.
 
-   Typ "External": Die Applikationen sind komplett extern und werden nur im Application Switcher angezeigt.
 
Angenommen, Sie entwickeln eine Web-Anwendung mit Bitbucket als Code-Repository. In diesem Fall kann die Anwendung durch Cumulocity sichtbar gemacht werden:

-   Geben Sie den Namen der Anwendung ein. Dies wird im Anwendungsumschalter oben links im Bildschirm angezeigt.
-   Geben Sie optional einen Anwendungsschlüssel ein. Dies wird verwendet, um Ihre Anwendung von anderen Anwendungen zu unterscheiden, falls Sie Ihre Anwendung an andere Unternehmen schicken möchten.
-   "Hosted" auswählen.
-   Wählen Sie die URL aus, mit der Ihre Anwendung den Benutzern zur Verfügung steht.
-   Geben Sie die URL zu Ihrem Repository ein. Im Fall von Bitbucket hat die URL die folgende Struktur.
-   Wenn Ihr Repository privat ist, geben Sie den Benutzernamen und das Passwort eines Bitbucket-Benutzers ein, der auf das Repository zugreifen darf. Derzeit ist die grundlegende Authentifizierung die einzige unterstützte Authentifizierungsmethode (d.h. nur Bitbucket-Benutzername und -Passwort, nicht irgendeiner der OpenID-Provider).
-   Die Anwendung speichern.

<pre><code>https://bitbucket.org/<bitbucket user>/<bitbucket repository>/raw/<branch>/[path inside repository]</code></pre>

Nun erscheint die Applikation im Application Switcher. Sie können auch auf den Link in der Liste der eigenen Anwendungen klicken, um zu überprüfen, ob die Konfiguration erfolgreich war.

![Configuring a new application](/guides/concepts-guide/ownapplicationdetail.png)

Das obige Verfahren hilft Ihnen, Ihre M2M-Anwendung viel schneller für Ihre Endbenutzer zu veröffentlichen. Wenn Sie mit Ihrer Anwendung zufrieden sind, ist die Veröffentlichung nur eine Frage der Freigabe Ihres Codes in der Versionskontrolle - die Bereitstellung wird automatisch behandelt.

##Zusammenfassung
Cumulocity ist gemacht, um beliebige vertikale IoT-Anwendungen zusätzlich zu seiner generischen Funktionalität anzuwenden. Anwendungen werden in Cumulocity entweder als "eigene" Anwendungen oder "Markt" -Anwendungen registriert. Eine Anwendung kann eine beliebige Kombination einer kompletten, eigenständigen Benutzeroberflächenanwendung oder eines Satzes von Benutzerschnittstellen-Plugins oder einer Gruppe von Anweisungen in der Cumulocity-Ereignissprache sein.Mit Cumulocity können Benutzer beliebige Software an andere Benutzer oder Kunden veröffentlichen.