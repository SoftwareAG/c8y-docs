---
aliases:
- /benutzerhandbuch/overview-de/#accessing-cumulocity-platform
- /benutzerhandbuch/getting-started-de/#accessing-cumulocity-platform
layout: redirect
title: Aufrufen und Anmelden an der Plattform
weight: 20
---

Auf die {{< product-c8y-iot >}}-Plattform können Sie über eine [URL](#url) in einem Webbrowser zugreifen.

### Unterstützte Browser

In dieser Version werden folgende Browser unterstützt:

* Microsoft Edge (neueste Chromium-basierte Version)
* Mozilla Firefox (neuestes Extended Support Release [1])
* Google Chrome [2]
* Internet Explorer 11 [3]

[1] Nur das aktuellste Extended Support Release von Mozilla Firefox wird ausdrücklich unterstützt. Mögliche Inkompatibilitäten werden während des regulären Wartungsprozesses von {{< product-c8y-iot >}} behoben. Aufgrund der zahlreichen Upgrades der Mozilla Firefox-Kundenreleases kann die Kompatibilität von {{< product-c8y-iot >}} mit anderen Versionen von Mozilla Firefox nicht garantiert werden.

[2] Der Google Chrome-Support basiert auf Google Chrome Version 84. Aufgrund zahlreicher Versions-Upgrades von Google Chrome kann die Kompatibilität von {{< product-c8y-iot >}} mit zukünftigen Versionen von Google Chrome nicht vollständig garantiert werden. Mögliche Inkompatibilitäten werden während des regulären Wartungsprozesses von {{< product-c8y-iot >}} behoben.

{{< c8y-admon-important title="Wichtig" >}}
[3] {{< product-c8y-iot >}} ist in Internet Explorer 11 funktionsfähig, die angebotene Benutzeroberfläche entspricht jedoch nicht dem neuesten Stand der Technik. Daher wird {{< product-c8y-iot >}} 10.7 die letzte Version sein, die diesen Browser unterstützt. In nachfolgenden Releases wird weiterhin die neueste Version des Microsoft Edge Browsers (als Nachfolger des Internet Explorer) unterstützt.
{{< /c8y-admon-important >}}

Sie können auch gängige Webbrowser für Smartphones und Tablets verwenden. Unsere Produkte wurden mit den folgenden mobilen Webbrowsern getestet:

* Chrome auf Android (neueste Version) auf Galaxy Smartphones und Tablets
* Safari auf iOS (neueste Version) auf Apple iPhone und iPad

{{< c8y-admon-info >}}
Auf Mobilgeräten weist {{< product-c8y-iot >}} einige Einschränkungen auf.
Bei diesen Einschränkungen kann es sich um Folgendes handeln:
* Die Nutzung kann je nach Speicher und Rechenleistung des Geräts eingeschränkt sein. <br>  
Das Laden von Graphen mit einer großen Anzahl an Datenpunkten etwa kann dazu führen, dass das Gerät nicht mehr reagiert.
* Die Nutzung des private Modus eines Browsers funktioniert möglicherweise nicht.
* Die [Anwendung Streaming Analytics](/apama/overview-analytics/) unterstützt keine Mobil- oder Touch-Geräte.
{{< /c8y-admon-info >}}

<a name="url"></a>
### URL

Um auf die Anwendungen Ihres {{< product-c8y-iot >}}-Mandanten zuzugreifen, verwenden Sie die folgende URL:

```http
https://<tenant-domain>.{{< domain-c8y >}}/
```

Sie werden zur Anmeldeseite Ihrer Standardanwendung weitergeleitet. Weitere Informationen zu Mandanten-ID und Mandanten-Domain finden Sie unter [Tenants](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Tenants) in der {{< openapi >}}.


{{< c8y-admon-info >}}
Die oben angezeigte URL gilt nur, wenn Sie einen {{< product-c8y-iot >}} {{< standard-tenant-de >}} nutzen. Die URL für die {{< enterprise-tenant-de >}}s von {{< product-c8y-iot >}} ist individuell für Ihr Unternehmen.
{{< /c8y-admon-info >}}

{{< c8y-admon-important title="Wichtig" >}}
Stellen Sie sicher, dass die Adressleiste des Browsers ein Schloss-Symbol zeigt. Das Schloss-Symbol zeigt an, dass Sie eine sichere Verbindung nutzen und tatsächlich mit der {{< product-c8y-iot >}}-Plattform verbunden sind.
{{< /c8y-admon-important >}}

<a name="login"></a>
### Anmelden an der Plattform

Geben Sie auf der Anmeldeseite Ihren Benutzernamen (Unterscheidung zwischen Groß- und Kleinbuchstaben) und Ihr Passwort ein.

Wenn Sie eine der Public-Cloud-Instanzen der {{< product-c8y-iot >}}-Plattform verwenden und sich zum ersten Mal anmelden, sehen Sie unten ein Cookie-Banner:

<img src="/images/benutzerhandbuch/getting-started/getting-started-cookie-banner.png" alt="Login prompt">
<br>

{{< c8y-admon-info >}}
Das Cookie-Banner ist bei den Public-Cloud-Instanzen von {{< product-c8y-iot >}} standardmäßig eingeschaltet. Bei lokalen Instanzen kann diese Funktion konfiguriert werden, siehe [{{< enterprise-tenant-de >}} > Anpassen der Plattform > Branding](/benutzerhandbuch/enterprise-tenant-de/#branding).
{{< /c8y-admon-info >}}

* Klicken Sie auf **Akzeptieren und fortfahren**, um die Cookie-Standardeinstellungen (erforderliche und funktionelle Cookies aktiviert) zu akzeptieren.
* Klicken Sie auf **Alle ablehnen**, um alle Cookie-Standardeinstellungen abzulehnen.
* Klicken Sie auf **Cookie-Einstellungen**, um Ihre individuellen Einstellungen zu wählen:
	* **Erforderlich** - erforderlich zum Aktivieren der Kernfunktionalität der Website. Diese Cookies führen eine Aufgabe oder Operation aus, ohne die die Website nicht funktionieren würde. Erforderliche Cookies können nicht deaktiviert werden.
	* **Funktionell** - Diese Cookies dienen zur Verfolgung der Website-Nutzung und zur Verarbeitung persönlicher Daten zur Messung und Verbesserung der Benutzerfreundlichkeit und Leistung. Funktionelle Cookies müssen aktiv eingeschaltet werden.
* Klicken Sie auf **See also our Privacy Notice**, um die [{{< company-sag >}} Datenschutzerklärung]({{< link-sag-privacy-statement >}}) mit Details zur Datenschutzerklärung der {{< company-sag >}} zu öffnen.


{{< c8y-admon-info >}}
Wenn Sie funktionelle Cookies aktiviert haben, können Sie das Produkterfahrungs-Tracking später über den Dialog **Benutzereinstellungen** abwählen, siehe [Benutzeroptionen und -einstellungen](/benutzerhandbuch/getting-started-de/#user-settings).
{{< /c8y-admon-info >}}

Aktivieren Sie die Checkbox **Passwort merken**, damit der Browser sich Ihre Zugangsdaten merkt, so dass Sie diese nicht wieder bereitstellen müssen, wenn Sie die Anwendung das nächste mal öffnen. Dies ist außerdem praktisch, wenn Sie häufig zwischen {{< product-c8y-iot >}}-Anwendungen wechseln, da die {{< product-c8y-iot >}}-Plattform Sie sonst bei jedem Wechsel auffordert, sich zu authentifizieren. Melden Sie sich explizit ab, damit der Browser Ihre Zugangsdaten "vergisst".

Klicken Sie auf **Anmelden**, um zur {{< product-c8y-iot >}}-Plattform zu gelangen. Zunächst gelangen Sie zur [Cockpit-Anwendung](/benutzerhandbuch/cockpit-de) (sofern nicht anders konfiguriert).

![image alt text](/images/benutzerhandbuch/cockpit/cockpit-home-screen.png)

Um sich explizit abzumelden, klicken Sie auf die Schaltfläche **Benutzer** rechts in der oberen Leiste und wählen Sie dann **Abmelden** im Kontextmenü.

{{< c8y-admon-info >}}
Die maximale Anzahl der erfolglosen Anmeldeversuche (aufgrund ungültiger Zugangsdaten), nach denen ein Benutzer gesperrt wird, kann vom {{< management-tenant-de >}}en auf der Plattform-Ebene eingestellt werden, siehe *{{< product-c8y-iot >}} Core - Operations guide*. Der Standardwert ist 100.
{{< /c8y-admon-info >}}

<a name="reset-password"></a>
### Zurücksetzen Ihres Passworts

1. Klicken Sie auf den Link **Passwort vergessen?** auf der Anmeldeseite.
2. Geben Sie im darauffolgenden Dialog Ihre E-Mail-Adresse ein und klicken Sie auf **Passwort zurücksetzen**.
3. Suchen Sie in Ihrem E-Mail-Konto nach einer E-Mail vom {{< product-c8y-iot >}}-Plattform-Support, die einen Passwort-Link enthält.
4. Klicken Sie auf diesen Link und stellen Sie ein neues Passwort bereit.

{{< c8y-admon-info >}}
Der Link zum Zurücksetzen des Passworts ist nur einen Tag gültig.
{{< /c8y-admon-info >}}

{{< c8y-admon-info >}}
Das automatisierte Zurücksetzen des Passworts funktioniert nur, wenn Ihre E-Mail-Adresse in Ihrem {{< product-c8y-iot >}}-Benutzerkonto hinterlegt ist. Wenn Sie eine Warnung erhalten, dass Ihr Passwort nicht zurückgesetzt werden konnte, verwenden Sie entweder eine andere E-Mail-Adresse als in Ihrem {{< product-c8y-iot >}}-Benutzerkonto hinterlegt, oder es ist keine E-Mail-Adresse hinterlegt. Kontaktieren Sie in beiden Fällen den {{< product-c8y-iot >}}-Administrator in Ihrem Unternehmen. Ein Administrator kann Ihr Passwort zurücksetzen.
{{< /c8y-admon-info >}}

Wenn Sie selbst der Hauptadministrator sind, wird die E-Mail-Adresse, die Sie bei der ersten Registrierung angegeben haben, automatisch gespeichert. Wenn Sie weitere Fragen haben, kontaktieren Sie den [Produkt-Support](/welcome/contacting-support/).

<a name="URLs"></a>
### Zugreifen auf Seiten über URLs

Sie können unmittelbar an jede Stelle in einer {{< product-c8y-iot >}}-Anwendung navigieren, indem Sie die entsprechende URL verwenden. So können Sie etwa, um allgemeine Information zu einem Gerät anzuzeigen, die folgende URL eingeben:

```http
https://<tenant-domain>.{{< domain-c8y >}}/apps/devicemanagement/index.html#/device/<id>/info
```

Durch die Verwendung einer URL können Sie:

*   Lesezeichen für bestimmte Seiten speichern.
*   E-Mails mit einem Link zu Geräten oder Sensordaten manuell oder automatisch mithilfe der Echtzeitverarbeitungs-Engine versenden.
*   die Vorwärts- und Rückwärtsnavigation Ihres Browsers verwenden.
*   eigene Webanwendungen schreiben, die direkt auf Informationen in {{< product-c8y-iot >}}-Anwendungen verweisen.
