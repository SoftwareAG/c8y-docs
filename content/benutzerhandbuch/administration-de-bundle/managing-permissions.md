---
layout: redirect
title: Verwalten von Berechtigungen
weight: 13
---

Berechtigungen legen fest, welche Funktionen ein Benutzer in {{< product-c8y-iot >}}-Anwendungen ausführen darf. Um das Verwalten von Berechtigungen zu vereinfachen, sind diese in sogenannte Rollen eingeteilt. Jedem Benutzer kann eine Reihe von Rollen zugewiesen werden, deren Berechtigungen addiert werden.

Die folgenden Rollen können zugewiesen werden:

- Globale Rollen: Enthalten Berechtigungen, die auf alle Daten innerhalb eines Mandanten zutreffen.
- Stammdatenrollen: Enthalten Berechtigungen, die auf Gerätegruppen zutreffen.

Darüber hinaus kann der Zugriff auf Anwendungen erteilt werden.

<a name="global"></a>
### Globale Rollen

Klicken Sie auf **Rollen** im Menü **Konten**, um die Liste der konfigurierten Rollen anzuzeigen.

<img src="/images/benutzerhandbuch/Administration/admin-global-roles.png" alt="Context menu">

In der Registerkarte **Globale Rollen** finden Sie die Rollen, die Berechtigungen auf Systemebene erteilen. Es gibt verschiedene vordefinierte globale Rollen, aber Sie können auch eigene nach Ihren Bedürfnissen erstellen.

> **Info:** Die vordefinierten Rollen sind als Muster für einen bestimmten Zweck konfiguriert. Sie können sie als Ausgangspunkt verwenden und dann weiter an Ihre Bedürfnisse anpassen.

> Achten Sie beim Anlegen eines neuen Benutzers darauf, dass die globalen Rollen, die Sie diesem zuweisen, alle notwendigen Berechtigungen umfassen, die speziell für diesen Benutzer in beiden zugewiesenen Rollen relevant sind. Berechtigungen aus unterschiedlichen Rollen werden zusammengeführt, wenn sie demselben Benutzer zugewiesen werden. Wenn ein Benutzer z. B. nur die Rolle "Cockpit-Benutzer" hat (siehe unten), kann er auf nichts anderes als die Cockpit-Anwendung zugreifen. Wenn Sie jedoch auch eine Stammdatenberechtigung über einige der verfügbaren Rollen zuweisen, erhält der Benutzer Zugriff auf die gesamten Stammdaten wie Geräte, Gruppen und Konfigurationen.

Die Rollen "admins" und "devices" haben einen Sonderstatus:

<table>
<col style="width: 20%;">
<col style="width: 80%;">
<thead>
<tr>
<th align="left">Rolle&nbsp;&nbsp;&nbsp;</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">admins</td>
<td align="left">Administrative Berechtigungen sind aktiviert. Der ursprüngliche Administrator, d. h. der erste in diesem Mandanten erstellte Benutzer, hat diese Rolle.</td>
</tr>
<tr>
<td align="left">devices</td>
<td align="left">Typische Berechtigungskonfiguration für Geräte. Nach der Registrierung weist ein Gerät automatisch diese Rolle auf. Bearbeiten Sie diese Rolle, wenn Ihre Geräte weniger oder mehr Berechtigungen erfordern, oder weisen Sie Ihren Geräten andere Rollen zu.</td>
</tr>
</tbody>
</table>

Darüber hinaus werden anfänglich die folgenden vorkonfigurierten Rollen bereitgestellt:

<table>
<col style="width: 20%;">
<col style="width: 80%;">
<thead>
<tr>
<th align="left">Rolle</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Regelmanager</td>
<td align="left">Hat Zugriff auf alle Smart Rules und Echtzeitregeln.</td>
</tr>
<tr>
<td align="left">Cockpit-Benutzer</td>
<td align="left">Hat Zugriff auf die Anwendung Cockpit. Zusätzlich sollten Sie eine Rolle hinzufügen, die Geräten Zugriff gewährt.</td>
</tr>
<tr>
<td align="left">Device Management-Benutzer</td>
<td align="left">Hat Zugriff auf die Anwendung Device Management. Der Benutzer kann damit den Simulator nutzen und Bulk-Operationen ausführen. Zusätzlich sollten Sie eine Rolle hinzufügen, die Geräten Zugriff gewährt.</td>
</tr>
<tr>
<td align="left">Globaler Manager</td>
<td align="left">Hat Lese- und Schreibzugriff auf alle Geräte.</td>
</tr>
<tr>
<td align="left">Globaler Leser</td>
<td align="left">Hat Lesezugriff auf alle Geräte.</td>
</tr>
<tr>
<td align="left">Globaler Benutzermanager</td>
<td align="left">Kann alle Benutzer verwalten.</td>
</tr>
<tr>
<td align="left">Geteilter Benutzermanager</td>
<td align="left">Kann untergeordnete Benutzer verwalten. Um untergeordnete Benutzer verwalten zu können, muss der Abonnementplan Benutzerhierarchien einschließen.</td>
</tr>
<tr>
<td align="left">Mandantenmanager</td>
<td align="left">Kann mandantenweite Einstellungen verwalten, z. B. eigene Anwendungen, Datenvermittlung, Datenhaltung, Optionen und Mandantenstatistiken.</td>
</tr>
</tbody>
</table>

Unter Umständen werden auch die folgenden älteren Rollen angezeigt:

|Rolle|Beschreibung|
|:---|:---|
|business|Hat Zugriff auf alle Geräte und deren Daten, aber hat keine Verwaltungsberechtigung für den Mandanten.
|readers|Kann alle Daten lesen (einschl. Benutzer, im Unterschied zu "Globaler Leser").

<a name="create-edit-roles"></a>
#### So fügen Sie eine globale Rolle hinzu

Klicken Sie auf **Rolle hinzufügen** in der Registerkarte **Globale Rollen**.

Auf der Seite **Neue globale Rolle** sehen Sie links eine Liste mit Berechtigungstypen und rechts eine Liste der Anwendungen, auf die zugegriffen werden kann.

Der folgende Screenshot zeigt die Einstellungen für die Rolle "admins".

![Admin example](/images/benutzerhandbuch/Administration/admin-global-role-admin.png)

**Berechtigungsebenen**

Für jeden Typen können Sie die folgenden Berechtigungsebenen wählen:

- LESEN: Einsehen der jeweiligen Daten.
- ERSTELLEN: Erstellen neuer Daten wie Benutzer und Stammdaten sowie Bearbeiten von Benutzern innerhalb Ihrer Hierarchie.
- AKTUALISIEREN: Ändern und Löschen der jeweiligen Daten (beinhaltet nicht LESEN).
- ADMIN: Erstellen, Aktualisieren und Löschen der jeweiligen Daten.

> **Info:** ERSTELLEN-Berechtigungen sind mit dem Eigentumskonzept in {{< product-c8y-iot >}} verbunden. Wenn Sie ein Objekt erstellt haben, sind Sie der Eigentümer und können das Objekt ohne weitere Berechtigungen verwalten. Wenn Sie beispielsweise die ERSTELLEN-Berechtigung für Stammdaten haben, können Sie Geräte und Gruppen erstellen und diese vollständig verwalten. Sie können jedoch keine Geräte und Gruppen, die Sie nicht selbst erstellt haben, verwalten, ohne dafür eine AKTUALISIEREN-Berechtigung oder eine zusätzliche Stammdatenrolle zu haben (siehe unten). Diese Konzept unterstützt es, Geräten minimale Berechtigungen zuzuweisen. Es ermöglicht Ihnen auch, Benutzerverwaltungsrechte auf untergeordnete Benutzer zu beschränken, wenn Sie Benutzerhierarchien abonniert haben.

Aktivieren Sie die Checkbox oben in einer Spalte, wenn Sie die entsprechende Berechtigungsebene auf alle Berechtigungstypen anwenden möchten.

**Berechtigungskategorien**

Die folgenden Berechtigungskategorien sind standardmäßig verfügbar:

<table>
<col style="width: 20%;">
<col style="width: 80%;">
<thead>
<tr>
<th align="left">Kategorie</th>
<th align="left">Beschreibung</th>
</tr>
</thead>

<tbody>
<tr>
<td align="left">Alarme</td>
<td align="left">Anzeigen oder Bearbeiten von Alarmen.</td>
</tr>

<tr>
<td align="left">Anwendungsverwaltung</td>
<td align="left">Anzeigen oder Bearbeiten der in diesem Konto verfügbaren Anwendungen.</td>
</tr>

<tr>
<td align="left">Audits</td>
<td align="left">Anzeigen oder Erstellen von Audit-Logs.</td>
</tr>

<tr>
<td align="left">Bulk-Operationen</td>
<td align="left">Anzeigen oder Erstellen von Bulk-Operationen.</td>
</tr>

<tr>
<td align="left">CEP management</td>
<td align="left">Anzeigen oder Bearbeiten von CEP-Regeln.</td>
</tr>

<tr>
<td align="left">Data Broker</td>
<td align="left">Senden von Daten an andere Mandanten oder Empfangen von Daten von anderen Mandanten.</td>
</tr>

<tr>
<td align="left">Gerätesteuerung</td>
<td align="left">Anzeigen oder Bearbeiten von Kommandos für Geräte bzw. Senden von Kommandos an Geräte. Wird auch für die Geräteregistrierung verwendet.</td>
</tr>

<tr>
<td align="left">Ereignisse</td>
<td align="left">Anzeigen oder Erstellen von Ereignissen.</td>
</tr>

<tr>
<td align="left">Globale Smart Rules</td>
<td align="left">Konfigurieren von globalen Smart Rules.</td>
</tr>

<tr>
<td align="left">Identifikator</td>
<td align="left">Anzeigen oder Bearbeiten von Identifikatoren für Geräte.</td>
</tr>

<tr>
<td align="left">Stammdaten</td>
<td align="left">Anzeigen oder Bearbeiten von Stammdaten.</td>
</tr>

<tr>
<td align="left">Messwerte</td>
<td align="left">Anzeigen oder Erstellen von Messwerten.</td>
</tr>

<tr>
<td align="left">Optionen</td>
<td align="left">Anzeigen oder Bearbeiten von Kontooptionen wie etwa Passwortregeln.</td>
</tr>

<tr>
<td align="left">Datenhaltungsregeln</td>
<td align="left">Anzeigen oder Bearbeiten von Datenhaltungsregeln.</td>
</tr>

<tr>
<td align="left">Planen von Berichten</td>
<td align="left">Verwalten von Berichts-Exportplänen</td>
</tr>

<tr>
<td align="left">Simulator</td>
<td align="left">Konfigurieren von simulierten Geräten.</td>
</tr>

<tr>
<td align="left">SMS</td>
<td align="left">Konfigurieren von SMS.</td>
</tr>

<tr>
<td align="left">Mandanten</td>
<td align="left">Anzeigen, Erstellen, Bearbeiten oder Löschen von Untermandanten.</td>
</tr>

<tr>
<td align="left">Mandantenstatistiken</td>
<td align="left">Anzeigen der Nutzungsdaten für dieses Konto, wie auf der Startseite der "Administration"-Anwendung gezeigt.</td>
</tr>

<tr>
<td align="left">Benutzerverwaltung</td>
<td align="left">Anzeigen oder Bearbeiten von Benutzern, globalen Rollen und Berechtigungen.</td>
</tr>

<tr>
<td align="left">Eigener Benutzer</td>
<td align="left">Anzeigen oder Bearbeiten Ihres eigenen Benutzers.</td>
</tr>
</tbody>
</table>

Möglicherweise werden weitere Berechtigungen angezeigt, abhängig von den Funktionalitäten in Ihrem Abonnementplan. Diese werden in Verbindung mit den jeweiligen Funktionalitäten beschrieben.

> **Wichtig:** Werden neue Funktionen mit neuen Berechtigungen zu {{< product-c8y-iot >}} hinzugefügt, so werden diese nicht automatisch zu bestehenden Rollen hinzugefügt. Sollten Sie feststellen, dass Sie eine kürzlich angekündigte Funktionalität nicht verwenden können, überprüfen Sie zunächst Ihre Berechtigungen.

<a name="attach-global"></a>
#### Zuweisen von globalen Rollen

Sie können Benutzern globale Rollen entweder direkt in der Benutzerliste oder auf der entsprechenden Benutzerseite zuweisen.

> **Wichtig:** Standardmäßig ist es nicht möglich, die (bei der SSO-Anmeldung automatisch erstellten) Rollen von SSO-Benutzern zu ändern, da diese durch die dynamische Rechtezuordnung überschrieben würden. Dieses Verhalten kann jedoch geändert werden. Weitere Informationen finden Sie unter [Administration > Änderung von Einstellungen](/benutzerhandbuch/administration-de/#custom-template) im *User Guide*.


##### So weisen Sie globale Rollen aus der Benutzerliste zu

1. Klicken Sie auf die Spalte **Globale Rollen** eines bestimmten Benutzers, um eine Liste mit globalen Rollen anzuzeigen.
1. Aktivieren oder deaktivieren Sie die entsprechenden Checkboxen.
1. Klicken Sie auf **Anwenden**, um Ihre Einstellungen zu speichern.

![Apply global role](/images/benutzerhandbuch/Administration/admin-global-roles-apply-1.png)

##### So weisen Sie globale Rollen aus der Benutzerseite zu

Klicken Sie auf die Zeile des jeweiligen Benutzers in der Benutzerliste.
Aktivieren oder deaktivieren Sie auf der Benutzerseite rechts die Checkboxen für die entsprechenden globalen Rollen.
Klicken Sie auf **Speichern**, um Ihre Einstellungen zu speichern.

![Attach global role](/images/benutzerhandbuch/Administration/admin-global-roles-apply-2.png)

<a name="inventory"></a>
### Stammdatenrollen

Stammdatenrollen enthalten Berechtigungen, die Sie Gerätegruppen zuweisen können. Eine Stammdatenrolle kann beispielsweise die Berechtigung enthalten, ein Gerät neu zu starten. Sie können diese Stammdatenrolle einer Gruppe von Geräten, z. B. "Region Nord", und einem Benutzer, z. B. "Schmidt", zuweisen. Daraus resultiert, dass der Benutzer "Schmidt" alle Geräte, die in der Gruppe "Region Nord" oder einer Untergruppe enthalten sind, neu starten kann.

Um die konfigurierten Stammdatenrollen anzuzeigen, wählen Sie **Rollen** im Menü **Konten** und wechseln Sie zur Registerkarte **Stammdatenrollen**.

<img src="/images/benutzerhandbuch/Administration/admin-roles-inventory.png" alt="Context menu">

In der Registerkarte **Stammdatenrollen** können Sie Berechtigungen für bestimmte Gruppen und/oder deren Kinder verwalten. Es gibt verschiedene voreingestellte Stammdatenrollen, aber Sie können auch eigene Rollen nach Ihren Bedürfnissen erstellen.

Die folgenden Stammdatenrollen sind in neuen Mandanten voreingestellt:

|Rolle|Beschreibung|
|:---|:---|
|Manager| Kann alle Daten des Assets lesen und alle Stammdaten verwalten, aber keine Operationen ausführen. Kann zusätzlich Stammdaten (einschließlich Dashboards) und Alarme verwalten.
|Operationen: Alle|Kann die Assets per Fernzugriff verwalten, indem er Operationen an ein Gerät sendet (z. B. Software-Updates, Fernkonfigurationen).
|Operationen: Gerät neustarten|Kann Geräte neustarten.
|Leser|Kann alle Daten des Assets lesen.


#### So fügen Sie eine Stammdatenrolle hinzu

Klicken Sie auf **Rolle hinzufügen** in der Registerkarte **Stammdatenrollen**.

Oben auf der Seite können Sie einen Namen für die Stammdatenrolle vergeben. Klicken Sie in das Feld, geben Sie einen Namen ein und klicken Sie auf das grüne Häkchen zum Speichern Ihrer Eingabe.

![Role details](/images/benutzerhandbuch/Administration/admin-inventory-role-edit.png)

Die Berechtigungen sind in die folgenden Kategorien eingeteilt:

|Kategorie|Beschreibung|
|:---|:---|
|Alarme|Berechtigungen für das Verwenden von Alarmen von Geräten.
|Audits|Berechtigungen für Audit-Logs.
|Ereignisse|Berechtigungen für das Arbeiten mit Ereignissen von Geräten.
|Stammdaten|Berechtigungen für das Anzeigen und Bearbeiten von Geräten.
|Messwerte|Berechtigungen für Messwerte.
|Gerätesteuerung|Berechtigungen für die Fernsteuerung von Geräten.
|Voller Zugriff|Vollständiger Zugriff auf die verbundenen Geräte, hauptsächlich zur Vereinfachung der Konfiguration.

> **Info:** Service Provider sehen eine weitere Berechtigung "Support" in ihrem {{< management-tenant-de >}}. Diese Berechtigung ermöglicht es Benutzern des Service Providers, den Benutzern ihrer Kunden Support zu geben, siehe [Supportbenutzerzugriff](/benutzerhandbuch/enterprise-tenant-de/#support-user-access).

Fügen Sie einer Rolle eine Berechtigung hinzu, indem Sie das Plus-Symbol neben der gewünschten Kategorie klicken.

Geben Sie im Feld **Typ** einen Typen ein, um den Datentypen weiter einzuschränken, für den diese Berechtigung gelten soll. Zugriff wird nur auf Objekte gewährt, die den angegebenen **Typ** enthalten.

Nehmen wir etwa an, ihr Gerät sendet Messwerte zum Device Management, wie "c8y&#95;SignalStrength", sowie aktuelle Produktionsmesswerte. Sie möchten aber, dass der Benutzer nur die Device Management-Messwerte sieht. In diesem Fall geben Sie "c8ySignalStrength" als Typ ein. So kann der Benutzer nur Messwerte sehen, die den Typ "c8y&#95;SignalStrength" enthalten. Beachten Sie, dass der Benutzer dann das gesamte Messwertobjekt, einschließlich anderer Typen, die Teil desselben Messwertobjekts sind, sehen kann.

Standardmäßig enthält das Feld **Typ** ein Sternsymbol *, so dass alle Typen eingeschlossen sind.

> **Info:** Weitere Informationen zu möglichen Typen finden Sie in Ihrer Gerätedokumentation, der [Sensor Library](/reference/sensor-library/) von {{< product-c8y-iot >}} oder der [Device Management Library](/reference/device-management-library/). Der Typ, der hier verwendet wird, ist der sogenannte "Fragmenttyp", nicht das "Type"-Attribut. Sie müssen alle Fragmenttypen, die in einem Messwert gesendet werden, eingeben, damit der Messwert sichtbar wird; ähnliches gilt für andere Datentypen.

Wählen Sie im Feld **Berechtigung** eine Berechtigungsebene aus der Auswahlliste:

* LESEN - zum Anzeigen von Objekten
* ÄNDERN - zum Ändern von Objekten (schließt nicht die LESEN-Berechtigung ein)
* ALL - zum Lesen UND Ändern von Objekten

>**Wichtig:** Wenn Sie eine Berechtigung hinzufügen, erscheint möglicherweise ein kleines Ausrufungszeichen. Das Ausrufungszeichen weist darauf hin, dass die soeben hinzugefügte Rollen keine Auswirkung hat, da eine andere, "höhere" Berechtigung, die für den Benutzer gesetzt wurde, diese Berechtigung bereits umfasst. Überprüfen Sie in diesem Fall, ob Sie vollständigen Zugriff gewährt haben oder ob es im gleichen Abschnitt eine andere Berechtigung mit "*" als Typen und "Alle" als Berechtigung gibt.

Nehmen wir als weiteres Beispiel an, dass Sie Tracking-Geräte verwenden. Sie möchten, dass Ihr Benutzer alle Geräte sehen, aber nichts ändern kann. Außerdem soll der Benutzer in der Lage sein, die Wege von Geräten auf einer Karte zu verfolgen. Wege werden über ein Ereignis mit dem Fragmenttypen "c8y&#95;Position" aufgezeichnet (siehe [Sensor Library](/reference/sensor-library/)). Erteilen Sie dem Benutzer eine LESEN-Berechtigung auf Stammdaten und auf Ereignisse mit dem Typen "c8y&#95;Position", wie in der Abbildung unten dargestellt.

<img src="/images/benutzerhandbuch/Administration/admin-inventory-role-example.png" alt="Permission example">

<a name="attach-inventory"></a>
### Zuweisen von Stammdatenrollen zu Benutzern

Stammdatenrollen werden einem Benutzer und einer Gerätegruppe zugewiesen.

Klicken Sie auf **Benutzer** im Menü **Konten**, wählen Sie einen Benutzer aus der Benutzerliste und wechseln Sie zur Registerkarte **Stammdatenrollen**.

In der Registerkarte **Stammdatenrollen** sehen Sie einen Baum mit Gerätegruppen. Klicken Sie auf den Pfeil rechts von einer Gruppe, um eine Stammdatenrollen zuzuweisen. Wählen Sie die gewünschten Rollen und klicken Sie auf **Anwenden**. Weitere Informationen zu den Rollen erhalten Sie, wenn Sie den Mauszeiger über das Info-Symbol bewegen, oder unter [Anzeigen von Stammdatenrollen](#inventory).

> **Wichtig:** Wenn ein Benutzer bereits eine globale Rolle hat, die Stammdatenberechtigungen umfasst, kann der Benutzer alle Geräte sehen oder ändern, unabhängig von den hier zugewiesenen Stammdatenrollen.

Stammdatenrollen werden von Gruppen an alle ihre direkten und indirekten Untergruppen sowie die Geräte in der Gruppe vererbt. Wenn Sie etwa eine Rolle mit Leseberechtigung für Alarme für eine Gerätegruppe wählen, kann der Benutzer alle Alarme für alle Geräte in dieser Gruppe sowie in ihren Untergruppen sehen.

Wenn ein Benutzer Stammdatenzugriff für eine Gerätegruppe hat, hat er auch Zugriff auf alle Dashboards für diese Gruppe in der Cockpit-Anwendung.

Sie können auch Stammdatenrollen eines anderen Benutzers kopieren. Klicken Sie auf **Stammdatenrollen eines anderen Benutzers kopieren**, um Rollen zu kopieren. Wählen Sie im folgenden Fenster einen Benutzer aus und klicken Sie auf **Kopieren**. Oben können Sie auswählen, ob Sie die Rollen mit den vorhandenen Rollen zusammenführen möchten (Standardeinstellung), oder ob Sie die vorhandenen Rollen ersetzen möchten. Das Kopieren von Rollen erleichtert das Verwalten von Berechtigungen für viele Benutzer, da Sie einen Referenzbenutzer erstellen können, um von dort die Rollen zu kopieren.

<img src="/images/benutzerhandbuch/Administration/admin-inventory-role-copy.png" alt="Copy roles">


### Fehlerbehebung bei Berechtigungen

Wenn Sie Aktionen durchführen möchten für die Sie keine ausreichende Berechtigung haben, erhalten Sie eine Fehlermeldung.

Klicken Sie für Hilfe bei der Fehlersuche auf die Schaltfläche **Benutzer** in der rechten oberen Leiste. Wählen Sie aus dem Kontextmenü **Verweigerte Anfragen**. Im darauf folgenden Fenster finden Sie Details zu den verweigerten Anfragen. Ein Administrator oder der [Produkt-Support](/welcome/contacting-support/) können Ihnen helfen, die Berechtigungsprobleme zu beheben.

<a name="app-access"></a>
### Gewähren von Anwendungszugriff

Die Registerkarte **Anwendungen** zeigt eine Liste aller verfügbaren Anwendungen in Ihrem Mandanten in alphabetischer Reihenfolge.

Um dem Benutzer Anwendungen zuzuweisen, wählen Sie einfach die entsprechenden Anwendungen aus und klicken **Speichern**.

Weitere Informationen zur Anwendungsverwaltung finden Sie unter [Verwalten von Anwendungen](/benutzerhandbuch/administration-de#managing-applications).

![Application access](/images/benutzerhandbuch/Administration/admin-application-access.png)

> **Info:** Wenn ein Benutzer die globale Berechtigung hat, alle Anwendungen einzusehen, wird eine entsprechende Information angezeigt.
