---
title: Verwalten von Benutzern
weight: 12
---

Die Benutzerverwaltungsfunktion ermöglicht es Ihnen, innerhalb Ihres Mandanten Benutzer zu verwalten. Sie bietet folgende Möglichkeiten:

- Erstellen von Benutzern
- Vergeben von Benutzernamen und Passwörtern
- Speichern von Benutzerdetails
- Auswählen von Anmeldeoptionen
- Aktivieren einer zusätzlicher Login-Sicherheitsebene durch Zwei-Faktor-Authentifizierung (TFA)

> **Info:** Für diese Funktionen muss der Benutzer eine Rolle mit den Benutzerverwaltungsberechtigungen ADMIN oder ERSTELLEN haben.

Wenn für Ihren Mandanten in {{< sag-cloud >}} die Verwendung von Single-Sign-On (SSO) konfiguriert ist, sollten neue Benutzer unter **My Cloud** angelegt werden, um die SSO-Funktion nutzen zu können. My Cloud kann über den Application Switcher in der oberen rechten Ecke aufgerufen werden.

Für Benutzer, die über einen externen Autorisierungsserver angelegt werden, haben die folgenden Einstellungen in {{< product-c8y-iot >}} keine Auswirkung (sie werden bei der nächsten erneuten Benutzeranmeldung zurückgesetzt):

* Benutzerinfo (Anmelde-Alias, E-Mail, Vorname, Nachname, Telefon)
* globale Rollen → konfigurierbar über SSO-Rechtezuordnung
* Anwendungszugriff → konfigurierbar über SSO-Rechtezuordnung

Außerdem ist das Zurücksetzen des Passworts in {{< product-c8y-iot >}} für Benutzer deaktiviert, die über einen externen Autorisierungsserver angelegt wurden.

> **Info:** Benutzer, die Single-Sign-On verwenden, können das Passwort von Benutzern, die von der Plattform verwaltet werden, nicht ändern.


### Anzeigen von Benutzern

Klicken Sie auf **Benutzer** im Menü **Konto**, um eine Liste aller Benutzer in Ihrem Mandanten anzuzeigen.

![Expanded view](/images/benutzerhandbuch/Administration/admin-users-list.png)

Es wird eine Benutzerliste angezeigt, die für jeden Benutzer die folgenden Informationen bereitstellt:

* Den Benutzernamen, der für den Zugang zum Mandanten verwendet wird
* Name und E-Mail-Adresse des Benutzers, falls angegeben
* Die globalen Rollen, die für den Benutzer vergeben wurden
* Die [Stärke](/benutzerhandbuch/getting-started-de/#change-password) des Passworts, das für den Benutzer gesetzt ist

Zum Filtern der Liste nach Benutzername können Sie das Filterfeld links in der oberen Menüleiste verwenden. Mit der Auswahlliste können Sie nach globalen Rollen filtern. Weitere Informationen zur Filterung finden Sie unter [Erste Schritte > Eigenschaften und Funktionen der Benutzeroberfläche > Filtern](/benutzerhandbuch/getting-started-de/#filtering).

Zum Anwenden der gewählten Filter klicken Sie auf **Anwenden**.

Standardmäßig zeigt die Seite **Benutzer** nur die Hauptbenutzer. Klicken Sie auf **Alle ausklappen** rechts in der oberen Leiste, um alle Benutzer in Ihrem Konto auf einmal anzuzeigen. Dadurch werden alle Hauptbenutzereinträge ausgeklappt, so dass auch die Unterbenutzer angezeigt werden. Klicken Sie auf **Alle einklappen**, um wieder nur die Hauptbenutzer anzuzeigen. Detaillierte Informationen zu Benutzerhierarchien finden Sie unter [Verwalten von Benutzerhierarchien](/benutzerhandbuch/enterprise-tenant-de/#user-hierarchies).

<a name="creating-users"></a>
### So fügen Sie einen Benutzer hinzu

1. Klicken Sie auf **Benutzer hinzufügen** rechts in der oberen Menüleiste.  

  >**Info:** Wenn Single-Sign-On für Ihren Mandanten aktiviert ist, werden Sie durch eine Meldung daran erinnert, dass Sie im Begriffe sind, einen lokalen Benutzer anzulegen, der sich nicht per Single-Sign-On anmelden kann. Legen Sie stattdessen in **My Cloud** neue Benutzer an, die über die Single-Sign-On-Funktion aktiviert werden können. My Cloud kann über den Application Switcher in der oberen rechten Ecke aufgerufen werden.

2. Geben Sie links im Fenster **Neuer Benutzer** folgende Informationen ein, um den Benutzer zu identifizieren:

	<table>
	<thead>
	<colgroup>
	<col style="width: 20%;">
	<col style="width: 80%;">
	</colgroup>
	<tr>
	<th align="left">Feld</th>
	<th align="left">Beschreibung</th>
	</tr>
	</thead>
	<tbody>
	<tr>
	<td align="left">Benutzername</td>
	<td align="left">Dient als eindeutige Benutzeridentifizierung am System. Beachten Sie, dass dieser Name nicht mehr geändert werden kann, wenn er einmal gespeichert wurde. Diese Eingabe ist obligatorisch.</td>
	</tr>
	<tr>
	<td align="left">Login alias</td>
	<td align="left">Zusätzlich zum Benutzernamen kann optional ein Login-Alias vergeben werden, der für die Anmeldung verwendet werden kann. Anders als der Benutzername kann der Alias bei Bedarf geändert werden. Für Geräte wird kein Benutzeralias unterstützt.</td>
	</tr>
	<tr>
	<td align="left">Status</td>
	<td align="left">Hier können Sie das Benutzerkonto aktivieren/ deaktivieren. Wenn das Benutzerkonto deaktiviert ist, kann der Benutzer sich nicht anmelden.</td>
	</tr>
	<tr>
	<td align="left">E-Mail</td>
	<td align="left">Eine gültige E-Mail-Adresse. Diese Eingabe ist obligatorisch.</td>
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
	<td align="left">Ein anderer Benutzer, der diesen Benutzer "besitzt" (verwaltet). Wählen Sie einen Benutzer aus der Auswahlliste und klicken Sie auf <strong>Fertig</strong> zum Bestätigen. Detaillierte Informationen zu Benutzerhierarchien finden Sie unter <a href="../../benutzerhandbuch/enterprise-tenant-de#user-hierarchies">Verwalten von Benutzerhierarchien</a>.</td>
	</tr>
	<tr>
	<td align="left">Delegiert von</td>
	<td align="left">Kann aktiviert werden, um Benutzerhierarchien und Berechtigungen an einen Benutzer zu delegieren. Weitere Informationen zum Delegieren finden Sie unter <a href="../../benutzerhandbuch/enterprise-tenant-de#user-hierarchies">Verwalten von Benutzerhierarchien</a>.</td>
	</tr>
	</tbody>
	</table>

3. Wählen Sie die Anmeldeoptionen für den Benutzer aus.
	* 	**Zwei-Faktor-Authentifizierung (SMS)**: Wenn ausgewählt, erhält der Benutzer per SMS einen Bestätigungscode, der zum Abschließen der Authentifizierung erforderlich ist. Die SMS wird an die oben konfigurierte Telefonnummer gesendet. Weitere Informationen finden Sie unter [Zwei-Faktor-Authentifizierung](/benutzerhandbuch/administration-de/#tfa).
	* **Benutzer muss sein Passwort beim nächsten Anmelden zurücksetzen**: Wenn ausgewählt, müssen Sie ein Passwort angeben, das der Benutzer beim nächsten Anmelden zurücksetzen muss. Geben Sie ein Passwort ein und bestätigen Sie es. Während der Passworteingabe wird die Stärke des Passworts geprüft. Weitere Informationen zum Zurücksetzen des Passworts und zur Passwortstärke finden Sie unter [So ändern Sie Ihr Passwort](/benutzerhandbuch/getting-started-de/#change-password).  
	* **Link für das Zurücksetzen des Passworts per E-Mail senden**: Wenn ausgewählt, erhält der Benutzer eine E-Mail mit einem Link zum Setzen des Passworts. Die E-Mail wird zu der oben konfigurierten Adresse gesendet.

4. Wählen Sie auf der rechten Seite die globalen Rollen für den Benutzer. Informationen zu den globalen Rollen finden Sie unter [Verwalten von Berechtigungen](/benutzerhandbuch/administration-de#managing-permissions).
5. Klicken Sie auf **Speichern**, um Ihre Einstellungen zu speichern.

Der neue Benutzer wird der Benutzerliste hinzugefügt.

> **Info:** Standardmäßig ist bei Benutzern, die manuell angelegt wurden, die Berechtigung "Own user management" aktiviert.

### So bearbeiten Sie einen Benutzer

1. Klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Bearbeiten**. Alle Felder mit Ausnahme von **Benutzername** und **Link zum Zurücksetzen des Passworts per E-Mail senden** können bearbeitet werden. Weitere Informationen zu den Feldern finden Sie unter [So fügen Sie einen Benutzer hinzu](#creating-users).
2. Klicken Sie auf **Passwort ändern**, um das Passwort zu ändern.
3. Klicken Sie auf **Speichern**, um Ihre Eingaben zu speichern.

> **Info:** Für diese Option müssen Sie eine Rolle mit Benutzerverwaltungsberechtigung haben.

### So kopieren Sie Stammdatenrollen

1. Klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Stammdatenrollen eines anderen Benutzers kopieren**.
2. Im darauf folgenden Dialog können Sie auswählen, ob Sie die zu kopierenden Rollen mit den vorhandenen Rollen zusammenführen möchten (Standardeinstellung) oder ob Sie die vorhandenen Rollen ersetzen möchten.
3. Wählen Sie den Benutzer, von dem Sie Rollen kopieren möchten, aus der Auswahlliste.
4. Klicken Sie auf **Kopieren**.

Die Stammdatenrollen werden vom ausgewählten Benutzer kopiert.

> **Info:** Für diese Option müssen Sie eine Rolle mit Benutzerverwaltungsberechtigung haben.

### So delegieren Sie Benutzerhierarchien oder heben die Delegierung auf

Klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Delegieren**, um Ihre Benutzerhierarchien und Berechtigungen an einen Benutzer zu delegieren.

Klicken Sie auf **Delegierung aufheben**, um eine Delegierung zu entfernen.

Detaillierte Informationen zum Delegieren finden Sie unter [Verwalten von Benutzerhierarchien](/benutzerhandbuch/enterprise-tenant-de#user-hierarchies).

> **Info:** Für diese Option müssen Sie eine Rolle mit Benutzerverwaltungsberechtigung haben.

### So deaktivieren/aktivieren Sie einen Benutzer

Klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Deaktivieren**, um einen aktiven Benutzer zu deaktivieren, bzw. auf **Aktivieren**, um einen deaktivierten Benutzer wieder zu aktivieren.

> **Info:** Für diese Option müssen Sie eine Rolle mit Benutzerverwaltungsberechtigung haben.

### So löschen Sie einen Benutzer

Klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Löschen**.

> **Info:** Für diese Option müssen Sie eine Rolle mit Benutzerverwaltungsberechtigung haben.