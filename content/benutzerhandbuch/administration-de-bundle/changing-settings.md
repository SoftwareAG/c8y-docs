---
weight: 70
title: Ändern von Einstellungen
layout: redirect
---

Im Menü **Einstellungen** können Administratoren verschiedene Einstellungen des Kontos ändern oder verwalten, wie

*   [Single Sign-On](#single-sign-on) konfigurieren,
*   [Anwendungseinstellungen](#default-app) ändern,
*   [Passwortrichtlinien und TFA-Einstellungen](#changing-password-settings) ändern,
*   die [Attributsbibliothek](#properties) verwalten,
*   Einstellungen für den Enterprise Tenant konfigurieren, siehe [Enterprise Tenant](/guides/users-guide/enterprise-edition#customization).

### <a name="single-sign-on"></a>Konfigurieren von Single-Sign-On

Cumulocity bietet Single-Sign-On-Funktionalität, die es dem Anwender ermöglicht, sich mit einem einzigen 3rd-Party-Autorisierungsserver über ein OAuth2-Protokoll, beispielsweise Azure Active Directory, anzumelden. Aktuell wird die Vergabe von Autorisierungscodes nur mit Access Tokens im JWT-Format unterstützt.

**Info**: Die Single-Sign-On-Funktionalität verwendet Cookies-Technologien und kann nur genutzt werden, wenn Cookies in den Einstellungen Ihres Browsers zugelassen sind.   

Die Single-Sign-On-Funktionalität wurde mit der Cumulocity-Version 9.12 aktiviert. Microservices müssen mit dem Microservice SDK der Version 9.12 oder höher erstellt sein, um korrektes Funktionieren zu gewährleisten.

Bevor Sie zur Single-Sign-On-Option wechseln, stellen Sie sicher, dass:

* der Autorisierungsserver, den Sie verwenden, die Vergabe von OAuth2-Autorisierungscodes unterstützt,
* das Access Token als JWT ausgegeben wird und Sie wissen, was der Token Content enthalten muss, 
* das JWT aus einer einzigartigen Benutzeridentifikation (Unique User Identifier) besteht,
* Cumulocity-Plattform Version 9.12 oder vorzugsweise höher verwendet wird, 
* alle Microservices mit dem Microservice Java SDK 9.12.6, oder vorzugsweise höher, erstellt wurden.

Informationen zu benutzerspezifischen Microservices finden Sie unter [General aspects > Security](guides/microservice-sdk/concept/#security) im Microservice SDK Guide.

Bei lokalen Installationen ist die Domain-basierte Mandantenabbildung bereits korrekt konfiguriert.

#### Konfigurationseinstellungen

Um die Single-Sign-On-Funktionalität zu aktivieren, muss der Administrator eine Verbindung zum Autorisierungsserver konfigurieren. Die erfolgt in der "Administration"-Anwendung. 

Klicken Sie **Single-Sign-On** im Menü **Einstellungen** im Navigator. 

Links oben können Sie eine Vorlage für das Layout der Seite auswählen. Die Standardvorlage "Benutzerdefiniert" ermöglicht eine sehr detaillierte Konfiguration mit nahezu jedem Autorisierungsserver, der die Vergabe von OAuth2-Autorisierungscodes unterstützt. Andere Vorlagen bieten vereinfachte Ansichten bekannter und unterstützter Autorisierungsserver. Im Folgenden wird erklärt, wie Sie die benutzerdefinierte Vorlage verwenden, sowie eine Vorlage für das Azure Active Directory vorgestellt. 

##### Benutzerdefinierte Vorlage

![Request configuration](/guides/images/benutzerhandbuch/admin-sso-1.png)

Da das OAuth-Protokoll auf der Ausführung von HTTP-Anfragen und -Redirects basiert, wird eine generische Anfragekonfiguration bereitgestellt. 

Der erste Teil der **Single-Sign-On**-Seite besteht aus der Anfragekonfiguration. Hier werden die Anfrage-Adresse, Anfrageparameter, Kopfzeile sowie Body von Token- und Refresh-Anfragen konfiguriert. Die Autorisierungsmethode wird als GET-Anfrage, alle anderen als POST-Anfrage ausgeführt.

Der Bereich **Grundeinstellungen** der **Single-Sign-On**-Seite besteht aus den folgenden Konfigurationseinstellungen:

![OAuth configuration](/guides/images/benutzerhandbuch/admin-sso-2.png)

|Feld|Beschreibung|
|:---|:---|
|Redirect-URI|Redirect-Parameter. Kann in Anfragedefinitionen als ${clientId}-Platzhalter verwendet werden.
|Client-ID|Client-ID der OAuth-Verbindung. Kann in Anfragedefinitionen als ${clientId}-Platzhalter verwendet werden.
|Schaltflächenname|Name auf der Schaltfläche auf der Anmeldeseite
|Issuer|OAuth-Token-Issuer
|Anbietername|Name des Anbieters
|Sichtbar auf der Anmeldeseite|Legt fest, ob die Anmeldeoption sichtbar sein soll 
|Audience|Erwarteter "aud"-Parameter des JWT
|Gruppe|Gruppe, der der Benutzer beim ersten Anmelden zugeordnet wird (ab Version 9.20 ersetzt durch dynamische Rechtezuordnung, siehe unten)
|Anwendungen|Anwendungen, die dem Benutzer beim ersten Anmelden zugewiesen werden (ab Version 9.20 ersetzt durch dynamische Rechtezuordnung, siehe unten)

Jedesmal, wenn ein Benutzer sich anmeldet, wird der Inhalt des Access Tokens verifiziert und dient als Basis für den Benutzerzugang zur Cumulocity-Plattform. Der folgende Abschnitt beschreibt die Zuordnung zwischen JWT-Claims und dem Zugang zur Plattform. 

 ![OAuth configuration](/guides/images/benutzerhandbuch/admin-sso-7.png)
 
 Wenn ein Benutzer versucht sich anzumelden, sieht der dekodierte JWT-Claim für das oben abgebildete Beispiel folgendermaßen aus:

 
	json
	{
	...
	"user": "john.wick",
	...
	}


Dem Benutzer werden die globalen Rollen BUSINESS und APPLICATION COCKPIT zugewiesen. Klicken Sie **Rechtezuordnung hinzufügen**, um weitere Berechtigungen zu vergeben. Klicken Sie das Minus-Symbol, um eine Regel zu entfernen. Eine Anweisung kann mehrere Überprüfungen enthalten, wie im Beispiel unten. Klicken Sie **und**, um eine Überprüfung zu einer vorhandenen Anweisung hinzuzufügen. 

 ![OAuth configuration](/guides/images/benutzerhandbuch/admin-sso-8.png)

In diesem Fall sieht der JWT-Claim folgendermaßen aus:

  ```json
 {
 ...
 "user": {
    "type": "human"
 },
 "role": [
    "ADMIN"
 ],
 ...
 }
 ```

Wie Sie sehen, besteht durch den "in"-Operator die Möglichkeit, zu verifizieren, ob ein Wert in einer Liste vorhanden ist. Werte können außerdem in andere Objekte eingebettet sein. Ein Punkt (".") im Schlüssel indiziert, dass es sich um ein eingebettetes Objekt handelt.  

Wenn der Benutzer sich mit einem Access Token anmeldet, kann der Benutzername aus einem JWT-Claim abgeleitet werden. Der Name des Claims kann unter **Benutzer-ID** konfiguriert werden. 

 ![OAuth configuration](/guides/images/benutzerhandbuch/admin-sso-3.png)

Jedes Access Token wird durch ein Signing-Zertifikat signiert. Aktuell gibt es drei Möglichkeiten, die Signing-Zertifikate zu konfigurieren. 
 
1. Durch Spezifizieren der URL für den öffentlichen Schlüssel des Azure AD-Zertifikats. <br>![OAuth configuration](/guides/images/benutzerhandbuch/admin-sso-4.png)
 
2. Durch Spezifizieren der ADFS-Manifest-Adresse (für ADFS 3.0). <br>![OAuth configuration](/guides/images/benutzerhandbuch/admin-sso-9.png)
  
3. Durch manuelles Bereitstellen des öffentlichen Schlüssels eines Zertifikats. Eine Zertifikatsdefinition benötigt eine Algorithmus-Information, einen Wert für den öffentlichen Schlüssel und ein Gültigkeitsintervall. <br>![OAuth configuration](/guides/images/benutzerhandbuch/admin-sso-5.png)

#### Integration mit Azure AD

##### Azure AD-Konfiguration

Die Integration wurde erfolgreich mit Azure AD getestet. Die Konfigurationsschritte finden Sie unter [https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code). 

Während der Konfiguration der Azure AD entspricht die Redirect-URI Ihrer vollständigen Domain-Adresse. In diesem Dokument verwenden wir beispielhaft `http://aad.cumulocity.com`. In Azure AD sind keine weitere Schritte erforderlich. 

##### Cumulocity-Konfiguration

Wenn die Vorlage "Azure AD" ausgewählt ist, sehen die Grundeinstellungen in etwa folgendermaßen aus:

 ![OAuth configuration](/guides/images/benutzerhandbuch/admin-sso-aad-basic.png)

|Feld|Beschreibung|
|:---|:---|
|Azure AD-Adresse| Adresse Ihres Azure AD-Mandanten 
|Mandant| Name des Azure AD-Mandanten
|Anwendungs-ID| Anwendungs-ID
|Redirect-URI| Adresse Ihres Cumulocity-Mandanten, gefolgt von /tenant/oauth
|Client-Secret| Azure AD-Client-Secret, falls vorhanden 
|Schaltflächenname| Name der Schaltfläche
|Token-Issuer| Token-Issuer-Wert im Format einer HTTP-Adresse

Der zweite Teil der Seite sieht genauso aus wie im Fall der benutzerdefinierten Vorlage und ermöglicht die Konfiguration der Rechtezuordnung, Benutzer-ID und Signaturverifizierung. 

### <a name="default-app"></a>Ändern von Anwendungseinstellungen

Klicken Sie **Anwendung**, um Anwendungseinstellungen zu bearbeiten.

Unter **Standardanwendung** können Sie eine Standardanwendung für alle Benutzer Ihres Mandanten festlegen.

> **Info:** Alle Benutzer müssen Zugriff auf diese Anwendung haben.

Unter **Zugriffskontrolle** können Administratoren CORS (Cross-Origin Resource Sharing) über die Cumulocity API aktivieren.

Die Einstellung **Zulässige Domain** ermöglicht es Ihren JavaScript-Webanwendungen, direkt mit REST APIs zu kommunizieren. Geben Sie ein Sternsymbol "*" ein, um die Kommunikation mit allen Hosts zu erlauben. Geben Sie "http://my.host.com, http://myother.host.com" ein, um Anwendungen aus http://my.host.com und http://myother.host.com die Kommunikation mit der Plattform zu erlauben.

Weitere Information erhalten Sie unter http://enable-cors.org.

### <a name="changing-password-settings"></a>Ändern der Passwortrichtlinien und TFA-Einstellungen

Um die Passwortrichtlinien zu ändern, klicken Sie **Passwort** im Menü **Einstellungen**.

Unter **Passwortbeschränkung** können Sie die Gültigkeit von Benutzerpasswörtern beschränken, in dem Sie die Anzahl der Tage eingeben, nach der Benutzer ihre Passwörter ändern müssen. Wenn Sie keine Passwortänderung erzwingen möchten, verwenden Sie "0" für die uneingeschränkte Gültigkeit von Passwörtern (Standardwert).

Standardmäßig können Benutzer jedes Passwort verwenden, das 8 Zeichen oder mehr enthält. Wenn Sie **Nur starke (grüne) Passwörter zulassen** auswählen, müssen die Benutzer starke Passwörter verwenden, wie unter [Anmelden](/guides/benutzerhandbuch/overview#login) beschrieben.

> **Info:** Passwortbeschränkung und das Erzwingen starker Passörter sind möglicherweise nicht editierbar, falls vom Plattformadministrator so konfiguriert.

Starke (grüne) Passwörter müssen "M" Zeichen haben. Standardmäßig sind Passwörter, die in der Vergangenheit verwendet wurden, nicht zulässig. Das System merkt sich die letzten "N" von einem Benutzer bereitgestellten Passwörter und erlaubt nicht, diese zu verwenden. Der Standardwert für "N" ist 10.

> **Info:** "M" und "N" können vom Plattformadministrator konfiguriert werden.

Klicken Sie **Speichern**, um die Passwortrichtlinien zu speichern.

![Passwortrichtlinien](/guides/images/benutzerhandbuch/Admin_Password.png)

Unter **TFA-Einstellungen** können Sie die folgenden TFA-Einstellungen bearbeiten:

*   **Token-Gültigkeit begrenzen für** - hier können Sie die Dauer jeder Sitzung in Minuten festlegen. Wenn die Sitzung abgelaufen ist, muss der Benutzer einen neuen Verifizierungscode eingeben.
*   "Token-Gültigkeit begrenzen für" - hier können Sie die Dauer jeder Sitzung in Minuten festlegen. Wenn die Sitzung abgelaufen ist, muss der Benutzer einen neuen Verifizierungscode eingeben.

Aktivieren Sie **Zwei-Faktor-Authentifizierung zulassen**, um Zwei-Faktor-Authentifizierung einzustellen.

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

