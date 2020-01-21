---
weight: 40
title: Verwenden von Dashboards 
layout: redirect
---


Dashboards ermöglichen eine individuelle Visualisierung Ihrer Daten anhand verschiedener Widgets. Widgets können Karten, Bilder, Graphen, Tabellen und andere grafische Darstellungen von Daten anzeigen. 

Cumulocity bietet eine Reihe voreingestellter Widgets (Details finden Sie im Abschnitt [Widgets-Sammlung](#widgets)). Sie können auch eigene Widgets entwickeln und Ihrem Cumulocity-Konto hinzufügen. Weitere Informationen finden Sie im [Web SDK Guide](/web/).

### <a name="creating-dashboards"></a>So erstellen Sie ein Dashboard

Wählen Sie im Navigator das Objekt (Gruppe oder Gerät) aus, für welches Sie ein Dashboard erstellen möchten. 

Klicken Sie auf die **Plus**-Schaltfläche in der oberen Leiste und wählen Sie im Menü **Dashboard hinzufügen**. 

<img src="/images/benutzerhandbuch/cockpit/cockpit-dashboard-menu.png" name="New dashboard"/>

Der Dashboard-Editor wird geöffnet.

<img src="/images/benutzerhandbuch/cockpit/cockpit-dashboard-create.png" name="Create dashboard"/>

Geben Sie im Abschnitt **Dashboard-Info** des Dashboard-Editors folgende Informationen ein:

* Einen Namen für das Dashboard, der auch im Navigator angezeigt wird.
* Die Position des Dashboards im Navigator. "10000" erscheint an oberster und "-10000" an unterster Position.
* Ein Symbol, das neben dem Dashboard im Navigator erscheint.

Im Abschnitt **Dashboard-Layout** können Sie ein Design für das Dashboard wählen ("Hell", "Dunkel", "Transparent" oder "Branding") und einen Standardstil für die Kopfzeile der Widgets ("Standard", "Rand", "Overlay", oder "Verborgen"). Außerdem können Sie die Einstellung für den Rand der Widgets festlegen (Standwert ist 15 px).

Zusätzlich können Sie die Option **Widget-Titel wenn möglich übersetzen** aktivieren. Damit wird der Widget-Titel bei jedem Wechsel der Sprache übersetzt.

> **Info:** Die Widget-Titel werden nur übersetzt, wenn eine gültige Übersetzung verfügbar ist. 

Eine Vorschau der ausgewählten Layout-Einstellungen wird unmittelbar auf der rechten Seite angezeigt, um Ihre Einstellungen zu visualisieren.

Klicken Sie **Speichern** um das Dashboard zu erstellen und zu öffnen. 

Da noch keine Widgets im Dashboard vorhanden sind, wird nur die Schaltfläche **Widget hinzufügen** angezeigt.

<img src="/images/benutzerhandbuch/cockpit/cockpit-dashboard-empty.png" name="Empty dashboard"/> 


### <a name="adding-widgets"></a>Hinzufügen eines Widgets zu einem Dashboard

Um einem Dashboard ein Widget hinzuzufügen, klicken Sie auf die Schaltfläche **Widget hinzufügen** (im Falle eines leeren Dashboards) oder auf **Widget hinzufügen** in der oberen Menüleiste.

Wählen Sie im folgenden Fenster einen Widget-Typen aus der Auswahlliste. Abhängig vom ausgewählten Typen werden weitere Felder zur Bearbeitung eingeblendet. Details zu allen Widget-Typen finden Sie unter [Widgets-Sammlung](#widgets). 

Klicken Sie **Benutzerdefinierter Widgetstil**, um den Stil für den Inhalt und die Kopfzeile des Widgets individuell anzupassen. Dies erfolgt in gleicher Weise wie das Festlegen des generellen Layouts des [Dashboard-Editors](#creating-dashboards).

Klicken Sie **Speichern**, um das Widget zum Dashboard hinzuzufügen.

### Ändern von Widgets in einem Dashboard

Sie können die Anordnung von Widgets in einem Dashboard ändern. Durch Ziehen mit dem Mauszeiger können Sie ein Widget im Dashboard bewegen und an einer anderen Position ablegen. 

<img src="/images/benutzerhandbuch/cockpit/cockpit-dashboard-widgets.png" name="Arrange widgets"/> 

Durch Ziehen der Pfeile in der unteren rechten Ecke des Widgets können Sie seine Größe verändern. 

Klicken Sie auf das Zahnrad-Symbol in der oberen rechten Ecke eines Widgets und wählen Sie im Kontextmenü **Bearbeiten**, um die Eigenschaften eines Widgets zu bearbeiten.

<img src="/images/benutzerhandbuch/cockpit/cockpit-dashboard-widget-menu.png" name="Edit widget"/> 

Klicken Sie auf das Zahnrad-Symbol in der oberen rechten Ecke eines Widgets und wählen Sie im Kontextmenü **Löschen**, um ein Widget aus einem Dashboard zu entfernen.

Sie können Dashboards nur bearbeiten, wenn diese entsperrt sind. Verwenden Sie den Umschalter mit dem Schloss-Symbol in der oberen Menüleiste, um ein Widget zu sperren bzw. entsperren.

<img src="/images/benutzerhandbuch/cockpit/cockpit-dashboard-lock.png" name="Lock dashboard"/> 

>**Info:** Auf Touch-Geräten wie Smartphones oder Tablets werden einige Funktionen nicht unterstützt.


### <a name="sharing-dashboards"></a>Teilen von Dashboards

Sie können ein Dashboard für ein bestimmtes Gerät erstellen und auf alle Geräte des gleichen Typs anwenden. Dies ist jedoch nur möglich, wenn das Typ-Attribut für das Gerät gesetzt ist.

Wählen Sie dazu die Option **Dashboard auf alle Geräte des Typs [TYP] anwenden** im Dashboard-Editor. [TYP] zeigt den Typ des Geräts an, das gerade ausgewählt ist.

Im Editor wird eine entsprechende Nachricht angezeigt.

<img src="/images/benutzerhandbuch/cockpit/cockpit-dashboard-share.png" name="Shared dashboard"/> 

An diesem Dashboard vorgenommene Änderungen werden automatisch auf alle Dashboard-Instanzen angewendet.

> **Info:** Sie können nur für das Gerät selbst Widgets und Daten zum Dashboard hinzufügen. Es ist nicht möglich, Daten von Kindgeräten hinzuzufügen, da die Struktur dieser Geräte von Gerät zu Gerät unterschiedlich sein kann.


### Bearbeiten von Dashboard-Attributen

Klicken Sie **Bearbeiten** in der oberen Menüleiste, um ein Dashboard zu bearbeiten. 

<img src="/images/benutzerhandbuch/cockpit/cockpit-dashboard-edit.png" name="Edit dashboard"/> 

Der Dashboard-Editor wird angezeigt. Detaillierte Informationen zu den einzelnen Feldern finden Sie unter [Erstellen von Dashboards](#creating-dashboards).


### Kopieren von Dashboards

Klicken Sie **Mehr...** in der oberen Menüleiste und wählen Sie im Kontextmenü **Dashboard kopieren**, um ein Dashboard aus einem Objekt in ein anderes zu kopieren. 

<img src="/images/benutzerhandbuch/cockpit/cockpit-dashboard-copy.png" name="Copy dashboard"/> 

Navigieren Sie zu dem Objekt, in welches Sie das Dashboard kopieren möchten und wählen Sie im Kontextmenü **Dashboard [NAME] einfügen**, um das Dashboard einzufügen.

Eine alternative Methode zum Kopieren eines Dashboards ist das 
Konzept "Dashboard pro Typ".  Mit dem Konzept "Dashboard pro Typ" teilen Sie das Dashboard eines Objekts mit **allen** Objekten desselben Typs.


### Löschen eines Dashboards

Klicken Sie **Mehr...** in der oberen Menüleiste und wählen Sie im Kontextmenü **Dashboard löschen**, um ein Dashboard aus einem Objekt zu löschen. 
