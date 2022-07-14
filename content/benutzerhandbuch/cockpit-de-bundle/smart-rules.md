---
layout: redirect
title: Smart Rules
weight: 80
---

{{< product-c8y-iot >}} enthält eine Regel-Engine, um Daten in Echtzeit zu analysieren und Aktionen basierend auf Daten auszuführen. Diese Regeln werden in einer Skriptsprache erstellt und in der ["Administration"-Anwendung](/benutzerhandbuch/administration-de) verwaltet.

Zum einfachen Erstellen von Regeln enthält die Cockpit-Anwendung einen "Smart Rule Builder". Mit dem Smart Rule Builder können Regeln aus Templates erstellt werden.

>**Info:** Smart Rules sind nur sichtbar, wenn der Mandant die Smart Rule-Anwendung abonniert hat. Um Smart Rules verwalten zu können, benötigt der Benutzer die Berechtigung zum Erstellen von Stammdaten sowie entweder die Berechtigung "Smart rule" oder "CEP management".

Smart Rules werden parametrisiert. Es gibt zwei Quellen für Parameter:

* **Regelparameter** werden vom Benutzer beim Erstellen einer Smart Rule aus einem Template bereitgestellt. Beispiele sind E-Mail-Adressen und Alarmtexte.
* **Objektparameter** werden in der Gruppe oder dem Gerät gespeichert. Diese Parameter können auch nach der Erstellung der Smart Rule bearbeitet werden. Ein Beispiel sind Min- und Max-Werte für Schwellenwerte.

Es gibt zwei Typen von Smart Rules:

* **Globale Smart Rules**

  Globale Smart Rules werden in einem globalen Kontext erstellt (**Smart Rules**-Seite, Alarme, Daten-Explorer und mehr).

  In der Seite "Smart Rules" werden nur die globalen Smart Rules angezeigt. Die folgenden Berechtigungen sind erforderlich, um globale Smart Rules zu sehen:

  * Smartrule = LESEN-Berechtigung
  * Smartrule = ADMIN-Berechtigung
  * CEP management = ADMIN-Berechtigung
<br>
<br>
* **Lokale Smart Rules**

  Lokale Smart Rules werden entweder in einer Gruppe oder in einem Gerät erstellt. Sie sind für alle Benutzer sichtbar, die Zugriff auf das Gerät bzw. die Gruppe haben.


Smart Rules sind an zwei Orten zu sehen:

* Auf der Seite **Globale Smart Rules** im Menü **Konfiguration**.

  ![Global smart rules](/images/benutzerhandbuch/cockpit/cockpit-smart-rules-list.png)

  Auf der Seite **Globale Smart Rules** werden nur die globalen Smart Rules angezeigt.

* In der Registerkarte **Smart Rules** eines Geräts oder einer Gruppe.

  ![Smart rules info tab](/images/benutzerhandbuch/cockpit/cockpit-smartrule-info-tab.png)

  In einem lokalen Kontext (Gruppe oder Gerät) werden die lokalen Smart Rules angezeigt. Für Benutzer mit entsprechenden Berechtigungen werden sowohl lokale als auch globale Smart Rules angezeigt.		


<a name="create-rules"></a>
### So erstellen Sie eine Smart Rule

Smart Rules können entweder auf der Seite **Globale Smart Rules** im Menü **Konfiguration** des Navigators (globale Smart Rules) oder in der Registerkarte **Info** einer Gruppe oder eines Geräts (lokale Smart Rules) erstellt werden.

1. Klicken Sie auf **Smart Rule hinzufügen** in der oberen Menüleiste.<br>
2. Wählen Sie ein Smart Rule-Template aus. Die Liste der Smart Rules kann je nach Installation variieren.
3. Verwenden Sie im darauf folgenden Dialog den Umschalter, um einzustellen, ob die Regel ein- oder ausgeschaltet ist, siehe Details unter [So schalten Sie Smart Rule ein/aus](#toggle-rules).
4. Konfigurieren Sie die Regelparameter. Die Parameter variieren von Regel zu Regel. Details zu den jeweiligen Parametern finden Sie unter [Smart Rule-Sammlung](#smart-rules-collection).
6. Klicken Sie auf **Erstellen**, um die Smart Rule zu erstellen.

>**Info:** Wenn Sie eine Smart Rule auf der Seite **Globale Smart Rules** erstellen, ist sie standardmäßig für alle Assets aktiv, solange Sie in Schritt 4 des Dialogfelds keine Ziel-Assets auswählen; siehe dazu auch [So schalten Sie eine Smart Rule ein/aus](#toggle-rules).

Smart Rules können mehrfach instanziiert werden.


### So bearbeiten Sie eine Smart Rule

Klicken Sie auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Bearbeiten**.

Weitere Informationen zu den Feldern finden Sie unter [So erstellen Sie eine Smart Rule](#create-rules).


### So duplizieren Sie eine Smart Rule

1. Klicken Sie auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Duplizieren**.
2. Ändern Sie zumindest den Namen.
3. Klicken Sie auf **Speichern & schließen**, um die Smart Rule zu speichern und zur Smart Rule-Liste zurückzukehren.

### So löschen Sie eine Smart Rule

Klicken Sie auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Löschen**.

### So beheben Sie Fehler in einer Smart Rule

> **Info:** Diese Funktion ist bei Apama nicht verfügbar.

Um die Fehlersuche zu vereinfachen, gibt es einen direkten Link von einer Smart Rule zum entsprechenden Echtzeitverarbeitungsmodul.

Klicken Sie auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Quelltext ansehen**, um diesen Link zu verwenden.

<a name="toggle-rules"></a>
### So schalten Sie eine Smart Rule ein/aus

Wenn eine Smart Rule im Bearbeitungsdialogfeld (aufrufbar über die Seite **Globale Smart Rules** und die Registerkarte **Info** eines Geräts/einer Gruppe) auf **Eingeschaltet** gesetzt ist, ist sie global "eingeschaltet" (d. h. ihr zugrunde liegendes Modul wird gestartet), so dass die Regel für Geräte und Gruppen verfügbar ist.

<img src="/images/benutzerhandbuch/cockpit/cockpit-smartrule-enabled-toggle.png" name="Smart rule edit dialog" />

Ist sie auf **Ausgeschaltet** gesetzt, so ist sie "ausgeschaltet" (d. h. ihr zugrunde liegendes Modul wird nicht gestartet).

Zusätzlich zum globalen Ein-/Ausschalten einer Smart Rule kann eine Smart Rule für konkrete Objekte (Gruppen oder Geräte) im **aktiven** oder **inaktiven** Zustand sein. Im **aktiven** Zustand verarbeitet die Regel Ereignisse für diese Gruppen und Geräte.

> **Info:** Beim Erstellen einer Smart Rule auf der Seite **Globale Smart Rules** ist die Regel standardmäßig für alle Assets aktiv, solange Sie keine Ziel-Assets explizit auswählen. Werden spezifische Ziel-Assets ausgewählt, so wird sie für alle anderen Assets deaktiviert. Eine lokale Smart Rule, die auf der Seite **Info** einer Gruppe oder eines Geräts erstellt wird, wird automatisch für das entsprechende Ziel-Asset (und seine unmittelbaren Kinder) aktiviert.

Um eine Regel explizit zu aktivieren bzw. zu deaktivieren, navigieren Sie zur Registerkarte **Info** der jeweiligen Gruppe oder des jeweiligen Geräts und stellen Sie den Umschalter **Aktiv/Inaktiv** auf **Aktiv** bzw. **Inaktiv**.  

<img src="/images/benutzerhandbuch/cockpit/cockpit-smartrule-active-toggle.png" name="Smart rule in Info tab" />

Ein Anwendungsbeispiel für das Deaktivieren einer Smart Rule für ein einzelnes Objekt könnte sein, dass ein bestimmtes Gerät zu viele Schwellenwert-Alarme generiert. Die Regel kann lediglich für dieses Gerät deaktiviert werden, aber immer noch für alle anderen Objekte aktiv sein.

Im Falle einer Gruppe aktivieren/deaktivieren Sie die Smart Rule mit dem Umschalter allein für die Gruppe. Sie können die Regel dann über das Auswahlfeld unterhalb des Umschalters separat für die Kinder der Gruppe aktivieren/deaktivieren.

<img src="/images/benutzerhandbuch/cockpit/cockpit-smartrule-children.png" name="Smart rule activate children" />

>**Wichtig:** Eine Regel, die für ein bestimmtes Objekt aktiviert ist, funktioniert nur, wenn sie auch global eingeschaltet ist.

### Beispiel: Definieren von exakten Schwellenwerten

Führen Sie folgende Schritte aus, um eine Schwellenwertregel zu definieren:

1. Navigieren Sie im Menü Gruppen zu dem Objekt (Gruppe oder Gerät), auf welches Sie den Schwellenwert anwenden möchten.
2. Wechseln Sie zur Registerkarte **Daten-Explorer**.
3. Wenn der Datenpunkt, der den Schwellenwert festlegen soll, standardmäßig nicht sichtbar ist, wählen Sie **Datenpunkt hinzufügen** und [fügen Sie einen Datenpunkt hinzu](#add-data-points).
4. Öffnen Sie über das Menüsymbol das Kontextmenü für den entsprechenden Datenpunkt und klicken Sie auf **Smart Rule erstellen**. <br><br> <img src="/images/benutzerhandbuch/cockpit/cockpit-smart-rules-data-point.png" name="Data point example"/>
<br>
5. Wählen Sie die Smart Rule "Bei Schwellenwertüberschreitung Alarm erzeugen".
6. Geben Sie den minimalen und den maximalen Wert für den roten Bereich ein. Wenn der Messwert den roten Bereich betritt oder verlässt, wird ein KRITISCHER Alarm erzeugt bzw. gelöscht. Weitere Informationen finden Sie in der Beschreibung der Regel "Bei Messbereichsüberschreitung Alarm erzeugen" in der [Smart Rules-Sammlung](/benutzerhandbuch/cockpit-de#smart-rules-collection).
7. Unter **Alarm erzeugen** können Sie optional den Alarmtyp und Alarmtext definieren.
8. Unter **Ziel-Assets oder -geräte** können Sie die Objekte auswählen, auf die diese Regel angewendet werden soll.
9. Klicken Sie auf **Erstellen**, um die Smart Rule zu erstellen.

Die Regel wird automatisch aktiviert und Alarme werden angezeigt, wenn diese ausgelöst werden.

### Ausführen einer Regelkette

Smart Rules können ein neues Datenelement auf der Plattform erstellen. Die Schwellenregel erzeugt beispielsweise neue Alarme. Diese neuen Daten können durch ausgewählte Smart Rules weiterverarbeitet werden, zum Beispiel durch eine Regel "Bei Alarm E-Mail senden".

Mit diesem Mechanismus kann eine Kette von Smart Rules erstellt werden.

>**Info:** Berücksichtigen Sie beim Erstellen einer Regelkette, wie viele Daten diese erzeugt, um Überlastungen oder übermäßige Datenmengen zu vermeiden.