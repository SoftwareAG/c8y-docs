---
weight: 40
title: Eigenschaften und Funktionen der Benutzeroberfläche
layout: redirect
---

### <a name="screen"></a>Hauptbildschirmelemente

Die grundsätzliche Struktur, die in allen Cumulocity-Anwendungen vorhanden ist, umfasst die folgenden Bildschirmelemente:

![Cumulocity application](/images/users-guide/ScreenElements.png)


|Element                                             |Description                                                 |
|:---------------------------------------------------|:------------------------------------------------------------------|
|**Navigator**                                       |Auf der linken Seite sehen Sie den Navigator. Oben im Navigator wird der Name und das Logo der Anwendung angezeigt, zur schnellen Orientierung, in welcher Anwendung Sie sich befinden. Darunter befindet sich eine Liste mit Einträgen, die Sie zu den entsprechenden Seiten führen. Die Einträge sind in Menüs und Menüpunkte gruppiert. Sie können die Menüs durch Klicken auf den Menünamen im Navigator ein- und ausklappen. Klicken Sie auf den kleinen Pfeil links in der oberen Leiste, um den Navigator ein- oder auszublenden. Standardmäßig ist der Navigator eingeblendet.
|**Registerkarten**                                            |Einige Seiten, wie etwa die Seite für jedes Gerät, sind in mehrere Registerkarten unterteilt, entweder horizontal oder vertikal dargestellt.
|**Obere Leiste**                                         |**Seitentitel**<br> Links in der oberen Leiste wird der Titel der aktiven Seite angezeigt, falls vorhanden. <br> <br><img src="/images/icons/Icon-Search.svg" alt="Search" style= 'vertical-align:middle;'>**Suche-Schaltfläche**<br> Klicken Sie die **Suche**-Schaltfläche, um ein Textfeld für die Eingabe von Suchkriterien anzuzeigen. Weitere Informationen finden Sie unter [Suchen](#searching). Nicht immer verfügbar. <br><br> <img src="/images/icons/Icon-Plus.svg" alt="Plus" style="max-width:100%"> **Plus-Schaltfläche**<br> Die meisten Seiten zeigen eine **Plus**-Schaltfläche in der oberen Leiste. Klicken Sie darauf, um ein Kontextmenü mit weiteren Funktionen zu öffnen. Das Kontextmenü wird dynamisch erzeugt, dass heißt, die angezeigten Inhalte sind abhängig von der aktiven Seite.  <br><br>**Application Switcher**<br> Der **Application Switcher** auf der rechten Seite ermöglicht das schnelle Wechseln zwischen den verfügbaren Anwendungen. <br><br> <img src="/images/icons/Icon-User.svg" alt="User" style="max-width:100%">**Benutzer-Schaltfläche**<br> Rechts neben dem Application Switcher befindet sich die **Benutzer**-Schaltfläche mit Ihrem Benutzernamen. Klicken Sie darauf, um ein Kontextmenü mit Befehlen zu Ihren Kontoeinstellungen zu öffnen. <br><br>Je nach aktiver Anwendung und Seite sind weitere Schaltflächen und Informationen in der oberen Leiste verfügbar.
|**Obere Menüleiste**                                    |Je nach aktiver Anwendung und Seite gibt es eine zweite Leiste unter der oberen Leiste mit weiteren Funktionalitäten wie einem **Neuladen**-Link zum neu Laden der Seite oder einem **Echtzeit**-Link zur Anzeige von Daten in Echtzeit. 
|**Rechter Einschub**                                    |Klicken Sie auf den kleinen Pfeil rechts in der oberen Leiste, um den rechten Einschub ein- oder auszublenden, der Quick Links zu anderen Anwendungen und relevanter Dokumentation enthält. Standardmäßig ist der rechten Einschub ausgeblendet.
|**Seite**                                            |"Seite" bezieht sich auf den Hauptbereich einer Anwendung. Der Inhalt, der hier angezeigt wird, ist abhängig von dem im Navigator ausgewählten Menüeintrag. Der Aufbau der Inhalts variiert von Seite zu Seite. Daten werden etwa in einer Liste mit einer Zeile pro Objekt dargestellt, oder in einem Gitter, in dem jedes Objekt einer Karte entspricht.

Auf kleineren Bildschirmen ändert sich die Darstellung der Anwendungen, wie in der Abbildung unten zu sehen ist. Der Navigator ist ausgeblendet und nur einige Registerkarten sind sichtbar. Klicken Sie auf das Menüsymbol links oben, um auf den Navigator zuzugreifen. Scrollen Sie nach rechts oder links (die Methode hängt vom jeweiligen Gerät ab), um weitere Registerkarten anzuzeigen.

![Layout auf kleinen Geräten](/images/benutzerhandbuch/Benutzeroberflaeche-mobil.png)

> **Info:** Die Cumulocity-Anwendungen enthalten Tooltips, die angezeigt werden, wenn Sie mit dem Mauszeiger über ein Bildschirmelement fahren. Auf Geräten mit einem Touch-Screen werden diese Tooltips angezeigt, wenn Sie ein Bildschirmelement längere Zeit berühren.

### <a name="searching-and-filtering"></a>Such- und Filterfunktionalität

#### <a name="searching"></a>Suchen

Das Suchfeld in Cumulocity-Anwendungen ermöglicht eine Volltextsuche über alle Stammdaten.

Wenn Sie mehrere Wörter, durch Leerzeichen getrennt, eingeben, werden alle Objekte ausgegeben, die eines dieser Wörter enthalten. Wenn Sie beispielsweise

    Mein Demo Gerät

eingeben, werden alle Objekte ausgegeben, die "Mein" oder "Demo" oder "Gerät" enthalten.

Wenn Sie nach Objekten suchen möchten, die exakt eine bestimmte Phrase enthalten, umschließen Sie diese mit Anführungszeichen:

    "Mein Demo Gerät"


Sie können auch Wörter ausschließen, indem Sie ein Minuszeichen voranstellen, um etwa die Stammdaten nach "Mein" und "Demo", aber ohne "Gerät" zu durchsuchen:

    Mein Demo -Gerät

Groß-/Kleinschreibung wird ignoriert. Die folgenden Suchbegriffe führen zum gleichen Ergebnis:

    Mein Demo Gerät mein demo gerät

> **Info:** Anders als bei der Filterfunktionalität wird das Verwenden von Platzhaltern bei der Suche nicht unterstützt.

#### <a name="filtering"></a>Filtern

Einige Seite bietet eine Filterfunktionalität, um Objekte auf einer Seite zu filtern.

Anders als bei der Suchfunktionalität müssen beim Filtern nicht notwendigerweise ganze Wörter eingegeben werden.

In den meisten Fällen können Sie jeden beliebigen Text in das Textfeld eingeben, oft sogar nur einzelne Buchstaben. Die Eingabe von

    cl

beschränkt die Objekte in der Liste auf solche, die die Zeichenkette "cl" enthalten.

Sie können auch das Sternsymbol * als Platzhalter verwenden, um etwa nur alle Objekte anzuzeigen, die mit "cl" beginnen:

    cl*

Die Liste wird unmittelbar auf die ausgewählten Objekte beschränkt.

