---
order: 40
title: Administration
layout: default
---

## Überblick

Die Administrationsanwendung ermöglicht es Administratoren, ihre Benutzer, Anwendungen, Regeln und gespeicherten Dateien zu verwalten sowie eine Reihe von Optionen für ihr Konto zu konfigurieren. Hier können Sie:

* Die [Abonnement Information](#home) einsehen.
* [Nutzer](#users) und [Benutzergruppen](#user-groups) verwalten, einschliesslich ihrer [Berechtigungen](#permissions).
* [Anwendungen](#applications) anlegen und verwalten.
* [Echtzeitregeln](#event-processing) implementieren und [Alarme umpriorisieren](#reprio-alarms).
* [Einstellungen](#settings) ändern.
* [Aufbewahrungsrichtlinien](#retention) fuer Daten konfigurieren
* [Email Warnung](#warningEmail) beim Erreichen des max. Datenvolumen einrichten und die Empfänger bestimmen.
* Verwaltung der [gespeicherten Daten](#files) wie Firmware oder Protokolle.

## <a name="home"></a>Die Startseite

Der Bildschirm "Home" bietet Navigationslinks zu den Hauptbereichen der Administrationsanwendung. Er zeigt auch Abonnement-Informationen für Ihr Konto. Die Abonnementinformationen beschreiben, wie viel Kapazität Sie verwendet haben und welche optionalen Anwendungen Sie abonniert haben. Der Kapazitätsabschnitt zeigt:

* API-Anforderungen: Es zählt, wenn eine Funktion in Cumulocity aufgerufen wird, unabhängig davon, ob die Funktion von einem Gerät aufgerufen wird (z. B. Senden einer Messung) oder aus einer Anwendung (z. B. Anzeigen der Geräteliste).
* Geräte-API-Anforderungen: Nur gezählt, wenn die API von einem Gerät aufgerufen wird (z. B. Senden einer Messung)
* Speicher: Die Gesamtmenge der in Ihrem Konto gespeicherten Daten. Dieser Betrag kann durch [Aufbewahrungsrichtlinien] (#Retention) und durch die Menge und Größe der [gespeicherten Dateien] (#Dateien) geändert werden.
* Speicher-Kontingent: Wenn das Speicherlimit pro Gerät gesetzt ist, ist der Benutzer auf eine [maximale Datennutzung](#storageQuota) eingeschränkt.
* Geräte: Die Gesamtzahl der an Ihr Konto angeschlossenen Geräte. Dies ist die Summe der Geräte, die im Menü [Alle Geräte](/guides/users-guide/device-management#viewing-devices) der Geräteverwaltung und ihren direkten und indirekten Kindgeräte aufgelistet sind.
* Benutzer: Die Summe aller in diesem Konto konfigurierten Benutzer, aktiv und inaktiv.

"Dieser Monat" zeigt die Nutzungsinformationen ab dem aktuellen Monat an. "Letzter Monat" zeigt den letzten vollen Monat an.

<img src="/guides/users-guide/adminscreende.png" alt="Home" style="max-width: 100%">

## <a name="users"></a>Verwalten von Benutzern

Um Benutzer in Ihrem Mandantenkonto zu verwalten, klicken Sie auf das Menü "Benutzer". Neue Mandanten finden in der Regel zwei Benutzer: Der erste Administrator und der Benutzer "sysadmin". Der ursprüngliche Administratorbenutzer wurde konfiguriert, als Ihr Konto erstellt wurde. Dieser Benutzer kann nicht entfernt, sondern nur bearbeitet werden. Der Benutzer "sysadmin" ist ein Benutzer, den die Cumulocity-Unterstützung verwendet, um Sie durch Ihre Testphase zu führen.

> Der Sysadmin-Benutzer ist möglicherweise nicht vorhanden, abhängig von Ihrem Provider.

![Click Users](/guides/users-guide/Usersde.png)

### Benutzer hinzufügen

Um weitere Benutzer hinzuzufügen, klicken Sie auf "Benutzer hinzufügen".

- Geben Sie einen Benutzernamen für diesen Benutzer ein, um sich anzumelden.
- Wählen Sie, ob der Benutzer aktiv sein soll.

> Wenn der Schalter auf "deaktiviert" gesetzt ist, kann sich der Benutzer nicht anmelden.

- Geben Sie den Vor- und Nachnamen des Benutzers ein. Dies wird oben rechts neben dem Benutzersymbol angezeigt, wenn sich der Benutzer anmeldet.
- Geben Sie die E-Mail-Adresse des Benutzers ein. Sie müssen eine gültige, eindeutige E-Mail-Adresse angeben, damit Benutzer ihr Kennwort zurücksetzen können.
- Geben Sie eine Telefonnummer ein.
- Wenn Sie die Option "Zwei-Faktor-Authentifizierung aktivieren" wählen, wird der Benutzer aufgefordert, eine Telefonnummer anzugeben, und bei der Anmeldung wird der PIN-Code (der an ein Telefon gesendet wird) für eine erfolgreiche Authentifizierung benötigt.
- Wenn Sie "Password reset" wählen, muss der Benutzer nach dem nächsten Login ein neues Passwort wählen.
- Wenn Sie den Link "E-Mail senden Passwort senden" wählen, wird die E-Mail-Nachricht an die angegebene E-Mail-Adresse mit einem Link gesendet, um ein Passwort festzulegen.
- Geben Sie ein Passwort ein und bestätigen Sie das Passwort. (Weitere Informationen zur Passwortstärke finden Sie unter [Einloggen](/guides/users-guide/overview#login).)
- Benutzer hinzufügen zu [Nutzergruppen](#user-groups).
- Zuweisen von Geräten und Anwendungen [Berechtigungen](#permissions).
- Klicken Sie auf die Schaltfläche "Speichern", um alle vorherigen Daten zu speichern.

![Add User](/guides/users-guide/adduserpagede.png)

> Felder ohne Sternchen ("*", wie "Vorname", "Nachname") sind optional.

### Nutzer Editieren

Um einen bestehenden Benutzer zu bearbeiten, klicken Sie einfach auf den Benutzer in der Liste. Alle Benutzerdetails außer dem Benutzernamen und dem Kennwort "Kennwort zurücksetzen als E-Mail senden" können geändert werden. Um das Passwort zu ändern, klicken Sie auf "Passwort ändern". Klicken Sie auf "Speichern", nachdem Sie die Bearbeitung beendet haben.

### Nutzer Deaktivieren oder Löschen

Wenn Sie mit der Maus über einen Benutzer fahren, werden die Schaltflächen zum Deaktivieren und Löschen auf der rechten Seite angezeigt. Die Schaltfläche "Deaktivieren" deaktiviert den Benutzer einfach. Der Benutzer ist weiterhin vorhanden, kann sich jedoch nicht einloggen. Mit der Löschtaste ("X") wird ein Benutzer dauerhaft gelöscht.

![Delete User](/guides/users-guide/deleteuserde.png)

### <a name="tfa"></a>Mit Zwei-Faktor-Authentifizierung

Die Zwei-Faktor-Authentifizierung (TFA, Two-factor authentication) ist eine zusätzliche Sicherheitsschicht, die nicht nur einen Benutzernamen und ein Passwort erfordert, sondern auch eine SMS-Bestätigung. TFA kann nur von Administratoren eingerichtet werden. Wenn TFA aktiviert ist, ist es nicht möglich, sie aus den "Benutzereinstellungen" zu konfigurieren, sie kann über die Administrationsoberfläche konfiguriert werden.

> Beachten Sie, dass die Telefonnummer erforderlich ist, wenn Sie einen Benutzer hinzufügen und TFA aktiviert ist. Wenn Benutzer ohne Telefonnummer versuchen, sich über TFA anzumelden, wird der Benutzer zu einem Fenster umgeleitet, um seine Mobiltelefonnummer einzugeben. Ohne Telefonnummer ist eine Anmeldung nicht möglich.

Um zu sehen, ob TFA für einen bestimmten Benutzer aktiviert ist, gehen Sie zum Menü "Benutzer" und überprüfen Sie die Spalte TFA-Status.

![TFA satus](/guides/users-guide/tfastatus.png)

Aktivieren Sie die Zwei-Faktor-Authentifizierung für einen Benutzer:

- Wechseln Sie zum Menü "Benutzer".
- Klicken Sie auf den Benutzernamen.
- Klicken Sie auf das Kontrollkästchen neben "Zwei-Faktor-Authentifizierung aktivieren.
- Klicken Sie auf "Speichern".

![Enable TFA](/guides/users-guide/enabletfa.png)
## <a name="user-groups"></a>Verwalten von Benutzergruppen

Benutzer mit den gleichen Berechtigungen können in Benutzergruppen platziert werden, die typische Berechtigungssätze repräsentieren. Ein einzelner Benutzer kann Teil von mehreren Benutzergruppen sein. Neue Mandantenkonten haben standardmäßig vier Benutzergruppen. Diese Benutzergruppen haben unterschiedliche Standardberechtigungseinstellungen:

* Admins: Eine Gruppe mit ** allen Berechtigungen ** standardmäßig.
* Business: Eine Gruppe, die mit allen Geräten und deren Daten arbeiten kann, aber ohne Administratorrechte.
* Leser: Eine Gruppe, die alle Daten lesen, aber nicht bearbeiten kann.
* Devices: Eine Gruppe mit typischen minimalen Standardberechtigungen für Geräte.

Alle Gruppen können geändert und gelöscht werden.

![User groups](/guides/users-guide/usergroupsde.png)

### Hinzufügen von Benutzergruppen

So fügen Sie eine Benutzergruppe hinzu:

- Klicken Sie auf "Benutzergruppe erstellen".
- Geben Sie den Namen der Benutzergruppe ein.
- [Berechtigungen](#permissions) anpassen.
- Den Vorgang speichern.

### Gruppen Editieren

Alle Benutzergruppendetails können bearbeitet werden. Um eine Gruppe zu bearbeiten, klicken Sie auf den Namen der Gruppe in der Gruppenliste. Nachdem Sie die Gruppe geändert haben, klicken Sie auf die Schaltfläche "Speichern".

> Gehen Sie mit Bedacht vor: Das Bearbeiten einer Benutzergruppe kann die Berechtigung für alle Benutzer in der Gruppe ändern und das ordnungsgemäße Funktionieren der Geräte beeinträchtigen.

<img src="/guides/users-guide/confirmgroupde.png" alt="Confirm group editing" style="max-width: 60%">

### Gruppen Entfernen

Um eine Gruppe zu entfernen, bewegen Sie den Cursor einfach über den Gruppennamen und klicken Sie auf die Schaltfläche "X". Ein Bestätigungsdialog erscheint. Klicken Sie auf "OK" wird die Gruppe zu löschen.

![Remove Group](/guides/users-guide/removegroup.png)

## <a name="permissions"></a>Berechtigungen Verwalten

Cumulocity distinguishes three types of permissions that are assigned to users and user groups:

* Kontenweite Berechtigungen ("Rollen"): Diese Flags ermöglichen es einem Benutzer, alle Daten in einem Konto zu lesen oder zu ändern, wie alle Geräte zu sehen und alle Geräte zu bearbeiten.
* Geräte- oder gerätegruppenspezifische Berechtigungen: Diese Berechtigungen definieren einen spezifischen Zugriff auf Daten in Ihrem Konto, die auf eine Gruppe von Geräten beschränkt sind.
* Zugriffsberechtigungen für Anwendungen: Diese definieren die Anwendungen, die Benutzer in ihrem Anwendungs-Switcher sehen.

Vom Standpunkt eines Benutzers:

* Ein Benutzer hat die Berechtigungen, die allen Gruppen zugewiesen wurden, zu denen der Benutzer gehört.
* Wenn ein Benutzer über weite Berechtigungen verfügt, werden andere Berechtigungen ignoriert.
* Geräte- / gruppenspezifische Berechtigungen werden an alle direkten und indirekten untergeordneten Geräte und untergeordneten Assets vererbt. Wenn Sie einer Gruppe von Geräten die Berechtigung "Lesen" zuweisen, kann der Benutzer automatisch alle Geräte in der Gruppe sehen.

### Kontenweite Berechtigungen zuweisen

Wenn Sie eine Gruppe bearbeiten, wird unter dem Gruppennamen eine Tabelle mit "Rollen" aufgelistet. Diese stellen die Berechtigung für folgende Datentypen dar:

* Tenant-Management: Anzeigen, Erstellen, Bearbeiten oder Löschen von Untermandanten.
* Mieterstatistiken: Anzeigen der Nutzungsdaten für dieses Konto, wie auf der Homepage der Administrationsanwendung gezeigt.
* Optionenverwaltung: Anzeigen oder Bearbeiten von Kontooptionen, z. B. Kennwortrichtlinien.
* Anwendungsverwaltung: Anzeigen oder bearbeiten Sie die in diesem Konto verfügbaren Anwendungen.
* Benutzerverwaltung: Anzeigen oder Bearbeiten von Benutzern, Benutzergruppen und Berechtigungen.
* Eigene Benutzerverwaltung: Anzeigen oder bearbeiten Sie Ihren eigenen Benutzer.
* Identität: Anzeigen oder Bearbeiten von Bezeichnern für Geräte.
* Inventar: Inventurdaten anzeigen oder bearbeiten.
* Messungen: Anzeigen oder Erstellen von Messungen für Geräte.
* Ereignisse: Anzeigen oder Erstellen von Ereignissen für Geräte.
* Alarme: Alarme für Geräte anzeigen oder bearbeiten.
* Audits: Anzeigen oder Erstellen von Auditdatensätzen für Geräte.
* Gerätesteuerung: Befehle für Geräte bzw. Senden Sie Befehle an Geräte.
* CEP-Verwaltung: Anzeigen oder Bearbeiten von Cumulocity Event Language-Regeln.
* Aufbewahrungsregeln: Retentionregeln anzeigen oder bearbeiten.
* Bulk-Operationen: Massenoperationen anzeigen oder erstellen.
* Support-Operationen: Ermöglicht dem Benutzer, sich bei anderen Mietern als Support-Benutzer anmelden.

Für die verschiedenen Typen sind die folgenden Berechtigungen verfügbar:

- Lesen: Lesen spezifischer Daten.
- Admin: Erstellen, Ändern und Löschen spezifischer Daten. (Ohne "Lesen"!)

Es können nicht alle Arten von Daten geändert werden (Audit Protokolle). Für Stammdaten gibt es einen weiteren Berechtigungstyp: "Erstellen". Die Berechtigung "Erstellen" ermöglicht es dem Benutzer, Geräte im Inventar zu erstellen und diese Geräte vollständig im Besitz des Benutzers zu verwalten. Der Benutzer kann jedoch keine Geräte lesen oder verwalten, die anderen Benutzern "gehören". Dies wird hauptsächlich verwendet, um die für Geräte verfügbaren Berechtigungen zu begrenzen.

Um Berechtigungen zuzuordnen, klicken Sie auf das entsprechende Kontrollkästchen. Wenn Sie alle Einträge in einer bestimmten Spalte auswählen oder löschen möchten, verwenden Sie die Schaltflächen oben:

- Alles Löschen: Löscht alle gecheckten Benutzerrollen.
- Alles markieren: Wählt alle Benutzerrollen aus.
- Alles auswählen Lesen: Wählt "Lesen" für alle Benutzerrollen und deaktiviert die anderen Rollen.
- Alles auswählen Admin: Wählt "Admin" für alle Benutzerrollen und deaktiviert den Rest.

![All roles](/guides/users-guide/allroles.png)

### Verwenden der Supportberechtigung

#### Überblick

Support Nutzer sind Nutzer in der Mandanten-Verwaltungsumgebung mit einer speziellen Berechtigung sich in Mandanten Konten einzuloggen.
Diese Nutzer haben besondere Zugangsberechtigungen.
Diese Berechtigungen werden auf der Startseite vergeben und entsprechen einer Mandantenberechtigung.

Support Nutzer haben eigene Nutzernamen und Passwörter:

> support_user$user

Der "support_user" ist der Name des Support Benutzers offensichtlich, "Benutzer" ist der Name des Benutzers, auf dessen Umgebung zugegriffen wird.

Alternativ:

> support_user$

In diesem Anwendungsfall greift der Support-Benutzer auf die Umgebung eines Admin-Benutzers zu.

#### Konfiguration

Die Supportbenutzerfunktion ist standardmäßig aktiviert.
Wenn er vom Plattformbetreiber deaktiviert wird, hat jeder Benutzer die Option "Supportzugriff aktivieren". Es ist im oberen rechten Menü verfügbar.
Nach dem Auswählen dieser Option haben die Benutzer Zugriff auf dieses Konto für einen Tag.

#### Überwachungsprotokolle

Überwachungsprotokolle für alle Aktionen, die von Supportbenutzern ausgeführt werden, enthalten Informationen über den tatsächlichen Autor.
In der Spalte "Wer?" Wird der Name des Autors in Form von:

> "support_user$user"

#### Mandantenspezifische Berechtigungen

Manchmal ist es erforderlich, Support-Zugriffsrechte nur bestimmten Mandanten zuzuweisen. Es kann durch [gerätespezifische Berechtigungen](#assigning_device_specific_permissions) für den Nutzer und [Mandanten Objekt](#tenant_management_object) mit "SUPPORT", Typ und Berechtigung .

Der folgende Screenshot zeigt Ihnen, wie Sie den Zugriff auf den Mandanten "myTenant" gewähren können.

<img src="/guides/users-guide/support_permission.png" alt="Support permission">

Das von einem Mandanten verwaltete Objekt kann nach Typ "c8y_Tenant" oder dem Namen identifiziert werden, der der Mandanten-ID entspricht.

### Löschung von Mandanten beschränken

Benutzer mit Mandantenverwaltung und "Admin" Berechtigungen können Mandanten erstellen, aktualisieren und löschen. Um zu verhindern, dass ein Benutzer die Mandanten löscht, sollte nur eine Berechtigung "Erstellen und Aktualisieren" erteilt werden.

![tenant delete restriction](/guides/users-guide/restrict_tenant_deletion.png)

### <a name="tenant_management_object"></a>Mandantenverwaltungsobjekte

Mandanten-Management-Objekte sind Geräte im Mandanten-Management, die vorhandene Mandanten repräsentieren. Sobald ein neuer Mandant angelegt ist, wird im Mandanten "Management" mit dem Typ "c8y_Tenant" und einem Namen gleich der Mandanten-ID ein neues Mandantenverwaltungsobjekt angelegt. Dieses Objekt enthält auch Fragment "customProperties" mit "externalReference" und andere benutzerdefinierte Eigenschaften des zugeordneten Mandanten.

Warnung: Wenn das Mandantverwaltungsobjekt versehentlich gelöscht wird, kann es durch Aktualisierung jeder Eigenschaft des zugehörigen Mandanten wiederhergestellt werden. Mandant-spezifische Berechtigungen für das Mandantenkonto gehen verloren.

### <a name="assigning_device_specific_permissions"></a>Zuweisen von gerätespezifischen Berechtigungen

Um bestimmte Berechtigungen auf Geräteebene oder Gerätegruppenebene zuzuordnen, gehen Sie zum Abschnitt "Benutzerberechtigungen" bei der Bearbeitung von Benutzern oder im Abschnitt "Gruppenberechtigungen" bei der Bearbeitung von Benutzergruppen.

- Wählen Sie ein Objekt (Gerät oder Gerätegruppe), indem Sie die ID oder den Namen des Objekts eingeben.
- Wählen Sie den Bereich der Berechtigung für das ausgewählte Objekt aus. Der Bereich begrenzt die Berechtigung auf bestimmte Datentypen für dieses verwaltete Objekt. Verwenden Sie ein Sternchen ("*"), um allen Datentypen des Objekts die Berechtigung zu erteilen.
- Begrenzen Sie die Berechtigung auf bestimmte Inhalte in den Daten ("Typ"). Um z. B. einen Benutzer zu beschränken, nur Neustart-Befehle an ein Gerät zu senden, verwenden Sie "OPERATION" als Bereich und "c8y_Restart" als Typ. Verwenden Sie erneut ein Sternchen ("*") als Platzhalter für jeden Inhalt.
- Wählen Sie die zu erteilende Berechtigung aus: Verwenden Sie "Lesen", um die Daten zu lesen. Verwenden Sie "Admin" zum Erstellen, Ändern und Löschen der Daten. Verwenden Sie ein Sternchen ("*"), um sowohl die Lese- als auch die Admin-Berechtigung zuzuweisen.
- Klicken Sie auf die Schaltfläche "Hinzufügen".
- Klicken Sie auf die Schaltfläche "Speichern".

![User Permissions](/guides/users-guide/userpermissions.png)

> Wie oben erwähnt, werden Berechtigungen für Gruppen von Geräten an die untergeordneten Geräte und untergeordneten Elemente der Gruppe vererbt.

### Anwendungszugriffsberechtigungen zuweisen

Um Anwendungen bestimmten Benutzern und Benutzergruppen zuzuordnen, gehen Sie zum Abschnitt "Anwendungszugriff" dieses Benutzers oder dieser Benutzergruppe. Der Anwendungszugriffsbereich ist nicht sichtbar, wenn der Benutzer oder die Benutzergruppe bereits Zugriff auf alle Anwendungen hat. Der Abschnitt zeigt Marktanwendungen und eigene Anwendungen. Marketplatz-Anwendungen sind in der Regel Abonnenments für Ihr Konto. Eigene Anwendungen sind Anwendungen, die Sie Ihrem Konto hinzugefügt haben, siehe [Anwendungen](#applications). Überprüfen Sie alle Anwendungen, die dem Benutzer oder der Benutzergruppe zur Verfügung gestellt werden sollen.

<img src="/guides/users-guide/applicationaccess.png" alt="Application access" style="max-width: 60%">

## <a name="applications"></a>Anwendungen Verwalten

Neben den vorhandenen Anwendungen können Sie auch eigene Anwendungen in Ihrem Konto anlegen, indem Sie das Menü "Eigene Anwendungen" benutzen. Diese Anwendungen können "Smartapps" oder generische HTML5-Anwendungen sein. "Smartapps" -Anwendungen sind HTML5-Anwendungen, die durch Hinzufügen von Plugins erweitert werden können. Bei der Bereitstellung von Plugins werden die Plugins in einer bestimmten Anwendung implementiert. Beispielsweise könnte ein Plugin ein spezifisches Widget dem Cockpit-Dashboard hinzufügen.

Plugins können nur zu eigenen Anwendungen hinzugefügt werden, da die Applikation selbst beim Hinzufügen des Plugins modifiziert wird. Beim Hinzufügen eines Plugins zu abonnierten Anwendungen muss die Anwendung zuerst in eine eigene Anwendung geklont werden. Danach kann das Plugin hinzugefügt werden. Dieser Vorgang wird vom Administrations-Assistenten unterstützt.

> "Smartapps" fügen Sie das Plugin in die Anwendung ein. Dies hat sich gegenüber den alten, in anderen Anwendungen gespeicherten Smartapps-Referenz-Plugins geändert.

Wenn eine Anwendung erstellt wurde, wird sie im Anwendungs- Switcher verfügbar sein.

> Die Schaltfläche "Öffnen" der Anwendung wird angezeigt, wenn Sie den Cursor über den Namen der Anwendung bewegen.

![List of own applications](/guides/users-guide/ownapplicationsde.png)

### Eine Anwendung Erstellen

Um eine Anwendung hinzuzufügen, können Sie eine Anwendung "ZIP-Datei" hochladen.

- Klicken Sie auf "Anwendung hinzufügen".
- Klicken Sie auf "Zip-Datei hochladen".
- Entweder legen Sie die Datei in die Box oder einfach auf Ihrem Computer.

### Arbeiten mit externen Anwendungen

"Externe Anwendungen" sind Links zu Anwendungen, die woanders laufen. Geben Sie den Namen der Anwendung und des Anwendungsschlüssels ein, geben Sie dann die URL dieser Anwendung an und klicken Sie auf "Speichern", um den Link im Anwendungs-Switcher verfügbar zu machen.

### Anwendungen Kopieren

Diese Option kopiert die Anwendung. Das Klonen einer abonnierten Anwendung erzeugt eine Kopie der Anwendung als eigene Anwendung mit einem Link zur ursprünglichen Anwendung.

So klonen Sie eine Anwendung:

- Klicken Sie auf "Anwendung hinzufügen"
- Klicken Sie auf "Bestehende Anwendung klonen"
- Wählen Sie die gewünschte Anwendung, die Sie klonen möchten. Beachten Sie, dass auch abonnierte Anwendungen angezeigt werden.
- Geben Sie den Namen der Anwendung ein. Der Name wird als Titel oben links in der Anwendung angezeigt. Es wird auch im Anwendungs-Switcher angezeigt.
- Geben Sie einen Anwendungsschlüssel ein. Der Anwendungsschlüssel wird verwendet, um Anfragen aus dieser Anwendung zu identifizieren und für die Anmeldung zur Verfügung zu stellen. Mehr: [Concepts guide](/guides/concepts/applications).
- Geben Sie den Anwendungspfad ein. Dieser Pfad wird Teil der URL, um die Anwendung aufzurufen. Wenn Sie zum Beispiel "hello" als Anwendungspfad verwenden, lautet die URL der Anwendung "/ apps / hello".
- Klicken Sie auf die Schaltfläche "Klonen".

### <a name="creating-smartapp"></a>Hinzufügen einer Smart-App

> Diese Funktion ist veraltet und wird in zukünftigen Versionen des Produkts entfernt.

- Klicken Sie auf "Anwendung hinzufügen".
- Klicken Sie auf "Legacy Smartapp Erstellen".
- Geben Sie den Namen der Anwendung ein. Der Name wird als Titel oben links in der Anwendung angezeigt. Es wird auch im Anwendungs-Switcher angezeigt.
- Geben Sie den Anwendungspfad ein. Dieser Pfad wird Teil der URL, um die Anwendung aufzurufen. Wenn Sie zum Beispiel "hello" als Anwendungspfad verwenden, lautet die URL der Anwendung "/ apps / hello".
- Klicken Sie auf die Schaltfläche "Erstellen".

> Dies sind die alten "Smartapps" mit den Plugins, die Sie aus einer Liste ausgewählen müssen.

![Legacy smartapps](/guides/users-guide/smartapps.png)

### Hinzufügen und Entfernen von Plugins

Um die mit einem smartapp versehene Funktion zu konfigurieren und zu erweitern, können Sie Ihren Anwendungen Plugins (als ZIP-Dateien) hinzufügen. Um zusätzliche Plugins hinzuzufügen, gehen Sie zu "Eigene Anwendungen", bewegen Sie den Cursor auf die gewünschten Anwendungen und klicken Sie auf "Add Plugin". Sie können das Plugin in das Feld ziehen oder einfach aus dem Computer auswählen.

![Plugins](/guides/users-guide/plugins.png)

Um ein Plugin zu entfernen, klicken Sie auf das Zahnrad neben dem gewünschten Plugin und klicken Sie auf Entfernen. In den folgenden Tabellen sind die Navigatorelemente, Menüpunkte und deren jeweilige Plugins aufgelistet:


|Navigator |Plugin|
|:-------------|:-----|
|Willkommen|Willkommen Seite|
|Start|Cockpit Start|
|Smart Rules|Smart Rules UI|
|Gruppen|Gruppen Hierarchie|
|Daten Explorer|Data Punkt Explorer UI|
|Daten Punkt Bibliothek|Daten Punkt Explorer UI|
|Bericht|Bericht|
|Berichte|Dashboard (Es gibt 2 mit gleichem Namen. Dieser meint: "Berichte sind standalone dashboards...")|
|Alarme|Alarm Verwaltung|

|Menu |Plugin|
|:--------|:-----|
|Info|Deaktivieren nicht möglich|
|Kindassets|Deaktivieren nicht möglich|
|Berechtigungen|Geräte Berechtigung Management Plugin|
|Daten Explorer|Daten Punkt Explorer UI|

> Bitte beachten Sie die "UI" am Ende der Plugin-Namen.

### Wiederherstellen einer älteren Anwendungsversion

Benutzer können alte Versionen einer Anwendung wiederherstellen.
Wenn Sie eine bestimmte Version der Anwendung aktivieren, wird dies die von den Benutzern verwendete Version sein.

>Die Registerkarte "Archiv" ist für abonnierte Anwendungen nicht verfügbar, da nur der Eigentümer der Anwendung diese Aktion durchführen kann.

### Anwendungen Editieren

Um eine Anwendung zu bearbeiten, klicken Sie einfach auf ihren Namen. Je nach Art der Anwendung (z. B. Hosted, External) können verschiedene Felder geändert werden.

> Beachten Sie, dass "ID", "Anwendungsschlüssel" und "Pfad" nach der Konfiguration nicht mehr geändert werden können.

### Hochladen von Archiven

Mehrere ZIP-Archivdateien können in Cumulocity gespeichert werden, wenn sie durch das Hochladen von ZIP-Dateien erstellt wurden. Jede Version wird als Archiv bezeichnet. Sie können verschiedene Versionen gleichzeitig hochladen und zwischen diesen Versionen umschalten. So laden Sie ein Archiv hoch:

- Wählen Sie die Anwendung, indem Sie auf ihren Namen klicken.
- Klicken Sie auf die Registerkarte "Archiv".
- Klicken Sie auf "Archiv hochladen" und navigieren Sie zum Archiv in Ihrem Ordner.
- Klicken Sie auf "Upload", um das Archiv in Cumulocity hochzuladen.

![Upload archive](/guides/users-guide/uploadarchive.png)

Nach dem Hochladen können Archive heruntergeladen, aktiviert oder entfernt werden. Das aktive Archiv (angezeigt durch ein Cloud-Symbol) ist die Version der Anwendung, die derzeit an die Benutzer Ihres Kontos geschaltet wird. Diese Version kann nicht gelöscht werden.

### Anwendungen Editieren

Um eine Anwendung zu bearbeiten, klicken Sie einfach auf ihren Namen. Je nach Art der Anwendung (z. B. Hosted, External) können verschiedene Felder geändert werden.

> Beachten Sie, dass "ID", "Anwendungsschlüssel" und "Pfad" nicht mehr geändert werden können.

### Anwendungen Entfernen

Wenn Sie eine Anwendung entfernen, die eine abonnierte Anwendung überschreibt, wird die derzeit abonnierte Anwendung für alle Benutzer verfügbar. Zusätzlich profitieren die Anwender von zukünftigen Upgrades der abonnierten Applikation.
Es ist nicht möglich, abonnierte Anwendungen zu entfernen. Dies ist nur für den Inhaber der abonnierten Anmeldung möglich.

>Um eine "Abonnierte Anwendung" zu überschreiben, muss die "Eigene Anwendung" denselben Kontextpfad wie die "Abonnierte Anwendung" haben.

Um eine Anwendung zu entfernen, bewegen Sie den Cursor über den Anwendungsnamen und klicken Sie auf das Zahnrad, und klicken Sie dann auf die Schaltfläche "Entfernen". Ein Bestätigungs-Popup-Fenster erscheint. Klicken Sie auf "OK" und die Anwendung wird gelöscht.


## <a name="tenants"></a>Mandanten Verwalten

Mit dem Untermandanten Konzept können Sie die Daten der einzelnden Mandanten hundertprozentig auseinanderhalten.

> Hintergrund: Als Verwalter von Mandanten sind alle Daten in Ihrem Konto 100% von den Daten anderer Mandanten getrennt. Die Daten in Ihrem Mandantenkonto werden standardmäßig mit allen Benutzern des Kontos geteilt, sofern sie nicht durch Benutzerberechtigungen eingeschränkt werden.

Wenn Sie 100% Datensicherheit anstelle von Umgang mit Benutzerberechtigungen wollen, dann verwenden Sie das Sub-Mandanten Konzept. Jeder Submandant hat einen eigenen Datenbereich. Alle Cumulocity-Funktionen (Benutzerverwaltung, App-Management, Regelverwaltung) sind für jeden Sub-Mandanten ohne Sichtbarkeit zu anderen Mandanten verfügbar.

Diese Funktion ist eine optionale Funktion, die nicht für alle Mandanten verfügbar ist.

> Falls Sie die Funktion abonniert haben, aber nicht sehen, wenden Sie sich an den Support.

In order to manage subtenants click on the subtenants menu. Subtenant management includes: Tenant creation, activation, suspension, subscribed applications and options.

![Sub-tenants](/guides/users-guide/sub-tenantsde.png)

> Tenant ID's must remain unique, two tenants cannot create subtenants with the same "URL/ID".
> Subtenants cannot create an additional level of subtenants.

### Untermandanten hinzufügen

Um einen neuen Untermandanten hinzuzufügen, klicken Sie auf "Mandant Erstellen"

> Felder mit einem Stern (*) sind Pflichtfelder.

- Geben Sie eine eindeutige Domain / URL des neuen Mieters ein. Diese URL wird verwendet, um auf die Anwendung zuzugreifen (z. B. tenant@cumulocity.com).
- Geben Sie den Namen des Unternehmens ein.
- Geben Sie die E-Mail des Administrators ein. Sie müssen eine gültige E-Mail-Adresse angeben, damit Benutzer das Kennwort zurücksetzen können.
- Geben Sie den Benutzernamen des Administrators ein, um sich anzumelden.
- Kontaktname eingeben. Dieses Feld ist optional.
- Geben Sie Kontakttelefon ein. Auch dieses Feld ist optional.
- Wählen Sie aus, ob Sie die E-Mail-Adresse zum Zurücksetzen des Passworts haben möchten. Wenn Sie diese Option nicht ausgewählt haben, müssen Sie ein Passwort eingeben und das Passwort bestätigen. (Weitere Informationen zur Passwortstärke finden Sie unter "[Log in](/guides/users-guide/overview#login)".)
- Klicken Sie auf die Schaltfläche "Speichern".

![Tenant-creation](/guides/users-guide/createtenantde.png)

### Editieren, Suspendieren und Entfernen von Untermandanten

Um Untermieter zu bearbeiten, klicken Sie auf den gewünschten Untermieter. Alle Felder können mit Ausnahme von "ID" und "Administrator Benutzername" bearbeitet werden.

Wenn Sie die Bearbeitung beendet haben, klicken Sie auf die Schaltfläche "Speichern".

> Wenn ein Mandant suspendiert ist, bleiben seine Daten noch in der Datenbank und er kann jederzeit wieder reaktiviert werden. Wenn der Mandant entfernt wird, werden seine Daten gelöscht.

Wenn Sie den Cursor über einen Mandanten bewegen, werden die Schaltflächen "Suspendieren" und "Entfernen" angezeigt. Die Schaltfläche "Entfernen" wird als rotes Kreuz dargestellt.

> Bitte beachten Sie, dass es während der Suspendierung eine zusätzliche Kontrolle gibt. Der Benutzer muss sein eigenes Passwort eingeben, um fortzufahren. Nachdem der Mandant suspendiert ist, wird dem suspendierten Administrator eine E-Mail zugesandt. Die E-Mail wird nur gesendet, wenn die Eigenschaft in der Konfigurationsdatei aktiviert ist und der Mandantenadministrator während der Erstellung eine E-Mail-Adresse angegeben hat.

### <a name="usage-stats"></a> Abrufen von Nutzungsstatistiken

Über das Menü "Nutzungsstatistiken" erhalten Sie Informationen zu jedem Sub-Mandanten. Die Statistik zeigt:

- Id: Unique ID des Submandanten.
- Externe Referenz: Dieses Feld ist für die individuelle Nutzung, zB können Sie hier eine Verknüpfung zum CRM-System oder eine interne Kundennummer hinzufügen.
- API-Anforderungen: Anzahl der API-Anforderungen, einschließlich Anforderungen von Geräten und Anwendungen.
- Geräte-API-Anforderungen: Anzahl der API-Anforderungen von Geräten
- Speicher (MB): Die Datenmenge, die in Ihrem Konto gespeichert ist.
- Geräte: Gesamtzahl der an den Mandanten angeschlossenen Geräte.
- Abonnierte Anwendung: Diese Spalte zeigt eine Anzahl von Anwendungen, die der Sub-Mandant abonniert hat.
- Erstellungszeit: Datum und Uhrzeit der Erstellung des Sub-Mandant.

![Usage statistics](/guides/users-guide/usagestats.png)

## <a name="event-processing"></a>Verwalten von Echtzeitregeln

Echtzeitregeln führen automatisch eine Logik aus, sobald neue Daten eingehen oder vorhandene Daten geändert werden. Die Logik wird in sogenannten "Modulen" implementiert. Module bestehen aus einer Menge von Anweisungen, die Sie in der sogenannten [Cumulocity Event Language](/guides/concepts/realtime) schreiben. Klicken Sie auf "Echtzeitregeln", um die aktuellen Module zu sehen oder neue Module anzulegen.

![Event processing](/guides/users-guide/eventprocessingde.png)

> Die sogenannten "[Smart Rules](/guides/benutzerhandbuch/cockpit-deutsch#rules)" sind eine benutzerfreundliche Art, Echtzeitverarbeitung in Standardsituationen wie beispielsweise Schwellwertanalyse durchzuführen. Auch Smart Rules sind "unter der Haube" in der Cumulocity Event Language realisiert. Sie können die Smart Rules in der Liste der Echtzeitregeln sehen, sie können sie jedoch dort nicht editieren.

### Neue Module Erstellen

Um ein neues Modul zu erstellen, klicken Sie auf "Neues Modul".

- Geben Sie einen Namen für das Modul ein. Sie können nur alphanumerische Zeichen ohne Leerzeichen verwenden.
- Wenn Sie die Anweisungen im Modul sofort ausführen wollen, lassen Sie den Status auf "Bereitgestellt" stehen. Andernfalls setzen Sie den Status auf "Nicht bereitgestellt".
- Beginnen Sie mit der Eingabe Ihrer CEL-Anweisungen in das große Textfeld "Body". Um etwas Inspiration zu erhalten, wählen Sie ein Beispiel aus dem Dropdown-Menü "Beispiele" und klicken Sie auf "Beispiel anfügen". Die Beispiel-CEL-Anweisung wird in das Textfeld "Body" an der Position des Cursors eingefügt.
- Klicken Sie auf die Schaltfläche "Speichern".

![New module](/guides/users-guide/newmodule.png)

Wenn Sie den Status "Bereitgestellt" gewählt haben, sehen Sie ein kleines grünes "Verbunden" Feld in der Benutzeroberfläche. Immer wenn Ihre Aussagen etwas Output produzieren, werden Sie es unterhalb dieses "Connected" -Box sehen. Durch Klicken auf eine Ausgabezeile wird die detaillierte Ausgabe der Anweisung aufgeklappt. Wenn Sie auf "Alle löschen" klicken, wird die Ausgabe auf dem Bildschirm entfernt.

### Module Verwalten

Um das Modul zu verändern, klicken Sie auf den Namen des Moduls. Um das Modul zu entfernen, mit dem Cursor über den Namen des Moduls fahren und auf die Schaltfläche "X" klicken. Ein Bestätigungsfenster wird eingeblendet. Bestätigen mit "OK" und das Modul wird entfernt.

![Remove modules](/guides/users-guide/removemodules.png)

>Anstatt das Modul zu löschen, können Sie es auch vorübergehend deaktivieren, indem Sie im Menü "Bearbeiten" auf "Nicht implementiert" klicken. Klicken Sie anschließend auf "Speichern".

## <a name="reprio-alarms"></a>Repriorisieren von Alarmen

Mit "Alarmzuordnung" können Sie die Schwere und den Text der Alarme ändern, um sie an Ihre geschäftlichen Prioritäten anzupassen. Zum Beispiel kann ein Verlust der Verbindung zu einem Gerät entscheidend für Sie sein, aber es ist standardmäßig ein "Wichtiger" -Alarm. Um dies zu ändern, fügen Sie eine Alarmzuordnung hinzu, um Alarme im Zusammenhang mit Verbindungsverlusten auf "Kritisch" zu ändern.

![Alarm mapping](/guides/users-guide/alarmmapping.png)

### Alarmzuordnung Hinzufügen

Um die Schwere eines Alarms zu ändern, bestimmen Sie den Typ des Alarms, den Sie ändern möchten, indem Sie auf einen Alarm klicken [Alarm Liste](/guides/benutzerhandbuch/device-management-deutsch#alarm-monitoring). Klicken Sie dann im Menü "Alarmzuordnung" auf "Alarmzuordnung hinzufügen".

- Geben Sie den zu ändernden Alarmtyp ein.
- Wählen Sie den gewünschten neuen Schweregrad aus, oder wählen Sie "Drop", um den Alarm überhaupt nicht anzuzeigen.
- Geben Sie einen neuen Text für den Alarm ein. Dieser Schritt ist optional. Wenn Sie keinen Text eingeben, bleibt der ursprüngliche Text im Alarm erhalten.
- Klicken Sie auf "Speichern".

### Alarmzuordnung Ändern oder Löschen

Um eine Alarmzuordnung zu ändern,

- Suchen Sie den Alarm im Abschnitt "Alarmzuordnung" und klicken Sie auf seinen Namen.
- Ändern Sie die Schwere und / oder Text.
- Klicken Sie auf "Speichern".

Um Schweregrade zu löschen den Cursor über den Alarm Typ bewegen und das "X" klicken. Ein Bestätigungsfenster erscheint. Mit "OK" das Löschen der Alarmzuordnung bestätigen.

## <a name="settings"></a>Einstellungen ändern

Durch die Erweiterung des Menüs "Einstellungen" können Administratoren:

- Change the [Passwort Richtlinie](#changing-password-settings).
- Change the [Standard Anwendung](#default-app).
- Change the [Zugangskontrolle](#access-control) settings.
- [Dashboards per mail Aktivieren oder Deaktivieren](#enabling-server-side-agents)
- Enter [OpenIT Zugangsdaten](#openIT-credentials)

### <a name="changing-password-settings"></a>Ändern der Passwortrichtlinie

Um die Passworteinstellungen zu ändern, klicken Sie auf "Passwort". Um die Gültigkeit von Benutzerpasswörtern zu begrenzen, legen Sie die Anzahl der Tage fest, zu denen Benutzer ihre Passwörter ändern müssen. Wenn Sie Ihre Benutzer nicht dazu zwingen möchten, Kennwörter zu ändern, verwenden Sie "0" für die unbegrenzte Gültigkeit von Passwörtern.

Standardmäßig können Benutzer jedes Kennwort mit acht Zeichen oder mehr verwenden. Wenn Sie "Erzwingen, dass alle Kennwörter" stark "(grün)" sind, müssen Ihre Benutzer starke Kennwörter wie unter "[Logging in](/guides/benutzerhandbuch/uebersicht#login)" beschrieben verwenden.

> "Erzwingen Sie, dass alle Kennwort grün sind" und die "Kennwortgültigkeitsbegrenzung" kann zwingend und nicht bearbeitbar sein, wenn sie so vom Plattformadministrator konfiguriert wird.

Starke (grüne) Passwörter müssen M Zeichen haben. Standardmäßig beschränkt das System die Benutzer darauf, keine Passwörter zu verwenden, die im Verlauf der Geschichte verwendet werden, dh die letzten N Passwörter, die von einem Benutzer bereitgestellt werden, werden vom System in Erinnerung behalten und das System schränkt die Benutzer ein, sie nicht zu benutzen. Der Standardwert für N ist 10.

> "M" und "N" können vom Administrator voreingestellt werden.

Klicken Sie auf "Speichern", um die Einstellungen zu speichern.

<img src="/guides/users-guide/passsettings.png" alt="Password settings" style="max-width: 50%">

### <a name="default-app"></a>Ändern der Standardanwendung

Mit dem Menü "Anwendung" können Administratoren die Standardanwendungsansicht für alle Benutzer innerhalb des Anmelders ändern, wenn keine Anwendung in der URL definiert wurde. Alle Benutzer müssen auch Zugriff auf diese Anwendung haben.

### <a name="access-control"></a>Ändern der Zugriffssteuerungseinstellungen

Mit dem "Application" -Menü können Administratoren Quell-Ursprungsressourcenfreigabe oder "CORS" auf der Cumulocity-API aktivieren. Für mehr Informationen, siehe auch http://enable-cors.org.

### <a name="enabling-server-side-agents"></a>Aktivieren von serverseitigen Agenten

Im Menü "Serverseitige Agenten" kann die Smart-Regel "Dashboard über E-Mail senden" aktiviert oder deaktiviert werden. Aktivieren Sie das Kontrollkästchen und klicken Sie auf "Speichern".

### <a name="openIT-credentials"></a>OpenIT Zugangsdaten Eingeben

SMS werden von verschiedenen Funktionen benutzt. Es kann für sicheren Zugang benutzt werden [Zwei-Faktor Authentifikation](/guides/benutzerhandbuch/administration-deutsch#users). Eine SMS kann gesendet werden, wenn ein Alarm ausgelöst wird. Mit SMS können Befehle an Geräte gesendet werden. TDer Service von [Openit](https://sms.openit.de/main.php) wird ähnlich benutzt. In diesem Abschnitt kann der Benutzer Anmeldeinformationen eingeben, um Funktionen zu aktivieren, die SMS-Nachrichten erfordern.

## <a name="retention"></a>Verwalten der Datenaufbewahrung

"Regeln der Datenaufbewahrung" gibt Ihnen die Kontrolle, wie lange Daten in Ihrem Konto gespeichert sind. Beispiel: Sie möchten Messungen für 90 Tage speichern, aber bereits nach 10 Tagen Alarme löschen. Standardmäßig werden alle historischen Daten nach 60 Tagen gelöscht (Diese können in Systemeinstellungen bearbeitet werden).

Aufbewahrungsregeln werden in der Regel während der Nacht abgearbeitet. Wenn Sie eine Aufbewahrungsregel bearbeiten, sehen Sie im Anwendungsbereich auf der Homepage der Verwaltungsanwendung keine sofortige Wirkung.

![Add rule](/guides/users-guide/addrulesde.png)

Um weitere "Aufbewahrungsregeln" hinzuzufügen, klicken Sie auf "Regel hinzufügen". Bis zum Feld "Maximales Alter" können Sie ein Sternchen ("*") in alle Felder eingeben, um einen beliebigen Wert in diesem Feld zuzulassen.

- Wählen Sie die Art der zu bereinigenden Daten (Alarme, Messungen, Ereignisse, Vorgänge, Überwachungsprotokolle) aus.
- Geben Sie einen Fragmenttyp ein, wenn Sie genauer über die aufzuräumenden Daten verfügen möchten. Um alle Verbindungsverlustalarme mit dieser Regel zu bereinigen, wählen Sie "Alarme" und geben "c8y_UnavailabilityAlarm" in "Typ" ein.
- Wenn Sie nur Daten von einem bestimmten Gerät entfernen möchten, geben Sie die Geräte-ID in die "Quelle" ein.
- Geben Sie das "Höchstalter" in Tagen ein (maximal zulässiger Wert ist 10 Jahre in Tagen).
- Klicken Sie auf die Schaltfläche "Speichern".

<img src="/guides/users-guide/addrulepage.png" alt="Add retention rule" style="max-width: 50%">

> Note that alarms are only removed if they are in "CLEARED" state.

Um solche Regeln zu Löschen, clicken auf das "X" Symbol und bestätigen Sie den Vorgang.

## <a name="warningEmail"></a>Verwalten der Speicher-Kontingentwarnung E-Mail

Dieser Abschnitt ist nur sichtbar, wenn für den Mandanten ein Speicherkontingent festgelegt wurde. Die Administratoren des Mandanten können eine Benutzergruppe und einen Schwellenwert festlegen, damit eine E-Mail einmal pro Tag gesendet werden kann, wenn der verwendete Speicherplatz höher als ein Prozentsatz des Speicherkontingents ist. Die E-Mail-Warnung kann auch deaktiviert werden. Die Standardeinstellung ist das Senden einer E-Mail an die Gruppe "admin", wenn der Speicher 80% des maximalen Speichers erreicht.


## <a name="files"></a>Dateien Verwalten

Das Datei-Repository bietet einen Überblick über die in Ihrem Konto gespeicherten Dateien. Um die Dateien anzuzeigen, klicken Sie im Administrationsmenü auf "Dateien Repository". Die aufgeführten Dateien können aus verschiedenen Quellen stammen. Dabei handelt es sich um Software-Images, Konfigurations-Snapshots aus Geräten, Protokolldateien von Geräten oder Web-Anwendungen, die über das Menü "Eigene Anwendungen" hochgeladen werden. Um eine Datei zu löschen, klicken Sie auf die Schaltfläche "X" neben der Datei.

![Files repository](/guides/users-guide/filesrepode.png)

>Wenn die Datei einer aktiven Anwendung entspricht, kann sie nicht gelöscht werden. Zuerst müssen Sie die Anwendung entfernen oder aktualisieren, um sie löschen zu können.

## <a name="storageQuota"></a>Storage Quota

Das Speicherkontingent ist für einen Mandanten vorhanden, wenn ein Speicherkontingent pro Gerät vom Plattformadministrator festgelegt wird. Der dem Benutzer zur Verfügung stehende Gesamtspeicher wird mit der Formel "Speicherquote pro Gerät x Anzahl Geräte" berechnet. Eine Kontrolle wird jeden Abend durchgeführt, um sicherzustellen, dass das Kontingent nicht überschritten wird.

Wenn das Kontingent überschritten wird, wird eine E-Mail an alle Mandantenadministratoren gesendet, um zu warnen, dass Daten in der folgenden Nacht gelöscht werden. Nach 24 Stunden, wenn das Kontingent noch überschritten wird, werden alle Datenspeichergrenzen um einen festen Prozentsatz reduziert. Das Speicherplatzkontingent pro Gerät wird durch diese Regel reduziert.

> Nehmen wir zum Beispiel an, dass ein Mieter ein Speicherkontingent von 10 GB hat.
> Aufbewahrungsregeln sind 80 Tage für Messungsdateien, 90 Tage für alle anderen Daten.
>
> - Tag 1: In der nächtlichen Überprüfung wird das Datenvolumen auf 13GB berechnet. Eine E-Mail wird an alle Mandantenadministratoren gesendet.
>
> - Tag 2: die Gesamtmenge ist noch bei 13GB. Das System stellt fest, dass eine Reduktion der Datenspeicherregeln um 15% ausreicht, um unter dem max Datenvolumen zu liegen. So wird jede Messung älter als 68 Tage (80 Tage - 15%) und alle anderen Daten, die älter als 77 Tage (90 Tage - 15% Ergebnisse in 76,5 Tagen, gerundet auf 77 Tage) sind, gelöscht.
>
> Der gesamte Speicher ist jetzt bei 9.8GB.
