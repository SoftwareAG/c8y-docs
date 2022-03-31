---
weight: 20
title: Verwalten von Assets
layout: redirect
---

<a name="assets"></a>
### Asset-Hierarchie

Assets repräsentieren ganz allgemein Geschäftsobjekte wie Gebäude, Maschinen, Produktionseinheiten oder Autos.

Assets sind in Hierarchien organisiert. Eine Anwendung zur Energieüberwachung kann beispielsweise die folgende Hierarchie aufweisen:

![image alt text](/images/benutzerhandbuch/cockpit/cockpit-groups-image1.png)

Die Asset-Hierarchie besteht aus zwei Objekttypen:

* **Gruppen**: Objekte, die einzelne Geräte oder andere Gruppen gruppieren. Gruppen können sowohl in der Cockpit-Anwendung als auch in der Device-Management-Anwendung erstellt werden.

* **Geräte**: Geräte, die mit der Asset-Hierarchie verknüpft werden. Bevor Sie Geräte in der Cockpit-Anwendung verwenden können, müssen diese mit {{< product-c8y-iot >}} verbunden werden. Dies erfolgt in der Device Management-Anwendung. Weitere Informationen zum Verbinden von Geräten finden Sie unter [Verbinden von Geräten](/benutzerhandbuch/device-management-de#connecting-devices) im Abschnitt "Device Management".

Im vorliegenden Beispiel repräsentieren die Gruppenobjekte einen Gebäudebestand. Die Geräteobjekte repräsentieren die Räume. Die Namen und Hierarchien können individuell vom Benutzer festgelegt werden. Hierarchien können mehrere Ebenen haben wie etwa Ebenen für Region, Stadt, Straße, Gebäude, Etage oder Raum. Jedes Gerät kann mit mehreren und verschiedenen Hierarchien verknüpft sein, und etwa Teil einer regionalen Hierarchie sowie einer Kundenhierarchie sein.

Um ein Gerät mit der Asset-Hierarchie zu verknüpfen, muss das Gerät einer Gruppe zugewiesen werden (siehe unten).

> **Info:** Einzelne Geräte werden nicht in der Cockpit-Anwendung verwaltet. Die Verwaltung erfolgt in der Device Management-Anwendung.

<a name="hierarchies"></a>
#### Asset-Hierarchie versus Gerätehierarchie

{{< product-c8y-iot >}} unterstützt zwei Hierarchietypen: die Gerätehierarchie und die
Asset-Hierarchie.


Die Gerätehierarchie bildet die Verknüpfung von Geräten mit {{< product-c8y-iot >}} aus Kommunikationssicht ab. Die Asset-Hierarchie strukturiert die Assets, die über die IoT-Geräte fernüberwacht und gesteuert werden. Nähere Informationen finden Sie unter [{{< product-c8y-iot >}}'s Domain Model](/concepts/domain-model) im *Concepts Guide*.


In der Cockpit-Anwendung konstruieren Sie Ihre Asset-Hierarchie in dem Sie Gruppenobjekte erstellen und Geräte mit den Gruppen verknüpfen. Die Asset-Hierarchie hängt von den verwendeten IoT-Geräten ab. Es gibt viele verschiedene Typen von IoT-Geräten, wobei diese zwei Typen besonders häufig sind:

* **Smart-Geräte** sind eigenständige Geräte, die Sensoren, Aktoren und ein Kommunikationsmodul enthalten. Diese sind typischerweise mit einem einzelnen Asset verbunden. Smart-Geräte sind etwa Tracker, Wetterstationen oder ganz allgemein "intelligente" Sensoren mit eingebautem Kommunikationsmodul.

* **Gateway-Geräte** errichten die Kommunikation von anderen Geräten zu {{< product-c8y-iot >}}, enthalten jedoch keine Sensoren oder Aktoren. Typische Gateways sind etwa Zigbee, Modbus, M-Bus oder KNX-Gateways.

Der folgende Abschnitt beschreibt, wie Sie in der Cockpit-Anwendung mit Smart-Geräten und Gateway-Geräten arbeiten.

Das erste Beispiel zeigt, wie Smart-Geräte mit der Asset-Hierarchie verknüpft werden:

![image alt text](/images/benutzerhandbuch/cockpit/cockpit-groups-image2.png)

Smart-Geräte werden in der Device Management-Anwendung als Top-Level-Geräte dargestellt. In der Cockpit-Anwendung können Sie Smart-Geräte in Gruppen organisieren, wie die Pfeile in der Abbildung oben zeigen.

Das zweite Beispiel zeigt, wie Gateway-Geräte in der Cockpit-Anwendung verwendet werden:

![image alt text](/images/benutzerhandbuch/cockpit/cockpit-groups-image3.png)

Gateway-Geräte werden in der Device Management-Anwendung ebenfalls als Top-Level-Geräte dargestellt. Die angeschlossenen Geräte (wie etwa Modbus- oder KNX-Geräte) werden als untergeordnete Geräte angezeigt. In der Cockpit-Anwendung können diese "Kindgeräte" wie in der Abbildung oben dargestellt in einer Asset-Hierarchie organisiert werden.

Wie die Beispiele zeigen, sind die Asset-Hierarchie und die Gerätehierarchie autark:
Während sich innerhalb der Device Management-Anwendung alle Kindgeräte unterhalb des Gateway-Geräts befinden, sind dieselben Kindgeräte in zwei verschiedenen Gebäuden in der Cockpit-Anwendung organisiert.

#### Cockpit-Assets versus Business-Assets

Die Abbildung von Objekten in der Cockpit-Asset-Hierarchie ist eine virtuelle Hierarchie.

Wenn Sie LKWs innerhalb der {{< product-c8y-iot >}}-Plattform verwalten, wird jeder LKW durch sein individuelles Tracking-Gerät, das mit {{< product-c8y-iot >}} kommuniziert, dargestellt.

Beim Gebäudemanagement ist es häufig so, dass eine Gruppe von Sensoren in einem Gebäude als eine Gruppe darstellt wird, die mit der {{< product-c8y-iot >}}-Plattform kommuniziert.

<a name="navigating"></a>
### Navigieren durch Assets

In der Asset-Hierarchie unterscheidet {{< product-c8y-iot >}} zwischen Top-Level-Gruppen und untergeordneten Assets (Kind-Assets). Kind-Assets können entweder andere Gruppen oder Geräte sein.

Im Navigator werden Top-Level-Gruppen im Menü **Gruppen** auf oberster Ebene angezeigt. Kind-Assets werden unterhalb ihrer Gruppe der höheren Ebene angezeigt.

Zudem werden Kind-Assets in der Registerkarte **Kind-Assets** der jeweiligen Gruppe aufgeführt, die angezeigt wird, wenn Sie im Navigator auf die Gruppe klicken.

<img src="/images/benutzerhandbuch/cockpit/cockpit-groups-subassets.png" name="Subassets"/>

>**Info:** Wenn Sie ein Gateway-Gerät hinzufügen, werden die Kindgeräte nicht angezeigt. Um Kindgeräte anzuzeigen, müssen diese zum jeweiligen Asset hinzugefügt werden. Details zur untergeordneten Hierarchie können in der Device Management-Anwendung eingesehen und editiert werden.

Verwenden Sie den Navigator, um durch die Asset-Hierarchie zu navigieren.

### Asset-Details

Je nach Asset-Typ (Gruppe oder Gerät) sind verschiedene Registerkarten mit detaillierten Informationen verfügbar.

Bei Gruppen werden die folgenden Registerkarten angezeigt:

* **Kind-Assets** - Zeigt Gruppendetails und alle Kind-Assets einer Gruppe, siehe auch [Device Management > Anzeigen von Geräten](/benutzerhandbuch/device-management-de/#viewing-devices).
* **Smart Rules** - Zeigt für die Gruppe festgelegte Smart Rules, siehe auch [Smart Rules](#smart-rules).
* **Daten-Explorer** - Zeigt alle Datenpunkte der Kinder. Weitere Informationen finden Sie unter [Visualisieren von Daten mit dem Daten-Explorer](#data-explorer).

Bei Geräten werden die folgenden Registerkarten angezeigt:

* **Info** - Zeigt für das Gerät festgelegte Smart Rules, siehe auch [Smart Rules](#smart-rules).
* **Alarme** - Zeigt Alarme für das Gerät an, siehe auch [Device Management > Verwenden von Alarmen](/benutzerhandbuch/device-management-de/#alarm-monitoring).
* **Daten-Explorer** - Zeigt alle Datenpunkte der Kinder. Weitere Informationen finden Sie unter [Visualisieren von Daten mit dem Daten-Explorer](#data-explorer).
* **Standort** - Zeigt den aktuellen Standort des Geräts (nur verfügbar mit `c8y_Position`).

Wenn für eine Gruppe oder ein Gerät Dashboards erstellt wurden, werden diese ebenfalls als Registerkarten angezeigt. Weitere Informationen finden Sie unter [Verwenden von Dashboards](#dashboards).

Es können zusätzliche Registerkarten angezeigt werden, falls die Anwendung mit Plugins erweitert wurde. Siehe auch [Web SDK for plugins](/web-sdk-for-plugins/overview/).

<a name="creating-groups"></a>
### Hinzufügen einer Gruppe

1. Klicken Sie auf **Gruppe hinzufügen** rechts in der oberen Menüleiste.
2. Geben Sie im darauf folgenden Dialog einen eindeutigen Gruppennamen und eine optionale Beschreibung ein und klicken Sie auf **Weiter**.
3. Wählen Sie in der Liste die hinzuzufügenden Geräte aus. Sie können Filter anwenden, um die Anzahl der angezeigten Geräte zu reduzieren.
4. Klicken Sie auf **Erstellen**, um die neue Gruppe zu erstellen.

Die neue Gruppe wird der Gruppenliste hinzugefügt.

>**Info:** Eine Gruppe kann mit "0" Geräten erstellt werden.

Um eine neue Gruppe als Kind zu einer existierenden Gruppe hinzuzufügen, navigieren Sie zur entsprechenden **Kind-Assets**-Registerkarte und klicken Sie auf **Gruppe hinzufügen** in der oberen Menüleiste.

<a name="assigning-devices"></a>
### Zuweisen von Geräten zu einer Gruppe

Bevor Sie ein Gerät zu einer Asset-Hierarchie hinzufügen können, muss das Gerät mit {{< product-c8y-iot >}} verbunden werden. Das Verbinden von Geräten mit der Plattform erfolgt in der Device Management-Anwendung. Nähere Informationen zum Verbinden von Geräten finde Sie im Abschnitt [Device Management](/benutzerhandbuch/device-management-de).

Führen Sie die folgenden Schritte aus, um einer Gruppe Geräte zuzuweisen:

1. Wählen Sie im Navigator eine Gruppe aus dem Menü **Gruppe** und öffnen Sie dann die Registerkarte **Kind-Assets**.
2. Klicken Sie auf **Geräte zuweisen** rechts in der oberen Menüleiste.
3. Wählen Sie in der Liste die hinzuzufügenden Geräte aus. Sie können Filter anwenden, um die Anzahl der angezeigten Geräte zu reduzieren.
4. Klicken Sie auf **Zuweisen**, um die ausgewählten Geräte zuzuweisen.

![Assign devices](/images/benutzerhandbuch/cockpit/cockpit-group-assign.png)

Die Geräte werden der ausgewählten Gruppe zugewiesen und als Kind-Assets in der Registerkarte **Kind-Assets** angezeigt.

<a name="edit-group"></a>
### Bearbeiten einer Gruppe

1. Wählen Sie im Navigator eine Gruppe aus.
2. In der Registerkarte **Kind-Assets** können Sie den Namen und die Beschreibung der Gruppe bearbeiten.

<a name="delete-group"></a>
### Löschen einer Gruppe

Um eine Gruppe entweder auf der obersten Ebene von der Seite **Gruppen** oder von der Registerkarte **Kind-Assets** einer anderen Gruppe zu löschen, bewegen Sie den Mauszeiger über den zu löschenden Eintrag und klicken Sie rechts auf das Symbol "Löschen".

Im darauf folgenden Dialogfeld können Sie festlegen, dass auch alle Geräte innerhalb des ausgewählten Assets und aller seiner Kind-Assets gelöscht werden sollen.

<a name="remove-device"></a>
### Entfernen eines Geräts aus einer Gruppe

1. Navigieren Sie zur Registerkarte **Kind-Assets** der entsprechenden Gruppe.
2. Bewegen Sie den Mauszeiger über das Gerät, das Sie entfernen möchten, und klicken Sie rechts auf das Entfernen-Symbol.

Wenn Sie die Zuordnung eines Geräts entfernen, werden das Gerät, seine Kindgeräte sowie zugehörige Daten nicht gelöscht. Das Gerät wird lediglich aus der Gruppe entfernt. Es kann jederzeit wieder zu dieser oder einer anderen Gruppe hinzugefügt werden.
