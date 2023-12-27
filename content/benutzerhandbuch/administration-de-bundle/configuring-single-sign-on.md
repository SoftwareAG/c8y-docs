---
weight: 72
title: Konfigurieren von Single Sign-On
layout: redirect
---

{{< product-c8y-iot >}} bietet Single-Sign-On-Funktionalität (SSO), die es dem Anwender ermöglicht, sich mit einem einzigen 3rd-Party-Autorisierungsserver über ein OAuth2-Protokoll, z. B. Azure Active Directory (ADD), anzumelden. Aktuell wird die Vergabe von Autorisierungscodes nur mit Access Tokens im JWT-Format unterstützt.


{{< c8y-admon-req title="Anforderungen" >}}
Zur Verwendung der SSO-Funktion muss gewährleistet sein, dass:

* der Autorisierungsserver, den Sie verwenden, die Vergabe von OAuth2-Autorisierungscodes unterstützt.
* das Access Token als JWT ausgegeben wird und Sie wissen, was der Token Content enthalten muss.
* das JWT aus einer einzigartigen Benutzeridentifikation (unique user identifier) sowie aus den Feldern "iss" (issuer), "aud" (audience) und "exp" (expiration time) besteht.
* {{< product-c8y-iot >}}-Plattform Version 10.4.6 oder vorzugsweise höher verwendet wird.
* alle Microservices mit dem Microservice Java SDK, Version 10.4.6 oder vorzugsweise höher, erstellt wurden. Informationen zu benutzerspezifischen Microservices finden Sie unter [General aspects > Security](/microservice-sdk/concept/#security) im *Microservice SDK Guide*.
* Bei lokalen Installationen ist die Domain-basierte Mandantenabbildung bereits korrekt konfiguriert.
* Für {{< enterprise-tenant-de >}}s muss die Enterprise-Domain in den Grundeinstellungen als Redirect-URI festgelegt sein. Sofern bei SSO-Anbietern eine Liste der zulässigen Domains besteht, sollte die Enterprise-Domain dieser Liste hinzugefügt werden.
* Sie müssen dem Benutzer eine Rolle mit mindestens LESEN-Berechtigung für "Eigener Benutzer" zuweisen, andernfalls kann sich der Benutzer nicht anmelden.
* Die Benutzer müssen in den Browsereinstellungen Cookies aktiviert haben, da die SSO-Funktion auf der Cookie-Technologie basiert.
{{< /c8y-admon-req >}}

### Konfigurationseinstellungen

Um die SSO-Funktion zu aktivieren, muss der Administrator eine Verbindung zum Autorisierungsserver konfigurieren. Diese erfolgt in der "Administration"-Anwendung.

#### Konfigurationszugriff

SSO-Konfigurationen können so eingerichtet werden, dass ausschließlich der {{< management-tenant-de >}} darauf Zugriff hat. So wird verhindert, dass andere Mandanten auf die Konfigurationen zugreifen.
Benutzer solcher Mandanten können die Konfiguration nicht aktualisieren. Dies beseitigt das Risiko einer falsch konfigurierten SSO-Funktion, durch die andere Benutzer daran gehindert werden können, sich über SSO anzumelden.
Der {{< management-tenant-de >}} kann den Zugriff auf SSO-Konfigurationen für spezifische Mandanten gewähren oder einschränken. Weitere Informationen zum Konfigurationszugriff finden Sie unter [Login options API](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#operation/putAccessLoginOptionResource) in der {{< openapi >}}.

#### Konfigurationsansicht

Klicken Sie auf die Registerkarte **Single-Sign-On** auf der Seite **Authentifizierung**.
Beachten Sie, dass die Registerkarte nur für Mandanten sichtbar ist, die Zugriff auf die SSO-Konfiguration haben.

Links oben können Sie eine Vorlage auswählen. Die gewählte Option wirkt sich auf das Layout der Seite aus. Die Standardvorlage "Benutzerdefiniert" ermöglicht eine sehr detaillierte Konfiguration mit nahezu jedem Autorisierungsserver, der die Vergabe von OAuth2-Autorisierungscodes unterstützt. Andere Vorlagen bieten vereinfachte Ansichten bekannter und unterstützter Autorisierungsserver. Im Folgenden wird erklärt, wie Sie die benutzerdefinierte Vorlage verwenden, sowie eine Vorlage für das Azure Active Directory vorgestellt.

<a name="custom-template"></a>
#### Benutzerdefinierte Vorlage

![Custom authorization request](/images/benutzerhandbuch/Administration/sso-custom-authorization-request.png)

Da das OAuth-Protokoll auf der Ausführung von HTTP-Anfragen und -Redirects basiert, wird eine generische Anfragekonfiguration bereitgestellt.

Der erste Teil der **Single-Sign-On**-Seite besteht aus der Anfragekonfiguration. Hier werden die Anfrage-Adresse, Anfrageparameter, Kopfzeile sowie Body von Token- und Refresh-Anfragen konfiguriert. Die Autorisierungsmethode wird von POST-Anfragen als GET-, Token- und Refresh-Anfrage ausgeführt.

{{< c8y-admon-info >}}
Beachten Sie, dass das Text-Feld jeder Anfrage nach dem Ausfüllen der Platzhalter mit Werten in unveränderter Form in der Anfrage versendet wird. Es wird also nicht von {{< product-c8y-iot >}} kodiert. Viele Autorisierungsserver verlangen, dass Werte im Text URL-kodiert (x-form-urlencoded) sind. Dies kann dadurch erreicht werden, dass bereits kodierte Werte in ein Text-Feld eingegeben werden.
{{< /c8y-admon-info >}}

Eine Abmeldeanfrage kann optional festgelegt werden. Sie führt ein [Front-Channel Single Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html) aus. Wenn diese Option konfiguriert ist, wird der Benutzer nach dem Abmelden aus {{< product-c8y-iot >}} zur festgelegten Abmelde-URL des Autorisierungsservers weitergeleitet.

![Custom logout request](/images/benutzerhandbuch/Administration/sso-custom-logout-request.png)

Der Bereich **Grundeinstellungen** der **Single-Sign-On**-Seite besteht aus den folgenden Konfigurationseinstellungen:

![Custom basic configuration](/images/benutzerhandbuch/Administration/sso-custom-basic.png)

|Feld|Beschreibung|
|:---|:---|
|Redirect-URI|Redirect-Parameter. Kann in Anfragedefinitionen als ${redirectUri}-Platzhalter verwendet werden.
|Client-ID|Client-ID der OAuth-Verbindung. Kann in Anfragedefinitionen als ${clientId}-Platzhalter verwendet werden.
|Name der Schaltfläche|Name auf der Schaltfläche auf der Anmeldeseite
|Issuer|OAuth-Token-Issuer
|Anbietername|Name des Anbieters
|Sichtbar auf der Anmeldeseite|Legt fest, ob die Anmeldeoption sichtbar sein soll.
|Audience|Erwarteter "aud"-Parameter des JWT

Jedes Mal, wenn ein Benutzer sich anmeldet, wird der Inhalt des Access Tokens verifiziert und dient als Basis für den Benutzerzugang zur {{< product-c8y-iot >}}-Plattform. Der folgende Abschnitt beschreibt die Zuordnung zwischen JWT-Claims und dem Zugang zur Plattform.

 ![Custom access mapping](/images/benutzerhandbuch/Administration/sso-custom-access-mapping.png)

 Wenn ein Benutzer versucht sich anzumelden, sieht der dekodierte JWT-Claim für das oben abgebildete Beispiel folgendermaßen aus:

```json
{
...
"user": "john.wick",
...
}
```

Dem Benutzer werden die globale Rolle "business" und die Standardanwendung "cockpit" zugewiesen.

Falls keine Rechtezuordnung dem Benutzerzugriff-Token entspricht, erhält der Benutzer beim Versuch sich anzumelden eine "Zugriff verweigert"-Meldung. Dies geschieht auch, wenn keine Rechtezuordnung definiert ist, was dazu führt, dass sich sämtliche Benutzer nicht über SSO anmelden können.

Klicken Sie auf **Rechtezuordnung hinzufügen**, um weitere Berechtigungen zu vergeben. Eine Rechtezuordnungsanweisung kann mehrere Überprüfungen enthalten, wie im Beispiel unten. Klicken Sie auf **und**, um eine Regel zu einer vorhandenen Anweisung hinzuzufügen. Klicken Sie auf das Minus-Symbol, um eine Regel zu entfernen.

Von jeder passenden Rechtezuordnung werden dem Benutzer neue Rollen hinzugefügt. Wenn eine Rechtezuordnungsanweisung die Rolle "admin" und eine andere die Rolle "business" zuweist und beide die definierten Bedingungen erfüllen, erhält der Benutzer Zugriff auf die globalen Rollen "business" und "admin".

Mit "=" als Operator können Sie Platzhalter im Feld **Wert** verwenden. Der unterstützte Platzhalter ist das Sternsymbol (\*), das null oder mehr Zeichen entspricht. Wenn Sie beispielsweise "cur\*" eingeben, entspricht dies den Zeichenketten "cur", "curiosity", "cursor" und allen anderen, die mit "cur" beginnen. "f\*n" entspricht den Zeichenketten "fn", "fission", "falcon" und allen anderen, die mit "f" beginnen und mit "n" enden.

Soll der Platzhalter dem Sternsymbol selbst entsprechen, muss dieses durch Hinzufügen eines umgekehrten Schrägstrichs (\\) geschützt werden. Um zum Beispiel eine genaue Übereinstimmung mit der Zeichenkette "Lorem\*ipsum" zu erzielen, muss der Wert "Lorem\\*ipsum" lauten.


 ![Custom access mapping](/images/benutzerhandbuch/Administration/sso-custom-access-mapping-WHEN.png)

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

Durch den "in"-Operator besteht die Möglichkeit zu verifizieren, ob ein Wert in einer Liste vorhanden ist. Werte können außerdem in andere Objekte eingebettet sein. Ein Punkt (".") im Schlüssel indiziert, dass es sich um ein eingebettetes Objekt handelt.

Standardmäßig ist die Konfiguration für die dynamische Rechtezuordnung ausgewählt: **Die Rollen, die in den Regeln oben ausgewählt wurden, werden dem Benutzer bei jedem Login wieder zugewiesen. Alle anderen Rollen werden entfernt.**.
Somit weist die dynamische Rechtezuordnung bei jeder Anmeldung des Benutzers standardmäßig Benutzerrollen anhand des Access Tokens zu.
Es ist nicht möglich, die Benutzerrollen innerhalb von {{< product-c8y-iot >}} zu ändern, da sie bei der nächsten Anmeldung des Benutzers überschrieben würden.
Um dieses Verhalten zu ändern, wählen Sie unten im Abschnitt **Rechtezuordnung** eines der folgenden Optionsfelder:

* **Dynamische Rechtezuordnung nur bei der Benutzererstellung verwenden** - Wenn aktiviert, wird die dynamische Rechtezuordnung nur verwendet, wenn sich ein neuer Benutzer anmeldet, um die anfänglichen Rollen auszufüllen. Wenn in {{< product-c8y-iot >}} bereits ein Benutzer existiert, werden die Rollen weder überschrieben noch aktualisiert.

* **Die Rollen, die in den Regeln oben ausgewählt wurden, werden dem Benutzer bei jedem Login wieder zugewiesen. Alle anderen Rollen bleiben unverändert.** - Wenn aktiviert, wird die dynamische Rechtezuordnung bei jeder Anmeldung verwendet, aber die in der Rechtezuordnungskonfiguration nicht aufgeführten Rollen werden nicht aktualisiert. Nur die Rollen, die in den definierten Rechtezuordnungsregeln aufgeführt sind, werden überschrieben.

![Custom access mapping](/images/benutzerhandbuch/Administration/sso-custom-access-mapping-2.png)

Durch die Auswahl einer der oben genannten beiden Optionen können Administratoren auch die Rollen von SSO-Benutzern in der Benutzerverwaltung bearbeiten. Nähere Informationen finden Sie unter [Administration > Verwalten von Berechtigungen](/benutzerhandbuch/administration-de/#attach-global) im *User Guide*.

Wenn der Benutzer sich mit einem Access Token anmeldet, kann der Benutzername aus einem JWT-Claim abgeleitet werden. Der Name des Claims kann unter **Benutzer-ID** konfiguriert werden.
Die Benutzer-ID kann auf ein beliebiges Top-Level-Feld der Autorisierungstoken-Nutzdaten gesetzt werden, die während des Anmeldeprozesses vom Autorisierungsserver an die Plattform gesendet werden. Wir empfehlen, das Autorisierungstoken in den Audit-Logs zu überprüfen und sicherzustellen, dass das richtige Feld verwendet wird (siehe [Fehlerbehebung](#troubleshooting)).

![User ID configuration](/images/benutzerhandbuch/Administration/sso-custom-userid-config.png)

Wenn das Kontrollkästchen **Konstanten Wert verwenden** aktiviert ist, wird eine konstante Benutzer-ID für alle Benutzer verwendet, die sich über SSO an der {{< product-c8y-iot >}}-Plattform anmelden. Dies bedeutet, dass alle Benutzer, die sich über SSO anmelden, dasselbe Benutzerkonto in der {{< product-c8y-iot >}}-Plattform nutzen. Die Verwendung dieser Option wird nicht empfohlen.

Danach kann das **Benutzerdaten-Mapping** konfiguriert werden:

![User data mappings](/images/benutzerhandbuch/Administration/sso-custom-userdata-mapping.png)

Beim Benutzer-Login können Benutzerdaten wie Vorname, Nachname, E-Mail-Adresse und Telefonnummer auch von JWT-Claims abgeleitet werden. Jedes Feld repräsentiert den Claim-Namen, der zum Abrufen der Daten von JWT verwendet wird. Die Konfiguration des Benutzerdaten-Mappings ist optional und als Admin-Manager können Sie nur die erforderlichen Felder verwenden. Falls die Konfiguration leer ist oder der Claim-Name im JWT-Token nicht gefunden werden kann, werden die Werte in den Benutzerdaten als leer festgelegt.

Mapping für Alias ist nicht verfügbar, da es im Kontext von SSO nicht verwendet wird.

Jedes Access Token wird durch ein Signing-Zertifikat signiert. Aktuell gibt es drei Möglichkeiten, die Signing-Zertifikate zu konfigurieren.

1. Durch Spezifizieren der URL für den öffentlichen Schlüssel des Azure AD-Zertifikats.

 ![Signature verification Azure](/images/benutzerhandbuch/Administration/sso-signature-verification-Azure-AD.png)

2. Durch Spezifizieren der ADFS-Manifest-Adresse (für ADFS 3.0).

 ![Signature verification ADFS](/images/benutzerhandbuch/Administration/sso-signature-verification-ADFS-manifest.png)

3. Durch manuelles Bereitstellen des öffentlichen Schlüssels eines Zertifikats für {{< product-c8y-iot >}}. Eine Zertifikatsdefinition benötigt eine Algorithmus-Information, einen Wert für den öffentlichen Schlüssel und ein Gültigkeitsintervall.

 ![Signature verification Custom](/images/benutzerhandbuch/Administration/sso-signature-verification-custom.png)

4. Durch Spezifizieren der JWKS (JSON Web Key Set)-URI. JWKS ist eine Gruppe von JWK-Objekten, die einen öffentlichen Schlüssel zum Verifizieren von Tokens enthalten, die vom Autorisierungsserver ausgegeben werden.

 ![Signature verification JWKS](/images/benutzerhandbuch/Administration/sso-signature-verification-JWKS.png)


{{< c8y-admon-info >}}
{{< product-c8y-iot >}} unterstützt nur Zertifikate mit RSA-Schlüssel, entweder in Form eines ("n", "e")-Parameter-Paars oder in Form einer "x5c"-Zertifikatskette. Andere Schlüsseltypen (z. B. Elliptic-Curves) werden nicht unterstützt.
{{< /c8y-admon-info >}}

#### Platzhalter
In einigen Feldern können Sie Platzhalter verwenden, die während der Laufzeit von {{< product-c8y-iot >}} aufgelöst werden. Folgende Platzhalter sind verfügbar:

|Platzhalter|Beschreibung|
|:---|:---|
|clientId|Wert des Felds **Client-ID**
|redirectUri| Wert des Felds **Redirect-URI**
|code|Wert, der vom Autorisierungsserver als Antwort auf die Autorisierungsanfrage zurückgegeben wird
|refreshToken| Refresh-Token, das vom Autorisierungsserver nach einer Token-Anfrage zurückgegeben wird

Diese Platzhalter können in Autorisierungsanfragen, Token-Anfragen, Refresh-Anfragen und Abmeldeanfragen in folgenden Feldern verwendet werden:

* URL
* Text
* Kopfzeilen
* Anfrageparameter

Um in einem Feld einen Platzhalter zu verwenden, schließen Sie diesen mit vorangehendem Dollarzeichen in geschweifte Klammern ein:
![Placeholder standalone](/images/benutzerhandbuch/Administration/admin-sso-placeholder-standalone.png)

Platzhalter können auch als Textteile verwendet werden:
![Placeholder text](/images/benutzerhandbuch/Administration/admin-sso-placeholder-text.png)

{{< c8y-admon-info >}}
Platzhalter werden nicht auf Korrektheit geprüft. Jeder nicht erkannte oder falsch geschriebene Platzhalter wird im Text unverarbeitet gelassen.
{{< /c8y-admon-info >}}


### Integration mit Azure AD

Die Integration wurde erfolgreich mit Azure AD getestet. Die Konfigurationsschritte finden Sie unter [https://docs.microsoft.com/de-de/azure/active-directory/develop/v1-protocols-oauth-code](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code).

Die folgenden Schritte verdeutlichen, wie Azure AD (Azure Active Directory) für SSO in {{< product-c8y-iot >}} verwendet werden kann.

{{< c8y-admon-req title="Anforderungen" >}}
Sie benötigen Administrationszugriff auf Ihr Azure AD.
{{< /c8y-admon-req >}}

#### Konfigurieren von Azure AD

Um {{< product-c8y-iot >}} mit Azure AD zu verbinden, müssen Sie in Azure AD eine App-Registrierung erstellen.  

1. Wählen Sie links unter **Manage** die Option **App Registrations** und klicken Sie oben auf **New Registration**.
3. Geben Sie im darauf folgenden Fenster einen Namen für die neue App-Registrierung ein.
4. Wählen Sie unter **Redirect URI type** die Option "Web" und geben Sie die URL zum OAuth-Endpunkt Ihres Mandanten ein, z. B. "https:&#47;/documentation.cumulocity.com/tenant/oauth"*". Sie können diesen Wert von Ihrem {{< product-c8y-iot >}}-Mandanten ableiten. Navigieren Sie zu **Administration** > **Einstellungen** > **Authentifizierung** > **Single-Sign-On**. Die Redirect-URL wird von der Plattform vorgegeben.
5. Klicken Sie auf **Register**, um die App-Registrierung zu erstellen.

Die Übersicht auf der Detailseite Ihrer App-Registrierung enthält mehrere IDs und Endpunkte, die Sie später benötigen, z. B. die Anwendungs-ID (Client-ID) und die Verzeichnis-ID (Mandanten-ID) (für Ihren Mandanten in {{< product-c8y-iot >}}).

![App registration overview](/images/benutzerhandbuch/Administration/admin-AAD-registration.png)

Darüber hinaus erfordert die App-Registrierung ein Secret, das von {{< product-c8y-iot >}} zur Authentifizierung verwendet wird.  

1. Klicken Sie auf der Detailseite Ihrer App-Registrierung links unter **Manage** auf **Certificates & secrets**.
2. Wählen Sie **New client secret**.
3. Geben Sie eine Beschreibung ein und wählen Sie ein Ablaufdatum.
4. Klicken Sie auf **Add**, um das Secret hinzuzufügen.  

{{< c8y-admon-caution >}}
- Kopieren Sie den Wert des neuen Secrets an einen anderen Ort. Sobald Sie die Seite verlassen haben, ist es nicht mehr sichtbar.
- Die Secret-Zeichenkette darf nicht das Zeichen "=" enthalten, da dieses bei der späteren Verwendung in einer URL zu Konflikten führen kann. Erstellen Sie gegebenenfalls eine neue Secret-Zeichenkette.  
{{< /c8y-admon-caution >}}

Optional können Sie in Azure AD einen Benutzer erstellen, den Sie mit {{< product-c8y-iot >}} verwenden möchten.

#### Konfigurieren von SSO für Azure AD in Cumulocity IoT

Navigieren Sie in der Anwendung Administration zu **Einstellungen > Authentifizierung** und wechseln Sie zur Registerkarte **Single-Sign-On**.

Senden Sie zum Abrufen der entsprechenden Informationen eine GET-Anfrage an:

<code>https://login.microsoftonline.com/&lt;Directory tenant ID&gt;/.well-known/openid-configuration</code>

Die Antwort sieht so aus:

```
  {
      "token_endpoint": "https://login.microsoftonline.com/4d17551b-e234-4e18-9593-3fe717102dfa/oauth2/token",
      "token_endpoint_auth_methods_supported": [
          "client_secret_post",
          "private_key_jwt",
          "client_secret_basic"
      ],
      "jwks_uri": "https://login.microsoftonline.com/common/discovery/keys",
      "response_modes_supported": [
          "query",
          "fragment",
          "form_post"
      ],
      "subject_types_supported": [
          "pairwise"
      ],
      "id_token_signing_alg_values_supported": [
          "RS256"
      ],
      "response_types_supported": [
          "code",
          "id_token",
          "code id_token",
          "token id_token",
          "token"
      ],
      "scopes_supported": [
          "openid"
      ],
      "issuer": "https://sts.windows.net/4d17551b-e234-4e18-9593-3fe717102dfa/",
      "microsoft_multi_refresh_token": true,
      "authorization_endpoint": "https://login.microsoftonline.com/4d17551b-e234-4e18-9593-3fe717102dfa/oauth2/authorize",
      "device_authorization_endpoint": "https://login.microsoftonline.com/4d17551b-e234-4e18-9593-3fe717102dfa/oauth2/devicecode",
      "http_logout_supported": true,
      "frontchannel_logout_supported": true,
      "end_session_endpoint": "https://login.microsoftonline.com/4d17551b-e234-4e18-9593-3fe717102dfa/oauth2/logout",
      "claims_supported": [
          "sub",
          "iss",
          "cloud_instance_name",
          "cloud_instance_host_name",
          "cloud_graph_host_name",
          "msgraph_host",
          "aud",
          "exp",
          "iat",
          "auth_time",
          "acr",
          "amr",
          "nonce",
          "email",
          "given_name",
          "family_name",
          "nickname"
      ],
      "check_session_iframe": "https://login.microsoftonline.com/4d17551b-e234-4e18-9593-3fe717102dfa/oauth2/checksession",
      "userinfo_endpoint": "https://login.microsoftonline.com/4d17551b-e234-4e18-9593-3fe717102dfa/openid/userinfo",
      "kerberos_endpoint": "https://login.microsoftonline.com/4d17551b-e234-4e18-9593-3fe717102dfa/kerberos",
      "tenant_region_scope": "EU",
      "cloud_instance_name": "microsoftonline.com",
      "cloud_graph_host_name": "graph.windows.net",
      "msgraph_host": "graph.microsoft.com",
      "rbac_url": "https://pas.windows.net"
  }
```


Geben Sie nun in der Konfiguration die folgenden Werte ein:

|Azure|{{< product-c8y-iot >}} |Wert
|:---|:---|:---|
|Login URL; OpenID config; Beginning of token endpoint| Azure AD-Adresse|Adresse Ihres Azure AD-Mandanten, z. B. "https:&#47;/login.microsoftonline.com"  
|Home > Overview > Primary Domain| Mandant| &lt;directoryName&gt;.onmicrosoft.com, z. B. "admtest.onmicrosoft.com"
|OpenID config "issuer"| Token-Issuer| Token-Issuer-Wert im Format einer HTTP-Adresse: "https:&#47;/sts.windows.net/&lt;Verzeichnis-Mandanten-ID&gt;/". Beachten Sie, dass dies nur mit Schrägstich am Ende funktioniert.
|App registration > &lt;app&gt; > Application (client) ID| Anwendungs-ID| z. B. "7fd1ed48-f4b6-4362-b0af-2b753bb1af2b"
|Redirect-URI| Adresse Ihres {{< product-c8y-iot >}}-Mandanten, gefolgt von /tenant/oauth
|App registration - &lt;app&gt; > Certificates & secrets > Value | Client-Secret| Azure AD-Client-Secret, z. B. "hE68Q~uC1.BlSzGJSDC3_UEFvvyIZvRcCxbvV345"
|Aus der OpenID-Konfiguration | URL für den öffentlichen Schlüssel|"https:&#47;/login.microsoftonline.com/common/discovery/keys" oder "https:&#47;/login.microsoftonline.com/<Verzeichnis-Mandanten-ID>/discovery/keys"

Optional kann Single Logout konfiguriert werden:

|Feld|Beschreibung|
|:---|:---|
|Nach Abmeldung weiterleiten| Aktiviert Single Logout, indem der Benutzer nach dem Abmelden zum Abmelde-Endpunkt des Autorisierungsservers weitergeleitet wird.
|Redirect-URL| Adresse, an die der Benutzer weitergeleitet werden soll, nachdem er sich vom Autorisierungsserver erfolgreich abgemeldet hat.

Nachdem Sie SSO in {{< product-c8y-iot >}} konfiguriert haben, können Sie versuchen, sich anzumelden. Wenn für den Benutzer noch keine Rechtezuordnung vorliegt, kann ein Fehler des Typs "Zugriff verweigert" gemeldet werden. In den Audit-Logs (**Administration** > **Konten** > **Audit-Logs**) sollten jedoch ein "Benutzer-Login"-Ereignis und ein JSON-Web-Token zu sehen sein.

Der Inhalt sieht folgendermaßen aus:

```
{
    "typ": "JWT",
    "alg": "RS256",
    "x5t": "2ZQpJ3UpbjAYXYGaXEJl8lV0TOI",
    "kid": "2ZQpJ3UpbjAYXYGaXEJl8lV0TOI"
} {
    "aud": "7fd1ed48-f4b6-4362-b0af-2b753bb1af2b",
    "iss": "https://sts.windows.net/4d17551b-e234-4e18-9593-3fe717102dfa/",
    "iat": 1660815959,
    "nbf": 1660815959,
    "exp": 1660820080,
    "acr": "1",
    "aio": "ASQA2/8TAAAAg0xPUeu6HKAlgK3vZJsW8TdejlNB3BGSz4XFmJLzPt0=",
    "amr": [
        "pwd"
    ],
    "appid": "7fd1ed48-f4b6-4362-b0af-2b753bb1af2b",
    "appidacr": "1",
    "family_name": "Doe",
    "given_name": "Jane",
    "ipaddr": "51.116.186.93",
    "name": "Jane Doe",
    "oid": "afbff765-592e-4ae1-9334-b968dad59c84",
    "rh": "0.AXkAG1UXTTTiGE6Vkz_nFxAt-kjt0X-29GJDsK8rdTuxryuUAAw.",
    "scp": "openid User.Read User.Read.All User.ReadBasic.All",
    "sub": "zRTnTukAjU11ME1aqiPMOdwk9jVNmInXbeuoUr_3cYk",
    "tid": "4d17551b-e234-4e18-9593-3fe717102dfa",
    "unique_name": "jane@admtest.onmicrosoft.com",
    "upn": "jane@admtest.onmicrosoft.com",
    "uti": "IcTqpKPIA0G_P1Lyw6xBAA",
    "ver": "1.0"
} [
    256 crypto bytes
]
```

In der gleichen Weise, wie für die [benutzerdefinierte Vorlage](#custom-template) beschrieben, können Sie nun mithilfe der Claims Benutzerattribute zuordnen und Berechtigungen erteilen.



### Integration mit Keycloak

#### Globale Abmeldefunktion (verfügbar für Keycloak ab Version 12.0.0)

Die Integration mit Keycloak gibt Administratoren die Möglichkeit, eine globale Abmeldefunktion auf Basis von OpenID Connect zu verwenden. Ein Ereignis vom Keycloak-Autorisierungsserver wird an alle Anwendungen (einschließlich der {{< product-c8y-iot >}}-Plattform) gesendet, und zwar mit einem Logout-Token, das in gleicher Weise verifiziert wird wie das Token im Anmeldeprozess. Diese Funktion ermöglicht die Beendigung von Sitzungen auf beiden Seiten - Anwendungen und Keycloak - für den jeweiligen Benutzer.

So konfigurieren Sie die globale Abmeldefunktion:

1. Gehen Sie zur Administratorkonsole.
2. Wählen Sie das Realm aus, das in der SSO-Konfiguration für den Mandanten verwendet wird.
3. Navigieren Sie im Abschnitt **Configure** zu **Clients**.
4. Wählen Sie den Client aus, der in der SSO-Konfiguration verwendet wird.
5. Setzen Sie das Feld **Backchannel Logout URL** auf "https://mytenant.{{< domain-c8y >}}/user/logout/oidc".

So verwenden Sie die globale Abmeldefunktion:

1. Gehen Sie zur Administratorkonsole.
2. Wählen Sie das Realm aus, das in der SSO-Konfiguration für den Mandanten verwendet wird.
3. Navigieren Sie im Abschnitt **Manage** zu **User**.
4. Wählen Sie den jeweiligen Benutzer aus.
5. Navigieren Sie im Abschnitt **Manage** zur Registerkarte **Sessions** und klicken Sie auf **Logout**.

#### Funktion zum Abmelden aller Benutzer

Keycloak bietet auch eine Funktion, mit der Administratoren sämtliche SSO-Benutzer abmelden können.

So konfigurieren Sie die Funktion zum Abmelden aller Benutzer:

1. Gehen Sie zur Administratorkonsole.
2. Wählen Sie das Realm aus, das in der SSO-Konfiguration für den Mandanten verwendet wird.
3. Navigieren Sie im Abschnitt **Configure** zu **Clients**.
4. Wählen Sie den Client aus, der in der SSO-Konfiguration verwendet wird.
5. Setzen Sie das Feld **Admin URL** auf "https://mytenant.{{< domain-c8y >}}/user/keycloak".

So verwenden Sie die Funktion zum Abmelden aller Benutzer:

1. Gehen Sie zur Administratorkonsole.
2. Wählen Sie das Realm aus, das in der SSO-Konfiguration für den Mandanten verwendet wird.
3. Navigieren Sie im Abschnitt **Manage** zur Registerkarte **Sessions** und klicken Sie auf **Logout all**.

Beachten Sie, dass das Abmeldeereignis für alle Benutzer nur im Geltungsbereich eines einzigen Realms ausgeführt wird.
Zudem wird es nur an die Mandanten gesendet, bei denen der Client, der als Konfiguration für die SSO-Funktion dient, den korrekten **Admin URL**-Wert aufweist.

In der Registerkarte **Session** kann der Keycloak-Administrator auch überprüfen, wie viele aktive Sitzungen auf dem jeweiligen Client existieren, und abschätzen, wie viele Mandanten und Benutzer von dem Abmeldeereignis betroffen sind.

Um festzustellen, ob das Abmeldeereignis für alle Benutzer oder einen einzelnen Benutzer vom Mandanten empfangen wurde, kann der {{< product-c8y-iot >}}-Administrator überprüfen, ob Informationen zum Abmeldeereignis in den Audit-Logs vorliegen. Die Audit-Logs sind in der Anwendung Administration unter **Accounts** in der Registerkarte **Audit-Logs** verfügbar.

#### Troubleshooting

Es kann besonders hilfreich sein, den Inhalt des an die Plattform gesendeten Autorisierungs-Tokens zu überprüfen, da einige seiner Felder die Informationen enthalten, die für die oben beschriebene korrekte Konfiguration benötigt werden.

In der "Administration-Anwendung" können Sie nach Klicken auf **Konten** > **Audit-Logs** nach der Kategorie "Single-Sign-On" filtern und nach den Einträgen "Json web token claims" suchen.

Die Kontexte des Tokens werden im JSON-Format dargestellt.

![Audit token content](/images/benutzerhandbuch/Administration/admin-sso-audit-token.png)
