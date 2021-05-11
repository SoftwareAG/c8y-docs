---
weight: 40
title: Anpassen der Plattform
layout: redirect
---

Mit dem Enterprise tenant von Cumulocity IoT können Sie Ihre Plattform nach Ihren Wünschen und Bedürfnissen individuell anpassen.

Im Menü **Einstellungen** können Sie verschiedene Anpassungseinstellungen vornehmen.

### <a name="configuration"></a>Konfiguration

>**Info:** Informationen zu den Einstellungen in der Registerkarte **Konfiguration** finden Sie in [Ändern von Einstellungen > Konfigurationseinstellungen](/benutzerhandbuch/administration-de/#config-platform) unter Administration. Hier werden nur die Funktionen erläutert, die ausschließlich für Enterprise tenants verfügbar sind.

#### Anwendungen

Im Bereich **Anwendungen** können Sie die Standardanwendungen für neue Mandanten als kommagetrennte Liste festlegen.

![Applications settings](/images/benutzerhandbuch/enterprise-tenant/et-settings-configuration-applications.png)

#### Passwörter

Im Bereich **Passwörter** können Sie Passworteinstellungen wie Standardstärke, Länge oder Gültigkeit für die Benutzer in Ihrem Mandanten festlegen.

![Passwords settings](/images/benutzerhandbuch/enterprise-tenant/et-settings-configuration-passwords.png)

#### Supportbenutzer

Im Bereich **Supportbenutzer** konfigurieren Sie die Parameter für die Aktivierung eines Supportbenutzers für Untermandanten-Benutzer.

Mit Hilfe dieser Funktion können Supportbenutzer (d. h. Benutzer mit spezifischen Berechtigungen im Management-Mandanten) bei etwaigen Problemen auf Benutzer von Untermandanten zugreifen. Weitere Informationen finden Sie unter [Supportbenutzerzugriff](/benutzerhandbuch/enterprise-edition-de#users-in-other-tenants).

<img src="/images/benutzerhandbuch/enterprise-tenant/et-settings-configuration-support-user.png" alt="Support user configuration">

Legen Sie im Feld **Supportbenutzer aktivieren** fest, ob der Supportbenutzerzugriff für Untermandanten-Benutzer aktiviert sein soll. Hier sind folgende Werte möglich:

* *true*: Supportbenutzerzugriff ist aktiviert. Wenn Supportbenutzerzugriff aktiviert ist, können sich Supportbenutzer bei jedem Untermandanten als beliebiger Benutzer anmelden, sofern dies nicht auf Untermandanten-Ebene außer Kraft gesetzt ist. Untermandanten-Benutzer können den Zugriff nicht selbst deaktivieren.
* *false*: Supportbenutzerzugriff ist deaktiviert. Wenn Supportbenutzerzugriff deaktiviert ist, können sich Supportbenutzer nur bei Untermandanten anmelden, für die mindestens ein Benutzer diesen Zugriff explizit ermöglicht hat.
* Ein explizites Datum im Datum-Uhrzeit-Format, bis zu dem die Supportbenutzer-Aktivierung aktiviert bleiben soll. Wenn kein Datum festgelegt wird, wird der Wert auf "Unbegrenzt" gesetzt.

Im Feld **Gültigkeitsdauer** können Sie optional die Supportdauer angeben, d. h. um wie viele Stunden der Supportbenutzerzugriff nach einer Supportbenutzeranfrage verlängert wird. Geben Sie die Anzahl der Stunden ein. Der Standardwert ist 24 Stunden.

Ablaufdatum und -uhrzeit werden anhand der im Feld **Gültigkeitsdauer** angegebenen Dauer aktualisiert. Beispiel: Wenn das aktuelle Ablaufdatum 01/09/2018 15:00 lautet und die Dauer von 24 Stunden beibehalten wurde, aktualisiert der aktivierende Supportbenutzer das Ablaufdatum auf 01/10/2018 15:00.

Details zum Status von Supportanfragen und Supportbenutzerzugriff für einen Mandanten finden Sie in der Registerkarte **Attribute** des Mandanten, siehe [Verwalten von Mandanten](/benutzerhandbuch/enterprise-edition-de#managing-tenants).

### <a name="branding"></a>Branding

Mit der Branding-Funktion können Sie das Erscheinungsbild der Benutzeroberfläche für Ihre Mandanten nach Ihren Vorlieben gestalten.

In der Registerkarte **Branding** können Sie verschiedene Parameter wie Logos, Farben und Schriftarten konfigurieren, die auf der gesamten Plattform verwendet werden.

Die [Parameter](#configuration-parameters) werden auf der linken Seite der Registerkarte konfiguriert, während Sie auf der rechten Seite in einer Vorschau sehen können, wie sich Ihre Auswahl auswirkt.

<img src="/images/benutzerhandbuch/enterprise-tenant/et-branding.png" alt="Branding tab">

Für eine detailliertere Vorschau Ihrer Einstellungen klicken Sie in der oberen Menüleiste auf **Vorschau anzeigen**, um das Erscheinungsbild Ihrer Branding-Einstellungen in der gesamten Plattform zu überprüfen. In der Vorschau können Sie interagieren und sogar zwischen verschiedenen Anwendungen wechseln. Jede Änderung, die Sie in der Registerkarte **Branding** vornehmen, wird sofort auf die Seite **Vorschau** angewendet.

<img src="/images/benutzerhandbuch/enterprise-tenant/et-branding-preview.png" alt="Branding tab">

Wenn Sie fertig sind oder Ihre Einstellungen speichern möchten, klicken Sie am unteren Rand des Bereichs **Konfiguration** auf **Speichern**, um Ihre Branding-Einstellungen in Ihrem Mandanten zu speichern.

Durch Speichern werden die Einstellungen noch nicht auf den aktuellen Mandanten und die entsprechenden Untermandanten angewendet. Um dies zu bewirken, klicken Sie in der oberen Menüleiste auf **Anwenden**.

Klicken Sie in der oberen Menüleiste auf **Zurücksetzen**, um das Branding des aktuellen Mandanten und seiner Untermandanten auf die Standardeinstellungen zurückzusetzen. Die benutzerdefinierten Einstellungen werden weiterhin gespeichert, aber nicht mehr angewendet.

#### <a name="configuration-parameters"></a>Konfigurationsparameter

Unter "Konfiguration" können die folgenden Branding-Parameter konfiguriert werden.

**Allgemein**

Im Bereich **Allgemein** können Sie den Titel bearbeiten, der im Browser-Tab verwendet wird.

**Hauptlogo**

Unter **Hauptlogo** können Sie die folgenden Elemente definieren:

* Das “Favicon”, das in der Adressleiste des Browsers angezeigt wird. Klicken Sie **Datei wählen**, um eine Datei auf Ihrem Computer auszuwählen. Das unterstütze Format für das Favicon ist “ico”.
* Ihr Markenlogo, das während des Ladens der Anwendung angezeigt wird. Klicken Sie **Datei wählen**, um eine Datei auf Ihrem Computer auszuwählen. Die unterstützen Formate sind “png” und “svg”.
* Die Höhe des Markenlogos.

**Navigatorlogo**

Unter **Navigatorlogo** können Sie das Logo, das oben im Navigator angezeigt wird, bereitstellen und die Höhe für das Navigatorlogo einstellen.

**Typ**

Im Bereich **Typ** definieren Sie die Schriftarten für Ihre Branding-Version.

Sie können die Basisschriftart und die Schriftart für Überschriften wählen sowie eine Option für die im Navigator verwendete Schriftart (entweder identisch mit Basis- oder Überschriftenschriftart). Sie können außerdem einen Link auf externe Schriftarten setzen, die Sie verwenden möchten.

**Farben**

Im Bereich **Farben** definieren Sie die Farben für Ihre Branding-Version.

Die folgenden Parameter können definiert werden (Werte in hex, rgb oder rgba):

* Haupt-Branding-Farbe.
* Neben-Branding-Farbe. Der Standardwert ist “#07b91A”.
* Dunkle Branding-Farbe. Wird hauptsächlich für zweifarbige Symbole verwendet. Der Standardwert ist "#0B385B".
* Helle Branding-Farbe. Wird hauptsächlich für zweifarbige Symbole verwendet. Der Standardwert ist "#5FAEEC".
* Textfarbe. Der Standardwert ist “#444”.
* Link-Farbe. Der Standardwert ist die Haupt-Branding-Farbe.
* Haupt-Hintergrundfarbe. Der Standardwert für diese Element ist “#FAFAFA”.

**Obere Leiste**

Unter **Obere Leiste** definieren Sie die Parameter für die obere Leiste.

Die folgenden Parameter können definiert werden (Werte in hex, rgb oder rgba):

* Hintergrundfarbe. Der Standardwert ist “#FFFFF”.
* Textfarbe. Der Standardwert ist “49595B”.
* Hover-Textfarbe für Schaltflächen. Der Standardwert ist die Haupt-Branding-Farbe.

**Navigator**

Unter **Navigator** definieren Sie die Parameter für den Navigator.

Die folgenden Parameter können definiert werden (Werte in hex, rgb oder rgba):

* Hintergrundfarbe. Der Standardwert ist “#2c3637”.
* Hintergrundfarbe der Logoumrandung. Der Standardwert ist “Transparent”.
* Titelfarbe. Der Standardwert ist “#FFFFF”.
* Farbe für Texte und Schaltflächen. Der Standardwert ist “#FAFAFA”.
* Farbe für Trennlinien. Der Standardwert ist “#FAFAFA”.
* Textfarbe des aktuellen Elements im Navigator. Der Standardwert ist “#FAFAFA”.
* Hintergrundfarbe des aktuellen Elements im Navigator mit der Haupt-Branding-Farbe als Standard.

**Sonstiges**

Im Bereich **Sonstiges** können Sie den Rand-Radius für Schaltflächen durch Angabe eines Werts in Pixel (px) festlegen.

**Cookie-Banner**

Im Abschnitt **Cookie-Banner** legen Sie die Einstellungen für das Banner mit den Cookie-Nutzungsinformationen fest. Das Banner wird für alle Benutzer des aktuellen Mandanten und der Untermandanten angezeigt, bis ein Benutzer **Akzeptieren und fortfahren** klickt.

Folgende Parameter können festgelegt werden:

* Titel. Cookie-Banner-Titel.
* Text. Cookie-Banner-Text mit allgemeiner Anweisung zur Cookie-Nutzung und den zugehörigen Anwendungsfällen.
* Link zur Datenschutzerklärung. Ein Link zu der Seite mit der Datenschutzerklärung.

### <a name="domain-name"></a>Domain-Name

In der Registerkarte **Domain-Name** können Sie Ihren eigenen Domain-Namen festlegen.

>**Wichtig:** Sie benötigen eine gültige Lizenz, um Ihre Domain zu aktivieren. Bitte kontaktieren Sie unser Sales-Team unter sales@cumulocity.com, um eine Lizenz für Ihre Domain zu installieren.  

<img src="/images/benutzerhandbuch/enterprise-tenant/et-domain-name.png" alt="Domain name">

>**Info:** Die Funktionalität "Benutzerdefinierter Domain-Name" ist nur für cumulocity.com- oder Private Edition-Installationen verfügbar, bei denen kein benutzerdefinierter Load Balancer verwendet wird.

Zunächst müssen Sie ein entsprechendes Zertifikat hochladen, in dem Sie **Zertifikat hochladen** klicken. Stellen Sie sicher, dass

* das Zertifikat aktuell gültig ist (validFrom in der Vergangenheit und validTo in der Zukunft),
* das Zertifikat in einem gültigen PKCS#12-Format vorliegt und die vollständige Autorisierungskette enthält,
* jedes einzelne Zertifikat in der Kette im X509-Format vorliegt,
* der private Schlüssel nicht passwortgeschützt ist,
* Sie ein Wildcard-Zertifikat verwenden, um die Erstellung von Untermandanten zu ermöglichen,
* der Common Name (CN) im Betreff des primären Zertifikats (erstes in der Kette) den Wert Ihres Wildcard-Domain-Namens enthält, z. B. "CN=*.iot.mycompany.com".

Cumulocity IoT unterstützt ein Einzelkettenzertifikat, das durch die Stammzertifizierungsstelle signiert ist, sowie ein Vollkettenzertifikat, das ein oder mehrere Zwischenzertifikate enthält.

> **Info:** Wenn Ihr Zertifikat nicht in einem gültigen PKCS#12-Format vorliegt aber Sie PEM-Dateien für Zertifikat, privaten Schlüssel und Autorisierungskette haben, können Sie mit dem folgenden Kommando eine gültige PKCS#12-Datei generieren:

```shell
openssl pkcs12 -export -out out_keystore.p12 -inkey privkey.pem -in cert.pem -certfile chain.pem
```

Bevor Sie den eigenen Domain-Namen aktivieren, stellen Sie sicher, dass

* Sie ein gültiges SSL-Zertifikat für die eigene Domain hochgeladen haben,
* der Domain-Name nicht von einem anderen Mandanten verwendet wird,
* das Zertifikat aktuell gültig ist (validFrom in der Vergangenheit und validTo in der Zukunft),
* Sie einen Wildcard-CNAME-Eintrag (beginnend mit `*.`) in folgendem Format zu Ihrem DNS-Server hinzugefügt haben:<br>
 Domain-Name = "&ast;.&lt;ihr domain name>", z.B. "*.iot.mycompany.com" <br>
 Typ = CNAME <br>
 Ziel = Domain der Plattform, auf die Sie verweisen wollen, d.h. die aktuelle URL, die Sie verwenden, um auf Ihren Mandanten zuzugreifen. Wenn Sie beispielsweise aktuell *https&#58;//demo.cumulocity.com* verwenden, um auf Ihren Mandanten zuzugreifen, verwenden Sie "demo.cumulocity.com" als Ziel.<br>
Vergewissern Sie sich, dass Sie alle A-Einträge für die Wildcard-Domain entfernt haben. Wenn Sie bereits einen Eintrag A für "xxx.iot.mycompany.com" haben, können Sie keine Mandanten mit der URL "xxx" anlegen.

Nach erfolgreicher Aktivierung werden Sie zu Ihrem Enterprise tenant unter der neuen Domain umgeleitet. Sie erhalten eine Email mit Informationen über die Aktivierung. Beachten Sie, dass der Domain-Name Ihres Management-Mandanten statisch ist. Beispiel: Wenn Ihre Wildcard-Domain "*.iot.mycompany.com" lautet, so lautet die Domain Ihres Management-Mandanten "management.iot.mycompany.com".

>**Info:** Sobald die Aktivierung abgeschlossen ist, können Sie auf Ihren Mandanten nicht mehr mit der Cumulocity IoT-Domain zugreifen. Verwenden Sie anstatt dessen Ihren eigenen Domain-Namen.


#### Aktualisieren des Zertifikats

Wenn Ihr Zertifikat abläuft, müssen Sie es durch ein neues Zertifikat mit einer längeren Gültigkeitsdauer aktualisieren. Wenn Sie das Zertifikat aktualisieren, stellen Sie sicher, dass

* das Zertifikat gültig ist, (entsprechend der Gültigkeit beim initialen Hochladen),
* das Zertifikat aktuell gültig ist (validFrom in der Vergangenheit und validTo in der Zukunft),
* das Zertifikat exakt denselben Domain-Namen wie das aktuell aktive Zertifikat hat.

>**Info:** Berücksichtigen Sie, dass es nach dem Ersetzen des Zertifikats einige Minuten dauern kann, bis das neue Zertifikat den Benutzern/Browsern bereitgestellt wird.


#### Deaktivieren eines Zertifikats

Wenn Sie zu Ihrer alten Domain auf Cumulocity IoT zurückkehren möchten, können Sie Ihr Zertifikat ganz einfach wieder deaktivieren.

>**Wichtig:** Verwenden Sie diese Funktion mit Vorsicht. Ihre Kunden werden nicht mehr in der Lage sein, auf Ihre Untermandanten zuzugreifen.

#### Troubleshooting

Für den Fall, dass Sie Cumulocity IoT mit Ihrer eigenen Domain nicht erreichen können, empfehlen wir Ihnen, zunächst die folgenden Überprüfungen durchzuführen, um Ihre DNS-Einstellungen zu verifizieren.

**Prüfen, ob der DNS-Eintrag korrekt ist**

Führen Sie folgendes Kommando aus:

```shell
host management.<ihr domain name>
```

Es sollte das folgende Ergebnis angezeigt werden:

```shell
management.<ihr domain name> ist ein Alias für <instanz domain name>
<instanz domain name> hat die Adresse <IP-Adresse>
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
