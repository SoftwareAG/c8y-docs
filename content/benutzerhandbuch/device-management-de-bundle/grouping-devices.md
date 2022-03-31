---
layout: redirect
title: Gruppieren von Geräten
weight: 30
---

Sie können Geräte nach Ihren Bedürfnissen gruppieren. Ein Gerät kann sich in mehreren Gruppen befinden und Gruppen selbst können wiederum Teil von mehreren anderen Gruppen sein.

{{< product-c8y-iot >}} unterscheidet zwischen Top-Level-Gruppen und untergeordneten Gruppen:

* **Top-Level-Gruppen** werden im Menü **Gruppen** des Navigators auf oberster Ebene angezeigt.
* **Untergeordnete Gruppen** können zur weiteren Unterteilung von Top-Level-Gruppen verwendet werden.

<a name="viewing-groups"></a>
### Anzeigen von Gruppen

Klicken Sie im Navigator auf **Gruppen**, um alle Gruppen in einem Listenformat anzuzeigen.

![Groups list](/images/benutzerhandbuch/DeviceManagement/devmgmt-groups.png)

Zu jeder Gruppe werden verschiedene Informationen wie Typ und Name bereitgestellt. Klicken Sie rechts auf **Spalten konfigurieren**, um Spalten hinzuzufügen oder zu entfernen und die Ansicht nach Ihren Wünschen anzupassen. Siehe auch [Anzeigen von Geräten > Konfigurieren von Spalten](/benutzerhandbuch/device-management-de/#configuring-columns).

Um die Gruppen nach bestimmten Kriterien zu filtern, bewegen Sie den Mauszeiger über die Spaltenüberschriften und klicken Sie auf das entsprechende Filtersymbol, siehe Screenshot unten. Filterung ist jedoch nicht für die Hauptgruppenspalte verfügbar. Die Filteroption ist nur in der Untergruppenspalte verfügbar.

 ![Filter](/images/benutzerhandbuch/DeviceManagement/devmgmt-group-filter.png)

Siehe auch [Anzeigen von Geräten > Filtern von Geräten](/benutzerhandbuch/device-management-de/#filtering-devices).

Beachten Sie, dass diese Funktion nur einen temporären Filter erzeugt. Für permanente Filter können Sie die Funktion [Dynamische Gruppe](#smart-groups) verwenden.  

Klicken Sie auf eine Gruppe, um Details dieser Gruppe anzuzeigen. Standardmäßig wird die Registerkarte **Kind-Assets** angezeigt.

![Subassets](/images/benutzerhandbuch/DeviceManagement/devmgmt-group-details.png)

<a name="subassets-tab"></a>
**Registerkarte "Kind-Assets"**

Oben in der Registerkarte **Kind-Assets** werden Name und Beschreibung der Gruppe angezeigt (bearbeitbar), gefolgt von der Information, wann die Gruppe erstellt und zuletzt aktualisiert wurde.

Darunter werden alle der Gruppe zugewiesenen Assets aufgelistet. Zu jedem Asset werden verschiedene Informationen wie Typ und Name angezeigt. Wie bei der Liste der Top-Level-Gruppen können Sie auch hier Spalten hinzufügen oder entfernen und die Liste individuell anpassen oder Filter anwenden, um die Liste nach bestimmten Kriterien zu filtern.

Darüber hinaus können Sie Geräte zuordnen, siehe [So ordnen Sie einer Gruppe ein Gerät zu](#assigning-devices).

**Registerkarte Info**

In der Registerkarte **Info** werden folgende Informationen angezeigt:

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup><thead>
<tr>
<th align="left">Karte</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Anmerkungen</td>
<td align="left">Enthält optionale Anmerkungen, die über aktuelle Aktivitäten informieren. Anmerkungen können normalerweise nur vom Administrator bearbeitet werden. Um eine Anmerkung hinzuzufügen oder zu bearbeiten, klicken Sie auf <strong>Bearbeiten</strong>, geben Sie eine neue Anmerkung oder Änderungen im Textfeld ein und bestätigen Sie Ihre Eingaben, indem Sie auf das grüne Häkchen rechts vom Textfeld klicken.</td>
</tr>
<tr>
<td align="left">Gruppendaten</td>
<td align="left">Editierbare Informationen zur Gruppe (Name, Beschreibung).</td>
</tr>
<tr>
<td align="left">Aktive kritische Alarme</td>
<td align="left">Aktive kritische Alarme für die Geräte in der Gruppe.</td>
</tr>
</tbody>
</table>


**Bulk-Operationen**

In der Registerkarte **Bulk-Operationen** können Bulk-Operationen, die für die Gruppe erstellt wurden, verwaltet werden. Mit Bulk-Operationen können Sie eine Operation in einem Schritt für jedes Gerät in einer Gruppe ausführen. Weitere Informationen finden Sie unter [Bulk-Operationen](#bulk-operations) in "Überwachen und Steuern von Geräten".

> **Info:** Bulk-Operationen werden nach Datum geordnet, wobei die letzte Operation an erster Stelle erscheint.

<a name="add-group"></a>
### So fügen Sie eine Gruppe hinzu

1. Klicken Sie auf **Gruppe hinzufügen** rechts in der oberen Menüleiste.
2. Geben Sie im darauf folgenden Dialog einen eindeutigen Gruppennamen und eine optionale Beschreibung ein und klicken Sie auf **Weiter**.
3. Wählen Sie in der Liste die hinzuzufügenden Geräte aus. Sie können Filter anwenden, um die Anzahl der angezeigten Geräte zu reduzieren.
4. Klicken Sie auf **Erstellen**, um die neue Gruppe zu erstellen.

Die neue Gruppe wird der Gruppenliste hinzugefügt.

>**Info:** Eine Gruppe kann mit "0" Geräten erstellt werden.

Um eine neue Gruppe als Kind einer existierenden Gruppe hinzuzufügen, navigieren Sie zur entsprechenden **Kind-Assets**-Registerkarte und klicken Sie auf **Gruppe hinzufügen** in der oberen Menüleiste.

### So bearbeiten Sie eine Gruppe

1. Wählen Sie im Navigator eine Gruppe aus.
2. In der Registerkarte **Kind-Assets** können Sie den Namen und die Beschreibung der Gruppe bearbeiten. Wechseln Sie zur Registerkarte **Info**, wenn Sie die Anmerkungen bearbeiten möchten.

Weitere Informationen zu den Berechtigungen finden Sie unter [Verwalten von Berechtigungen](/benutzerhandbuch/administration-de#managing-permissions) im Abschnitt "Administration".

### So löschen Sie eine Gruppe

Bewegen Sie den Mauszeiger über den Eintrag, den Sie löschen möchten, und klicken Sie rechts auf das Löschen-Symbol.

### Verwalten von Geräten in Gruppen

<a name="assigning-devices"></a>
#### So weisen Sie einer Gruppe Geräte zu

Geräte können Gruppen auf mehrere Arten zugewiesen werden.

**Aus der Gruppenperspektive**

Durch Ziehen und Ablegen können Sie im Navigator auf schnelle Weise Geräte zu Gruppen zuweisen, siehe [Umsortieren von Gruppen und Geräten](#restructuring-groups).  

Darüber hinaus können Sie Geräte auch durch folgende Schritte zuweisen:

1. Wählen Sie im Navigator eine Gruppe aus dem Menü **Gruppe** und öffnen Sie dann die Registerkarte **Kind-Assets**.
2. Klicken Sie auf **Geräte zuweisen** rechts in der oberen Menüleiste.
3. Wählen Sie in der Liste die hinzuzufügenden Geräte aus. Sie können Filter anwenden, um die Anzahl der angezeigten Geräte zu reduzieren.
4. Klicken Sie auf **Zuweisen**, um die ausgewählten Geräte zuzuweisen.

![Assign devices](/images/benutzerhandbuch/DeviceManagement/devmgmt-group-assign.png)

Die Geräte werden der ausgewählten Gruppe zugewiesen und als Kind-Assets in der Registerkarte **Kind-Assets** angezeigt.


**Aus der Geräteperspektive**

1. Wählen Sie ein Gerät aus der Geräteliste und öffnen Sie es.
2. Scrollen Sie in der Registerkarte **Info** zur Karte **Gruppenzuweisung**. Wählen Sie im Auswahlfeld die Gruppe aus, der Sie das Gerät zuweisen möchten. Sie können hier auch direkt einen Gruppennamen eingeben oder nur Teile eines Namens eingeben, um die Liste danach zu filtern und nur die passenden Gruppennamen anzuzeigen.
3. Klicken Sie auf **Zuweisen**.

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-group-assignment-new.png" alt="new group">

<br>

Das Geräte wird der ausgewählten Gruppe zugewiesen.

Wenn Sie nach einer Gruppe anhand eines Namens suchen, der noch nicht existiert, wird die Schaltfläche **Neu** angezeigt, so dass Sie von hier aus eine neue Gruppe mit diesem Namen erstellen und ihr das Gerät zuweisen können.

>**Info:** Zum Erstellen einer neuen Gruppe muss der Benutzer über folgende Berechtigungen verfügen:
ROLE&#95;INVENTORY\_CREATE und ROLE&#95;INVENTORY\_ADMIN.



#### So heben Sie die Zuweisung eines Geräts auf

Bewegen Sie den Mauszeiger über das Gerät, dessen Zuweisung Sie aufheben möchten, und klicken Sie rechts auf das Symbol "Zuweisung aufheben".

Wenn Sie die Zuordnung eines Geräts aufheben, werden das Gerät, seine Kindgeräte sowie zugehörige Daten nicht gelöscht. Das Gerät wird nur aus dieser Gruppe entfernt.

#### So löschen Sie ein Gerät

Bewegen Sie den Mauszeiger über das Gerät, das Sie löschen möchten, und klicken Sie rechts auf das Löschen-Symbol.

Das Gerät wird dauerhaft gelöscht.

#### So zeigen Sie die Gerätedetails an

Um die Details eines bestimmten Geräts anzuzeigen, klicken Sie auf dessen Namen.

Die entsprechenden Gerätedetails werden angezeigt.

<a name="restructuring-groups"></a>
### Umsortieren von Gruppen und Geräten

Durch Ziehen und Ablegen können Sie Gruppen, Untergruppen und Geräte auf einfache Weise neu strukturieren.

#### So verschieben Sie eine Gruppe

1. Wählen Sie im Navigator eine Gruppe aus, die Sie zu einer andere Gruppe verschieben möchten.
2. Ziehen Sie sie zur gewünschten Gruppe und legen Sie sie dort ab.
3. Bestätigen Sie die Operation im darauf folgenden Dialog.


#### So können Sie ein Gerät verschieben oder hinzufügen

1. Wählen Sie im Navigator die Gruppe oder das Gerät aus, die/das Sie zu einer anderen Gruppe verschieben oder dieser hinzufügen möchten.
2. Ziehen Sie sie zur gewünschten Gruppe und legen Sie sie dort ab.
3. Wählen Sie im darauf folgenden Dialog, ob das Gerät verschoben oder hinzugefügt werden soll.

<a name="smart-groups"></a>
### Verwenden von dynamischen Gruppen

Dynamische Gruppen werden basierend auf Filterkriterien erstellt. Dieser Gruppentyp kann beispielsweise eingesetzt werden, um Bulk-Upgrades von Geräten eines bestimmten Typs auf eine neue Software- oder Firmware-Version durchzuführen.

>**Info:** Dynamische Gruppen sind nur in der Device Management-Anwendung verfügbar und in der Cockpit-Anwendung nicht sichtbar.

Dynamische Gruppen werden in der Geräteliste erstellt.

#### So erstellen Sie eine dynamische Gruppe

1. Klicken Sie auf **Alle Geräte** im Navigator, um die Geräteliste anzuzeigen.
2. Filtern Sie die Geräte in der Liste nach den gewünschten Kriterien. Nähere Information zum Filtern finden Sie unter [Anzeigen von Geräten > So filtern Sie Geräte](#filtering-devices).
3. Klicken Sie auf **Dynamische Gruppe erstellen** rechts in der oberen Menüleiste.
4. Geben Sie einen Namen für die Gruppe ein und klicken Sie auf **Erstellen**.

Die neue Gruppe erscheint als Top-Level-Gruppe im Menü **Gruppe** im Navigator. Dynamische Gruppen werden durch ein kleines Zahnrad im Ordnersymbol gekennzeichnet.

![Smart groups icon](/images/benutzerhandbuch/DeviceManagement/devmgmt-smartgroups-icon.png)

Unterhalb des Namens und der Beschreibung der dynamischen Gruppe sehen Sie die Filterkriterien, die beim Erstellen der dynamischen Gruppe angewendet wurden. Sie können die Filtereinstellungen hier ändern und Ihre Auswahl anpassen.

![Smart groups icon](/images/benutzerhandbuch/DeviceManagement/devmgmt-groups-smartgroups-filter.png)


#### So löschen Sie eine dynamische Gruppe

Bewegen Sie den Mauszeiger über den Eintrag, den Sie löschen möchten, und klicken Sie rechts auf das Löschen-Symbol.

> **Wichtig:** Das Löschen einer dynamischen Gruppe ist irreversibel.