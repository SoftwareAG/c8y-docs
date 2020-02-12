---
weight: 70
title: Ändern von Einstellungen
layout: redirect
---


Im Menü **Einstellungen** können Administratoren verschiedene Einstellungen des Kontos ändern oder verwalten, wie

- [Single Sign-On](#single-sign-on) konfigurieren.
- [Anwendungseinstellungen](#default-app) ändern.
- [Passwortrichtlinien und TFA-Einstellungen](#changing-password-settings) ändern.
- die [Attributsbibliothek](#properties) verwalten.
- Einstellungen für die Enterprise Edition konfigurieren, siehe [Enterprise Edition](#config-platform).
- [Konnektivitätseinstellungen](#connectivity) verwalten.

### <a name="single-sign-on"></a>Konfigurieren von Single Sign-On

Cumulocity bietet Single-Sign-On-Funktionalität, die es dem Anwender ermöglicht, sich mit einem einzigen 3rd-Party-Autorisierungsserver über ein OAuth2-Protokoll, beispielsweise Azure Active Directory, anzumelden. Aktuell wird die Vergabe von Autorisierungscodes nur mit Access Tokens im JWT-Format unterstützt. 

**Info**: Die Single-Sign-On-Funktionalität verwendet Cookies-Technologien. Sie kann nur genutzt werden, wenn Cookies in den Einstellungen Ihres Browsers zugelassen sind.  

Die Single-Sign-On-Funktionalität wurde mit der Cumulocity-Version 9.12 aktiviert. Microservices müssen mit dem Microservice SDK der Version 9.12 oder höher erstellt sein, um korrektes Funktionieren zu gewährleisten. 

Bevor Sie zur Single-Sign-On-Option wechseln, stellen Sie sicher, dass:

* der Autorisierungsserver, den Sie verwenden, die Vergabe von OAuth2-Autorisierungscodes unterstützt,
* das Access Token als JWT ausgegeben wird und Sie wissen, was der Token Content enthalten muss, 
* das JWT aus einer einzigartigen Benutzeridentifikation (Unique User Identifier) besteht,
* Cumulocity-Plattform Version 9.12 oder vorzugsweise höher verwendet wird, 
* alle Microservices mit dem Microservice Java SDK 9.12.6, oder vorzugsweise höher, erstellt wurden.


Informationen zu benutzerspezifischen Microservices finden Sie unter [General aspects > Security](/microservice-sdk/concept/#security) im Microservice SDK Guide.

Bei lokalen Installationen ist die Domain-basierte Mandantenabbildung bereits korrekt konfiguriert. 


#### Konfigurationseinstellungen

Um die Single-Sign-On-Funktionalität zu aktivieren, muss der Administrator eine Verbindung zum Autorisierungsserver konfigurieren. Diese erfolgt in der "Administration"-Anwendung.

Klicken Sie **Single-Sign-On** im Menü **Einstellungen** im Navigator. 

Links oben können Sie eine Vorlage auswählen. Diese wirkt sich auf das Layout der Seite aus. Die Standardvorlage "Benutzerdefiniert" ermöglicht eine sehr detaillierte Konfiguration mit nahezu jedem Autorisierungsserver, der die Vergabe von OAuth2-Autorisierungscodes unterstützt. Andere Vorlagen bieten vereinfachte Ansichten bekannter und unterstützter Autorisierungsserver. Im Folgenden wird erklärt, wie Sie die benutzerdefinierte Vorlage verwenden, sowie eine Vorlage für das Azure Active Directory vorgestellt. 

##### Benutzerdefinierte Vorlage

![Request configuration](/images/benutzerhandbuch/Administration/admin-sso-1.png)

Da das OAuth-Protokoll auf der Ausführung von HTTP-Anfragen und -Redirects basiert, wird eine generische Anfragekonfiguration bereitgestellt. 

Der erste Teil der **Single-Sign-On**-Seite besteht aus der Anfragekonfiguration. Hier werden die Anfrage-Adresse, Anfrageparameter, Kopfzeile sowie Body von Token- und Refresh-Anfragen konfiguriert. Die Autorisierungsmethode wird als GET-Anfrage, alle anderen als POST-Anfrage ausgeführt. 

Der Bereich **Grundeinstellungen** der **Single-Sign-On**-Seite besteht aus den folgenden Konfigurationseinstellungen:

![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-2.png)

|Feld|Beschreibung|
|:---|:---|
|Redirect-URI|Redirect-Parameter. Kann in Anfragedefinitionen als ${clientId}-Platzhalter verwendet werden. 
|Client-ID|Client-ID der OAuth-Verbindung. Kann in Anfragedefinitionen als ${clientId}-Platzhalter verwendet werden.
|Name der Schaltfläche|Name auf der Schaltfläche auf der Anmeldeseite
|Issuer|OAuth-Token-Issuer
|Anbietername|Name des Anbieters
|Sichtbar auf der Anmeldeseite|Legt fest, ob die Anmeldeoption sichtbar sein soll 
|Audience|Erwarteter "aud"-Parameter des JWT
|Gruppe|Gruppe, der der Benutzer beim ersten Anmelden zugeordnet wird (ab Version 9.20 ersetzt durch dynamische Rechtezuordnung, siehe unten)
|Anwendungen|Anwendungen, die dem Benutzer beim ersten Anmelden zugewiesen werden (ab Version 9.20 ersetzt durch dynamische Rechtezuordnung, siehe unten)

Jedesmal, wenn ein Benutzer sich anmeldet, wird der Inhalt des Access Tokens verifiziert und dient als Basis für den Benutzerzugang zur Cumulocity-Plattform. Der folgende Abschnitt beschreibt die Zuordnung zwischen JWT-Claims und dem Zugang zur Plattform. 

 ![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-7.png)
 
 Wenn ein Benutzer versucht sich anzumelden, sieht der dekodierte JWT-Claim für das oben abgebildete Beispiel folgendermaßen aus:
 
```json
{
...
„user": "john.wick",
...
}
```

Dem Benutzer werden die globalen Rollen "business" und "application cockpit" zugewiesen. Klicken Sie **Rechtezuordnung hinzufügen**, um weitere Berechtigungen zu vergeben. Klicken Sie das Minus-Symbol, um eine Regel zu entfernen. Eine Anweisung kann mehrere Überprüfungen enthalten, wie im Beispiel unten. Klicken Sie **und**, um eine Überprüfung zu einer vorhandenen Anweisung hinzuzufügen. 

 ![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-8.png)

In diesem Fall sieht der JWT-Claim folgendermaßen aus:

 ```json
 {
 ...
 „user": {
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

 ![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-3.png)

Jedes Access Token wird durch ein Signing-Zertifikat signiert. Aktuell gibt es drei Möglichkeiten, die Signing-Zertifikate zu konfigurieren.
 
1. Durch Spezifizieren der URL für den öffentlichen Schlüssel des Azure AD-Zertifikats. 

 ![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-4.png)

2. Durch Spezifizieren der ADFS-Manifest-Adresse (für ADFS 3.0). 

 ![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-9.png)
 
3. Durch manuelles Bereitstellen des öffentlichen Schlüssels eines Zertifikats. Eine Zertifikatsdefinition benötigt eine Algorithmus-Information, einen Wert für den öffentlichen Schlüssel und ein Gültigkeitsintervall. 

 ![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-5.png)

#### Integration mit Azure AD

##### Azure AD-Konfiguration

Die Integration wurde erfolgreich mit Azure AD getestet. Die Konfigurationsschritte finden Sie unter [https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code). 

Während der Konfiguration der Azure AD entspricht die Redirect-URI Ihrer vollständigen Domain-Adresse. In diesem Dokument verwenden wir beispielhaft http://aad.cumulocity.com. In Azure AD sind keine weitere Schritte erforderlich. 

##### Cumulocity-Konfiguration

Wenn die Vorlage "Azure AD" ausgewählt ist, sehen die Grundeinstellungen in etwa folgendermaßen aus:

 ![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-aad-basic.png)

|Feld|Beschreibung|
|:---|:---|
|Azure AD-Adresse| Adresse Ihres Azure AD-Mandanten 
|Mandant| Name des Azure AD-Mandanten
|Anwendungs-ID| Anwendungs-ID
|Redirect-URI| Adresse Ihres Cumulocity-Mandanten, gefolgt von /tenant/oauth
|Client-Secret| Azure AD-Client-Secret, falls vorhanden 
|Name der Schaltfläche| Name der Schaltfläche
|Token-Issuer| Token-Issuer-Wert im Format einer HTTP-Adresse

Der zweite Teil der Seite sieht genauso aus wie im Fall der benutzerdefinierten Vorlage und ermöglicht die Konfiguration der Rechtezuordnung, Benutzer-ID und Signaturverifizierung. 

 ![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-aad-2.png)

 
### <a name="default-app"></a>Ändern von Anwendungseinstellungen

Klicken Sie **Anwendung**, um Anwendungseinstellungen zu bearbeiten.

![Default application](/images/benutzerhandbuch/Administration/admin-settings-application.png)

Unter **Standardanwendung** können Sie eine Standardanwendung für alle Benutzer Ihres Mandanten festlegen.

>**Info**: Alle Benutzer müssen Zugriff auf diese Anwendung haben.

Unter **Zugriffskontrolle** können Administratoren CORS (Cross-Origin Resource Sharing) über die Cumulocity API aktivieren. 

Die Einstellung **Zulässige Domain** ermöglicht es Ihren JavaScript-Webanwendungen, direkt mit REST APIs zu kommunizieren.

* Geben Sie ein Sternsymbol "*" ein, um die Kommunikation mit allen Hosts zu erlauben.
* Geben Sie "http://my.host.com, http://myother.host.com" ein, um Anwendungen aus http://my.host.com und http://myother.host.com die Kommunikation mit der Plattform zu erlauben.

Weitere Information erhalten Sie unter [http://enable-cors.org](http://enable-cors.org).

### <a name="changing-password-settings"></a>Ändern von Passwortrichtlinien und TFA-Einstellungen

Klicken Sie **Passwort** im Menü **Einstellungen**. 

![Password settings](/images/benutzerhandbuch/Administration/admin-settings-password.png)


#### So ändern Sie die Passworteinstellungen

1. Unter **Passwortbeschränkung** können Sie die Gültigkeit von Benutzerpasswörtern beschränken, in dem Sie die Anzahl der Tage eingeben, nach der Benutzer ihre Passwörter ändern müssen. Wenn Sie keine Passwortänderung erzwingen möchten, verwenden Sie "0" für die uneingeschränkte Gültigkeit von Passwörtern (Standardwert).
2. Standardmäßig können Benutzer jedes Passwort verwenden, das 8 Zeichen oder mehr enthält. Wenn Sie **Nur starke (grüne) Passwörter zulassen** auswählen, müssen die Benutzer starke Passwörter verwenden, wie unter [Erste Schritte > Aufrufen und Anmelden an der Cumulocity-Plattform](/benutzerhandbuch/getting-started-de#login) beschrieben.

	Starke (grüne) Passwörter müssen "M" Zeichen haben. Die Verwendung bereits früher genutzter Passwörter wird standardmäßig eingeschränkt. Das System merkt sich die letzten "N" von einem Benutzer bereitgestellten Passwörter und erlaubt nicht, diese zu verwenden. Der Standardwert für "N" ist 10.

	>**Info**: "M" und "N" können vom Plattform-Administrator konfiguriert werden.

3. Klicken Sie **Speichern**, um Ihre Eingaben zu speichern.

>**Info**: Passwortbeschränkung und das Erzwingen starker Passörter sind möglicherweise nicht editierbar, falls vom Plattformadministrator so konfiguriert.

#### So ändern Sie TFA-Einstellungen

1. Unter **TFA-Einstellungen** können Sie die folgenden Einstellungen festlegenen:
	 - **Token-Gültigkeit begrenzen für** - hier können Sie die Dauer jeder Sitzung in Minuten festlegen. Wenn die Sitzung abgelaufen ist, muss der Benutzer einen neuen Bestätigungscode eingeben.
 - "Token-Gültigkeit begrenzen für" - Hier können Sie die Dauer jedes per SMS zugesandten Bestätigungscodes festlegen. Wenn die Sitzung abgelaufen ist, muss der Benutzer einen neuen Bestätigungscode eingeben.

2. Aktivieren Sie **Zwei-Faktor-Authentifizierung zulassen**, um Zwei-Faktor-Authentifizierung einzustellen. 

1. Klicken Sie **TFA-Einstellungen speichern**, um Ihre Einstellungen zu speichern.

### <a name="properties"></a>Verwalten der Attributsbibliothek 

Klicken Sie **Attributsbibliothek** im Menü **Einstellungen**, um Stammdaten-Objekten, Alarmen, Ereignissen und Mandanten benutzerdefinierte Attribute hinzuzufügen.
 
![Properties library](/images/benutzerhandbuch/Administration/admin-settings-properties-library.png)

Mit benutzerdefinierten Attributen können Sie das Datenmodell der in Cumulocity integrierten Objekte erweitern. Sie können die folgenden eigenen Attribute erstellen:

- Eigene Stammdatenattribute werden verwendet, um das Stammdatenmodell zu erweitern. Sie können in den Widgets “Asset-Tabelle” und “Asset-Attribute” genutzt werden.
- Eigene Mandantenattribute sind bei der Erstellung von Mandanten verfügbar. Die eigenen Attribute können unter Untermandanten in der Registerkarte Benutzerdefinierte Attribute bearbeitet werden. Außerdem können diese Attribute in den Nutzungsstatistiken eingesehen und exportiert werden.
- Benutzerdefinierte Alarm- und Ereignisattribute können Ihren Berichten als eigene Felder hinzugefügt werden und sind in der Seite **Exporte** in der Cockpit-Anwendung verfügbar.

>**Info**: Benutzerdefinierte Attribute sind für alle authentifizierten Benutzer des Mandanten sichtbar, unabhängig von ihrer Stammdatenrollen-Berechtigung.

#### <a name="add-property"></a>So fügen Sie ein benutzerdefiniertes Attribut hinzu 

1. Wählen Sie die Registerkarte für das gewünschte Attribut und klicken Sie **Attribut hinzufügen**. 

	![Add new property](/images/benutzerhandbuch/Administration/admin-settings-property-add.png)
 
1. Geben Sie im folgenden Dialog einen eindeutigen Namen als Bezeichnung und eine Beschriftung für das Attribut ein und wählen Sie einen Datentyp aus der Auswahlliste. 

1. Wählen Sie außerdem Validierungsregeln für das neue Attribut aus:

	|Checkbox|Beschreibung|
|:---|:---|
|Erforderlich|Wenn ausgewählt, muss das Attribut bereitgestellt werden, z. B. beim Erstellen eines Alarms. Nicht verfügbar beim Attributtyp "Boolean".
|Standardwert|Stellen Sie einen Standardwert bereit, der automatisch in das benutzerdefinierte Attributfeld eingefügt wird. Nur verfügbar bei Attributen des Typs "Zeichenkette".
|Minimum|Geben Sie einen minimalen Integer-Wert ein.
|Maximum|Geben Sie einen maximalen Integer-Wert ein.
|Minimale Länge|Geben Sie eine minimale Länge ein, die für die Zeichenkette erforderlich ist.
|Maximale Länge|Geben Sie eine maximale Länge ein, die für die Zeichenkette erforderlich ist.
|Regulärer Ausdruck|Fügen Sie einen regulären Ausdruck hinzu, der zum Ausfüllen des benutzerdefinierten Attributfelds erforderlich ist.

4. Klicken Sie **Speichern**, um das neue Attribut zu erstellen.

#### So bearbeiten Sie ein benutzerdefiniertes Attribut

1. Klicken Sie auf den Namen eines Attributs in der Liste, um dieses zu öffnen. 
2. Nehmen Sie die gewünschten Bearbeitungen vor. Weitere Informationen zu den Feldern finden Sie unter [So fügen Sie ein benutzerdefiniertes Attribut hinzu](#add-property). 
3. Klicken Sie **Speichern**, um Ihre Einstellungen zu speichern.


#### So entfernen Sie ein benutzerdefiniertes Attribut

1. Klicken Sie auf den Namen eines Attributs in der Liste, um dieses zu öffnen. 
2. Klicken Sie **Entfernen**, um das Attribut zu löschen.

### <a name="openIT-credentials"></a>Eingeben von OpenIT-Zugangsdaten

Um OpenIT-Zugangsdaten einzugeben, klicken Sie **OpenIT-Zugangsdaten** im Menü **Einstellungen**.

![Enter OpenIT credentials](/images/benutzerhandbuch/Administration/admin-settings-openit.png)

Durch die Eingabe von OPenIT- Zugangsdaten erlauben Sie der Plattform, SMS-Dienste zu verwenden, die von [OpenIt](https://sms.openit.de/main.php) bereitgestellt werden.

SMS werden für verschiedene Funktionen in den Anwendungen verwendet wie [Zwei-Faktor-Authentifizierung](/benutzerhandbuch/administration-de-de#tfa) und Benachrichtigungen etwa bei Alarmen.

### <a name="config-platform"></a>Konfigurationseinstellungen

Unter **Konfiguration** im Menü **Einstellungen** können Sie systemweite Attribute konfigurieren. 

![Configuration settings](/images/benutzerhandbuch/Administration/admin-settings-configuration.png)

#### Zwei-Faktor-Authentifizierung

Im Bereich **Zwei-Faktor-Authentifizierung** können Sie das SMS-Template, das an die Benutzer geschickt wird, ändern.

#### Support-Link

Im Bereich **Support-Link** können Sie eine URL eingeben, die als Support-Link verwendet wird. Wenn Sie hier keinen Link bereitstellen, wird der Standardlink zur Cumulocity-Support-Seite verwendet. 

Geben Sie "false" ein, um den Link zu verbergen.

#### Zurücksetzen des Passworts

Im Bereich **Passwort zurücksetzen** können Sie alle Einstellungen im Zusammenhang mit E-Mail-Templates zum Zurücksetzen des Passworts ändern.

![Configuration menu1](/images/benutzerhandbuch/Administration/admin-settings-configuration-password-reset.png)

Ganz oben können Sie festlegen, ob Sie zulassen möchten, E-Mails an unbekannte E-Mail-Adressen zu senden.

Stellen Sie im Feld **E-Mail-Template für das Zurücksetzen von Passwörtern** ein Template bereit, das verwendet werden soll, wenn die Adresse bekannt ist, und eine für unbekannte Adressen. Der Link zum Zurücksetzen des Passworts kann beispielsweise lauten: {host}/apps/devicemanagement/index.html?token={token}.

Geben Sie im Feld **E-Mail-Betreff** ein Betreff für alle E-Mails im Zusammenhang mit dem Zurücksetzen des Passworts ein.

Geben Sie in den folgenden beiden Feldern jeweils ein Template für die E-Mails zur Bestätigung der Passwortänderung und für die Einladung zur Aktivierung ein.

>**Info**: Zu verwendende Platzhalter sind: {host}, {tenant-domain}, {token}. 

#### E-Mail-Server

Im Bereich **E-Mail-Server** können Sie benutzerdefinierte E-Mail-Server-Einstellungen konfigurieren. 

<img src="/images/benutzerhandbuch/Administration/admin-settings-configuration-email-server.png" alt="Configure email server">

Wählen Sie im Feld **Protokoll und Verschlüsselung** einen Protokoll-/Verschlüsselungstyp aus der Auswahlliste. Hierbei kann es sich um einen der folgenden Typen handeln: 

* SMTP (keine Verschlüsselung): email.protocol=smtp and email.connection.encrypted=false
* SMTP (STARTTLS): email.protocol=smtp and email.connection.encrypted=true
* SMTPS (SSL/TLS): email.protocol=smtps and email.connection.encrypted=true

Geben Sie Host, Port, Benutzername, Passwort und Senderadresse für den E-Mail-Server an.

#### Datenexport

Im Bereich **Datenexport** können Sie den E-Mail-Betreff und das E-Mail-Template für den Datenexport angeben sowie die **Fehlermeldung, wenn Benutzer nicht autorisiert ist** definieren.

![Data export settings](/images/benutzerhandbuch/Administration/admin-settings-configuration-data-export.png)

#### Speicherbegrenzung

Im Bereich **Speicherbegrenzung** können Sie den E-Mail-Betreff und das E-Mail-Template für E-Mails festlegen, die gesendet werden, *bevor* Daten bei Überschreitung der Speicherbegrenzung gelöscht werden und *nachdem* Daten gelöscht wurden.

![Storage limit settings](/images/benutzerhandbuch/Administration/admin-settings-configuration-storage-limit.png)

#### Mandanten werden gesperrt

Im Bereich **Mandanten werden gesperrt** können Sie Einstellungen für E-Mails vornehmen, die gesendet werden, wenn ein Mandant gesperrt wurde. 

<img src="/images/benutzerhandbuch/Administration/admin-settings-configuration-suspending-tenants.png" alt="Suspended tenants">

Oben können Sie auswählen, ob Sie die E-Mail zum Administrator des gesperrten Mandanten senden möchten und einen weiteren E-Mail-Empfänger angeben. Unten definieren Sie den Betreff und die Vorlage für die E-Mail "Gesperrter Benutzer".

Klicken Sie **Konfiguration speichern**, um Ihre Eingaben zu speichern.

Für Enterprise Tenants stehen zusätzliche Funktionen zur Verfügung, siehe [Enterprise Tenant > Anpassen der Plattform](/benutzerhandbuch/enterprise-edition-de#customization).

### <a name="connectivity"></a>Verwalten der Konnektivitätseinstellungen

Auf der Seite **Connectivity** können Sie Zugangsdaten für verschiedene Anbieter verwalten. Zum Hinzufügen oder Ersetzen von Zugangsdaten sind ADMIN-Berechtigungen erforderlich.

Derzeit können folgende Anbietereinstellungen festgelegt werden:

- [Impact](/users-guide/optional-services#nokia-impact) 
- [LoRa](/users-guide/optional-services#lora)
- [Sigfox](/users-guide/optional-services#sigfox)
- [SIM](/users-guide/optional-services#connectivity)

![Provider settings](/images/benutzerhandbuch/Administration/admin-settings-connectivity-sim.png)

#### So können Sie Zugangsdaten bereitstellen oder ersetzen

1. Wechseln Sie zur Registerkarte Ihres gewünschten Anbieters.
2. Geben Sie die URL des Anbieters ein.
3. Geben Sie die Zugangsdaten Ihrer Anbieterplattform ein. Je nach Anbieter handelt es sich hierbei entweder um Zugangsdaten für Ihr Konto auf der Anbieterplattform oder um die Zugangsdaten, mit denen Sie sich auf der Cumulocity-Konnektivitätsseite registrieren können. Diese werden in Ihrem Konto in der Anbieter-Plattform angezeigt.
4. Klicken Sie abschließend auf **Speichern**, um Ihre Einstellungen zu speichern.

Je nach gewähltem Anbieter können zusätzliche Felder vorhanden sein, die in der Dokumentation des entsprechenden Agents erläutert werden, siehe [Optionale Services](/benutzerhandbuch/optional-services).