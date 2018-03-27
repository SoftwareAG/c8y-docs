---
order: 13
title: Verwalten von Berechtigungen
layout: redirect
---

Berechtigungen legen fest, welche Funktionen ein Benutzer in Cumulocity-Anwendungen ausführen darf. Um das Verwalten von Berechtigungen zu vereinfachen, sind sie in sogenannte Rollen eingeteilt. Jeder Benutzer kann eine Reihe von Rollen zugewiesen bekommen, deren Berechtigungen addiert werden.

Die folgenden Rollen können zugewiesen werden:

*   Globale Rollen: Enthalten Berechtigungen, die auf alle Daten innerhalb eines Mandanten zutreffen.
*   Stammdatenrollen: Enthalten Berechtigungen, die auf Gerätegruppen zutreffen.
*   Anwendungszugriff: Berechtigt den Benutzer, eine Anwendung zu benutzen.

### <a name="global"></a>Anzeigen von globalen Rollen

Klicken Sie "Rollen" im Menü "Konto", um die Liste der konfigurierten Rollen anzuzeigen.

In der Registerkarte "Globale Rollen" finden Sie die Rollen, die allgemeine Berechtigungen erteilen. Es gibt verschiedene globale Standardrollen, aber Sie können auch eigene nach Ihren Bedürfnissen erstellen.

![Kontextmenü](/guides/images/users-guide/Administration/Admin_GlobalRoles.png)

Die Rollen "admins" und "devices" haben einen Sonderstatus:

<table>

<thead>

<tr>

<th style="text-align: left">Rolle</th>

<th style="text-align: left">Beschreibung</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align: left">admin</td>

<td style="text-align: left">Alle Berechtigungen sind aktiviert. Der ursprüngliche Administrator, also der erste Benutzer, der in einem Mandanten angelegt wurde, erhält diese Rolle.</td>

</tr>

<tr>

<td style="text-align: left">devices</td>

<td style="text-align: left">Typische Berechtigungseinstellung für Geräte. Nach der Registrierung bekommt ein Gerät automatisch diese Rolle. Bearbeiten Sie diese Rolle, wenn Ihre Geräte mehr oder weniger Berechtigungen benötigen, oder weisen Sie Ihren Geräten andere Rollen zu.</td>

</tr>

</tbody>

</table>

Darüber hinaus sind anfänglich die folgenden Rollen konfiguriert:

<table>

<thead>

<tr>

<th style="text-align: left">Rolle</th>

<th style="text-align: left">Beschreibung</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align: left">CEP Manager</td>

<td style="text-align: left">Kann auf alle Smart Rules und Echtzeitverarbeitungsregeln zugreifen.</td>

</tr>

<tr>

<td style="text-align: left">Cockpit-Benutzer</td>

<td style="text-align: left">Kann auf die Cockpit-Anwendung zugreifen. Zusätzlich sollten Sie eine Rolle mit Zugriff auf die Geräte hinzufügen.</td>

</tr>

<tr>

<td style="text-align: left">Device Management-Benutzer</td>

<td style="text-align: left">Kann auf die Device Management-Anwendung zugreifen. Der Benutzer kann den Simulator verwenden und Sammelkommandos ausführen. Zusätzlich sollten Sie eine Rolle mit Zugriff auf die Geräte hinzufügen.</td>

</tr>

<tr>

<td style="text-align: left">Globaler Manager</td>

<td style="text-align: left">Hat Lese- und Schreibberechtigung für alle Geräte.</td>

</tr>

<tr>

<td style="text-align: left">Globaler Leser</td>

<td style="text-align: left">Hat Leseberechtigung für alle Geräte.</td>

</tr>

<tr>

<td style="text-align: left">Globaler Benutzermanager</td>

<td style="text-align: left">Kann alle Benutzer verwalten.</td>

</tr>

<tr>

<td style="text-align: left">Geteilter Benutzermanager</td>

<td style="text-align: left">Kann untergeordnete Benutzer verwalten. Der Abonnementplan muss Benutzerhierarchien umfassen, um untergeordnete Benutzer verwalten zu können.</td>

</tr>

<tr>

<td style="text-align: left">Mandantenmanager</td>

<td style="text-align: left">Kann mandantenweite Einstellungen verwalten, wie etwa eigene Anwendungen, Datenübertragung, Datenhaltung und Mandantenstatistiken.</td>

</tr>

</tbody>

</table>

Möglicherweise sehen Sie die folgenden alten Rollen:

<table>

<thead>

<tr>

<th style="text-align: left">Rolle</th>

<th style="text-align: left">Beschreibung</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align: left">business</td>

<td style="text-align: left">Kann auf alle Geräte und deren Daten zugreifen, aber hat keine Administrationsrechte im Mandanten.</td>

</tr>

<tr>

<td style="text-align: left">readers</td>

<td style="text-align: left">Kann alle Daten lesen (einschließlich Benutzerdaten, im Gegensatz zur Rolle "Globaler Leser").</td>

</tr>

</tbody>

</table>

### <a name="create-edit-roles"></a>Erstellen und Bearbeiten von globalen Rollen

Sie können bestehende globale Rollen bearbeiten oder neue globale Rollen erstellen.

Klicken Sie einfach auf die entsprechende Karte, um eine globale Berechtigung zu bearbeiten. Um eine neue globale Rolle zu erstellen, klicken Sie in der Registerkarte "Globale Rollen" **Rolle hinzufügen**.

In der Rollenseite sehen Sie auf der linken Seite eine Liste mit Berechtigungstypen und auf der rechten Seite eine Liste mit Anwendungen.

Die folgende Abbildung zeigt die Einstellungen für die Rolle "admins".

![Admins-Beispiel](/guides/images/users-guide/adminsample.png)

**Berechtigungsebenen**

Für jeden Typen können Sie die folgenden Berechtigungsebenen wählen:

*   **Lesen**: Die jeweiligen Daten einsehen.
*   **Erstellen**: Neue Daten wie Benutzer und Stammdaten erstellen und Benutzer innerhalb Ihrer Hierarchie bearbeiten.
*   **Aktualisieren**: Die jeweiligen Daten ändern und löschen (beinhaltet nicht "Lesen").
*   **Admin**: Ermöglicht "Lesen", "Erstellen" und "Aktualisieren" von Daten.

> **Info:** Berechtigungen zum Erstellen sind mit dem Eigentumskonzept in Cumulocity verbunden. Wenn Sie ein Objekt erstellt haben, sind Sie der Eigentümer und können das Objekt ohne weitere Berechtigungen verwalten. Wenn Sie beispielsweise die "Erstellen"-Berechtigung für "Stammdaten" haben, können Sie Geräte und Gruppen erstellen und diese vollständig verwalten. Sie können jedoch keine Geräte und Gruppen, die Sie nicht selbst erstellt haben, verwalten, ohne dafür eine entsprechende Berechtigung oder eine zusätzliche Stammdatenrolle zu haben (siehe unten). Diese Konzept unterstützt es, Geräte minimale Berechtigungen zuzuweisen. Es ermöglicht Ihnen auch, Benutzerverwaltungsrechte auf untergeordnete Benutzer zu beschränken, wenn Sie Benutzerhierarchien abonniert haben.

Aktivieren Sie das Kontrollkästchen oben in einer Spalte, wenn Sie die entsprechende Berechtigungsebene auf alle Berechtigungstypen anwenden möchten.

**Berechtigungskategorien**

Die folgenden Berechtigungskategorien sind standardmäßig verfügbar:

<table>

<thead>

<tr>

<th style="text-align: left">Kategorie</th>

<th style="text-align: left">Beschreibung</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align: left">Alarme</td>

<td style="text-align: left">Alarme für Geräte einsehen oder bearbeiten</td>

</tr>

<tr>

<td style="text-align: left">Anwendungsverwaltung</td>

<td style="text-align: left">In diesem Konto verfügbare Anwendungen einsehen oder bearbeiten</td>

</tr>

<tr>

<td style="text-align: left">Audits</td>

<td style="text-align: left">Audit-Logs für Geräte einsehen oder bearbeiten</td>

</tr>

<tr>

<td style="text-align: left">Sammelkommandos</td>

<td style="text-align: left">Sammelkommandos einsehen oder bearbeiten</td>

</tr>

<tr>

<td style="text-align: left">CEP-Verwaltung</td>

<td style="text-align: left">Cumulocity Event Language-Regeln einsehen oder bearbeiten</td>

</tr>

<tr>

<td style="text-align: left">Data Broker</td>

<td style="text-align: left">Daten an andere Mandanten weiterleiten oder Daten von anderen Mandanten empfangen</td>

</tr>

<tr>

<td style="text-align: left">Gerätesteuerung</td>

<td style="text-align: left">Kommandos von Geräten einsehen oder bearbeiten bzw. Kommandos an Geräte senden. Wird auch für die Geräteregistrierung verwendet.</td>

</tr>

<tr>

<td style="text-align: left">Ereignisse</td>

<td style="text-align: left">Audit-Logs für Geräte einsehen oder bearbeiten</td>

</tr>

<tr>

<td style="text-align: left">Identifikatoren</td>

<td style="text-align: left">Alarme für Geräte einsehen oder bearbeiten</td>

</tr>

<tr>

<td style="text-align: left">Stammdaten</td>

<td style="text-align: left">Stammdaten einsehen oder bearbeiten</td>

</tr>

<tr>

<td style="text-align: left">Messwerte</td>

<td style="text-align: left">Audit-Logs für Geräte einsehen oder bearbeiten</td>

</tr>

<tr>

<td style="text-align: left">Optionen</td>

<td style="text-align: left">Kontooptionen wie Passwortregeln einsehen oder bearbeiten</td>

</tr>

<tr>

<td style="text-align: left">Datenhaltungsregeln</td>

<td style="text-align: left">Datenhaltungsregeln einsehen oder bearbeiten</td>

</tr>

<tr>

<td style="text-align: left">Simulator</td>

<td style="text-align: left">Simulierte Geräte konfigurieren</td>

</tr>

<tr>

<td style="text-align: left">Mandantenverwaltung</td>

<td style="text-align: left">Untermandanten einsehen, erstellen, bearbeiten oder löschen</td>

</tr>

<tr>

<td style="text-align: left">Mandantenstatistiken</td>

<td style="text-align: left">Nutzungsstatistiken für dieses Konto auf der Startseite der Anwendung "Administration" einsehen</td>

</tr>

<tr>

<td style="text-align: left">Benutzerverwaltung</td>

<td style="text-align: left">Benutzer, Benutzergruppen oder Berechtigungen einsehen oder bearbeiten</td>

</tr>

<tr>

<td style="text-align: left">Eigener Benutzer</td>

<td style="text-align: left">Eigenen Benutzer einsehen oder bearbeiten</td>

</tr>

</tbody>

</table>

Möglicherweise werden weitere Berechtigungen angezeigt, abhängig von den Funktionen in Ihrem Abonnementplan. Diese werden in Verbindung mit den jeweiligen Funktionen beschrieben.

> **Info:** Wenn die Cumulocity-Plattform um neue Funktionen mit neuen Berechtigungen erweitert wird, werden diese nicht automatisch zu bereits bestehenden Rollen hinzugefügt. Sollten Sie feststellen, dass Sie eine kürzlich angekündigte Funktion nicht verwenden können, überprüfen Sie zunächst Ihre Berechtigungen.

### <a name="attach-global"></a>Zuweisen von globalen Rollen

Sie können Benutzern globale Rollen entweder direkt in der Benutzerliste oder auf der entsprechenden Benutzerseite zuweisen.

Klicken Sie in der Benutzerliste auf die Spalte "Globale Rollen" eines bestimmten Benutzers, um eine Liste mit globalen Rollen anzuzeigen. Aktivieren oder Deaktivieren Sie die entsprechenden Kontrollkästchen und klicken Sie **Anwenden**, um Ihre Einstellungen zu speichern.

![Globale Rollen anwenden](/guides/images/users-guide/applyglobal.png)

Alternativ können Sie auf einen Benutzer klicken, um die entsprechende Benutzerseite zu öffnen. Aktivieren oder Deaktivieren Sie auf der rechten Seite die Kontrollkästchen für die relevanten Rollen und klicken Sie **Speichern** unten auf der Seite, um Ihre Einstellungen zu speichern.

![Globale Rollen zuweisen](/guides/images/users-guide/attachglobal.png)

### <a name="inventory"></a>Anzeigen von Stammdatenrollen

Stammdatenrollen enthalten Berechtigungen, die Sie Gerätegruppen zuweisen können. Eine Stammdatenrolle kann beispielsweise die Berechtigung enthalten, ein Gerät neu zu starten. Sie können diese Stammdatenrolle einer Gruppe von Geräten, z. B. "Region Nord", und einem Benutzer, z. B. "Schmidt" zuweisen. Daraus resultiert, dass der Benutzer "Schmidt" alle Geräte, die in der Gruppe "Region Nord" oder einer Untergruppe enthalten sind, neu starten kann.

Um die kürzlich konfigurierten Stammdatenrollen anzuzeigen, wählen Sie "Rollen" im Menu "Konto" und wechseln Sie zur Registerkarte "Stammdatenrollen".

![Kontextmenü](/guides/images/users-guide/Administration/Admin_InventoryRoles.png)

In der Registerkarte "Stammdatenrollen" können Sie Berechtigungen für bestimmte Gruppen und/oder deren Kinder verwalten. Es gibt verschiedene voreingestellte Stammdatenrollen, aber Sie können auch eigene Rollen nach Ihren Bedürfnissen erstellen.

Die folgenden Stammdatenrollen sind in neuen Mandanten voreingestellt:

<table>

<thead>

<tr>

<th style="text-align: left">Rolle</th>

<th style="text-align: left">Beschreibung</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align: left">Manager</td>

<td style="text-align: left">Kann alle Daten einer Gruppe einsehen, aber keine Kommandos ausführen. Kann außerdem Stammdaten einschließlich Dashboards und Alarme verwalten.</td>

</tr>

<tr>

<td style="text-align: left">Kommandos: Alle</td>

<td style="text-align: left">Kann Kommandos an Geräte in einer Gruppe senden (z. B. Software-Updates).</td>

</tr>

<tr>

<td style="text-align: left">Kommandos: Gerät neustarten</td>

<td style="text-align: left">Kann Geräte in einer Gruppe neustarten</td>

</tr>

<tr>

<td style="text-align: left">Leser</td>

<td style="text-align: left">Kann alle Daten in einer Gruppe einsehen</td>

</tr>

</tbody>

</table>

### Erstellen und Bearbeiten von globalen Rollen

Sie können entsprechend Ihrer eigenen Bedürfnisse bestehende Stammdatenrollen bearbeiten oder neue Stammdatenrollen erstellen.

Klicken Sie einfach auf die entsprechende Karte, um eine Stammdatenrolle zu bearbeiten. Um eine neue Stammdatenrolle zu erstellen, klicken Sie in der Registerkarte "Stammdatenrollen" **Rolle hinzufügen**.

Oben auf der Seite können Sie einen Namen für die Stammdatenrolle vergeben. Klicken Sie in das Feld, geben Sie einen Namen ein und klicken Sie das grüne Häkchen zum Speichern Ihrer Eingabe.

![Rollendetails](/guides/images/users-guide/roledetails.png)

Die Berechtigungen sind in die folgenden Kategorien eingeteilt:

<table>

<thead>

<tr>

<th style="text-align: left">Kategorie</th>

<th style="text-align: left">Beschreibung</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align: left">Alarme</td>

<td style="text-align: left">Berechtigungen, die Alarme von Geräten betreffen</td>

</tr>

<tr>

<td style="text-align: left">Audits</td>

<td style="text-align: left">Berechtigungen, die Audits betreffen</td>

</tr>

<tr>

<td style="text-align: left">Ereignisse</td>

<td style="text-align: left">Berechtigungen zum Bearbeiten von Ereignissen von Geräten</td>

</tr>

<tr>

<td style="text-align: left">Stammdaten</td>

<td style="text-align: left">Berechtigungen zum Einsehen und Bearbeiten von Geräten</td>

</tr>

<tr>

<td style="text-align: left">Messwerte</td>

<td style="text-align: left">Berechtigungen, die Messwerte betreffen</td>

</tr>

<tr>

<td style="text-align: left">Gerätesteuerung</td>

<td style="text-align: left">Berechtigungen zur entfernten Steuerung von Geräten</td>

</tr>

<tr>

<td style="text-align: left">Voller Zugriff</td>

<td style="text-align: left">Vollständiger Zugriff auf die zugehörigen Geräte, in erster Linie zur Vereinfachung der Konfiguration.</td>

</tr>

</tbody>

</table>

> **Info:** Service Provider sehen eine weitere Berechtigung "Support" in Ihrem Management-Mandanten. Diese Berechtigung ermöglicht Benutzern des Service Providers den Benutzern ihrer Kunden Support zu geben. Siehe [Support für Benutzer anderer Mandanten](/guides/benutzerhandbuch/enterprise-edition#users-in-other-tenants).

Fügen Sie einer Rolle eine Berechtigung hinzu, indem Sie das Plus-Symbol neben der gewünschten Kategorie klicken.

Geben Sie im "Typ"-Feld einen Typen ein, um den Datentypen weiter einzuschränken, für den diese Berechtigung gelten soll.

Nehmen wir etwa an, ihr Gerät sendet Messwerte zum Device Management, wie "c8y&#95;SignalStrength", sowie aktuelle Produktionsmesswerte. Sie möchten aber, dass der Benutzer nur die Device Management-Messwerte sieht. In diesem Fall geben Sie "c8y_SignalStrength" als Typ ein.

Standardmäßig enthält das "Typ"-Feld ein Sternsymbol *, so dass alle Typen eingeschlossen sind.

> **Info:** Weitere Informationen zu möglichen Typen finden Sie in Ihrer Gerätedokumentation, der [Sensor Library](/guides/reference/sensor-library) von Cumulocity oder der [Device Management Library](/guides/reference/device-management). Der Typ, der hier verwendet wird, ist der sogenannte "Fragmenttyp", nicht das "Type"-Attribut. Sie müssen alle Fragmenttypen, die in einem Messwert gesendet werden, eingeben, damit der Messwert sichtbar wird; ähnliches gilt für andere Datentypen.

Wählen Sie im Feld "Berechtigung" eine Berechtigungsebene aus der Auswahlliste:

*   Lesen - Objekte einzusehen
*   Ändern - Objekte ändern (schließt nicht die Leseberechtigung ein)
*   Alle - Objekte lesen und ändern

![Rollenberechtigungen](/guides/images/users-guide/showperm.png)

> **Wichtig:** Wenn Sie eine Berechtigung hinzufügen, erscheint möglicherweise ein kleines Ausrufungszeichen. Das Ausrufungszeichen weist darauf hin, dass die soeben hinzugefügte Rollen keine Auswirkung hat, da eine andere, "höhere" Berechtigung, die für den Benutzer gesetzt wurde, diese Berechtigung bereits umfasst. Überprüfen Sie in diesem Fall, ob Sie vollständigen Zugriff gewährt haben oder ob es im gleichen Abschnitt eine andere Berechtigung mit "*" als Typen und "Alle" als Berechtigung gibt.

![Warnmeldung](/guides/images/users-guide/overriddenperm.png)

Nehmen wir als weiteres Beispiel an, dass sie Tracking-Geräte verwenden. Sie möchten, dass Ihr Benutzer alle Geräte sehen, aber nichts ändern kann. Außerdem soll der Benutzer in der Lage sein, die Wege von Geräten auf einer Karte zu verfolgen. Wege werden über ein Ereignis mit dem Fragmenttypen "c8y&#95;Position" aufgezeichnet (siehe [Sensor Library](/guides/reference/sensor-library)). Erteilen Sie dem Benutzer Leseberechtigung auf Stammdaten und auf Ereignisse mit dem Typen "c8y_Position", wie in der Abbildung unten dargestellt.

![Berechtigungsbeispiel](/guides/images/users-guide/permexample.png)

### <a name="attach-inventory"></a>Zuweisen von Stammdatenrollen

Stammdatenrollen werden einem Benutzer und einer Gerätegruppe zugewiesen.

Klicken Sie "Benutzer" im "Konto"-Menü, wählen Sie einen Benutzer aus der Benutzerliste und wechseln Sie zur Registerkarte "Stammdatenrollen".

In der Registerkarte "Stammdatenrollen" sehen Sie einen Baum mit Gerätegruppen. Klicken Sie auf den Pfeil rechts von einer Gerätegruppe, um eine Stammdatenrollen zuzuweisen. Wählen Sie die gewünschten Rollen und klicken Sie **Anwenden**. Weitere Informationen zu den Rollen erhalten Sie, wenn Sie mit dem Mauszeiger über das Info-Symbol fahren, oder unter [Anzeigen von Stammdatenrollen](#inventory).

> **Wichtig**: Wenn ein Benutzer bereits eine globale Rolle hat, die Stammdatenberechtigungen umfasst, kann der Benutzer alle Geräte sehen oder ändern, unabhängig von den hier zugewiesenen Stammdatenrollen.

![Stammdatenrollen:](/guides/images/users-guide/inventoryroles.png)

Stammdatenrollen werden von Gruppen an alle ihre direkten und indirekten Untergruppen sowie die Geräte in der Gruppe vererbt. Wenn Sie etwa eine Rolle mit Leseberechtigung für Alarme für eine Gerätegruppe wählen, kann der Benutzer alle Alarme für alle Geräte in dieser Gruppe sowie in ihren Untergruppen sehen.

Wenn ein Benutzer Stammdatenzugriff für eine Gerätegruppe hat, hat er auch Zugriff auf alle Dashboards für diese Gruppe in der Cockpit-Anwendung.

Sie können auch Stammdatenrollen eines anderen Benutzers kopieren. Klicken Sie **Stammdatenrollen eines anderen Benutzers kopieren**, um Rollen zu kopieren. Wählen Sie im folgenden Fenster einen Benutzer aus und klicken Sie **Kopieren**. Oben können Sie auswählen, ob Sie die Rollen mit den vorhandenen Rollen zusammenführen möchten (Standardeinstellung), oder ob Sie die vorhandenen Rollen ersetzen möchten. Das Kopieren von Rollen erleichtert das Verwalten von Berechtigungen für viele Benutzer, da Sie einen Referenzbenutzer erstellen können, um von dort die Rollen zu kopieren.

![Kopieren von Rollen](/guides/images/users-guide/copyroles.png)

### <a name="app-access"></a>Zugriff auf Anwendungen

In der Registerkarte "Anwendungen" können Sie Benutzern Zugriff auf Anwendungen erteilen.

Die Registerkarte "Anwendungen" zeigt eine Liste aller verfügbaren Anwendungen in Ihrem Mandanten in alphabetischer Reihenfolge. Wählen Sie die Anwendungen für den Benutzer und klicken Sie **Speichern**. Weitere Informationen zur Anwendungsverwaltung finden Sie unter [Verwalten von Anwendungen](/guides/benutzerhandbuch/administration#managing-applications).

![Anwendungszugang](/guides/images/users-guide/appaccess.png)

> **Info:** Wenn ein Benutzer die globale Berechtigung hat, alle Anwendungen einzusehen, wird eine entsprechende Information angezeigt.

### Fehlerbehebung bei Berechtigungen

Wenn Sie Aktionen durchführen möchten für Sie Sie keine ausreichende Berechtigung haben, erhalten Sie eine Fehlermeldung.

Klicken Sie für Hilfe bei der Fehlersuche auf die Schaltfläche **Benutzer** in der rechten oberen Leiste. Wählen Sie aus dem Kontextmenü **Verweigerte Anfragen**. Im folgenden Fenster finden Sie Details zu den verweigerten Anfragen. Ein Administrator oder der Support kann Ihnen helfen, die Berechtigungsprobleme zu beheben.

Das Beispiel zeigt eine Fehlermeldung, die erscheint, nachdem ein Benutzer versucht hat, einen Simulator zu erstellen, jedoch nicht die erforderlichen Berechtigungen hat.

![Fehlermeldung](/guides/images/users-guide/noaccess.png)

