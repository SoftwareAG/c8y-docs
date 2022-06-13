---
layout: redirect
title: Verwenden von Simulatoren
weight: 90
---

Mit dem Simulator in {{< product-c8y-iot >}} können alle Aspekte von IoT-Geräten simuliert werden, wie:

* Einrichten eines simulierten Geräts oder eines Netzwerks von simulierten Geräten
* Bestimmen der Operationen, die ein Gerät verarbeiten kann
* Erstellen von Anweisungen basierend auf voreingestellten oder benutzerdefinierten Templates und Planen von Schritten
* Erstellen von bis zu zehn Geräten eines bestimmten Typs
* Erstellen von Nachrichten für Messwerte, Alarme, Ereignisse und Stammdaten
* Anzeigen von Simulationsproblemen als Alarme

### Allgemeines zu Simulatoren

Mit dem Simulator können Sie Geräte erstellen, die den gleichen Grad an Funktionalität simulieren wie verbundene Hardwaregeräte.

Ein Simulator verwendet eine Play-Liste, um Nachrichten zu simulieren, die das Gerät an die {{< product-c8y-iot >}}-Plattform sendet. Eine Play-Liste ist eine Reihe von Anweisungen, die der Simulator nacheinander ausführt. Wenn die letzte Anweisung erreicht ist, beginnt der Simulator wieder von vorne.

Eine Anweisung kann entweder eine Nachricht senden (Messwerte, Alarme, Ereignisse und Stammdaten) oder eine bestimmte Zeit warten.

Eine Nachricht wird durch Auswählen eines Nachricht-Templates (z. B. Senden einer Temperatur) und Bereitstellen des entsprechenden Werts (z. B. 23,0 Grad) definiert. Es gibt viele vordefinierte Nachricht-Templates, z. B. für das Senden eines Messwerts oder das Erstellen oder Aufheben eines Alarms. Diese Templates basieren auf statischen MQTT-Templates. Darüber hinaus können mit dem [SmartREST-Template-Editor](#smartrest-templates) eigene Nachricht-Templates erstellt werden.

### So zeigen Sie Simulatoren an

Klicken Sie auf **Simulatoren** im Menü **Geräte** des Navigators, um die Seite **Simulatoren** zu öffnen.

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-simulator.png" alt="Simulator page">

Alle Simulatoren, auf die Sie zugreifen können, werden hier angezeigt.

### So erstellen Sie einen Simulator

1. Klicken Sie auf **Simulator hinzufügen** rechts in der oberen Menüleiste.
2. Wählen Sie im darauf folgenden Dialog aus der Auswahlliste im Feld **Voreinstellungen** einen Simulatortypen. Wählen Sie "Leerer Simulator", um einen eigenen Simulator zu erstellen.
3. Geben Sie einen Namen für den Simulator ein.
4. Wählen Sie die Anzahl der Instanzen für diesen Simulator (bis zu zehn).
5. Klicken Sie auf **Erstellen**.

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-simulator-add.png" alt="Create simulator">

Der Simulator wird erstellt und der Liste hinzugefügt.

### So bearbeiten Sie einen Simulator

1. Klicken Sie auf das Menüsymbol rechts oben in einer Simulatorkarte und anschließend auf **Bearbeiten** oder klicken Sie einfach auf die Simulatorkarte.
2. Nehmen Sie im darauf folgenden Dialog die gewünschten Änderungen vor.
3. Klicken Sie auf **Speichern**, um Ihre Änderungen anzuwenden.

### So duplizieren Sie einen Simulator

1. Klicken Sie auf das Menüsymbol rechts oben in der Simulatorkarte und anschließend auf **Duplizieren**.
2. Geben Sie im darauf folgenden Dialog einen Namen für den neuen Simulator ein.
3. Klicken Sie auf **Duplizieren**.

Der neue Simulator wird der Liste hinzugefügt.

### So löschen Sie einen Simulator

1. Klicken Sie auf das Menüsymbol rechts oben in der Simulatorkarte und anschließend auf **Löschen**.
2. Bestätigen Sie das Löschen des Simulators im darauf folgenden Dialog.
3. Klicken Sie auf **Speichern**.

Der Simulator wird aus der Liste gelöscht.

### Anweisungen

Für jeden Simulator können Sie Anweisungen erstellen, die angeben, was der Simulator tun soll. Anweisungen sind einzelne Aufgaben, die einer Play-Liste hinzugefügt und vom Simulator nacheinander ausführt werden.

Anweisungen können auf der Registerkarte **Anweisungen** eines Simulators angezeigt und bearbeitet werden.

![Add Instructions](/images/benutzerhandbuch/DeviceManagement/devmgmt-simulator-instructions.png)

**Beispiele**

Die Simulator-Voreinstellungen enthalten bereits Beispielanweisungen. Beispielsweise enthält der Simulator "Temperaturmesswerte" Anweisungen für die Schritte "Messwert erstellen" und "Warten", siehe Abbildung oben.

Der Bereich auf der rechten Seite ändert sich entsprechend des ausgewählten Anweisungstyps.

![Fragment](/images/benutzerhandbuch/DeviceManagement/devmgmt-simulator-fragment.png)

Die Messwertanweisungen beziehen sich auf ein Fragment. Fragmente werden verwendet, um die Kapazitäten von Objekten zu bestimmen. Nähere Informationen zu Fragmenten finden Sie in der [Sensor Library](/reference/sensor-library/) im *Reference Guide*.

Die Anweisung "Warten" erfordert einen einzelnen Wert für die Dauer des Wartens in Sekunden.

![Sleep](/images/benutzerhandbuch/DeviceManagement/devmgmt-simulator-sleep.png)

#### So fügen Sie eine Anweisung hinzu

1. Klicken Sie auf **Anweisung hinzufügen**, um dem Simulator eine neue Anweisung hinzuzufügen.
2. Wählen Sie im darauf folgenden Dialog eine Nachricht aus der Auswahlliste.
3. Legen Sie je nach Typ der Nachricht die erforderlichen Parameter fest.
3. Klicken Sie auf **Speichern**.

Die neue Anweisung wird dem Simulator hinzugefügt.

#### So fügen Sie eine Wartezeit hinzu

1. Klicken Sie auf **Wartezeit hinzufügen**, um dem Simulator eine neue Warteanweisung hinzuzufügen.
3. Legen Sie im darauf folgenden Dialog die Dauer fest.
3. Klicken Sie auf **Speichern**.

Die neue Warteanweisung wird dem Simulator hinzugefügt.

#### So löschen Sie eine Anweisung

Bewegen Sie den Mauszeiger über die Anweisung oder die Wartezeit, die Sie entfernen möchten, und klicken Sie auf das Löschen-Symbol.

Die Anweisung wird aus dem Simulator entfernt.

### Unterstützte Operationen

In der Registerkarte **Unterstützte Operationen** eines Simulators finden Sie spezielle Operationen, etwa für Konfigurationen oder für Software-/Firmware-Updates.

![Supported operations](/images/benutzerhandbuch/DeviceManagement/devmgmt-simulator-supported-operations.png)

Klicken Sie auf den Umschalter, um die jeweilige Operation ein- oder auszuschalten.

#### So fügen Sie eine benutzerdefinierte Operation hinzu

1. Klicken Sie auf **Eigene Operation hinzufügen**, um eine eigene Operation festzulegen.
2. Geben Sie im darauf folgenden Dialog den Typ des benutzerdefinierten Operationen an, der vom Simulator unterstützt werden soll.
3. Klicken Sie auf **Hinzufügen**.

Die benutzerdefinierte Operation wird der Operationsliste hinzugefügt.

### Alarme für den Simulator

Die Registerkarte **Alarme** eines Simulators zeigt Alarme an, die den Simulator selbst und nicht das simulierte Gerät betreffen, d. h. Alarme für den Fall, dass der Simulator nicht korrekt arbeitet. Informationen zu Alarmen finden Sie unter [Verwenden von Alarmen](/benutzerhandbuch/device-management-de/#alarm-monitoring).

![Alarms](/images/benutzerhandbuch/DeviceManagement/devmgmt-simulator-alarm.png)