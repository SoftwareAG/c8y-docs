---
weight: 20
title: Aufrufen und Anmelden an der Plattform
layout: redirect
aliases:
  - /benutzerhandbuch/overview/#accessing-cumulocity-platform
  - /benutzerhandbuch/getting-started/#accessing-cumulocity-platform
---

Auf die {{< product-c8y-iot >}}-Plattform können Sie über einen Webbrowser zugreifen.

### Unterstützte Browser

In dieser Version werden folgende Browser unterstützt:

* Microsoft Edge (neueste Chromium-basierte Version)
* Mozilla Firefox (neuestes Extended Support Release [1])
* Google Chrome [2]
* Internet Explorer 11 [3]

[1] Nur die Extended Support Releases von Mozilla Firefox werden ausdrücklich unterstützt. Aufgrund der zahlreichen Upgrades der Mozilla Firefox-Kundenreleases kann die Kompatibilität von {{< product-c8y-iot >}} mit zukünftigen Versionen von Mozilla Firefox nicht vollständig garantiert werden. Mögliche Inkompatibilitäten werden während des regulären Wartungsprozesses von {{< product-c8y-iot >}} behoben.

[2] Der Google Chrome-Support basiert auf Google Chrome Version 84. Aufgrund zahlreicher Versions-Upgrades von Google Chrome kann die Kompatibilität von {{< product-c8y-iot >}} mit zukünftigen Versionen von Google Chrome nicht vollständig garantiert werden. Mögliche Inkompatibilitäten werden während des regulären Wartungsprozesses von {{< product-c8y-iot >}} behoben.

>**Wichtig:** [3] {{< product-c8y-iot >}} ist in Internet Explorer 11 funktionsfähig, die angebotene Benutzeroberfläche entspricht jedoch nicht dem neuesten Stand der Technik. Daher wird {{< product-c8y-iot >}} 10.7 die letzte Version sein, die diesen Browser unterstützt. In nachfolgenden Releases wird weiterhin die neueste Version des Microsoft Edge Browsers (als Nachfolger des Internet Explorer) unterstützt.

Sie können {{< product-c8y-iot >}} auch auf gängigen Smartphones und Tablets nutzen. Unsere Produkte wurden mit den folgenden mobilen Webbrowsern getestet:

* Chrome auf Android (neueste Version) auf Galaxy Smartphones und Tablets
* Safari auf iOS (neueste Version) auf Apple iPhone und iPad

>**Info:** Auf Mobilgeräten weist {{< product-c8y-iot >}} einige Einschränkungen auf:
>
* Die Nutzung kann je nach Speicher und Rechenleistung des Geräts eingeschränkt sein. Das Laden von Graphen mit einer großen Anzahl an Datenpunkten etwa kann dazu führen, dass das Gerät nicht mehr reagiert.
* Die Nutzung des private Modus eines Browsers funktioniert möglicherweise nicht.
* Die [Anwendung Streaming Analytics](/apama/overview-analytics/) unterstützt keine Mobil- oder Touch-Geräte.

### URL

Um auf die Anwendungen Ihres {{< product-c8y-iot >}}-Mandanten zuzugreifen, verwenden Sie die folgende URL:

```http
https://<tenant-domain>.cumulocity.com/
```

Sie werden zur Anmeldeseite Ihrer Standardanwendung weitergeleitet. Weitere Informationen zu Mandanten-ID und Mandanten-Domain finden Sie unter [Tenants > Tenant ID and tenant domain](https://cumulocity.com/api/#tag/Tenants) im **{{< product-c8y-iot >}} OpenAPI Specification**.

>**Info:** Die oben angezeigte URL gilt nur, wenn Sie einen {{< product-c8y-iot >}} Standard Tenant nutzen. Die URL für die Enterprise Tenants von {{< product-c8y-iot >}} ist individuell für Ihr Unternehmen.

> **Wichtig:** Stellen Sie sicher, dass die Adressleiste des Browsers ein Schloss-Symbol zeigt. Das Schloss-Symbol zeigt an, dass Sie eine sichere Verbindung nutzen und tatsächlich mit der {{< product-c8y-iot >}}-Plattform verbunden sind.

<a name="login"></a>
### So melden Sie sich an der {{< product-c8y-iot >}}-Plattform an

Geben Sie auf der Anmeldeseite Ihren Benutzernamen (Unterscheidung zwischen Groß- und Kleinbuchstaben) und Ihr Passwort ein und klicken Sie auf **Anmelden**, um die Anwendung zu öffnen.

<img src="/images/benutzerhandbuch/getting-started/getting-started-login.png" alt="Login prompt">

Aktivieren Sie die Checkbox **Passwort merken**, damit der Browser sich Ihre Zugangsdaten merkt, so dass Sie diese nicht wieder bereitstellen müssen, wenn Sie die Anwendung das nächste mal öffnen. Dies ist außerdem praktisch, wenn Sie häufig zwischen Anwendungen wechseln, da die {{< product-c8y-iot >}}-Plattform Sie sonst bei jedem Wechsel auffordert, sich zu authentifizieren. Melden Sie sich explizit ab, damit der Browser Ihre Zugangsdaten "vergisst".

Wenn Sie sich das erste Mal an der {{< product-c8y-iot >}}-Plattform anmelden, werden Sie zur Standardanwendung (falls nicht anders konfiguriert, ist dies die [Cockpit](/benutzerhandbuch/cockpit-de)-Anwendung) weitergeleitet.

![image alt text](/images/benutzerhandbuch/cockpit/cockpit-home-screen.png)

Um sich explizit abzumelden, klicken Sie auf die Schaltfläche **Benutzer** rechts in der oberen Leiste und wählen Sie im Kontextmenü **Abmelden**.

<img src="/images/benutzerhandbuch/getting-started/getting-started-logout.png" alt="Logout menu" style="max-width: 100%">

<a name="reset-password"></a>
### So setzen Sie Ihr Passwort zurück

1. Klicken Sie auf den Link **Passwort vergessen?** auf der Anmeldeseite.
2. Geben Sie im darauffolgenden Dialog Ihre E-Mail-Adresse ein und klicken Sie auf **Passwort zurücksetzen**.
3. Suchen Sie in Ihrem E-Mail-Konto nach einer E-Mail vom {{< product-c8y-iot >}}-Plattform-Support, die einen Passwort-Link enthält.
4. Klicken Sie auf diesen Link und stellen Sie ein neues Passwort bereit.

> **Info:** Der Link zum Zurücksetzen des Passworts ist nur einen Tag gültig.

>**Info:** Das automatisierte Zurücksetzen des Passworts funktioniert nur, wenn Ihre E-Mail-Adresse in Ihrem Benutzerkonto hinterlegt ist. Wenn Sie eine Warnung erhalten, dass Ihr Passwort nicht zurückgesetzt werden konnte, verwenden Sie entweder eine andere E-Mail-Adresse als in Ihrem Benutzerkonto hinterlegt, oder es ist keine E-Mail-Adresse hinterlegt. Kontaktieren Sie in beiden Fällen den {{< product-c8y-iot >}}-Administrator in Ihrem Unternehmen. Ein Administrator kann Ihr Passwort zurücksetzen.
>
Wenn Sie selbst der Hauptadministrator sind, wird die E-Mail-Adresse, die Sie bei der ersten Registrierung angegeben haben, automatisch gespeichert. Wenn Sie weitere Fragen haben, kontaktieren Sie den [Produkt-Support](/welcome/contacting-support).

<a name="URLs"></a>
### Zugreifen auf Seiten mittels URL

Sie können unmittelbar an jede Stelle in einer {{< product-c8y-iot >}}-Anwendung navigieren, indem Sie die entsprechende URL verwenden. So können Sie etwa, um allgemeine Information zu einem Gerät anzuzeigen, die folgende URL eingeben:

```http
https://<tenant-domain>.cumulocity.com/apps/devicemanagement/index.html#/device/<id>/info
```

Durch die Verwendung einer URL können Sie:

*   Lesezeichen für bestimmte Seiten speichern.
*   E-Mails versenden (manuell oder automatisch über die Echtzeitverarbeitungs-Engine), die einen Link zu bestimmten Geräten oder Sensordaten enthalten.
*   die Vorwärts- und Rückwärtsnavigation Ihres Browsers verwenden.
*   eigene Webanwendungen schreiben, die direkt auf Informationen in {{< product-c8y-iot >}}-Anwendungen verweisen.
Chromium-basiert.
