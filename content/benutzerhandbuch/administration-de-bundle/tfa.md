---
weight: 61
title: Zwei-Faktor-Authentifizierung
---
Die Zwei-Faktor-Authentifizierung (TFA, two-factor authentication) ist eine zusätzliche Sicherheitsebene, mit der eine Authentifizierung nur durch eine Kombination von zwei verschiedenen Faktoren möglich ist: etwas, was die Benutzer wissen (Benutzername und Passwort), und etwas, was sie haben (z. B. Smartphone) oder sind (z. B. Fingerabdruck). Näheres zum Konfigurieren der TFA erfahren Sie im Abschnitt zum Thema [Authentifizierungseinstellungen](/benutzerhandbuch/administration-de/#authentication).

Es gibt zwei mögliche TFA-Strategien: SMS und TOTP. Es kann immer nur eine von beiden aktiv sein.

Ob TFA für einen bestimmten Benutzer aktiviert ist, können Sie überprüfen, indem Sie die Seite **Benutzer** aufrufen und in der Spalte "TFA-Status" rechts neben der Spalte "Passwortstärke" nachsehen. Ein Schlüsselsymbol bedeutet, dass TFA aktiviert ist, und indem Sie den Mauszeiger darüber bewegen, können Sie sehen, welche Strategie verwendet wird.

![TFA status](/images/benutzerhandbuch/Administration/admin-user-tfa-enabled.png)

### SMS

Wenn Sie einen Benutzer hinzufügen und TFA aktiviert ist, muss eine Mobiltelefonnummer angegeben werden. Ohne gültige Telefonnummer ist eine Anmeldung nicht möglich.

#### So aktivieren Sie einen bestimmten Benutzer

1. Navigieren Sie in der Anwendung "Administration" zu **Konten** > **Benutzer** und wählen Sie auf der Seite **Benutzer** einen Benutzer aus.
2. Aktivieren Sie die Checkbox **Zwei-Faktor-Authentifizierung aktivieren**.
3. Klicken Sie auf **Speichern**.

![Enable TFA](/images/benutzerhandbuch/Administration/admin-user-enable-tfa.png)

>**Info:** Dieser Prozess kann nur über die "Administration"-Anwendung ausgeführt werden und ist unter **Benutzereinstellungen** nicht verfügbar.


### TOTP (Google Authenticator)

Benutzer müssen auf ihrem Smartphone eine TOTP-Anwendung installieren (Google Authenticator wird empfohlen), die sowohl im App Store als auch im Play Store kostenlos erhältlich ist.

#### Einrichten

Anders als bei der SMS-Strategie muss TOTP von jedem einzelnen Benutzer eingerichtet werden. Das Einrichten kann durch Öffnen von **Benutzereinstellungen** in der oberen rechten Ecke und Klicken auf **Zweifaktor-Authentifizierung einrichten** gestartet werden.
![Trigger TOTP setup](/images/benutzerhandbuch/Administration/admin-user-tfa-setup-button.png)

Wenn TFA aktiviert ist, wird dem Benutzer ein QR-Code angezeigt, den er mit der zuvor installierten TOTP-App scannen muss.

Alternativ kann das Secret auch manuell eingegeben werden, falls das Scannen des QR-Codes nicht möglich ist.

![TOTP setup process](/images/benutzerhandbuch/Administration/admin-user-tfa-setup.png)

Nach diesem Vorgang generiert die TOTP-App alle 30 Sekunden einen neuen Code, der zum Abschließen des Authentifizierungsprozesses verwendet werden kann.

#### Zurücksetzen des Secrets

Wenn ein Benutzer den Zugriff auf den TFA-Code verliert, z. B. wenn er sein Smartphone verliert oder die Anwendung deinstalliert, und den Code wiederherstellen will, muss das Secret zurückgesetzt werden.

Wenngleich TOTP von jedem einzelnen Benutzer eingerichtet werden muss, kann das Zurücksetzen des Secrets nur durch einen Benutzer mit der Berechtigung "Benutzerverwaltung ADMIN" erfolgen.

Zum Zurücksetzen des Secrets führen Sie folgende Schritte durch:

1. Navigieren Sie in der Anwendung "Administration" zu **Konten** > **Benutzer** und wählen Sie auf der Seite **Benutzer** einen Benutzer aus.
2. Scrollen Sie herunter zu **Anmeldeoptionen**.
3. Klicken Sie auf **TOTP-Secret zurücksetzen**.
4. Bestätigen Sie dies durch Klicken auf **Zurücksetzen**.

![TOTP secret revoke](/images/benutzerhandbuch/Administration/admin-user-totp-revoke.png)

#### Deaktivieren von TOTP für einen Benutzer

Wenn ein Benutzer die Verwendung von TOTP (und damit der TFA) vollständig ausschalten möchte, muss das Secret zurückgesetzt und die Erzwingung von TOTP deaktiviert werden.

Wenngleich TOTP von jedem einzelnen Benutzer eingerichtet werden muss, kann das Zurücksetzen des Secrets und das Deaktivieren der TOTP-Erzwingung nur durch einen Benutzer mit der Berechtigung "Benutzerverwaltung ADMIN" erfolgen.

Um TOTP für einen Benutzer zu deaktivieren, führen Sie folgende Schritte aus:

1. Navigieren Sie in der Anwendung "Administration" zu **Konten** > **Benutzer** und wählen Sie auf der Seite **Benutzer** den Benutzer aus.
2. Scrollen Sie herunter zu **Anmeldeoptionen**.
3. Deaktivieren Sie das Kontrollkästchen **TOTP-Einstellung für den Benutzer erzwingen**.
4. Klicken Sie auf **TOTP-Secret zurücksetzen**.
5. Bestätigen Sie dies durch Klicken auf **Zurücksetzen**.
6. Klicken Sie auf **Speichern**, um Ihre Änderungen zu speichern.

![TOTP disable user](/images/benutzerhandbuch/Administration/admin-user-totp-disable.png)
