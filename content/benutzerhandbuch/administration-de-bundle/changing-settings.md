---
weight: 70
title: Ändern von Einstellungen
layout: redirect
---

Im Menü **Einstellungen** können Administratoren verschiedene Einstellungen des Kontos verwalten:

- [Authentifizierungseinstellungen](#authentication) und [Single-Sign-On](#single-sign-on) konfigurieren.
- [Anwendungseinstellungen](#default-app) ändern.
- Die [Attributsbibliothek](#properties) verwalten.
- Systemweite [Einstellungen](#config-platform) in Cumulocity IoT konfigurieren.
- [Zugangsdaten für den SMS-Anbieter](#openIT-credentials) bereitstellen.
- [Konnektivitätseinstellungen](#connectivity) verwalten.



### <a name="authentication"></a>Ändern von Authentifizierungseinstellungen

Klicken Sie **Authentifizierung** im Menü **Einstellungen**, wenn Sie die Anmelde- oder TFA-Einstellungen ändern möchten.

![Password settings](/images/benutzerhandbuch/Administration/admin-settings-authentication.png)

>**Info:** Wenn das Menü nicht sichtbar ist, stellen Sie sicher, dass der Benutzer eine der folgenden Rollen hat: `ROLE_TENANT_ADMIN` oder `ROLE_TENANT_MANAGEMENT_ADMIN`.


#### Anmeldeeinstellungen

Unter **Bevorzugter Login-Modus** sind zwei Modi verfügbar:

* "OAuth Internal" - Dies ist die empfohlene Option, da sie mehr Sicherheit bietet.
* "Basic Auth" - Diese Option sollte nur aus bestimmten Kompatibilitätsgründen gewählt werden.

Dieser Anmeldemodus wird von den Anwendungen der Plattform als Standardmethode zum Authentifizieren von Benutzern verwendet. Die Geräteauthentifizierung bleibt unverändert.

>**Info:** Wenn "OAuth Internal" erzwungen wird, kann "Basic Auth" nicht mehr zum Anmelden bei Anwendungen verwendet werden. Ältere Anwendungen zeigen die Anmeldung möglicherweise nicht korrekt an und müssen aktualisiert werden.

Im Feld **Passwortgültigkeit begrenzen für** können Sie die Gültigkeit von Benutzerpasswörtern beschränken, indem Sie die Anzahl der Tage eingeben, nach der Benutzer ihre Passwörter ändern müssen. Wenn Sie keine Passwortänderung erzwingen möchten, verwenden Sie "0" für die uneingeschränkte Gültigkeit von Passwörtern (Standardwert).

>**Info:** Passwortbeschränkung und das Erzwingen starker Passörter sind möglicherweise nicht editierbar, falls vom Plattformadministrator so konfiguriert.

Standardmäßig können Benutzer jedes Passwort verwenden, das 8 Zeichen oder mehr enthält. Wenn Sie **Nur starke (grüne) Passwörter zulassen** auswählen, müssen die Benutzer starke Passwörter verwenden, wie unter [Erste Schritte > Aufrufen und Anmelden an der Cumulocity IoT-Plattform](/benutzerhandbuch/getting-started-de/#login) beschrieben.

Starke (grüne) Passwörter müssen "M" Zeichen haben. Die Verwendung bereits früher genutzter Passwörter wird standardmäßig eingeschränkt. Das System merkt sich die letzten "N" von einem Benutzer bereitgestellten Passwörter und erlaubt nicht, diese zu verwenden. Der Standardwert für "N" ist 10.

>**Info:** "M" und "N" können vom Plattform-Administrator konfiguriert werden.

Klicken Sie **Speichern**, um Ihre Einstellungen anzuwenden.

#### TFA-Einstellungen

Aktivieren Sie die Checkbox **Zwei-Faktor-Authentifizierung zulassen**, wenn TFA bei Ihrem Mandanten zulässig sein soll (nur für Administratoren möglich).

Sie können eine der folgenden Optionen wählen:

* **SMS-basiert**: unterstützt die folgenden Einstellungen:
	- **Token-Gültigkeit begrenzen für**: Dauer jeder Sitzung in Minuten. Wenn die Sitzung abgelaufen ist oder ein Benutzer sich abmeldet, muss der Benutzer einen neuen Bestätigungscode eingeben.
   - **Bestätigungscode-Gültigkeit begrenzen für**: Hier können Sie die Dauer jedes per SMS zugesandten Bestätigungscodes festlegen. Wenn die Sitzung abgelaufen ist, muss der Benutzer einen neuen Bestätigungscode eingeben.

	> **Info:** Für den Mandanten muss ein SMS-Gateway-Microservice konfiguriert werden. Es versteht sich von selbst, dass nur Benutzer, denen eine gültige Telefonnummer zugewiesen ist, diese Funktionalität nutzen können.

* **Google Authenticator** (zeitabhängiges Einmal-Passwort = TOTP) zur Unterstützung der folgenden Einstellungen:
	 - **TOTP-Zwei-Faktor-Authentifizierung für alle Benutzer erzwingen**: Wenn diese Option aktiviert ist, werden alle Benutzer beim Anmelden zum Einrichten Ihrer TFA gezwungen. Andernfalls kann jeder einzelne Benutzer entscheiden, ob die Aktivierung erfolgen soll oder nicht.
   - **Token-Gültigkeit begrenzen für**: Dauer jeder Sitzung in Minuten.  Nach Ablauf der Sitzung muss sich der Benutzer erneut authentifizieren.

	> **Info:** Diese Strategie ist nur zusammen mit "OAuth Internal" verfügbar.

Klicken Sie **TFA-Einstellungen speichern**, um Ihre Einstellungen zu speichern.


### <a name="single-sign-on"></a>Konfigurieren von Single Sign-On

Cumulocity IoT bietet Single-Sign-On-Funktionalität, die es dem Anwender ermöglicht, sich mit einem einzigen 3rd-Party-Autorisierungsserver über ein OAuth2-Protokoll, beispielsweise Azure Active Directory, anzumelden. Aktuell wird die Vergabe von Autorisierungscodes nur mit Access Tokens im JWT-Format unterstützt.

> **Info:** Die Single-Sign-On-Funktionalität verwendet Cookies-Technologien. Sie kann nur genutzt werden, wenn Cookies in den Einstellungen Ihres Browsers zugelassen sind.

Die Single-Sign-On-Funktionalität wurde mit der Cumulocity IoT-Version 9.12 aktiviert. Microservices müssen mit dem Microservice SDK der Version 9.12 oder höher erstellt sein, um korrektes Funktionieren zu gewährleisten.

Bevor Sie zur Single-Sign-On-Option wechseln, stellen Sie sicher, dass:

* der Autorisierungsserver, den Sie verwenden, die Vergabe von OAuth2-Autorisierungscodes unterstützt.
* das Access Token als JWT ausgegeben wird und Sie wissen, was der Token Content enthalten muss.
* das JWT aus einer einzigartigen Benutzeridentifikation (unique user identifier) sowie aus den Feldern "iss" (issuer), "aud" (audience) und "exp" (expiration time) besteht.
* Cumulocity IoT-Plattform Version 9.12 oder vorzugsweise höher verwendet wird.
* alle Microservices mit dem Microservice Java SDK 9.12.6, oder vorzugsweise höher, erstellt wurden. Informationen zu benutzerspezifischen Microservices finden Sie unter [General aspects > Security](/microservice-sdk/concept/#security) im Microservice SDK Guide.
* Bei lokalen Installationen ist die Domain-basierte Mandantenabbildung bereits korrekt konfiguriert.

>**Info:** Um die Single-Sign-On-Funktion für Enterprise Tenants nutzen zu können, muss die Enterprise-Domain in den Grundeinstellungen als Redirect-URI festgelegt sein. Sofern bei Single-Sign-On-Anbietern eine Liste der zulässigen Domains besteht, sollte die Enterprise-Domain dieser Liste hinzugefügt werden.


#### Konfigurationseinstellungen

Um die Single-Sign-On-Funktionalität zu aktivieren, muss der Administrator eine Verbindung zum Autorisierungsserver konfigurieren. Diese erfolgt in der "Administration"-Anwendung.

Klicken Sie **Single-Sign-On** im Menü **Einstellungen** im Navigator.

Links oben können Sie eine Vorlage auswählen. Diese wirkt sich auf das Layout der Seite aus. Die Standardvorlage "Benutzerdefiniert" ermöglicht eine sehr detaillierte Konfiguration mit nahezu jedem Autorisierungsserver, der die Vergabe von OAuth2-Autorisierungscodes unterstützt. Andere Vorlagen bieten vereinfachte Ansichten bekannter und unterstützter Autorisierungsserver. Im Folgenden wird erklärt, wie Sie die benutzerdefinierte Vorlage verwenden, sowie eine Vorlage für das Azure Active Directory vorgestellt.

##### Benutzerdefinierte Vorlage

![Request configuration](/images/benutzerhandbuch/Administration/admin-sso-1.png)

Da das OAuth-Protokoll auf der Ausführung von HTTP-Anfragen und -Redirects basiert, wird eine generische Anfragekonfiguration bereitgestellt.

Der erste Teil der **Single-Sign-On**-Seite besteht aus der Anfragekonfiguration. Hier werden die Anfrage-Adresse, Anfrageparameter, Kopfzeile sowie Body von Token- und Refresh-Anfragen konfiguriert. Die Autorisierungsmethode wird von POST-Anfragen als GET-, Token- und Refresh-Anfrage ausgeführt.

Eine Abmeldeanfrage kann optional festgelegt werden. Sie führt ein [Front-Channel Single Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html) aus. Wenn diese Option konfiguriert ist, wird der Benutzer nach dem Abmelden aus Cumulocity IoT zur festgelegten Abmelde-URL des Autorisierungsservers weitergeleitet.

![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-logout-custom.png)

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

Jedes Mal, wenn ein Benutzer sich anmeldet, wird der Inhalt des Access Tokens verifiziert und dient als Basis für den Benutzerzugang zur Cumulocity IoT-Plattform. Der folgende Abschnitt beschreibt die Zuordnung zwischen JWT-Claims und dem Zugang zur Plattform.

 ![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-7.png)

 Wenn ein Benutzer versucht sich anzumelden, sieht der dekodierte JWT-Claim für das oben abgebildete Beispiel folgendermaßen aus:

```json
{
...
„user": "john.wick",
...
}
```

Dem Benutzer werden die globale Rolle "business" und die Standardanwendung "cockpit" zugewiesen.

Klicken Sie **Rechtezuordnung hinzufügen**, um weitere Berechtigungen zu vergeben. Eine Rechtezuordnungsanweisung kann mehrere Überprüfungen enthalten, wie im Beispiel unten. Klicken Sie **und**, um eine Regel zu einer vorhandenen Anweisung hinzuzufügen. Klicken Sie das Minus-Symbol, um eine Regel zu entfernen.

Von jeder passenden Rechtezuordnung werden dem Benutzer neue Rollen hinzugefügt. Wenn eine Rechtezuordnungsanweisung die Rolle "admin" und eine andere die Rolle "business" zuweist und beide die definierten Bedingungen erfüllen, erhält der Benutzer Zugriff auf die globalen Rollen “business" und "admin".

Mit "=" als Operator können Sie Platzhalter im Feld **Wert** verwenden. Der unterstützte Platzhalter ist das Sternsymbol (\*), das null oder mehr Zeichen entspricht. Wenn Sie beispielsweise "cur\*" eingeben, entspricht dies den Zeichenketten "cur", "curiosity", "cursor" und allen anderen, die mit “cur” beginnen. "f\*n" entspricht den Zeichenketten "fn", "fission", "falcon" und allen anderen, die mit "f" beginnen und mit "n" enden.

Soll der Platzhalter dem Sternsymbol selbst entsprechen, muss dieses durch Hinzufügen eines umgekehrten Schrägstrichs (\\) geschützt werden. Um zum Beispiel eine genaue Übereinstimmung mit der Zeichenkette "Lorem\*ipsum" zu erzielen, muss der Wert "Lorem\\*ipsum" lauten.


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

Die Integration wurde erfolgreich mit Azure AD getestet. Die Konfigurationsschritte finden Sie unter [https://docs.microsoft.com/de-de/azure/active-directory/azuread-dev/v1-protocols-oauth-code](https://docs.microsoft.com/de-de/azure/active-directory/azuread-dev/v1-protocols-oauth-code).

Während der Konfiguration der Azure AD entspricht die Redirect-URI Ihrer vollständigen Domain-Adresse. In diesem Dokument verwenden wir beispielhaft `http://documentation.cumulocity.com/tenant/oauth`. In Azure AD sind keine weitere Schritte erforderlich.

##### Cumulocity IoT-Konfiguration

Wenn die Vorlage "Azure AD" ausgewählt ist, sehen die Grundeinstellungen in etwa folgendermaßen aus:

 ![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-aad-basic.png)
 ![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-aad-basic-1.png)

|Feld|Beschreibung|
|:---|:---|
|Azure AD-Adresse| Adresse Ihres Azure AD-Mandanten
|Mandant| Name des Azure AD-Mandanten
|Anwendungs-ID| Anwendungs-ID
|Redirect-URI| Adresse Ihres Cumulocity IoT-Mandanten, gefolgt von /tenant/oauth
|Client-Secret| Azure AD-Client-Secret, falls vorhanden
|Name der Schaltfläche| Name der Schaltfläche
|Token-Issuer| Token-Issuer-Wert im Format einer HTTP-Adresse

Optional kann Single Logout konfiguriert werden:

 ![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-logout-azure.png)

|Feld|Beschreibung|
|:---|:---|
|Nach Abmeldung weiterleiten| Aktiviert Single Logout, indem der Benutzer nach dem Abmelden zum Abmelde-Endpunkt des Autorisierungsservers weitergeleitet wird.
|Redirect-URL| Adresse, an die der Benutzer weitergeleitet werden soll, nachdem er sich vom Autorisierungsserver erfolgreich abgemeldet hat.

Der zweite Teil der Seite sieht genauso aus wie im Fall der benutzerdefinierten Vorlage und ermöglicht die Konfiguration der Rechtezuordnung, Benutzer-ID und Signaturverifizierung.

 ![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-aad-2.png)


##### Troubleshooting

Es kann besonders hilfreich sein, den Inhalt des an die Plattform gesendeten Autorisierungs-Tokens zu überprüfen, da einige seiner Felder die Informationen enthalten, die für die oben beschriebene korrekte Konfiguration benötigt werden.

In der "Administration-Anwendung" können Sie nach Klicken auf **Konten** > **Audit-Logs** nach der Kategorie "Single-Sign-On" filtern und nach den Einträgen "Json web token claims" suchen.

Die Kontexte des Tokens werden im JSON-Format dargestellt.

![Audit token content](/images/benutzerhandbuch/Administration/admin-sso-audit-token.png)


### <a name="default-app"></a>Ändern von Anwendungseinstellungen

Klicken Sie **Anwendung**, um Anwendungseinstellungen zu bearbeiten.

![Default application](/images/benutzerhandbuch/Administration/admin-settings-application.png)

Unter **Standardanwendung** können Sie eine Standardanwendung für alle Benutzer Ihres Mandanten festlegen.

>**Info:** Alle Benutzer müssen Zugriff auf diese Anwendung haben.

Unter **Zugriffskontrolle** können Administratoren CORS (Cross-Origin Resource Sharing) über die Cumulocity IoT-API aktivieren.

Die Einstellung **Zulässige Domain** ermöglicht es Ihren JavaScript-Webanwendungen, direkt mit REST APIs zu kommunizieren.

* Geben Sie ein Sternsymbol "*" ein, um die Kommunikation mit allen Hosts zu erlauben.
* Geben Sie `http://my.host.com`, `http://myother.host.com` ein, um Anwendungen aus `http://my.host.com` und `http://myother.host.com` die Kommunikation mit der Plattform zu erlauben.

Weitere Information erhalten Sie unter [http://enable-cors.org](http://enable-cors.org).

### <a name="properties"></a>Verwalten der Attributsbibliothek

Klicken Sie **Attributsbibliothek** im Menü **Einstellungen**, um Stammdaten-Objekten, Alarmen, Ereignissen und Mandanten benutzerdefinierte Attribute hinzuzufügen.

![Properties library](/images/benutzerhandbuch/Administration/admin-settings-properties-library.png)

Mit benutzerdefinierten Attributen können Sie das Datenmodell der in Cumulocity IoT integrierten Objekte erweitern. Sie können die folgenden eigenen Attribute erstellen:

- Eigene Stammdatenattribute werden verwendet, um das Stammdatenmodell zu erweitern. Sie können in den Widgets “Asset-Tabelle” und “Asset-Attribute” genutzt werden.
- Eigene Mandantenattribute sind bei der Erstellung von Mandanten verfügbar. Die eigenen Attribute können unter Untermandanten in der Registerkarte Benutzerdefinierte Attribute bearbeitet werden. Außerdem können diese Attribute in den Nutzungsstatistiken eingesehen und exportiert werden.
- Benutzerdefinierte Alarm- und Ereignisattribute können Ihren Berichten als eigene Felder hinzugefügt werden und sind in der Seite **Exporte** in der Cockpit-Anwendung verfügbar.

>**Info:** Benutzerdefinierte Attribute sind für alle authentifizierten Benutzer des Mandanten sichtbar, unabhängig von ihrer Stammdatenrollen-Berechtigung.

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

### <a name="openIT-credentials"></a>Bereitstellen von Zugangsdaten für den SMS-Anbieter

SMS werden für verschiedene Funktionen der Plattform verwendet wie [Zwei-Faktor-Authentifizierung](/benutzerhandbuch/administration-de#tfa) und Benachrichtigungen etwa bei Alarmen.

Durch Bereitstellung Ihrer Zugangsdaten ermöglichen Sie die Nutzung von Plattform-Funktionen, die SMS-Dienste verwenden.

#### So geben Sie die Zugangsdaten für den SMS-Anbieter ein

1. Klicken Sie **SMS-Anbieter** im Menü **Einstellungen**.

	![Select SMS provider](/images/benutzerhandbuch/Administration/admin-settings-sms-provider.png)

2. Wählen Sie auf der Seite **SMS-Anbieter** entweder [OpenIt](https://sms.openit.de/main.php) oder [sms77](https://www.sms77.io/en/) als SMS-Anbieter.

3. Geben Sie je nach gewähltem Anbieter die entsprechenden Zugangsdaten ein:

	 * Für OpenIT: Ihren OpenIT-Benutzernamen und Ihr Passwort.
	 * Für sms77: Ihren API-Schlüssel für den Zugriff auf sms77 (zu finden in Ihrem sms77-Login unter "Einstellungen" > "HTTP API").

4. Klicken Sie **Speichern**, um Ihre Einstellungen zu speichern.


### <a name="config-platform"></a>Konfigurationseinstellungen

Unter **Konfiguration** im Menü **Einstellungen** können Sie in Cumulocity IoT systemweite Attribute konfigurieren.

![Configuration settings](/images/benutzerhandbuch/Administration/admin-settings-configuration.png)

>**Info:** Bei einigen der folgenden Attribute können Sie E-Mail-Templates für verschiedene Zwecke konfigurieren. Beachten Sie, dass die entsprechenden E-Mails mit dem Content-Typ "text/html" gesendet werden.

#### Platzhalter

Die folgenden Platzhalter sind auf der Seite **Konfiguration** zu finden:

- {host} - Der Wert dieses Platzhalters ist "https://" + "&lt;&lt;tenantId&gt;&gt;" + "&lt;&lt;base-domain&gt;&gt;". Beispiel: Wenn "tenantId" automatisch generiert wird, ist der Host `https://t12345678.cumulocity.com`.
- {tenant-domain} - Dies ist der Standort, an dem der Mandant aufgerufen werden kann. Entspricht "https://" + "&lt;&lt;tenantDomainName&gt;&gt;". Beispiel: {tenant-domain} kann `https://myTenant.cumulocity.com` sein.
- {token} - Ein automatisch generiertes System-Token zum Zurücksetzen des Passworts. Wenn ein Benutzer das Zurücksetzen des Passworts anfordert, wird ein neues zufallsgeneriertes Token erstellt. Dieses Token ist nur mit dem jeweiligen Benutzer verknüpft und ermöglicht nur ein einmaliges Zurücksetzen des Passworts. Dieser Platzhalter wird standardmäßig in Verbindung mit dem Attribut {tenant-domain} verwendet: "{tenant-domain}?token={token}".

>**Info:** Beim Enterprise Tenant können die {tenantDomain}-Platzhalter verschiedene Werte annehmen. Ein Beispiel für eine Mandanten-Domain (tenant-domain) wäre `https://myTenant.myhost.com`.

#### Zwei-Faktor-Authentifizierung

Im Bereich **Zwei-Faktor-Authentifizierung** können Sie das SMS-Template, das an die Benutzer geschickt wird, ändern.

#### Support-Link

Im Bereich **Support-Link** können Sie eine URL eingeben, die als Support-Link verwendet wird. Wenn Sie hier keinen Link bereitstellen, wird der Standardlink zur Seite der Software AG TechCommunity verwendet.

Geben Sie "false" ein, um den Link zu verbergen.

#### Zurücksetzen des Passworts

Im Bereich **Passwort zurücksetzen** können Sie alle Einstellungen im Zusammenhang mit E-Mail-Templates zum Zurücksetzen des Passworts ändern.

![Configuration menu1](/images/benutzerhandbuch/Administration/admin-settings-configuration-password-reset.png)

Ganz oben können Sie festlegen, ob Sie zulassen möchten, E-Mails an unbekannte E-Mail-Adressen zu senden.

Stellen Sie im Feld **E-Mail-Template für das Zurücksetzen von Passwörtern** ein Template bereit, das verwendet werden soll, wenn die Adresse bekannt ist, und eine für unbekannte Adressen. Der Link zum Zurücksetzen des Passworts kann beispielsweise lauten: {host}/apps/devicemanagement/index.html?token={token}.

Geben Sie im Feld **E-Mail-Betreff** ein Betreff für alle E-Mails im Zusammenhang mit dem Zurücksetzen des Passworts ein.

Geben Sie in den folgenden beiden Feldern jeweils ein Template für die E-Mails zur Bestätigung der Passwortänderung und für die Einladung zur Aktivierung ein.

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

Für Enterprise Tenants stehen zusätzliche Funktionen zur Verfügung, siehe [Enterprise Tenant > Anpassen der Plattform](/users-guide/enterprise-edition#customization).

### <a name="connectivity"></a>Verwalten der Konnektivitätseinstellungen

Auf der Seite **Connectivity** können Sie Zugangsdaten für verschiedene Anbieter verwalten. Zum Hinzufügen oder Ersetzen von Zugangsdaten sind ADMIN-Berechtigungen erforderlich.

Derzeit können folgende Anbietereinstellungen festgelegt werden:

- [LoRa](/users-guide/optional-services#lora)
- [Sigfox](/users-guide/optional-services#sigfox)
- [SIM](/users-guide/optional-services#connectivity)

![Provider settings](/images/benutzerhandbuch/Administration/admin-settings-connectivity.png)

#### So können Sie Zugangsdaten bereitstellen oder ersetzen

1. Wechseln Sie zur Registerkarte Ihres gewünschten Anbieters.
2. Geben Sie die URL des Anbieters ein.
3. Geben Sie die Zugangsdaten Ihrer Anbieterplattform ein. Je nach Anbieter handelt es sich hierbei entweder um Zugangsdaten für Ihr Konto auf der Anbieterplattform oder um die Zugangsdaten, mit denen Sie sich auf der Cumulocity IoT-Konnektivitätsseite registrieren können. Diese werden in Ihrem Konto in der Anbieter-Plattform angezeigt.
4. Klicken Sie abschließend auf **Speichern**, um Ihre Einstellungen zu speichern.

Je nach gewähltem Anbieter können zusätzliche Felder vorhanden sein, die in der Dokumentation des entsprechenden Agents erläutert werden, siehe [Optionale Services](/benutzerhandbuch/optional-services).
