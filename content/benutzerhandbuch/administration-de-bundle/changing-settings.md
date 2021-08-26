---
weight: 70
title: Ändern von Einstellungen
layout: redirect
---

Im Menü **Einstellungen** können Administratoren verschiedene Einstellungen des Kontos verwalten:

- [Authentifizierungseinstellungen](#authentication) und [Single-Sign-On](#single-sign-on) konfigurieren.
- [Anwendungseinstellungen](#default-app) ändern.
- Die [Attributsbibliothek](#properties) verwalten.
- [Zugangsdaten für den SMS-Anbieter](#sms-provider) bereitstellen.
- [Konnektivitätseinstellungen](#connectivity) verwalten.

<a name="authentication"></a>
### Ändern von Authentifizierungseinstellungen

Klicken Sie auf **Authentifizierung** im Menü **Einstellungen**, wenn Sie die Anmelde- oder TFA-Einstellungen ändern möchten.

![Password settings](/images/benutzerhandbuch/Administration/admin-settings-authentication.png)

>**Info:** Wenn das Menü nicht sichtbar ist, stellen Sie sicher, dass der Benutzer eine der folgenden Rollen hat: `ROLE_TENANT_ADMIN` oder `ROLE_TENANT_MANAGEMENT_ADMIN`.


#### Anmeldeeinstellungen

Im Feld **Bevorzugter Login-Modus** können Sie eine der folgenden Optionen wählen:

* OAuth Internal - Empfohlene Option, da sie durch Autorisierungs-Tokens als Nachweis Ihrer Identität (gegenüber dem Server) ein hohes Maß an Sicherheit bietet.
* Basic Auth - Diese Option sollte nur aus bestimmten Kompatibilitätsgründen gewählt werden, da sie nur minimale Sicherheit bietet.
* Single-Sign-On-Weiterleitung - Kann nur gewählt werden, wenn SSO konfiguriert ist. Bei Auswahl dieser Option werden die Login-Optionen "Basic Auth" und "OAuth Internal" entfernt.


Dieser Anmeldemodus wird von den Anwendungen der Plattform als Standardmethode zum Authentifizieren von Benutzern verwendet. Die Geräteauthentifizierung bleibt unverändert.

>**Info:** Wenn "OAuth Internal" erzwungen wird, kann "Basic Auth" nicht mehr zum Anmelden bei Anwendungen verwendet werden. Ältere Anwendungen zeigen die Anmeldung möglicherweise nicht korrekt an und müssen aktualisiert werden.

Im Feld **Passwortgültigkeit begrenzen für** können Sie die Gültigkeit von Benutzerpasswörtern beschränken, indem Sie die Anzahl der Tage eingeben, nach der Benutzer ihre Passwörter ändern müssen. Wenn Sie keine Passwortänderung erzwingen möchten, verwenden Sie "0" für die uneingeschränkte Gültigkeit von Passwörtern (Standardwert).

>**Info:** Passwortbeschränkung und das Erzwingen starker Passörter sind möglicherweise nicht editierbar, falls vom Plattformadministrator so konfiguriert.

Standardmäßig können Benutzer jedes Passwort verwenden, das 8 Zeichen oder mehr enthält. Wenn Sie **Nur starke (grüne) Passwörter zulassen** auswählen, müssen die Benutzer starke Passwörter verwenden, wie unter [Erste Schritte > Aufrufen und Anmelden an der Cumulocity IoT-Plattform](/benutzerhandbuch/getting-started-de/#login) beschrieben.

Starke (grüne) Passwörter müssen "M" Zeichen haben. Die Verwendung bereits früher genutzter Passwörter wird standardmäßig eingeschränkt. Das System merkt sich die letzten "N" von einem Benutzer bereitgestellten Passwörter und erlaubt nicht, diese zu verwenden. Der Standardwert für "N" ist 10.

>**Info:** "M" und "N" können vom Plattform-Administrator konfiguriert werden.

Klicken Sie auf **Speichern**, um Ihre Einstellungen anzuwenden.

>**Wichtig:** Immer wenn Sie den Anmeldemodus ändern, werden Sie gezwungen, sich abzumelden. Andere Benutzer müssen sich ab- und wieder anmelden, damit die Änderung angewendet wird.

#### TFA-Einstellungen

Aktivieren Sie die Checkbox **Zwei-Faktor-Authentifizierung zulassen**, wenn TFA bei Ihrem Mandanten zulässig sein soll (nur für Administratoren möglich).

Sie können eine der folgenden Optionen wählen:

* **SMS-basiert**: unterstützt die folgenden Einstellungen:
	- **Token-Gültigkeit begrenzen für**: Dauer jeder Sitzung in Minuten. Wenn die Sitzung abgelaufen ist oder ein Benutzer sich abmeldet, muss der Benutzer einen neuen Bestätigungscode eingeben.
   - **Bestätigungscode-Gültigkeit begrenzen für**: Hier können Sie die Dauer jedes per SMS zugesandten Bestätigungscodes festlegen. Wenn die Sitzung abgelaufen ist, muss der Benutzer einen neuen Bestätigungscode eingeben.

	> **Info:** Für den Mandanten muss ein SMS-Gateway-Microservice konfiguriert werden. Es versteht sich von selbst, dass nur Benutzer, denen eine gültige Telefonnummer zugewiesen ist, diese Funktionalität nutzen können.

* **Google Authenticator** (zeitabhängiges Einmal-Passwort = TOTP) zur Unterstützung der folgenden Einstellung:
	 - **TOTP-Zwei-Faktor-Authentifizierung für alle Benutzer erzwingen**: Wenn diese Option aktiviert ist, werden alle Benutzer beim Anmelden zum Einrichten Ihrer TFA gezwungen. Andernfalls kann jeder einzelne Benutzer entscheiden, ob die Aktivierung erfolgen soll oder nicht.

	> **Info:** Die TOTP-Methode ist nur im Anmeldemodus "OAuth Internal" verfügbar.

Klicken Sie auf **TFA-Einstellungen speichern**, um Ihre Einstellungen zu speichern.

>**Wichtig:** Immer wenn Sie die TFA-Methode ändern, werden Sie gezwungen, sich abzumelden. TFA-Einstellungen der Benutzer werden gelöscht und müssen erneut konfiguriert werden.

<a name="oauth-internal"></a>
### OAuth Internal

Cumulocity IoT OAuth Internal basiert auf JWT, das in einem Browser-Cookie gespeichert wird. Es unterstützt jedoch keine Aktualisierung und der Benutzer muss sich nach Ablauf der Gültigkeitsdauer des Tokens erneut anmelden.
Die Standard-Gültigkeitsdauer des Tokens beträgt zwei Wochen und dies kann mit Mandantenoptionen geändert werden: `oauth.internal.basic-token.lifespan.seconds`. Der minimal zulässige Wert ist 5 Minuten.

Cookies zum Speichern eines Tokens in einem Browser haben eine eigene Gültigkeitsdauer, die mit Mandantenoptionen geändert werden kann: `oauth.internal.basic-user.cookie.lifespan.seconds`. Der Standardwert ist zwei Wochen. Es kann auch ein negativer Wert eingestellt werden, so dass das Cookie gelöscht wird, wenn der Benutzer den Browser schließt.

Weitere Informationen finden Sie unter [Tenant API](https://cumulocity.com/api/#tag/Tenant-API) in der Cumulocity IoT OpenAPI Specification.

<a name="single-sign-on"></a>
### Konfigurieren von Single Sign-On

Cumulocity IoT bietet Single-Sign-On-Funktionalität, die es dem Anwender ermöglicht, sich mit einem einzigen 3rd-Party-Autorisierungsserver über ein OAuth2-Protokoll, beispielsweise Azure Active Directory, anzumelden. Aktuell wird die Vergabe von Autorisierungscodes nur mit Access Tokens im JWT-Format unterstützt.

> **Info:** Die Single-Sign-On-Funktionalität verwendet Cookies-Technologien. Sie kann nur genutzt werden, wenn Cookies in den Einstellungen Ihres Browsers zugelassen sind.

Die Single-Sign-On-Funktionalität wurde mit der Cumulocity IoT-Version 10.4.6. aktiviert. Microservices müssen mit dem Microservice SDK der Version 10.4.6 oder höher erstellt sein, um korrektes Funktionieren zu gewährleisten.

Bevor Sie zur Single-Sign-On-Option wechseln, stellen Sie sicher, dass:

* der Autorisierungsserver, den Sie verwenden, die Vergabe von OAuth2-Autorisierungscodes unterstützt.
* das Access Token als JWT ausgegeben wird und Sie wissen, was der Token Content enthalten muss.
* das JWT aus einer einzigartigen Benutzeridentifikation (unique user identifier) sowie aus den Feldern "iss" (issuer), "aud" (audience) und "exp" (expiration time) besteht.
* Cumulocity IoT-Plattform Version 10.4.6 oder vorzugsweise höher verwendet wird.
* alle Microservices mit dem Microservice Java SDK 10.4.6 oder vorzugsweise höher erstellt wurden. Informationen zu benutzerspezifischen Microservices finden Sie unter [General aspects > Security](/microservice-sdk/concept/#security) im *Microservice SDK Guide*.
* Bei lokalen Installationen ist die Domain-basierte Mandantenabbildung bereits korrekt konfiguriert.

>**Info:** Um die Single-Sign-On-Funktion für Enterprise Tenants nutzen zu können, muss die Enterprise-Domain in den Grundeinstellungen als Redirect-URI festgelegt sein. Sofern bei Single-Sign-On-Anbietern eine Liste der zulässigen Domains besteht, sollte die Enterprise-Domain dieser Liste hinzugefügt werden.


#### Konfigurationseinstellungen

Um die Single-Sign-On-Funktionalität zu aktivieren, muss der Administrator eine Verbindung zum Autorisierungsserver konfigurieren. Diese erfolgt in der "Administration"-Anwendung.

Klicken Sie auf **Single-Sign-On** im Menü **Einstellungen** im Navigator.

Links oben können Sie eine Vorlage auswählen. Diese wirkt sich auf das Layout der Seite aus. Die Standardvorlage "Benutzerdefiniert" ermöglicht eine sehr detaillierte Konfiguration mit nahezu jedem Autorisierungsserver, der die Vergabe von OAuth2-Autorisierungscodes unterstützt. Andere Vorlagen bieten vereinfachte Ansichten bekannter und unterstützter Autorisierungsserver. Im Folgenden wird erklärt, wie Sie die benutzerdefinierte Vorlage verwenden, sowie eine Vorlage für das Azure Active Directory vorgestellt.

##### Benutzerdefinierte Vorlage

![Request configuration](/images/benutzerhandbuch/Administration/admin-sso-1.png)

Da das OAuth-Protokoll auf der Ausführung von HTTP-Anfragen und -Redirects basiert, wird eine generische Anfragekonfiguration bereitgestellt.

Der erste Teil der **Single-Sign-On**-Seite besteht aus der Anfragekonfiguration. Hier werden die Anfrage-Adresse, Anfrageparameter, Kopfzeile sowie Body von Token- und Refresh-Anfragen konfiguriert. Die Autorisierungsmethode wird von POST-Anfragen als GET-, Token- und Refresh-Anfrage ausgeführt.

>**Info:** Beachten Sie, dass das Text-Feld jeder Anfrage nach dem Ausfüllen der Platzhalter mit Werten in unveränderter Form in der Anfrage versendet wird. Es wird also nicht von Cumulocity IoT kodiert. Viele Autorisierungsserver verlangen, dass Werte im Text URL-kodiert (x-form-urlencoded) sind. Dies kann dadurch erreicht werden, dass bereits kodierte Werte in ein Text-Feld eingegeben werden.

Eine Abmeldeanfrage kann optional festgelegt werden. Sie führt ein [Front-Channel Single Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html) aus. Wenn diese Option konfiguriert ist, wird der Benutzer nach dem Abmelden aus Cumulocity IoT zur festgelegten Abmelde-URL des Autorisierungsservers weitergeleitet.

![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-logout-custom.png)

Der Bereich **Grundeinstellungen** der **Single-Sign-On**-Seite besteht aus den folgenden Konfigurationseinstellungen:

![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-2.png)

|Feld|Beschreibung|
|:---|:---|
|Redirect-URI|Redirect-Parameter. Kann in Anfragedefinitionen als ${redirectUri}-Platzhalter verwendet werden.
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

Klicken Sie auf **Rechtezuordnung hinzufügen**, um weitere Berechtigungen zu vergeben. Eine Rechtezuordnungsanweisung kann mehrere Überprüfungen enthalten, wie im Beispiel unten. Klicken Sie auf **und**, um eine Regel zu einer vorhandenen Anweisung hinzuzufügen. Klicken Sie auf das Minus-Symbol, um eine Regel zu entfernen.

Von jeder passenden Rechtezuordnung werden dem Benutzer neue Rollen hinzugefügt. Wenn eine Rechtezuordnungsanweisung die Rolle "admin" und eine andere die Rolle "business" zuweist und beide die definierten Bedingungen erfüllen, erhält der Benutzer Zugriff auf die globalen Rollen "business" und "admin".

Mit "=" als Operator können Sie Platzhalter im Feld **Wert** verwenden. Der unterstützte Platzhalter ist das Sternsymbol (\*), das null oder mehr Zeichen entspricht. Wenn Sie beispielsweise "cur\*" eingeben, entspricht dies den Zeichenketten "cur", "curiosity", "cursor" und allen anderen, die mit "cur" beginnen. "f\*n" entspricht den Zeichenketten "fn", "fission", "falcon" und allen anderen, die mit "f" beginnen und mit "n" enden.

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

4. Durch Spezifizieren der JWKS (JSON Web Key Set)-Adresse.

 ![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-9.png)


 >**Info:** Cumulocity IoT unterstützt nur Zertifikate mit RSA-Schlüssel, entweder in Form eines ("n", "e")-Parameter-Paars oder in Form einer "x5c"-Zertifikatskette. Andere Schlüsseltypen (zum Beispiel Elliptic-Curves) werden nicht unterstützt.
##### Platzhalter
In einigen Feldern können Sie Platzhalter verwenden, die während der Laufzeit von Cumulocity IoT aufgelöst werden. Folgende Platzhalter sind verfügbar:

|Platzhalter|Beschreibung|
|:---|:---|
|clientId|Wert des Felds **Client-ID**
|redirectUri| Wert des Felds **Redirect-URI**
|code|Wert, der vom Autorisierungsserver als Antwort auf die Autorisierungsanfrage zurückgegeben wird
|refreshToken| Refresh-Token, das vom Autorisierungsserver nach einer Token-Anfrage zurückgegeben wird

Diese Platzhalter können in Autorisierungsanfragen, Token-Anfragen, Refresh-Anfragen und Abmeldeanfragen in folgenden Feldern verwendet werden: URL, Text, Kopfzeilen und Anfrageparameter

Um in einem Feld einen Platzhalter zu verwenden, schließen Sie diesen mit vorangehendem Dollarzeichen in geschweifte Klammern ein:
![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-placeholder-standalone.png)

Platzhalter können auch als Textteile verwendet werden:
![OAuth configuration](/images/benutzerhandbuch/Administration/admin-sso-placeholder-text.png)

Platzhalter werden nicht auf Korrektheit geprüft. Jeder nicht erkannte oder falsch geschriebene Platzhalter wird im Text unverarbeitet gelassen.

#### Integration mit Azure AD

##### Azure AD-Konfiguration

Die Integration wurde erfolgreich mit Azure AD getestet. Die Konfigurationsschritte finden Sie unter [https://docs.microsoft.com/de-de/azure/active-directory/develop/v2-oauth2-auth-code-flow](https://docs.microsoft.com/de-de/azure/active-directory/develop/v2-oauth2-auth-code-flow).

Während der Konfiguration der Azure AD entspricht die Redirect-URI Ihrer vollständigen Domain-Adresse. In diesem Dokument verwenden wir beispielhaft `http://documentation.cumulocity.com/tenant/oauth`. In Azure AD sind keine weiteren Schritte erforderlich.

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

<a name="default-app"></a>
### Ändern von Anwendungseinstellungen

Klicken Sie auf **Anwendung**, um Anwendungseinstellungen zu bearbeiten.

![Default application](/images/benutzerhandbuch/Administration/admin-settings-application.png)

Unter **Standardanwendung** können Sie eine Standardanwendung für alle Benutzer Ihres Mandanten festlegen.

>**Info:** Alle Benutzer müssen Zugriff auf diese Anwendung haben.

Unter **Zugriffskontrolle** können Administratoren CORS (Cross-Origin Resource Sharing) über die Cumulocity IoT-API aktivieren.

Die Einstellung **Zulässige Domain** ermöglicht es Ihren JavaScript-Webanwendungen, direkt mit REST APIs zu kommunizieren.

* Geben Sie ein Sternsymbol "*" ein, um die Kommunikation mit allen Hosts zu erlauben.
* Geben Sie `http://my.host.com`, `http://myother.host.com` ein, um Anwendungen aus `http://my.host.com` und `http://myother.host.com` die Kommunikation mit der Plattform zu erlauben.

Weitere Information erhalten Sie unter [http://enable-cors.org](http://enable-cors.org).

<a name="properties"></a>
### Verwalten der Attributsbibliothek

Klicken Sie auf **Attributsbibliothek** im Menü **Einstellungen**, um Stammdaten-Objekten, Alarmen, Ereignissen und Mandanten benutzerdefinierte Attribute hinzuzufügen.

![Properties library](/images/benutzerhandbuch/Administration/admin-settings-properties-library.png)

Mit benutzerdefinierten Attributen können Sie das Datenmodell der in Cumulocity IoT integrierten Objekte erweitern. Sie können die folgenden eigenen Attribute erstellen:

- Eigene Stammdatenattribute werden verwendet, um das Stammdatenmodell zu erweitern. Sie können in den Widgets "Asset-Tabelle" und "Asset-Attribute" genutzt werden.
- Eigene Mandantenattribute sind bei der Erstellung von Mandanten verfügbar. Die eigenen Attribute können unter Untermandanten in der Registerkarte Benutzerdefinierte Attribute bearbeitet werden. Außerdem können diese Attribute in den Nutzungsstatistiken eingesehen und exportiert werden.
- Benutzerdefinierte Alarm- und Ereignisattribute können Ihren Berichten als eigene Felder hinzugefügt werden und sind in der Seite **Exporte** in der Cockpit-Anwendung verfügbar.

>**Info:** Benutzerdefinierte Attribute sind für alle authentifizierten Benutzer des Mandanten sichtbar, unabhängig von ihrer Stammdatenrollen-Berechtigung.

<a name="add-property"></a>
#### So fügen Sie ein benutzerdefiniertes Attribut hinzu

1. Wählen Sie die Registerkarte für das gewünschte Attribut und klicken Sie auf **Attribut hinzufügen**.

	![Add new property](/images/benutzerhandbuch/Administration/admin-settings-property-add.png)

1. Geben Sie im folgenden Dialog einen eindeutigen Namen als Bezeichnung und eine Beschriftung für das Attribut ein und wählen Sie einen Datentyp aus der Auswahlliste.

1. Wählen Sie außerdem Validierungsregeln für das neue Attribut aus:

<table>
<colgroup>
<col width="20%">
<col width="80%">
</colgroup>
<thead>
<tr>
<th style="text-align:left">Checkbox</th>
<th style="text-align:left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Erforderlich</td>
<td style="text-align:left">Wenn ausgewählt, muss das Attribut bereitgestellt werden, z. B. beim Erstellen eines Alarms. Nicht verfügbar beim Attributtyp "Boolean".</td>
</tr>
<tr>
<td style="text-align:left">Standardwert</td>
<td style="text-align:left">Stellen Sie einen Standardwert bereit, der automatisch in das benutzerdefinierte Attributfeld eingefügt wird. Nur verfügbar bei Attributen des Typs "Zeichenkette".</td>
</tr>
<tr>
<td style="text-align:left">Minimum</td>
<td style="text-align:left">Geben Sie einen minimalen Integer-Wert ein.</td>
</tr>
<tr>
<td style="text-align:left">Maximum</td>
<td style="text-align:left">Geben Sie einen maximalen Integer-Wert ein.</td>
</tr>
<tr>
<td style="text-align:left">Minimale Länge</td>
<td style="text-align:left">Geben Sie eine minimale Länge ein, die für die Zeichenkette erforderlich ist.</td>
</tr>
<tr>
<td style="text-align:left">Maximale Länge</td>
<td style="text-align:left">Geben Sie eine maximale Länge ein, die für die Zeichenkette erforderlich ist.</td>
</tr>
<tr>
<td style="text-align:left">Regulärer Ausdruck</td>
<td style="text-align:left">Fügen Sie einen regulären Ausdruck hinzu, der zum Ausfüllen des benutzerdefinierten Attributfelds erforderlich ist.</td>
</tr>
</tbody>
</table>

4. Klicken Sie auf **Speichern**, um das neue Attribut zu erstellen.

#### So bearbeiten Sie ein benutzerdefiniertes Attribut

1. Klicken Sie auf den Namen eines Attributs in der Liste, um dieses zu öffnen.
2. Nehmen Sie die gewünschten Bearbeitungen vor. Weitere Informationen zu den Feldern finden Sie unter [So fügen Sie ein benutzerdefiniertes Attribut hinzu](#add-property).
3. Klicken Sie auf **Speichern**, um Ihre Einstellungen zu speichern.


#### So entfernen Sie ein benutzerdefiniertes Attribut

1. Klicken Sie auf den Namen eines Attributs in der Liste, um dieses zu öffnen.
2. Klicken Sie auf **Entfernen**, um das Attribut zu löschen.

<a name="sms-provider"></a>
### Bereitstellen von Zugangsdaten für den SMS-Anbieter

SMS werden für verschiedene Funktionen der Plattform verwendet wie [Zwei-Faktor-Authentifizierung](/benutzerhandbuch/administration-de#tfa) und Benachrichtigungen etwa bei Alarmen.

Durch Bereitstellung Ihrer Zugangsdaten ermöglichen Sie die Nutzung von Plattform-Funktionen, die SMS-Dienste verwenden.

#### So geben Sie die Zugangsdaten für den SMS-Anbieter ein

1. Klicken Sie auf **SMS-Anbieter** im Menü **Einstellungen**.

	![Select SMS provider](/images/benutzerhandbuch/Administration/admin-settings-sms-provider.png)

2. Wählen Sie auf der Seite **SMS-Anbieter** einen der verfügbaren SMS-Anbieter aus der Auswahlliste **SMS-Anbieter**. Sie können mit der Eingabe beginnen, um Elemente zu filtern und Ihren bevorzugten Anbieter leichter zu finden.

3. Geben Sie im daraufhin angezeigten Dialog die erforderlichen Zugangsdaten und Attribute ein oder legen Sie optionale Einstellungen fest, die sich je nach gewähltem Anbieter unterscheiden.

4. Klicken Sie auf **Speichern**, um Ihre Einstellungen zu speichern.

>**Info:** OpenIT betreut keine neuen Kunden mehr und ist dabei, das Geschäft mit SMS-Anbietern einzustellen. Wir empfehlen Ihnen daher, einen der anderen SMS-Anbieter zu wählen.

<a name="connectivity"></a>
### Verwalten der Konnektivitätseinstellungen

Auf der Seite **Connectivity** können Sie Zugangsdaten für verschiedene Anbieter verwalten. Zum Hinzufügen oder Ersetzen von Zugangsdaten sind ADMIN-Berechtigungen erforderlich.

Derzeit können folgende Anbietereinstellungen festgelegt werden:

- [Actility LoRa](/protocol-integration/lora-actility)
- [Sigfox](/protocol-integration/sigfox)
- [SIM](/benutzerhandbuch/device-management-de/#connectivity)

![Provider settings](/images/benutzerhandbuch/Administration/admin-settings-connectivity.png)

#### So können Sie Zugangsdaten bereitstellen oder ersetzen

1. Wechseln Sie zur Registerkarte Ihres gewünschten Anbieters.
2. Geben Sie die URL des Anbieters ein.
3. Geben Sie die Zugangsdaten Ihrer Anbieterplattform ein. Je nach Anbieter handelt es sich hierbei entweder um Zugangsdaten für Ihr Konto auf der Anbieterplattform oder um die Zugangsdaten, mit denen Sie sich auf der Cumulocity IoT-Konnektivitätsseite registrieren können. Diese werden in Ihrem Konto in der Anbieter-Plattform angezeigt.
4. Klicken Sie abschließend auf **Speichern**, um Ihre Einstellungen zu speichern.

Je nach gewähltem Anbieter können zusätzliche Felder vorhanden sein, die in der Dokumentation des entsprechenden Agents erläutert werden, siehe [*Protocol Integration Guide*](/protocol-integration/overview/).
