---
weight: 40
title: Anpassen der Plattform
layout: redirect
---


Unter **Enterprise Tenant** in der Anwendung "Administration" können Einstellungen vorgenommen werden, die Benutzern des Enterprise Tenant von Cumulocity über den Umfang der Standardedition hinaus zu Verfügung stehen.

**Info**: Informationen zu den Einstellungen in der Registerkarte  **Konfiguration** finden Sie in [Ändern von Einstellungen > Konfigurationseinstellungen](/guides/benutzerhandbuch/administration/#config-platform) unter Administration.



### Branding

In der Registerkarte **Branding**, können Sie das Erscheinungsbild der Benutzeroberfläche für Ihre Mandanten nach Ihren Vorlieben gestalten.

Die Branding-Funktion ermöglicht es, die Logos und Farben in den Anwendungen zu bearbeiten. Nach dem Speichern der Einstellungen werden alle Untermandanten automatisch aktualisiert.

![Registerkarte Branding](/images/users-guide/Administration/admin-branding.png)

**Allgemein**

Unter **Allgemein** können Sie den Titel bearbeiten, der im Browser-Tab verwendet wird.

**Hauptlogo**

Unter **Hauptlogo** können Sie die folgenden Elemente definieren:

*   Das “Favicon”, das in der Adressleiste des Browsers angezeigt wird. Klicken Sie **Datei wählen**, um eine Datei auf Ihrem Computer auszuwählen. Das unterstütze Format für das Favicon ist “ico”.
*   Ihr Markenlogo, dass während des Ladens der Anwendung angezeigt wird. Klicken Sie **Datei wählen**, um eine Datei auf Ihrem Computer auszuwählen. Die unterstützen Formate sind “png” und “svg”.
*   Die Höhe des Markenlogos.

**Navigatorlogo**

Unter **Navigatorlogo** können Sie das Logo, das oben im Navigator angezeigt wird, bereitstellen und die Höhe für das Navigatorlogo einstellen.

**Typ**

Im Bereich **Typ** definieren Sie die Schriftarten für Ihre Branding-Version.

![Branding-Typ](/images/users-guide/Administration/admin-branding-type.png)

Sie können die Basisschriftart und die Schriftart für Überschriften wählen sowie eine Option für die im Navigator verwendete Schriftart (entweder identisch mit Basis- oder Überschriftenschriftart). Sie können außerdem einen Link auf externe Schriftarten setzen, die Sie verwenden möchten.

**Farben**

Im Bereich **Farben** definieren Sie die Farben für Ihre Branding-Version.

![Branding-Farbe](/images/users-guide/Administration/admin-branding-color.png)

Die folgenden Parameter können definiert werden (Werte in hex, rgb oder rgba):

*   Haupt-Markenfarbe.
*   Neben-Markenfarbe. Der Standardwert ist “#07b91A”.
*   Textfarbe. Der Standardwert ist “#444”.
*   Link-Farbe. Der Standardwert ist die Haupt-Markenfarbe.
*   Haupt-Hintergrundfarbe. Der Standardwert für diese Element ist “#FAFAFA”.

**Obere Leiste**

Unter **Obere Leiste** definieren Sie die Parameter für die obere Leiste.

![Branding Ober Leiste](/images/users-guide/Administration/admin-branding-topbar.png)

Die folgenden Parameter können definiert werden (Werte in hex, rgb oder rgba):

*   Hintergrundfarbe. Der Standardwert ist “#FFFFF”.
*   Textfarbe. Der Standardwert ist “49595B”.
*   Hover-Textfarbe für Schaltflächen. Der Standardwert ist die Haupt-Markenfarbe.

**Navigator**

Unter **Navigator** definieren Sie die Parameter für die obere Leiste.

![Branding - obere Leiste](/images/users-guide/Administration/admin_BrandingTopbar.png)

Die folgenden Parameter können definiert werden (Werte in hex, rgb oder rgba):

*   Hintergrundfarbe. Der Standardwert ist “#2c3637”.
*   Hintergrundfarbe der Logoumrandung. Der Standardwert ist “Transparent”.
*   Titelfarbe. Der Standardwert ist “#FFFFF”.
*   Farbe für Texte und Schaltflächen. Der Standardwert ist “#FAFAFA”.
*   Farbe für Trennlinien. Der Standardwert ist “#FAFAFA”.
*   Textfarbe des aktuellen Elements im Navigator. Der Standardwert ist “#FAFAFA”.
*   Hintergrundfarbe des aktuellen Elements im Navigator mit der Haupt-Markenfarbe als Standard.

**Sonstiges**

Im Bereich S**onstiges** können Sie den Rand-Radius für Schaltflächen durch Angabe eines Werts in Pixel (px) festlegen.

Klicken Sie **Speichern**, um Ihre Eingaben zu speichern.

Klicken Sie **Vorschau** in der oberen Menüleiste, um eine Vorschau des neuen Brandings anzuzeigen.

Klicken Sie **Erstellen** in der oberen Menüleiste, um die neuen Einstellungen anzuwenden.

Die folgende Abbildung zeigt ein Beispiel mit

*   der Hauptmarkenfarbe in lila,
*   der sekundären Markenfarbe in weiß,
*   der Haupthintergrundfarbe in blau,
*   der Hintergrundfarbe der oberen Leiste in grün,
*   der Hintergrundfarbe des Navigators in pink.

![Branding-Beispiel](/images/users-guide/Administration/admin_BrandingColored.png)

### Domain-Name

In der Registerkarte **Domain-Name** können Sie Ihren eigenen Domain-Namen festlegen.

>**Info**: Sie benötigen eine gültige Lizenz, um Ihre Domain zu aktivieren. Bitte kontaktieren Sie unser Sales-Team unter sales@cumulocity.com, um eine Lizenz für Ihre Domain zu installieren.

![Domain-Name](/images/users-guide/Administration/admin_DomainName.png)

Zunächst müssen Sie eine entsprechendes Zertifikat hochladen, in dem Sie **Zertifikat hochladen** klicken. Stellen Sie sicher, dass

*   das Zertifikat ein gültiges PKCS#12-Format hat,
*   das Zertifikat nicht passwortgeschützt ist,
*   Sie ein Wildcard-Zertifikat verwenden, um die Erstellung von Untermandanten zu ermöglichen.

Bevor Sie den eigenen Domain-Namen aktivieren, stellen Sie sicher, dass

*   Sie ein gültiges SSL-Zertifikat für die eigene Domain hochgeladen haben,
*   der Domain-Name nicht von einem anderen Mandanten verwendet wird,
*   das Zertifikat aktuell gültig ist (validFrom in der Vergangenheit und validTo in der Zukunft),
* Sie einen Wildcard-CNAME-Eintrag (beginnend mit `"*."`) in folgendem Format zu Ihrem DNS-Server hinzugefügt haben:<br>
 Host-Name = `*.<ihr domain name>`, z. B. `*.iot.mycompany.com` <br>
 Typ = CNAME <br>
 Ziel = Die Ziel-URL der Plattform, auf die Sie zeigen möchten, z. B. `manage.cumulocity.com`<br>
Vergewissern Sie sich, dass Sie alle A-Einträge für die Wildcard-Domain entfernt haben. Falls Ihr DNS-Service keine CNAME-Einträge für Wildcard-Zertifikate bereitstellt, kontaktieren Sie bitte unser Support-Team.

Nach erfolgreicher Aktivierung werden Sie zu Ihrem Enterprise-Mandanten unter der neuen Domain umgeleitet. Sie erhalten eine Email mit Informationen über die Aktivierung.

> **Info**: Sobald die Aktivierung abgeschlossen ist, können Sie auf Ihren Mandanten nicht mehr mit der Cumulocity-Domain zugreifen. Verwenden Sie anstatt dessen Ihren eigenen Domain-Namen.

**Aktualisieren des Zertifikats**

Wenn Ihr Zertifikat abläuft, müssen Sie es durch ein neues Zertifikat mit einer längeren Gültigkeitsdauer aktualisieren. Wenn Sie das Zertifikat aktualisieren, stellen Sie sicher, dass

*   das Zertifikat ein gültiges PKCS#12-Format hat,
*   das Zertifikat nicht passwortgeschützt ist,
*   das Zertifikat aktuell gültig ist (validFrom in der Vergangenheit und validTo in der Zukunft),
*   das Zertifikat exakt denselben Domain-Namen wie das aktuell aktive Zertifikat hat.
*   Sie einen CNAME-Eintrag zu Ihrem DNS-Server hinzugefügt haben. Details zum CNAME-Eintrag finden Sie weiter oben.

**Deaktivieren eines Zertifikats**

Wenn Sie zu Ihrer alten Domain auf Cumulocity zurückkehren möchten, können Sie Ihr Zertifikat ganz einfach wieder deaktivieren.

> **Wichtig**: Verwenden Sie dies Funktion mit Vorsicht. Ihre Kunden werden nicht mehr in der Lage sein, auf Ihre Untermandanten zuzugreifen.

#### Troubleshooting

Für den Fall, dass Sie Cumulocity mit Ihrer eigenen Domain nicht erreichen können, empfehlen wir, zunächst die folgenden Überprüfungen durchzuführen, um Ihre DNS-Einstellungen zu verifizieren.

**Prüfen, ob der DNS-Entrag korrekt ist**

Führen Sie folgendes Kommando aus:

	host management.<ihr domain name>
	
Es sollte das folgende Ergebnis angezeigt werden:

	management.<ihr domain name> ist ein Alias für <instanz domain name>
	<instanz domain name> hat die Adresse <IP-Adresse>
	

**Prüfen, ob die API antwortet** 

Führen Sie folgendes Kommando aus:

	curl -v -u '<Mandanten-ID>/<ihr benutzer>:<ihr password>' --head http://management.<ihr domain name>/inventory/managedObjects
	
Es sollte das folgende Ergebnis angezeigt werden:

	...
	HTTP/1.1 200 OK
	...	


>**Info**: Berücksichtigen Sie, dass es nach dem Ändern des DNS-Eintrags bis zu 24 Stunden dauern kann, bis der neue Eintrag propagiert wurde. 