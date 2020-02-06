---
weight: 50
title: Benutzeroptionen und -einstellungen
layout: redirect
aliases:
  - /benutzerhandbuch/overview#user-settings
---
Durch Klicken auf die Schaltfläche **Benutzer** rechts oben wird ein Menü geöffnet, das Zugriff auf verschiedene Aktionen oder Informationen ermöglicht.

<img src="/images/benutzerhandbuch/Overview/user-account-menu.png" alt="User account menu"  style="max-width: 60%">

Das Menü **Benutzer** enthält folgende Elemente:

<table>
<col width = 150>
<thead>
<tr>
<th style="text-align:left">Menüelement</th>
<th style="text-align:left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Ändern von Benutzereinstellungen</td>
<td style="text-align:left">Ermöglicht Zugriff auf die Benutzereinstellungen, siehe unten. </td>
</tr>
<tr>
<td style="text-align:left">Verweigerte Anfragen</td>
<td style="text-align:left">Zeigt eine Liste der Anfragen bezüglich Daten, auf die ggf. wegen fehlender Berechtigungen nicht zugegriffen werden konnte. </td>
</tr>
<tr>
<td style="text-align:left">Abmelden</td>
<td style="text-align:left">Meldet Sie aus Ihrem Cumulocity-Konto ab. </td>
</tr>
<tr>
<td style="text-align:left">Support aktivieren (deaktivieren)</td>
<td style="text-align:left">Erlaubt Kundenservice-Benutzern den Zugriff auf Ihr Konto. Diese Option ist nur verfügbar, wenn der Supportbenutzerzugriff im Management-Mandanten nicht global für Untermandanten-Benutzer festgelegt ist, weitere Informationen siehe <a href="/benutzerhandbuch/enterprise-edition-de#users-in-other-tenants" class="no-ajaxy">Support für Benutzer in anderen Mandanten</a>. Nachdem der Supportbenutzerzugriff aktiviert wurde, wird das Menüelement durch <strong>Support deaktivieren</strong> ersetzt. Wenn sich Ihre Supportanfrage erledigt hat, doch die Dauer für den Supportbenutzerzugriff noch nicht abgelaufen ist (standardmäßig 24 Stunden), können Sie eine Supportbenutzeranfrage hier aktiv deaktivieren.</td>
</tr>
<tr>
<td style="text-align:left">Supportanfrage stellen</td>
<td style="text-align:left">Öffnet die URL, die als Supportseite bereitgestellt wurde. Wenn keine benutzerdefinierte URL bereitgestellt wurde, wird die Cumulocity-Supportseite geöffnet.</td>
</tr>
<tr>
<td style="text-align:left">Versionen</td>
<td style="text-align:left">Zeigt Informationen zu der von Ihnen verwendeten Cumulocity-Version an, zum Beispiel 9.16.2, für Backend und Benutzeroberfläche. </td>
</tr>
</tbody>
</table>

### <a name="user-settings"></a>So ändern Sie Benutzereinstellungen

Einige Kontoeinstellungen können vom Benutzer geändert werden. 

1. Klicken Sie auf die Schaltfläche **Benutzer** rechts in der oberen Leiste und anschließend auf **Benutzereinstellungen**.  
2. Nehmen Sie im Dialog **Benutzer bearbeiten** die gewünschten Änderungen vor. 
3. Zum Ändern der Sprache wählen Sie eine Sprache aus der Auswahlliste des Feldes **Sprache**. 
4. Klicken Sie **Passwort ändern**, um Ihr aktuelles Passwort zu ändern, siehe unten. 
5. Klicken Sie **Speichern**, um Ihre Eingaben zu speichern.

<img src="/images/benutzerhandbuch/overview-user-settings.png" alt="User settings"  style="max-width: 100%">

Die Sprache der Benutzeroberfläche wird nach folgenden Kriterien, in der aufgeführten Reihenfolge, ermittelt:
 
*  Die in den Cumulocity-Benutzereinstellungen ausgewählte Sprache.
*  Die in den Browser-Einstellungen ausgewählte Sprache.
* 	Die Sprache des Betriebssystems.
 
Die Standardsprache ist Englisch.


### <a name="change-password"></a>So ändern Sie Ihr Passwort

1. Klicken Sie auf die Schaltfläche **Benutzer** rechts in der oberen Leiste und anschließend auf **Benutzereinstellungen**. 
2. Klicken Sie im Dialog **Benutzer bearbeiten** auf **Passwort ändern**.
3. Geben Sie ein Passwort ein und bestätigen Sie es.
4. Klicken Sie **Speichern**, um Ihre Eingaben zu speichern.

Stellen Sie sicher, dass Sie ein starkes Passwort gewählt haben. Um Sie dabei zu unterstützen, wird während der Passwortänderung ein Passwortstärke-Indikator angezeigt. 

<img src="/images/benutzerhandbuch/overview-passwordstrength.png" alt="Reset password" style="max-width: 100%">

Standardmäßig muss das Passwort 8 Zeichen enthalten. Ein starkes Passwort muss mindestens 3 der folgenden Zeichentypen enthalten: Großbuchstaben, Kleinbuchstaben, Zahlen und Symbole. 

> **Info:** Die Passwortregeln können vom Administrator konfiguriert werden, d.h. der Administrator kann die Einhaltung bestimmter Richtlinien für das Passwort Ihres Kontos erzwingen. So kann es etwa erforderlich sein, dass Sie ein starkes Passwort wählen oder Ihr Passwort regelmäßig ändern müssen.
