---
order: 10
title: Einführung
layout: default
---

## Einführung

Dieser Abschnitt ist eine Basis-Einführung in die Cumulocity Plattform. Sie beschreibt:

   * [Zugriff auf Cumulocity Anwendungen](#zugriff).
   * [Einloggen](#login).
   * [Navigation in Cumulocity](#navigating).
   * [Veränderung der Nutzer Einstellungen](#settings).
   * [Suchen in Cumulocity](#searching).

## <a name="zugriff"></a>Zugriff auf Cumulocity Anwendungen

Um Cumulocity zu nutzen, müssen Sie einen Browser auf dem neuesten Stand installiert haben. Wir testen die Anwendungen mit den folgenden Browsern:

  * Edge Browser 
  * Internet Explorer (Neuester) 
  * Firefox (Neuester) 
  * Chrome (Neuester)
  
Sie können auch aktuelle Smartphone- und Tablet-Webbrowser verwenden. Wir testen mit folgenden mobilen Webbrowsern:

  * Chrome für Android (Neuester) auf Galaxy smartphones und Tablets.
  * Safari auf iOS (Neuester) für Apple iPhone und iPad.
    
> Der private Modus in Browsern funktioniert möglicherweise nicht. Die Verwendung von Cumulocity auf mobilen Geräten kann durch den Speicher und die auf den Geräten verfügbare Verarbeitungsleistung eingeschränkt sein. Beim Laden großer Visualisierungen kann das mobile Gerät kommunikationsunfähig werden.

Verwenden Sie die folgende URL, um auf die Anwendungen für Ihr Cumulocity-Paket zuzugreifen:

	https://<account>.cumulocity.com/

Dadurch gelangen Sie zur Anmeldeseite Ihrer Standardanwendung, die in der folgenden Abbildung dargestellt ist.

<img src="/guides/users-guide/login.png" alt="Login prompt" style="max-width: 50%">


> Stellen Sie sicher, dass die Adressleiste Ihres Browsers ein Sperrsymbol anzeigt. Das Sperrsymbol zeigt an, dass Sie eine sichere Verbindung verwenden und dass Sie tatsächlich mit Cumulocity verbunden sind.
Die oben genannte URL ist nur für Abonnenten der Cumulocity Standard Edition gültig. Für Enterprise Editions von Cumulocity ist die URL für Ihr Unternehmen spezifisch.

## <a name="login"></a>Logging in

Geben Sie auf der Anmeldeseite Ihren Benutzernamen und Ihr Passwort ein, um die Anwendung zu starten. Das Kontrollkästchen "An mich erinnern" lässt den Browser sich an Ihre Anmeldeinformationen erinnern, so dass Sie sie nicht immer wieder eingeben müssen. Dies ist auch praktisch, wenn Sie häufig zwischen Cumulocity-Anwendungen navigieren, da Cumulocity erfordert, dass Sie sich jedes Mal beim Starten einer Anwendung authentifizieren. Sie können wählen, Ihre Anmeldeinformationen zu "vergessen", indem Sie sich explizit mit dem Menüpunkt "Abmelden" in der Anwendung abmelden.

<img src="/guides/users-guide/logout.png" alt="Logout menu" style="max-width: 60%">


**Aus Sicherheitsgründen wird keine Cookie Technologie angewandt.**

Wenn Sie Ihr Passwort vergessen haben, klicken Sie auf den "Passwort vergessen?" Link auf dem Anmeldebildschirm. Sie können nun Ihre E-Mail-Adresse eingeben und auf "Passwort zurücksetzen" klicken. Überprüfen Sie Ihre E-Mail für den Link zum Zurücksetzen des Passworts. Klicken Sie auf den Link, um ein neues Passwort einzugeben.

> Der Passwort zurücksetzen Link ist nur ein Tag gültig.

<img src="/guides/users-guide/resetpassword.png" alt="Reset password" style="max-width: 50%">

Der automatische Passwort Reset wird nur funktionieren, wenn ihre Email Adresse mit einem Cumulocity Nutzerkonto verbunden und gespeichert ist. Wenn Sie eine Warnung erhalten, dass Sie ihr Passwort nicht zurücksetzen koennen, dann benutzen sie entweder eine andere Email Adresse, als die die gespeichert wurde oder sie ist garnicht gespeichert. In jedem Fall sprechen Sie einen Cumulocity Administrator in ihrer Firma oder Organisation an. Administratoren können ihr Passwort zuruecksetzen.

> Wenn Sie selber der Hauptadministrator sind, ist die Email Adresse gespeichert, die bei der Erstanmeldung bei Cumulocity benutzt wurde. Wenn Sie Fragen an den Cumulocity Support haben, benutzen Sie bitte die Email, die bei der Erstanmeldung verwendet wurde.

Um Ihr Passwort zu ändern, klicken Sie in der Anwendung auf das Symbol "Benutzereinstellungen". Bitte achten Sie darauf ein starkes Passwort auszuwählen. Um Sie bei der Auswahl von passwortgeschützten Passwörtern zu unterstützen, wird eine Passwortstärkeanzeige zusammen mit einer Passwortänderung angezeigt. Ein Passwort muss aus mindestens acht Zeichen bestehen. Es sollte eine Mischung aus Zeichenklassen (Groß- und Kleinbuchstaben, Zahlen und Symbolen) verwenden. Ein sicheres Kennwort verwendet mindestens drei der oben genannten vier Zeichenklassen.

<img src="/guides/users-guide/passwordstrength.png" alt="Reset password" style="max-width: 50%">

> Ihr Administrator kann Ihr Konto so konfigurieren, dass es eine Kennwortrichtlinie erzwingt. Sie müssen dann ein starkes Passwort auswählen oder Ihr Passwort regelmäßig ändern.

## <a name="navigating"></a>Navigation innerhalb von Cumulocity 


Sobald Sie angemeldet sind, wird Ihre Standard-Cumulocity-Anwendung geöffnet. Der Inhalt der Cumulocity-Anwendungen ist vollständig dynamisch und wird basierend auf verschiedenen Kriterien generiert:

* Die Anwendungen, die Ihr Unternehmen abonniert hat.
* Die Anwendungen, die Ihr Unternehmen für Cumulocity konfiguriert oder entwickelt hat.
* Die Funktionalität, die ein bestimmter Benutzer sehen darf.
* Die Konfiguration der Benutzeroberfläche, wie Gruppen und Berichte.
* Die Funktionalität der von Ihnen verwendeten Geräte.

## Die Benutzeroberfläche von Cumulocity und Menü Struktur

* Der Name der aktuell sichtbaren Anwendung wird oben links angezeigt. 
* Mit dem Navigator können Sie zu den verschiedenen Seiten einer Anwendung gelangen. Klicken Sie auf einen Eintrag im Navigator, um die entsprechende Seite zu öffnen. Sie können Bereiche im Navigator reduzieren, indem Sie auf die Abschnittsüberschriften klicken (wie die Zeilen mit dem kleinen Dreieck vor dem Text) oder auch expandieren.
* Auf einigen Seiten sind zusätzliche "Tabs" verfügbar, je nachdem, wie viele Informationen angezeigt werden müssen.
* Der obere Bereich der Anwendung wird als Meldungsleiste verwendet, wenn ein Status (grün) oder ein Fehler (rot) angezeigt werden muss.
* Das Feld "search" bietet eine  [Volltextsuche](#searching) an.
* Mit dem Application Switcher können Sie von einer Anwendung zur anderen wechseln. Möglicherweise müssen Sie Ihre Anmeldeinformationen erneut eingeben, wenn Sie "Remember me" nicht auf Ihrem ursprünglichen Login für Cumulocity ausgewählt haben.
* Das Benutzermenü zeigt Ihren Benutzernamen an. Durch Anklicken des Benutzernamens erscheint ein Popup-Menü. Das Popup-Menü erlaubt Ihnen, sich von der Anwendung abzumelden (auch wenn Sie auf "Remember me" geklickt haben) und bietet Zugriff auf Benutzereinstellungen und Hilfe.
* In einigen Bereichen bietet ein Zahnrad oben rechts Zugriff auf weitere Funktionalität über ein Dropdown-Menü.

<img src="/guides/users-guide/appdeutsch.png" alt="Logout menu" style="max-width: 100%">

Bei kleineren Bildschirmen ändert sich das Layout der Benutzeroberfläche wie unten gezeigt. Der Navigator ist ausgeblendet und nur einige Registerkarten werden im Bildschirmbereich angezeigt. Um auf den Navigator zuzugreifen, klicken Sie auf die drei Zeilen links oben. Um auf andere Registerkarten zuzugreifen, navigieren Sie nach links oder rechts.(Wie man genau scrollt ist abhängig vom Gerätetyp.)

<img src="/guides/users-guide/appsmall.png" alt="Layout on small devices" style="max-width: 50%">

Beachten Sie, dass Sie direkt zu jeder Stelle in einer Cumulocity-Anwendung navigieren können. Um beispielsweise die grundlegenden Informationen für ein Gerät anzuzeigen, können Sie die folgende URL eingeben:
	https://<account>.cumulocity.com/apps/devicemanagement/index.html#/device/<id>/info

Mit dieser URL, können Sie

  * Speichern von Lesezeichen für bestimmte Geräte oder Seiten.
  * Senden von E-Mails (manuell oder automatisch über die Echtzeit-Event-Engine), die eine Verbindung zu Geräten oder Sensordaten beinhalten.
  * Verwenden Sie die Rückwärts- und Vorwärtsnavigation Ihres Browsers.
  * Schreiben Sie eigene Web-Anwendungen, die direkt mit den in einer Cumulocity-Anwendung enthaltenen Informationen verknüpfen.
  
> In der Regel bieten Cumulocity-Anwendungen Tooltips, wenn Sie über ein bestimmtes Benutzeroberflächenelement schweben. Wenn Sie Cumulocity-Anwendungen auf Touch-Geräten verwenden, werden Tooltips angezeigt, wenn Sie ein Benutzeroberflächenelement für längere Zeit berühren.

## <a name="settings"></a>Nutzereinstellungen

Um die Einstellungen für Ihren Benutzer zu ändern, klicken Sie oben rechts auf das Benutzersymbol und wählen "Benutzereinstellungen". Stellen Sie die Sprache der Benutzeroberfläche über das Dropdown-Menü "Sprache" ein. Ändern Sie Ihr Passwort, indem Sie auf "Passwort ändern" klicken. Schließlich klicken Sie auf "Speichern", um Ihre Änderungen zu speichern oder "Abbrechen", um sie zu verwerfen.

<img src="/guides/users-guide/usersettings.png" alt="User settings"  style="max-width: 60%">

Die Sprache der Benutzeroberfläche wird nach folgenden Kriterien in der folgenden Reihenfolge ausgewählt:

1. Die in den Cumulocity-Benutzereinstellungen ausgewählte Sprache.
2. Die in den Browser-Einstellungen gewählte Sprache.
3. Die Betriebssystemsprache.

Die Standardsprache ist Englisch.

## <a name="searching"></a>Volltextsuche

Das Cumulocity-Suchfeld bietet eine Volltextsuche des gesamten Inventars. Wenn Sie mehrere durch ein Leerzeichen getrennte Wörter eingeben, werden alle Objekte zurückgegeben, die mit einem der Wörter übereinstimmen. Beispiel: Eingabe von

	My Demo Device

wird alle Einträge zurückgeben, die  "My", "Demo" oder "Device" enthalten. Wenn Sie mit der genauen Wortgruppe übereinstimmen möchten, geben Sie diese ein so ein:

	"My Demo Device"

Sie können Wörter auch ausschließen, indem Sie vor dem Wort einen Bindestrich setzen. Geben Sie beispielsweise Folgendes ein

	My Demo -Device

um im Inventar nach "My" oder "Demo" aber nicht nach "Device" zu suchen.

Groß- und Kleinschreibung wird ignoriert. Folgende Suchtexte liefern das gleiche Ergebnis:

	My Demo Device
	My demo device
