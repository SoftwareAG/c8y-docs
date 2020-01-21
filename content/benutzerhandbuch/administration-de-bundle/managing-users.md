---
weight: 12
title: Verwalten von Benutzern

---
Die Benutzerverwaltungsfunktion ermöglicht es Ihnen, innerhalb Ihres Mandanten Benutzer zu verwalten. Sie bietet folgende Möglichkeiten:

- Erstellen von Benutzern
- Vergeben von Benutzernamen und Passwörtern
- Speichern von Benutzerdetails
- Auswählen von Anmeldeoptionen
- Aktivieren einer zusätzlicher Login-Sicherheitsebene durch Zwei-Faktor-Authentifizierung (TFA)

> **Info:** Für diese Funktionen muss der Benutzer eine Rolle mit den Benutzerverwaltungsberechtigungen ADMIN oder CREATE haben.

> **Info**: Wenn für Ihren Mandant in SAG Cloud die Verwendung von SSO (Single Sign-On) konfiguriert ist, sollten neue Benutzer unter **My Cloud** angelegt werden, um die SSO-Funktion nutzen zu können. **My Cloud** kann über den Application Switcher in der oberen rechten Ecke aufgerufen werden. Für Benutzer, die in **My Cloud** angelegt werden, ist das Zurücksetzen des Passworts in Cumulocity deaktiviert.


### Anzeigen von Benutzern

Klicken Sie **Benutzer** im Menü **Konto**, um eine Liste aller Benutzer in Ihrem Mandanten anzuzeigen.

![Expanded view](/images/benutzerhandbuch/Administration/admin-users-list.png)

Es wird eine Benutzerliste angezeigt, die für jeden Benutzer die folgenden Informationen bereitstellt:

* Den Benutzernamen, der für den Zugang zum Mandanten verwendet wird.
* Name und E-Mail-Adresse des Benutzers, falls angegeben.
* Die globalen Rollen, die für den Benutzer vergeben wurden.
* Die [Stärke](/benutzerhandbuch/overview#login) des Passworts, das für den Benutzer gesetzt ist.

Zum Filtern der Liste können Sie das Suchfeld links in der oberen Menüleiste verwenden. Weitere Informationen zur Suchfunktionalität finden Sie unter [Suchen](/benutzerhandbuch/overview##searching) im Abschnitt *Erste Schritte*.

Darüber hinaus können Sie nach globalen Rollen filtern. Wählen Sie die gewünschten Rollen aus der Auswahlliste, und klicken Sie **Anwenden**, um die angezeigten Benutzer auf solche mit den ausgewählten Rollen zu beschränken.

Standardmäßig zeigt die Seite **Benutzer** nur die Hauptbenutzer. Klicken Sie **Alle ausklappen** rechts in der oberen Leiste, um alle Benutzer in Ihrem Konto auf einmal anzuzeigen. Dadurch werden alle Hauptbenutzereinträge ausgeklappt, so dass auch die Unterbenutzer angezeigt werden. Klicken Sie **Alle einklappen**, um wieder nur die Hauptbenutzer anzuzeigen. Detaillierte Informationen zu Benutzerhierarchien finden Sie unter [Verwalten von Benutzerhierarchien](/benutzerhandbuch/enterprise-edition#user-hierarchies).

### <a name="creating-users"></a>So fügen Sie einen Benutzer hinzu

1. Klicken Sie **Benutzer hinzufügen** rechts in der oberen Menüleiste.  
2. Geben Sie links im Fenster **Neuer Benutzer** folgende Informationen ein, um den Benutzer zu identifizieren:

	<table>
	<colgroup>
    <col style="width: 15%;">
    <col style="width: 85%;">
	</colgroup>
	<thead>
	<tr>
	<th align="left">Feld</th>
	<th align="left">Beschreibung</th>
	</tr>
	</thead>
	
	<tbody>
	<tr>
	<td align="left">Benutzername</td>
	<td align="left">Benutzername, um den Benutzer am System zu identifizieren. Beachten Sie, dass dieser Name nicht mehr geändert werden kann, wenn er einmal gespeichert wurde. Diese Eingabe ist obligatorisch.</td>
	</tr>
	
	<tr>
	<td align="left">Login alias</td>
	<td align="left">Zusätzlich zum Benutzernamen kann optional ein Login-Alias vergeben werden, der für die Anmeldung verwendet werden kann. Anders als der Benutzername kann der Alias bei Bedarf geändert werden.</td>
	</tr>
	
	<tr>
	<td align="left">Aktiv</td>
	<td align="left">Hier können Sie das Benutzerkonto aktivieren/ deaktivieren. Wenn das Benutzerkonto deaktiviert ist, kann der Benutzer sich nicht anmelden.</td>
	</tr>
	
	<tr>
	<td align="left">E-Mail</td>
	<td align="left">Eine gültige E-Mail-Adresse. Diese ist erforderlich, um dem Benutzer zu ermöglichen, sein Passwort zurückzusetzen. Diese Eingabe ist obligatorisch.</td>
	</tr>
	
	<tr>
	<td align="left">Vorname</td>
	<td align="left">Vorname des Benutzers. Wenn der Benutzer angemeldet ist, erscheint dieser Name rechts in der oberen Leiste auf der Schaltfläche <strong>Benutzer</strong>.</td>
	</tr>
	
	<tr>
	<td align="left">Nachname</td>
	<td align="left">Nachname des Benutzers.</td>
	</tr>
	
	<tr>
	<td align="left">Telefon</td>
	<td align="left">Eine gültige Telefonnummer. Die Telefonnummer ist erforderlich, wenn für den Benutzer die Verwendung von Zwei-Faktor-Authentifizierung konfiguriert ist.</td>
	</tr>
	
	<tr>
	<td align="left">Eigentümer</td>
	<td align="left">Ein anderer Benutzer, der diesen Benutzer “besitzt” (verwaltet). Wählen Sie einen Benutzer aus der Auswahlliste und klicken Sie <strong>Fertig</strong> zum Bestätigen. Detaillierte Informationen zu Benutzerhierarchien finden Sie unter <a href="/benutzerhandbuch/enterprise-edition#user-hierarchies">Verwalten von Benutzerhierarchien</a>.</td>
	</tr>
	
	<tr>
	<td align="left">Delegiert von</td>
	<td align="left">Kann aktiviert werden, um Benutzerhierarchien und Berechtigungen an einen Benutzer zu delegieren. Weitere Informationen zum Delegieren finden Sie unter <a href="/benutzerhandbuch/enterprise-edition#user-hierarchies">Verwalten von Benutzerhierarchien</a>.</td>
	</tr>
	</tbody>
	</table>

3. Wählen Sie die Anmeldeoptionen für den Benutzer aus.

	* Wenn Sie **Benutzer muss sein Passwort beim nächsten Anmelden zurücksetzen** auswählen, müssen Sie ein Passwort angeben, dass der Benutzer beim nächsten Anmelden zurücksetzen muss. <br>Geben Sie ein Passwort ein und bestätigen Sie es. Während der Passworteingabe wird die Stärke des Passworts angezeigt. Weitere Informationen zur Passwortstärke finden Sie unter [Anmelden an der Cumulocity-Plattform](/benutzerhandbuch/overview/#login).  
	* Wenn Sie **Link für das Zurücksetzen des Passworts per E-Mail senden** auswählen, erhält der Benutzer eine E-Mail mit dem Link zum Setzen des Passworts. Die E-Mail wird zu der oben konfigurierten Adresse gesendet.

4. Wählen Sie auf der rechten Seite die globalen Rollen für den Benutzer. Informationen zu den globalen Rollen finden Sie unter [Verwalten von Berechtigungen](/benutzerhandbuch/administration#managing-permissions).
5. Klicken Sie **Speichern**, um Ihre Einstellungen zu speichern.

Der neue Benutzer wird der Benutzerliste hinzugefügt.

<!--what does that mean -->
> **Info:** Standardmäßig ist bei Benutzern, die manuell angelegt wurden, die Berechtigung "Eigene Benutzerverwaltung" aktiviert.

### So bearbeiten Sie einen Benutzer

1. Klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Bearbeiten**. Alle Felder mit Ausnahme von **Benutzername** und **Link zum Zurücksetzen des Passworts per E-Mail senden** können bearbeitet werden. Weitere Informationen zu den Feldern finden Sie unter [So fügen Sie einen Benutzer hinzu](#creating-users). 
2. Klicken Sie **Passwort ändern**, um das Passwort zu ändern. 
3. Klicken Sie **Speichern**, um Ihre Eingaben zu speichern.

> **Info:** Für diese Option müssen Sie eine Rolle mit Benutzerverwaltungsberechtigung haben.

### So kopieren Sie Stammdatenrollen

1. Klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Stammdatenrollen eines anderen Benutzers kopieren**. 
2. Im darauf folgenden Dialog können Sie auswählen, ob Sie die zu kopierenden Rollen mit den vorhandenen Rollen zusammenführen möchten (Standardeinstellung) oder ob Sie die vorhandenen Rollen ersetzen möchten.
3. Wählen Sie den Benutzer, von dem Sie Rollen kopieren möchten, aus der Auswahlliste.
4. Klicken Sie **Kopieren**. 

Die Stammdatenrollen werden vom ausgewählten Benutzer kopiert.

> **Info:** Für diese Option müssen Sie eine Rolle mit Benutzerverwaltungsberechtigung haben.

### So delegieren Sie Benutzerhierarchien oder heben die Delegierung auf

Klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Delegieren**, um Ihre Benutzerhierarchien und Berechtigungen an einen Benutzer zu delegieren.

Klicken Sie **Delegierung aufheben**, um eine Delegierung zu entfernen. 

Detaillierte Informationen zum Delegieren finden Sie unter [Verwalten von Benutzerhierarchien](/benutzerhandbuch/enterprise-edition#user-hierarchies).

> **Info:** Für diese Option müssen Sie eine Rolle mit Benutzerverwaltungsberechtigung haben.

### So deaktivieren/aktivieren Sie einen Benutzer

Klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Deaktivieren**, um einen aktiven Benutzer zu deaktivieren, bzw. auf **Aktivieren**, um einen deaktivierten Benutzer wieder zu aktivieren.

> **Info:** Für diese Option müssen Sie eine Rolle mit Benutzerverwaltungsberechtigung haben.

### So löschen Sie einen Benutzer

Klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Löschen**.

> **Info:** Für diese Option müssen Sie eine Rolle mit Benutzerverwaltungsberechtigung haben.