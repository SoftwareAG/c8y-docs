---
order: 10
title: Introduction
layout: default
---

## Einleitung

In den folgenden Kapiteln wird der Umgang mit Cumulocity Anwendungen beschrieben.
Sie erhalten eine Übersicht über

   * die [Nutzung von Cumulocity Anwendungen](#accessing).
   * die [Anmeldung](#login) bei Cumulocity.
   * das [Navigieren](#navigating) in Cumulocity Anwendungen.
   * die Nutzung von [Dashboards](#dashboards).

## <a name="accessing"></a>Nutzung von Cumulocity Anwendungen

Um Cumulocity Anwendungen nutzen zu können, benötigen Sie einen modernen Web Browser. Die Cumulocity Anwendungen werden mit folgenden Web Browsern getestet:

  * Internet Explorer (Version 10 und 11)
  * Firefox (aktuellste Version)
  * Chrome (aktuellste Version)

Sie können die Web Browser von neueren Smartphones und Tablets ebenfalls verwenden. Die Cumulocity Anwendungen werden mit folgenden Web Browsern getestet:

  * Chrome für Android (aktuellste Version) auf Galaxy Smartphones und Tablets.
  * Safari für iOS (aktuellste Version) auf Apple iPhones und iPads.

> Beachten Sie, dass die Nutzung von Cumulocity von der Speicherkapazität und Rechenkraft des Geräts abhängt. Z.B. falls Graphen mit einer riesigen Datenmenge erstellt werden, kann es sein, dass die Anwendung nicht mehr reagiert. Weiterhin ist es möglich, dass der private Modus Ihres Web Browsers nicht funktioniert.

Um auf die Anwendungen Ihres Cumulocity Mandanten zugreifen zu können, benutzen Sie die folgende URL:

	https://<mandant>.cumulocity.com/

Die URL wird Sie auf eine Seite weiterleiten, auf der Sie sich anmelden können.

<img src="/guides/users-guide/login.png" alt="Login prompt" style="max-width: 50%">

> Stellen Sie sicher, dass die Addressleiste Ihres Browsers ein Schloss-Symbol aufweist. Das Symbol zeigt an, dass Sie eine sichere Verbindung nutzen und auch tatsächlich mit Cumulocity verbunden sind.

> Der oben angegebene Link ist nur für Abonnenten der Cumulocity Standard Edition gültig. Für Abonnenten der Cumulocity Reserved oder Private Edition hängt die URL von Ihrer Organisation ab.

## <a name="login"></a>Anmeldung

Um Ihre Anwendung zu starten, geben Sie Ihren Nutzernamen und Ihr Passwort ein. Das "" Kontrollkästchen bewirkt, dass sich der Web Browser Ihre Zugangsdaten merkt. Auf diese Weise müssen Sie Ihre Zugangsdaten nicht noch einmal eingeben, wenn Sie die Anwendung das nächste Mal starten, oder zwischen Anwendungen hin und her wechseln möchten. Um den Web Browser Ihre Zugangsdaten "vergessen" zu lassen, müssen Sie sich abmelden. Wenn Sie auf Ihren Nutzernamen oben rechts klicken, erscheint der Menüpunkt "", mit welchem Sie sich abmelden können.

<img src="/guides/users-guide/logout.png" alt="Logout menu" style="max-width: 60%">

> Aus Sicherheitsgründen verwendet Cumulocity keine Cookies.

Falls Sie Ihr Passwort vergessen haben sollten, klicken Sie auf den "Passwort vergessen?" Link auf der Anmeldeseite. Tragen Sie Ihre E-Mail Addresse ein und klicken Sie auf "Passwort zurücksetzen". Anschließend sollten Sie eine E-Mail mit einem Link erhalten, mit welchem Sie Ihr Passwort zurücksetzen können. Folgen Sie dem Link und geben Sie Ihr neues Passwort ein. Der Link ist nur für eine Stunde gültig.

<img src="/guides/users-guide/resetpassword.png" alt="Reset password" style="max-width: 50%">

Das Zurücksetzen eines Passworts ist nur möglich, falls Sie Ihre E-Mail in Ihrem Cumulocity Nutzerkonto eingetragen haben. Falls Sie eine Warnung erhalten, dass Ihr Passwort nicht zurückgesetzt werden konnte, verwenden Sie entweder eine andere E-Mail Addresse als die, die Sie in Ihrem Nutzerkonto eingetragen haben, oder im Nutzerkonto wurde keine E-Mail Addresse eingetragen. In beiden Fällen müssen Sie sich an den Cumulocity Administrator Ihres Mandanten wenden. Administratoren sind in der Lage, Passwörter zurückzusetzen.

> Falls Sie der primäre Administrator sind, dann ist Ihre E-Mail, die Sie anfangs zur Registrierung bei Cumulocity verwendet haben, automatisch in Ihrem Nutzerkonto gespeichert. Falls Sie Fragen haben, kontaktieren Sie bitte den Cumulocity Support über diese E-Mail Addresse.

Um Ihr Passwort zu ändern, klicken Sie auf den Menüpunkt "Benutzereinstellungen" in der Anwendung. Stellen Sie sicher, dass Ihr Passwort sicher genug ist. Um Sie bei der Auswahl eines sicheren Passworts zu unterstützen, wird Ihnen die Stärke Ihres Passworts angezeigt. Ein Passwort muss aus mindestens acht Buchstaben bestehen. Es sollte außerdem große und kleine Buchstaben, sowie Zahlen und Symbole enthalten. Ein starkes Passwort enthält mindesten drei dieser Buchstabenklassen.

<img src="/guides/users-guide/passwordstrength.png" alt="Reset password" style="max-width: 50%">

> Als Administrator ist es möglich, die Passwortrichtlinien einzustellen. Dadurch kann es sein, dass Sie ein sicheres Passwort wählen, oder Ihr Passwort regelmäßig ändern müssen.

## <a name="navigating"></a>Navigation in Cumulocity Anwendungen

Once you are logged in, your default Cumulocity application will open. The content of Cumulocity applications is entirely dynamic and is generated based on various criteria:
Der Inhalt von Cumulocity Anwendungen wird dynamisch anhand folgender Kriterien generiert:

* Anwendungen, die von Ihner Organisation abonniert wurden.
* Anwendungen, die von Ihrer Organisation selbst konfiguriert oder für Cumulocity erstellt wurden.
* Funktionalitäten, die Ihr Nutzer sehen darf.
* Konfigurationen der Benutzeroberfläche, wie Gruppen oder Berichte.
* Funktionalitäten der Geräte, die Sie verwenden.

Die generelle Struktur einer Cumulocity Anwendung wird in der nächsten Abbildung gezeigt.

* Der Name der aktuell verwendeten Anwendung wird oben links angezeigt.
* Mit Hilfe des Menüs auf der linken Seite können Sie zu verschiedenen Sichten der Anwendungen gelangen. Klicken Sie auf einen Menüpunkt, um die entsprechende Seite zu öffnen. In dem Menü gibt es auch Sektionen, die durch einen Pfeil links neben den Namen des Menüpunkts gekennzeichnet werden. Mit einem Klick auf so eine Sektion können Sie den Inhalt ein- bzw. ausklappen. 
* Bei manchen Seiten werden zusätzliche Reiter angezeigt. Das hängt davon ab, wie viel Information angezeigt werden soll.
* Der obere Bereich der Anwendung wird als Meldungsleiste genutzt, wann immer ein Status (grün) der ein Fehler (rot) angezeigt werden muss.
* Das Suchfeld bietet die Möglichkeit, textuell nach Informationen zu suchen, sofern diese vorhanden sind.
* Mit dem Kachel-Symbol oben rechts können Sie zwischen den Anwendungen wechseln. Falls Sie bei der Anmeldung das "" Kontrollkästchen nicht bestätigt haben, müssen Sie Ihre Zugangsdaten erneut eingeben.
* Mit einem Klick auf Ihren Nutzernamen oben rechts öffnen Sie das Nutzer-Menü. Sie können sich über dieses Menü abmelden (selbst wenn Sie auf "" geklickt haben), die Benutzereinstellungen ändern oder das Hilfe-Menü aufrufen. 
* In manchen Seiten können Sie ein Zahnrad-Symbol oben rechts vorfinden, mit welchem Sie auf weitere Funktionalitäten zugreifen können.

![Cumulocity application](/guides/users-guide/app.png)

Auf kleineren Bildschirmen ändert sich das Layout der Anwendung, wie Sie in der unteren Abbildung sehen können. Das Menü wird verborgen und nur einige der Reiter werden angezeigt. Um das Menü nutzen zu können, klicken Sie auf das Symbol mit den drei Linien oben links. Um weitere Reiter abrufen zu können, "schieben" Sie die Reiter nach links oder rechts. (Wie Sie die Reiter "schieben" können, hängt von Ihrem Gerät ab)

<img src="/guides/users-guide/appsmall.png" alt="Layout on small devices" style="max-width: 50%">

Beachten Sie, dass Sie jede Ressource in einer Cumulocity Anwendung ansteuern können. Um z.B. Informationen über ein Gerät abzurufen, können Sie folgende URL verwenden:

	https://<mandant>.cumulocity.com/apps/devicemanagement/index.html#/device/<id>/info

Mit so einer URL können Sie

  * Lesezeichen für bestimmte Geräte oder Seiten setzen.
  * E-Mails versenden (manuell oder automatisch durch die Verarbeitung von Ereignissen in Echtzeit), welche eine Verknüpfung zu Daten eines bestimmten Geräts oder Sensors enthalten.
  * die "eine Seite zurück/vor" Navigation in Ihrem Web Browser nutzen.
  * eigene Web Anwendungen entwickeln, die direkt auf Informationen in einer Cumulocity Anwendung verweisen.

> Normalerweise werden Tooltips angezeigt, wenn Sie sich mit dem Mauszeiger über einem Element in der Benutzeroberfläche befinden. Falls Sie jedoch ein Touch-Gerät verwenden, müssen Sie stattdessen das Element länger berühren.

## <a name="settings"></a>Benutzereinstellungen

Um die Einstellungen Ihres Nutzerkontos zu ändern, klicken Sie auf das Nutzer-Symbol oben rechts und dann auf "Benutzereinstellungen". Mit Hilfe des "" Auswahlmenüs können Sie einstellen, welche Sprache in der Cumulocity Anwendung angezeigt werden soll. Ihr Passwort können Sie ändern, indem Sie auf "Passwort ändern" klicken. Falls Sie Änderungen übernehmen möchten, klicken Sie auf "Speichern". Wenn Sie auf "Abbrechen" klicken, werden die Änderungen nicht übernommen.

<img src="/guides/users-guide/usersettings.png" alt="User settings"  style="max-width: 60%">

Die dargestellte Sprache hängt ab von:

1. Der Sprache, die Sie in der Cumulocity Anwendung angegeben haben.
2. Der Sprache, die Sie in Ihrem Web Browser eingestellt haben.
3. Falls weder in Cumulocity, noch im Web Browser eine Sprache angegeben wurde, wird die Sprache automatisch auf Englisch eingetellt.

> Beachten Sie, dass die Sprache, die in Cumulocity eingestellt wurde, eine höhere Priorität besitzt, als die Sprache, die Sie in Ihrem Web Browser angegeben haben.
