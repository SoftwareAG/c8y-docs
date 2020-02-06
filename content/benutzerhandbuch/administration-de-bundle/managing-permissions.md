---
weight: 13
title: Verwalten von Berechtigungen
---

Berechtigungen legen fest, welche Funktionen ein Benutzer in Cumulocity-Anwendungen ausführen darf. Um das Verwalten von Berechtigungen zu vereinfachen, sind diese in sogenannte Rollen eingeteilt. Jedem Benutzer kann eine Reihe von Rollen zugewiesen werden, deren Berechtigungen addiert werden.

Die folgenden Rollen können zugewiesen werden:

- Globale Rollen: Enthalten Berechtigungen, die auf alle Daten innerhalb eines Mandanten zutreffen.
- Stammdatenrollen: Enthalten Berechtigungen, die auf Gerätegruppen zutreffen.

Darüber hinaus kann der Zugriff auf Anwendungen erteilt werden.

### <a name="global"></a>Globale Rollen

Klicken Sie **Rollen** im Menü **Konto**, um die Liste der konfigurierten Rollen anzuzeigen.

In der Registerkarte **Globale Rollen** finden Sie die Rollen, die allgemeine Berechtigungen erteilen. Es gibt verschiedene globale Standardrollen, aber Sie können auch eigene nach Ihren Bedürfnissen erstellen. 

<img src="/images/benutzerhandbuch/Administration/admin-global-roles.png" alt="Context menu">

Die Rollen "admins" und "devices" haben einen Sonderstatus:

|Rolle&nbsp;&nbsp;&nbsp;|Beschreibung|
|:---|:---|
|admins|Alle Berechtigungen sind aktiviert. Der ursprüngliche Administrator, d.h. der erste in diesem Mandanten erstellte Benutzer, hat diese Rolle.
|devices|Typische Berechtigungskonfiguration für Geräte. Nach der Registrierung weist ein Gerät automatisch diese Rolle auf. Bearbeiten Sie diese Rolle, wenn Ihre Geräte weniger oder mehr Berechtigungen erfordern, oder weisen Sie Ihren Geräten andere Rollen zu.

Darüber hinaus sind anfänglich folgende Rollen konfiguriert:

|Rolle|Beschreibung|
|:---|:---|
|Regelmanager|Hat Zugriff auf alle Smart Rules und Echtzeitregeln.
|Cockpit-Benutzer|Hat Zugriff auf die Anwendung Cockpit. Zusätzlich sollten Sie eine Rolle hinzufügen, die Geräten Zugriff gewährt.
|Device Management-Benutzer|Hat Zugriff auf die Anwendung Device Management. Der Benutzer kann damit den Simulator nutzen und Stapelkommandos ausführen. Zusätzlich sollten Sie eine Rolle hinzufügen, die Geräten Zugriff gewährt.
|Globaler Manager|Hat Lese- und Schreibzugriff auf alle Geräte.
|Globaler Leser|Hat Lesezugriff auf alle Geräte.
|Globaler Benutzermanager|Kann alle Benutzer verwalten.
|Geteilter Benutzermanager|Kann untergeordnete Benutzer verwalten. Um untergeordnete Benutzer verwalten zu können, muss der Abonnementplan Benutzerhierarchien einschließen.
|Mandantenmanager|Kann mandantenweite Einstellungen verwalten, z. B. eigene Anwendungen, Datenvermittlung, Datenhaltung, Optionen und Mandantenstatistiken.

Unter Umständen werden auch die folgenden älteren Rollen angezeigt:

|Rolle|Beschreibung|
|:---|:---|
|business|Hat Zugriff auf alle Geräte und deren Daten, aber hat keine Verwaltungsberechtigung für den Mandanten.
|readers|Kann alle Daten lesen (einschl. Benutzer, im Unterschied zu "Globaler Leser").


#### <a name="create-edit-roles"></a>So fügen Sie eine globale Rolle hinzu

Klicken Sie **Rolle hinzufügen** in der Registerkarte **Globale Rollen**. 

Auf der Seite **Neue globale Rolle** sehen Sie links eine Liste mit Berechtigungstypen und rechts eine Liste der Anwendungen, auf die zugegriffen werden kann. 

Der folgende Screenshot zeigt die Einstellungen für die Rolle "admins".

![Admin example](/images/benutzerhandbuch/Administration/admin-global-role-admin.png)

**Berechtigungsebenen**

Für jeden Typen können Sie die folgenden Berechtigungsebenen wählen:

- READ: Einsehen der jeweiligen Daten.
- CREATE: Erstellen neuer Daten wie Benutzer und Stammdaten sowie Bearbeiten von Benutzern innerhalb Ihrer Hierarchie.
- UPDATE: Ändern und Löschen der jeweiligen Daten (beinhaltet nicht READ).
- ADMIN: Erstellen, Aktualisieren und Löschen der jeweiligen Daten.

> **Info:** CREATE-Berechtigungen sind mit dem Eigentumskonzept in Cumulocity verbunden. Wenn Sie ein Objekt erstellt haben, sind Sie der Eigentümer und können das Objekt ohne weitere Berechtigungen verwalten. Wenn Sie beispielsweise die CREATE-Berechtigung für Stammdaten haben, können Sie Geräte und Gruppen erstellen und diese vollständig verwalten. Sie können jedoch keine Geräte und Gruppen, die Sie nicht selbst erstellt haben, verwalten, ohne dafür eine UPDATE-Berechtigung oder eine zusätzliche Stammdatenrolle zu haben (siehe unten). Diese Konzept unterstützt es, Geräten minimale Berechtigungen zuzuweisen. Es ermöglicht Ihnen auch, Benutzerverwaltungsrechte auf untergeordnete Benutzer zu beschränken, wenn Sie Benutzerhierarchien abonniert haben.

Aktivieren Sie die Checkbox oben in einer Spalte, wenn Sie die entsprechende Berechtigungsebene auf alle Berechtigungstypen anwenden möchten.

**Berechtigungskategorien**

Die folgenden Berechtigungskategorien sind standardmäßig verfügbar:

|Kategorie|Beschreibung|
|:---|:---|
|Alarme|Anzeigen oder Bearbeiten von Alarmen für Geräte.
|Anwendungsverwaltung|Anzeigen oder Bearbeiten der in diesem Konto verfügbaren Anwendungen.
|Audits|Anzeigen oder Erstellen von Audit-Logs für Geräte.
|Stapelkommandos|Anzeigen oder Erstellen von Stapelkommandos.
|CEP management|Anzeigen oder Bearbeiten von CEP-Regeln.
|Data Broker|Senden von Daten an andere Mandanten oder Empfangen von Daten von anderen Mandanten.
|Gerätesteuerung|Anzeigen oder Bearbeiten von Kommandos für Geräte bzw. Senden von Kommandos an Geräte. Wird auch für die Geräteregistrierung verwendet.
|Ereignisse|Anzeigen oder Erstellen von Ereignissen für Geräte.
|Globale Smart Rules|Konfigurieren von globalen Smart Rules
|Identifikator|Anzeigen oder Bearbeiten von Identifikatoren für Geräte.
|Stammdaten|Anzeigen oder Bearbeiten von Stammdaten.
|Messwerte|Anzeigen oder Erstellen von Messwerten für Geräte.
|Optionen|Anzeigen oder Bearbeiten von Kontooptionen wie etwa Passwortregeln.
|Datenhaltungsregeln|Anzeigen oder Bearbeiten von Datenhaltungsregeln.
|Simulator|Konfigurieren von simulierten Geräten.
|SMS|Konfigurieren von SMS.
|Mandanten|Anzeigen, Erstellen, Bearbeiten oder Löschen von Untermandanten.
|Mandantenstatistiken|Anzeigen der Nutzungsdaten für dieses Konto, wie auf der Startseite der "Administration"-Anwendung gezeigt.
|Benutzerverwaltung|Anzeigen oder Bearbeiten von Benutzern, globalen Rollen und Berechtigungen.
|Eigener Benutzer|Anzeigen oder Bearbeiten Ihres eigenen Benutzers.

Möglicherweise werden weitere Berechtigungen angezeigt, abhängig von den Funktionen in Ihrem Abonnementplan. Diese werden in Verbindung mit den jeweiligen Funktionen beschrieben.

> **Wichtig:** Werden neue Funktionen mit neuen Berechtigungen zu Cumulocity hinzugefügt, so werden diese nicht automatisch zu bestehenden Rollen hinzugefügt. Sollten Sie feststellen, dass Sie eine kürzlich angekündigte Funktion nicht verwenden können, überprüfen Sie zunächst Ihre Berechtigungen.

#### <a name="attach-global"></a>Zuweisen von globalen Rollen

Sie können Benutzern globale Rollen entweder direkt in der Benutzerliste oder auf der entsprechenden Benutzerseite zuweisen. 

##### So weisen Sie globale Rollen aus der Benutzerliste zu

1. Klicken Sie auf die Spalte **Globale Rollen** eines bestimmten Benutzers, um eine Liste mit globalen Rollen anzuzeigen. 
1. Aktivieren oder deaktivieren Sie die entsprechenden Checkboxen.
1. Klicken Sie **Anwenden**, um Ihre Einstellungen zu speichern.

![Apply global role](/images/benutzerhandbuch/Administration/admin-global-roles-apply-1.png)

##### So weisen Sie globale Rollen aus der Benutzerseite zu

Klicken Sie auf die Zeile des jeweiligen Benutzers in der Benutzerliste.
Aktivieren oder deaktivieren Sie auf der Benutzerseite rechts die Checkboxen für die entsprechenden globalen Rollen.
Klicken Sie **Speichern**, um Ihre Einstellungen zu speichern.

![Attach global role](/images/benutzerhandbuch/Administration/admin-global-roles-apply-2.png)

### <a name="inventory"></a>Stammdatenrollen

Stammdatenrollen enthalten Berechtigungen, die Sie Gerätegruppen zuweisen können. Eine Stammdatenrolle kann beispielsweise die Berechtigung enthalten, ein Gerät neu zu starten. Sie können diese Stammdatenrolle einer Gruppe von Geräten, z. B. "Region Nord", und einem Benutzer, z. B. "Schmidt", zuweisen. Daraus resultiert, dass der Benutzer "Schmidt" alle Geräte, die in der Gruppe "Region Nord" oder einer Untergruppe enthalten sind, neu starten kann.

Um die konfigurierten Stammdatenrollen anzuzeigen, wählen Sie **Rollen** im Menu **Konto** und wechseln Sie zur Registerkarte **Stammdatenrollen**.

<img src="/images/benutzerhandbuch/Administration/admin-roles-inventory.png" alt="Context menu">

In der Registerkarte **Stammdatenrollen** können Sie Berechtigungen für bestimmte Gruppen und/oder deren Kinder verwalten. Es gibt verschiedene voreingestellte Stammdatenrollen, aber Sie können auch eigene Rollen nach Ihren Bedürfnissen erstellen. 

Die folgenden Stammdatenrollen sind in neuen Mandanten voreingestellt:

|Rolle|Beschreibung|
|:---|:---|
|Manager| Kann alle Daten des Assets lesen und alle Stammdaten verwalten, aber keine Kommandos ausführen. Kann zusätzlich Stammdaten (einschließlich Dashboards) und Alarme verwalten.
|Kommandos: Alle|Kann die Assets per Fernzugriff verwalten, indem er Kommandos an ein Gerät sendet (z. B. Software-Updates, Fernkonfigurationen).
|Kommandos: Gerät neustarten|Kann Geräte neustarten.
|Leser|Kann alle Daten des Assets lesen.


#### So fügen Sie eine Stammdatenrolle hinzu

Klicken Sie **Rolle hinzufügen** in der Registerkarte **Stammdatenrollen**. 

Oben auf der Seite können Sie einen Namen für die Stammdatenrolle vergeben. Klicken Sie in das Feld, geben Sie einen Namen ein und klicken Sie auf das grüne Häkchen zum Speichern Ihrer Eingabe.

![Role details](/images/benutzerhandbuch/Administration/admin-inventory-role-edit.png)

Die Berechtigungen sind in die folgenden Kategorien eingeteilt:

|Kategorie|Beschreibung|
|:---|:---|
|Alarme|Berechtigungen für das Arbeiten mit Alarmen von Geräten.
|Audits|Berechtigungen für Audit-Logs.
|Ereignisse|Berechtigungen für das Arbeiten mit Ereignissen von Geräten.
|Stammdaten|Berechtigungen für das Anzeigen und Bearbeiten von Geräten.
|Messwerte|Berechtigungen für Messwerte.
|Gerätesteuerung|Berechtigungen für die Fernsteuerung von Geräten.
|Voller Zugriff|Vollständiger Zugriff auf die verbundenen Geräte, hauptsächlich zur Vereinfachung der Konfiguration.

> **Info:** Service Provider sehen eine weitere Berechtigung "Support" in Ihrem Management-Mandanten. Diese Berechtigung ermöglicht es Benutzern des Service Providers, den Benutzern ihrer Kunden Support zu geben, siehe [Support für Benutzer in anderen Mandanten](/benutzerhandbuch/enterprise-edition#users-in-other-tenants).

Fügen Sie einer Rolle eine Berechtigung hinzu, indem Sie das Plus-Symbol neben der gewünschten Kategorie klicken.

Geben Sie im Feld **Typ** einen Typen ein, um den Datentypen weiter einzuschränken, für den diese Berechtigung gelten soll. 

Nehmen wir etwa an, ihr Gerät sendet Messwerte zum Device Management, wie "c8y&#95;SignalStrength", sowie aktuelle Produktionsmesswerte. Sie möchten aber, dass der Benutzer nur die Device Management-Messwerte sieht. In diesem Fall geben Sie "c8ySignalStrength" als Typ ein.

Standardmäßig enthält das Feld **Typ** ein Sternsymbol *, so dass alle Typen eingeschlossen sind.

> **Info:** Weitere Informationen zu möglichen Typen finden Sie in Ihrer Gerätedokumentation, der [Sensor Library](/reference/sensor-library) von Cumulocity oder der [Device Management Library](/reference/device-management). Der Typ, der hier verwendet wird, ist der sogenannte "Fragmenttyp", nicht das "Type"-Attribut. Sie müssen alle Fragmenttypen, die in einem Messwert gesendet werden, eingeben, damit der Messwert sichtbar wird; ähnliches gilt für andere Datentypen.

Wählen Sie im Feld **Berechtigung** eine Berechtigungsebene aus der Auswahlliste: 

* READ - zum Anzeigen von Objekten
* CHANGE - zum Ändern von Objekten (schließt nicht die READ-Berechtigung ein)
* ALL - zum Lesen UND Ändern von Objekten

>**Wichtig:** Wenn Sie eine Berechtigung hinzufügen, erscheint möglicherweise ein kleines Ausrufungszeichen. Das Ausrufungszeichen weist darauf hin, dass die soeben hinzugefügte Rollen keine Auswirkung hat, da eine andere, "höhere" Berechtigung, die für den Benutzer gesetzt wurde, diese Berechtigung bereits umfasst. Überprüfen Sie in diesem Fall, ob Sie vollständigen Zugriff gewährt haben oder ob es im gleichen Abschnitt eine andere Berechtigung mit "*" als Typen und "Alle" als Berechtigung gibt.

Nehmen wir als weiteres Beispiel an, dass Sie Tracking-Geräte verwenden. Sie möchten, dass Ihr Benutzer alle Geräte sehen, aber nichts ändern kann. Außerdem soll der Benutzer in der Lage sein, die Wege von Geräten auf einer Karte zu verfolgen. Wege werden über ein Ereignis mit dem Fragmenttypen "c8y&#95;Position" aufgezeichnet (siehe [Sensor Library](/reference/sensor-library)). Erteilen Sie dem Benutzer eine READ-Berechtigung auf Stammdaten und auf Ereignisse mit dem Typen "c8y&#95;Position", wie in der Abbildung unten dargestellt.

<img src="/images/benutzerhandbuch/Administration/admin-inventory-role-example.png" alt="Permission example">

### <a name="attach-inventory"></a>Zuweisen von Stammdatenrollen zu Benutzern

Stammdatenrollen werden einem Benutzer und einer Gerätegruppe zugewiesen. 

Klicken Sie **Benutzer** im Menü **Konto**, wählen Sie einen Benutzer aus der Benutzerliste und wechseln Sie zur Registerkarte **Stammdatenrollen**. 

In der Registerkarte **Stammdatenrollen** sehen Sie einen Baum mit Gerätegruppen. Klicken Sie auf den Pfeil rechts von einer Gruppe, um eine Stammdatenrollen zuzuweisen. Wählen Sie die gewünschten Rollen und klicken Sie **Anwenden**. Weitere Informationen zu den Rollen erhalten Sie, wenn Sie den Mauszeiger über das Info-Symbol bewegen, oder unter [Anzeigen von Stammdatenrollen](#inventory).

> **Wichtig**: Wenn ein Benutzer bereits eine globale Rolle hat, die Stammdatenberechtigungen umfasst, kann der Benutzer alle Geräte sehen oder ändern, unabhängig von den hier zugewiesenen Stammdatenrollen.

Stammdatenrollen werden von Gruppen an alle ihre direkten und indirekten Untergruppen sowie die Geräte in der Gruppe vererbt. Wenn Sie etwa eine Rolle mit Leseberechtigung für Alarme für eine Gerätegruppe wählen, kann der Benutzer alle Alarme für alle Geräte in dieser Gruppe sowie in ihren Untergruppen sehen.

Wenn ein Benutzer Stammdatenzugriff für eine Gerätegruppe hat, hat er auch Zugriff auf alle Dashboards für diese Gruppe in der Cockpit-Anwendung.

Sie können auch Stammdatenrollen eines anderen Benutzers kopieren. Klicken Sie **Stammdatenrollen eines anderen Benutzers kopieren**, um Rollen zu kopieren. Wählen Sie im folgenden Fenster einen Benutzer aus und klicken Sie **Kopieren**. Oben können Sie auswählen, ob Sie die Rollen mit den vorhandenen Rollen zusammenführen möchten (Standardeinstellung), oder ob Sie die vorhandenen Rollen ersetzen möchten. Das Kopieren von Rollen erleichtert das Verwalten von Berechtigungen für viele Benutzer, da Sie einen Referenzbenutzer erstellen können, um von dort die Rollen zu kopieren.

<img src="/images/benutzerhandbuch/Administration/admin-inventory-role-copy.png" alt="Copy roles">


### Fehlerbehebung bei Berechtigungen

Wenn Sie Aktionen durchführen möchten für die Sie keine ausreichende Berechtigung haben, erhalten Sie eine Fehlermeldung.

Klicken Sie für Hilfe bei der Fehlersuche auf die Schaltfläche **Benutzer** in der rechten oberen Leiste. Wählen Sie aus dem Kontextmenü **Verweigerte Anfragen**. Im darauf folgenden Fenster finden Sie Details zu den verweigerten Anfragen. Ein Administrator oder der Support kann Ihnen helfen, die Berechtigungsprobleme zu beheben.

### <a name="app-access"></a>Gewähren von Anwendungszugriff

Die Registerkarte **Anwendungen** zeigt eine Liste aller verfügbaren Anwendungen in Ihrem Mandanten in alphabetischer Reihenfolge. 

Um dem Benutzer Anwendungen zuzuweisen, wählen Sie einfach die entsprechenden Anwendungen aus und klicken **Speichern**. 

Weitere Informationen zur Anwendungsverwaltung finden Sie unter [Verwalten von Anwendungen](/benutzerhandbuch/administration#managing-applications).

![Application access](/images/benutzerhandbuch/Administration/admin-application-access.png)

> **Info:** Wenn ein Benutzer die globale Berechtigung hat, alle Anwendungen einzusehen, wird eine entsprechende Information angezeigt.
