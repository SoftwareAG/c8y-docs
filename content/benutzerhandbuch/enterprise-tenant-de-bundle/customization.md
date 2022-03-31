---
aliases:
- /benutzerhandbuch/enterprise-edition-de/#customization
layout: redirect
title: Anpassen der Plattform
weight: 40
---

Mit dem {{< enterprise-tenant-de >}} von {{< product-c8y-iot >}} können Sie verschiedene Aspekte Ihrer Plattform individuell nach Ihren Bedürfnissen anpassen.

Neben verschiedenen [Konfigurationseinstellungen](#configuration) können Sie auch Ihr eigenes [Branding](#branding) und Ihren eigenen [Domain-Namen](#domain-name) verwenden.

Klicken Sie auf **{{< enterprise-tenant-de >}}** im Menü **Einstellungen**, um zu diesen Einstellungen zu gelangen.

![Custom settings](/images/benutzerhandbuch/enterprise-tenant/et-custom-settings.png)

<a name="configuration"></a>
### Konfiguration

>**Info:** Bei einigen Attributen können Sie E-Mail-Templates für verschiedene Zwecke konfigurieren. Beachten Sie, dass die entsprechenden E-Mails mit dem Content-Typ "text/html" gesendet werden.

Die folgenden Platzhalter sind in der Registerkarte **Konfiguration** zu finden:

|Platzhalter|Beschreibung|
|:---|:---|
|{host}|Der Wert dieses Platzhalters ist "https://" + "&lt;&lt;tenantId&gt;&gt;" + "&lt;&lt;base-domain&gt;&gt;". Beispiel: Wenn "tenantId" automatisch generiert wird, ist der Host `https://t12345678.{{< domain-c8y >}}`.
|{tenant-domain}|Dies ist der Standort, an dem der Mandant aufgerufen werden kann. Entspricht "https://" + "&lt;&lt;tenantDomainName&gt;&gt;". Beispiel: {tenant-domain} kann `https://myTenant.{{< domain-c8y >}}` sein. Bei einem {{< enterprise-tenant-de >}} können die {tenantDomain}-Platzhalter verschiedene Werte annehmen. Ein Beispiel für eine Mandanten-Domain (tenant-domain) wäre `https://myTenant.myhost.com`.
|{token}|Ein automatisch generiertes System-Token zum Zurücksetzen des Passworts. Wenn ein Benutzer das Zurücksetzen des Passworts anfordert, wird ein neues zufallsgeneriertes Token erstellt. Dieses Token ist nur mit dem jeweiligen Benutzer verknüpft und ermöglicht nur ein einmaliges Zurücksetzen des Passworts. Dieser Platzhalter wird standardmäßig in Verbindung mit dem Attribut {tenant-domain} verwendet: "{tenant-domain}?token={token}".
|{email}|Dieser Platzhalter wird durch die E-Mail-Adresse des empfangenden Benutzer ersetzt, die in den Benutzereinstellungen gespeichert ist. Einige Ansichten der Benutzeroberfläche erkennen diesen Parameter und fügen den Wert vorab in das entsprechende Feld ein, z. B. beim Zurücksetzen des Passworts.

#### Zwei-Faktor-Authentifizierung

Unter **Zwei-Faktor-Authentifizierung** können Sie das SMS-Template, das an die Benutzer geschickt wird, ändern.

![TFA configuration](/images/benutzerhandbuch/enterprise-tenant/et-configuration-tfa.png)

#### Support-Link

Im Bereich **Support-Link** können Sie eine URL eingeben, die als Link zu einer Support-Seite verwendet wird. Wenn Sie hier keinen Link bereitstellen, wird der Standardlink zur {{< sag-dev-community >}}-Seite verwendet.

![Support link configuration](/images/benutzerhandbuch/enterprise-tenant/et-configuration-support-link.png)

Geben Sie "false" ein, um den Link zu verbergen.

#### Zurücksetzen des Passworts

Im Bereich **Passwort zurücksetzen** können Sie alle Einstellungen im Zusammenhang mit E-Mail-Templates zum Zurücksetzen des Passworts ändern.

![Configuration menu1](/images/benutzerhandbuch/Administration/admin-settings-configuration-password-reset.png)

Ganz oben können Sie festlegen, ob Sie zulassen möchten, E-Mails an unbekannte E-Mail-Adressen zu senden.

Stellen Sie im Feld **E-Mail-Template für das Zurücksetzen von Passwörtern** ein Template bereit, das verwendet werden soll, wenn die Adresse bekannt ist, und eine für unbekannte Adressen. Der Link zum Zurücksetzen des Passworts kann beispielsweise lauten: {tenant-domain}/apps/devicemanagement/index.html?token={token}&email={email}.

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

Im Bereich **Speicherbegrenzung** können Sie den E-Mail-Betreff und das E-Mail-Template für E-Mails festlegen, die gesendet werden, *bevor* Daten bei Überschreitung der Speicherbegrenzung gelöscht werden (Warnung) und *nachdem* Daten gelöscht wurden (Begrenzung überschritten).

![Storage limit settings](/images/benutzerhandbuch/Administration/admin-settings-configuration-storage-limit.png)

#### Mandanten werden gesperrt

Im Bereich **Mandanten werden gesperrt** können Sie Einstellungen für E-Mails vornehmen, die gesendet werden, wenn ein Mandant gesperrt wurde.

<img src="/images/benutzerhandbuch/Administration/admin-settings-configuration-suspending-tenants.png" alt="Suspended tenants">

Oben können Sie auswählen, ob Sie die E-Mail zum Administrator des gesperrten Mandanten senden möchten und einen weiteren E-Mail-Empfänger angeben. Unten definieren Sie den Betreff und die Vorlage für die E-Mail "Gesperrter Benutzer".

Klicken Sie unten auf **Konfiguration speichern**, um Ihre Eingaben zu speichern.

> **Info:** Einige zusätzliche Konfigurationseinstellungen können global im {{< management-tenant-de >}} festgelegt werden, siehe [Administration > Plattform-Konfigurationseinstellungen](/benutzerhandbuch/administration-de/#platform-configuration-settings).

<a name="branding"></a>
### Branding

Mit der Branding-Funktion können Sie das Erscheinungsbild der Benutzeroberfläche für Ihre Mandanten nach Ihren Vorlieben gestalten.

In der Registerkarte **Branding** können Sie verschiedene Parameter wie Logos, Farben und Schriftarten konfigurieren, die auf der gesamten Plattform verwendet werden.

Die [Parameter](#configuration-parameters) werden auf der linken Seite der Registerkarte konfiguriert, während Sie auf der rechten Seite in einer Vorschau sehen können, wie sich Ihre Auswahl auswirkt.

<img src="/images/benutzerhandbuch/enterprise-tenant/et-branding.png" alt="Branding tab">

Für eine detailliertere Vorschau Ihrer Einstellungen klicken Sie in der oberen Menüleiste auf **Vorschau anzeigen**, um das Erscheinungsbild Ihrer Branding-Einstellungen in der gesamten Plattform zu überprüfen. In der Vorschau können Sie interagieren und sogar zwischen verschiedenen Anwendungen wechseln. Jede Änderung, die Sie in der Registerkarte **Branding** vornehmen, wird sofort auf die Seite **Vorschau** angewendet.

<img src="/images/benutzerhandbuch/enterprise-tenant/et-branding-preview.png" alt="Branding tab">

Wenn Sie fertig sind oder Ihre Einstellungen speichern möchten, klicken Sie am unteren Rand des Bereichs **Konfiguration** auf **Speichern**, um Ihre Branding-Einstellungen in Ihrem Mandanten zu speichern.

Durch Speichern werden die Einstellungen noch nicht auf den aktuellen Mandanten und die entsprechenden Untermandanten angewendet. Um dies zu bewirken, klicken Sie in der oberen Menüleiste auf **Anwenden**.

Klicken Sie in der oberen Menüleiste auf **Zurücksetzen**, um das Branding des aktuellen Mandanten und seiner Untermandanten auf die Standardeinstellungen zurückzusetzen. Die benutzerdefinierten Einstellungen werden weiterhin gespeichert, aber nicht mehr angewendet.

<a name="configuration-parameters"></a>
#### Konfigurationsparameter

Unter "Konfiguration" können die folgenden Branding-Parameter konfiguriert werden.

**Allgemein**

Im Bereich **Allgemein** können Sie den Titel bearbeiten, der im Browser-Tab verwendet wird.

**Hauptlogo**

Unter **Hauptlogo** können Sie die folgenden Elemente definieren:

* Das "Favicon", das in der Adressleiste des Browsers angezeigt wird. Klicken Sie auf **Datei wählen**, um eine Datei auf Ihrem Computer auszuwählen. Das unterstütze Format für das Favicon ist "ico".
* Ihr Markenlogo, das während des Ladens der Anwendung angezeigt wird. Klicken Sie auf **Datei wählen**, um eine Datei auf Ihrem Computer auszuwählen. Die unterstützen Formate sind "png" und "svg".
* Die Höhe des Markenlogos.

**Navigatorlogo**

Unter **Navigatorlogo** können Sie das Logo, das oben im Navigator angezeigt wird, bereitstellen und die Höhe für das Navigatorlogo einstellen.

**Schriftart**

Im Bereich **Schriftart** definieren Sie die Schriftarten für Ihre Branding-Version.

Sie können den Basis-Schriftartenstapel und den Überschriften-Schriftartenstapel wählen sowie eine Option für den Navigator-Schriftartenstapel (entweder identisch mit Basis- oder Überschriftenschriftart). Sie können außerdem einen Link auf externe Schriftarten setzen, die Sie verwenden möchten.

**Farben**

Im Bereich **Farben** definieren Sie die Farben für Ihre Branding-Version.

Die folgenden Parameter können definiert werden (Werte in hex, rgb oder rgba):

* Haupt-Branding-Farbe.
* Neben-Branding-Farbe. Der Standardwert ist "#07b91A".
* Dunkle Branding-Farbe. Wird hauptsächlich für zweifarbige Symbole verwendet. Der Standardwert ist "#0B385B".
* Helle Branding-Farbe. Wird hauptsächlich für zweifarbige Symbole verwendet. Der Standardwert ist "#5FAEEC".
* Textfarbe. Der Standardwert ist "#444".
* Link-Farbe. Der Standardwert ist die Haupt-Branding-Farbe.
* Haupt-Hintergrundfarbe. Der Standardwert für diese Element ist "#FAFAFA".

**Obere Leiste**

Unter **Obere Leiste** definieren Sie die Parameter für die obere Leiste.

Die folgenden Parameter können definiert werden (Werte in hex, rgb oder rgba):

* Hintergrundfarbe. Der Standardwert ist "#FFFFF".
* Textfarbe. Der Standardwert ist "49595B".
* Hover-Textfarbe für Schaltflächen. Der Standardwert ist die Haupt-Branding-Farbe.

**Navigator**

Unter **Navigator** definieren Sie die Parameter für den Navigator.

Die folgenden Parameter können definiert werden (Werte in hex, rgb oder rgba):

* Hintergrundfarbe. Der Standardwert ist "2c3637".
* Hintergrundfarbe der Logoumrandung. Der Standardwert ist "Transparent".
* Titelfarbe. Der Standardwert ist "FFFFF".
* Farbe für Texte und Schaltflächen. Der Standardwert ist "#FAFAFA".
* Farbe für Trennlinien. Der Standardwert ist "#FAFAFA".
* Textfarbe des aktuellen Elements im Navigator. Der Standardwert ist "#FAFAFA".
* Hintergrundfarbe des aktuellen Elements im Navigator mit der Haupt-Branding-Farbe als Standard.

**Sonstiges**

Im Bereich **Sonstiges** legen Sie den "Rand-Radius für Schaltflächen" durch Angabe eines Werts in Pixel (px) fest.

**Cookie-Banner**

Im Abschnitt **Cookie-Banner** legen Sie die Einstellungen für das Banner mit den Cookie-Nutzungsinformationen fest. Sofern es hier nicht deaktiviert ist, wird das Banner für alle Benutzer des aktuellen Mandanten und aller Untermandanten angezeigt, bis ein Benutzer auf **Akzeptieren und fortfahren** klickt.

Durch Deaktivieren des Cookie-Banners wird auch das Produkterfahrungs-Tracking von Gainsight für den aktuellen Mandanten und alle seine Untermandanten deaktiviert.

Folgende Parameter können festgelegt werden:

* Titel - Cookie-Banner-Titel.
* Text - Cookie-Banner-Text mit allgemeiner Anweisung zur Cookie-Nutzung und den zugehörigen Anwendungsfällen.
* Link zur Datenschutzerklärung - Ein Link zu der Seite mit der Datenschutzerklärung.

<a name="domain-name"></a>
### Domain-Name

Ein entscheidendes Merkmal des {{< enterprise-tenant-de >}} ist die Fähigkeit, die {{< product-c8y-iot >}}-Plattform mit einem benutzerdefinierten Domain-Namen zu betreiben. Dies
bedeutet, dass Sie die Plattform so konfigurieren können, dass sie Ihnen und Ihren Kunden mit einem Hostnamen Ihrer Wahl dient, z. B. mit *.iot.mycompany.com anstelle der Standard-URL von {{< product-c8y-iot >}}. Zudem haben Sie die Möglichkeit, Untermandanten
mit Ihrer Domain zu erstellen. Diese verwenden dann **\<subtenantName\>.iot.mycompany.com** als ihren Hostnamen.

> **Info:** Die Funktionalität "Benutzerdefinierter Domain-Name" ist nur für {{< product-c8y-iot >}}-Cloud- oder lokale Installationen verfügbar, bei denen kein benutzerdefinierter Load Balancer verwendet wird.

Für die Verwendung einer benutzerdefinierten Domain gelten drei Voraussetzungen:

1. Zum Aktivieren Ihrer Domain ist eine gültige Lizenz erforderlich, die Ihre Wildcard-Domain abdeckt.
   Bitte kontaktieren Sie den [Produkt-Support](/welcome/contacting-support/), um eine Lizenz für Ihre Domain zu installieren.
2. Sie haben ein gültiges Wildcard-SSL-Zertifikat für Ihre IoT-Domain erhalten, z. B.
   ein Zertifikat für *\*.iot.mycompany.com*.
3. Es gibt eine gültige DNS-Konfiguration für Ihre Domain, die dafür sorgt, dass alle Anfragen an *\*.iot.mycompany.com* an
   {{< product-c8y-iot >}} geleitet werden. (siehe unten).

#### Anforderungen an das SSL-Zertifikat

Ein SSL-Zertifikat muss die folgenden Kriterien erfüllen, um mit der {{< enterprise-tenant-de >}}-Funktion verwendet werden zu können:

* Das Zertifikat ist aktuell gültig und ist nicht abgelaufen. Konkret muss "validFrom" auf einen Zeitpunkt in der
  Vergangenheit und "validTo" auf einen Zeitpunkt in der Zukunft verweisen.
* Das Zertifikat wurde von einer anerkannten Zertifizierungsstelle (CA) herausgegeben. Selbstsignierte Zertifikate werden
  ausdrücklich nicht unterstützt.
* Das Zertifikat ist ein für Ihre Domain *\*.iot.mycompany.com* herausgegebenes Wildcard-Zertifikat. Die Verwendung eines Wildcard-Zertifikats
  ist obligatorisch, da es auch für Subdomains verwendet wird, die über Ihren {{< enterprise-tenant-de >}} erstellt werden.
* Jedes einzelne Zertifikat in der Kette wird im X509-Format bereitgestellt.
* Der Common Name (CN) im Betreff des primären Zertifikats (erstes in der Kette) enthält den Wert Ihres
  Wildcard-Domain-Namens, z. B. "CN=\*.iot.mycompany.com".

{{< product-c8y-iot >}} unterstützt ein Einzelzertifikat, das durch die Stammzertifizierungsstelle signiert ist, sowie ein Vollkettenzertifikat, das
ein oder mehrere Zwischenzertifikate enthält.

#### Verpacken des SSL-Zertifikats in PKCS #12

Um ein SSL-Zertifikat mit {{< product-c8y-iot >}} verwenden zu können, muss das Zertifikat zusammen mit seinem privaten Schlüssel
in einer einzelnen Datei im Dateiformat PKCS #12 an die Plattform hochgeladen werden.

Die meisten Zertifizierungsstellen liefern ihre Zertifikate und zugehörigen privaten Schlüssel im Dateiformat PEM, wobei zwei
separate Textdateien verwendet werden: eine für die Zertifikatkette und eine für den privaten Schlüssel. Vergewissern Sie sich, dass der private Schlüssel nicht
durch ein Passwort oder eine Passphrase geschützt ist.

Solche PEM-Dateien lassen sich mittels [OpenSSL](https://www.openssl.org/) leicht in das Format #PKCS #12 umverpacken. Im folgenden
Beispiel dient OpenSSL zum Zusammenführen einer Zertifikatkette (*chain.cert*) und des entsprechenden Schlüssels (*privkey.pem*) zu einer
PKCS #12-Keystore-Datei (*out_keystore.p12*), die mit {{< product-c8y-iot >}} verwendet werden kann.

```shell
openssl pkcs12 -export -out out_keystore.p12 -inkey privkey.pem -in cert.pem -certfile chain.pem
```

#### DNS-Anforderungen an Enterprise-Domains

Die DNS-Einträge für Ihre benutzerdefinierte Domain müssen so konfiguriert werden, dass alle Anfragen an die {{< product-c8y-iot >}}-Plattform geleitet werden.

Wir **empfehlen dringend**, zu diesem Zweck den Wildcard-Eintrag CNAME zu verwenden. Der CNAME muss Ihre Wildcard-Domain
aus dem Zertifikat im Feld NAME enthalten. Das Feld VALUE des CNAME-Eintrags muss auf den Hostnamen von {{< product-c8y-iot >}}verweisen. Dieser Ziel-Hostname lässt sich leicht anhand Ihrer aktuellen Mandanten-URL ermitteln. Wenn Ihre Mandanten-URL
*http://mytenant.{{< domain-c8y >}}* lautet, ist der Ziel-Hostname *{{< domain-c8y >}}*. Achten Sie außerdem darauf, eventuell miteinander
in Konflikt stehende A-Einträge zu löschen.

**Beispiel:**

Wenn Sie **.iot.mycompany.com* für Ihre Enterprise-Untermandanten verwenden möchten und {{< product-c8y-iot >}} unter *{{< domain-c8y >}}* verwenden, muss der folgende CNAME-Eintrag zu Ihrer DNS-Zone hinzugefügt werden:

```shell
NAME                  TYPE   VALUE
----------------------------------------------------
*.iot.mycompany.com.   CNAME  {{< domain-c8y >}}.
```

Aus folgenden Gründen raten wir dringend von der Verwendung alternativer DNS-Konfigurationen ab:

- *Wildcard-A-Einträge* verwenden die IP-Adresse der Plattform im Wert-Feld und leiten somit alle Anfragen anhand
  der jeweiligen IP statt anhand eines Hostnamens um. Dies führt zu erheblichen Problemen, wenn die IP-Adresse der IoT-Plattform
  später geändert wird.
- *Singuläre A-Einträge oder singuläre CNAME-Einträge* anstelle von DNS-Wildcards erfordern einen einzelnen DNS-Eintrag für jede
  zu erstellende Enterprise-Domain. Dies ist sehr fehleranfällig und verhindert die Erstellung von Untermandanten, ohne jedes Mal
  die DNS-Einstellungen bearbeiten zu müssen.

#### Hochladen des Zertifikats und Aktivieren Ihrer Domain

Sobald die DNS-Konfiguration vorliegt und ein Zertifikat gemäß den entsprechenden Anforderungen verfügbar ist, kann dieses problemlos
an die Plattform hochgeladen werden.

<img src="/images/benutzerhandbuch/enterprise-tenant/et-domain-name.png" alt="Domain name">


Anschließend können Sie die Domain durch einen einzigen Mausklick aktivieren. Nachdem die Domain aktiviert wurde, werden Sie
über den neuen Domain-Namen zu Ihrem {{< enterprise-tenant-de >}} umgeleitet. Sie erhalten eine E-Mail mit Informationen über die
Aktivierung. Beachten Sie, dass der Domain-Name Ihres {{< management-tenant-de >}} statisch ist. Beispiel: Wenn Ihre Wildcard-Domain "*
.iot.mycompany.com" ist, lautet die Domain des {{< management-tenant-de >}} "management.iot.mycompany.com".

> **Info:** Sobald die Aktivierung abgeschlossen ist, können Sie auf Ihren Mandanten nicht mehr mit der {{< product-c8y-iot >}}-Domain zugreifen. Verwenden Sie anstatt dessen Ihren eigenen Domain-Namen.

#### Aktualisieren des Zertifikats

Wenn Ihr Zertifikat abläuft, müssen Sie es durch ein neues Zertifikat mit einer längeren Gültigkeitsdauer aktualisieren. Wenn Sie das Zertifikat aktualisieren, stellen Sie sicher, dass

* das Zertifikat gültig ist, (entsprechend der Gültigkeit beim initialen Hochladen),
* das Zertifikat aktuell gültig ist (validFrom in der Vergangenheit und validTo in der Zukunft),
* das Zertifikat exakt denselben Domain-Namen wie das aktuell aktive Zertifikat hat.

>**Info:** Berücksichtigen Sie, dass es nach dem Ersetzen des Zertifikats einige Minuten dauern kann, bis das neue Zertifikat den Benutzern/Browsern bereitgestellt wird.


#### Deaktivieren eines Zertifikats

Wenn Sie zu Ihrer alten Domain auf {{< product-c8y-iot >}} zurückkehren möchten, können Sie Ihr Zertifikat ganz einfach wieder deaktivieren.

>**Wichtig:** Verwenden Sie diese Funktion mit Vorsicht. Ihre Kunden werden nicht mehr in der Lage sein, auf Ihre Untermandanten zuzugreifen.

#### Troubleshooting

Für den Fall, dass Sie {{< product-c8y-iot >}} mit Ihrer eigenen Domain nicht erreichen können, empfehlen wir Ihnen, zunächst die folgenden Überprüfungen durchzuführen, um Ihre DNS-Einstellungen zu verifizieren.

**Prüfen, ob der DNS-Eintrag korrekt ist**

Führen Sie folgendes Kommando aus:

```shell
host management.<Ihr Domain-Name>
```

Es sollte das folgende Ergebnis angezeigt werden:

```shell
management.<ihr domain name> ist ein Alias für <Instanz-Domain-Name>
<Instanz-Domain-Name> hat die Adresse <IP-Adresse>
```


**Prüfen, ob die API antwortet**

Führen Sie folgendes Kommando aus:

```shell
curl -v -u '<Mandanten-ID>/<ihr benutzer>:<ihr password>' --head http://management.<ihr domain name>/inventory/managedObjects
```

Es sollte das folgende Ergebnis angezeigt werden:

```shell
...
HTTP/1.1 200 OK
...
```


>**Info:** Berücksichtigen Sie, dass es nach dem Ändern des DNS-Eintrags bis zu 24 Stunden dauern kann, bis der neue Eintrag propagiert wurde.
>