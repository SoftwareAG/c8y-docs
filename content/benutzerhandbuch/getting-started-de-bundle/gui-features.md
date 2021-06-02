---
weight: 40
title: Eigenschaften und Funktionen der Benutzeroberfläche
layout: default
aliases:
  - /users-guide/overview/#gui-features
---



### <a name="screen"></a>Hauptbildschirmelemente

Die grundsätzliche Struktur, die in allen Cumulocity IoT-Anwendungen vorhanden ist, umfasst die folgenden Bildschirmelemente:

![Cumulocity IoT application](/images/benutzerhandbuch/getting-started/getting-started-screen-elements.png)

<table>
<col width="15%">
<col width="85%">
<thead>
<tr>
<th style="text-align:left">Element</th>
<th style="text-align:left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><b>Navigator</b></td>
<td style="text-align:left">Auf der linken Seite sehen Sie den Navigator. Oben im Navigator wird der Name und das Logo der Anwendung angezeigt, zur schnellen Orientierung, in welcher Anwendung Sie sich befinden. Darunter befindet sich eine Liste mit Einträgen, die Sie zu den entsprechenden Seiten führen. Die Einträge sind in Menüs und Menüpunkte gruppiert. Sie können die Menüs durch Klicken auf den Menünamen im Navigator ein- und ausklappen. Klicken Sie auf den kleinen Pfeil links in der oberen Leiste, um den Navigator ein- oder auszublenden. Standardmäßig ist der Navigator eingeblendet.</td>
</tr>
<tr>
<td style="text-align:left"><b>Seite</b></td>
<td style="text-align:left">"Seite" bezieht sich auf den Hauptbereich einer Anwendung. Der Inhalt, der hier angezeigt wird, ist abhängig von dem im Navigator ausgewählten Menüeintrag. Der Aufbau der Inhalts variiert von Seite zu Seite. Daten werden etwa in einer Liste mit einer Zeile pro Objekt dargestellt, oder in einem Gitter, in dem jedes Objekt einer Karte entspricht. </td>
</tr>
<tr>
<td style="text-align:left"><b>Registerkarten</b></td>
<td style="text-align:left">Einige Seiten, wie etwa die Seite für jedes Gerät, sind in mehrere Registerkarten unterteilt, entweder horizontal oder vertikal dargestellt.</td>
</tr>
<tr>
<td style="text-align:left"><b>Obere Leiste</b></td>
<td style="text-align:left"><b>Seitentitel</b><br> Links in der oberen Leiste wird der Titel der aktiven Seite angezeigt, falls vorhanden. <br> <br><img src="/images/icons/search-icon.png" alt="Search" style="max-width:100%"> <b>Search button</b><br> Klicken Sie auf die **Suche**-Schaltfläche, um ein Textfeld für die Eingabe von Suchkriterien anzuzeigen. Weitere Informationen finden Sie unter <a href="#searching" class="no-ajaxy">Suchen</a>. Nicht immer verfügbar.<br><br> <img src="/images/icons/plus-icon.png" alt="Plus" style="max-width:100%"> <b>Plus-Schaltfläche</b><br> Die meisten Seiten zeigen eine **Plus**-Schaltfläche in der oberen Leiste. Klicken Sie darauf, um ein Kontextmenü mit weiteren Funktionen zu öffnen. Das Kontextmenü wird dynamisch erzeugt, dass heißt, die angezeigten Inhalte sind abhängig von der aktiven Seite. <br><br><img src="/images/icons/switcher-icon.png" alt="User" style="max-width:100%"> <b>Schaltfläche "Application Switcher"</b><br> Durch Klicken auf die Schaltfläche <b>Application Switcher</b> wird der <a href="#app-switcher" class="no-ajaxy">Application Switcher</a> geöffnet, der das schnelle Wechseln zwischen den verfügbaren Anwendungen ermöglicht. <br><br> <img src="/images/icons/user-icon.png" alt="User" style="max-width:100%"> <b>User button</b><br> Rechts neben dem Application Switcher befindet sich die **Benutzer**-Schaltfläche mit Ihrem Benutzernamen. Klicken Sie darauf, um ein Kontextmenü mit Befehlen zu Ihren Kontoeinstellungen zu öffnen. <br> <br>Je nach aktiver Anwendung und Seite sind weitere Schaltflächen und Informationen in der oberen Leiste verfügbar. </td>
</tr>
<tr>
<td style="text-align:left"><b>Obere Menüleiste</b></td>
<td style="text-align:left">Je nach aktiver Anwendung und Seite gibt es eine zweite Leiste unter der oberen Leiste mit weiteren Funktionalitäten wie einem **Neuladen**-Link zum neu Laden der Seite oder einem **Echtzeit**-Link zur Anzeige von Daten in Echtzeit. </td>
</tr>
<tr>
<td style="text-align:left"><b>Rechter Einschub</b></td>
<td style="text-align:left">Klicken Sie auf den kleinen Pfeil rechts in der oberen Leiste, um den rechten Einschub ein- oder auszublenden, der Quick Links zu anderen Anwendungen und relevanter Dokumentation enthält. Standardmäßig ist der rechte Einschub ausgeblendet.</td>
</tr>
</tbody>
</table>

Auf kleineren Bildschirmen weicht das Layout geringfügig ab. Der Navigator ist verborgen und kann durch Klicken auf das Pfeilsymbol links oben aufgerufen werden. Nur die aktive Registerkarte wird angezeigt. Zum Umschalten zwischen Registerkarten klicken Sie auf den Pfeil an der Kopfzeile der Registerkarte und wählen Sie eine Registerkarte aus der Liste aus.

<img src="/images/benutzerhandbuch/getting-started/getting-started-small-screen-elements.png" alt="Layout on small devices" style="max-width: 50%">

> **Info:** Die Cumulocity IoT-Anwendungen enthalten Tooltips, die angezeigt werden, wenn Sie mit dem Mauszeiger über ein Bildschirmelement fahren. Auf Geräten mit einem Touch-Screen werden diese Tooltips angezeigt, wenn Sie ein Bildschirmelement längere Zeit berühren.

### <a name="app-switcher"></a>Application Switcher

Über den Application Switcher können Sie rasch zwischen verschiedenen Anwendungen wechseln. Klicken Sie auf die Schaltfläche **Application Switcher** rechts in der oberen Leiste, um eine Liste der Symbole für die Anwendungen anzuzeigen.

<img src="/images/benutzerhandbuch/getting-started/getting-started-application-switcher.png" alt="Application switcher" style="max-width: 100%">

Der Application Switcher zeigt alle Cumulocity IoT-Anwendungen an, auf die Sie momentan Zugriff haben. Dies können integrierte oder benutzerdefinierte abonnierte Anwendungen sowie [eigene Anwendungen](/benutzerhandbuch/administration-de#own-applications) sein. Klicken Sie einfach auf das Symbol für die gewünschte Anwendung, um sie als aktive Anwendung zu öffnen.

Wenn Sie die SAG Cloud nutzen, werden im Application Switcher an erster Stelle weitere SAG Cloud-Anwendungen, gefolgt von Cumulocity IoT-Anwendungen, angezeigt:

<img src="/images/benutzerhandbuch/getting-started/getting-started-app-switcher-sag-cloud.png" alt="Application switcher 2-level" style="max-width: 100%">


### <a name="searching-and-filtering"></a>Such- und Filterfunktionalität

#### <a name="searching"></a>Volltextsuche

Cumulocity IoT bietet eine Volltextsuche, die über das Suchfeld rechts in der oberen Leiste der Benutzeroberfläche verfügbar ist.

![Search field](/images/benutzerhandbuch/getting-started/getting-started-search-button.png)

Das Suchergebnis umfasst Gruppen, Geräte und Kindgeräte. Bei Eingabe eines Suchbegriffs in das Textfeld gibt Cumulocity IoT alle Geräte zurück, die diesen Begriff in einem Attribut enthalten (Name, Modell, Fragmente).

Die Suchfunktion basiert auf der [MongoDB-Volltextsuche](https://docs.mongodb.com/manual/text-search/).

Wenn Sie mehrere Wörter, durch Leerzeichen getrennt, eingeben, werden alle Objekte ausgegeben, die eines dieser Wörter enthalten. Wenn Sie beispielsweise

```text
Mein Demo Gerät
```

eingeben, werden alle Objekte ausgegeben, die "Mein" oder "Demo" oder "Gerät" enthalten.

Wenn Sie nach Objekten suchen möchten, die exakt eine bestimmte Phrase enthalten, umschließen Sie diese mit Anführungszeichen:

```text
"Mein Demo Gerät"
```

Sie können auch Wörter ausschließen, indem Sie ein Minuszeichen voranstellen, um etwa die Stammdaten nach "Mein" und "Demo", aber ohne "Gerät" zu durchsuchen:

```text
Mein Demo Gerät
```

Groß-/Kleinschreibung wird ignoriert. Die folgenden Suchbegriffe führen zum gleichen Ergebnis:

```text
Mein Demo Gerät
mein demo gerät
```

**Info:** Anders als bei der Filterfunktionalität wird das Verwenden von Platzhaltern bei der Suche nicht unterstützt.

Weitere Informationen zur MongoDB-Volltextsuche finden Sie unter [https://docs.mongodb.com/manual/text-search/](https://docs.mongodb.com/manual/text-search/).

#### <a name="filtering"></a>Filtern

Einige Seiten bieten eine Filterfunktionalität, um Objekte auf einer Seite zu filtern.

![Filter field](/images/benutzerhandbuch/getting-started/getting-started-filtering.png)

Anders als bei der Suchfunktionalität müssen beim Filtern nicht notwendigerweise ganze Wörter eingegeben werden.

In den meisten Fällen können Sie jeden beliebigen Text in das Textfeld eingeben, oft sogar nur 2-3 Zeichen. Die Eingabe von

```text
cl
```

beschränkt die Objekte in der Liste auf solche, die die Zeichenkette "cl" enthalten.

Sie können auch das Sternsymbol * als Platzhalter verwenden, um etwa nur alle Objekte anzuzeigen, die mit "cl" beginnen:

```text
cl*
```

Die Liste wird sofort auf die ausgewählten Objekte beschränkt.

>**Wichtig:** Auf bestimmten Seiten durchsucht die Filterfunktion nur die auf der Seite angezeigten Elemente. Wenn also ein Element auf der betreffenden Seite nicht vorkommt, erscheint es auch nicht in den Ergebnissen. Sie müssen zuerst alle Ergebnisse laden, um alle Elemente durchsuchen zu können. Dieses Verhalten gilt für folgende Seiten:
>
>* Geräteprotokolle
>* Firmware Repository
>* Software Repository
>* Konfigurations-Repository
>* Mandanten
>* Dateiablage

Weitere Informationen zur Filterfunktion in der Geräteliste finden Sie unter [Device Management > Anzeigen von Geräten > So filtern Sie Geräte](/benutzerhandbuch/device-management-de#filtering-devices).

### Echtzeitverhalten des Navigators

Änderungen werden im Navigator nicht in Echtzeit aktualisiert, d. h., neue, entfernte oder umbenannte Geräte oder Gruppen werden nicht sofort aktualisiert.

Diese Änderungen werden nur im Navigator der Anwendung angezeigt, in der Sie die Änderungen vorgenommen haben. Beispiel: Wenn Sie in der Anwendung Device Management die Zuweisung eines Gerätes zu einer Gruppe aufheben, wird es im Navigator Ihrer aktuellen Anwendung sofort aus der Ansicht entfernt, doch wenn Sie ein weiteres Fenster geöffnet haben, z. B. mit der Anwendung Cockpit, sind die Änderungen darin nicht zu sehen.

Die Änderungen werden erst nach einer Aktualisierungs- oder sonstigen Anfrage (z. B. Ausklappen einer Gruppe im Navigator) angezeigt.
