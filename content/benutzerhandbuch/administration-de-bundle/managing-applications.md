---
layout: redirect
title: Verwalten von Anwendungen
weight: 30
---

Die {{< product-c8y-iot >}}-Plattform unterscheidet zwischen Anwendungen und Microservices, siehe auch [Developing applications](/concepts/applications) im *Concepts Guide*.

* [Anwendungen](#applications) - alle Webanwendungen, die entweder für den Mandanten abonniert sind oder die der Mandant besitzt.

* [Microservices](#managing-microservices) - serverseitige Anwendungen, die zum Entwickeln zusätzlicher Funktionalitäten zu {{< product-c8y-iot >}} verwendet werden.

Beides kann über das Menü **Ecosystem** im Navigator aufgerufen werden.

Zudem gibt es in {{< enterprise-tenant-de >}}s die Möglichkeit, **Standardabonnements** zu konfigurieren, d. h. eine Liste von Anwendungen festzulegen, die beim Anlegen standardmäßig für jeden neuen Mandanten und/oder bei einem Plattform-Upgrade für alle bestehenden Mandanten abonniert werden. Näheres dazu finden Sie unter [Enterprise Tenant > Standardabonnements](/benutzerhandbuch/enterprise-tenant-de/#default-subscriptions).

<a name="applications"></a>
### Anwendungen

Klicken Sie auf **Anwendungen** im Menü **Ecosystem** des Navigators, um eine Liste oder Tabelle aller Anwendungen in Ihrem Konto anzuzeigen.

<img src="/images/benutzerhandbuch/Administration/admin-all-applications.png" alt="All applications" style="max-width: 100%">

In der Registerkarte **Alle Anwendungen** werden alle Anwendungen angezeigt, die in Ihrem Mandanten verfügbar sind. Es gibt zwei Arten von Anwendungen:

- [Abonnierte Anwendungen](#subscribed-applications) - Anwendungen, die für den Mandanten abonniert sind und entweder von der Plattform (als Standardanwendungen) oder von einem Service Provider bereitgestellt werden.
- [Benutzerdefinierte Anwendungen](#own-applications) - Anwendungen, die der Mandant besitzt. Sie können diese Anwendungen auf verschiedene Weise [als eigene Anwendungen hinzufügen](#adding-applications).

Ihre Anwendungen sind über den Application Switcher in der oberen Leiste verfügbar.

<img src="/images/benutzerhandbuch/Administration/admin-app-switcher.png" alt="App switcher">


<a name="subscribed-applications"></a>
### Abonnierte Anwendungen

{{< product-c8y-iot >}} stellt vielerlei Anwendungen für verschiedene Zwecke bereit. Je nach Ihrer Installation und/oder Ihren optionalen Services zeigt Ihr Mandant eine Auswahl der potenziell verfügbaren Anwendungen an.

Unten sind alle Anwendungen aufgelistet, die standardmäßig im {{< standard-tenant-de >}}en oder im {{< enterprise-tenant-de >}}en verfügbar sind. Darüber hinaus können zahlreiche optionale Anwendungen für Ihren Mandanten abonniert sein.

{{< c8y-admon-info >}}
In der Registerkarte **Alle Anwendungen** sind abonnierte Anwendungen als "Abonniert" gekennzeichnet. Abonnierte Anwendungen können nicht vom Benutzer hinzugefügt, geändert oder entfernt werden, sondern nur von einem Mandantenadministrator.
{{< /c8y-admon-info >}}

#### Standardmäßig abonnierte Anwendungen

<table>
<col width="150">
<col width="250">
<col width="200">
<col width="150">
<col width="220">
<thead>
<tr>
<th style="text-align:left">Name auf der Benutzeroberfläche</th>
<th style="text-align:left">Funktionalität</th>
<th style="text-align:left">Identifikation in der API</th>
<th style="text-align:left">Technischer Typ</th>
<th style="text-align:left">Verfügbarkeit</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/administration-de" class="no-ajaxy">Administration</a></td>
<td style="text-align:left">Gibt Konto-Administratoren die Möglichkeit, Rollen, Mandanten und Anwendungen zu verwalten</td>
<td style="text-align:left">administration</td>
<td style="text-align:left">Webanwendung</td>
<td style="text-align:left">{{< standard-tenant-de >}}, {{< enterprise-tenant-de >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/cockpit-de" class="no-ajaxy">Cockpit</a></td>
<td style="text-align:left">Verwalten und überwachen Sie IoT-Assets und Daten aus Geschäftssicht</td>
<td style="text-align:left">cockpit</td>
<td style="text-align:left">Webanwendung</td>
<td style="text-align:left">{{< standard-tenant-de >}}, {{< enterprise-tenant-de >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/device-management-de" class="no-ajaxy">Device Management</a></td>
<td style="text-align:left">Verwalten und überwachen Sie Geräte und führen Sie die Steuerung und Fehlerbehebung von Geräten per Fernzugriff durch</td>
<td style="text-align:left">devicemanagement</td>
<td style="text-align:left">Webanwendung</td>
<td style="text-align:left">{{< standard-tenant-de >}}, {{< enterprise-tenant-de >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/streaming-analytics/overview-streaming-analytics/" class="no-ajaxy">Streaming Analytics</a></td>
<td style="text-align:left">Analytics Builder-Modelle und EPL-Apps (sofern aktiviert) verwalten und bearbeiten</td>
<td style="text-align:left">Streaming Analytics</td>
<td style="text-align:left">Webanwendung</td>
<td style="text-align:left">{{< standard-tenant-de >}} (eingeschränkte Version für Analytics Builder), {{< enterprise-tenant-de >}} (Vollversion)</td>
</tr>

</tbody>
</table>


<a name="own-applications"></a>
### Benutzerdefinierte Anwendungen

Benutzerdefinierte Anwendungen können sein:

* Webbasierte UI-Anwendungen, die entweder als eigenständige Anwendungen oder als Plugins innerhalb einer Anwendung (z. B. als Widget in der Cockpit-Anwendung) implementiert sind.
* Links zu einer Anwendung, die anderswo betrieben wird.
* Duplikate von abonnierten Anwendungen (um diese den eigenen Bedürfnissen anzupassen).

In der Registerkarte **Alle Anwendungen** sind benutzerdefinierte Anwendungen als "Benutzerdefiniert" gekennzeichnet.  

<a name="adding-applications"></a>
#### So fügen Sie eine benutzerdefinierte Anwendung hinzu

Klicken Sie rechts oben in der Registerkarte **Alle Anwendungen** auf **Anwendung hinzufügen**.

Wählen Sie im darauf folgenden Dialog eine der folgenden Methoden:

* [Web-Anwendung hochladen](#uploading-zip-files) - eine ZIP-Datei ablegen oder das Dateisystem danach durchsuchen
* [Externe Anwendung](#external-application) - auf eine Anwendung verweisen, die woanders betrieben wird
* [Aus verfügbaren Paketen installieren](#blueprint-application) - ein Paket-Blueprint auswählen
* [Vorhandene Anwendung duplizieren](#clone-application) - eine bestehende Anwendung duplizieren

<a name="uploading-zip-files"></a>
##### So laden Sie eine Web-Anwendung hoch

1. Klicken Sie rechts oben in der Registerkarte **Alle Anwendungen** auf **Anwendung hinzufügen**.
2. Wählen Sie **Web-Anwendung hochladen**.
3. Legen Sie im darauf folgenden Dialog eine entsprechende ZIP-Datei ab oder navigieren Sie in Ihrem Dateisystem zu der Datei.

Die Anwendung wird erstellt, sobald die ZIP-Datei erfolgreich hochgeladen wurde.

{{< c8y-admon-important title="Wichtig" >}}
Die ZIP-Datei muss *index.html* und *cumulocity.json* in ihrem Stammverzeichnis enthalten, andernfalls funktioniert die Anwendung nicht.
{{< /c8y-admon-important >}}

<a name="external-application"></a>
##### So verweisen Sie auf eine externe Anwendung

1. Klicken Sie rechts oben in der Registerkarte **Alle Anwendungen** auf **Anwendung hinzufügen**.
2. Wählen Sie **Externe Anwendung**.
3. Geben Sie im darauf folgenden Dialog einen Namen für die Anwendung ein. Der Name wird als Titel oben links auf der Anwendungsseite angezeigt.
5. Geben Sie einen Anwendungsschlüssel ein, um diese Anwendung zu identifizieren.
6. Geben Sie die externe URL ein, unter welcher auf die Anwendung zugegriffen werden kann.
7. Klicken Sie auf **Speichern**, um die Anwendung zu erstellen.

Weitere Informationen zu den Feldern finden Sie auch unter [Anwendungsattribute](#application-properties).

<a name="blueprint-application"></a>
##### So installieren Sie eine Anwendung anhand eines Blueprints

1. Klicken Sie rechts oben in der Registerkarte **Alle Anwendungen** auf **Anwendung hinzufügen**.
2. Wählen Sie **Verfügbare Pakete**.
3. Wählen Sie das gewünschte Paket aus.
4. Geben Sie im darauf folgenden Dialog einen Namen für die Anwendung ein. Der Name wird als Titel oben links auf der Anwendungsseite angezeigt.
5. Geben Sie einen Anwendungsschlüssel ein, um diese Anwendung zu identifizieren.
6. Geben Sie den Pfad ein, unter dem auf die Anwendung zugegriffen werden kann.
7. Klicken Sie auf **Speichern**, um die Anwendung zu erstellen.

Weitere Informationen zu den Feldern finden Sie auch unter [Anwendungsattribute](#application-properties).

<a name="clone-application"></a>
##### So duplizieren Sie eine Anwendung

Das Duplizieren einer Anwendung ist erforderlich, wenn Sie eine abonnierte Anwendung nach Ihren eigenen Bedürfnissen anpassen möchten. Das Duplizieren einer abonnierten Anwendung erzeugt ein entsprechendes Duplikat als eigene Anwendung mit einem Link auf die Originalanwendung.

1. Klicken Sie rechts oben in der Registerkarte **Alle Anwendungen** auf **Anwendung hinzufügen**.
2. Wählen Sie im folgenden Dialog **Vorhandene Anwendung duplizieren**.
3. Wählen Sie die gewünschte Anwendung aus der Auswahlliste, z. B. "Cockpit".
4. Geben Sie im nächsten Fenster den Namen für die Anwendung, einen Anwendungsschlüssel zur Identifizierung der Anwendung und einen Pfad als Bestandteil der URL ein, um die Anwendung aufzurufen. Standardmäßig werden die Werte der Originalanwendung, erweitert durch eine Zahl, vorgeschlagen. Wenn Sie als Pfad den Pfad der abonnierten Originalanwendung verwenden, wird Ihre eigene Anwendung die abonnierte Anwendung überschreiben.
    {{< c8y-admon-info >}}
Die Plattform schränkt die Verwendung des Präfixes "feature-" im Feld **Name** ein. Sie können keine Anwendungen mit diesem Präfix im Anwendungsnamen erstellen. Dies gilt auch für bestehende Anwendungen in Fällen, in denen die Funktion "Anwendung duplizieren" verwendet wird.
    {{< /c8y-admon-info >}}
5. Klicken Sie abschließend **Duplizieren**, um die Anwendung zu erstellen.

{{< c8y-admon-info >}}
Falls die Anwendung für diesen Mandanten abonniert wurde, steht ein weiterer Umschalter, **Abonnierte Anwendungen überschreiben**, zur Verfügung. Wenn Sie diesen Umschalter aktivieren, werden die Werte für Name, Schlüssel und Pfad aus der Originalanwendung geerbt und Ihre duplizierte Anwendung überschreibt die abonnierte Anwendung. Deaktivieren Sie die Option, um die Werte zu ändern.<br><br><img src="/images/benutzerhandbuch/Administration/admin-application-duplicate-3.png" alt="Duplicate application">
{{< /c8y-admon-info >}}

Weitere Informationen zu den Feldern finden Sie auch unter [Anwendungsattribute](#application-properties).

<a name="application-properties"></a>
### Anwendungsattribute

Um weitere Details zu einer Anwendung anzuzeigen, klicken Sie auf sie, um ihre Registerkarte **Attribute** zu öffnen.

<img src="/images/benutzerhandbuch/Administration/admin-application-properties.png" alt="Application properties" style="max-width: 100%">

In der Registerkarte **Attribute** werden bei jeder Anwendung je nach Anwendungstyp (gehostet oder extern) folgende Informationen angezeigt:

<table>
<col width="150">
<col width="350">
<col width="200">
<col width="300">
<thead>
<tr>
<th style="text-align:left">Feld</th>
<th style="text-align:left">Beschreibung</th>
<th style="text-align:left">Gehostet (Webanwendung)</th>
<th style="text-align:left">Extern</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ID</td>
<td style="text-align:left">Eindeutige ID zur Identifikation der Anwendung</td>
<td style="text-align:left">Automatisch generiert</td>
<td style="text-align:left">Automatisch generiert</td>
</tr>
<tr>
<td style="text-align:left">Name</td>
<td style="text-align:left">Anwendungsname; wird als Titel oben links auf der Anwendungsseite angezeigt und im Application Switcher verwendet</td>
<td style="text-align:left">Automatisch generiert</td>
<td style="text-align:left">Vom Benutzer vergeben</td>
</tr>
<tr>
<td style="text-align:left">Anwendungsschlüssel</td>
<td style="text-align:left">Wird zur Identifikation der Anwendung verwendet. Wird außerdem verwendet, um sie als Abonnement zur Verfügung zu stellen, siehe <a href="/concepts/applications" class="no-ajaxy">Concepts Guide</a>.</td>
<td style="text-align:left">Automatisch generiert</td>
<td style="text-align:left">Vom Benutzer vergeben</td>
</tr>
<tr>
<td style="text-align:left">Typ</td>
<td style="text-align:left">Anwendungstyp</td>
<td style="text-align:left">Gehostet</td>
<td style="text-align:left">Extern</td>
</tr>
<tr>
<td style="text-align:left">Pfad</td>
<td style="text-align:left">Teil der URL, die die Anwendung aufruft</td>
<td style="text-align:left">Automatisch generiert</td>
<td style="text-align:left">Vom Benutzer festgelegt; wenn Sie beispielsweise "hallo" als Anwendungspfad verwenden, lautet die URL der Anwendung "/apps/hallo".</td>
</tr>
</tbody>
</table>

### Anwendungs-Plugins

Wechseln Sie zur Registerkarte **Plugins**, um alle für eine Anwendung installierten Plugins anzuzeigen. Plugins können verwendet werden, um eine vorhandene Anwendung zu erweitern, ohne sie neu erstellen zu müssen.

<img src="/images/benutzerhandbuch/Administration/admin-application-plugins-grid.png" alt="Plugins grid" style="max-width: 100%">

Auf der Registerkarte **Plugins** können Sie Plugins hinzufügen und entfernen. Darüber hinaus können Sie Plugins in einer Anwendung installieren.

<a name="editing-and-removing"></a>
### So bearbeiten Sie eine Anwendung

Klicken Sie einfach auf die Anwendung oder auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Bearbeiten**.

In der Registerkarte **Attribute** können einige Felder bearbeitet werden, abhängig vom Typ der Anwendung (siehe [Anwendungsattribute](#application-properties)).

{{< c8y-admon-important title="Wichtig" >}}
Ändern Sie niemals Namen der Systemanwendungen (z. B. "Device Management", "Cockpit"). Andernfalls schlägt die Mandanteninitialisierung fehl.
{{< /c8y-admon-important >}}

### So löschen Sie eine Anwendung

Klicken Sie auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Löschen**.

Wenn Sie eine Anwendung löschen, die eine abonnierte Anwendung überschreibt, wird die derzeit abonnierte Anwendung für alle Benutzer verfügbar. Die Benutzer profitieren so außerdem von zukünftigen Upgrades der abonnierten Anwendung.

Abonnierte Anwendungen können nicht gelöscht werden. Dies kann nur durch den Eigentümer der Anwendung erfolgen.

### Hochladen von Archiven

Bei benutzerdefinierten Anwendungen können mehrere Dateiversionen in {{< product-c8y-iot >}} gespeichert werden, indem sie als ZIP- oder MON-Dateien hochgeladen werden. Jede Version wird als Archiv bezeichnet. Es können verschiedene Versionen gleichzeitig hochgeladen werden und Sie können zwischen den Versionen wechseln.

#### So laden Sie ein Archiv hoch

1. Öffnen Sie die Anwendungsattribute für die entsprechende Anwendung, indem Sie darauf klicken.
2. Klicken Sie unten im Abschnitt **Aktivitätslog** auf die Plus-Schaltfläche und navigieren Sie zu dem Archiv in Ihrem Dateisystem oder ziehen Sie einfach das Archiv auf das entsprechende Feld.
3. Klicken Sie auf **Hochladen**, um das Archiv auf Ihr {{< product-c8y-iot >}}-Konto hochzuladen.

<img src="/images/benutzerhandbuch/Administration/admin-application-archive.png" alt="Application archive">

Das aktive Archiv (durch ein Cloud-Symbol gekennzeichnet) ist die Version der Anwendung, die aktuell den Benutzern Ihres Kontos zur Verfügung steht. Diese Version kann nicht gelöscht werden.

{{< c8y-admon-info >}}
Die Archiv-Funktionalität steht für abonnierte Anwendungen nicht zur Verfügung, da nur der Eigentümer der Anwendung ältere Versionen wiederherstellen kann.
{{< /c8y-admon-info >}}

#### So stellen Sie eine ältere Anwendungsversion wieder her

Benutzer können ältere Versionen einer Anwendung aus einem Archiv wiederherstellen.

1. Öffnen Sie die Anwendungsattribute für die entsprechende Anwendung, indem Sie darauf klicken.
2. Öffnen Sie im Abschnitt **Aktivitätslog** das Kontextmenü der gewünschten Version über das Menüsymbol und wählen Sie **Auf Aktiv setzen**, um diese Version zur aktiven Version zu machen.

#### So aktivieren Sie eine einzelne Anwendung erneut

Wurde eine gehostete Anwendung nicht korrekt gestartet, kann der Benutzer sie erneut aktivieren.

1. Öffnen Sie die Anwendungsattribute für die entsprechende Anwendung, indem Sie darauf klicken.
3. Öffnen Sie im Abschnitt **Aktivitätslog** das Kontextmenü der gewünschten Version über das Menüsymbol und wählen Sie **Archiv erneut aktivieren**.

Die gewählte Anwendung wird erneut aktiviert, indem die entsprechenden Dateien aus dem Anwendungsverzeichnis entfernt werden und das gehostete Anwendungspaket erneut entpackt wird.

### Pakete

Pakete sind Kombinationen von Plugins und Blueprints, die sich zu einer einzigen Datei zusammenpacken und dann für die Plattform bereitstellen lassen. Dadurch bieten Pakete eine bessere gemeinsame Nutzbarkeit und Wiederverwendbarkeit von UI-Funktionen in verschiedenen Anwendungen und ermöglichen das Hinzufügen von UI-Funktionen zu Anwendungen ohne Programmierkenntnisse.

Pakete können zwei Arten von Anwendungen enthalten:

- [**Plugins**](#application-plugins) können verwendet werden, um eine vorhandene Anwendung zu erweitern, ohne sie neu erstellen zu müssen.
- **Blueprints** sind Kombinationen mehrerer UI-Funktionalitäten, die von der Plattform gehostet und zur Neuerstellung einer Anwendung verwendet werden können.

Pakete sind in der Registerkarte **Pakete** auf der Seite **Anwendungen** zu finden.

<img src="/images/benutzerhandbuch/Administration/admin-application-packages.png" alt="Packages view">

Um ein neues Paket hinzuzufügen, klicken Sie oben rechts auf **Paket hinzufügen**.

Wenn Sie auf ein Paket klicken, sehen Sie Paketdetails wie etwa die **Paketübersicht**, die eine Beschreibung und Bilder sowie einige Meta-Informationen enthält, die aus *package.json* stammen.

Zudem können Sie rechts alle verfügbaren Plugins innerhalb des gewählten Pakets sehen. Um ein Plugin zu installieren, klicken Sie auf **Plugin installieren** und wählen Sie die gewünschte Anwendung aus.  

<img src="/images/benutzerhandbuch/Administration/admin-application-packages-info.png" alt="Packages overview">

In der Registerkarte **Versionen** sehen Sie alle bisher hochgeladenen Binärdateien im Zusammenhang mit dem aktuellen Paket. Die auf dieser Registerkarte angezeigten Binärdateien können über das Kontextmenü neben dem jeweiligen Paketversionseintrag heruntergeladen werden.

<img src="/images/benutzerhandbuch/Administration/admin-application-packages-versions.png" alt="Versions view">

Sie können verschiedene Versionen auswählen oder hochladen. Die Versionen geben Auskunft über den Zustand des Pakets. Über sie kann überprüft werden, ob ein bestimmtes Paket veraltet ist und aktualisiert werden muss. Wenn Sie auf eine Version klicken, werden weitere Informationen wie Paketinhalt, Anwendungen oder Plugins angezeigt. Tags können verwendet werden, um Versionen mit aussagekräftigen Namen zu versehen. Das Tag "Aktuellste" dient zur Angabe der Standardversion, die ausgewählt wird, wenn kein Tag bereitgestellt wird. Das Tag "Aktuellste" wird standardmäßig auf die neueste Version gesetzt, wann immer eine Version ohne ein bestimmtes Tag hochgeladen wird.

Um zu einer anderen Version zu wechseln, öffnen Sie das Kontextmenü der gewünschten Version und klicken Sie auf **Als letzte einstellen**. Um eine Version zu löschen, klicken Sie auf **Löschen**.

### Funktionen

Funktionen sind integrierte Anwendungen, die nicht durch ein spezielles Artefakt (Microservice oder Webanwendung) dargestellt werden.

Auf der Registerkarte **Funktionen** finden Sie eine Liste aller Funktionen, die in Ihrem Mandanten abonniert werden. In einem {{< enterprise-tenant-de >}}en sind folgende Funktionen standardmäßig verfügbar:

<table>
<col width="200">
<col width="350">
<col width="200">
<thead>
<tr>
<th style="text-align:left">Name auf der Benutzeroberfläche</th>
<th style="text-align:left">Funktionalität</th>
<th style="text-align:left">Identifikation in der API</th>
<th style="text-align:left">Verfügbarkeit</th>
</tr>
</thead>
<tbody>

<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/enterprise-tenant-de/#branding" class="no-ajaxy">Funktion-Branding</a></td>
<td style="text-align:left">Passen Sie das Erscheinungsbild Ihrer Mandanten nach Ihren Vorlieben an</td>
<td style="text-align:left">feature-branding</td>
<td style="text-align:left">{{< enterprise-tenant-de >}}</td>

</tr>
<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/enterprise-tenant-de/#data-broker" class="no-ajaxy">Funktion-Broker</a></td>
<td style="text-align:left">Teilen Sie Daten gezielt mit anderen Mandanten</td>
<td style="text-align:left">feature-broker</td>
<td style="text-align:left">{{< enterprise-tenant-de >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/benutzerhandbuch/enterprise-tenant-de/#user-hierarchies" class="no-ajaxy">Funktion-Benutzer-Hierarchie</a></td>
<td style="text-align:left">Hiermit können Sie in {{< product-c8y-iot >}} verschiedene Organisationen getrennt verwalten, die dieselbe Datenbank teilen</td>
<td style="text-align:left">feature-user-hierarchy</td>
<td style="text-align:left">{{< enterprise-tenant-de >}}</td>
</tr>
</tbody>
</table>

{{< c8y-admon-info >}}
Alle hier aufgelisteten Anwendungen sind vom Typ "Funktion".
{{< /c8y-admon-info >}}

Je nach den konkreten Abonnements Ihres Mandanten können auch andere Funktionen angezeigt werden.
