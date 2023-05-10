---
aliases:
- /benutzerhandbuch/overview-de/#user-settings
layout: redirect
title: Benutzeroptionen und -einstellungen
weight: 50
---

Durch Klicken auf die Schaltfläche **Benutzer** rechts oben wird der rechte Einschub geöffnet, der Zugriff auf verschiedene Aktionen und Informationen ermöglicht.

<img src="/images/benutzerhandbuch/getting-started/getting-started-user-account-menu.png" alt="User account menu"  style="max-width: 60%">

Im oberen Bereich finden Sie folgende Elemente:

<table>
<colgroup>
<col width = "20%">
<col width = "80%">
</colgroup>
<thead>
<tr>
<th style="text-align:left">Menüelement</th>
<th style="text-align:left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Ändern von Benutzereinstellungen</td>
<td style="text-align:left">Ermöglicht Zugriff auf die Benutzereinstellungen, weitere Informationen siehe <a href="#change-user-settings" class="no-ajaxy">So ändern Sie Benutzereinstellungen</a>. </td>
</tr>
<tr>
<td style="text-align:left">Verweigerte Anfragen</td>
<td style="text-align:left">Zeigt eine Liste der Anfragen bezüglich Daten, auf die ggf. wegen fehlender Berechtigungen nicht zugegriffen werden konnte. </td>
</tr>
<tr>
<td style="text-align:left">Abmelden</td>
<td style="text-align:left">Meldet Sie aus Ihrem {{< product-c8y-iot >}}-Konto ab. </td>
</tr>
</tr>
<tr>
<td style="text-align:left">Tokens zurücksetzen</td>
<td style="text-align:left">Beim Zurücksetzen von Tokens werden alle Benutzer abgemeldet, die gerade über "OAI-Secure" oder "Single-Sign-On-Weiterleitung" angemeldet sind. Beachten Sie, dass von Ihren Geräten abgerufene JWT-Tokens ebenfalls zurückgesetzt werden.<br>
<br>
Um Tokens zurückzusetzen, müssen Sie über eine ADMIN-Berechtigung für den Berechtigungstyp "Benutzerverwaltung" verfügen.  
</td>
</tr>
<tr>
<td style="text-align:left">Supportanfrage stellen</td>
<td style="text-align:left">Leitet Sie zum <a href="{{< link-sag-portal >}}" class="no-ajaxy">{{< company-sag >}} {{< sag-portal >}}</a> um. </td>
</tr>
<tr>
<td style="text-align:left">Support aktivieren</td>
<td style="text-align:left">Erlaubt Supportbenutzern den Zugriff auf Ihr Konto.<br>
<br>
Diese Option ist nur verfügbar, wenn der Supportbenutzerzugriff im {{< management-tenant-de >}}en nicht global für Untermandanten-Benutzer festgelegt ist, nähere Informationen siehe <a href="/benutzerhandbuch/enterprise-tenant-de/#support-user-access" class="no-ajaxy">Supportbenutzerzugriff</a>. Nachdem der Supportbenutzerzugriff aktiviert wurde, wird das Menüelement durch <strong>Support deaktivieren</strong> ersetzt. Wenn sich Ihre Supportanfrage erledigt hat, doch die Dauer für den Supportbenutzerzugriff noch nicht abgelaufen ist (standardmäßig 24 Stunden), können Sie eine Supportbenutzeranfrage hier aktiv deaktivieren.</td>
<tr>
<td style="text-align:left">Versionen</td>
<td style="text-align:left">Zeigt Informationen zu der von Ihnen verwendeten {{< product-c8y-iot >}}-Version (z. B. 10.13.0.034) für Backend und Benutzeroberfläche an. Zeigt außerdem die ID Ihres Mandanten an, die bei einer Supportanfrage erforderlich sein kann. Klicken Sie auf das Kopieren-Symbol neben der Mandanten-ID, um diese in die Zwischenablage zu kopieren.</td>
</tr>
</tbody>
</table>

Im Bereich **Plattforminformation** finden Sie Informationen zur Infrastruktur Ihrer Plattform:

- Die ID Ihres Mandanten, die bei einer Supportanfrage erforderlich sein kann. Klicken Sie auf das Kopieren-Symbol neben der Mandanten-ID, um diese in die Zwischenablage zu kopieren.
- Versionsinformationen zu Backend und Benutzeroberfläche.

Darüber hinaus können Sie auf **Detaillierte Information** klicken, um detailliertere Informationen zur Plattform herunterzuladen.

Im Bereich **Quick Links** werden Links zu den gängigsten Seiten und Prozessen der Plattform bereitgestellt, im Bereich **Dokumentation** finden Sie Links zu den entsprechenden Handbüchern.

<a name="change-user-settings"></a>
### So ändern Sie Benutzereinstellungen

Einige Kontoeinstellungen können vom Benutzer geändert werden.

1. Klicken Sie auf die Schaltfläche **Benutzer** rechts in der oberen Leiste und anschließend auf **Benutzereinstellungen**.  
2. Nehmen Sie im Dialog **Benutzer bearbeiten** die gewünschten Änderungen vor.
3. Zum Ändern der Sprache wählen Sie eine [Sprache](#languages) aus der Auswahlliste des Feldes **Sprache**.
4. Verwenden Sie den Umschalter **Produkterfahrung**, um das Produkterfahrungs-Tracking von Gainsight abzuwählen, das standardmäßig aktiviert ist, wenn Sie funktionelle Cookies akzeptiert haben.
5. Mithilfe des Umschalters **produktinterne Informationen** können Sie den standardmäßig aktivierten Knowledge Hub verlassen.
6. Klicken Sie auf **Passwort ändern**, um Ihr aktuelles Passwort zu ändern. Weitere Informationen finden Sie unter [So ändern Sie Ihr Passwort](#change-password).
7. Klicken Sie auf **Zweifaktor-Authentifizierung einrichten**, um die Zweifaktor-Authentifizierung einzurichten und die Mandantensicherheit zu erhöhen.
8. Klicken Sie auf **Speichern**, um Ihre Eingaben zu speichern.

Die Sprache der Benutzeroberfläche wird nach folgenden Kriterien, in der aufgeführten Reihenfolge, ermittelt:

*  Die in den {{< product-c8y-iot >}}-Benutzereinstellungen ausgewählte Sprache.
*  Die Sprache, die in den Browser-Einstellungen konfiguriert ist.
* 	Die Sprache des Betriebssystems.

<a name="languages"></a>
#### Verfügbare Sprachen

Die Benutzeroberfläche ist in folgenden Sprachen verfügbar:

|Sprache|Sprachcode|
|:---|:---|
|Englisch (Standard)|en|
|Brasilianisches Portugiesisch|pt_BR|
|Chinesisch|zh_CN|
|Chinesisch, traditionell|zh_TW|
|Niederländisch|nl|
|Französisch|fr|
|Deutsch|de|
|Japanisch|ja_JP|
|Koreanisch|ko|
|Polnisch|pl|
|Russisch|ru|
|Spanisch|es|


<a name="change-password"></a>
#### So ändern Sie Ihr Passwort

1. Klicken Sie auf die Schaltfläche **Benutzer** rechts in der oberen Leiste und anschließend auf **Benutzereinstellungen**.
2. Klicken Sie im Dialog **Benutzer bearbeiten** auf **Passwort ändern**.
3. Geben Sie ein Passwort ein und bestätigen Sie es.
4. Klicken Sie auf **Speichern**, um Ihre Eingaben zu speichern.

Stellen Sie sicher, dass Sie ein starkes Passwort gewählt haben. Um Sie dabei zu unterstützen, wird während der Passwortänderung ein Passwortstärke-Indikator angezeigt.

<img src="/images/benutzerhandbuch/getting-started/getting-started-password-strength.png" alt="Reset password" style="max-width: 100%">

Das Passwort muss standardmäßig folgende Bedingungen erfüllen:

* Es muss aus mindestens acht Zeichen bestehen (dieser Parameter kann durch den {{< management-tenant-de >}}en konfiguriert werden, siehe [Administration > Plattform-Konfigurationseinstellungen](/benutzerhandbuch/administration-de/#platform-configuration-settings).)
* Es muss alle der folgenden Zeichentypen enthalten: Großbuchstaben, Kleinbuchstaben, Zahlen und Symbole.

{{< c8y-admon-info >}}
Die Passwortregeln können vom Administrator konfiguriert werden, d. h. der Administrator kann die Einhaltung bestimmter Richtlinien für das Passwort Ihres Kontos erzwingen. So kann es etwa erforderlich sein, dass Sie ein starkes Passwort wählen oder Ihr Passwort regelmäßig ändern müssen.
{{< /c8y-admon-info >}}