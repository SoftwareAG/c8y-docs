---
order: 40
title: Dashboards 
layout: redirect
---

Dashboards bieten Ihnen eine individuelle Visualisierung Ihrer Daten mit einer Reihe von Widgets. Widgets können Karten, Bilder, Graphen, Tabellen und andere grafische Darstellungen von Daten anzeigen. Cumulocity bietet eine Reihe von voreingestellten Widgets (Details finden Sie im Abschnitt [Widget-Paket](#widget)). Sie können auch eigene Widgets entwickeln und diese zu Ihrem Cumulocity-Konto hinzufügen. Siehe [Web developer's guide](/guides/images/web/).

### Ein neues Dashboard erstellen

Um ein Dashboard zu erstellen, navigieren Sie zu einem Objekt in der Asset-Hierarchie. Anschließend klicken Sie rechts oben auf das Zahnrad-Symbol. Wählen Sie "Dashboard erstellen". Dies öffnet einen Dialog.

![Dashboard cogwheel](/guides/images/users-guide/dashboardcogwheelde.png)

* Benennen Sie das von Ihnen erstellte Dashboard, das auch als Menüreiter angezeigt wird.

* Geben Sie den Standort des Dashboards in der Navigation an.

* Wählen Sie das Symbol, das neben dem Namen im Menü angezeigt wird.

* Wählen Sie die Sichtbarkeit: "Dashboard für alle Benutzer sichtbar", wenn das Dashboard für alle sichtbar ist ("global"), oder nur für eine begrenzte Anzahl von Benutzern.

* "Dashboard-Layout": Konfigurieren Sie das Layout Ihres Dashboards. Wählen Sie ein "Dashboard Theme", "Default Widget Header Style" und "Default Widget Margin". Danach können Sie Ihr aktuell ausgewähltes Layout im Vorschaufenster sehen.

![Create Dashboard](/guides/images/users-guide/dashboard-createde.png)

Klicken Sie auf "Speichern", um das Dashboard zu erstellen und zu öffnen. Solange es keine Widgets auf dem Dashboard gibt, sehen Sie eine "Widget"-Schaltfläche. Verwenden Sie diese Schaltfläche, um Ihr erstes Widget dem Dashboard hinzuzufügen.

### <a name="create-a-dashboard-for-all-devices-of-the-same-type"></a>Erstellen eines Dashboards für identische Geräte

Sie können ein Dashboard erstellen, das für alle identischen Geräte angezeigt wird. Um dies zu tun, erstellen Sie ein neues Dashboard wie oben beschrieben. Bevor Sie auf "Speichern" klicken, wählen Sie die Option "Dashboard anwenden an alle Geräte des Typs _type_". Der Text "_type_" wird durch den Typ des aktuell ausgewählten Gerätes ersetzt.

Dann sollte dieses Dashboard für alle identischen Geräte erscheinen. Änderungen an diesem Dashboard werden automatisch auf alle Dashboards angewendet.

> Sie können nur Widgets und Daten zum Dashboard für das Gerät selbst hinzufügen. Es ist nicht möglich, Daten von untergeordneten Geräten hinzuzufügen, da die Struktur dieser Geräte von Gerät zu Gerät unterschiedlich sein könnte.

### Hinzufügen von Berechtigungen zu einem Dashboard
 
Berechtigungen können nur einer bestimmten Benutzerrolle gewährt werden. Um dies zu tun, erstellen Sie ein neues Dashboard wie oben beschrieben oder editieren Sie ein Dashboard.

> Um ein Dashboard zu editieren, klicken Sie auf das Zahnrad-Symbol und wählen Sie "Dashboard editieren" aus.

Um Berechtigungen für bestimmte Benutzer zu erteilen, deaktivieren Sie "Dashboard für alle Benutzer sichtbar" und deaktivieren Sie "Dashboard an alle Geräte des Typs" _type_ "anwenden".

![Add permissions](/guides/images/users-guide/dashboardaddrightde.png)

Dann klicken Sie auf "Berechtigungen hinzufügen" und wählen Sie eine Gruppe aus dem Dropdown-Menü.

![Select group](/guides/images/users-guide/dashboardforgroupde.png)

Danach wählen Sie die gewünschte Berechtigung für die ausgewählte Gruppe aus.

![Select permission](/guides/images/users-guide/dashboardpermissionde.png)

> Berechtigungen können mehreren Gruppen gewährt werden.

### Hinzufügen eines Widget zu einem Dashboard

Um ein Widget zu einem Dashboard hinzuzufügen, stellen Sie sicher, dass das Dashboard sichtbar ist. Danach klicken Sie rechts oben auf das Zahnrad-Symbol. Wählen Sie "Hinzufügen eines Widgets zu einem Dashboard". Dies öffnet einen Dialog mit einer Auswahl von Widgets, die Sie dem Dashboard hinzufügen können.

![Add Widget](/guides/images/users-guide/widgetcogwheelde.png)

Bei der Auswahl eines Widget-Typs werden zusätzliche Eingabefelder für diesen Widget-Typ angezeigt. Weitere Informationen zu Widget-Paketen finden Sie [hier](#widget). Ähnlich wie bei den Dashboards können Sie den Widget-Stil anpassen. Der aktuell ausgewählte Stil ist in der Vorschau auf der rechten Seite zu sehen.

### <a name="Dashboard bearbeiten"></a>Dashboard bearbeiten

Sie können die Dashboard-Eigenschaften bearbeiten, indem Sie auf das Zahnrad-Symbol klicken und "Dashboard editieren" auswählen. Dies bringt Sie zu einen ähnlichen Dialog wie "Erstellen eines Dashboards". In diesem Dialog können den Namen, das Symbol, die Position, den Stil und die Berechtigungen des Dashboards bearbeitet werden.

![Edit Dashboard](/guides/images/users-guide/dashboardeditde.png)

Sie können die Widgets des Dashboards neu anordnen. Durch Drag & Drop der Kopfzeile des Widgets können Sie das Widget auf eine andere Position auf der Seite verschieben. Durch Drag & Drop der Pfeile in der unteren rechten Ecke eines Widgets können Sie ein Widget ändern. Durch Anklicken des Symbols in der rechten oberen Ecke des Widgets können Sie die Widget-Eigenschaften löschen oder editieren.

> Wenn das Dashboard gesperrt ist, können Widgets nicht neu geordnet werden. Um ein Dashboard zu sperren bzw. zu entsperren, klicken Sie rechts oben auf das Zahnrad und dann auf "Dashboard sperren" bzw. "Dashboard entsperren".

![dashboard lock](/guides/images/users-guide/dashboardlockde.png)

Auf einem Laptop erscheinen diese Symbole nur, wenn Sie mit der Maus über den Widget-Header fahren.

Die Bearbeitung auf Touch-Geräten wie Smartphones oder Tablets unterstützt nicht alle Funktionen. Um die Widget-Icons auf Touch-Geräten anzuzeigen, fahren Sie mit der Maus über den Widget-Header.

### Dashboard kopieren

Um ein Dashboard von einem Objekt in ein anderes zu kopieren, verwenden Sie das Zahnrad oben rechts und wählen Sie "Dashboard kopieren". Danach wählen Sie das Objekt aus, auf das das Dashboard angewendet werden soll, und klicken Sie auf "Dashboard einfügen", um das Dashboard einzufügen.

Eine alternative Möglichkeit, ein Dashboard zu kopieren, besteht darin, den "[Dashboard pro Typ](#create-a-dashboard-for-all-devices-of-the-same-type)"-Ansatz zu verwenden. Mit diesem Ansatz kopieren Sie das Dashboard von einem Objekt auf **alle** identischen Objekte.

### Dashboard löschen

Um ein Widget zu einem Dashboard hinzuzufügen, stellen Sie sicher, dass das Dashboard sichtbar ist. Das gleiche gilt beim Löschvorgang. Klicken Sie oben rechts auf das Zahnrad-Symbol. Wählen Sie "Dashboard löschen", um ein Dashboard zu löschen.

