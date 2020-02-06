---
weight: 30
title: Verwalten von Anwendungen
layout: redirect
---


In der Cumulocity-Plattform gibt es zwei Arten von Anwendungen:

* [Abonnierte Anwendungen](#subscribed-applications) - alle Anwendungen, die für den Mandanten abonniert sind (entweder durch die Plattform oder einen Service Provider), aber die er nicht besitzt. Diese können vom Benutzer nicht hinzugefügt, geändert oder entfernt werden.
* [Eigene Anwendungen](#own-applications) - alle Anwendungen, die der Mandant besitzt. Benutzer können diese Anwendungen auf verschiedene Weise [als eigene Anwendungen hinzufügen](#adding-applications). 

Beide Anwendungsarten finden sich im Menü **Anwendungen** im Navigator:

<img src="/images/benutzerhandbuch/Administration/admin-menu.png" alt="Applications menu"> 

### <a name="application-properties"></a>Anwendungsattribute

Klicken Sie auf eine Anwendungskarte, um die Attribute der Anwendung anzuzeigen.

<img src="/images/benutzerhandbuch/Administration/admin-application-properties.png" alt="Application properties" style="max-width: 100%">

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
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ID</td>
<td style="text-align:left">Eindeutige ID zur Identifikation der Anwendung</td>
<td style="text-align:left">Automatisch generiert</td>
<td style="text-align:left">Automatisch generiert</td>
<td style="text-align:left">Automatisch generiert</td>
</tr>
<tr>
<td style="text-align:left">Name</td>
<td style="text-align:left">Anwendungsname. Wird als Titel oben links auf der Anwendungsseite angezeigt und im Application Switcher verwendet.</td>
<td style="text-align:left">Automatisch generiert</td>
<td style="text-align:left">Automatisch generiert, basierend auf dem Namen der ZIP-Datei</td>
<td style="text-align:left">Vom Benutzer vergeben</td>
</tr>
<tr>
<td style="text-align:left">Anwendungsschlüssel</td>
<td style="text-align:left">Wird zur Identifikation der Anwendung verwendet. Wird außerdem verwendet, um die Anwendung als Abonnement zur Verfügung zu stellen, siehe <a href="/concepts/applications" class="no-ajaxy">Concepts Guide</a>.</td>
<td style="text-align:left">Automatisch generiert</td>
<td style="text-align:left">Automatisch generiert, basierend auf dem Namen der ZIP-Datei</td>
<td style="text-align:left">Vom Benutzer vergeben</td>
</tr>
<tr>
<td style="text-align:left">Typ</td>
<td style="text-align:left">Anwendungstyp</td>
<td style="text-align:left">Gehostete Anwendung</td>
<td style="text-align:left">Microservice</td>
<td style="text-align:left">Externe Anwendung</td>
</tr>
<tr>
<td style="text-align:left">Pfad</td>
<td style="text-align:left">Teil der URL, die die Anwendung aufruft</td>
<td style="text-align:left">Automatisch generiert</td>
<td style="text-align:left">Automatisch generiert als .../service/&lt;microservice name&gt;</td>
<td style="text-align:left">Vom Benutzer bereitgestellt. Wenn Sie beispielsweise "hallo" als Anwendungspfad verwenden, lautet die URL der Anwendung "/apps/hallo".</td>
</tr>
</tbody>
</table>

>**Info**: ID und Typ können nicht geändert werden.

### <a name="subscribed-applications"></a>Abonnierte Anwendungen

Cumulocity stellt vielerlei Anwendungen für verschiedene Zwecke bereit. 

Standardmäßig sind folgende Anwendungen im Standard Tenant verfügbar:

<table>
<thead>
<tr>
<th style="text-align:center">Anwendung</th>
<th style="text-align:left">Funktionalität</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="/benutzerhandbuch/administration" class="no-ajaxy">Administration</a></td>
<td style="text-align:left">Gibt Konto-Administratoren die Möglichkeit, Rollen, Mandanten und Anwendungen zu verwalten.</td>
</tr>
<tr>
<td style="text-align:center"><a href="/benutzerhandbuch/cockpit" class="no-ajaxy">Cockpit</a></td>
<td style="text-align:left">Verwalten und überwachen Sie IoT-Assets und Daten aus Geschäftssicht.</td>
<tr>
<td style="text-align:center"><a href="/benutzerhandbuch/device-management" class="no-ajaxy">Device Management</a></td>
<td style="text-align:left">Verwalten und überwachen Sie Geräte und führen Sie die Steuerung und Fehlerbehebung von Geräten per Fernzugriff durch.</td>
<tr>
<td style="text-align:center"><a href="/benutzerhandbuch/device-management#simulator" class="no-ajaxy">Device simulator</a></td>
<td style="text-align:left">Simulieren Sie alle Aspekte von IoT-Geräten.</td>
</tr>
<tr>
<td style="text-align:center"><a href="/benutzerhandbuch/cockpit#smart-rules" class="no-ajaxy">Smart Rules</a></td>
<td style="text-align:left">Verwenden Sie die Smart Rule Engine und erstellen Sie Smart Rules, um Aktionen anhand von Echtzeitdaten auszuführen. Erfordert eine der folgenden Anwendungen: "Cep", "Apama“</td>
</tr>
</tbody>
</table>

Je nach Ihrer Installation und/oder optionalen Services können in Ihrem Mandanten andere abonnierte Anwendungen angezeigt werden. 

Unter [Applications > application list](/reference/applications/#application-names) im Reference Guide finden Sie eine detaillierte Auflistung aller potenziell verfügbaren Anwendungen, jeweils mit Informationen zu Anwendungstyp und Verfügbarkeit und der Zeichenkette, mit der in der API auf die jeweilige Anwendung verwiesen werden kann.
 
### <a name="own-applications"></a>Eigene Anwendungen

Eigene Anwendungen können sein: 

* Duplikate von abonnierten Anwendungen (um diese den eigenen Bedürfnissen anzupassen)
* webbasierte UI-Anwendungen, die entweder als eigenständige Anwendungen oder als Plugins innerhalb einer Anwendung (z. B. als Widget in der Cockpit-Anwendung) implementiert sind
* serverseitige Geschäftslogik, die als Microservice implementiert ist

Der Name wird als Titel oben links auf der Anwendungsseite angezeigt. Er wird außerdem im Application Switcher verwendet.

<img src="/images/benutzerhandbuch/Administration/admin-app-switcher.png" alt="App switcher">

Eigene Anwendungen werden unter **Eigene Anwendungen** im Menü **Anwendungen** verwaltet. 

Auf der Seite **Eigene Anwendungen** wird eine Liste aller eigenen Anwendungen in Ihrem Konto angezeigt.

<img src="/images/benutzerhandbuch/Administration/admin-applications-own.png" alt="Own applications">

Um weitere Informationen zu der Anwendung anzuzeigen, klicken Sie einfach auf deren Karte. Weitere Informationen zu den Feldern finden Sie unter [Anwendungsattribute](#application-properties). 

Klicken Sie **Öffnen** auf der Karte einer Anwendung, um die Anwendung direkt von hier zu starten. 


#### <a name="adding-applications"></a>So fügen Sie eine eigene Anwendung hinzu

Klicken Sie **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**. 

<img src="/images/benutzerhandbuch/Administration/admin-application-add.png" alt="Add application methods">

Wählen Sie im darauf folgenden Dialog eine der folgenden Methoden:

* [Web-Anwendung hochladen](#uploading-zip-files), um eine Web-Anwendung mittels einer ZIP-Datei bereitzustellen
* [Microservice hochladen](#uploading-microservices), um einen Microservice mittels einer ZIP-Datei bereitzustellen
* [Externe Anwendung](#external-application), um auf eine Anwendung zu verweisen, die woanders betrieben wird 
* [Existierende Anwendung duplizieren](#clone-application), um eine bestehende Anwendung zu duplizieren

##### <a name="uploading-zip-files"></a>So laden Sie eine Web-Anwendung hoch

1. Klicken Sie **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**.
2. Wählen Sie **Web-Anwendung hochladen**.
3. Legen Sie im darauf folgenden Dialog eine entsprechende ZIP-Datei ab oder navigieren Sie in Ihrem Dateisystem zu der Datei.

Die Anwendung wird erstellt, sobald die ZIP-Datei erfolgreich hochgeladen wurde.

<img src="/images/benutzerhandbuch/Administration/admin-application-upload-web-app.png" alt="Uploading zip file">

##### <a name="uploading-microservices"></a>So laden Sie einen Microservice hoch

1. Klicken Sie **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**.
2. Wählen Sie **Microservice hochladen**.
3. Legen Sie im darauf folgenden Dialog eine entsprechende ZIP-Datei ab oder navigieren Sie in Ihrem Dateisystem zu der Datei. Beachten Sie, dass die hochzuladende Datei nicht größer als 500 MB sein darf.

Der Microservice wird erstellt, sobald die ZIP-Datei erfolgreich hochgeladen wurde.

>**Wichtig**: Um Microservices zur Plattform hinzuzufügen, muss die ZIP-Datei die Manifest-Datei und das Docker Image für den Microservice enthalten. Zur Vorbereitung und Bereitstellung des Microservice-Pakets lesen Sie den Abschnitt [Packing](/microservice-sdk/concept/#packing) unter **General aspects** im Microservice SDK Guide.


##### <a name="external-application"></a>So verweisen Sie auf eine externe Anwendung

1. Klicken Sie **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**.
2. Wählen Sie **Externe Anwendung**.
<br><br>
<img src="/images/benutzerhandbuch/Administration/admin-application-external.png" alt="External application">
<br><br>
3. Geben Sie im darauf folgenden Dialog einen Namen für die Anwendung ein. Der Name wird als Titel oben links auf der Anwendungsseite angezeigt. 
5. Geben Sie einen Anwendungsschlüssel ein, um diese Anwendung zu identifizieren.
6. Geben Sie die externe URL ein, unter welcher auf die Anwendung zugegriffen werden kann. 
7. Klicken Sie **Speichern**, um die Anwendung zu erstellen.

Weitere Informationen zu den Feldern finden Sie auch unter [Anwendungsattribute](#application-properties). 

##### <a name="clone-application"></a>So duplizieren Sie eine Anwendung

Das Duplizieren einer Anwendung ist erforderlich, wenn Sie eine abonnierte Anwendung nach Ihren eigenen Bedürfnissen anpassen möchten. Das Duplizieren einer abonnierten Anwendung erzeugt ein entsprechendes Duplikat als eigene Anwendung mit einem Link auf die Originalanwendung.

1. Klicken Sie **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**.
2. Wählen Sie im folgenden Dialog **Existierende Anwendung duplizieren**.
3. Wählen Sie die gewünschte Anwendung aus der Auswahlliste. 
<br><br>
<img src="/images/benutzerhandbuch/Administration/admin-application-duplicate.png" alt="Duplicate application">
<br><br>
4. Geben Sie im nächsten Fenster den Namen der Anwendung ein. Standardmäßig wird der Name der Originalanwendung, erweitert durch eine Zahl, vorgeschlagen.
<br><br>
<img src="/images/benutzerhandbuch/Administration/admin-application-duplicate-2.png" alt="Duplicate application">
<br><br>
5. Geben Sie einen Anwendungsschlüssel ein, um die Anwendung zu identifizieren. Standardmäßig wird der Anwendungsschlüssel der Originalanwendung, erweitert durch eine Zahl, vorgeschlagen.
6. Geben Sie einen Pfad für die Anwendung ein. Dieser Pfad ist Teil der URL, um die Anwendung aufzurufen. Standardmäßig wird der Pfad der Originalanwendung, erweitert durch eine Zahl, vorgeschlagen. Wenn Sie hier den Pfad der Originalanwendung verwenden, wird Ihre eigene Anwendung die Originalanwendung überschreiben. 
7. Klicken Sie abschließend **Duplizieren**, um die Anwendung zu erstellen.

Weitere Informationen zu den Feldern finden Sie auch unter [Anwendungsattribute](#application-properties).

>**Info**: Wenn Sie möchten, dass Ihre "eigene Anwendung" eine abonnierte Standardanwendung überschreibt, setzen Sie den Pfad der "eigenen Anwendung" auf den Pfad der ursprünglich abonnierten Anwendung.


#### <a name="editing-and-removing"></a>So bearbeiten Sie eine eigene Anwendung

Klicken Sie einfach auf die Anwendung oder auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Bearbeiten**. 

In der Registerkarte **Attribute** können einige Felder bearbeitet werden, abhängig vom Typ der Anwendung.

>**Wichtig:** Ändern Sie niemals Namen der Systemanwendungen (z. B. "Device Management", "Cockpit"). Andernfalls schlägt die Mandanteninitialisierung fehl. 


#### So entfernen Sie eine eigene Anwendung

Klicken Sie auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Löschen**. 

Wenn Sie eine Anwendung löschen, die eine abonnierte Anwendung überschreibt, wird die derzeit abonnierte Anwendung für alle Benutzer verfügbar. Die Benutzer profitieren so außerdem von zukünftigen Upgrades der abonnierten Anwendung.

Abonnierte Anwendungen können nicht gelöscht werden. Dies kann nur durch den Eigentümer der Anwendung erfolgen.


#### <a name="add-remove-plugin"></a>Hinzufügen und Entfernen von Plugins

>**Wichtig**: Diese Plugin-Funktionalität ist veraltet und nur in Versionen vor 9.16 verfügbar.

Um die Funktionen einer Anwendung zu konfigurieren oder zu erweitern, können Plugins hinzugefügt werden. 

>**Info:** Wenn Sie möchten, dass Ihre "eigene Anwendung" eine abonnierte Standardanwendung überschreibt, setzen Sie den Pfad der "eigenen Anwendung" auf den Pfad der ursprünglich abonnierten Anwendung. Wenn Sie ein Plugin zu einer abonnierten Anwendung hinzufügen möchten, muss die Anwendung zunächst in eine eigene Anwendung dupliziert werden. Dieser Vorgang wird durch den Administrationsassistenten unterstützt.

Um ein Plugin hinzuzufügen, klicken Sie **Plugin hinzufügen** auf der Seite **Eigene Anwendungen**. 

Die Registerkarte **Plugin** für die Anwendung wird geöffnet und zeigt alle vorhandenen Plugins an. Außerdem können weitere Plugins durch Ablegen einer ZIP-Datei oder Durchsuchen Ihres Computers hinzugefügt werden.

Um eine Regel zu entfernen, bewegen Sie den Mauszeiger darüber und klicken Sie **Entfernen**.

Die folgenden beiden Tabellen zeigen die Navigator- und Menüelemente mit ihren jeweiligen Plugins.


|Navigator-Element|Plugin
|:---|:---|
|Willkommen|Begrüßungsbildschirm
|Startseite|Cockpit-Startseite
|Smart Rules|Smart Rules UI
|Gruppen|Groups Hierarchy
|Daten-Explorer|Data Point Explorer UI
|Datenpunktbibliothek|Data Point Explorer UI
|Reporting|Reporting
|Berichte|Dashboard (Beachten Sie, dass es zwei Plugins mit diesem Namen gibt. Wählen Sie dasjenige mit der folgenden Beschreibung: "Reports are stand alone dashboards without a context".)
|Alarme|Alarm-Management|

|Menüelement|Plugin|
|:--------|:-----|
|Info|Nicht deaktivierbar|
|Kind-Assets|Nicht deaktivierbar|
|Berechtigungen|Device Permission Management Plugin|
|Daten-Explorer|Data Point Explorer UI|

Beachten Sie das "UI" am Ende des Plugin-Namens.

#### Hochladen von Archiven

Es können mehrere Anwendungsversionen in Cumulocity gespeichert werden, indem sie als ZIP- oder MON-Dateien hochgeladen werden. Jede Version wird als Archiv bezeichnet. Es können verschiedene Versionen gleichzeitig hochgeladen werden und Sie können zwischen den Versionen wechseln.

##### So laden Sie ein Archiv hoch

1. Klicken Sie zum Öffnen auf die gewünschte Anwendung.
2. Wechseln Sie zur Registerkarte **Archiv**.
3. Klicken Sie **Archiv hochladen** und navigieren Sie zu der Datei auf Ihrem Computer oder ziehen Sie die Datei auf das entsprechende Feld.
4. Klicken Sie **Hochladen**, um das Archiv auf Ihr Cumulocity-Konto hochzuladen.

<img src="/images/benutzerhandbuch/Administration/admin-application-archive.png" alt="Application archive">

Das aktive Archiv (durch ein Cloud-Symbol gekennzeichnet) ist die Version der Anwendung, die aktuell den Benutzern Ihres Kontos zur Verfügung steht. Diese Version kann nicht gelöscht werden. 

>**Info**: Die Registerkarte **Archiv** steht für abonnierte Anwendungen nicht zur Verfügung, da nur der Eigentümer der Anwendung ältere Versionen wiederherstellen kann.

##### So stellen Sie eine ältere Anwendungsversion wieder her

Benutzer können ältere Versionen einer Anwendung aus einem Archiv wiederherstellen.

1. Klicken Sie zum Öffnen auf die gewünschte Anwendung.
2. Wechseln Sie zur Registerkarte **Archiv**.
3. Öffnen Sie das Kontextmenü der gewünschten Version über das Menüsymbol und klicken Sie **Aktivieren**, um diese Version zur aktiven Version zu machen.
4. Klicken Sie **Entfernen** um eine Version aus dem Archiv zu löschen.

<img src="/images/benutzerhandbuch/Administration/admin-application-set-as-archive.png" alt="Application set as archive">

### Überwachen von Microservices

Es gibt zwei Möglichkeiten, Microservices in der Cumulocity-Plattform zu überwachen.

#### Statusinformation

Der Status eines Microservices kann in der Registerkarte **Status** der entsprechenden Anwendung überprüft werden. 

<img src="/images/benutzerhandbuch/Administration/admin-microservice-status.png" alt="Microservice status" style="max-width: 100%">

Folgende Information werden in der Registerkarte **Status** angezeigt:

* Instanzen: Anzahl der aktiven, gestörten und erwarteten Microservice-Instanzen für den aktuellen Mandanten
* Abonnierte Mandanten: Anzahl der aktiven, gestörten und erwarteten Microservice-Instanzen für alle Untermandanten, für die der Microservice abonniert ist
* Alarme: Alarme für die aktuelle Anwendung, angezeigt in Echtzeit
* Ereignisse: Ereignisse für die aktuelle Anwendung, angezeigt in Echtzeit

Die Statusinformation ist sowohl für abonnierte als auch für eigene Anwendungen verfügbar. Die Informationen zu den abonnierten Mandanten sind jedoch nur für den Besitzer der Anwendung sichtbar. 

Um den Status sehen zu können, benötigen Sie folgende Berechtigungen: ROLE&#95;APPLICATION&#95;MANAGEMENT&#95;READ und ROLE&#95;INVENTORY&#95;READ

#### Logdateien

Für detaillierte Informationen über den Status von Microservices stehen außerdem Logdaten zur Verfügung.

Um Logdaten anzuzeigen, öffnen Sie die Registerkarte **Logdateien** des jeweiligen Microservice.

<img src="/images/benutzerhandbuch/Administration/admin-microservice-log.png" alt="Microservice log" style="max-width: 100%">

Links oben auf der Seite können Sie die Microservice-Instanz auswählen, für die Sie Logdaten anzeigen möchten. Darüberhinaus können Sie rechts Ihre bevorzugte Schriftgröße und das Themendesign wählen.

Falls Ihr Microservice in zwei Instanzen aufgeteilt wurde, können Sie zwar zwischen diesen wechseln, es ist jedoch nicht möglich, die Logdaten beider Instanzen gleichzeitig anzuzeigen.

Es gibt keine Möglichkeit, die Logdaten der zuvor ausgeführten Instanzen anzuzeigen, allerdings wird in jeder Instanz ein Docker-Container ausgeführt, und wenn nur dieser (nicht die gesamte Instanz) neu gestartet wurde, sollte es möglich sein, die Logdaten des aktuell aktiven sowie des kürzlich beendeten Docker-Containers anzuzeigen.

Logdaten werden aus dem Docker-Container immer mittels der beiden Quellen `stdout` und `stderr` geladen und es gibt keine Möglichkeit, nach der Quelle zu unterscheiden bzw. zu filtern. 

Initial werden die Logdaten der ausgewählten Microservice-Instanz für die letzten 10 Minuten angezeigt. Das abgebildete Zeitintervall wird unter den Daten angezeigt.

Klicken Sie die Pfeiltasten "Vor" oder "Zurück", um das Zeitintervall um jeweils 10 Minuten zu verlängern bzw. zu verkürzen. Es gibt keine Möglichkeit, die Logdaten für einen benutzerdefinierten Zeitpunkt abzurufen.

Wenn es im ausgewählten Zeitintervall keine Logdaten gibt, wird eine entsprechende Meldung angezeigt.

<img src="/images/benutzerhandbuch/Administration/admin-microservice-no-logs.png" alt="Microservice log">

Um Logdaten lesen zu können, benötigen Sie die Berechtigung EVENT_READ.


### <a name="default-applications"></a>Standardanwendungen

Um Standardanwendungen für Untermandanten zu definieren, kann beim Anlegen neuer Mandanten eine Mandantenregel mit den folgenden Optionen erstellt und verwendet werden:

* category: configuration
* key: default.tenant.applications
* value: kommaseparierte Liste von Anwendungsnamen, z. B. administration,devicemanagement,cockpit,feature-microservice-hosting,feature-cep-custom-rules

Um Standard-Microservices für Untermandanten zu definieren, kann die folgende Mandantenoption für die Mandantenregel definiert werden:

* category: configuration
* key: default.tenant.microservices
* value: kommaseparierte Liste von Microservices-Namen, z. B. device-simulator,smartrule,cep
