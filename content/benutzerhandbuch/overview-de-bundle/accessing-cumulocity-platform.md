---
weight: 10
title: Aufrufen und Anmelden an der Cumulocity-Plattform
layout: redirect
---

<a name="accessing"></a>

### Aufrufen von Cumulocity

Um auf die Cumulocity-Plattform zugreifen zu können, benötigen Sie einen aktuellen Webbrowser. Unsere Produkte wurden mit den folgenden Webbrowsern getestet:

*   Edge Browser
*   Internet Explorer (neueste Version)
*   Firefox (neueste Version)  
*   Chrome (neueste Version)

> **Info:** Cumulocity ist voll funktionsfähig auf Internet Explorer 11\. Allerdings ist das Layout möglicherweise nicht immer einwandfrei.

Sie können Cumulocity auch auf gängigen Smartphones und Tablets nutzen. Unsere Produkte wurden mit den folgenden mobilen Webbrowsern getestet:

*   Chrome auf Android (neueste Version) auf Galaxy Smartphones und Tablets
*   Safari auf iOS (neueste Version) auf Apple iPhone und iPad

> **Info:** Die Nutzung von Cumulocity auf mobilen Geräten kann je nach Speicher und Rechenleistung des Geräts eingeschränkt sein. Das Laden von Graphen mit einer großen Anzahl an Datenpunkten etwa kann dazu führen, dass das Gerät nicht mehr reagiert.
> 
> Die Nutzung des private Modus eines Browsers funktioniert möglicherweise nicht.

Um auf die Anwendungen Ihres Cumulocity-Mandanten zuzugreifen, verwenden Sie die folgende URL:


    https://<account>.cumulocity.com/


Sie werden zur Anmeldeseite Ihrer Standardanwendung weitergeleitet.

> **Wichtig:** Stellen Sie sicher, dass die Adressleiste des Browsers ein Schloss-Symbol zeigt. Das Schloss-Symbol zeigt an, dass Sie eine sichere Verbindung nutzen und tatsächlich mit Cumulocity verbunden sind.
> 
> **Info:** Die oben angezeigte URL gilt nur für den Standard Tenant von Cumulocity IoT. Die URL für den Enterprise Tenant von Cumulocity IoT ist individuell für Ihr Unternehmen.

### <a name="login"></a>Anmelden an der Cumulocity-Plattform

Geben Sie auf der Anmeldeseite Ihren Benutzernamen und Ihr Passwort ein und klicken Sie **Anmelden**, um die Anwendung zu öffnen.

![Anmelden](/guides/images/benutzerhandbuch/Einloggen.png)

Aktivieren Sie die Checkbox **Passwort merken**, damit der Browser sich Ihre Zugangsdaten merkt, so dass Sie diese nicht wieder bereitstellen müssen, wenn Sie die Anwendung das nächste mal öffnen. Dies ist außerdem praktisch, wenn Sie häufig zwischen Anwendungen wechseln, da Cumulocity Sie sonst bei jedem Wechsel auffordert, sich zu authentifizieren. Melden Sie sich explizit ab, damit der Browser Ihre Zugangsdaten "vergisst".

Um sich abzumelden, klicken Sie auf die Schaltfläche **Benutzer** rechts in der oberen Leiste und wählen Sie im Kontextmenü **Abmelden**.

![Logout](/guides/images/benutzerhandbuch/Overview_Logout.png)


### <a name="welcome"></a>Begrüßungsbildschirm

Wenn Sie sich das erste mal bei Cumulocity anmelden, werden Sie zur Standardanwendung (falls nicht anders konfiguriert, ist dies die Cockpit-Anwendung) weitergeleitet, wo zunächst der **Begrüßungsbildschirm** angezeigt wird.

<img src="/guides/images/benutzerhandbuch/Overview_WelcomeScreen.png" name="Welcome screen" style="width:100%;"/>

Der **Begrüßungsbildschirm** enthält folgende Elemente:

*   Quick Links zu den wichtigsten Funktionen
*   Links zu den verfügbaren Anwendungen
*   Links zu den relevanten Bereichen in der Dokumentation und zum Support-Forum
*   Die neuesten Nachrichten auf dem Twitter Channel von Cumulocity Dieser Bereich wird nur Mandanten angezeigt, die auf www.cumulocity.com gehostet werden.

**Verbergen/Wiederherstellen des Begrüßungsbildschirms**

Wenn Sie nicht möchten, dass der **Begrüßungsbildschirm** Ihr Startbildschirm ist, aktivieren Sie den Schalter **Nicht als Startseite verwenden**.

Um den **Begrüßungsbildschirm** als Startseite wiederherzustellen, wählen Sie "Willkommen" oben im Navigator und deaktivieren Sie den Schalter **Nicht als Startseite verwenden** wieder.

### <a name="reset-password"></a>Zurücksetzen des Passworts

Wenn Sie Ihr Passwort vergessen haben, führen Sie folgende Schritte durch:

1.  Klicken Sie auf den Link **Passwort vergessen?** auf der Anmeldeseite.
2.  Geben Sie im folgenden Dialog Ihre E-Mail-Adresse ein und klicken Sie **Passwort zurücksetzen**.
3.  Suchen Sie in Ihrem E-Mail-Konto nach einer E-Mail vom Cumulocity-Support, die einen Passwort-Link enthält.
4.  Klicken Sie auf diesen Link und stellen Sie ein neues Passwort bereit.

> **Info:** Der Link zum Zurücksetzen des Passworts ist nur einen Tag gültig.

![Passwort zurücksetzen](/guides/images/benutzerhandbuch/Passwort-Reset.png)

> **Info:** Das automatisierte Zurücksetzen des Passworts funktioniert nur, wenn Ihre E-Mail-Adresse in Ihrem Benutzerkonto hinterlegt ist. Wenn Sie eine Warnung erhalten, dass Ihr Passwort nicht zurückgesetzt werden konnte, verwenden Sie entweder eine andere E-Mail-Adresse als in Ihrem Benutzerkonto hinterlegt, oder es ist keine E-Mail-Adresse hinterlegt. Kontaktieren Sie in beiden Fällen den Cumulocity-Administrator in Ihrem Unternehmen. Ein Administrator kann Ihr Passwort zurücksetzen. Wenn Sie selbst der Hauptadministrator sind, wird die E-Mail-Adresse, die Sie bei der ersten Registrierung angegeben haben, automatisch gespeichert. Wenn Sie weitere Fragen haben, kontaktieren Sie den Cumulocity-Support.

### <a name="change-password"></a>Ändern des Passworts

Wenn Sie Ihr Passwort ändern möchten, führen Sie folgende Schritte durch:

1.  Klicken Sie auf die Schaltfläche **Benutzer** rechts in der oberen Leiste und wählen Sie im Kontextmenü **Benutzereinstellungen**.
2.  Klicken Sie **Passwort ändern** im Fenster "Benutzer bearbeiten".
3.  Geben Sie ein Passwort ein und bestätigen Sie es.
4.  Klicken Sie **Speichern**, um Ihre Eingaben zu speichern.

Stellen Sie sicher, dass Sie ein starkes Passwort gewählt haben. Um Sie dabei zu unterstützen, wird während der Passwortänderung ein Passwortstärke-Indikator angezeigt.

![Passwort ändern](/guides/images/benutzerhandbuch/Passwort-aendern.png)

Standardmäßig muss das Passwort 8 Zeichen enthalten. Ein starkes Passwort muss mindestens 3 der folgenden Zeichentypen enthalten: Großbuchstaben, Kleinbuchstaben, Zahlen und Symbole.

> **Info:** Die Passwortregeln können vom Administrator konfiguriert werden, d.h. der Administrator kann die Einhaltung bestimmter Richtlinien für das Passwort Ihres Kontos erzwingen. So kann es etwa erforderlich sein, dass Sie ein starkes Passwort wählen oder Ihr Passwort regelmäßig ändern müssen.

### <a name="URLs"></a>Zugreifen auf Seiten mittels URL

Sie können unmittelbar an jede Stelle in einer Cumulocity-Anwendung navigieren, indem Sie die entsprechende URL verwenden. So können Sie etwa, um allgemeine Information zu einem Gerät anzuzeigen, die folgende URL eingeben:


    https://<account>.cumulocity.com/apps/devicemanagement/index.html#/device/<id>/info


Durch die Verwendung einer URL können Sie

*   Lesezeichen für bestimmte Seiten speichern,
*   E-Mails versenden (manuell oder automatisch über die Echtzeitverarbeitungs-Engine), die einen Link zu bestimmten Geräten oder Sensordaten enthalten,
*   die Vorwärts- und Rückwärtsnavigation Ihres Browsers verwenden,
*   eigene Webanwendungen schreiben, die direkt auf Informationen in Cumulocity-Anwendungen verweisen.

