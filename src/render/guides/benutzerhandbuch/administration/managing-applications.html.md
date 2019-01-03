---
order: 30
title: Verwalten von Anwendungen
layout: redirect
---

In der Cumulocity-Plattform gibt es zwei Arten von Anwendungen:

* Abonnierte Anwendungen -  alle Anwendungen, die für den Mandanten abonniert sind (entweder durch die Plattform oder einen Service Provider), aber die er nicht besitzt  
* [Eigene Anwendungen](#own-applications) - alle Anwendungen, die der Mandant besitzt

Beide Anwendungsarten finden sich im Menü **Anwendungen** im Navigator:

<img src="/guides/images/benutzerhandbuch/admin-menu.png" alt="Anwendungen" style="max-width: 25%">

Abonnierte Anwendungen können vom Benutzer nicht hinzugefügt, geändert oder entfernt werden, wohingegen benutzerdefinierte Anwendungen auf verschiedene Weise [als eigene Anwendungen hinzugefügt](#add-applications) werden können.  

### <a name="application-properties"></a>Anwendungsattribute

Klicken Sie auf eine Anwendungskarte, um die Attribute der Anwendung anzuzeigen.

<img src="/guides/images/benutzerhandbuch/admin-own-application-attributes.png" alt="Anwendungsattribute" style="max-width: 100%">

Für jede Anwendung werden die folgenden Attribute angezeigt:

<table>
<col width= 100>
<col width= 250>
<col width= 150>
<thead>
<tr>
<th style="text-align:left">Feld</th>
<th style="text-align:left">Beschreibung</th>
<th style="text-align:left">Web-Anwendung</th>
<th style="text-align:left">Microservice</th>
<th style="text-align:left">Externe Anwendung</th>
<th style="text-align:left">CEP-Regel</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ID</td>
<td style="text-align:left">Eindeutige ID zur Identifikation der Anwendung</td>
<td style="text-align:left">Automatisch generiert</td>
<td style="text-align:left">Automatisch generiert</td>
<td style="text-align:left">Automatisch generiert</td>
<td style="text-align:left">Automatisch generiert</td>
</tr>
<tr>
<td style="text-align:left">Name</td>
<td style="text-align:left">Anwendungsname. Wird als Titel oben links auf der Anwendungsseite angezeigt und im Application Switcher verwendet.</td>
<td style="text-align:left">Automatisch generiert, basierend auf dem Namen der ZIP-Datei</td>
<td style="text-align:left">Automatisch generiert, basierend auf dem Namen der ZIP-Datei</td>
<td style="text-align:left">Vom Benutzer vergeben</td>
<td style="text-align:left">Automatisch generiert, basierend auf dem Namen der mon-Datei </td>
</tr>
<tr>
<td style="text-align:left">Anwendungsschlüssel</td>
<td style="text-align:left">Wird zur Identifikation der Anwendung verwendet. Wird außerdem verwendet, um die Anwendung als Abonnement zur Verfügung zu stellen, siehe auch <a href="/guides/concepts/applications" class="no-ajaxy">Concepts Guide</a>.</td>
<td style="text-align:left">Automatisch generiert, basierend auf dem Namen der ZIP-Datei</td>
<td style="text-align:left">Automatisch generiert, basierend auf dem Namen der ZIP-Datei</td>
<td style="text-align:left">Vom Benutzer vergeben</td>
<td style="text-align:left">Automatisch generiert, basierend auf dem Namen der mon-Datei</td>
</tr>
<tr>
<td style="text-align:left">Typ</td>
<td style="text-align:left">Anwendungstyp</td>
<td style="text-align:left">Gehostete Anwendung</td>
<td style="text-align:left">Microservice</td>
<td style="text-align:left">Externe Anwendung</td>
<td style="text-align:left">Apama CEP-Regel</td>
</tr>
<tr>
<td style="text-align:left">Pfad</td>
<td style="text-align:left">Teil der URL, die die Anwendung aufruft</td>
<td style="text-align:left">Automatisch generiert</td>
<td style="text-align:left">Automatisch generiert als .../service/&lt;microservice name&gt;</td>
<td style="text-align:left">Vom Benutzer bereitgestellt. Wenn Sie beispielsweise "hallo" als Anwendungspfad verwenden, lautet die URL der Anwendung "/apps/hallo".</td>
<td style="text-align:left">Nicht verfügbar</td>
</tr>
</tbody>
</table>

>**Info**: ID, Anwendungsschlüssel, Typ und Pfad können nicht geändert werden.

### Überwachen von Microservices

Es gibt zwei Möglichkeiten, Microservices in der Cumulocity-Plattform zu überwachen.

#### Statusinformation

Der Status eines Microservices kann in der Registerkarte **Status** der entsprechenden Anwendung überprüft werden. 

<img src="/guides/images/benutzerhandbuch/admin-microservice-status.png" alt="Microservice-Status" style="max-width: 100%">

Folgende Information werden in der Registerkarte **Status** angezeigt:

* Instanzen: Anzahl der aktiven, gestörten und erwarteten Microservice-Instanzen für den aktuellen Mandanten
* Abonnierte Mandanten: Anzahl der aktiven, gestörten und erwarteten Microservice-Instanzen für alle Untermandanten, für die der Microservice abonniert ist 
* Alarme: Alarme für die aktuelle Anwendung, angezeigt in Echtzeit
* Ereignisse: Ereignisse für die aktuelle Anwendung, angezeigt in Echtzeit

Die Statusinformation ist sowohl für abonnierte als auch für eigene Anwendungen verfügbar. Die Informationen zu den abonnierten Mandanten sind jedoch nur für den Besitzer der Anwendung sichtbar.  

Um den Status sehen zu können, benötigen Sie folgende Berechtigungen:  ROLE_APPLICATION_MANAGEMENT_READ und ROLE_INVENTORY_READ

#### Logdateien

Für detaillierte Informationen über den Status von Microservices stehen außerdem Logdaten zur Verfügung.

Öffnen Sie die Registerkarte **Logdaten** des jeweiligen Microservice, um Logdaten anzuzeigen.

<img src="/guides/images/benutzerhandbuch/admin-microservice-log.png" alt="Microservice-Logdaten" style="max-width: 100%">

Links oben auf der Seite können Sie die Microservice-Instanz auswählen, für die Sie  Logdaten anzeigen möchten. Darüberhinaus können Sie rechts Ihre bevorzugte Schriftgröße und das Themendesign wählen. 

Initial werden die Logdaten der ausgewählten Microservice-Instanz für die letzten 10 Minuten angezeigt. Das abgebildete Zeitintervall wird unter den Daten angezeigt.

Klicken Sie die Pfeiltasten "Vor" oder "Zurück", um das Zeitintervall um jeweils 10 Minuten zu verlängern bzw. zu verkürzen. 

Wenn es im ausgewählten Zeitintervall keine Logdaten gibt, wird eine entsprechende Meldung angezeigt.

Um Logdaten lesen zu können, benötigen Sie die Berechtigung EVENT_READ.

### <a name="own-applications"></a>Eigene Anwendungen

Eigene Anwendungen können sein: 

* Duplikate von abonnierten Anwendungen (um diese den eigenen Bedürfnissen anzupassen)
* webbasierte UI-Anwendungen, die entweder als eigenständige Anwendungen oder als Plugins innerhalb einer Anwendung (z. B. als Widget in der Cockpit-Anwendung) implementiert sind
* serverseitige Geschäftslogik, die als Microservice implementiert ist 

Wenn Sie die entsprechende Anwendung abonniert haben ("apama-small"), können Sie außerdem [eigene Apama CEP-Regeln als Anwendung hochladen](#uploading-cep-rules). 

Über den Application Switcher rechts in der oberen Leiste können Sie auf die Anwendungen in Ihrem Konto zugreifen und bequem zwischen Anwendungen wechseln. 

Eigene Anwendungen werden unter **Eigene Anwendungen** im Menü **Anwendungen** verwaltet.

Auf der Seite **Eigene Anwendungen** wird eine Liste aller eigenen Anwendungen in Ihrem Konto angezeigt. Weitere Informationen zu den Feldern finden Sie unter [Anwendungsattribute](#application-properties).

![Eigene Anwendungen](/guides/images/benutzerhandbuch/admin-own-applications.png)

Klicken Sie **Öffnen** auf der Karte einer Anwendung, um die Anwendung direkt von hier zu starten. 

Klicken Sie **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**, um eine Anwendung zu Ihrem Konto hinzuzufügen, siehe [Anwendungen hinzufügen](#adding-applications).

Klicken Sie auf das Menüsymbol rechts oben in einer Anwendung, um über das Kontextmenü eine Anwendung zu [**Bearbeiten** oder zu **Löschen**](#editing-and-removing).

#### Erstellen einer Anwendung

Klicken Sie **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**, um eine Anwendung hinzuzufügen. Wählen Sie im angezeigten Dialogfenster eine der folgenden Methoden:

* [Web-Anwendung hochladen](#uploading-zip-files), um eine Web-Anwendung mittels einer ZIP-Datei bereitzustellen
* [Microservice hochladen](#uploading-microservices), um einen Microservice mittels einer ZIP-Datei bereitzustellen
* [Externe Anwendung](#external-application), um auf eine Anwendung zu verweisen, die woanders betrieben wird 
* [Existierende Anwendung duplizieren](#clone-application), um eine bestehende Anwendung zu duplizieren

<img src="/guides/images/benutzerhandbuch/admin-application-add.png" alt="Hinzufügen von Anwendungen" style="max-width: 50%">

Wenn Sie die entsprechende Anwendung abonniert haben ("apama-small"), sehen Sie außerdem die Option **Eigene Apama-Regel hochladen**, um [eigene Apama CEP-Regeln](#uploading-cep-rules) als Anwendung hochzuladen. 

##### <a name="uploading-zip-files"></a>Hochladen von Web-Anwendungen 

Um eine Web-Anwendung hochzuladen, führen Sie folgende Schritte aus:

1. Klicken Sie **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**.
2. Wählen Sie im folgenden Dialog **Web-Anwendung hochladen**.
3. Ziehen Sie eine entsprechende ZIP-Datei in das dafür vorgesehene Feld oder navigieren Sie auf Ihrem Computer zu der Datei.

	<img src="/guides/images/benutzerhandbuch/admin-upload-zip-file.png" alt="Web-Anwendung hochladen" style="max-width: 50%">

Nachdem die Datei auf die Plattform hochgeladen wurde, wird die Anwendung erstellt. 

##### <a name="uploading-microservices"></a>Hochladen von Microservices

Um einen Microservice hochzuladen, führen Sie folgende Schritte aus:

1. Klicken Sie **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**.
2. Wählen Sie im folgenden Dialog **Microservice hochladen**.
3. Ziehen Sie eine entsprechende ZIP-Datei in das dafür vorgesehene Feld oder navigieren Sie auf Ihrem Computer zu der Datei.

	<img src="/guides/images/benutzerhandbuch/admin-upload-zip-file.png" alt="Web-Anwendung hochladen" style="max-width: 50%">

Nachdem die Datei auf die Plattform hochgeladen wurde, wird die Anwendung erstellt. 

>**Info**: Um Microservices zur Plattform hinzuzufügen, muss die gepackte Datei die Manifest-Datei und das Docker Image für den Microservice enthalten. Nähere Informationen zum Vorbereiten und Deployen des Microservice-Pakets finden Sie unter [Microservice package reference](/guides/reference/microservice-package) im Reference guide.

##### <a name="external-application"></a>Verweisen auf eine externe Anwendung

Um eine Anwendung hinzuzufügen, die auf eine externe Anwendung verweist, führen Sie folgende Schritte aus:

1. Klicken Sie **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**.
2. Wählen Sie im folgenden Dialog **Externe Anwendung**.
<br><br>
<img src="/guides/images/benutzerhandbuch/admin-own-applications-external.png" alt="Externe Anwendung" style="max-width: 50%">
<br><br>
3. Geben Sie im nächsten Fenster einen Namen für die Anwendung ein. Der Name wird als Titel oben links auf der Anwendungsseite angezeigt. Er wird außerdem im Application Switcher verwendet.  
5. Geben Sie einen Anwendungsschlüssel ein, um diese Anwendung zu identifizieren.
6. Geben Sie die externe URL ein, unter welcher auf die Anwendung zugegriffen werden kann. 
7. Klicken Sie **Speichern**, um die Anwendung zu erstellen.

Weitere Informationen zu den Feldern finden Sie auch unter [Anwendungsattribute](#application-properties). 

##### <a name="clone-application"></a>Duplizieren einer existierenden Anwendung

Das Duplizieren einer Anwendung ist erforderlich, wenn Sie eine abonnierte Anwendung nach Ihren eigenen Bedürfnissen anpassen möchten. 

Das Duplizieren einer abonnierten Anwendung erzeugt ein entsprechendes Duplikat als eigene Anwendung mit einem Link auf die Originalanwendung.

>**Info**: Wenn Sie möchten, dass Ihre "eigene Anwendung" eine abonnierte Standardanwendung überschreibt, setzen Sie den Pfad der "eigenen Anwendung" auf den Pfad der ursprünglich abonnierten Anwendung.

Führen Sie die folgende Schritte aus, um eine Anwendung zu duplizieren:

1.  Klicken Sie **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**.
2.  Wählen Sie im folgenden Dialog **Existierende Anwendung duplizieren**.
3.  Wählen Sie die gewünschte Anwendung aus der Auswahlliste. 
<br><br>
<img src="/guides/images/benutzerhandbuch/admin-own-applications-duplicate.png" alt="Anwendung duplizieren" style="max-width: 50%">
<br><br>
4.  Geben Sie im nächsten Fenster den Namen der Anwendung ein. Standardmäßig wird der Name der Originalanwendung, erweitert durch eine Zahl, vorgeschlagen. Der Name wird als Titel oben links auf der Anwendungsseite angezeigt. Er wird außerdem im Application Switcher verwendet.
5.  Geben Sie einen Anwendungsschlüssel ein, um die Anwendung zu identifizieren. Standardmäßig wird der Anwendungsschlüssel der Originalanwendung, erweitert durch eine Zahl, vorgeschlagen. 
6.  Geben Sie einen Pfad für die Anwendung ein, Dieser Pfad ist Teil der URL, um die Anwendung aufzurufen. Standardmäßig wird der Pfad der Originalanwendung, erweitert durch eine Zahl, vorgeschlagen. Wenn Sie hier den Pfad der Originalanwendung verwenden, wird Ihre eigene Anwendung die Originalanwendung überschreiben.
7.  Klicken Sie abschließend **Duplizieren**, um die Anwendung zu erstellen.

Weitere Informationen zu den Feldern finden Sie auch unter [Anwendungsattribute](#application-properties).  

##### <a name="uploading-cep-rules"></a>Hochladen eigener Apama-Regeln

> **Info:** Um eigene Apama CEP-Regeln als Anwendung hochladen zu können, müssen Sie die Anwendung "apama-small" abonniert haben. 

 Um eine eigene Apama CEP-Regel hochzuladen, führen Sie folgende Schritte aus:

1. Klicken Sie **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**.
2. Wählen Sie im folgenden Dialog **Eigene Apama-Regel hochladen**.
3. Ziehen Sie eine entsprechende Datei in das dafür vorgesehene Feld oder navigieren Sie auf Ihrem Computer zu der Datei. Dabei muss es sich um eine einzelne mon-Datei mit einer Reihe von Ereignisdefinitionen und Monitoren handeln. 

Nachdem die Datei auf die Plattform hochgeladen wurde, wird eine Anwendung des Typs "Apama CEP-Regel" erstellt. 

<img src="/guides/images/users-guide/Administration/Admin_ApplicationCEPRule.png" alt="Uploading zip file" style="max-width: 100%">

>**Info:** Sie können zu einer Anwendung des Typs "Apama CEP-Regel" keine Plugins hinzufügen. 


#### <a name="editing-and-removing"></a>Bearbeiten und Löschen eigener Anwendungen

**Bearbeiten**

Klicken Sie auf eine Anwendung, um diese zu bearbeiten oder klicken Sie auf das Menüsymbol und wählen Sie **Bearbeiten** im Kontextmenü.

In der Registerkarte **Attribute** können einige Felder bearbeitet werden, abhängig vom Typ der Anwendung.
 
> **Wichtig:** Ändern Sie niemals die Namen der Standardanwendungen (z. B. Device Management, Cockpit), sonst schlägt die Initialisierung des Mandanten fehl.

**Entfernen**

Um eine Anwendung zu löschen, klicken Sie auf das Menüsymbol und wählen Sie im Kontextmenü **Entfernen**.

Wenn Sie eine Anwendung löschen, die eine abonnierte Anwendung überschreibt, wird die derzeit abonnierte Anwendung für alle Benutzer verfügbar. Die Benutzer profitieren so außerdem von zukünftigen Upgrades der abonnierten Anwendung.

Abonnierte Anwendungen können nicht gelöscht werden. Dies kann nur durch den Eigentümer der Anwendung erfolgen.


#### <a name="add-remove-plugin"></a>Hinzufügen und Entfernen von Plugins

>**Wichtig**: Diese Plugin-Funktionalität ist veraltet und nur in Versionen vor 9.16 verfügbar. 

Um die Funktionen einer Anwendung zu konfigurieren oder zu erweitern, können Plugins hinzugefügt werden.

>**Info**: Plugins können nur zu eigenen Anwendungen hinzugefügt werden, da die Anwendung selbst beim Hinzufügen eines Plugins modifiziert wird. Wenn Sie ein Plugin zu einer abonnierten Anwendung hinzufügen möchten, muss die Anwendung zunächst in eine eigene Anwendung dupliziert werden. Dieser Vorgang wird durch den Administrationsassistenten unterstützt.

Klicken Sie **Plugin hinzufügen** auf der Karte der gewünschten Anwendung, um ein Plugin hinzuzufügen.

Die Registerkarte **Plugin** für die Anwendung wird geöffnet und zeigt alle vorhandenen Plugins an. Außerdem können weitere Plugins durch Ablegen einer ZIP-Datei oder Durchsuchen Ihres Computers hinzugefügt werden.

![Plugins](/guides/images/benutzerhandbuch/admin-plugins.png)

Um eine Regel zu entfernen, bewegen Sie den Mauszeiger darüber und klicken Sie **Entfernen**.

Die folgenden beiden Tabellen zeigen die Navigator- und Menüelemente mit ihren jeweiligen Plugins.

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

#### Wiederherstellen einer älterer Anwendungsversion

Benutzer können ältere Versionen einer Anwendung aus einem Archiv wiederherstellen:

1.  Klicken Sie zum Öffnen auf die gewünschte Anwendung.
2.  Wechseln Sie zur Registerkarte **Archiv**.
3.  Öffnen Sie das Kontextmenü der gewünschten Version über das Menüsymbol und klicken Sie **Aktivieren**, um diese Version zur aktiven Version zu machen.
4.  Klicken Sie **Entfernen** um eine Version aus dem Archiv zu löschen.

> **Info**: Die Registerkarte **Archiv** steht für abonnierte Anwendungen nicht zur Verfügung, da nur der Eigentümer der Anwendung ältere Versionen wiederherstellen kann.

#### Hochladen von Archiven

Mehrere Archivdateiversionen können in Cumulocity gespeichert werden, wenn Sie durch das Hochladen von ZIP- oder mon-Dateien erstellt wurden. Jede Version wird als Archiv bezeichnet. Es können verschiedene Versionen gleichzeitig hochgeladen werden und Sie können zwischen den Versionen wechseln.

Zum Hochladen eines Archiv führen Sie die folgenden Schritte aus:

1.  Klicken Sie zum Öffnen auf die gewünschte Anwendung.
2.  Wechseln Sie zur Registerkarte **Archivdateien**.
3.  Klicken Sie **Archiv hochladen** und navigieren Sie zu der Datei auf Ihrem Computer oder ziehen Sie die Datei auf das entsprechende Feld.
4.  Klicken Sie **Hochladen**, um das Archiv auf Ihr Cumulocity-Konto hochzuladen.

<img src="/guides/images/benutzerhandbuch/admin-upload-archive.png" alt="Archiv hochladen" style="max-width: 100%">

Hochgeladene Archive können aktiviert, heruntergeladen oder gelöscht werden. Das aktive Archiv (durch ein Cloud-Symbol gekennzeichnet) ist die Version der Anwendung, die aktuell den Benutzern Ihres Kontos zur Verfügung steht. Diese Version kann nicht gelöscht werden.

Um die aktive Version zu wechseln, öffnen Sie das Kontextmenü der Version, die Sie aktivieren möchten, und klicken Sie **Aktivieren**.

