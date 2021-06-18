---
weight: 30
title: Verwalten von Anwendungen
layout: redirect
---

In der Cumulocity IoT-Plattform gibt es zwei Arten von Anwendungen:

* [Abonnierte Anwendungen](#subscribed-applications) - alle Anwendungen, die für den Mandanten abonniert sind (entweder durch die Plattform oder einen Service Provider), aber die er nicht besitzt. Diese können vom Benutzer nicht hinzugefügt, geändert oder entfernt werden.
* [Eigene Anwendungen](#own-applications) - alle Anwendungen, die der Mandant besitzt. Benutzer können diese Anwendungen auf verschiedene Weise [als eigene Anwendungen hinzufügen](#adding-applications).

Klicken Sie auf **Eigene Anwendungen** oder **Abonnierte Anwendungen** im Menü **Anwendungen** des Navigators, um eine Liste aller entsprechenden Anwendungen in Ihrem Konto anzuzeigen.

Zudem gibt es in Enterprise Tenants die Möglichkeit, **Standardabonnements** zu konfigurieren, d. h. eine Liste von Anwendungen festzulegen, die beim Anlegen standardmäßig für jeden neuen Mandanten und/oder bei einem Plattform-Upgrade für alle bestehenden Mandanten abonniert werden. Weitere Informationen finden Sie unter [Standardabonnements](/benutzerhandbuch/enterprise-edition-de/#default-subscriptions).

<img src="/images/benutzerhandbuch/Administration/admin-menu.png" alt="Applications menu">

### <a name="application-properties"></a>Anwendungsattribute

Klicken Sie auf eine Anwendungskarte, um die Attribute der Anwendung anzuzeigen.

<img src="/images/benutzerhandbuch/Administration/admin-application-properties.png" alt="Application properties" style="max-width: 100%">

Für jede Anwendung werden die folgenden Attribute angezeigt:

<table>
<col width= 20%>
<col width= 20%>
<col width= 20%>
<col width= 20%>
<col width= 20%>
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

Bei Anwendungen des Typs "Microservice" finden Sie zusätzlich Informationen zu dessen Version sowie zu dessen Isolationsstufe und Abrechnungsmodus. Details zu diesen Parametern siehe [Enterprise Tenant > Verwalten von Mandanten > Microservice-Nutzung](/benutzerhandbuch/enterprise-edition-de/#microservice-usage).  


### <a name="subscribed-applications"></a>Abonnierte Anwendungen

Cumulocity IoT stellt vielerlei Anwendungen für verschiedene Zwecke bereit.

Je nach Ihrer Installation und/oder Ihren optionalen Services zeigt Ihr Mandant eine Auswahl der unten genannten potenziell verfügbaren Anwendungen an.

Die Spalten enthalten folgende Informationen:

* **Anwendung**: Anwendungsname, wie er in der "Administration"-Anwendung angezeigt wird.
* **Funktionalität**: Kurzbeschreibung.
* **Name**: Identifikation der Anwendung in der API. Wenn Sie die Anwendung über eine API für einen Mandanten abonnieren möchten, verwenden Sie diese Zeichenkette im Argument (als Name).
* **Typ**: Technischer Typ der Anwendung. "Funktion" bezieht sich auf integrierte Anwendungsabonnements, d. h., diese Anwendungen werden nicht durch ein spezielles Artefakt (Microservice oder Webanwendung) dargestellt.

### Standardanwendungen des Standard Tenant

Im Standard Tenant finden Sie die folgenden Standardanwendungen:

<table>
<col width="200">
<col width="350">
<col width="200">
<thead>
<tr>
<th style="text-align:left">Anwendung</th>
<th style="text-align:left">Funktionalität</th>
<th style="text-align:left">Name (wie in der API verwendet)</th>
<th style="text-align:left">Typ</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/administration-de" class="no-ajaxy">Administration</a></td>
<td style="text-align:left">Gibt Konto-Administratoren die Möglichkeit, Rollen, Mandanten und Anwendungen zu verwalten.</td>
<td style="text-align:left">administration</td>
<td style="text-align:left">Web-Anwendung</td>
</tr>
<tr>
<td style="text-align:left"><a href="/apama/overview-analytics/" class="no-ajaxy">Apama-ctrl*</a></td>
<td style="text-align:left">Laufzeit für Analytics Builder, EPL Apps und Smart Rules.</td>
<td style="text-align:left">apama-ctrl-* (verschiedene Zeichenketten für verschiedene Größen-/Kapazitätsoptionen)</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/apama/overview-analytics/" class="no-ajaxy">Streaming Analytics</a></td>
<td style="text-align:left">Analytics Builder-Modelle und EPL-Apps (sofern aktiviert) verwalten und bearbeiten.</td>
<td style="text-align:left">Streaming Analytics</td>
<td style="text-align:left">Web-Anwendung</td>
</tr>
<tr>
<td style="text-align:left"><a href="/event-language" class="no-ajaxy">Cep</a></td>
<td style="text-align:left"><b>Diese Anwendung ist veraltet und keine Standardanwendung im Standard Tenant mehr. Apama ist nun die Standard-CEP-Engine.</b> <br>Definieren Sie geschäftliche Aktivitäten anhand von Echtzeitdaten über die Esper CEP Engine. Diese CEP-Variante verwendet eine gemeinsame Instanz für mehrere Mandanten. Siehe "Cep-small" für eine mandantenspezifische Bereitstellung.</td>
<td style="text-align:left">cep</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/cockpit-de" class="no-ajaxy">Cockpit</a></td>
<td style="text-align:left">Verwalten und überwachen Sie IoT-Assets und Daten aus Geschäftssicht.</td>
<td style="text-align:left">cockpit</td>
<td style="text-align:left">Web-Anwendung</td>
</tr>
<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/device-management-de" class="no-ajaxy">Device Management</a></td>
<td style="text-align:left">Verwalten und überwachen Sie Geräte und führen Sie die Steuerung und Fehlerbehebung von Geräten per Fernzugriff durch.</td>
<td style="text-align:left">devicemanagement</td>
<td style="text-align:left">Web-Anwendung</td>
</tr>
<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/device-management-de#simulator" class="no-ajaxy">Device simulator</a></td>
<td style="text-align:left">Simulieren Sie alle Aspekte von IoT-Geräten.</td>
<td style="text-align:left">device-simulator</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/cockpit-de#reports" class="no-ajaxy">Report agent</a></td>
<td style="text-align:left">Ermöglicht das Planen von Datenexporten aus der Cockpit-Anwendung heraus.</td>
<td style="text-align:left">report-agent</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/cockpit-de#smart-rules" class="no-ajaxy">Smart Rules</a></td>
<td style="text-align:left">Verwenden Sie die Smart Rule Engine und erstellen Sie <a href="/benutzerhandbuch/cockpit-de#smart-rules" class="no-ajaxy">Smart Rules</a>, um Aktionen anhand von Echtzeitdaten auszuführen. Erfordert eine der folgenden Anwendungen: "Cep", "Apama"</td>
<td style="text-align:left">smartrule</td>
<td style="text-align:left">Microservice</td>
</tr>
</tbody>
</table>


### Enterprise Tenant-Anwendungen

<table>
<col width="200">
<col width="350">
<col width="200">
<thead>
<tr>
<th style="text-align:left">Anwendung</th>
<th style="text-align:left">Funktionalität</th>
<th style="text-align:left">Name (wie in der API verwendet)</th>
<th style="text-align:left">Typ</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/enterprise-edition-de/#branding" class="no-ajaxy">Branding</a></td>
<td style="text-align:left">Passen Sie das Erscheinungsbild Ihrer Mandanten nach Ihren Vorlieben an.</td>
<td style="text-align:left">branding</td>
<td style="text-align:left">Funktion</td>
</tr>
<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/enterprise-edition-de/#data-broker" class="no-ajaxy">Data Broker</a></td>
<td style="text-align:left">Bietet die Möglichkeit, Daten gezielt mit anderen Mandanten zu teilen.</td>
<td style="text-align:left">feature-broker</td>
<td style="text-align:left">Funktion</td>
</tr>
<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/enterprise-edition-de#customization" class="no-ajaxy">SSL-Verwaltung</a></td>
<td style="text-align:left">Aktivieren Sie einen eigenen benutzerdefinierten Domain-Namen durch Verwendung eines SSL-Zertifikats.</td>
<td style="text-align:left">sslmanagement</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/enterprise-edition-de/#user-hierarchies" class="no-ajaxy">User hierarchies</a></td>
<td style="text-align:left">Hiermit können Sie in Cumulocity IoT verschiedene Organisationen getrennt verwalten, die dieselbe Datenbank teilen.</td>
<td style="text-align:left">feature-user-hierarchy</td>
<td style="text-align:left">Funktion</td>
</tr>
</tbody>
</table>

### Optionale Anwendungen

<table>
<col width="200">
<col width="350">
<col width="200">
<thead>
<tr>
<th style="text-align:left">Anwendung</th>
<th style="text-align:left">Funktionalität</th>
<th style="text-align:left">Name (wie in der API verwendet)</th>
<th style="text-align:left">Typ</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="/protocol-integration/lora-actility" class="no-ajaxy">Actility</a></td>
<td style="text-align:left">Schaffen Sie eine Schnittstelle zu LoRa-Geräten über Actility ThingPark.</td>
<td style="text-align:left">actility</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/event-language" class="no-ajaxy">CEP custom rules</a></td>
<td style="text-align:left"><b>Diese Anwendung ist veraltet.</b><br>Laden Sie Ihre eigenen mit Esper erstellten CEP-Regeln in einer mandantenspezifischen Bereitstellung hoch. Sie müssen die Anwendung "Cep-small" abonnieren, um diese Funktion nutzen zu können.</td>
<td style="text-align:left">feature-cep-custom-rules</td>
<td style="text-align:left">Funktion</td>
</tr>
<tr>
<td style="text-align:left"><a href="/event-language" class="no-ajaxy">Cep-small</a></td>
<td style="text-align:left"><b>Diese Anwendung ist veraltet.</b><br>CEP-Variante. Ermöglicht das Arbeiten mit CEP-Regeln auf Basis von Esper in einer mandantenspezifischen Bereitstellung (im Unterschied zu "Cep", das eine gemeinsame Instanz verwendet). Sie müssen "CEP custom rules" abonnieren, um eigene Esper CEP-Regeln hochladen zu können.</td>
<td style="text-align:left">cep-small</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/protocol-integration/cloud-fieldbus" class="no-ajaxy">Cloud Fieldbus</a></td>
<td style="text-align:left">Erfassen Sie Daten von Fieldbus-Geräten und verwalten Sie sie per Fernzugriff in Cumulocity IoT.</td>
<td style="text-align:left">feature-fieldbus4</td>
<td style="text-align:left">Funktion</td>
</tr>
<tr>
<td style="text-align:left"><a href="/cloud-remote-access/cra-general-aspects" class="no-ajaxy">Cloud Remote Access</a></td>
<td style="text-align:left">Implementiert Virtual Network Computing (VNC) für den Fernzugriff auf Bedienfelder und andere Geräte über einen Webbrowser.</td>
<td style="text-align:left">cloud-remote-access</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/device-management-de/#connectivity" class="no-ajaxy">Connectivity</a></td>
<td style="text-align:left">Schaffen Sie eine Schnittstelle zu Mobilgeräten über verschiedene SIM-Anbieter wie Jasper, Ericsson und Comarch.</td>
<td style="text-align:left">connectivity-agent-server</td>
<td style="text-align:left">Microservice</td>
</tr>
<td style="text-align:left">Microservice hosting</td>
<td style="text-align:left">Hosten Sie Ihre eigenen Microservices in Cumulocity IoT.</td>
<td style="text-align:left">feature-microservice-hosting</td>
<td style="text-align:left">Funktion</td>
</tr>
<tr>
<td style="text-align:left"><a href="/protocol-integration/impact" class="no-ajaxy">Nokia IMPACT agent</a></td>
<td style="text-align:left">Schaffen Sie eine Schnittstelle zu heterogenen Geräten über den Nokia IMPACT Data Collector.</td>
<td style="text-align:left">impact</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/protocol-integration/opcua" class="no-ajaxy">OPCUA</a></td>
<td style="text-align:left">Kommunizieren Sie mit OPC UA-Servern über ein OPC UA-Geräte-Gateway. </td>
<td style="text-align:left">opcua-mgmt-service</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/protocol-integration/sigfox" class="no-ajaxy">Sigfox</a></td>
<td style="text-align:left">Schaffen Sie eine Schnittstelle zu Sigfox-Geräten über die Sigfox-Cloud.</td>
<td style="text-align:left">sigfox-agent</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/enterprise-edition-de/#tenant-sla-monitoring" class="no-ajaxy">Tenant SLA Monitoring</a></td>
<td style="text-align:left">Gibt Service Providern die Möglichkeit, die Verfügbarkeit und Reaktionszeit von Mandanten und Untermandanten zu überwachen.</td>
<td style="text-align:left">tenant-sla-monitoring</td>
<td style="text-align:left">Microservice</td>
</tr>

</tbody>
</table>


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

Klicken Sie auf **Öffnen** auf der Karte einer Anwendung, um die Anwendung direkt von hier zu starten.


#### <a name="adding-applications"></a>So fügen Sie eine eigene Anwendung hinzu

Klicken Sie auf **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**.

<img src="/images/benutzerhandbuch/Administration/admin-application-add.png" alt="Add application methods">

Wählen Sie im darauf folgenden Dialog eine der folgenden Methoden:

* [Web-Anwendung hochladen](#uploading-zip-files), um eine Web-Anwendung mittels einer ZIP-Datei bereitzustellen
* [Microservice hochladen](#uploading-microservices), um einen Microservice mittels einer ZIP-Datei bereitzustellen
* [Externe Anwendung](#external-application), um auf eine Anwendung zu verweisen, die woanders betrieben wird
* [Existierende Anwendung duplizieren](#clone-application), um eine bestehende Anwendung zu duplizieren

##### <a name="uploading-zip-files"></a>So laden Sie eine Web-Anwendung hoch

1. Klicken Sie auf **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**.
2. Wählen Sie **Web-Anwendung hochladen**.
3. Legen Sie im darauf folgenden Dialog eine entsprechende ZIP-Datei ab oder navigieren Sie in Ihrem Dateisystem zu der Datei.

Die Anwendung wird erstellt, sobald die ZIP-Datei erfolgreich hochgeladen wurde.

<img src="/images/benutzerhandbuch/Administration/admin-application-upload-web-app.png" alt="Uploading zip file">

##### <a name="uploading-microservices"></a>So laden Sie einen Microservice hoch

1. Klicken Sie auf **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**.
2. Wählen Sie **Microservice hochladen**.
3. Legen Sie im darauf folgenden Dialog eine entsprechende ZIP-Datei ab oder navigieren Sie in Ihrem Dateisystem zu der Datei. Beachten Sie, dass die hochzuladende Datei nicht größer als 500 MB sein darf.

Der Microservice wird erstellt, sobald die ZIP-Datei erfolgreich hochgeladen wurde.

>**Wichtig:** Um Microservices zur Plattform hinzuzufügen, muss die ZIP-Datei die Manifest-Datei und das Docker Image für den Microservice enthalten. Zur Vorbereitung und Bereitstellung des Microservice-Pakets lesen Sie den Abschnitt [Packing](/microservice-sdk/concept/#packing) unter **General aspects** im Microservice SDK Guide.


##### <a name="external-application"></a>So verweisen Sie auf eine externe Anwendung

1. Klicken Sie auf **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**.
2. Wählen Sie **Externe Anwendung**.
<br><br>
<img src="/images/benutzerhandbuch/Administration/admin-application-external.png" alt="External application">
<br><br>
3. Geben Sie im darauf folgenden Dialog einen Namen für die Anwendung ein. Der Name wird als Titel oben links auf der Anwendungsseite angezeigt.
5. Geben Sie einen Anwendungsschlüssel ein, um diese Anwendung zu identifizieren.
6. Geben Sie die externe URL ein, unter welcher auf die Anwendung zugegriffen werden kann.
7. Klicken Sie auf **Speichern**, um die Anwendung zu erstellen.

Weitere Informationen zu den Feldern finden Sie auch unter [Anwendungsattribute](#application-properties).

##### <a name="clone-application"></a>So duplizieren Sie eine Anwendung

Das Duplizieren einer Anwendung ist erforderlich, wenn Sie eine abonnierte Anwendung nach Ihren eigenen Bedürfnissen anpassen möchten. Das Duplizieren einer abonnierten Anwendung erzeugt ein entsprechendes Duplikat als eigene Anwendung mit einem Link auf die Originalanwendung.

1. Klicken Sie auf **Anwendung hinzufügen** auf der Seite **Eigene Anwendungen**.
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

> **Info:** Wenn Sie möchten, dass Ihre "eigene Anwendung" eine abonnierte Standardanwendung überschreibt, setzen Sie den Pfad der "eigenen Anwendung" auf den Pfad der ursprünglich abonnierten Anwendung.


#### <a name="editing-and-removing"></a>So bearbeiten Sie eine eigene Anwendung

Klicken Sie einfach auf die Anwendung oder auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Bearbeiten**.

In der Registerkarte **Attribute** können einige Felder bearbeitet werden, abhängig vom Typ der Anwendung.

>**Wichtig:** Ändern Sie niemals Namen der Systemanwendungen (z. B. "Device Management", "Cockpit"). Andernfalls schlägt die Mandanteninitialisierung fehl.


#### So löschen Sie eine eigene Anwendung

Klicken Sie auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Löschen**.

Wenn Sie eine Anwendung löschen, die eine abonnierte Anwendung überschreibt, wird die derzeit abonnierte Anwendung für alle Benutzer verfügbar. Die Benutzer profitieren so außerdem von zukünftigen Upgrades der abonnierten Anwendung.

Abonnierte Anwendungen können nicht gelöscht werden. Dies kann nur durch den Eigentümer der Anwendung erfolgen.



#### Hochladen von Archiven

Es können mehrere Anwendungsversionen in Cumulocity IoT gespeichert werden, indem sie als ZIP- oder MON-Dateien hochgeladen werden. Jede Version wird als Archiv bezeichnet. Es können verschiedene Versionen gleichzeitig hochgeladen werden und Sie können zwischen den Versionen wechseln.

##### So laden Sie ein Archiv hoch

1. Klicken Sie zum Öffnen auf die gewünschte Anwendung.
2. Wechseln Sie zur Registerkarte **Archiv**.
3. Klicken Sie auf **Archiv hochladen** und navigieren Sie zu der Datei auf Ihrem Computer oder ziehen Sie die Datei auf das entsprechende Feld.
4. Klicken Sie auf **Hochladen**, um das Archiv auf Ihr Cumulocity IoT-Konto hochzuladen.

<img src="/images/benutzerhandbuch/Administration/admin-application-archive.png" alt="Application archive">

Das aktive Archiv (durch ein Cloud-Symbol gekennzeichnet) ist die Version der Anwendung, die aktuell den Benutzern Ihres Kontos zur Verfügung steht. Diese Version kann nicht gelöscht werden.

> **Info:** Die Registerkarte **Archiv** steht für abonnierte Anwendungen nicht zur Verfügung, da nur der Eigentümer der Anwendung ältere Versionen wiederherstellen kann.

##### So stellen Sie eine ältere Anwendungsversion wieder her

Benutzer können ältere Versionen einer Anwendung aus einem Archiv wiederherstellen.

1. Klicken Sie zum Öffnen auf die gewünschte Anwendung.
2. Wechseln Sie zur Registerkarte **Archiv**.
3. Öffnen Sie das Kontextmenü der gewünschten Version über das Menüsymbol und klicken Sie auf **Aktivieren**, um diese Version zur aktiven Version zu machen.
4. Klicken Sie auf **Entfernen** um eine Version aus dem Archiv zu löschen.

<img src="/images/benutzerhandbuch/Administration/admin-application-set-as-archive.png" alt="Application set as archive">

##### So aktivieren Sie eine einzelne Anwendung erneut

Wurde eine gehostete Anwendung nicht korrekt gestartet, kann der Benutzer sie erneut aktivieren.

1. Klicken Sie zum Öffnen auf die gewünschte Anwendung.
2. Wechseln Sie zur Registerkarte **Archiv**.
3. Klicken Sie auf **Erneut aktivieren** in der oberen rechten Ecke der Registerkarte **Archivdateien**.

<img src="/images/benutzerhandbuch/Administration/admin-reactivate.png" alt="Refresh application">  

Die gewählte Anwendung wird erneut aktiviert, indem die entsprechenden Dateien aus dem Anwendungsverzeichnis entfernt werden und das gehostete Anwendungspaket erneut entpackt wird.

### Überwachen von Microservices

Es gibt zwei Möglichkeiten, Microservices in der Cumulocity IoT-Plattform zu überwachen.

#### Statusinformation

Der Status eines Microservices kann in der Registerkarte **Status** der entsprechenden Anwendung überprüft werden.

<img src="/images/benutzerhandbuch/Administration/admin-microservice-status.png" alt="Microservice status" style="max-width: 100%">

Folgende Information werden in der Registerkarte **Status** angezeigt:

* Instanzen: Anzahl der aktiven, gestörten und erwarteten Microservice-Instanzen für den aktuellen Mandanten
* Abonnierte Mandanten: Anzahl der aktiven, gestörten und erwarteten Microservice-Instanzen für alle Untermandanten, für die der Microservice abonniert ist
* Alarme: Alarme für die aktuelle Anwendung, angezeigt in Echtzeit
* Ereignisse: Ereignisse für die aktuelle Anwendung, angezeigt in Echtzeit

Die Statusinformation ist sowohl für abonnierte als auch für eigene Anwendungen verfügbar. Die Informationen zu den abonnierten Mandanten sind jedoch nur für den Besitzer der Anwendung sichtbar.

Um den Status sehen zu können, benötigen Sie folgende Berechtigungen: ROLE&#95;APPLICATION&#95;MANAGEMENT&#95;READ and ROLE&#95;INVENTORY&#95;READ

##### Alarme und Ereignisse

Die meisten in der Registerkarte **Status** angezeigten Alarme und Ereignisse sind rein technische Beschreibungen dessen, was mit dem Microservice geschieht.

Es gibt zwei benutzerfreundliche Alarmtypen:

* `c8y_Application_Down` - kritischer Alarm, der erzeugt wird, wenn keine Microservice-Instanz verfügbar ist
* `c8y_Application_Unhealthy` - weniger wichtiger Alarm, der erzeugt wird, wenn mindestens eine Microservice-Instanz korrekt funktioniert, aber nicht alle Instanzen vollständig in Betrieb sind

Benutzerfreundliche Alarme werden nur für den Microservice-Eigentümer-Mandanten erzeugt. Sie werden auch automatisch gelöscht, wenn der Normalzustand wiederhergestellt ist, d. h., wenn alle Microservice-Instanzen korrekt funktionieren.

Benutzerfreundliche Alarme können zum Erstellen von Smart Rules verwendet werden. Weitere Informationen zum Erstellen verschiedener Arten von Smart Rules finden Sie unter [Smart Rules](/benutzerhandbuch/cockpit-de/#smart-rules).

Soll zum Beispiel eine E-Mail gesendet werden, wenn ein Microservice außer Betrieb ist, erstellen Sie eine Smart Rule "Bei Alarm E-Mail senden".

Verwenden Sie im Bereich **Bei Alarm vom Typ** den Alarmtyp `c8y_Application_Down`. Wählen Sie als Ziel-Asset den Microservice, den Sie überwachen möchten, z. B. "echo-agent-server".

#### Logdateien

Cumulocity IoT ermöglicht das Anzeigen von Logdaten, die weitere Informationen zum Status von Microservices liefern.

Um Logdaten anzuzeigen, öffnen Sie die Registerkarte **Logdaten** des jeweiligen Microservice.

<img src="/images/benutzerhandbuch/Administration/admin-applications-logs.png" alt="Microservice log" style="max-width: 100%">

Links oben auf der Seite können Sie die Microservice-Instanz auswählen, für die Sie Logdaten anzeigen möchten.

> **Info:** Falls Ihr Microservice in zwei Instanzen aufgeteilt wurde, können Sie zwar zwischen diesen wechseln, es ist jedoch nicht möglich, die Logdaten beider Instanzen gleichzeitig anzuzeigen.

Neben der Instanz-Auswahlliste können Sie das Zeitintervall wählen, in dem die Logeinträge angezeigt werden sollen, indem Sie ein Datum im Kalender auswählen und eine Uhrzeit eingeben.

> **Info:** Die hier eingegebene Uhrzeit kann sich aufgrund unterschiedlicher Zeitzonen von der Uhrzeit des Servers unterscheiden.

Rechts oben stehen weitere Funktionalitäten zur Verfügung:

* **Herunterladen** - zum Herunterladen der Logdaten für ein festgelegtes Zeitintervall.
* **Dunkles Design** - zum Ein- oder Ausschalten des dunklen Designs.
* **Auto-Refresh** - zum Aktivieren der Auto-Refresh-Funktionalität. Wenn aktiviert, werden die Logdaten alle 10 Sekunden automatisch aktualisiert.
* **Abbestellen** - zum Abbestellen des Microservice.
* **Löschen** - zum Löschen des Microservice.

Anfänglich werden auf der Registerkarte **Logdaten** der ausgewählten Microservice-Instanz die neuesten Logdaten angezeigt.

Rechts unten finden Sie die folgenden Navigationsschaltflächen:

* **Zum Anfang** - führt direkt zu den ältesten verfügbaren Logeinträgen für den Microservice nach dessen Neustart (maximale Logkapazität: 350 MB).
* **Zurück** - erhöht das Zeitintervall in Schritten von 10 Minuten.
* **Vor** - verringert das Zeitintervall in Schritten von 10 Minuten.
* **Zum Ende** - führt direkt zu den neuesten verfügbaren Logeinträgen.

Wenn im ausgewählten Zeitintervall keine Logdaten verfügbar sind, wird eine entsprechende Meldung angezeigt:

<img src="/images/benutzerhandbuch/Administration/admin-microservice-no-logs.png" alt="Microservice log">

> **Info:** Es gibt keine Möglichkeit, die Logdaten der zuvor ausgeführten Instanzen anzuzeigen. Allerdings wird in jeder Instanz ein Docker-Container ausgeführt, und wenn nur dieser (nicht die gesamte Instanz) neu gestartet wurde, sollten die Logdaten des aktuell aktiven sowie des kürzlich beendeten Docker-Containers angezeigt werden.

>Logdaten werden aus dem Docker-Container immer mittels der beiden Quellen `stdout` und `stderr` geladen und es gibt keine Möglichkeit, nach der Quelle zu unterscheiden bzw. zu filtern.
