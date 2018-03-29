---
order: 20
title: Verwalten von Assets
layout: redirect
---
### <a name="connect"></a>Geräte verbinden

Um die Cockpit-Anwendung zu verwenden, müssen Sie IoT-Geräte anschließen. Geräte werden im Device Management angeschlossen. Wechseln Sie mit dem Anwendungswechsler rechts oben zum "Device Management" und wählen Sie dann "Registrierung".

Weitere Informationen finden Sie unter [Device Management](/guides/images/benutzerhandbuch/device-management-deutsch).

<img src="/guides/images/users-guide/appdeutsch.png" alt="Logout menu" style="max-width: 100%">

### <a name="asset"></a>Asset Management

Ein Asset repräsentiert ein Business-Objekt im Allgemeinen, wie ein Gebäude, eine Maschine, eine Produktionseinheit oder ein Auto.

Assets sind in Hierarchien organisiert. Beispielsweise könnte eine Energieüberwachungsanwendung die folgende Asset-Hierarchie aufweisen:

![image alt text](/guides/images/users-guide/image_2de.png)

Die Asset-Hierarchie besteht aus zwei Typen von Objekten:

* Gruppenobjekte: Diese Gruppen werden in der Cockpit-Anwendung erstellt und können einzelne Geräte oder andere Gruppen gruppieren.

* Geräteobjekte: Hierbei handelt es sich um Geräte, die mit der Asset-Hierarchie verknüpft sind.

In diesem Beispiel repräsentieren Gruppenobjekte einen Gebäudebestand. Geräteobjekte repräsentieren den Raumbestand. Die Gruppennamen und die Hierarchie können vom Benutzer individuell definiert werden. Die Hierarchie kann mehrere Ebenen haben, eine Regionsebene, Stadtebene, Straßenniveau, Gebäudeebene, Stockwerk und Raumebene. Ein Gerät kann Teil von mehreren und unterschiedlichen Hierarchien sein, zum Beispiel Teil der regionalen Hierarchie und Teil der Kundenhierarchie.

Einzelne Geräte werden nicht in der Cockpit-Anwendung verwaltet. Sie werden in der Device-Management-Anwendung verwaltet. Um ein Gerät in der Asset-Hierarchie zu positionieren, müssen Sie das Gerät der jeweiligen Gruppe zuordnen. Siehe Beschreibung [unten](#Gruppenzuweisung) für Details. 

### Asset-Hierarchie im Vergleich zur Gerätehierarchie

Cumulocity unterstützt zwei Arten von Hierarchien: eine Gerätehierarchie und eine Asset-Hierarchie. Die Gerätehierarchie verfolgt, wie Geräte mit Cumulocity kommunikativ verbunden sind. Die Asset-Hierarchie strukturiert die Assets, die über die M2M-Geräte fernüberwacht und gesteuert werden. Weitere Informationen hierzu finden Sie unter [Cumulocity's Domain Model](/guides/images/concepts/domain-model).

In der Cockpit-Anwendung konstruieren Sie Ihre Asset-Hierarchie, indem Sie Gruppenobjekte erstellen und Geräte in die Hierarchie einbinden. Die Asset-Hierarchie hängt von den verwendeten IoT-Geräten ab. Es gibt viele IoT-Geräte, aber diese beiden Typen sind sehr häufig:

* **Smart-Geräte** sind in sich geschlossene Geräte mit Sensoren, Aktoren und einem Kommunikationsmodul. Sie sind typischerweise mit einem einzigen Asset verbunden. Intelligente Geräte sind Tracker, Wetterstationen oder allgemeine "intelligente" Sensoren mit integriertem Kommunikationsmodul.

* **Gateway-Geräte** stellen die Kommunikation von anderen Geräten zu Cumulocity her, umfassen jedoch keine Sensoren oder Aktoren. Typische Gateway-Geräte sind Zigbee-, Modbus-, M-Bus- oder KNX-Gateways.

Im folgenden Abschnitt wird die Verwendung des Cockpit mit Smart Devices und Gateway-Geräten erläutert und erläutert, wie intelligente Geräte in die Asset-Hierarchie eingebunden sind:


![image alt text](/guides/images/users-guide/image_3de.png)

Smart Devices werden im Device Management (rechte Seite) als Top-Level-Geräte dargestellt. In der Cockpit-Anwendung können Sie intelligente Geräte in Gruppen organisieren, wie die Pfeile im obigen Diagramm angeben. 

Gateway-Geräte können die Cockpit-Anwendung so anwenden:

![image alt text](/guides/images/users-guide/image_4de.png)

Gateway-Geräte werden in der Geräteverwaltung als Geräte der obersten Ebene dargestellt. Die angeschlossenen Geräte (wie Zigbee-, Modbus- oder KNX-Geräte) werden als "Kindgeräte" (rechte Seite) angezeigt. Diese untergeordneten Geräte können in der Asset-Hierarchie wie oben dargestellt organisiert werden.

Die Asset-Hierarchie und die Gerätehierarchie sind autark: Während sich innerhalb der Device-Management-Anwendungen alle Kindgeräte unterhalb des Gateway-Geräts befinden, sind dieselben Kindgeräte in zwei verschiedenen Gebäuden in der Cockpit-Anwendung organisiert.

**Zusammenfassung:** Geräte können in der Device-Management-Anwendung oder in der Cockpit-Anwendung völlig unterschiedliche Hierarchien haben.

### Cockpit-Assets im Vergleich zu Business-Assets

Die Abbildung von Objekten in der Cockpit-Asset-Hierarchie ist eine virtuelle Hierarchie.
Wenn Sie LKWs innerhalb der Cumulocity-Plattform verwalten, wird jeder LKW über sein individuelles Tracking-Gerät dargestellt, das mit Cumulocity kommuniziert.

Beim Gebäudemanagement ist es am häufigsten, dass eine Gruppe von Sensoren innerhalb eines Gebäudes das Gebäude als eine Gruppe darstellt, die mit der Cumulocity-Plattform kommuniziert.

### Navigation durch die Assets

Der Navigator zeigt eine Hierarchie von Assets unter "Gruppen" (siehe Screenshot unten):

* Oben werden die "Top-Level"-Gruppen angezeigt.

* Beim Erweitern einer Gruppe werden alle ihre Kindobjekte angezeigt. Kindobjekte können weitere Gruppen oder Geräte der Gruppe zuordnen. Kindobjekte werden auch auf der Registerkarte "Sub-Assets" angezeigt.

![image alt text](/guides/images/users-guide/image_5de.png)

Wenn Sie ein Objekt in der Asset-Hierarchie auswählen, zeigt der rechte Teil der Anwendung weitere Details zum ausgewählten Objekt an:

![image alt text](/guides/images/users-guide/image_6de.png)

Die sichtbaren Register auf der rechten Seite des Navigators unterscheiden sich je nach Auswahl im Navigator. Die folgende Tabelle zeigt, welche Registerkarten auf der Basis der Auswahl im Navigator sichtbar sind:

|Name des Tab|Name Dashboard|Info|Alarme|Sub-assets|Standort|Daten-Explorer|
|:---|:---|:-----|:-----|:----------|:----------|:----------|
|Gruppe ausgewählt:|Ja, wenn konfiguriert|Ja|Nein|Ja|Nein|Ja, zeigt alle Datenpunkte der Kindgeräte|
|Gerät ausgewählt:|Ja, wenn konfiguriert|Ja|Ja|Nein|Ja|Ja, zeigt alle Datenpunkte der Kindgeräte|

Es können zusätzliche Registerkarten angezeigt werden, falls die Anwendung mit Plugins erweitert wurde. Siehe auch [Web SDK for plugins](/guides/images/web/introduction).

Wenn Sie ein Gateway-Gerät hinzufügen, werden die Kindgeräte nicht angezeigt. Um Kindgeräte anzuzeigen, müssen Sie sie dem zugehörigen Asset hinzufügen. Details, die sich auf die untergeordnete Hierarchie beziehen, sind in der Geräteverwaltungsanwendung sichtbar und bearbeitbar.

Um in der Asset-Hierarchie weiter zu navigieren, verwenden Sie den Navigator oder wählen Sie ein Objekt auf der Registerkarte "Sub-Asset" aus. Um in der Asset-Hierarchie nach oben zu navigieren, verwenden Sie den Eintrag in der Pfadnavigation unter dem Namen des Assets.

### Assets durchsuchen

Um nach Gruppen oder Geräten zu suchen, geben Sie den Namen der Gruppe oder des Geräts in das Suchfeld ein und klicken Sie auf "Enter". Sie können auf die Ergebnisse klicken. Die ausgewählte Gruppe bzw. das ausgewählte Gerät wird dann im Navigator links ausgewählt und auf der rechten Seite angezeigt.

### Gruppen hinzufügen

Um eine neue Top-Level-Gruppe hinzuzufügen, klicken Sie auf "+" im oberen Bereich der Anwendung und wählen Sie "Gruppe hinzufügen ...". Daraufhin erscheint der folgende Dialog:

![image alt text](/guides/images/users-guide/image_7de.png)

Dadurch wird eine neue Gruppe mit den ausgewählten zugewiesenen Geräten erstellt. Nach dem Klicken auf "Gruppe mit Geräten erstellen" wird die Gruppe im Navigator als oberstes Objekt angezeigt.

Um eine neue Gruppe als Kind eines vorhandenen Assets hinzuzufügen, klicken Sie auf die Schaltfläche "+ Gruppe hinzufügen" auf der Registerkarte "Sub-Assets".

![image alt text](/guides/images/users-guide/image_8de.png)

### <a name="Gruppenzuweisung"></a>Geräte Gruppen zuweisen

Vor dem Hinzufügen eines Geräts zur Asset-Hierarchie muss es mit Cumulocity verbunden sein. Verbinden Sie Geräte über das Device Management mit der Plattform. Genaues dazu finden Sie hier: [Manuell Geräte verbinden](/guides/images/benutzerhandbuch/device-management-deutsch#device-registration).

Um neu verbundene Geräte der Asset-Hierarchie zuzuordnen, markieren Sie die Gruppe, in der das Gerät erscheinen soll, klicken Sie auf "Sub-Assets" und klicken Sie auf die Schaltfläche "+ Gerät zuordnen".

Suchen Sie im folgenden Dialog nach Geräten und wählen Sie die zuzuordnenden Geräte (oder Kindgeräte) aus.

![image alt text](/guides/images/users-guide/image_9de.png)

### Gruppen löschen

Sie können eine Gruppe löschen, indem Sie den Mauszeiger über die Gruppe auf der Registerkarte "Sub-Assets" bewegen und dort belassen. Sie sehen ein rotes [X], das Sie klicken können, um die Gruppe zu löschen.

### Geräte trennen

Um ein Gerät von einer Gruppe zu trennen, wählen Sie die Gruppe im Navigator aus. In der Registerkarte "Sub-Assets" werden die untergeordneten Geräte angezeigt. Dort können Sie einzelnde Geräte auswählen und trennen. Klicken Sie auf die rote Schaltfläche [X].

Das Trennen eines Geräts bedeutet nicht, dass die Kindgeräte oder die zugehörigen Daten entfernt werden. Das Gerät wird nur aus seiner Position in der Asset-Hierarchie entfernt. Es kann danach anderen Gruppen zugeordnet werden.

### Gruppen editieren

Um den Namen der Gruppe zu bearbeiten, klicken Sie auf die Registerkarte "Info" und bearbeiten den Namen.


