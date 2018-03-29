---
order: 80
title: Smart Rules
layout: redirect
---

Cumulocity enthält eine Regel-Engine, um Daten in Echtzeit zu analysieren und Aktionen basierend auf Daten auszuführen. Diese Regeln werden in einer Skriptsprache angegeben und in der Administrations-Anwendung verwaltet.

Zum Erstellen von Regeln enthält die Cockpit-Anwendung einen "Smart Rule Builder". Mit dem Smart Rule Builder können Regeln aus Vorlagen erstellt werden. Diese Regeln werden als intelligente Regeln ("Smart Rules") bezeichnet. Die Vorlagen werden als intelligente Regelvorlagen ("Smart Rules Template") bezeichnet.


Smart Rules werden parametriert. Es gibt zwei Quellen für Parameter:

**Regelparameter** werden vom Benutzer beim Erstellen einer Smart Rule aus einer Vorlage bereitgestellt. Beispiele sind E-Mail-Adressen und Alarmtexte.

**Objektparameter** werden in der Gruppe oder dem Gerät gespeichert. Diese Parameter können auch nach der Erstellung der Smart-Rule editiert werden. Ein Beispiel sind Min- und Max-Werte für Schwellenwerte.

### Eine "Smart Rule" erstellen

Smart Rules können entweder unter "Konfiguration -> Smart Rules" oder unter dem Tab "Info" einer Gruppe oder eines Geräts erstellt werden.

* Klicken auf "+ Smart Rule hinzufügen"

* Auf ein "Smart Rule Template" klicken.

* Geben Sie im nächsten Fenster die Regelparameter ein. Die Regelparameter unterscheiden sich von Regel zu Regel (Details siehe Einzelregelbeschreibungen unten).

* Über das Suchfeld können Sie auch die aktuelle Smart Rule für Zielgeräte oder Assets aktivieren. Dieser Schritt ist optional.

* Wählen Sie aus, ob die Regel aktiviert oder deaktiviert werden soll.

* Auf "Erstellen" klicken.

Eine Liste der intelligenten Regeln wird unten gezeigt. Beachten Sie, dass die Anzahl der angezeigten Smart-Regeln je nach Ihrer Installation unterschiedlich sein kann.

![image alt text](/guides/images/users-guide/image_23de.png)

Danach ist die Regel für alle Geräte und Gruppen aktiv, wenn die Regel auf "freigegeben" steht und nicht nur für bestimmte Objekte aktiviert wurde. Im nächsten Abschnitt erfahren Sie, wie Sie eine intelligente Regel für bestimmte Objekte deaktivieren.

Deaktivierte Smart Rules werden nicht in Gruppenmenüs oder Gerätemenüs angezeigt, um Verwirrung zu vermeiden. Smart Rules können mehrere Male instanziiert werden.

### Aktivieren und Deaktivieren von Smart Rules

Smart Rules können Sie unter dem Info-Tab eines Geräts oder einer Gruppe sehen. Sie müssen innerhalb dieser Gruppe aktiv sein und auch auf untergeordneter Ebene aktiv sein.

Für ein einzelnes Objekt (Gruppe oder Gerät) kann eine einzelne Smart Rule aktiviert (eingeschaltet) und deaktiviert (ausgeschaltet) werden. Wenn zum Beispiel ein Gerät zu viele Grenzwertalarme erzeugt, können Sie die Regel für dieses einzelne Objekt deaktivieren. Die Regel ist für alle anderen Objekte noch aktiv.

Um eine Smart Rule für eine Gruppe oder ein Gerät zu deaktivieren oder zu aktivieren, wechseln Sie einfach auf die Registerkarte "Info", und klicken Sie auf die Schaltfläche, um die Regel zu aktivieren oder zu deaktivieren.

![Info tab](/guides/images/users-guide/infotab.png)	

### Bearbeiten, Klonen oder Entfernen von Smart Rules

Um eine bestimmte Smart Rule zu bearbeiten, zu klonen oder zu entfernen, klicken Sie einfach auf das rechts neben der Smart Rule befindliche Zahnrad und klicken Sie auf die gewünschte Option.

Für eine einfachere Fehlerbehebung gibt es einen direkten Link von einer intelligenten Regel zu einem entsprechenden Ereignisverarbeitungsmodul. Klicken Sie auf das Zahnrad und wählen Sie dann "Bearbeiten".

### Beispiel: Definieren von genauen Schwellenwerten

Gehen Sie folgendermaßen vor, um eine Schwellenregel zu definieren:
* Navigieren Sie im Asset-Navigator zu der gewünschten Gruppe oder dem gewünschten Gerät, um einen Schwellenwert auf anzuwenden.
* Klicken Sie auf "Daten-Explorer".
* Wenn der Datenpunkt standardmäßig nicht sichtbar ist, wählen Sie "Datenpunkt hinzufügen" und fügen Sie einen Datenpunkt hinzu.
* Für den Datenpunkt, der den Schwellenwert erhöhen soll, klicken Sie am Ende der Zeile auf das Zahnrad-Symbol und wählen Sie "Smart Rule erstellen".

![image alt text](/guides/images/users-guide/image_26de.png)

* Wählen Sie "Bei Messungen, die den Schwellenwert überschreiten, Alarm erstellen".

* Füllen Sie die Regelparameter im Formular aus:

![image alt text](/guides/images/users-guide/image_37de.png)

* Sie können den minimalen und den maximalen Wert für den roten Bereich eingeben. Wenn die Werte außerhalb dieser Werte liegen, wird ein Grenzwertalarm ausgelöst.

* Unter "Alarm erstellen" können Sie optional den Alarmtyp und den Alarmtext bearbeiten.

* Unter "Für Zielgruppe oder Geräte aktivieren" können Sie das Objekt auswählen, auf das diese Regel angewendet wird.

* Klicken Sie auf "Erstellen".

Nachdem die Regel erstellt wurde, wird sie automatisch aktiviert und Alarme erscheinen, wenn sie auftreten.

### Ausführen einer Kettenregel

Smart Rules können ein neues Datenelement auf der Plattform erstellen. Beispielsweise erzeugt die Schwellenregel neue Alarme. Diese neuen Daten können durch ausgewählte intelligente Regeln weiterverarbeitet werden, zum Beispiel durch eine "Bei Alarm  E-Mail verschicken"-Regel. Mit diesem Mechanismus ist es möglich, eine Kette von intelligenten Regeln zu erstellen. Wenn Sie eine Regelkette erstellen, müssen Sie eine klare Vorstellung haben, wie viele Daten erstellt werden, um Überlastungen oder übermäßige Datenmengen zu vermeiden.

