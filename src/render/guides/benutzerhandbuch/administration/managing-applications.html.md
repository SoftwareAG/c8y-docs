---
order: 30
title: Verwalten von Anwendungen
layout: redirect
---

Zusätzlich zu den in der Cumulocity-Plattform vorhandenen Anwendungen können Sie in Ihrem Konto eigene Anwendungen verwalten.

Die Anwendungen können generische HTML5-Anwendungen sein, die durch Plugins erweitert werden können. Die Plugins werden in einer spezifischen Anwendung bereitgestellt. Ein Plugin kann beispielsweise ein bestimmtes Widget zum Cockpit Dashboard hinzufügen.

Plugins können nur zu eigenen Anwendungen hinzugefügt werden, da die Anwendung selbst beim Hinzufügen eines Plugins modifiziert wird. Wenn Sie ein Plugin zu einer abonnierten Anwendung hinzufügen möchten, muss die Anwendung zunächst in eine eigene Anwendung dupliziert werden. Dieser Vorgang wird durch den Administrationsassistenten unterstützt.

Eigene Anwendungen werden unter "Eigene Anwendungen" im Menü "Anwendungen" verwaltet.

Auf der Seite "Eigene Anwendungen" wird eine Liste aller eigenen Anwendungen in Ihrem Konto angezeigt.

![Eigene Anwendungen](/guides/images/benutzerhandbuch/admin-own-applications.png)

Klicken Sie auf das Menüsymbol rechts oben in einer Anwendung, um über das Kontextmenü eine Anwendung zu [**Bearbeiten** oder **Löschen**](#editing-and-removing).

Klicken Sie **Öffnen** auf der Karte einer Anwendung, um die Anwendung direkt von hier zu starten. Sie können außerdem über den Application Switcher auf Ihre Anwendungen zugreifen.

Klicken Sie **Plugin hinzufügen**, um ein Plugin hinzuzufügen (siehe [Hinzufügen und Entfernen von Plugins](#add-remove-plugin)).

### <a name="editing-and-removing"></a>Bearbeiten und Löschen von Anwendungen

**Bearbeiten**

Klicken Sie auf eine Anwendung, um diese zu bearbeiten oder klicken Sie auf das Menüsymbol und wählen Sie **Bearbeiten** im Kontextmenü.

In der Registerkarte "Attribute" können einige Felder bearbeitet werden, abhängig vom Typ der Anwendung.

> **Info**: "ID", "Anwendungsschlüssel" und "Pfad" können nicht geändert werden.
> 
> **Wichtig:** Ändern Sie niemals die Namen der Standardanwendungen (z. B. Device Management, Cockpit), sonst schlägt die Initialisierung des Mandanten fehl.

**Entfernen**

Wenn Sie eine Anwendung löschen, die eine abonnierte Anwendung überschreibt, wird die derzeit abonnierte Anwendung für alle Benutzer verfügbar. Die Benutzer profitieren so außerdem von zukünftigen Upgrades der abonnierten Anwendung.

Abonnierte Anwendungen können nicht gelöscht werden. Dies kann nur durch den Eigentümer der Anwendung erfolgen.

> **Info**: Um eine abonnierte Anwendung zu überschreiben, muss die "eigene Anwendung" denselben Kontextpfad haben wie die "abonnierte Anwendung".

Um eine Anwendung zu löschen, klicken Sie auf das Menüsymbol und wählen Sie im Kontextmenü **Entfernen**.

### Erstellen einer Anwendung

Klicken Sie **Anwendung hinzufügen** auf der Seite "Eigene Anwendungen", um eine Anwendung hinzuzufügen. Wählen Sie im angezeigten Dialogfenster, ob Sie eine Anwendung erstellen möchten durch

*   Hochladen einer ZIP-Datei,
*   Verwenden einer externen Anwendung (was auf eine Anwendung verweist, die woanders betrieben wird),
*   Duplizieren einer bestehenden Anwendung.

<img src="/guides/images/benutzerhandbuch/admin-application-add.png" alt="Hinzufügen von Anwendungen" style="max-width: 50%">

Wenn Sie **Hochladen einer ZIP-Datei** wählen, werden Sie vom Assistenten aufgefordert, eine Datei im entsprechenden Feld abzulegen oder auf Ihrem Computer zu der Datei zu navigieren.

Wenn Sie **Externe Anwendung** wählen, werden Sie als nächstes aufgefordert, den Namen, Schlüssel und die externe URL für die Anwendung einzugeben.

Wenn Sie eine Anwendung duplizieren möchten, folgen Sie den im nächsten Abschnitt beschriebenen Schritten.

### <a name="clone-application"></a>Duplizieren von Anwendungen

Das Duplizieren einer abonnierten Anwendung erzeugt ein entsprechendes Duplikat als eigene Anwendung mit einem Link auf die Originalanwendung.

Führen Sie die folgende Schritte aus, um eine Anwendung zu duplizieren:

1.  Klicken Sie **Anwendung hinzufügen** auf der Seite "Eigene Anwendungen".
2.  Wählen Sie im angezeigten Dialogfenster **Existierende Anwendung duplizieren**.
3.  Wählen Sie die gewünschte Anwendung aus der Auswahlliste. Beachten Sie, dass auch abonnierte Anwendungen aufgelistet werden.
4.  Geben Sie im nächsten Fenster den Namen der Anwendung ein. Der Name wird als Titel oben links auf der Anwendungsseite angezeigt. Er wird außerdem im Application Switcher verwendet.
5.  Geben Sie einen Anwendungsschlüssel ein. Der Anwendungsschlüssel wird verwendet, um Anfragen von dieser Anwendung zu identifizieren und die Anwendung zum Abonnieren zur Verfügung zu stellen. Sieh auch [Concepts Guide](/guides/concepts/applications).
6.  Geben Sie Pfad für die Anwendung ein, Dieser Pfad ist Teil der URL, um die Anwendung aufzurufen. Wenn Sie beispielsweise "hello" als Anwendungspfad eingeben, wird die URL "/apps/hello" sein.
7.  Klicken Sie abschließend **Kopieren**, um die Anwendung zu erstellen.

### <a name="add-remove-plugin"></a>Hinzufügen und Entfernen von Plugins

Um die Funktionen einer Anwendung zu konfigurieren oder zu erweitern, können Plugins hinzugefügt werden.

Klicken Sie **Plugin hinzufügen** auf der Karte der gewünschten Anwendung, um ein Plugin hinzuzufügen.

Die "Plugin"-Registerkarte für die Anwendung wird geöffnet und zeigt alle vorhandenen Plugins an. Außerdem können weitere Plugins durch Ablegen einer ZIP-Datei oder Durchsuchen Ihres Computers hinzugefügt werden.

![Plugins](/guides/images/benutzerhandbuch/admin-plugins.png)

Um eine Regel zu entfernen, fahren Sie mit dem Mauszeiger darüber und klicken Sie **Entfernen**.

Die folgenden beiden Tabellen zeigen die Navigator- und Menüelemente mit Ihren jeweiligen Plugins.

<table>

<thead>

<tr>

<th style="text-align: left">Navigatorelement</th>

<th style="text-align: left">Plugins</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align: left">Willkommen</td>

<td style="text-align: left">Welcome screen</td>

</tr>

<tr>

<td style="text-align: left">Startseite</td>

<td style="text-align: left">Cockpit Home</td>

</tr>

<tr>

<td style="text-align: left">Smart Rules</td>

<td style="text-align: left">Smart Rules UI</td>

</tr>

<tr>

<td style="text-align: left">Gruppen</td>

<td style="text-align: left">Groups Hierarchy</td>

</tr>

<tr>

<td style="text-align: left">Daten-Explorer</td>

<td style="text-align: left">Data Point Explorer UI</td>

</tr>

<tr>

<td style="text-align: left">Datenpunktbibliothek</td>

<td style="text-align: left">Data Point Explorer UI</td>

</tr>

<tr>

<td style="text-align: left">Berichte</td>

<td style="text-align: left">Reporting</td>

</tr>

<tr>

<td style="text-align: left">Berichte</td>

<td style="text-align: left">Dashboard (Beachten Sie, dass es zwei Plugins mit diesem Namen gibt. Wählen Sie das mit der Beschreibung "Berichte sind eigenständige Dashboards ohne Kontext".)</td>

</tr>

<tr>

<td style="text-align: left">Alarme</td>

<td style="text-align: left">Alarm Management</td>

</tr>

</tbody>

</table>

<table>

<thead>

<tr>

<th style="text-align: left">Menüelement</th>

<th style="text-align: left">Plugins</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align: left">Info:</td>

<td style="text-align: left">Deaktivieren nicht möglich</td>

</tr>

<tr>

<td style="text-align: left">Kind-Assets</td>

<td style="text-align: left">Deaktivieren nicht möglich</td>

</tr>

<tr>

<td style="text-align: left">Berechtigungen</td>

<td style="text-align: left">Device Permission Management Plugin</td>

</tr>

<tr>

<td style="text-align: left">Daten-Explorer</td>

<td style="text-align: left">Data Point Explorer UI</td>

</tr>

</tbody>

</table>

Beachten Sie das "UI" am Ende des Plugin-Namens.

### Wiederherstellung einer älterer Anwendungsversion

Benutzer können ältere Versionen einer Anwendung aus einem Archiv wiederherstellen:

1.  Klicken Sie zum Öffnen auf die gewünschte Anwendung.
2.  Wechseln Sie zur Registerkarte "Archiv".
3.  Öffnen Sie das Kontextmenü der gewünschten Version über das Menüsymbol und klicken Sie **Aktivieren**, um diese Version zur aktiven Version zu machen.
4.  Klicken Sie **Entfernen** um eine Version aus dem Archiv zu löschen.

> **Info**: Die Registerkarte "Archiv" steht für abonnierte Anwendung nicht zur Verfügung, da nur der Eigentümer der Anwendung älterer Versionen wiederherstellen kann.

### Hochladen von Archiven

Mehrere Archivdateiversionen können in Cumulocity gespeichert werden, wenn Sie durch das Hochladen von ZIP-Dateien erstellt wurden. Jede Version wird als Archiv bezeichnet. Es können verschiedene Versionen gleichzeitig hochgeladen werden und Sie können zwischen den Versionen wechseln.

Zum Hochladen eines Archiv führen Sie die folgenden Schritte aus:

1.  Klicken Sie zum Öffnen auf die gewünschte Anwendung.
2.  Wechseln Sie zur Registerkarte "Archivdateien".
3.  Klicken Sie **Archiv hochladen** und navigieren Sie zu der Datei auf Ihrem Computer oder ziehen Sie die Datei auf das entsprechende Feld.
4.  Klicken Sie **Hochladen**, um das Archiv auf Ihr Cumulocity-Konto hochzuladen.

<img src="/guides/images/benutzerhandbuch/admin-upload-archive.png" alt="Archiv hochladen" style="max-width: 100%">

Hochgeladene Archive können aktiviert, heruntergeladen oder gelöscht werden. Das aktive Archiv (durch ein Cloud-Symbol gekennzeichnet) ist die Version der Anwendung, die aktuell den Benutzern Ihres Kontos zur Verfügung steht. Diese Version kann nicht gelöscht werden.

