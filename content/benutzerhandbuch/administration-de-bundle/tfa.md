---
weight: 61
title: Zwei-Faktor-Authentifizierung
---
Die Zwei-Faktor-Authentifizierung (TFA, two-factor authentication) ist eine zusätzliche Sicherheitsebene, mit der eine Authentifizierung nur durch eine Kombination von zwei verschiedenen Faktoren möglich ist: etwas, was die Benutzer wissen (Benutzername und Passwort), und etwas, was sie haben (z. B. Smartphone) oder sind (z. B. Fingerabdruck). Näheres zum Konfigurieren der TFA erfahren Sie im Abschnitt zum Thema [Authentifizierungseinstellungen](/users-guide/administration/#authentication).

Es gibt zwei mögliche TFA-Strategien: SMS und TOTP. Es kann immer nur eine von beiden aktiv sein.

Ob TFA für einen bestimmten Benutzer aktiviert ist, können Sie überprüfen, indem Sie die Seite **Benutzer** aufrufen und in der Spalte "TFA-Status" rechts neben der Spalte "Passwortstärke" nachsehen. Ein Schlüsselsymbol bedeutet, dass TFA aktiviert ist, und indem Sie den Mauszeiger darüber bewegen, können Sie sehen, welche Strategie verwendet wird.

![TFA status](/images/benutzerhandbuch/Administration/admin-user-tfa-enabled.png)

### SMS

Wenn Sie einen Benutzer hinzufügen und TFA aktiviert ist, muss eine Mobiltelefonnummer angegeben werden. Ohne gültige Telefonnummer ist eine Anmeldung nicht möglich.


#### So aktivieren Sie einen bestimmten Benutzer

1. Klicken Sie auf den gewünschten Benutzer in der Seite **Benutzer**.
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

>**Info:** Wenngleich die Einrichtung von jedem einzelnen Benutzer vorgenommen werden muss, kann das Zurücksetzen des Secrets nur durch einen Benutzer mit der Berechtigung "Benutzerverwaltung ADMIN" in der "Administration"-Anwendung erfolgen. Wenn der Benutzer also sein Smartphone verliert oder die App deinstalliert, muss er einen Benutzer mit genau dieser Berechtigung kontaktieren.

Zum Zurücksetzen des Schlüssels führen Sie folgende Schritte durch:

1. Navigieren Sie zur "Administration"-Anwendung.
2. Klicken Sie auf den gewünschten Benutzer in der Seite **Benutzer**.
3. Scrollen Sie herunter zu **Anmeldeoptionen**.
4. Klicken Sie auf **TOTP-Secret zurücksetzen**.
5. Bestätigen Sie dies durch Klicken auf **Zurücksetzen**.

![TOTP secret revoke](/images/benutzerhandbuch/Administration/admin-user-totp-revoke.png)
