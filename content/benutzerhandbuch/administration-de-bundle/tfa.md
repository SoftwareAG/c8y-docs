---
weight: 61
title: Zwei-Faktor-Authentifizierung
---

Die Zwei-Faktor-Authentifizierung (TFA, two-factor authentication) ist eine weitere Sicherheitsebene, die neben einem Benutzernamen und einem Passwort auch eine SMS-Bestätigung erfordert. TFA kann nur von Administratoren eingerichtet werden. Wenn TFA aktiviert ist, kann es nicht in den **Benutzereinstellungen** konfiguriert werden, sondern nur über die Administrationsoberfläche.

>**Info**: Wenn ein Benutzer hinzugefügt ist während TFA aktiviert ist, müssen Sie eine Telefonnummer des Benutzers angeben. Wenn Benutzer ohne Telefonnummer versuchen sich über TFA anzumelden, werden die Benutzer in ein Fenster umgeleitet, in dem sie ihre Mobiltelefonnummer eingeben können. Ohne eine Mobiltelefonnummer ist eine Anmeldung nicht möglich.

Ob TFA für einen bestimmten Benutzer aktiviert ist, können Sie überprüfen, indem Sie die Seite **Benutzer** aufrufen und in der Spalte "TFA-Status" rechts neben der Spalte "Passwortstärke" nachsehen. Ein Schlüsselsymbol weist darauf hin, dass TFA aktiviert ist.

![TFA status](/images/benutzerhandbuch/Administration/admin-user-tfa-enabled.png)

### Um für einen Benutzer Zwei-Faktor-Authentifizierung zu aktivieren

1. Klicken Sie auf den gewünschten Benutzer in der Seite **Benutzer**.
2. Aktivieren Sie die Checkbox **Zwei-Faktor-Authentifizierung aktivieren**.
3. Klicken Sie **Speichern**.

![Enable TFA](/images/benutzerhandbuch/Administration/admin-user-enable-tfa.png)

In der Seite **Benutzer**, wird der Benutzer als TFA-fähig angezeigt.