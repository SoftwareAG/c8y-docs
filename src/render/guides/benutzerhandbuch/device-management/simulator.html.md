---
order: 80
title: Simulatoren
layout: redirect
---

Mit dem Simulator in Cumulocity können alle Aspekte von IoT-Geräten simuliert werden:

* Einrichten eines simulierten Geräts oder eines Netzwerks von simulierten Geräten
* Bestimmen der Kommandos, die das Gerät verarbeiten kann
* Erstellen von Anweisungen basierend auf voreingestellten oder benutzerdefinierten Templates und Planen von Schritten
* Erstellen von bis zu 10 Geräten eines bestimmten Typs
* Erstellen von Nachrichten für Messwerte, Alarme, Ereignisse und Stammdaten 
* Anzeigen von Simulationsproblemen als Alarme

### Was ist ein Simulator?

Mit dem Simulator können Sie "künstliche" Geräte erstellen, die den gleichen Grad an Funktionalität aufweisen, wie verbundene Hardwaregeräte.

Ein Simulator verwendet eine Playliste, um Nachrichten zu simulieren, die das Gerät an die Cumulocity-Plattform sendet. Eine Playliste ist eine Reihe von Anweisungen, die der Simulator nacheinander ausführt. Wenn die letzte Anweisung erreicht ist, beginnt der Simulator wieder von vorne.

Eine Anweisung kann entweder eine Nachricht senden (Messwerte, Alarme, Ereignisse und Stammdaten) oder eine bestimmte Zeit warten. 

Eine Nachricht wird durch Auswählen eines Nachricht-Templates (z. B. Senden einer Temperatur) und Bereitstellen des entsprechenden Werts (z. B. 23,0 Grad) definiert. Es gibt viele vordefinierte Nachricht-Templates, etwa für das Senden eines Messwerts oder das Erstellen oder Aufheben eines Alarms. Diese Templates basieren auf statischen MQTT-Templates. Darüber hinaus können mit dem [SmartREST-Template-Editor](#smartrest-templates) eigene Nachricht-Templates erstellt werden. 

### Die Registerkarte Simulator

Klicken Sie **Simulator** im Menü **Geräte**, um die Seite **Simulator** zu öffnen. 

Allen Simulatoren, auf die Sie zugreifen können, werden hier angezeigt. Klicken Sie auf das Menüsymbol rechts oben in einer Simulatorkarte, um den Simulator zu bearbeiten, zu duplizieren oder zu löschen.

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_SimulatorCard.png" alt="Simulator card" style="max-width: 50%">

### Hinzufügen eines Simulators 

Um einen neuen Simulator zu erstellen, führen Sie folgende Schritte aus:

1. Klicken Sie **Neuer Simulator** recht in der oberen Menüleiste. 
2. Wählen Sie im folgenden Fenster aus der Auswahlliste im Feld **Voreinstellungen** einen Simulatortyp. Wählen Sie "Leerer Simulator", um einen eigenen Simulator zu erstellen. 
3. Geben Sie einen Namen für den Simulator ein. 
4. Wählen Sie die Anzahl der Instanzen für diesen Simulator (bis zu zehn).
3. Klicken Sie **Weiter**, um zum nächsten Dialog zu wechseln.

<img src="/guides/images/benutzerhandbuch/addsimde.png" alt="Simulator hinzufügen" style="max-width: 60%">

### Anweisungen

Nachdem Sie einen Simulator erstellt haben, können Sie Anweisungen hinzufügen, die festlegen, was Ihr Simulator tun soll. Anweisungen sind einzelne Aufgaben, die einer Playliste hinzugefügt werden, die der Simulator nacheinander ausführt. 

Anweisungen können auf der Registerkarte **Anweisungen** eines Simulators angezeigt und bearbeitet werden.

**Beispiele**

In den voreingestellten Simulatoren sind bereits Beispielanweisungen vorhanden. Der Simulator "Temperaturmesswert" beispielsweise enthält bereits die Schritte "Messwert erstellen" und "Warten". 

![Add Instructions Step 2](/guides/images/users-guide/addinstructions2.png)

Die Messwertanweisungen beziehen sich auf ein Fragment. Fragmente werden verwendet, um die Kapazitäten von Objekten zu bestimmen. Nähere Informationen zu Fragmenten finden Sie in der [Sensor Library ](/guides/reference/sensor-library/) im Reference Guide.

![Add Instructions Step 3](/guides/images/benutzerhandbuch/addinstructions3de.png)

Die Anweisung "Warten" erfordert einen einzelnen Wert für die Dauer des Wartens in Sekunden. 

![Add Instructions Step 4](/guides/images/benutzerhandbuch/addinstructions4de.png)

Der Bereich auf der rechten Seite ändert sich entsprechend des ausgewählten Anweisungstyps.


### Unterstützte Kommandos

in der Registerkarte **Unterstützte Kommandos** eines Simulators können bestimmte Kommandos wie Konfigurationen oder Software-/Firmware-Updates ein- oder abgeschaltet werden.

![Operations Off](/guides/images/benutzerhandbuch/supop1de.png)

![Operations On](/guides/images/benutzerhandbuch/supop2de.png)

Klicken Sie **Benutzerdefiniertes Kommando hinzufügen**, um eigene Kommandos zur Liste hinzuzufügen.

### Alarme für den Simulator

Die Registerkarte **Alarme** eines Simulators zeigt Alarme an, die den Simulator selbst betreffen (nicht das simulierte Gerät), d.h. Alarme für den Fall, dass der Simulator nicht korrekt arbeitet. Weitere Informationen zu Alarmen finden Sie unter [Arbeiten mit Alarmen](#alarm-monitoring). 

![Simulator Alarm](/guides/images/benutzerhandbuch/simalarmde.png)
