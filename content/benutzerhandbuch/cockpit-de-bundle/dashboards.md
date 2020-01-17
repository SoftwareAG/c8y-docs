---
weight: 40
title: Verwenden von Dashboards 
layout: redirect
---

Dashboards ermöglichen eine individuelle Visualisierung Ihrer Daten anhand verschiedener Widgets. Widgets können Karten, Bilder, Graphen, Tabellen und andere grafische Darstellungen von Daten anzeigen. 

Cumulocity bietet eine Reihe voreingestellter Widgets (Details finden Sie im Abschnitt [Widgets-Sammlung](#widgets)). Sie können auch eigene Widgets entwickeln und diese zu Ihrem Cumulocity-Konto hinzufügen, siehe [Web developer's guide](/guides/web/).

### <a name="creating-dashboards"></a>Erstellen von Dashboards

Wählen Sie im Navigator das Objekt (Gruppe oder Gerät) aus, für welches Sie ein Dashboard erstellen möchten. 

Klicken Sie auf die **Plus**-Schaltfläche in der oberen Leiste und wählen Sie im Menü **Neues Dashboard**. 

<img src="/images/benutzerhandbuch/cockpit-dashboard-create.png" name="Create dashboard" style="width:75%;"/>

Gaben Sie im Abschnitt **Dashboard-Info** des Dashboard-Editors folgende Informationen ein:

* Einen Namen für das Dashboard, der auch im Navigator angezeigt wird.
* Die Position des Dashboards im Navigator. "10000" erscheint an oberster und "-10000" an unterster Position.
* Ein Symbol, das neben dem Dashboard im Navigator erscheint. 

Im Abschnitt **Dashboard-Layout** können Sie ein Design für das Dashboard wählen ("Hell", "Dunkel", "Transparent" oder "Branding") und einen Standardstil für die Kopfzeile der Widgets ("Standard", "Rand", "Overlay", oder "Verborgen"). Außerdem können Sie die Einstellung für den Rand der Widgets festlegen (Standwert ist 15 px). 

Eine Vorschau der ausgewählten Layout-Einstellungen wird unmittelbar auf der rechten Seite angezeigt, um Ihre Einstellungen zu visualisieren.

Klicken Sie **Speichern** um das Dashboard zu erstellen und zu öffnen.

Da noch keine Widgets im Dashboard vorhanden sind, wird nur die Schaltfläche **Widget hinzufügen** angezeigt.


### <a name="adding-widgets"></a>Hinzufügen eines Widgets zu einem Dashboard

Klicken Sie **Widget hinzufügen** in der oberen Menüleiste (oder in einem leeren Dashboard) Um ein Widget zu einem Dashboard hinzuzufügen.

<img src="/images/benutzerhandbuch/cockpit-dashboard-add-widget.png" name="Add widget" style="width:75%;"/> 

Wählen Sie im folgenden Fenster einen Widget-Typen aus der Auswahlliste. Abhängig vom ausgewählten Typen werden weitere Felder zur Bearbeitung eingeblendet. Details zu allen Widget-Typen finden Sie unter [Widgets-Sammlung](#widgets). 

Klicken Sie **Benutzerdefinierter Widget-Stil**, um den Stil für den Inhalt und die Kopfzeile des Widgets individuell anzupassen, in ähnlicher Weise wie das Festlegen des generellen Layouts im [Dashboard-Editor](#creating-dashboards).

Klicken Sie **Speichern**, um das Widget zum Dashboard hinzuzufügen.


### Ändern von Widgets in einem Dashboard

Sie können die Anordnung von Widgets in einem Dashboard ändern. Durch Ziehen mit dem Mauszeiger können Sie ein Widget im Dashboard bewegen und an einer anderen Position ablegen.

Durch Ziehen der Pfeile in der unteren rechten Ecke des Widgets können Sie seine Größe verändern.

Klicken Sie auf das Zahnrad-Symbol in der oberen rechten Ecke eines Widgets und wählen Sie im Kontextmenü **Bearbeiten**, um die Eigenschaften eines Widgets zu bearbeiten.

Klicken Sie auf das Zahnrad-Symbol in der oberen rechten Ecke eines Widgets und wählen Sie im Kontextmenü **Löschen**, um ein Widget aus einem Dashboard zu entfernen.

Sie können Dashboards nur bearbeiten, wenn diese entsperrt sind. Verwenden Sie den Regler mit dem Schloss-Symbol in der oberen Menüleiste, um ein Widget zu sperren bzw. entsperren.

<img src="/images/benutzerhandbuch/cockpit-dashboard-lock.png" name="Dashboard sperren" style="width:50%;"/> 

>**Info:** Auf Touch-Geräten wie Smartphones oder Tablets werden einige Funktionen nicht unterstützt.


### <a name="sharing-dashboards"></a>Teilen von Dashboards

Sie können ein Dashboard für ein Gerät erstellen und auf alle Geräte des gleichen Typs anwenden. 

Wählen Sie dazu die Option **Dashboard auf alle Geräte des Typs [TYP] anwenden** im Dashboard-Editor. [TYP] zeigt den Typ des Geräts an, das gerade ausgewählt ist.

In Dashboard-Editor wird die folgende Nachricht angezeigt:

<img src="/images/benutzerhandbuch/cockpit-dashboard-share.png" name="Geteiltes Dashboard" style="width:75%;"/> 

Änderungen an diesem Dashboard werden automatisch auf alle Dashboard-Instanzen angewendet.

> **Info:** Sie können nur für das Gerät selbst Widgets und Daten zum Dashboard hinzufügen. Es ist nicht möglich, Daten von Kindgeräten hinzuzufügen, da die Struktur dieser Geräte von Gerät zu Gerät unterschiedlich sein kann.


### Bearbeiten von Dashboard-Attributen

Klicken Sie **Bearbeiten** in der oberen Menüleiste, um ein Dashboard zu bearbeiten. Der Dashboard-Editor wird angezeigt. Detaillierte Informationen zu den einzelnen Feldern finden Sie unter [Erstellen von Dashboards](#creating-dashboards).


### Kopieren von Dashboards

Klicken Sie **Mehr...** in der oberen Menüleiste und wählen Sie im Kontextmenü **Dashboard kopieren**, um ein Dashboard aus einem Objekt in ein anderes zu kopieren. 

Navigieren Sie zu dem Objekt, in welches Sie das Dashboard kopieren möchten und wählen Sie im Kontextmenü **Dashboard [NAME] einfügen**, um das Dashboard einzufügen.

Alternativ können Sie zum Kopieren von Dashboards auch die Methode **Dashboard pro Typ** verwenden. Mit dieser Methode wenden Sie ein Dashboard eines Objekts auf **alle** Objekte des gleichen Typs an. 


### Löschen von Dashboards

Klicken Sie **Mehr...** in der oberen Menüleiste und wählen Sie im Kontextmenü **Dashboard löschen**, um ein Dashboard aus einem Objekt zu löschen.