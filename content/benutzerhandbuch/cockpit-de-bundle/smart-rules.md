---
weight: 80
title: Smart Rules
layout: redirect
---

Cumulocity IoT enthält eine Regel-Engine, um Daten in Echtzeit zu analysieren und Aktionen basierend auf Daten auszuführen. Diese Regeln werden in einer Skriptsprache erstellt und in der ["Administration"-Anwendung](/benutzerhandbuch/administration-de) verwaltet.

Zum einfachen Erstellen von Regeln enthält die Cockpit-Anwendung einen "Smart Rule Builder". Mit dem Smart Rule Builder können Regeln aus Templates erstellt werden.

>**Info:** Smart Rules sind nur sichtbar, wenn der Mandant die Smart Rule-Anwendung abonniert hat. Um Smart Rules verwalten zu können, benötigt der Benutzer die Berechtigung zum Erstellen von Stammdaten sowie entweder die Berechtigung "Smart rule" oder "CEP management".

Smart Rules werden parametrisiert. Es gibt zwei Quellen für Parameter:

**Regelparameter** werden vom Benutzer beim Erstellen einer Smart Rule aus einem Template bereitgestellt. Beispiele sind E-Mail-Adressen und Alarmtexte.

**Objektparameter** werden in der Gruppe oder dem Gerät gespeichert. Diese Parameter können auch nach der Erstellung der Smart Rule bearbeitet werden. Ein Beispiel sind Min- und Max-Werte für Schwellwerte.

Smart Rules werden angezeigt

* in der Registerkarte **Info** eines Geräts oder einer Gruppe. <br><br>
![Smart rules info tab](/images/benutzerhandbuch/cockpit/cockpit-smart-rules-info-tab.png)

* auf der Seite **Smart Rules** im Menü **Konfiguration**. <br><br>
![Smart rules info tab](/images/benutzerhandbuch/cockpit/cockpit-smart-rules-list.png)

Es gibt zwei Arten von Smart Rules:

- **Lokal**: Smart Rules, die für ein Gerät oder eine Gruppe erstellt wurden. Diese sind für alle Benutzer sichtbar, die Zugriff auf das Gerät bzw. die Gruppe haben.
- **Global**: Diese Smart Rules wurden in einem globalen Kontext erstellt (**Smart Rules**-Seite, Alarme, Daten-Explorer etc.). In der Seite "Smart Rules" werden nur die globalen Smart Rules angezeigt.

Auf der Seite **Smart Rules** werden nur die globalen Smart Rules angezeigt.

In einem lokalen Kontext (Gruppe oder Gerät) und ohne entsprechende Berechtigungen werden nur die lokalen Smart Rules angezeigt. Hat ein Benutzer die entsprechenden Berechtigungen, werden lokale und globale Smart Rules angezeigt.		
Die folgenden Berechtigungen sind erforderlich, um globale Smart Rules zu sehen:

- Smartrule = LESEN-Berechtigung
- Smartrule = ADMIN-Berechtigung
- CEP management = ADMIN-Berechtigung


### <a name="create-rules"></a>So erstellen Sie eine Smart Rule

Smart Rules können entweder auf der Seite **Global Smart Rules** im Menü **Konfiguration** des Navigators oder in der Registerkarte **Info** einer Gruppe oder eines Geräts erstellt werden.

1. Klicken Sie **Smart Rule hinzufügen** in der oberen Menüleiste. <br>
2. Wählen Sie ein Smart Rule-Template aus. Die Liste der Smart Rules kann je nach Installation variieren.
3. Verwenden Sie im darauf folgenden Dialog den Umschalter, um einzustellen, ob die Regel aktiviert oder deaktiviert ist.
4. Konfigurieren Sie die Regelparameter. Die Parameter variieren von Regel zu Regel. Details zu den jeweiligen Parametern finden Sie unter [Smart Rule-Sammlung](#smart-rules-collection).
6. Klicken Sie **Erstellen**, um die Smart Rule zu erstellen.

Wenn die Regel aktiviert und nicht nur für bestimmte Geräte angelegt wurde, ist die Regel nun für alle Geräte und Gruppen aktiv. Im nächsten Abschnitt erfahren Sie, wie Sie eine Smart Rule für bestimmte Objekte deaktivieren.

Smart Rules können mehrfach instanziiert werden.

### <a name="toggle-rules"></a>So deaktivieren oder aktivieren Sie eine Smart Rule für eine Gruppe oder ein Gerät

Smart Rules können für einzelne Objekte (Geräte oder Gruppen) eingeschaltet (aktiviert) oder abgeschaltet (deaktiviert) werden. Wenn beispielsweise ein Gerät zu viele Schwellwertalarme erzeugt, können Sie die Regel für dieses einzelne Objekt deaktivieren. Die Regel bleibt für alle anderen Objekte aktiv.

Navigieren Sie zur Registerkarte **Info** der Gruppe oder des Geräts und aktivieren/deaktivieren Sie die betreffende Regel mit Hilfe des Umschalters.

<img src="/images/benutzerhandbuch/cockpit/cockpit-smart-rules-enable.png" name="Smart rule in Info tab" />

### So bearbeiten Sie eine Smart Rule

Klicken Sie auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Bearbeiten**.

Weitere Informationen zu den Feldern finden Sie unter [So erstellen Sie eine Smart Rule](#create-rules).


### So duplizieren Sie eine Smart Rule

1. Klicken Sie auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Duplizieren**.
2. Ändern Sie zumindest den Namen.
3. Klicken Sie **Speichern & schließen**, um die Smart Rule zu speichern und zur Smart Rule-Liste zurückzukehren.

### So löschen Sie eine Smart Rule

Klicken Sie auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Löschen**.

### So beheben Sie Fehler in einer Smart Rule

Um die Fehlersuche zu vereinfachen, gibt es einen direkten Link von einer Smart Rule zum entsprechenden Echtzeitverarbeitungsmodul.

Klicken Sie auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Quelltext ansehen**, um diesen Link zu verwenden.

### Beispiel: Definieren von exakten Schwellwerten

Führen Sie folgende Schritte aus, um eine Schwellwertregel zu definieren:

1. Navigieren Sie im Menü Gruppen zu dem Objekt (Gruppe oder Gerät), auf welches Sie den Schwellwert anwenden möchten.
2. Wechseln Sie zur Registerkarte **Daten-Explorer**.
3. Wenn der Datenpunkt, der den Schwellwert festlegen soll, standardmäßig nicht sichtbar ist, wählen Sie **Datenpunkt hinzufügen** und [fügen Sie einen Datenpunkt hinzu](#add-data-points).
4. Öffnen Sie über das Menüsymbol das Kontextmenü für den entsprechenden Datenpunkt und klicken Sie **Smart Rule erstellen**. <br><br> <img src="/images/benutzerhandbuch/cockpit/cockpit-smart-rules-data-point.png" name="Data point example"/>
<br>
5. Wählen Sie die Smart Rule "Bei Schwellwertüberschreitung Alarm erzeugen".
6. Geben Sie den minimalen und den maximalen Wert für den roten Bereich ein. Wenn der Messwert den roten Bereich betritt oder verlässt, wird ein KRITISCHER Alarm erzeugt bzw. gelöscht. Weitere Informationen finden Sie in der Beschreibung der Regel "Bei Messbereichsüberschreitung Alarm erzeugen" in der [Smart Rules-Sammlung](/benutzerhandbuch/cockpit-de#smart-rules-collection).
7. Unter **Alarm erzeugen** können Sie optional den Alarmtyp und Alarmtext definieren.
8. Unter **Ziel-Assets oder -geräte** können Sie die Objekte auswählen, auf die diese Regel angewendet werden soll.
9. Klicken Sie **Erstellen**, um die Smart Rule zu erstellen.

Die Regel wird automatisch aktiviert und Alarme werden angezeigt, wenn diese ausgelöst werden.

### Ausführen einer Regelkette

Smart Rules können ein neues Datenelement auf der Plattform erstellen. Die Schwellenregel erzeugt beispielsweise neue Alarme. Diese neuen Daten können durch ausgewählte Smart Rules weiterverarbeitet werden, zum Beispiel durch eine Regel "Bei Alarm E-Mail senden".

Mit diesem Mechanismus kann eine Kette von Smart Rules erstellt werden.

>**Info:** Berücksichtigen Sie beim Erstellen einer Regelkette, wie viele Daten diese erzeugt, um Überlastungen oder übermäßige Datenmengen zu vermeiden.
