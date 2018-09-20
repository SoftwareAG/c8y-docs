---
order: 12
title: Verwalten von Benutzern
layout: redirect
---
Die Funktion der Benutzerverwaltung ermöglicht es Ihnen, innerhalb Ihres Mandanten Benutzer zu verwalten. Sie bietet folgende Möglichkeiten:

*   Erstellen von Benutzern
*   Vergeben von Benutzernamen und Passwörtern
*   Speichern von Benutzerdetails
*   Auswählen von Anmeldeoptionen
*   Aktivieren einer zusätzlicher Login-Sicherheitsebene durch Zwei-Faktor-Authentifizierung (TFA)

> **Info:** Für diese Funktionen muss der Benutzer eine Rolle mit den Benutzerverwaltungsrechten "ADMIN" oder "CREATE" haben.

### Anzeigen von Benutzern

Klicken Sie **Benutzer** im Menü **Konto**, um eine Liste aller Benutzer in Ihrem Mandanten anzuzeigen.

<img src="/guides/images/benutzerhandbuch/admin-user-list.png" alt="Benutzerliste" style="max-width: 100%">

Es wird eine Benutzerliste angezeigt, die für jeden Benutzer die folgenden Informationen bereitstellt:

*   Den Benutzernamen, der für den Zugang zum Mandanten verwendet wird
*   Name und E-Mail-Adresse des Benutzers, falls angegeben
*   Die globalen Rollen, die für den Benutzer vergeben wurden
*   Die [Stärke](/guides/benutzerhandbuch/overview#login) des Passworts, das für den Benutzer gesetzt ist

Zum Filtern der Liste können Sie das Suchfeld links in der oberen Menüleiste verwenden. Weitere Informationen zur Suchfunktionalität finden Sie unter [Suchen](/guides/benutzerhandbuch/overview#searching) im Abschnitt *Erste Schritte*.

Darüber hinaus können Sie nach globalen Rollen filtern. Wählen Sie die gewünschten Rollen aus der Auswahlliste, und klicken Sie **Anwenden**, um die angezeigten Benutzer auf solche mit den ausgewählten Rollen zu beschränken.

Standardmäßig zeigt die Seite **Benutzer** nur die Hauptbenutzer. Klicken Sie **Alle ausklappen** rechts in der oberen Leiste, um alle Benutzer in Ihrem Konto auf einmal anzuzeigen. Dadurch werden alle Hauptbenutzereinträge ausgeklappt, so dass auch die Unterbenutzer angezeigt werden. Klicken Sie **Alle einklappen**, um wieder nur die Hauptbenutzer anzuzeigen. Detaillierte Informationen zu Benutzerhierarchien finden Sie unter [Verwalten von Benutzerhierarchien](/guides/benutzerhandbuch/enterprise-edition#user-hierarchies).

### <a name="creating-users"></a>Hinzufügen von Benutzern

Um einen neuen Benutzer zu Ihrem Mandanten hinzuzufügen, klicken Sie **Benutzer hinzufügen** rechts oben in der Menüleiste.

<img src="/guides/images/benutzerhandbuch/admin-add-user.png" alt="Benutzer hinzufügen" style="max-width: 100%">

Geben Sie links im Fenster **Neuer Benutzer** folgende Informationen ein, um den Benutzer zu identifizieren:

|Feld|Beschreibung|
|:---|:---|
|Benutzername|Benutzername, um den Benutzer am System zu identifizieren. Beachten Sie, dass dieser Name nicht mehr geändert werden kann, wenn er einmal gespeichert wurde. Diese Eingabe ist obligatorisch.
|Login alias|Zusätzlich zum Benutzernamen kann optional ein Login-Alias vergeben werden, der für die Anmeldung verwendet werden kann. Anders als der Benutzername kann der Alias bei Bedarf geändert werden.
|Aktiv|Hier können Sie das Benutzerkonto aktivieren/ deaktivieren. Wenn das Benutzerkonto deaktiviert ist, kann der Benutzer sich nicht anmelden.
|E-Mail|Eine gültige E-Mail-Adresse. Diese ist erforderlich, um dem Benutzer zu ermöglichen, sein Passwort zurückzusetzen. Diese Eingabe ist obligatorisch.
|Vorname|Vorname des Benutzers. Wenn der Benutzer angemeldet ist, erscheint dieser Name rechts in der oberen Leiste auf der Schaltfläche **Benutzer**.
|Nachname|Nachname des Benutzers
|Telefon|Eine gültige Telefonnummer. Die Telefonnummer ist erforderlich, wenn für den Benutzer die Verwendung von Zwei-Faktor-Authentifizierung konfiguriert ist.
|Eigentümer|Ein anderer Benutzer, der diesen Benutzer "besitzt" (verwaltet). Wählen Sie einen Benutzer aus der Auswahlliste und klicken Sie **Fertig** zum Bestätigen. Detaillierte Informationen zu Benutzerhierarchien finden Sie unter [Verwalten von Benutzerhierarchien](/guides/benutzerhandbuch/enterprise-edition#user-hierarchies).

Wählen Sie die Anmeldeoptionen für den Benutzer aus.

*   Wenn Sie **Benutzer muss sein Passwort beim nächsten Anmelden zurücksetzen** auswählen, müssen Sie ein Passwort angeben, dass der Benutzer beim nächsten Anmelden zurücksetzen muss.  
    Geben Sie ein Passwort ein und bestätigen Sie es. Während der Passworteingabe wird die Stärke des Passworts angezeigt. Weitere Informationen zur Passwortstärke finden Sie unter [Anmelden an der Cumulocity-Plattform](/guides/benutzerhandbuch/overview/#login).  

*   Wenn Sie **Link für das Zurücksetzen des Passworts per E-Mail senden** auswählen, erhält der Benutzer eine E-Mail mit dem Link zum Setzen des Passworts. Die E-Mail wird zu der oben konfigurierten Adresse gesendet.

Wählen Sie auf der rechten Seite die globalen Rollen für den Benutzer. Informationen zu den globalen Rollen finden Sie unter [Verwalten von Berechtigungen](#managing-permissions).

Klicken Sie **Speichern**, um den Benutzer anzulegen.

> **Info:** Standardmäßig ist bei Benutzern, die manuell angelegt wurden, die Berechtigung "Eigene Benutzerverwaltung" aktiviert.

### Bearbeiten von Benutzern

Klicken Sie auf das Menüsymbol rechts in einem Benutzereintrag, um ein Kontextmenü mit weiteren Funktionen zu öffnen.

<img src="/guides/images/benutzerhandbuch/admin-user-contextmenu.png" alt="Benutzer Kontextmenü" style="max-width: 50%">

> **Info:** Für diese Funktionen müssen Sie eine Rolle mit Benutzerverwaltungsberechtigung haben.

Klicken Sie **Bearbeiten**, um einen bestehenden Benutzer zu bearbeiten. Alle Felder mit Ausnahme von **Benutzername** und **Link zum Zurücksetzen des Passworts per E-Mail senden** können bearbeitet werden. Details zu den einzelnen Feldern finden Sie unter [Anlegen von Benutzern](#creating-users). Klicken Sie **Passwort ändern**, um das Passwort zu ändern. Klicken Sie nach der Bearbeitung **Speichern**, um Ihre Einstellungen zu speichern.

Klicken Sie **Stammdatenrollen eines anderen Benutzer kopieren**, um Rollen zu kopieren. Wählen Sie im folgenden Fenster einen Benutzer aus und klicken Sie **Kopieren**. Oben können Sie auswählen, ob Sie die Rollen mit den vorhandenen Rollen zusammenführen möchten (Standardeinstellung), oder ob Sie die vorhandenen Rollen ersetzen möchten.

Klicken Sie **Delegieren**, um Ihre Benutzerhierarchien und Berechtigungen an einen Benutzer zu delegieren, bzw. klicken Sie **Delegierung aufheben**, um eine Delegierung aufzuheben. Detaillierte Informationen zum Delegieren finden Sie unter [Verwalten von Benutzerhierarchien](/guides/benutzerhandbuch/enterprise-edition#user-hierarchies).

Klicken Sie **Deaktivieren**, um einen aktiven Benutzer zu deaktivieren, bzw. klicken Sie **Aktivieren**, um einen zuvor deaktivierten Benutzer wieder zu aktivieren.

Klicken Sie **Löschen**, um einen Benutzer zu löschen.

