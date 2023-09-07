---
layout: redirect
title: Ändern von Einstellungen
weight: 70
---

Im Menü **Einstellungen** können Administratoren verschiedene Einstellungen des Kontos verwalten:

- [Authentifizierungseinstellungen](#authentication) und [Single-Sign-On](#configuring-single-sign-on) konfigurieren.
- [Anwendungseinstellungen](#default-app) ändern.
- Die [Attributsbibliothek](#properties) verwalten.
- [Zugangsdaten für den SMS-Anbieter](#sms-provider) bereitstellen.
- [Konnektivitätseinstellungen](#connectivity) verwalten.

<a name="authentication"></a>
### Ändern von Authentifizierungseinstellungen

Klicken Sie auf **Authentifizierung** im Menü **Einstellungen**, wenn Sie die Anmelde- oder TFA-Einstellungen ändern möchten.

![Authentication settings](/images/benutzerhandbuch/Administration/admin-settings-authentication.png)

{{< c8y-admon-info >}}
Um den Menüeintrag **Authentifizierung** sehen zu können, benötigen Sie die ADMIN-Berechtigung "Mandanten-Management" (`ROLE_TENANT_ADMIN` oder `ROLE_TENANT_MANAGEMENT_ADMIN`).
{{< /c8y-admon-info >}}

#### Login-Einstellungen

Im Feld **Bevorzugter Login-Modus** können Sie eine der folgenden Optionen wählen:

* OAI-Secure - empfohlene Option, da sie durch Autorisierungs-Tokens als Identitätsnachweis des Benutzers ein hohes Maß an Sicherheit bietet. Standard-Anmeldemodus beim Anlegen neuer Mandanten. Dieser Modus ist eine Erweiterung der früheren Authentifizierung "OAuth Internal" (verfügbar vor 10.13.0).
* Basic Auth - sollte nur aus bestimmten Kompatibilitätsgründen gewählt werden, da diese Option nur minimale Sicherheit bietet.
* Single-Sign-On-Weiterleitung - kann nur gewählt werden, wenn SSO konfiguriert ist. Bei Auswahl dieser Option werden die Login-Optionen "Basic Auth" und "OAI-Secure" entfernt.

Dieser Anmeldemodus wird von den Anwendungen der Plattform als Standardmethode zum Authentifizieren von Benutzern verwendet. Die Geräteauthentifizierung bleibt unverändert.

{{< c8y-admon-important title="Wichtig" >}}
Immer wenn Sie den Anmeldemodus ändern, werden Sie gezwungen, sich abzumelden. Andere Benutzer müssen sich ab- und wieder anmelden, damit die Änderung angewendet wird.
{{< /c8y-admon-important >}}

Im Feld **Gültigkeitsdauer des Passworts** können Sie die Gültigkeit von Benutzerpasswörtern beschränken, indem Sie die Anzahl der Tage eingeben, nach der Benutzer ihre Passwörter ändern müssen. Wenn Sie keine Passwortänderung erzwingen möchten, verwenden Sie "0" für die uneingeschränkte Gültigkeit von Passwörtern (Standardwert).

{{< c8y-admon-info >}}
Die Begrenzung der Passwort-Gültigkeitsdauer gilt für Benutzer mit der Rolle "devices". Sie verhindert, dass Gerätepasswörter ablaufen.
{{< /c8y-admon-info >}}

Standardmäßig können Benutzer jedes Passwort verwenden, das 8 Zeichen oder mehr enthält. Wenn Sie **Verwenden von starken (grünen) Passwörtern erzwingen** auswählen, müssen die Benutzer starke Passwörter verwenden, wie unter [Erste Schritte > Benutzeroptionen und -einstellungen > So ändern Sie Ihr Passwort](/benutzerhandbuch/getting-started-de/#change-password) beschrieben.

{{< c8y-admon-info >}}
Passwort-Gültigkeitsdauer und Passwortstärke sind möglicherweise nicht editierbar, falls dies vom Plattformadministrator so konfiguriert wurde.
{{< /c8y-admon-info >}}

<a name="basic-auth-restrictions"></a>
#### Einschränkungen bei "Basic Auth"

Auch wenn für die Benutzer die Authentifizierung "OAI-Secure" konfiguriert wird, bleibt die Basisauthentifizierung für Geräte und Microservices, die die Plattform nutzen, verfügbar. Um ein höheres Maß an Sicherheit zu erzielen, kann die Basisauthentifizierung eingeschränkt werden.

Mit dem Umschalter **Nicht für Web-Browser zugelassen** können Sie die Verwendung der Basisauthentifizierung in Webbrowsern unterbinden. Zudem können Sie die folgenden Parameter festlegen:

* **Vertrauenswürdige Benutzer-Agenten** - Diese Liste ist standardmäßig leer. Wenn ein Benutzer-Agent hinzugefügt wird, werden alle HTTP-Anfragen akzeptiert, die diesen Eintrag in der Kopfzeile `Benutzer-Agenten` enthalten und ein gültiges Basisauthentifizierungsdatum aufweisen.
* **Unzulässige Benutzer-Agenten** - Diese Liste ist standardmäßig leer. Wenn ein Benutzer-Agent hinzugefügt wird, werden alle HTTP-Anfragen abgelehnt, die diesen Eintrag in der Kopfzeile `Benutzer-Agenten` enthalten und Basisauthentifizierung verwenden.

{{< c8y-admon-info >}}
Wird der Benutzer-Agent in der Liste der vertrauenswürdigen oder verbotenen Benutzer-Agenten nicht gefunden, versucht {{< product-c8y-iot >}} zu überprüfen, ob es sich um einen Webbrowser handelt, der eine externe Bibliothek verwendet.
{{< /c8y-admon-info >}}

#### OAI-Secure

OAI-Secure ist eine sicherere Alternative zum Basic Auth-Modus, der auch die Anmeldung mittels Benutzername und Passwort unterstützt. Im OAI-Secure-Modus werden die Zugangsdaten bei der ersten Anfrage durch ein JWT-Token ersetzt, das als Cookie im Webbrowser gesetzt oder im Antworttext zurückgegeben wird. Je nach Konfiguration kann OAI-Secure volle Sitzungsverwaltung unterstützen oder aber als standardmäßige JWT-Authentifizierung fungieren, wenn die Lebensdauer der Benutzersitzung durch die Ablaufzeit des Tokens begrenzt ist.

##### OAI-Secure ohne Konfiguration für die Sitzungsverwaltung (Sitzungskonfiguration deaktiviert)

Wenn keine sitzungsbezogene Konfiguration vorliegt, gibt OAI-Secure ein JWT-Token mit einer bestimmten Lebensdauer heraus. Wenn das Token abläuft, ist der Benutzer gezwungen, sich erneut anzumelden, da die Token-Aktualisierung nicht unterstützt wird. Bei kurzer Token-Lebensdauer ist dieses Verhalten für den Benutzer äußerst unpraktisch, da er sich häufig neu anmelden muss.  

##### OAI-Secure mit Konfiguration der Sitzungsverwaltung (Sitzungskonfiguration aktiviert)

Die Verwendung von OAI-Secure mit aktivierter Sitzungskonfiguration ist praktischer und sicherer. So erzielen Sie ein Verhalten, das der Authentifizierung auf Basis von HTTP-Sitzungen ähnelt.

Das OAI-Secure-Token fungiert als Client-seitige Sitzungs-ID (Webbrowser). Eine solche im Cookie gespeicherte Token-ID kann eine vorkonfigurierte kurze Lebensdauer haben. Die {{< product-c8y-iot >}}-Plattform ist dann dafür verantwortlich, die Sitzungs-ID ohne eine Benutzerinteraktion zu erneuern. Es reicht aus, dass die Benutzeraktion den Webbrowser dazu veranlasst, eine Anfrage an {{< product-c8y-iot >}} zu senden. {{< product-c8y-iot >}} kann dann prüfen, ob die Erneuerung der Sitzungs-ID erfolgen soll, und gegebenenfalls die Operation durchführen. {{< product-c8y-iot >}} bietet umfangreiche Konfigurationsmöglichkeiten für dieses Verhalten, so dass die Mandantenadministratoren die Konfiguration nach ihren Wünschen anpassen können.

Wenn die Option **Sitzungskonfiguration verwenden** aktiviert ist, können folgende Einstellungen vom Mandantenadministrator auf Mandantenebene konfiguriert werden:

<table>
<col width="200">
<col width="600">
<col width="200">
<thead>
<tr>
<th style="text-align:left">Feld</th>
<th style="text-align:left">Beschreibung</th>
<th style="text-align:left">Standardwert</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Validierung des Benutzer-Agenten erforderlich</td>
<td style="text-align:left">Wenn aktiviert, werden die vom Benutzer-Agenten gesendeten Kopfzeilen von aufeinanderfolgenden Anfragen im Geltungsbereich einer Sitzung verglichen und eine Anfrage mit geändertem Benutzer-Agenten wird nicht autorisiert.</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">Absolute Zeitüberschreitung der Sitzung</td>
<td style="text-align:left">Definiert den maximalen Zeitraum, den der Benutzer {{< product-c8y-iot >}} verwenden kann, ohne sich neu authentifizieren zu müssen.</td>
<td style="text-align:left">14 Tage</td>
</tr>
<tr>
<td style="text-align:left">Zeitüberschreitung bei der Sitzungserneuerung</td>
<td style="text-align:left">Es wird erwartet, dass diese viel kürzer ist als die absolute Zeitüberschreitung. Definiert die Zeit, nach der {{< product-c8y-iot >}} versucht, ein neues Token (Sitzungs-ID) bereitzustellen. Die Erneuerung kann nur stattfinden, wenn {{< product-c8y-iot >}} eine HTTP-Anfrage von einem Client mit einem nicht abgelaufenen Token erhält und der Zeitraum zwischen dem Erhalt des Tokens und der Ausführung der Anfrage größer als die Zeitüberschreitung bei der Erneuerung ist.</td>
<td style="text-align:left">1 Tag</td>
</tr>
<tr>
<td style="text-align:left">Maximale Anzahl der parallelen Sitzungen pro Benutzer</td>
<td style="text-align:left">Definiert die maximale Anzahl der Sitzungen, die von einem Benutzer gestartet werden können (z. B. auf verschiedenen Maschinen oder Browsern). Wenn ein Benutzer dieses Limit überschreitet, wird die älteste Sitzung beendet und der Benutzer wird auf dem jeweiligen Gerät abgemeldet.</td>
<td style="text-align:left">5 Sitzungen</td>
</tr>
<tr>
<td style="text-align:left">Token-Laufzeit</td>
<td style="text-align:left">Definiert, wie lange ein Token aktiv ist. Der Benutzer kann nur mit einem gültigen Token auf {{< product-c8y-iot >}} zugreifen. Diese Konfigurationsoption ist stets verfügbar, unabhängig von der Sitzungskonfiguration. Siehe <a href="#token-settings" class="no-ajaxy">Token-Erzeugung mit OAI-Secure</a> unten. </td>
<td style="text-align:left">2 Tage</td>
</tr>

</tbody>
</table>

{{< c8y-admon-info >}}
Die Zeitparameter sollten in folgender Weise voneinander abhängig sein: Zeitüberschreitung bei der Erneuerung < Token-Laufzeit < absolute Zeitüberschreitung.
Außerdem sollte die Zeitüberschreitung bei der Erneuerung etwa die Hälfte der Token-Laufzeit betragen.      

Somit werden für einen Standard-Anwendungsfall folgende Einstellungen für OAI-Secure empfohlen:   

 * **Absolute Zeitüberschreitung der Sitzung**: 28 800 Sekunden (8 Stunden)        
 * **Zeitüberschreitung bei der Sitzungserneuerung**: 2700 Sekunden (45 Minuten)        
 * **Token-Laufzeit**: 5400 Sekunden (90 Minuten)

In solchen Konfigurationen liegt die Leerlauf-Zeitüberschreitung im Bereich von 45 bis 90 Minuten, je nachdem, wann die letzte Aktivität für die Sitzung stattfand.
{{< /c8y-admon-info >}}

Während der Erneuerung des Sitzungs-Tokens wird das vorherige Token zurückgesetzt und durch ein neues ersetzt. Der Parameter `Verzögerung bei Erneuerung des Tokens` definiert die Verzögerung, die dafür sorgt, dass der Prozess für den Benutzer reibungslos und nicht störend verläuft. In diesem Zeitraum (standardmäßig 1 Minute) ist das alte Token weiterhin gültig. Somit werden sowohl das alte als auch das neue Token von {{< product-c8y-iot >}} akzeptiert. Dieser Parameter ist nur auf Plattform-Ebene konfigurierbar und kann vom Mandantenadministrator nicht geändert werden.


<a name="token-settings"></a>

#### Token-Erzeugung mit OAI-Secure

OAI-Secure basiert im Wesentlichen auf JWT, das in einem Browser-Cookie gespeichert wird. Außerdem kann OAI-Secure zum Erzeugen eines JWT im Antworttext verwendet werden.
Die Lebensdauer der Tokens und des Cookies ist über Mandantenoptionen konfigurierbar, die der Kategorie `oauth.internal` angehören.

##### Lebensdauerkonfiguration des im Cookie gespeicherten JWT

Im Browser-Cookie gespeicherte JWT-Tokens haben standardmäßig eine Gültigkeitsdauer von zwei Wochen.
Dies kann mit Mandantenoptionen geändert werden:
 - category: `oauth.internal`;
 - key: `basic-token.lifespan.seconds`;

Der minimal zulässige Wert ist 5 Minuten.

##### Lebensdauerkonfiguration von Cookies

Cookies zum Speichern eines JWT-Tokens in einem Browser haben eine eigene Gültigkeitsdauer, die mit Mandantenoptionen geändert werden kann:
- category: `oauth.internal`;
- key: `basic-user.cookie.lifespan.seconds`;

Der Standardwert ist zwei Wochen. Damit das Cookie gelöscht wird, wenn der Benutzer den Browser schließt, geben Sie hier einen beliebigen negativen Wert an.

##### Lebensdauerkonfiguration von JWT im Antworttext

Die Lebensdauer von JWT-Tokens, die im Antworttext erzeugt werden, wird mit den folgenden Mandantenoptionen konfiguriert:
- category: `oauth.internal`;
- key: `body-token.lifespan.seconds`;

Weitere Informationen finden Sie unter [Tenant API](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#tag/Tenant-API) in {{< openapi >}}.

{{< c8y-admon-info >}}
Falls die externe Kommunikation zum {{< management-tenant-de >}}en blockiert wurde, kann nur auf sichere Weise auf den Mandanten zugegriffen werden (z. B. über SSH-Tunnel). Dies bedeutet, dass Sie ebenso gut die Basisauthentifizierung verwenden können. Darüber hinaus ist es nicht möglich, Single-Sign-On zu verwenden, da die vom externen Autorisierungsserver kommende Kommunikation ebenfalls blockiert ist. Daher wird automatisch die Authentifizierungsmethode "Basisauthentifizierung" eingestellt, wenn der {{< management-tenant-de >}} für das Blockieren der externen Kommunikation konfiguriert ist.
{{< /c8y-admon-info >}}

#### TFA-Einstellungen

Aktivieren Sie die Checkbox **Zwei-Faktor-Authentifizierung zulassen**, wenn TFA bei Ihrem Mandanten zulässig sein soll (nur für Administratoren möglich).

Sie können eine der folgenden Optionen wählen:

* **SMS-basiert**: unterstützt die folgenden Einstellungen:
	- **Token-Gültigkeit begrenzen für** - Dauer jeder Sitzung in Minuten. Wenn die Sitzung abgelaufen ist oder ein Benutzer sich abmeldet, muss der Benutzer einen neuen Bestätigungscode eingeben.
  - **Bestätigungscode-Gültigkeit begrenzen für** - Hier können Sie die Dauer jedes per SMS zugesandten Bestätigungscodes festlegen. Wenn der Bestätigungscode abgelaufen ist, muss der Benutzer einen neuen Bestätigungscode anfordern, um sich anmelden zu können.
  

{{< c8y-admon-info >}}
Für den Mandanten muss ein SMS-Gateway-Microservice konfiguriert werden. Es versteht sich von selbst, dass nur Benutzer, denen eine gültige Telefonnummer zugewiesen ist, diese Funktionalität nutzen können.
{{< /c8y-admon-info >}}

* **Google Authenticator** (zeitabhängiges Einmal-Passwort = TOTP) zur Unterstützung der folgenden Einstellung:
	 - **TOTP-Zwei-Faktor-Authentifizierung für alle Benutzer erzwingen** - Wenn diese Option aktiviert ist, werden alle Benutzer beim Anmelden zum Einrichten Ihrer TFA gezwungen. Andernfalls kann jeder einzelne Benutzer entscheiden, ob die Aktivierung erfolgen soll oder nicht.

{{< c8y-admon-info >}}
Die TOTP-Methode ist nur im Anmeldemodus "OAI-Secure" verfügbar.
{{< /c8y-admon-info >}}

Klicken Sie auf **TFA-Einstellungen speichern**, um Ihre Einstellungen zu speichern.

{{< c8y-admon-important title="Wichtig" >}}
Immer wenn Sie die TFA-Methode ändern, werden Sie gezwungen, sich abzumelden. TFA-Einstellungen der Benutzer werden gelöscht und müssen erneut konfiguriert werden.
{{< /c8y-admon-important >}}

{{< c8y-admon-info >}}
Benutzer mit der Rolle "devices" sind von TFA und TOTP ausgeschlossen. Dies gilt auch dann, wenn TOTP für alle Benutzer erzwungen wird.
{{< /c8y-admon-info >}}

<a name="default-app"></a>
### Ändern von Anwendungseinstellungen

Klicken Sie auf **Anwendung**, um Anwendungseinstellungen zu bearbeiten.

![Application settings](/images/benutzerhandbuch/Administration/admin-settings-application.png)

Unter **Standardanwendung** können Sie eine Standardanwendung für alle Benutzer Ihres Mandanten festlegen. Wenn auf die Plattform z. B. nur über den Domain-Namen ohne Erwähnung einer bestimmten Anwendung zugegriffen wird, wird die als Standardanwendung gewählte Anwendung als Standard-Landing-Page verwendet.

{{< c8y-admon-info >}}
Alle Benutzer müssen Zugriff auf diese Anwendung haben.
{{< /c8y-admon-info >}}

Unter **Zugriffskontrolle** können Administratoren CORS (Cross-Origin Resource Sharing) über die {{< product-c8y-iot >}} API aktivieren.

Die Einstellung **Zulässige Domain** ermöglicht es Ihren JavaScript-Webanwendungen, direkt mit REST APIs zu kommunizieren.

* Geben Sie ein Sternsymbol "*" ein, um die Kommunikation mit allen Hosts zu erlauben.
* Geben Sie `http://my.host.com`, `http://myother.host.com` ein, um Anwendungen aus `http://my.host.com` und `http://myother.host.com` die Kommunikation mit der Plattform zu erlauben.

Weitere Information erhalten Sie unter [http://enable-cors.org](http://enable-cors.org).

<a name="properties"></a>
### Verwalten der Attributsbibliothek

Klicken Sie auf **Attributsbibliothek** im Menü **Einstellungen**, um Stammdaten-Objekten, Alarmen, Ereignissen und Mandanten benutzerdefinierte Attribute hinzuzufügen.

![Properties library](/images/benutzerhandbuch/Administration/admin-settings-properties-library.png)

Mit benutzerdefinierten Attributen können Sie das Datenmodell der in {{< product-c8y-iot >}} integrierten Objekte erweitern. Sie können die folgenden eigenen Attribute erstellen:

- Eigene Stammdatenattribute werden verwendet, um das Stammdatenmodell zu erweitern. Sie können in den Widgets "Asset-Tabelle" und "Asset-Attribute" genutzt werden.
- Eigene Mandantenattribute sind bei der Erstellung von Mandanten verfügbar. Die eigenen Attribute können unter Untermandanten in der Registerkarte Benutzerdefinierte Attribute bearbeitet werden. Außerdem können diese Attribute in den Nutzungsstatistiken eingesehen und exportiert werden.
- Benutzerdefinierte Alarm- und Ereignisattribute können Ihren Berichten als eigene Felder hinzugefügt werden und sind in der Seite **Exporte** in der Cockpit-Anwendung verfügbar.

{{< c8y-admon-info >}}
Benutzerdefinierte Attribute sind für alle authentifizierten Benutzer des Mandanten sichtbar, unabhängig von ihrer Stammdatenrollen-Berechtigung.
{{< /c8y-admon-info >}}

<a name="add-property"></a>
#### So fügen Sie ein benutzerdefiniertes Attribut hinzu

1. Wählen Sie die Registerkarte für das gewünschte Attribut und klicken Sie auf **Attribut hinzufügen**.

2. Geben Sie im folgenden Dialog einen eindeutigen Namen als Bezeichnung und eine Beschriftung für das Attribut ein und wählen Sie einen Datentyp aus der Auswahlliste.

3. Wählen Sie außerdem Validierungsregeln für das neue Attribut aus:

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
<td style="text-align:left">Wenn ausgewählt, muss das Attribut bereitgestellt werden, z. B. beim Erstellen eines Alarms. Nicht verfügbar beim Attributtyp "Boolean".</td>
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

SMS werden für verschiedene Funktionen der Plattform wie [Zwei-Faktor-Authentifizierung](/benutzerhandbuch/administration-de#tfa) und Benachrichtigungen verwendet, z. B. bei Alarmen.

Durch Bereitstellung Ihrer Zugangsdaten ermöglichen Sie die Nutzung von Plattform-Funktionen, die SMS-Dienste verwenden.

#### So geben Sie die Zugangsdaten für den SMS-Anbieter ein

1. Klicken Sie auf **SMS-Anbieter** im Menü **Einstellungen**.

{{< c8y-admon-info >}}
Um die SMS-Anbieter-Konfiguration einsehen zu können, benötigen Sie die Berechtigung SMS LESEN. Um die SMS-Anbieter-Konfiguration ändern zu können, benötigen Sie die Berechtigung SMS ADMIN.
{{< /c8y-admon-info >}}

2. Wählen Sie auf der Seite **SMS-Anbieter** einen der verfügbaren SMS-Anbieter aus der Auswahlliste **SMS-Anbieter**. Sie können mit der Eingabe beginnen, um Elemente zu filtern und Ihren bevorzugten Anbieter leichter zu finden.

3. Geben Sie im daraufhin angezeigten Dialog die erforderlichen Zugangsdaten und Attribute ein oder legen Sie optionale Einstellungen fest, die sich je nach gewähltem Anbieter unterscheiden.

4. Klicken Sie auf **Speichern**, um Ihre Einstellungen zu speichern.

{{< c8y-admon-info >}}
OpenIT betreut keine neuen Kunden mehr und ist dabei, das Geschäft mit SMS-Anbietern einzustellen. Wir empfehlen Ihnen daher, einen der anderen SMS-Anbieter zu wählen.
{{< /c8y-admon-info >}}


<a name="connectivity"></a>
### Verwalten der Konnektivitätseinstellungen

Auf der Seite **Connectivity** können Sie Zugangsdaten für verschiedene Anbieter verwalten. Zum Hinzufügen oder Ersetzen von Zugangsdaten sind ADMIN-Berechtigungen erforderlich.

Derzeit können folgende Anbietereinstellungen festgelegt werden:

- [Actility LoRa](/protocol-integration/lora-actility)
- [Sigfox](/protocol-integration/sigfox)
- [SIM](/benutzerhandbuch/device-management-de/#connectivity)

#### So können Sie Zugangsdaten bereitstellen oder ersetzen

1. Wechseln Sie zur Registerkarte Ihres gewünschten Anbieters.
2. Geben Sie die URL des Anbieters ein.
3. Geben Sie die Zugangsdaten Ihrer Anbieterplattform ein. Je nach Anbieter handelt es sich hierbei entweder um Zugangsdaten für Ihr Konto auf der Anbieterplattform oder um die Zugangsdaten, mit denen Sie sich auf der {{< product-c8y-iot >}}-Konnektivitätsseite registrieren können. Diese werden in Ihrem Konto in der Anbieter-Plattform angezeigt.
4. Klicken Sie abschließend auf **Speichern**, um Ihre Einstellungen zu speichern.

Je nach gewähltem Anbieter können zusätzliche Felder vorhanden sein, die in der Dokumentation des entsprechenden Agents erläutert werden, siehe [Protocol Integration Guide](/protocol-integration/overview/).