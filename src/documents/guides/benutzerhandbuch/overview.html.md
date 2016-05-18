---
order: 10
title: Übersicht
layout: default
---

## Einleitung

In den folgenden Abschnitten wird die allgemeine Bedienung der Cumulocity-Anwendungen beschrieben. Sie erhalten eine Übersicht über

   * die [Nutzung von Cumulocity-Anwendungen](#accessing).
   * die [Anmeldung](#login) bei Cumulocity-Anwendungen.
   * die [Navigation](#navigating) innerhalb von Cumulocity-Anwendungen.
   * die Nutzung von [Dashboards](#dashboards).

## <a name="accessing"></a>Nutzung von Cumulocity-Anwendungen

Um Cumulocity-Anwendungen nutzen zu können, benötigen Sie einen modernen Webbrowser. Cumulocity testet mit den folgenden Browsern:

  * Internet Explorer (Version 10 und 11)
  * Firefox (aktuellste Version)
  * Chrome (aktuellste Version)

Sie können ebenfalls Webbrowser von neueren Smartphones und Tablets verwenden. Cumulocity testet mit den folgenden mobilen Browsern:

  * Chrome für Android (aktuellste Version) auf Galaxy Smartphones und Tablets.
  * Safari für iOS (aktuellste Version) auf Apple iPhones und iPads.

> Berücksichtigen Sie die Einschränkungen von mobilen Geräten. Wenn sie beispielsweise eine große Anzahl von Datenpunkten auf einem mobilen Gerät anzeigen lassen, kann das Gerät langsam werden bzw. nicht mehr reagieren. Das Verwenden von Cumulocity-Anwendungen im privaten Modus des Webbrowsers ist nicht unterstützt.

Um auf Ihren Cumulocity-Mandanten zugreifen zu können, benutzen Sie die folgende URL:

	https://<mandant>.cumulocity.com/

Die URL wird Sie auf eine Seite weiterleiten, auf der Sie sich anmelden können.

<img src="/guides/users-guide/login.png" alt="Login prompt" style="max-width: 50%">

> Wir empfehlen die Verwendung von HTTPS. Überprüfen sie die Adressleiste ihres Browsers: Sie sollte ein grünes Schloss-Symbol anzeigen. Nur so können Sie sicher sein, dass ihre Verbindung verschlüsselt ist und sie auch tatsächlich mit Cumulocity verbunden sind.

> Der oben angegebene Link ist nur für Abonnenten der Cumulocity Standard Edition gültig. Für Abonnenten der Cumulocity Reserved oder Private Edition erhalten sie eine andere URL.

## <a name="login"></a>Anmeldung

Geben Sie Ihren Nutzernamen und Ihr Passwort zur Anmeldung ein. Das "Remember me"-Kontrollkästchen bewirkt, dass sich der Webbrowser Ihre Zugangsdaten merkt. Auf diese Weise müssen Sie Ihre Zugangsdaten nicht noch einmal eingeben, wenn Sie die Anwendung das nächste Mal starten, oder wenn sie zwischen Anwendungen hin und her wechseln möchten. Um den Webbrowser Ihre Zugangsdaten "vergessen" zu lassen, müssen Sie sich abmelden. Wenn Sie auf Ihren Nutzernamen oben rechts klicken, erscheint der Menüpunkt "Ausloggen", mit dem Sie sich abmelden können.

<img src="/guides/benutzerhandbuch/overview/logout.png" alt="Logout menu" style="max-width: 60%">

> Aus Sicherheitsgründen verwendet Cumulocity keine Cookies.

Falls Sie Ihr Passwort vergessen haben sollten, klicken Sie auf den Link "Forgot password?" auf der Anmeldeseite. Tragen Sie Ihre E-Mail-Adresse ein und klicken Sie auf "Reset password". Anschließend sollten Sie eine E-Mail mit einem Link erhalten, mit welchem Sie Ihr Passwort zurücksetzen können. Folgen Sie dem Link und geben Sie Ihr neues Passwort ein. Der Link ist nur für eine Stunde gültig.

<img src="/guides/users-guide/resetpassword.png" alt="Reset password" style="max-width: 50%">

Das Zurücksetzen eines Passworts ist nur möglich, wenn Ihre E-Mail-Adresse in den Benutzereinstellungen eingetragen ist. Falls Sie eine Warnung erhalten, dass Ihr Passwort nicht zurückgesetzt werden konnte, ist in ihren Benutzereinstellungen keine oder eine andere E-Mail-Adresse eingetragen. Wenden Sie sich in diesem Fall an den Administrator Ihres Cumulocity-Mandanten, der Ihr Passwort zurücksetzen kann.

> Kontaktieren sie den Cumulocity-Support, wenn sie als Administrator Ihr Passwort vergessen haben und keinen Passwort-Reset durchführen können. Benutzen Sie dazu die E-Mail-Adresse, die sie für die Registrierung bei Cumulocity verwendet haben.

Um Ihr Passwort zu ändern, klicken Sie auf den Menüpunkt "Benutzereinstellungen" in der Anwendung. Verwenden sie sichere Passworte. Um Sie bei der Auswahl eines sicheren Passworts zu unterstützen, wird Ihnen die Stärke des gerade eingegebenen Passworts angezeigt. Ein Passwort muss aus mindestens acht Buchstaben bestehen. Es sollte außerdem große und kleine Buchstaben, sowie Zahlen und Symbole enthalten. Ein starkes Passwort enthält mindestens drei dieser Buchstabenklassen.

<img src="/guides/users-guide/passwordstrength.png" alt="Reset password" style="max-width: 50%">

> Ihr Administrator kann Passwortrichtlinien für Ihren Mandanten vorgeben. Dadurch kann es sein, dass Sie zwingend ein sicheres Passwort wählen müssen, oder Ihr Passwort regelmäßig ändern müssen.

## <a name="navigating"></a>Navigation in Cumulocity-Anwendungen

Sobald Sie sich angemeldet haben, werden Sie zu Ihrer Standard-Anwendung weitergeleitet. Die Ihnen zur Verfügung stehenden Möglichkeiten werden von den folgenden Kriterien beeinflusst:

* Von Anwendungen, die von Ihnen abonniert wurden.
* Von Anwendungen, die von Ihnen selbst hinzugefügt oder für Cumulocity erstellt wurden.
* Von Ihren Nutzerrechten.
* Von der individuellen Konfiguration der Benutzeroberfläche (z.B. Gruppen oder Berichte).
* Von der Funktionalität der Geräte, die Sie verwenden.

Die generelle Struktur einer Cumulocity Anwendung wird in der nächsten Abbildung gezeigt.

* Der Name der aktuell verwendeten Anwendung wird oben links angezeigt.
* Mit Hilfe des Navigators links erreichen sie die unterschiedlichen Seiten der Anwendung. 
* Auf einigen Seiten werden zusätzliche Reiter ("Tabs") angezeigt.
* Der obere Bereich der Anwendung wird als Meldungsleiste genutzt. Statusnachrichten werden in einem grünen Balken angezeigt, Fehler in einem roten Balken.
* Das [Suchfeld](#searching) bietet die Möglichkeit, eine Volltextsuche der Stammdaten durchzuführen.
* Mit dem Kachel-Symbol oben rechts können Sie zwischen Anwendungen wechseln. Falls Sie bei der Anmeldung das "Remember me"-Kontrollkästchen nicht bestätigt haben, müssen Sie Ihre Zugangsdaten erneut eingeben.
* Mit einem Klick auf Ihren Nutzernamen oben rechts öffnen Sie das Nutzer-Menü. Sie können sich über dieses Menü abmelden (selbst wenn Sie auf "Remember me" geklickt haben), die Benutzereinstellungen ändern oder eine Anfrage an den Support stellen. 
* In manchen Seiten können Sie ein Zahnrad-Symbol oben rechts vorfinden, mit dem Sie auf weitere Menüpunkte zugreifen können.

![Cumulocity application](/guides/benutzerhandbuch/overview/app.png)

Auf kleineren Bildschirmen ändert sich das Layout der Anwendung, wie Sie in der unteren Abbildung sehen können. Das Menü wird verborgen und nur einige der Reiter werden angezeigt. Klicken Sie auf das Symbol mit den drei Linien oben links, um das Menü aufzuklappen. Verschieben sie die Reiter, um weitere Reiter sichtbar zu machen. (Wie Sie die Reiter verschieben können, hängt von Ihrem Gerät ab.)

<img src="/guides/users-guide/appsmall.png" alt="Layout on small devices" style="max-width: 50%">

Sie können direkte Links auf einzelne Seiten und Ressourcen in einer Cumulocity-Anwendung setzen. Um z.B. Informationen über ein bestimmtes Gerät abzurufen, können Sie folgende URL verwenden:

	https://<mandant>.cumulocity.com/apps/devicemanagement/index.html#/device/<id>/info

Auf diese Weise können sie

  * Lesezeichen für bestimmte Geräte oder Seiten setzen,
  * E-Mails mit Links auf Daten eines bestimmten Geräts oder Sensors versenden (auch automatisch ausgelöste durch bestimmte Echtzeit-Ereignisse),
  * die Verlaufsfunktion ihres Browsers nutzen,
  * eigene Web Anwendungen entwickeln, die direkt auf Informationen in einer Cumulocity-Anwendung verweisen.

> Normalerweise werden Tooltips angezeigt, wenn Sie sich mit dem Mauszeiger über einem Element in der Benutzeroberfläche befinden. Falls Sie ein Touch-Gerät verwenden, müssen Sie stattdessen das Element länger berühren.

## <a name="settings"></a>Benutzereinstellungen

Um die Einstellungen Ihres Nutzerkontos zu ändern, klicken Sie auf das Nutzer-Symbol oben rechts und dann auf "Benutzereinstellungen". Mit Hilfe des "Sprache"-Auswahlmenüs können Sie einstellen, welche Sprache angezeigt werden soll. Ihr Passwort können Sie ändern, indem Sie auf "Passwort ändern" klicken. Falls Sie Änderungen übernehmen möchten, klicken Sie auf "Speichern". Wenn Sie auf "Abbrechen" klicken, werden die Änderungen nicht übernommen.

<img src="/guides/benutzerhandbuch/overview/usersettings.png" alt="User settings"  style="max-width: 60%">

Die dargestellte Sprache hängt ab:

1. Von der Sprache, die Sie in Cumulocity explizit eingestellt haben,
2. Von der Sprache, die Sie in Ihrem Webbrowser eingestellt haben,
3. Von der Betriebssystemsprache

(in dieser Reihenfolge). Falls keine Sprache angegeben wurde, wird die Sprache automatisch auf Englisch eingetellt.

## <a name="searching"></a>Volltextsuche

Mit dem Suchfeld können sie eine Volltextsuche auf den Stammdaten durchführen. Wenn sie mehrere Worte eingeben, werden die Objekte gesucht, die mindestens eines der eingegebenen Worte enthalten. Wenn sie beispielsweise 

	My Demo Device

eingeben, erhalten sie alls Objekte, die "My", "Demo" oder "Device" enthalten. Wenn sie

	"My Demo Device"

eingeben, erhalten sie alle Objekte, die den Text "My Demo Device" enthalten. Sie können ebenfalls Worte bei der Suche ausschließen. Ein Bindestrich/Minus (-) vor einem Text bewirkt, dass nur Objekte angezeigt werden, die diesen Text nicht beinhalten. Z.B.

	My Demo -Device

sucht in den Stammdaten nach Objekten, die "My" oder "Demo" enthalten, aber nicht "Device". Bei der Volltextsuche ist Groß-/Kleinschreibung nicht relevant. Sie erhalten bei den folgenden Suchtexten das gleiche Ergebnis:

	My Demo Device
	My demo device
