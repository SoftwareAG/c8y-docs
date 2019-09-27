---
weight: 20
title: Verwalten von Assets
layout: redirect
---
### Einleitung

Assets repräsentieren ganz allgemein Geschäftsobjekte wie Gebäude, Maschinen, Produktionseinheiten oder Autos.

Assets sind in Hierarchien organisiert. Eine Anwendung zur Energieüberwachung kann beispielsweise die folgende Hierarchie aufweisen:

![image alt text](/images/benutzerhandbuch/cockpit-hierarchy.png)

Die Asset-Hierarchie besteht aus zwei Objekttypen:

* **Gruppen**: Objekte, die einzelne Geräte oder andere Gruppen gruppieren. Gruppen können sowohl in der Cockpit-Anwendung als auch in der Device-Management-Anwendung erstellt werden.

* **Geräte**: Geräte, die mit der Asset-Hierarchie verknüpft werden. Bevor Sie Geräte in der Cockpit-Anwendung verwenden können, müssen diese mit Cumulocity verbunden werden. Dies erfolgt in der Device Management-Anwendung. Nähere Informationen zum Verbinden von Geräten finde Sie im Abschnitt [Device Management](/guides/benutzerhandbuch/device-management).

In Beispiel oben repräsentieren die Gruppenobjekte einen Gebäudebestand und die Geräteobjekte die Räume. Die Namen und Hierarchien können individuell vom Benutzer festgelegt werden. Hierarchien können mehrere Ebenen haben wie etwa Ebenen für Region, Stadt, Straße, Gebäude, Etage oder Raum. Jedes Gerät kann mit mehreren und verschiedenen Hierarchien verknüpft sein, und etwa Teil einer regionalen Hierarchie sowie einer Kundenhierarchie sein. 

Um ein Gerät mit der Asset-Hierarchie zu verknüpfen, muss das Gerät einer Gruppe zugewiesen werden (siehe [Zuweisen von Geräten zu Gruppen](#assigning-devices). 

> **Info:** Einzelne Geräte werden nicht in der Cockpit-Anwendung, sondern in der Device Management-Anwendung verwaltet.

### <a name="hierarchies"></a>Asset-Hierarchie versus Gerätehierarchie

Cumulocity unterstützt zwei Hierarchietypen: die Gerätehierarchie und die
Asset-Hierarchie.

Die Gerätehierarchie bildet die Verknüpfung von Geräten mit Cumulocity aus Kommunikationssicht ab. Die Asset-Hierarchie strukturiert die Assets, die über die M2M-Geräte fernüberwacht und gesteuert werden. Nähere Informationen finden Sie unter [Cumulocity's Domain Model](/guides/concepts/domain-model) im Concepts guide.

In der Cockpit-Anwendung konstruieren Sie Ihre Asset-Hierarchie, indem Sie Gruppenobjekte erstellen und Geräte mit den Gruppen verknüpfen. 
Die Asset-Hierarchie hängt von den verwendeten IoT-Geräten ab. 

Es gibt viele verschiedene Typen von IoT-Geräten, wobei diese zwei Typen besonders häufig sind:

* **Smart-Geräte** sind eigenständige Geräte, die Sensoren, Aktoren und ein Kommunikationsmodul enthalten. Diese sind typischerweise mit einem einzelnen Asset verbunden. Smart-Geräte sind etwa Tracker, Wetterstationen oder ganz allgemein "intelligente" Sensoren mit eingebautem Kommunikationsmodul. 

* **Gateway-Geräte** errichten die Kommunikation von anderen Geräten zu Cumulocity, enthalten jedoch keine  Sensoren oder Aktoren. Typische Gateways sind etwa Zigbee, Modbus, M-Bus oder KNX-Gateways.

Der folgende Abschnitt beschreibt, wie Sie in der Cockpit-Anwendung mit Smart-Geräten und Gateway-Geräten arbeiten.

Das erste Beispiel zeigt, wie Smart-Geräte mit der Asset-Hierarchie verknüpft werden:

![image alt text](/images/benutzerhandbuch/cockpit-asset-hierarchy.png)

Smart-Geräte werden in der Device Management-Anwendung als Top-Level-Geräte dargestellt. In der Cockpit-Anwendung können Sie Smart-Geräte in Gruppen organisieren, wie die Pfeile in der Abbildung oben zeigen. 

Das zweite Beispiel zeigt, wie Gateway-Geräte in der Cockpit-Anwendung verwendet werden:

![image alt text](/images/benutzerhandbuch/cockpit-gateway-devices.png)

In der Device Management-Anwendung werden Gateway-Geräte als Top-Level-Geräte dargestellt. Die angeschlossenen Geräte (wie Zigbee-, Modbus- oder KNX-Geräte) werden als untergeordneten Geräte angezeigt. In der Cockpit-Anwendung können diese "Kindgeräte" wie in der Abbildung oben dargestellt in einer Asset-Hierarchie organisiert werden.

Wie die Beispiele zeigen, sind die Asset-Hierarchie und die Gerätehierarchie autark: Während sich innerhalb der Device Management-Anwendung alle Kindgeräte unterhalb des Gateway-Geräts befinden, sind dieselben Kindgeräte in zwei verschiedenen Gebäuden in der Cockpit-Anwendung organisiert.


### Cockpit-Assets versus Business-Assets

Die Abbildung von Objekten in der Cockpit-Asset-Hierarchie ist eine virtuelle Hierarchie.

Wenn Sie LKWs innerhalb der Cumulocity-Plattform verwalten, wird jeder LKW durch sein individuelles Tracking-Gerät, das mit Cumulocity kommuniziert, dargestellt.

Beim Gebäudemanagement ist es häufig so, dass eine Gruppe von Sensoren in einem Gebäude als eine Gruppe darstellt wird, die mit der Cumulocity-Plattform kommuniziert.


### Navigieren durch die Assets

In der Asset-Hierarchie unterscheidet Cumulocity zwischen Top-Level-Gruppen und untergeordneten Assets (Kind-Assets).

Im Navigator werden Top-Level-Gruppen im Menü **Gruppen** auf oberster Ebene angezeigt. Untergeordnete Assets werden darunter angezeigt oder in der Registerkarte **Kind-Assets** einer bestimmten Gruppe.

<img src="/images/benutzerhandbuch/cockpit-sub-assets.png" name="Kind-Assets" style="width:100%;"/>

Wenn Sie ein Objekt im Navigator auswählen, werden auf der rechten Seite entsprechende Informationen zum ausgewählten Objekt angezeigt.

<img src="/images/benutzerhandbuch/cockpit-info-tab.png" name="Info tab" style="width:100%;"/>

Wenn Sie ein Gateway-Gerät hinzufügen, werden die Kindgeräte nicht angezeigt. Um Kindgeräte anzuzeigen, müssen diese zum jeweiligen Asset hinzugefügt werden. Details zur untergeordneten Hierarchie können in der Device Management-Anwendung eingesehen und editiert werden.

Um in der Asset-Hierarchie weiter zu navigieren, verwenden Sie den Navigator oder wählen Sie ein Objekt in der Registerkarte **Kind-Assets** aus. Um in der Asset-Hierarchie nach oben zu navigieren, verwenden Sie den Eintrag in der Pfadnavigation unter dem Namen des Assets.


### Asset-Details

Für jedes Objekt gibt es verschiedene Registerkarten, abhängig vom Objekttypen: 

|Registerkarte|Beschreibung|Verfügbarkeit
|:---|:---|:---
|Info|Zeigt eine Liste von [Smart Rules](#smart-rules), die für dieses Objekt erstellt wurden.|Gruppe, Gerät
|Alarme|Zeigt Alarme für das Gerät. Nähere Informationen zu Alarmen finden Sie unter [Verwenden von Alarmen](/guides/benutzerhandbuch/device-management/#alarm-monitoring) im Abschnitt Device Management.|Gerät
|Kind-Assets|Zeigt die Kind-Assets einer Gruppe.|Gruppe
|Daten-Explorer|Zeigt alle Datenpunkte der Kinder, siehe auch [Visualisieren von Daten mit dem Daten-Explorer](#data-explorer).|Gruppe, Gerät
|Standort|Zeigt den aktuellen Standort des Geräts.|Gerät

Wenn für ein Gerät Dashboards erstellt wurden, werden diese ebenfalls als Registerkarten angezeigt. Weitere Informationen finden Sie unter [Verwenden von Dashboards](#dashboards).

Es können zusätzliche Registerkarten angezeigt werden, falls die Anwendung mit Plugins erweitert wurde. Siehe auch [Web SDK for plugins](/guides/web/introduction).

### <a name="creating-groups"></a>Erstellen von Gruppen

Führen Sie folgende Schritte aus, um eine neue Gruppe zu erstellen:

1. Klicken Sie die **Plus**-Schaltfläche rechts in der oberen Leiste und wählen Sie die Menüoption **Neue Gruppe**. <br><br>
<img src="/images/benutzerhandbuch/cockpit-create-group.png" name="Gruppe erstellen" style="width:50%;"/><br>
2. Geben Sie im folgenden Fenster einen eindeutigen Namen für die Gruppe ein.
3. Geben Sie im Feld **Gerätesuche** Suchkriterien für die Geräte ein, die Sie zur Gruppe hinzufügen möchten (z. B. "ublox"). Eine Liste mit passenden Geräten wird angezeigt.  
4. Wählen Sie die Geräte aus, die Sie hinzufügen möchten.
5. Klicken Sie **Gruppe mit [x] Gerät(en) erstellen**, um die Gruppe zu erstellen.

>**Info:** Eine Gruppe kann auch mit "0" Geräten erstellt werden.

Um eine neue Gruppe als Kind zu einer existierenden Gruppe hinzuzufügen, navigieren Sie zur entsprechenden Registerkarte **Kind-Assets** und klicken Sie  **Gruppe hinzufügen** in der oberen Menüleiste.

### <a name="assigning-devices"></a>Zuweisen von Geräten zu Gruppen

Bevor Sie ein Gerät zu einer Asset-Hierarchie hinzufügen können, muss das Gerät mit Cumulocity verbunden werden. Das Verbinden von Geräten mit der Plattform erfolgt in der Device Management-Anwendung. Weitere Informationen zum Verbinden von Geräten finden Sie unter [Device Management](/guides/users-guide/device-management).

Führen Sie die folgenden Schritte aus, um ein Gerät einer Gruppe zuzuweisen:

1. Wählen Sie die gewünschte Gruppe im Navigator und öffnen Sie die Registerkarte **Kind-Assets**. In der Registerkarte **Kind-Assets** werden alle Geräte, die der entsprechenden Gruppe zugewiesen sind, angezeigt.  
2. Klicken Sie **Gerät zuweisen** rechts in der oberen Menüleiste. Geben Sie im folgenden Fenster Suchkriterien für die Geräte ein, die Sie zur Gruppe hinzufügen möchten (z. B. "ublox"). Eine Liste mit passenden Geräten wird angezeigt.  
3. Wählen Sie die Geräte aus, die Sie hinzufügen möchten.
4. Klicken Sie **[x] Gerät(e) zuweisen**, um die ausgewählten Geräte zuzuweisen. 

Die Geräte werden als Kind-Assets in der Registerkarte **Kind-Assets** angezeigt.

<img src="/images/benutzerhandbuch/cockpit-assign-devices.png" name="Gerät zuweisen" style="width:50%;"/>

### Bearbeiten von Gruppen

Um den Namen einer Gruppe zu bearbeiten, navigieren Sie zur Registerkarte **Info** der entsprechenden Gruppe und klicken Sie "**Bearbeiten**" neben dem Namen. Geben Sie den gewünschten Namen ein sowie optional eine Anmerkung, die in der Registerkarte **Info** angezeigt wird. Klicken Sie **Änderungen speichern**, um Ihre Einstellungen zu speichern.

<img src="/images/benutzerhandbuch/cockpit-edit-groups.png" name="Gruppe bearbeiten" style="width:50%;"/>


### Löschen von Gruppen

Führen Sie folgende Schritte aus, um eine Top-Level-Gruppe aus dem Navigator zu löschen:

1. Klicken Sie **Gruppen** im Navigator. 
2. Klicken Sie auf das Menüsymbol der Gruppe, die Sie löschen möchten.
3. Klicken Sie im Kontextmenü **Löschen**.

<img src="/images/benutzerhandbuch/cockpit-sub-asset-contextmenu.png" name="Gruppe bearbeiten" style="width:50%;"/>

Führen Sie folgende Schritte aus, um eine Gruppe aus der Registerkarte **Kind-Assets** einer anderen Gruppe zu löschen:

1. Navigieren Sie zur Registerkarte **Kind-Assets** der entsprechenden Gruppe.
2. Klicken Sie auf das Menüsymbol der Gruppe, die Sie löschen möchten.
3. Klicken Sie im Kontextmenü **Löschen**.

### Aufheben der Zuordnung von Geräten

Führen Sie die folgenden Schritte aus, um die Zuordnung eines Geräts zu einer Gruppe aufzuheben:

1. Navigieren Sie zur Registerkarte **Kind-Assets** der entsprechenden Gruppe.
2. Klicken Sie auf das Menüsymbol des Geräts, für das Sie die Zuordnung aufheben möchten.
3. Klicken Sie im Kontextmenü **Zuordnung aufheben**.

<img src="/images/benutzerhandbuch/cockpit-sub-asset-contextmenu.png" name="Gruppe bearbeiten" style="width:50%;"/>

Wenn Sie die Zuordnung eines Geräts aufheben, wird das Gerät, seine Kindgeräte sowie zugehörige Daten nicht gelöscht. Das Gerät wird lediglich aus der Gruppe entfernt. Es kann jederzeit wieder zu dieser oder einer anderen Gruppe hinzugefügt werden. 
