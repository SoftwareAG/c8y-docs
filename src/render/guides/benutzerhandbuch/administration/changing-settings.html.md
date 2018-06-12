---
order: 70
title: Ändern von Einstellungen
layout: redirect
---

Im Menü "Einstellungen" können Administratoren verschiedene Einstellungen des Kontos ändern oder verwalten, wie

*   [Anwendungseinstellungen](#default-app) ändern,
*   [Passwortrichtlinien und TFA-Einstellungen](#changing-password-settings) ändern,
*   die [Attributsbibliothek](#properties) verwalten,
*   Einstellungen für die Enterprise Edition konfigurieren, siehe [Enterprise Edition](/guides/users-guide/enterprise-edition#customization).

### <a name="default-app"></a>Ändern von Anwendungseinstellungen

Klicken Sie "Anwendung", um Anwendungseinstellungen zu bearbeiten.

Unter "Standardanwendung" können Sie eine Standardanwendung für alle Benutzer Ihres Mandanten festlegen.

> **Info:** Alle Benutzer müssen Zugriff auf diese Anwendung haben.

Unter "Zugriffskontrolle" können Administratoren CORS (Cross-Origin Resource Sharing) über die Cumulocity API aktivieren.

Die Einstellung "Zulässige Domain" ermöglicht es, Ihren JavaScript-Webanwendungen, direkt mit REST APIs zu kommunizieren. Geben Sie ein Sternsymbol "*" ein, um die Kommunikation mit allen Hosts zu erlauben. Geben Sie "http://my.host.com, http://myother.host.com" ein, um Anwendungen aus http://my.host.com und http://myother.host.com die Kommunikation mit der Plattform zu erlauben.

Weitere Information erhalten Sie unter http://enable-cors.org.

### <a name="changing-password-settings"></a>Ändern der Passwortrichtlinien und TFA-Einstellungen

Um die Passwortrichtlinien zu ändern, klicken Sie "Passwort" im Menü "Einstellungen".

Unter "Passwortbeschränkung" können Sie die Gültigkeit von Benutzerpasswörtern beschränken, in dem Sie die Anzahl der Tage eingeben, nach der Benutzer ihre Passwörter ändern müssen. Wenn Sie keine Passwortänderung erzwingen möchten, verwenden Sie "0" für die uneingeschränkte Gültigkeit von Passwörtern (Standardwert).

Standardmäßig können Benutzer jedes Passwort verwenden, das 8 Zeichen oder mehr enthält. Wenn Sie **Nur starke (grüne) Passwörter zulassen** auswählen, müssen die Benutzer starke Passwörter verwenden, wie unter [Anmelden](/guides/benutzerhandbuch/overview#login) beschrieben.

> **Info:** Passwortbeschränkung und das Erzwingen starker Passörter sind möglicherweise nicht editierbar, falls vom Plattformadministrator so konfiguriert.

Starke (grüne) Passwörter müssen "M" Zeichen haben. Standardmäßig sind Passwörter, die in der Vergangenheit verwendet wurden, nicht zulässig. Das System merkt sich die letzten "N" von einem Benutzer bereitgestellten Passwörter und erlaubt nicht, diese zu verwenden. Der Standardwert für "N" ist 10.

> **Info:** "M" und "N" können vom Plattformadministrator konfiguriert werden.

Klicken Sie **Speichern**, um die Passwortrichtlinien zu speichern.

![Passwortrichtlinien](/guides/images/benutzerhandbuch/Admin_Password.png)

Unter "TFA-Einstellungen" Können Sie die folgenden TFA-Einstellungen bearbeiten:

*   "Token-Gültigkeit begrenzen für" - hier können Sie die Dauer jeder Sitzung in Minuten festlegen. Wenn die Sitzung abgelaufen ist, muss der Benutzer einen neuen Verifizierungscode eingeben.
*   "Token-Gültigkeit begrenzen für" - hier können Sie die Dauer jeder Sitzung in Minuten festlegen. Wenn die Sitzung abgelaufen ist, muss der Benutzer einen neuen Verifizierungscode eingeben.

Aktivieren Sie "Zwei-Faktor-Authentifizierung zulassen", um Zwei-Faktor-Authentifizierung einzustellen.

Klicken Sie **TFA-Einstellungen speichern**, um Ihre Einstellungen zu speichern.

### <a name="properties"></a>Verwalten der Attributsbibliothek

In der "Attributsbibiothek" im Menü "Einstellungen" können benutzerdefinierte Attribute zu den Stammdaten, Alarmen, Ereignissen und Mandanten hinzugefügt werden.

![Attributsbibiothek](/guides/images/benutzerhandbuch/Admin_PropertiesLibrary.png)

Mit benutzerdefinierten Attributen können Sie das Datenmodell der in Cumulocity integrierten Objekte erweitern. Sie können die folgenden eigenen Attribute erstellen:

*   Eigenen Stammdatenattribute werden verwendet, um das Stammdatenmodell zu erweitern. Sie können in den Widgets “Asset-Tabelle” und “Asset-Attribute” genutzt werden.
*   Eigene Mandantenattribute sind bei der Erstellung von Mandanten verfügbar. Die eigenen Attribute können unter "Untermandanten" in der Registerkarte "Benutzerdefinierte Attribute" bearbeitet werden. Außerdem können diese Attribute in den Nutzungsstatistiken eingesehen und exportiert werden.
*   Benutzerdefinierte Alarm- und Ereignisattribute können Ihren Berichten als eigene Felder hinzugefügt werden und sind in der Seite "Berichtkonfigurationen" in der Cockpit-Anwendung verfügbar.

**Hinzufügen von Attributen zur Attributsbibiothek**

Um ein benutzerdefiniertes Attribut hinzuzufügen, wählen Sie die Registerkarte für das gewünschte Attribut und klicken Sie **Attribut hinzufügen**.

![Neues Attribut hinzufügen](/guides/images/benutzerhandbuch/Admin_AddProperty.png)

Geben Sie im folgenden Editor einen eindeutigen Namen als Identifikator und eine Beschriftung für das Attribut ein, und wählen Sie einen Datentypen aus der Dropdown-Liste. Wählen Sie außerdem Validierungsregeln für das neue Attribut aus:

<table>

<thead>

<tr>

<th style="text-align: left">Checkbox</th>

<th style="text-align: left">Beschreibung</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align: left">Erforderlich</td>

<td style="text-align: left">Wenn ausgewählt, muss das Attribut z. B. während der Alarmerstellung bereitgestellt werden. Nicht verfügbar, wenn der Attributstyp "Boolean" ist.</td>

</tr>

<tr>

<td style="text-align: left">Standardwert</td>

<td style="text-align: left">Geben Sie einen Standardwert ein, der automatisch im benutzerdefinierten Attributsfeld gesetzt wird. Nur verfügbar für Attribute mit dem Wert "String".</td>

</tr>

<tr>

<td style="text-align: left">Minimum</td>

<td style="text-align: left">Geben Sie einen Integerwert als Minimum ein.</td>

</tr>

<tr>

<td style="text-align: left">Maximum</td>

<td style="text-align: left">Geben Sie einen Integerwert als Maximum ein.</td>

</tr>

<tr>

<td style="text-align: left">Minimale Länge</td>

<td style="text-align: left">Geben Sie die minimal erforderliche Länge für die Zeichenkette ein.</td>

</tr>

<tr>

<td style="text-align: left">Maximale Länge</td>

<td style="text-align: left">Geben Sie die maximal mögliche Länge für die Zeichenkette ein.</td>

</tr>

<tr>

<td style="text-align: left">Regulärer Ausdruck</td>

<td style="text-align: left">Geben Sie einen regulären Ausdruck ein, der erforderlich ist, um das benutzerdefinierte Attributfeld auszufüllen.</td>

</tr>

</tbody>

</table>

Klicken Sie **Speichern**, um das neue Attribut zu erstellen.

Klicken Sie auf den Namen eines Attributs in der Liste, um dieses zu öffnen. Um das Attribut zu bearbeiten, geben Sie die gewünschten Änderungen ein, und klicken Sie **Speichern**, um die neuen Einstellungen zu speichern. Klicken Sie **Entfernen**, um das Attribut zu löschen.

### <a name="openIT-credentials"></a>Eingeben von OpenIT-Zugangsdaten

Durch die Eingabe von OPenIT- Zugangsdaten erlauben Sie der Plattform, SMS-Dienste zu verwenden, die von [Openit](https://sms.openit.de/main.php) bereitgestellt werden.

SMS werden für verschiedene Funktionen in den Anwendungen verwendet wie [Zwei-Faktor-Authentifizierung](/guides/benutzerhandbuch/administration#tfa) und Benachrichtigungen etwa bei Alarmen.

### Konfiguration

Unter "Konfiguration" im Menü "Einstellungen" können Sie systemweite Attribute konfigurieren. Die folgenden Optionen können in den Konfigurationseinstellungen bearbeitet werden.

Im Feld "Zwei-Faktor-Authentifizierung" können Sie die SMS-Vorlage, die an die Benutzer geschickt wird, ändern.

Im Feld "Support-Link" können Sie eine URL eingeben, die als Support-Link verwendet wird. Wenn Sie hier keinen Link bereitstellen, wird der Standardlink zur Cumulocity-Support-Seite verwendet.

Geben Sie "false" ein, um den Link zu verbergen.

Im Bereich "Passwort zurücksetzen" können Sie alle Einstellungen im Zusammenhang mit E-Mail-Vorlagen zum Zurücksetzen des Passworts ändern.

![Konfiguration](/guides/images/users-guide/configuration_tab2.png)

Ganz oben können Sie festlegen, ob Sie zulassen möchten, E-Mails an unbekannte E-Mail-Adressen zu senden.

Stellen Sie im Feld "E-Mail-Vorlage für das Zurücksetzen von Passwörtern" eine Vorlage bereit, die verwendet werden soll, wenn die Adresse bekannt ist, und eine für unbekannte Adressen. Der Link zum Zurücksetzen des Passworts kann beispielsweise lauten: {host}/apps/devicemanagement/index.html?token={token}.

Geben Sie im Feld "E-Mail-Betreff" ein Betreff für alle E-Mails im Zusammenhang mit dem Zurücksetzen des Passworts ein.

Geben Sie in den folgenden beiden Feldern jeweils eine Vorlage für die E-Mails zur Bestätigung der Passwortänderung und für die Einladung zur Aktivierung ein.

> **Info**: Zu verwendende Platzhalter sind: {host}, {tenant-domain}, {token}.

Im Bereich "E-Mail-Server" können Sie "Protokoll", "Host", "Port", "Benutzername", "Passwort" und "Senderadresse" für den E-Mail-Server angeben.

![E-Mail-Server konfigurieren](/guides/images/users-guide/Administration/Admin_ConfigurationServer.png)

Im Bereich "Datenexport" können Sie den E-Mail-Betreff und die E-Mail-Vorlage für den Datenexport angeben sowie die “Fehlermeldung bei unauthorisierten Benutzern” definieren.

![Konfiguration](/guides/images/users-guide/configuration_tab4.png)

Im Bereich "Speicherbegrenzung" können Sie den E-Mail-Betreff und die E-Mail-Vorlage für E-Mails festlegen, die gesendet werden, _bevor_ Daten bei Überschreitung der Speicherbegrenzung gelöscht werden und _nachdem_Daten gelöscht wurden.

Im Bereich "Sperren von Mandanten" können Sie Einstellungen für E-Mails vornehmen, die gesendet werden, wenn ein Mandant gesperrt wurde.

![Sperren von Mandanten](/guides/images/users-guide/Administration/Admin_ConfigurationSuspended.png)

Oben können Sie auswählen, ob Sie die E-Mail zum Administrator des gesperrten Mandanten senden möchten und einen weiteren E-Mail-Empfänger angeben. Unten definieren Sie den Betreff und die Vorlage für die E-Mail "Gesperrter Benutzer".

Klicken Sie **Konfiguration speichern**, um Ihre Eingaben zu speichern.

> **Info**: Für "Management-Mandanten" sind weitere Funktionalitäten verfügbar.

