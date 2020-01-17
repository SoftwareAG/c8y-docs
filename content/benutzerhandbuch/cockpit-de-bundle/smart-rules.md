---
weight: 80
title: Smart Rules
layout: redirect
---


Cumulocity enthält eine Regel-Engine, um Daten in Echtzeit zu analysieren und Aktionen basierend auf Daten auszuführen. Diese Regeln werden in einer Skriptsprache erstellt und in der Anwendung ["Administration"](/guides/benutzerhandbuch/administration) verwaltet.

Zum einfachen Erstellen von Regeln enthält die Cockpit-Anwendung einen "Smart Rule Builder". Mit dem Smart Rule Builder können Regeln aus Vorlagen erstellt werden. 

>**Info:** Smart Rules sind nur sichtbar, wenn der Mandant die Smart Rule-Anwendung abonniert hat. Um Smart Rules verwalten zu können, benötigt der Benutzer die Berechtigung zum Erstellen von Stammdaten sowie entweder die Berechtigung "Smartrule" oder "cep".

Smart Rules werden parametrisiert. Es gibt zwei Quellen für Parameter:

**Regelparameter** werden vom Benutzer beim Erstellen einer Smart Rule aus einer Vorlage bereitgestellt. Beispiele sind E-Mail-Adressen und Alarmtexte.

**Objektparameter** werden in der Gruppe oder dem Gerät gespeichert. Diese Parameter können auch nach der Erstellung der Smart Rule bearbeitet werden. Ein Beispiel sind Min- und Max-Werte für Schwellwerte.

Smart Rules werden angezeigt

* in der Registerkarte **Info** eines Geräts oder einer Gruppe,
* in der Seite **Smart Rules** im Menü **Konfiguration**. 

![Smart Rules Registerkarte "Info"](/images/benutzerhandbuch/cockpit-smartrule-info-tab.png)

Es gibt zwei Arten von Smart Rules:

- **Lokal**: Smart Rules, die für ein Gerät oder eine Gruppe erstellt wurden. Diese sind für alle Benutzer sichtbar, die Zugriff auf das Gerät bzw. die Gruppe haben.
- **Global**: Diese Smart Rules wurden in einem globalen Kontext erstellt ("Smart Rules"-Seite, Alarme, Daten-Explorer, etc.). 

In der Seite **Smart Rules** werden nur die globalen Smart Rules angezeigt. 

In einem lokalen Kontext (Gerät oder Gruppe) und ohne die erforderlichen Berechtigungen werden nur die lokalen Smart Rules angezeigt. Hat ein Benutzer die entsprechenden Berechtigungen, werden lokale und globale Smart Rules angezeigt.

Die folgenden Berechtigungen sind erforderlich, um globale Smart Rules zu sehen:

- Smartrule READ
- Smartrule ADMIN
- CEP management ADMIN

### <a name="create-rules"></a>Erstellen von Smart Rules

Smart Rules können entweder auf der Seite **Smart Rules** im Menü **Konfiguration** oder in der Registerkarte **Info** eines Geräts oder einer Gruppe erstellt werden.

Führen Sie folgende Schritte zum Erstellen einer Smart Rule aus:

1. Klicken Sie **Smart Rule hinzufügen** in der oberen Menüleiste. 
2. Wählen Sie ein Smart Rule-Template aus. 
3. Verwenden Sie im folgenden Fenster den Regler, um einzustellen, ob die Regel aktiviert oder deaktiviert ist. 
4. Konfigurieren Sie die Regelparameter. Die Parameter variieren von Regel zu Regel. Details zu den jeweiligen Parametern finden Sie unter [Smart Rule-Sammlung](/guides/benutzerhandbuch/cockpit#smart-rules-collection). 
5. Im Feld **Ziel-Assets oder Geräte** können Sie Assets oder Geräte festlegen, für die die Regel gelten soll.  
6. Klicken Sie **Erstellen** um die Smart Rule zu erstellen.

Eine Liste von Smart Rules wird unten beispielhaft gezeigt. Die Liste der Smart Rules kann je nach Installation variieren.

<img src="/images/benutzerhandbuch/cockpit-global-smart-rules.png" name="Globale Smart Rules" style="width:75%;"/>

Wenn die Regel aktiviert und nicht für bestimmte Geräte angelegt wurde, ist die Regel nun für alle Geräte und Gruppen aktiv. 

Im nächsten Abschnitt erfahren Sie, wie Sie eine Smart Rule für bestimmte Objekte deaktivieren.

Um Irritationen vorzubeugen, werden deaktivierte Smart Rules nicht in Gruppenmenüs oder Gerätemenüs angezeigt. 

Smart Rules können mehrfach instanziiert werden.


### Aktivieren und Deaktivieren von Smart Rules

Smart Rules können für einzelne Objekte (Geräte oder Gruppen) eingeschaltet (aktiviert) oder abgeschaltet (deaktiviert) werden. Wenn beispielsweise ein Gerät zu viele Schwellwertalarme erzeugt, können Sie die Regel für dieses einzelne Objekt deaktivieren. Die Regel bleibt für alle anderen Objekte aktiv.

Um eine Smart Rule für eine Gruppe oder ein Gerät ein- oder abzuschalten, navigieren Sie zur Registerkarte "Info" für das Objekt und aktivieren/deaktivieren Sie die Regel über den Regler.

<img src="/images/benutzerhandbuch/cockpit-smart-rule-activate.png" name="Smart Rule aktivieren/deaktivieren" style="width:100%;"/>

### Bearbeiten von Smart Rules

Um eine Smart Rule zu bearbeiten, öffnen Sie das Kontextmenü der Regel über das Menüsymbol und klicken Sie **Bearbeiten**.

### Duplizieren von Smart Rules

Um eine Smart Rule zu duplizieren, öffnen Sie das Kontextmenü der Regel über das Menüsymbol und klicken Sie **Duplizieren**. Bearbeiten Sie zumindest den Namen und klicken Sie **Änderungen speichern** um Ihre Angaben zu speichern.

### Löschen von Smart Rules

Um eine Smart Rule zu löschen, öffnen Sie das Kontextmenü der Regel über das Menüsymbol und klicken Sie **Löschen**.

### Fehlerbehebung bei Smart Rules

Um die Fehlersuche zu vereinfachen gibt es einen direkten Link von einer Smart Rule zum entsprechenden Echtzeitverarbeitungsmodul. Öffnen Sie das Kontextmenü der Regel über das Menüsymbol und klicken Sie **Quelltext ansehen**, um diese Option zu nutzen.

### Beispiel: Definieren von exakten Schwellwerten

Führen Sie folgende Schritte aus, um eine Schwellwertregel zu definieren:

1. Navigieren Sie im Menü **Gruppen** zu dem Objekt (Gruppe oder Gerät), auf welches Sie den Schwellwert anwenden möchten.
2. Wechseln Sie zur Registerkarte **Daten-Explorer**.
3. Wenn der Datenpunkt, der den Schwellwert festlegen soll, standardmäßig nicht sichtbar ist, wählen Sie **Datenpunkt hinzufügen** und fügen Sie einen Datenpunkt hinzu. Informationen zum Hinzufügen von Datenpunkten finden Sie unter  Daten-Explorer >[Hinzufügen von Datenpunkten](#add-data-points).
4. Öffnen Sie über das Menüsymbol das Kontextmenü für den entsprechenden Datenpunkt und klicken Sie **Smart Rule erstellen**. <br><br> <img src="/images/benutzerhandbuch/cockpit-smart-rule-datapoint.png" name="Datenpunkt-Beispiel" style="width:75%;"/>
<br>
5. Wählen Sie die Smart Rule "Bei Schwellwertüberschreitung Alarm erzeugen". <br><br> <img src="/images/benutzerhandbuch/cockpit-smart-rule-example.png" name="Smart Rule-Beispiel" style="width:50%;"/><br>
6. Geben Sie den minimalen und den maximalen Wert für den roten Bereich ein. Wenn der Messwert den roten Bereich betritt oder verlässt, wird ein KRITISCHER Alarm erzeugt bzw. gelöscht. Weitere Informationen finden Sie in der Beschreibung der Regel "Bei Messbereichsüberschreitung Alarm erzeugen" in der [Smart Rules-Sammlung](/guides/benutzerhandbuch/cockpit#smart-rules-collection).
7. Unter **Alarm erzeugen** können Sie optional den Alarmtyp und Alarmtext definieren.
8. Unter **Ziel-Assets oder Geräte** können Sie die Objekte auswählen, auf die diese Regel angewendet werden soll.
9. Klicken Sie **Erstellen** um die Smart Rule zu erstellen.

Die Regel wird automatisch aktiviert und Alarme werden angezeigt, wenn diese ausgelöst werden.


### Ausführen einer Regelkette

Smart Rules können ein neues Datenelement auf der Plattform erstellen. Die Schwellenregel erzeugt beispielsweise neue Alarme. Diese neuen Daten können durch ausgewählte Smart Rules weiterverarbeitet werden, zum Beispiel durch eine Regel "Bei Alarm  E-Mail senden". 

Mit diesem Mechanismus kann eine Kette von Smart Rules erstellt werden.

>**Info:** Berücksichtigen Sie beim Erstellen einer Regelkette, wie viele Daten diese erzeugt, um Überlastungen oder übermäßige Datenmengen zu vermeiden. 

