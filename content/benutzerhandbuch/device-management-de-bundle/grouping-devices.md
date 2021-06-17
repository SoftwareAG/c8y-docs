---
weight: 30
title: Gruppieren von Geräten
layout: redirect
---

Sie können Geräte beliebig nach Ihren Bedürfnissen gruppieren. Ein Gerät kann sich in mehreren Gruppen befinden und Gruppen selbst können wiederum Teil von mehreren anderen Gruppen sein.

Cumulocity IoT unterscheidet zwischen Top-Level-Gruppen und untergeordneten Gruppen:

**Top-Level-Gruppen** werden im Menü **Gruppen** des Navigators auf oberster Ebene angezeigt. <br>**Untergeordnete Gruppen** dienen zur weiteren Unterteilung von Top-Level-Gruppen.

### Anzeigen von Gruppen

Um eine Liste aller Gruppen in Ihrem Konto anzuzeigen, klicken Sie auf **Gruppen** im Navigator.

![Groups list](/images/benutzerhandbuch/DeviceManagement/devmgmt-groups.png)

Für jede Gruppe wird der Name und die Anzahl der Kinder angezeigt.

Klicken Sie auf eine Gruppe, um Details dieser Gruppe anzuzeigen.

![Group info](/images/benutzerhandbuch/DeviceManagement/devmgmt-groups-info.png)

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

**Kind-Assets**

In der Registerkarte **Kind-Assets** werden alle Geräte angezeigt, die der Gruppe zugewiesen wurden. Für jedes Kind-Asset wird der Name und im Fall einer Gruppe die Anzahl der Kinder angezeigt.

![Subassets](/images/benutzerhandbuch/DeviceManagement/devmgmt-groups-subassets.png)

Siehe auch [So fügen Sie eine Gruppe hinzu](#add-group) und [So weisen Sie einer Gruppe ein Gerät zu](#assigning-devices).

**Bulk-Operationen**

In der Registerkarte **Bulk-Operationen** können Bulk-Operationen, die für die Gruppe erstellt wurden, verwaltet werden. Mit Bulk-Operationen können Sie eine Operation in einem Schritt für jedes Gerät in einer Gruppe ausführen. Weitere Informationen finden Sie unter [Bulk-Operationen](#bulk-operations) in "Überwachen und Steuern von Geräten".

> **Info:** Bulk-Operationen werden nach Datum geordnet, wobei die letzte Operation an erster Stelle erscheint.


### <a name="add-group"></a>So erstellen Sie eine neue Gruppe

1. Klicken Sie auf die Schaltfläche **Plus** rechts in der oberen Leiste und anschließend auf **Gruppe hinzufügen**.<br>
2. Geben Sie im darauf folgenden Dialog einen eindeutigen Namen für die Gruppe an.
3. Geben Sie im Suchfeld die Suchkriterien für die Geräte ein, die Sie zur Gruppe hinzufügen möchten (z. B. "ublox"). Eine Liste mit passenden Geräten wird angezeigt.
4. Wählen Sie die Geräte aus, die Sie hinzufügen möchten.
5. Klicken Sie auf **Gruppe mit # Gerät(en) erstellen**, um die neue Gruppe zu erstellen.

Die neue Gruppe wird der Gruppenliste hinzugefügt.

>**Info:** Eine Gruppe kann mit "0" Geräten erstellt werden.

Auf der Seite **Gruppen** können Sie auch eine neue Gruppe erstellen, in dem Sie in der oberen Menüleiste auf **Gruppe hinzufügen** klicken. Geben Sie im darauf folgenden Dialog einen Namen für die Gruppe an und klicken Sie auf **Gruppe hinzufügen**.

![Add empty group](/images/benutzerhandbuch/DeviceManagement/devmgmt-groups-add.png)

### So bearbeiten Sie eine Gruppe

1. Wählen Sie im Navigator eine Gruppe aus.
2. Klicken Sie auf **Bearbeiten** in der Registerkarte **Info**. Sie können den Namen der Gruppe bearbeiten sowie Benutzerberechtigungen für die Gruppe zuweisen.
Weitere Informationen zu den Berechtigungen finden Sie unter [Verwalten von Berechtigungen](/benutzerhandbuch/administration-de#managing-permissions) im Abschnitt "Administration".

### So löschen Sie eine Gruppe

Klicken Sie bei einem Geräteeintrag auf das Menüsymbol und anschließend auf **Löschen**.

### Verwalten von Geräten in Gruppen

#### <a name="assigning-devices"></a>So weisen Sie einer Gruppe Geräte zu

Geräte können Gruppen auf mehrere Arten zugewiesen werden.

**Aus der Gruppenperspektive**

Durch Ziehen und Ablegen können Sie im Navigator auf schnelle Weise Geräte zu Gruppen zuweisen, siehe [Umsortieren von Gruppen und Geräten](#restructuring-groups).  

Darüber hinaus können Sie Geräte auch durch folgende Schritte zuweisen:

1. Wählen Sie im Navigator eine Gruppe aus dem Menü **Gruppe** und öffnen Sie dann die Registerkarte **Kind-Assets**.
2. Klicken Sie auf **Geräte zuweisen** rechts in der oberen Menüleiste. Im darauf folgenden Dialog können Sie Suchkriterien für die Geräte eingeben, die Sie zu der Gruppe hinzufügen möchten (z. B. "ublox"). Eine Liste mit passenden Geräten wird angezeigt.
3. Wählen Sie die Geräte aus, die Sie hinzufügen möchten.
4. Klicken Sie auf **Gruppe mit # Gerät(en) erstellen**, um die Geräte der Gruppe zuzuweisen.

Die Geräte werden der ausgewählten Gruppe zugewiesen.

![Assign devices](/images/benutzerhandbuch/DeviceManagement/devmgmt-groups-assign.png)


**Aus der Geräteperspektive**

1. Wählen Sie ein Gerät aus der Geräteliste und öffnen Sie es.
2. Scrollen Sie in der Registerkarte **Info** zur Karte **Gruppenzuweisung**. Wählen Sie im Auswahlfeld die Gruppe aus, der Sie das Gerät zuweisen möchten. Sie können hier auch direkt einen Gruppennamen eingeben oder nur Teile eines Namens eingeben, um die Liste danach zu filtern und nur die passenden Gruppennamen anzuzeigen.
3. Klicken Sie auf **Zuweisen**.

Das Geräte wird der ausgewählten Gruppe zugewiesen.

Wenn Sie nach einer Gruppe anhand eines Namens suchen, der noch nicht existiert, wird die Schaltfläche **Neu** angezeigt, so dass Sie von hier aus eine neue Gruppe mit diesem Namen erstellen und ihr das Gerät zuweisen können.

>**Info:** Zum Erstellen einer neuen Gruppe muss der Benutzer über folgende Berechtigungen verfügen:
ROLE&#95;INVENTORY\_CREATE und ROLE&#95;INVENTORY\_ADMIN.

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-group-assignment-new.png" alt="new group">


#### So heben Sie die Zuweisung eines Geräts auf

Klicken Sie bei einem Geräteeintrag auf das Menüsymbol und anschließend auf **Zuweisung aufheben**.

#### So löschen Sie ein Gerät

Klicken Sie bei einem Geräteeintrag auf das Menüsymbol und anschließend auf **Löschen**.

Das Gerät wird dauerhaft gelöscht.

#### So zeigen Sie die Gerätedetails an

Klicken Sie bei einem Geräteeintrag auf das Menüsymbol und anschließend auf **Device Management**.

Die Gerätedetails für das jeweilige Gerät, die unter **Alle Geräte** in der Anwendung Device Management gespeichert sind, werden geöffnet.

### <a name="restructuring-groups"></a>Umsortieren von Gruppen und Geräten

Durch Ziehen und Ablegen können Sie Gruppen, Untergruppen und Geräte auf einfache Weise neu strukturieren.

#### So verschieben Sie eine Gruppe

1. Wählen Sie im Navigator eine Gruppe aus, die Sie zu einer andere Gruppe verschieben möchten.
2. Ziehen Sie sie zur gewünschten Gruppe und legen Sie sie dort ab.
3. Bestätigen Sie das Kommando im darauf folgenden Dialog.


#### So können Sie ein Gerät verschieben oder hinzufügen

1. Wählen Sie im Navigator die Gruppe oder das Gerät aus, die/das Sie zu einer anderen Gruppe verschieben oder dieser hinzufügen möchten.
2. Ziehen Sie sie zur gewünschten Gruppe und legen Sie sie dort ab.
3. Wählen Sie im darauf folgenden Dialog, ob das Gerät verschoben oder hinzugefügt werden soll.


### <a name="smart-groups"></a>Verwenden von dynamischen Gruppen

Dynamische Gruppen werden basierend auf Filterkriterien erstellt. Dieser Gruppentyp kann beispielsweise eingesetzt werden, um Bulk-Upgrades von Geräten eines bestimmten Typs auf eine neue Software- oder Firmware-Version durchzuführen.

![Smart groups filter](/images/benutzerhandbuch/DeviceManagement/devmgmt-groups-smartgroups-filter.png)

Beachten Sie, dass dynamische Gruppen nur in der Device Management-Anwendung verfügbar und in der Cockpit-Anwendung nicht sichtbar sind.

Dynamische Gruppen werden in der Geräteliste erstellt.

#### So erstellen Sie eine dynamische Gruppe

1. Klicken Sie auf **Alle Geräte** im Navigator, um die Geräteliste anzuzeigen.
2. Filtern Sie die Geräte in der Liste nach den gewünschten Kriterien. Nähere Information zum Filtern finden Sie unter [Filtern von Geräten](#filtering-devices).
3. Klicken Sie auf **Dynamische Gruppe erstellen** rechts in der oberen Menüleiste.
4. Geben Sie einen Namen für die Gruppe ein und klicken Sie auf **Erstellen**.

![Create smart groups](/images/benutzerhandbuch/DeviceManagement/devmgmt-groups-smartgroups-create.png)

Die neue Gruppe erscheint als Top-Level-Gruppe im Menü **Gruppe** im Navigator. Dynamische Gruppen werden durch ein kleines Zahnrad im Ordnersymbol gekennzeichnet.

![Smart groups icon](/images/benutzerhandbuch/DeviceManagement/devmgmt-groups-smartgroups-icon.png)

In der Registerkarte **Kind-Assets** können Sie Ihre Auswahl anpassen und die Filtereinstellungen ändern.

#### So löschen Sie eine dynamische Gruppe

Um eine dynamische Gruppe zu löschen, klicken Sie auf das Menüsymbol und anschließend auf **Löschen**.

![Delete smart groups](/images/benutzerhandbuch/DeviceManagement/devmgmt-groups-delete.png)

> **Wichtig:** Das Löschen einer dynamischen Gruppe ist irreversibel.
