---
order: 10
title: Einführung
layout: default
---

## Einführung

Die folgenden Abschnitte beinhalten eine grundlegende Einführung in die Cumulocity-Plattform. Sie beschreiben:

   * [Zugriff auf Cumulocity-Anwendungen](#zugriff)
   * [Einloggen](#login)
   * [Navigation in Cumulocity](#navigating)
   * [Veränderung der Nutzereinstellungen](#settings)
   * [Suchen in Cumulocity](#searching)

## <a name="zugriff"></a>Zugriff auf Cumulocity-Anwendungen

Um Cumulocity zu nutzen, müssen Sie einen Browser auf dem neuesten Stand installiert haben. Wir testen die Anwendungen mit den folgenden Browsern:

  * Edge Browser 
  * Internet Explorer (neuester) 
  * Firefox (neuester) 
  * Chrome (neuester)
  
Sie können auch aktuelle Smartphone- und Tablet-Webbrowser verwenden. Wir testen mit folgenden mobilen Webbrowsern:

  * Chrome für Android (neuester) auf Galaxy Smartphones und Tablets
  * Safari auf iOS (neuester) für Apple iPhone und iPad
    
> Der private Modus in Browsern funktioniert möglicherweise nicht. Die Verwendung von Cumulocity auf mobilen Geräten kann durch den Speicher und die auf den Geräten verfügbare Verarbeitungsleistung eingeschränkt sein. Beim Laden großer Visualisierungen kann das mobile Gerät kommunikationsunfähig werden.

Verwenden Sie die folgende URL, um auf die Anwendungen für Ihr Cumulocity-Paket zuzugreifen:

	https://<account>.cumulocity.com/

Dadurch gelangen Sie zur Anmeldeseite Ihrer Standardanwendung, die in der folgenden Abbildung dargestellt ist.

<img src="/guides/benutzerhandbuch/Einloggen.png" alt="Einloggen" style="max-width: 50%">


> Stellen Sie sicher, dass die Adressleiste Ihres Browsers ein Sperrsymbol anzeigt. Das Sperrsymbol signalisiert, dass Sie eine sichere Verbindung verwenden und dass Sie tatsächlich mit Cumulocity verbunden sind.
> 
> Die oben genannte URL ist nur für Abonnenten der Cumulocity Standard Edition gültig. Für Enterprise Editions von Cumulocity ist die URL für Ihr Unternehmen spezifisch.

## <a name="login"></a>Einloggen

Geben Sie auf der Anmeldeseite Ihren Benutzernamen und Ihr Passwort ein, um die Anwendung zu starten. Wenn Sie das Kontrollkästchen "Passwort merken" anklicken, erinnert sich Ihr Browser  an Ihre Anmeldeinformationen, so dass Sie sie nicht immer wieder eingeben müssen. Dies ist auch praktisch, wenn Sie häufig zwischen Cumulocity-Anwendungen navigieren, da Cumulocity erfordert, dass Sie sich jedes Mal beim Starten einer Anwendung authentifizieren. Sie können wählen, Ihre Anmeldeinformationen zu "vergessen", indem Sie sich explizit mit dem Menüpunkt "Abmelden" in der Anwendung abmelden.

<img src="/guides/benutzerhandbuch/Ausloggen.png" alt="Ausloggen" style="max-width: 60%">


> Aus Sicherheitsgründen wird keine Cookie-Technologie angewandt.

Wenn Sie Ihr Passwort vergessen haben, klicken Sie auf den "Passwort vergessen?"-Link auf dem Anmeldebildschirm. Sie können nun Ihre E-Mail-Adresse eingeben und auf "Passwort zurücksetzen" klicken. Sie erhalten eine E-Mail mit einem Link zum Zurücksetzen des Passworts. Klicken Sie auf den Link, um ein neues Passwort einzugeben.

> Der Link zum Zurücksetzen des Passwortes ist einen Tag gültig.

<img src="/guides/benutzerhandbuch/Passwort-Reset.png" alt="Passwort-Reset" style="max-width: 50%">

Der automatische Passwort-Reset funktioniert nur, wenn Ihre E-Mail Adresse mit einem Cumulocity-Nutzerkonto verbunden und gespeichert ist. Wenn Sie eine Warnung erhalten, dass Sie Ihr Passwort nicht zurücksetzen können, dann benutzen sie entweder eine andere E-Mail-Adresse, als die die gespeichert wurde, oder die Adresse ist gar nicht gespeichert. In jedem Fall sprechen Sie einen Cumulocity-Administrator in Ihrer Firma oder Organisation an. Administratoren können Ihr Passwort zurücksetzen.

> Wenn Sie selber der Hauptadministrator sind, ist die E-Mail-Adresse gespeichert, die bei der Erstanmeldung bei Cumulocity benutzt wurde. Wenn Sie Fragen an den Cumulocity-Support haben, benutzen Sie bitte die E-Mail, die bei der Erstanmeldung verwendet wurde.

Um Ihr Passwort zu ändern, klicken Sie in der Anwendung auf das Symbol "Benutzereinstellungen". Bitte achten Sie darauf, ein starkes Passwort auszuwählen. Um Sie bei der Auswahl eines sicheren Passwortes zu unterstützen, wird die Passwortstärke bei einer Passwortänderung  angezeigt. Ein Passwort muss aus mindestens acht Zeichen bestehen. Es sollte eine Mischung aus Zeichenklassen (Groß- und Kleinbuchstaben, Zahlen und Symbolen) verwenden. Ein sicheres Kennwort verwendet mindestens drei der oben genannten vier Zeichenklassen.


<img src="/guides/benutzerhandbuch/Passwort-aendern.png" alt="Passwort ändern" style="max-width: 50%">

> Ihr Administrator kann Ihr Konto so konfigurieren, dass eine Kennwortrichtlinie eingehalten werden muss. Möglicherweise müssen Sie dann ein starkes Passwort auswählen oder Ihr Passwort regelmäßig ändern.

## <a name="navigating"></a>Navigation innerhalb der Cumulocity-Anwendungen 


Sobald Sie angemeldet sind, wird Ihre Standard-Cumulocity-Anwendung geöffnet. Der Inhalt der Cumulocity-Anwendungen ist vollständig dynamisch und wird basierend auf verschiedenen Kriterien generiert:

* Die Anwendungen, die Ihr Unternehmen abonniert hat
* Die Anwendungen, die Ihr Unternehmen für Cumulocity konfiguriert oder entwickelt hat
* Die Funktionalität, die ein bestimmter Benutzer sehen darf
* Die Konfiguration der Benutzeroberfläche, wie Gruppen und Berichte
* Die Funktionalität der von Ihnen verwendeten Geräte

Die allgemeine Struktur einer Cumulocity-Anwendung wird im folgenden Screenshot aufgezeigt.

* Der Name der aktuell sichtbaren Anwendung wird oben links angezeigt. 
* Mit dem Navigator können Sie zu den verschiedenen Seiten einer Anwendung gelangen. Klicken Sie auf einen Eintrag im Navigator, um die entsprechende Seite zu öffnen. Sie können Bereiche im Navigator reduzieren, indem Sie auf die Abschnittsüberschriften klicken (d. h. die Zeilen mit dem kleinen Dreieck vor dem Text), und sie so auch expandieren.
* Auf einigen Seiten sind zusätzliche "Tabs" verfügbar, je nachdem, wie viele Informationen angezeigt werden müssen.
* Der obere Bereich der Anwendung wird als Meldungsleiste verwendet, wenn ein Status (grün) oder ein Fehler (rot) angezeigt werden muss.
* Das Suchfeld bietet eine  [Volltextsuche](#searching) an.
* Mit dem Application Switcher können Sie von einer Anwendung zur anderen wechseln. Möglicherweise müssen Sie Ihre Anmeldeinformationen erneut eingeben, wenn Sie bei Ihrem ursprünglichen Login bei Cumulocity nicht "Passwort merken" ausgewählt haben.
* Das Benutzermenü zeigt Ihren Benutzernamen an. Durch Anklicken des Benutzernamens erscheint ein Popup-Menü. Das Popup-Menü erlaubt Ihnen, sich von der Anwendung abzumelden (auch wenn Sie auf "Passwort merken" geklickt haben), und bietet Zugriff auf Benutzereinstellungen und Hilfe.
* In einigen Bereichen bietet ein Zahnrad oben rechts Zugriff auf weitere Funktionalität über ein Dropdown-Menü.

<img src="/guides/benutzerhandbuch/Benutzeroberflaeche.png" alt="Benutzeroberfläche" style="max-width: 100%">

Bei kleineren Bildschirmen ändert sich das Layout der Benutzeroberfläche wie unten gezeigt. Der Navigator ist ausgeblendet, und nur einige Tabs werden im Bildschirmbereich angezeigt. Um auf den Navigator zuzugreifen, klicken Sie auf die drei Linien links oben. Um auf andere Registerkarten zuzugreifen, navigieren Sie nach links oder rechts. (Wie man genau scrollt, ist abhängig vom Gerätetyp.)

<img src="/guides/benutzerhandbuch/Benutzeroberflaeche-mobil.png" alt="Benutzeroberfläche auf kleinen Geräten" style="max-width: 50%">

Beachten Sie, dass Sie direkt zu jeder Stelle in einer Cumulocity-Anwendung navigieren können. Um beispielsweise die grundlegenden Informationen für ein Gerät anzuzeigen, können Sie die folgende URL eingeben:

	https://<account>.cumulocity.com/apps/devicemanagement/index.html#/device/<id>/info

Mit dieser URL können Sie folgende Aktionen ausführen:

  * Speichern von Lesezeichen für bestimmte Geräte oder Seiten
  * Senden von E-Mails (manuell oder automatisch über die Echtzeit-Event-Engine), die eine Verbindung zu Geräten oder Sensordaten beinhalten
  * Rückwärts- und Vorwärtsnavigation in Ihrem Browser
  * Schreiben von eigenen Web-Anwendungen, die direkt mit den in einer Cumulocity-Anwendung enthaltenen Informationen verknüpfen
  
> In der Regel bieten Cumulocity-Anwendungen Tooltips, wenn Sie den Mauszeiger für eine gewisse Zeit über einem Benutzeroberflächenelement verbleiben lassen. Wenn Sie Cumulocity-Anwendungen auf Touch-Geräten verwenden, werden Tooltips angezeigt, wenn Sie ein Benutzeroberflächenelement für längere Zeit berühren.

## <a name="settings"></a>Nutzereinstellungen

Um die Einstellungen für Ihren Benutzer zu ändern, klicken Sie oben rechts auf das Benutzersymbol und wählen Sie "Benutzereinstellungen". Stellen Sie die Sprache der Benutzeroberfläche über das Dropdown-Menü "Sprache" ein. Ändern Sie Ihr Passwort, indem Sie auf "Passwort ändern" klicken. Klicken Sie anschließend auf "Speichern", um Ihre Änderungen zu speichern, oder auf "Abbrechen", um sie zu verwerfen.

<img src="/guides/benutzerhandbuch/Benutzer-editieren.png" alt="Benutzer editieren"  style="max-width: 60%">

Die Sprache der Benutzeroberfläche wird nach folgenden Kriterien in der folgenden Reihenfolge ausgewählt:

1. Die in den Cumulocity-Benutzereinstellungen ausgewählte Sprache
2. Die in den Browser-Einstellungen gewählte Sprache
3. Die Betriebssystemsprache

Die Standardsprache ist Englisch.

## <a name="searching"></a>Volltextsuche

Das Cumulocity-Suchfeld bietet eine Volltextsuche des gesamten Inventars. Wenn Sie mehrere durch ein Leerzeichen getrennte Wörter eingeben, werden alle Objekte zurückgegeben, die mit einem der Wörter übereinstimmen. 

Die Eingabe von, zum Beispiel,

	My Demo Device

gibt alle Einträge zurück, die  "My", "Demo" oder "Device" enthalten. 

Wenn die Suche mit der genauen Wortgruppe übereinstimmen soll, geben Sie diese so ein:

	"My Demo Device"

Sie können Wörter auch ausschließen, indem Sie vor dem Wort einen Bindestrich setzen. Geben Sie beispielsweise Folgendes ein:

	My Demo -Device

um in den Stammdaten nach "My" oder "Demo", aber nicht nach "Device" zu suchen.

Groß- und Kleinschreibung wird ignoriert. Folgende Suchtexte liefern das gleiche Ergebnis:

	My Demo Device
	My demo device
