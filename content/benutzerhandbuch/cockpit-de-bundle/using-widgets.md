---
weight: 50
title: Verwenden von Widgets in Dashboards und Berichten
layout: redirect
---

Widgets können Karten, Bilder, Graphen, Tabellen und andere grafische Darstellungen von Daten anzeigen. Widgets sind nützlich zum Verfolgen von Informationen, etwa bei Alarmen, Assets oder Anwendungen, oder zum Bereitstellen von Karten, Quick Links und anderem in Dashboards oder Berichten.

{{< c8y-admon-req title="Anforderungen" >}}
ROLLEN UND BERECHTIGUNGEN:

- Zum Anzeigen von Widgets innerhalb von Dashboards: LESEN-Berechtigung für Berechtigungstyp "Stammdaten" oder LESEN-Berechtigung für "Stammdaten" in den Stammdatenrollen
- Zum Bearbeiten eines Widgets: ADMIN-Berechtigung für Berechtigungstyp "Stammdaten" oder ÄNDERN-Berechtigung für "Stammdaten" in den Stammdatenrollen
- Zum Erstellen eines Widgets: ADMIN-Berechtigung für Berechtigungstyp "Stammdaten" oder ÄNDERN-Berechtigung für "Stammdaten" in den Stammdatenrollen
- Zum Löschen eines Widgets: ADMIN-Berechtigung für Berechtigungstyp "Stammdaten" oder ÄNDERN-Berechtigung für "Stammdaten" in den Stammdatenrollen

Einige Widgets erfordern zusätzliche Berechtigungen zum Visualisieren der in ihnen angezeigten Daten. So erfordert etwa das Alarme-Widget eine LESEN-Berechtigung für den Berechtigungstyp "Alarme", damit alle Alarme angezeigt werden können.
{{< /c8y-admon-req >}}

{{< product-c8y-iot >}} stellt vordefinierte Widget-Typen zur Verfügung, näheres siehe [Widgets-Sammlung](#widgets-collection).

<a name="adding-widgets"></a>

### So fügen Sie ein Widget zu einem Dashboard oder Bericht hinzu

1. Klicken Sie auf **Widget hinzufügen** in der oberen Menüleiste oder auf die Schaltfläche **Widget hinzufügen** auf der Hauptseite (nur verfügbar im Falle eines leeren Dashboards/Berichts).

2. Wählen Sie im Dialog **Widget hinzufügen** einen Widget-Typ.

3. Konfigurieren Sie als Nächstes das Widget. Je nach gewähltem Widget-Typ können unter **Konfiguration** verschiedene Parameter festgelegt werden. Nähere Informationen zu den einzelnen Widget-Typen finden Sie unter [Widgets-Sammlung](#widgets-collection).

4. Auf der Registerkarte **Design** können Sie den Stil für den Inhalt und die Kopfzeile des Widgets individuell anpassen. Dies erfolgt in gleicher Weise wie das Festlegen eines [Dashboard](#creating-dashboards)-Layouts.

        {{< c8y-admon-info >}}

    Die Kopfzeilenstile "Standard" und "Rand" können für alle Widgets verwendet werden, während "Overlay" und "Hidden" die Kopfzeile entfernen und nur für Widgets verwendet werden sollten, die von einer Vollbildanzeige profitieren, z. B. "Image" oder "Map". Für andere Widgets, wie "Alarmliste" oder "Datenpunkttabelle", sollten diese Kopfzeilenstile nicht verwendet werden.
    {{< /c8y-admon-info >}}

5. Klicken Sie auf **Speichern**, um das Widget zum Dashboard oder Bericht hinzuzufügen.

<a name="modifying-widgets"></a>

### Ändern von Widgets

Sie können die Anordnung von Widgets in einem Dashboard oder Bericht ändern. Durch Ziehen mit dem Mauszeiger können Sie ein Widget im Dashboard bewegen und an einer anderen Position ablegen.

Durch Ziehen der Pfeile in der unteren rechten Ecke des Widgets können Sie seine Größe verändern.

Klicken Sie auf das Zahnrad-Symbol in der oberen rechten Ecke eines Widgets und wählen Sie im Kontextmenü **Bearbeiten**, um die Eigenschaften eines Widgets zu bearbeiten.

Klicken Sie auf das Zahnrad-Symbol in der oberen rechten Ecke eines Widgets und wählen Sie im Kontextmenü **Löschen**, um ein Widget aus einem Dashboard oder Bericht zu entfernen.

Sie können Widgets nur bearbeiten, wenn das Dashboard bzw. der Bericht entsperrt ist. Verwenden Sie zum Sperren bzw. Entsperren den Umschalter mit dem Schloss-Symbol in der oberen Menüleiste.

{{< c8y-admon-info >}}
Auf Touch-Geräten wie Smartphones oder Tablets werden einige Funktionen nicht unterstützt.
{{< /c8y-admon-info >}}

<a name="target-assets"></a>
### Auswählen von Assets in Widgets

Im folgenden Abschnitt wird beschrieben, wie Sie in der Widget-Konfiguration [ein Top-Level-Asset auswählen](#add-asset), [Kindgeräte als Asset auswählen](#asset-groups) und [nach Assets suchen oder filtern](#asset-search) können.

<a name="add-asset"></a>
#### So fügen Sie einem neuen oder bestehenden Widget ein Asset hinzu

Aktivieren Sie auf der Registerkarte **Konfiguration** des Widget-Editors unter **Asset-Auswahl** die Kontrollkästchen der gewünschten Assets. Klicken Sie auf **Speichern**, um das Asset zum Widget hinzuzufügen.
Sie können ein einzelnes Gerät auswählen oder eine ganze Gruppe von Geräten, die durch ein Ordnersymbol gekennzeichnet ist. Nähere Informationen zum Auswählen von Kindgeräten finden Sie unter [So wählen Sie Kindgeräte innerhalb von Gruppen als Asset aus](#asset-groups).

Wenn Sie ein Asset eines Widgets bearbeiten möchten, öffnen Sie den Widget-Editor und klicken Sie auf **Löschen**. Dadurch wird die zuvor angezeigte Asset-Sammlung gelöscht. Wählen Sie das neue gewünschte Asset aus und klicken Sie auf **Speichern**.  

Allgemeine Anweisungen zum Hinzufügen oder Ändern von Widgets finden Sie unter [So fügen Sie ein Widget zu einem Dashboard oder Bericht hinzu](#adding-widgets) oder [Ändern von Widgets](#modifying-widgets).

<a name="asset-groups"></a>
#### So wählen Sie Kindgeräte als Asset aus

Wenn das Asset eine Gruppe oder ein Gerät mit Kindern ist, werden neben seinem Namen ein Ordnersymbol sowie ein Pfeil nach rechts angezeigt. Klicken Sie in der Liste auf die gewünschten Gruppe oder das gewünschte Gerät mit Kindern, um eine neue Ebene zu öffnen, auf der alle der Gruppe oder dem Gerät zugewiesenen Assets angezeigt werden. Wählen Sie das gewünschte Asset aus. Um zur vorherigen Ebene zurückzukehren, klicken Sie auf den Pfeil nach links.

![Select assets](/images/benutzerhandbuch/cockpit/cockpit-asset-selection.png)

Wenn Sie ein nicht zugewiesenes Gerät als Asset auswählen möchten, finden Sie die nicht zugewiesenen Geräte im Ordner **Nicht zugewiesene Geräte** auf der ersten Ebene der ausgewählten Gruppe.

{{< c8y-admon-info >}}
Sie können nicht den Ordner **Nicht zugewiesene Geräte** selbst auswählen. Jedes Gerät innerhalb dieses Ordners kann jedoch auf der nächsten Ebene ausgewählt werden. Klicken Sie auf **Nicht zugewiesene Geräte**, um die nächste Ebene mit allen nicht zugewiesenen Geräten zu öffnen. Klicken Sie auf das gewünschte Gerät, um es auszuwählen.
{{< /c8y-admon-info >}}


<a name="asset-search"></a>
#### So suchen und filtern Sie nach Assets

Zum schnellen Auffinden von Assets gibt es zwei Methoden:

1. Volltextsuche und
2. Filtern.

<a name="general-search"></a>
##### Volltextsuche

Auf der Registerkarte **Konfiguration** des Widget-Editors können Sie das Volltextsuche-Feld unter **Asset-Auswahl** verwenden.

Über das Volltextsuche-Feld können Sie Assets in der gesamten Hierarchie finden, doch dies erfordert exakte Übereinstimmungen, z. B. den gesamten Namen eines Assets.

Nachdem Sie das Asset ausgewählt haben, sehen Sie alle Kinder dieses Assets. Um zur übergeordneten Ebene zurückzukehren, klicken Sie auf das "X" im Suchfeld.

{{< c8y-admon-info >}}
Die Volltextsuche ist nur im Start-Dashboard und in den Bericht-Dashboards verfügbar.
{{< /c8y-admon-info >}}

Weitere Informationen zur Suchfunktionalität finden Sie unter [Erste Schritte > Eigenschaften und Funktionen der Benutzeroberfläche > Such- und Filterfunktionalität](/benutzerhandbuch/getting-started-de/#searching-and-filtering).

<a name="column-filter-asset"></a>
##### Filtern

Filtern ist eine weitere Methode zum Auffinden von Assets. Dabei werden jedoch nur Assets auf der aktuellen Ebene unter **Asset-Auswahl** gefiltert.

![Filtering](/images/benutzerhandbuch/cockpit/cockpit-asset-column-filter.png)

Weitere Informationen zur Filterfunktionalität finden Sie unter [Erste Schritte > Eigenschaften und Funktionen der Benutzeroberfläche > Such- und Filterfunktionalität](/benutzerhandbuch/getting-started-de/#searching-and-filtering).
