---
weight: 20
title: Aufrufen und Anmelden an der Cumulocity-Plattform
layout: redirect
---
Auf die Cumulocity IoT-Plattform können Sie über einen Webbrowser zugreifen. Unsere Produkte wurden mit den folgenden Webbrowsern getestet:

* Edge Browser
* Internet Explorer (neueste Version)
* Firefox (neueste Version)    
* Chrome (neueste Version)

>**Info:** Cumulocity ist voll funktionsfähig auf Internet Explorer 11. Allerdings ist das Layout möglicherweise nicht immer einwandfrei.

Sie können Cumulocity auch auf gängigen Smartphones und Tablets nutzen. Unsere Produkte wurden mit den folgenden mobilen Webbrowsern getestet:

* Chrome auf Android (neueste Version) auf Galaxy Smartphones und Tablets
* Safari auf iOS (neueste Version) auf Apple iPhone und iPad

>**Info:** Die Nutzung von Cumulocity auf mobilen Geräten kann je nach Speicher und Rechenleistung des Geräts eingeschränkt sein. Das Laden von Graphen mit einer großen Anzahl an Datenpunkten etwa kann dazu führen, dass das Gerät nicht mehr reagiert.  
Die Nutzung des private Modus eines Browsers funktioniert möglicherweise nicht.

Um auf die Anwendungen Ihres Cumulocity-Mandanten zuzugreifen, verwenden Sie die folgende URL:

```http
https://<tenant-domain>.cumulocity.com/
```

Sie werden zur Anmeldeseite Ihrer Standardanwendung weitergeleitet. Sie können [Tenants > Tenant ID and tenant domain](/reference/tenants/#a-name-tenant-id-and-domain-a-tenant-id-and-tenant-domain) im Reference guide nachschlagen, um die Beziehung zwischen Mandanten-ID und Mandanten-Domain besser zu verstehen.

> **Wichtig:** Stellen Sie sicher, dass die Adressleiste des Browsers ein Schloss-Symbol zeigt. Das Schloss-Symbol zeigt an, dass Sie eine sichere Verbindung nutzen und tatsächlich mit Cumulocity verbunden sind.

>**Info:** Die oben angezeigte URL gilt nur, wenn Sie einen Cumulocity Standard Tenant nutzen. Die URL für Enterprise Tenants von Cumulocity IoT ist individuell für Ihr Unternehmen.

### <a name="login"></a>So melden Sie sich an der Cumulocity-Plattform an

Geben Sie auf der Anmeldeseite Ihren Benutzernamen und Ihr Passwort ein und klicken Sie **Anmelden**, um die Anwendung zu öffnen.

<img src="/images/benutzerhandbuch/overview-login.png" alt="Login prompt">

Aktivieren Sie die Checkbox **Passwort merken**, damit der Browser sich Ihre Zugangsdaten merkt, so dass Sie diese nicht wieder bereitstellen müssen, wenn Sie die Anwendung das nächste mal öffnen. Dies ist außerdem praktisch, wenn Sie häufig zwischen Anwendungen wechseln, da Cumulocity Sie sonst bei jedem Wechsel auffordert, sich zu authentifizieren. Melden Sie sich explizit ab, damit der Browser Ihre Zugangsdaten "vergisst".

Wenn Sie sich das erste Mal bei Cumulocity anmelden, werden Sie zur Standardanwendung (falls nicht anders konfiguriert, ist dies die [Cockpit](/benutzerhandbuch/cockpit)-Anwendung) weitergeleitet.

![image alt text](/images/benutzerhandbuch/cockpit/cockpit-home-screen.png)

Um sich explizit abzumelden, klicken Sie auf die Schaltfläche **Benutzer** rechts in der oberen Leiste und wählen Sie im Kontextmenü **Abmelden**.

<img src="/images/benutzerhandbuch/overview-logout.png" alt="Logout menu" style="max-width: 100%">

### <a name="reset-password"></a>So setzen Sie Ihr Passwort zurück

1. Klicken Sie auf den Link **Passwort vergessen?** auf der Anmeldeseite.
2. Geben Sie im darauffolgenden Dialog Ihre E-Mail-Adresse ein und klicken Sie auf **Passwort zurücksetzen**.
3. Suchen Sie in Ihrem E-Mail-Konto nach einer E-Mail vom Cumulocity-Support, die einen Passwort-Link enthält.
4. Klicken Sie auf diesen Link und stellen Sie ein neues Passwort bereit.

> **Info:** Der Link zum Zurücksetzen des Passworts ist nur einen Tag gültig.

>**Info:** Das automatisierte Zurücksetzen des Passworts funktioniert nur, wenn Ihre E-Mail-Adresse in Ihrem Benutzerkonto hinterlegt ist. Wenn Sie eine Warnung erhalten, dass Ihr Passwort nicht zurückgesetzt werden konnte, verwenden Sie entweder eine andere E-Mail-Adresse als in Ihrem Benutzerkonto hinterlegt, oder es ist keine E-Mail-Adresse hinterlegt. Kontaktieren Sie in beiden Fällen den Cumulocity-Administrator in Ihrem Unternehmen. Ein Administrator kann Ihr Passwort zurücksetzen.
>
Wenn Sie selbst der Hauptadministrator sind, wird die E-Mail-Adresse, die Sie bei der ersten Registrierung angegeben haben, automatisch gespeichert. Wenn Sie weitere Fragen haben, kontaktieren Sie den Cumulocity-Support.

### <a name="URLs"></a>Zugreifen auf Seiten mittels URL

Sie können unmittelbar an jede Stelle in einer Cumulocity-Anwendung navigieren, indem Sie die entsprechende URL verwenden. So können Sie etwa, um allgemeine Information zu einem Gerät anzuzeigen, die folgende URL eingeben:

```http
https://<tenant-domain>.cumulocity.com/apps/devicemanagement/index.html#/device/<id>/info
```

Durch die Verwendung einer URL können Sie:

*   Lesezeichen für bestimmte Seiten speichern.
*   E-Mails versenden (manuell oder automatisch über die Echtzeitverarbeitungs-Engine), die einen Link zu bestimmten Geräten oder Sensordaten enthalten.
*   die Vorwärts- und Rückwärtsnavigation Ihres Browsers verwenden.
*   eigene Webanwendungen schreiben, die direkt auf Informationen in Cumulocity-Anwendungen verweisen.
