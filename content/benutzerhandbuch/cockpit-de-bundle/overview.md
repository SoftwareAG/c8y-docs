---
weight: 10
title: Übersicht
layout: redirect
---


Die folgenden Abschnitte beschreiben detailliert alle Funktionalitäten der Cockpit-Anwendung.

Zur besseren Orientierung folgt eine Übersicht über den Inhalt dieses Dokuments.

|Abschnitt|Inhalt|
|:---|:---|
|[Verwalten von Assets](#managing-assets)|Organisieren Sie Assets in [Hierarchien](#hierarchies) durch [Erstellen von Gruppen](#creating-groups) und [Zuweisen von Geräten](#assigning-devices).
|[Visualisieren von Daten mit dem Daten-Explorer](#data-explorer)|Untersuchen, vergleichen und visualisieren Sie interaktiv IoT-Daten. <br> Beschreibt, wie Sie auf den [Daten-Explorer](#data-explorer) zugreifen, [Datenpunkte](#add-data-points) hinzufügen, [Datenpunktattribute anpassen](#customize-data-points), die [Visualisierung ändern](#change-visualization), den [Daten-Explorer als Widget speichern](#create-widget) und Daten [exportieren](#export-data). 
|[Verwenden von Dashboards](#dashboards)|[Erstellen Sie Ihre eigenen Dashboards](#creating-dashboards) durch Hinzufügen und Arrangieren von [Widgets](#adding-widgets). [Teilen Sie Dashboards](#sharing-dashboards) unter allen Geräten des gleichen Typs. 
|[Widgets-Sammlung](#widgets)|Verwenden Sie verschiedene [Widget-Typen](#widgets) aus der in Cumulocity enthaltenen Widgets-Sammlung und konfigurieren Sie diese nach Ihren individuellen Bedürfnissen.
|[Verwenden von Alarmen](/benutzerhandbuch/device-management/#alarm-monitoring)|Überwachen Sie Probleme Ihrer Geräte mit Hilfe von Schweregraden und Prozessen. Da die Verwendung von Alarmen in der Cockpit-Anwendung exakt so funktioniert wie in der Device Management-Anwendung finden Sie weitere Informationen in [Verwenden von Alarmen](/benutzerhandbuch/device-management/#alarm-monitoring) unter Device Management. 
|[Verwalten von Berichten](/benutzerhandbuch/cockpit/#reports)|Bearbeiten Sie [Berichte](#reports) auf Basis von Dashboard-Layouts, erstellen Sie [Berichte zum Exportieren von Daten](#export) in das CSV- oder Excel-Format und [terminieren Sie den Export](#schedule-export). 
|[Datenpunktbibliothek](#data-point-library)|Verwalten Sie Standardeinstellungen ("Profile") Ihrer Geräte und wenden Sie diese mit Hilfe der [Datenpunktbibliothek](#data-point-library) automatisch an.
|[Verwenden von Smart Rules](#smart-rules)|[Erstellen und verwalten Sie Geschäftsregeln](#create-rules), um eingehende Daten in Echtzeit zu verarbeiten und entsprechende Aktionen auszuführen.
|[Smart Rules-Sammlung](#smart-rules-collection)|Verwenden Sie [globale Smart Rules](#smart-rules-collection), um Regeln zu konfigurieren, etwa für Geofencing, Alarmeskalation oder Benachrichtigungen (SMS/E-Mail/Sprache). Beschreibt detailliert jede Smart Rule und ihre konfigurierbaren Parameter.


Mehr über allgemeine Aspekte der Cumulocity-Plattform und ihrer Anwendungen erfahren Sie unter [Erste Schritte](/benutzerhandbuch/getting-started-de/).

### <a name="home"></a>Startseite

Bei der Startseite der Cockpit-Anwendung handelt es sich um ein Dashboard, das Daten für den Mandanten anzeigt.

![image alt text](/images/benutzerhandbuch/cockpit/cockpit-home-screen.png)

Die Daten, die auf der Startseite angezeigt werden, werden von allen Benutzern des Mandanten gemeinsam genutzt. Standardmäßig zeigt die Startseite eine Begrüßung, die aktiven kritischen Alarme, neueste Alarme und eine Karte mit allen Geräten.

Die Startseite kann nach Ihren eigenen Bedürfnissen bearbeitet und gestaltet werden. Sie können die angezeigten Widgets ändern oder entfernen oder neue Widgets hinzufügen. 

Details zum Bearbeiten von Dashboards finden Sie unter [Arbeiten mit Dashboards](#dashboards).

Um die Startseite wieder auf die ursprünglichen Inhalte zurückzusetzen, klicken Sie **Mehr...** rechts oben in der Menüleiste und klicken Sie dann **Dashboard wiederherstellen**.