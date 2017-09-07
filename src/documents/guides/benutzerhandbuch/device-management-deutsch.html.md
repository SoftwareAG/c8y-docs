---
order: 20
title: Device management
layout: default
---

## <a name="overview"></a>Übersicht

Die Device-Management-Anwendung zeigt Ihnen Ihre angeschlossenen Geräte an und ermöglicht Ihnen, ihren Status zu verwalten. Im Device Management haben Sie diese Optionen:

* [Verbinden](#device-registration) von neuen Geräten mit Ihrem Konto und Trennen dieser Geräte
* [Auflisten](#viewing-devices), [Suchen](#searching-devices) und [Gruppieren](#grouping-devices) von verbundenen Geräten
* [Ansehen](#device-details) der Gerätedetails und Überprüfung des Status
* Überwachen der [Verbindungsqualität](#connection-monitoring) und [Serviceüberwachung](#monitoring-services) der Geräte
* [Lokalisieren](#map) von Geräten
* Arbeiten mit [Warnungen](#alarm-monitoring) von Geräten
* [Fernsteuerung](#operation-monitoring) von Geräten
* [Troubleshooting](#events-all) von Geräten
* Verwalten von [Software und Firmware](#software-repo) auf Geräten
* Verwalten der [Zugangsdaten](#credentials) von Geräten
* [Simulation](#simulators) von Geräten
* Nutzung von [Cloud Remote Access](#cloud_remote_access) für Fernzugriff auf Geräte 

Die Device-Management-Anwendung sieht so aus:

<img src="/guides/benutzerhandbuch/Benutzeroberflaeche.png" alt="Benutzeroberfläche" style="max-width: 100%">

Die folgenden Abschnitte führen Sie durch die verschiedenen Menüs der Device-Management-Anwendung.

## <a name="device-registration"></a>Geräte manuell verbinden

Dieser Abschnitt beschreibt die allgemeine Vorgehensweise beim manuellen Verbinden von Geräten mit Ihrem Cumulocity-Konto. Nur einige Schritte in der Prozedur können spezifisch für den Typ Ihres Geräts sein. Sie finden Ihren Gerätetyp im "Gerätehandbuch", der Startseite des Entwicklerbereichs unserer Website. Dort finden Sie genaue Informationen. Alternativ konsultieren Sie das Handbuch Ihres Geräts.

Um Geräte mit Ihrem Cumulocity-Konto zu verbinden, klicken Sie im Navigator auf "Geräteregistrierung" und dann auf "Gerät registrieren". Wählen Sie die passende Option und folgen Sie diesen Schritten:

1.  Geben Sie die ID des Gerätes im Textfeld "Geräte-ID" ein, wählen Sie ggf. eine Gruppe, zu der dieses Gerät gehören soll, aus und klicken Sie auf "Weiter". Um die ID zu ermitteln, konsultieren Sie die Geräte-Dokumentation. Bei mobilen Geräten ist die ID in der Regel die IMEI (International Mobile Equipment Identity), die sich häufig auf der Rückseite des Geräts befindet.
2.  Nun wird das aufgelistete Gerät durch seine IMEI-Nummer mit dem Status "Warten auf Verbindung" sichtbar. Schalten Sie das Gerät ein und warten Sie, bis eine Verbindung hergestellt ist.
3.  Nachdem das Gerät angeschlossen ist, sollte sich der Status in "Warten auf Bestätigung" ändern. Sie müssen bestätigen, dass dies tatsächlich das Gerät ist, das Sie hinzufügen möchten. Klicken Sie dazu auf die grüne Schaltfläche "Akzeptieren" rechts neben dem Eintrag Ihres Geräts.
4.  Der Status Ihres Geräts sollte nun "Verbunden" lauten. Sobald dies geschieht, wird Ihr Gerät mit Ihrem Konto verbunden.

Jetzt können Sie das Gerät verwalten.

<img src="/guides/benutzerhandbuch/registrierung.png" alt="Geräteregistrierung" style="max-width: 100%">

## <a name="creds-upload"></a>Sammelregistrierung von Geräten

Für die Verbindung vieler Geräte können Sie eine CSV-Datei mit den IDs und den Anmeldedaten hochladen. Beim Hochladen der CSV-Datei erstellt Cumulocity Benutzerkonten für jedes in der Datei aufgelistete Gerät. Geräte können sich dann sicher mit Cumulocity verbinden, ohne eine manuelle "Geräteregistrierung", wie im vorherigen Abschnitt beschrieben, durchführen zu müssen.

Die CSV-Datei muss eine Kopfzeile haben, gefolgt von den tatsächlichen Daten. Die Kopfzeile muss mindestens eine Spalte mit der Bezeichnung "ID" und eine Spalte mit der Bezeichnung "Credentials" (Zugangsdaten) enthalten. Dies ist ein Beispiel für ein gültiges CSV-Format:

	ID;Credentials;Tenant;Group;ICCID;NAME
	006064ce800a;LF2PWJoLG1Fz;management;Sample_Düsseldorf;+491555555;Sample_Device1
	006064ce8077;OowoGKAbiNJs;management;Sample_Düsseldorf;+491555555;Sample_Device2

Verwenden Sie bei der Geräteregistrierung die Option "Mehrfachregistrierung" und dann den "Datei zum Hochladen auswählen"-Knopf, um die CSV-Datei hochzuladen, wie im Screenshot unten gezeigt. Nachdem die Daten importiert wurden, erhalten Sie eine Rückmeldung über die Anzahl der vorregistrierten Geräte sowie über mögliche Fehler.

<img src="/guides/benutzerhandbuch/autoregisterde.png" alt="Bulk registration" style="max-width: 60%">

Um die Geräte zu verbinden, müssen sie mit entsprechenden Informationen vorbereitet werden. Insbesondere muss jedes Gerät wie folgt konfiguriert werden:

* Benutzername: Der Benutzername, der auf Cumulocity zugreift, muss die Form &lt;Mandant&gt;/device_&lt;id&gt; haben. . &lt;Mandant&gt; bezieht sich auf den Mandanten, in den die CSV-Datei importiert wird, und &lt;id&gt; bezieht sich auf den entsprechenden Wert in der CSV-Datei.
* Passwort: Das Passwort für den Zugriff auf Cumulocity, nämlich der Wert in den "credentials" (Zugangsdaten) in der CSV-Datei.
* Gerät in der Objektdarstellung. Felder: "Type" (Typ), "Name", "Iccid", "Idtype", "Path" (Pfad), "Shell" in der CSV-Datei.

Wenn Sie eine Enterprise Edition von Cumulocity besitzen, können Sie auch Geräte über mehrere Mandanten registrieren, indem Sie der Tabelle eine Spalte  mit "Mandanten" hinzufügen und die CSV-Datei aus der Mandantenverwaltung importieren.

Weitere Informationen zum Dateiformat und zu den akzeptierten CSV-Varianten finden Sie unter
[Bulk device credentials](/guides/reference/device-credentials/#creds-upload).

## <a name="viewing-devices"></a>Anzeige der verbundenen Geräte

Um die verbundenen Geräte anzuzeigen, können Sie verschiedene Werkzeuge nutzen.

* Wählen Sie "Alle Geräte", um alle angeschlossenen Geräte aufzulisten (1.000 Geräte/Seite).
* [Suchen](#searching-devices) Sie nach Geräten mit dem Textfeld "Suchen".
* [Arrangieren](#grouping-devices) Sie die Geräte in Gruppen und die Ansicht dieser Gruppen.

In jedem Fall sehen Sie eine Liste der Geräte, wie im folgenden Beispiel gezeigt. Die Liste besteht aus folgenden Spalten:

* Ein Symbol für den Verbindungsstatus, wie in der [Verbindungsüberwachung](#connection-monitoring) beschrieben
* Der Name des Geräts
* Je nach Browserbreite, Modell und Seriennummer des Gerätes
* Der Alarmstatus des Gerätes, wie viele kritische, wichtige, weniger wichtige oder Warnstufenalarme für das Gerät derzeit nicht gelöst sind. Siehe [Alarme](#alarm-monitoring) für weitere Informationen über das Arbeiten mit Alarmen.
* Eine Schaltfläche zum Löschen des Gerätes

Das Löschen eines Geräts bedeutet, das Gerät aus der Cumulocity-Datenbank zu entfernen, einschließlich aller damit generierten Daten. Alternativ zum Löschen eines Gerätes können Sie auch alle ausgeschalteten Geräte in eine Gruppe organisieren. Dadurch wird sichergestellt, dass alle alten Berichte korrekt bleiben. Um zu verhindern, dass Alarme für die ausgeschalteten Geräte eingehen, deaktivieren Sie die [Verbindungsüberwachung](#connection-monitoring). Beim Löschen eines Geräts werden die Daten seiner Kindgeräte nicht gelöscht.

<img src="/guides/benutzerhandbuch/devicelistde.png" alt="Geräteliste" style="max-width: 100%">

Falls eine Liste mehr als 1.000 Einträge enthält, werden nur die ersten 1.000 Einträge angezeigt. Klicken Sie unten auf den Link "Laden", um die nächsten 1.000 Einträge zu laden.

## <a name="searching-devices"></a>Geräte suchen

Cumulocity enthält eine Volltextsuche nach Geräten. Durch Eingabe eines Suchbegriffs in das Suchfeld finden Sie alle Geräte, die diesen Begriff enthalten. Das folgende Bild zeigt ein Beispiel für die Suche nach Geräten, die den Begriff "Ublox C027" enthalten. Sie können nach beliebigen Texteigenschaften eines Geräts suchen. Präfixe werden ebenfalls unterstützt. Zum Beispiel würde eine Suche nach "Ublox" auch die Geräte mit "Ublox C027" zurückgeben. Suffixe werden derzeit nicht unterstützt. Zum Beispiel würde die Suche nach "C027" nicht die "Ublox C027" zurückgeben.

<img src="/guides/benutzerhandbuch/suche.png" alt="Volltextsuche" style="max-width: 100%">

## <a name="grouping-devices"></a>Geräte gruppieren

Geräte können beliebig nach Ihrem Anwendungsfall gruppiert werden. Ein Gerät kann sich in mehreren Gruppen befinden, und Gruppen selbst können wieder Teil von mehreren Gruppen sein.

Cumulocity unterscheidet zwischen Top-Level-Gruppen und Untergruppen. Top-Level-Gruppen werden im Navigator auf oberster Ebene im Abschnitt "Gruppen" angezeigt. Sie sind Ihr Haupteingangspunkt. Untergruppen werden verwendet, um Gruppen weiter zu unterteilen.

Um eine Top-Level-Gruppe zu erstellen, klicken Sie oben rechts neben dem Suchfeld auf die Plustaste und wählen Sie dann "Neue Gruppe hinzufügen". Ein kleines Fenster erscheint. Geben Sie einen Gruppennamen ein und suchen Sie nach den Geräten, die der Gruppe hinzugefügt werden sollen. Markieren Sie die Geräte und drücken Sie die Schaltfläche "Gruppe mit X Geräten erstellen", um den Vorgang abzuschließen. ( "X" ist die Anzahl der Geräte, die Sie markiert haben.)
> Eine Gruppe kann auch "0" Geräte enthalten.

<img src="/guides/benutzerhandbuch/gruppe2ger.png" alt="Gruppe hinzufügen" style="max-width: 60%">

Sie können auch Geräte auf zwei andere Weisen hinzufügen: 

* Wählen Sie ein Gerät aus und scrollen Sie nach unten zum Abschnitt "Gruppen" auf der Registerkarte "Info". Verwenden Sie das Dropdown-Menü mit dem Namen "Gruppen auswählen oder suchen", um eine Gruppe auszuwählen, in die das Gerät eingefügt werden soll.
* Wählen Sie eine Gruppe aus. Gehen Sie auf die Registerkarte "Kindassets" und wählen Sie sie aus. Klicken Sie dann rechts oben in der Gruppenliste auf "Geräte zuordnen". Ein neues Menü öffnet sich. Suchen Sie nach den Geräten, die im Suchfeld hinzugefügt werden sollen. Markieren Sie dann die entsprechenden Geräte im Ergebnis und klicken Sie auf die Schaltfläche "X Geräte zugeordnet" am unteren Rand der Ergebnisliste.


<img src="/guides/benutzerhandbuch/subassetaddde.png" alt="Geräte zuordnen" style="max-width: 60%">


Um eine Untergruppe zu erstellen, klicken Sie einfach auf "Gruppe hinzufügen", wenn Sie eine Gruppe ansehen.

Um eine Gruppe zu bearbeiten, klicken Sie auf den Namen der Gruppe und auf "Editieren". Auf diese Weise können Sie den Namen der Gruppe bearbeiten und Benutzerberechtigungen für die Gruppe zuweisen. Weitere Informationen zu Berechtigungen finden Sie unter [Administration](/guides/benutzerhandbuch/administration-deutsch).

## <a name="Using Smart Groups"></a>Dynamische Gruppen nutzen

Dynamische Gruppen sind Gruppen basierend auf Filterkriterien. Sie haben einen vorübergehenden Charakter, da sich die Anzahl der Mitglieder ständig verändern kann. Diese Gruppen haben keine festen Mitgliederlisten, sondern stattdessen bestimmte Auswahlkriterien. Diese Art von Gruppe kann verwendet werden für Sammel-Upgrades eines Gerätyps auf eine neue Software- oder Firmware-Version.

<img src="/guides/benutzerhandbuch/smartfiltersde.png" alt="Dynamische Gruppen" style="max-width: 60%">

Durch Auswahl von "Alle Geräte" können dynamische Gruppen angelegt werden. Um eine neue Gruppe zu erstellen, verwenden Sie einfach Filter, um Geräte auszuwählen. Klicken Sie nun auf "Dynamische Gruppe erstellen" und geben Sie der Gruppe einen Namen.

<img src="/guides/benutzerhandbuch/smartgroup1de.png" alt="Dynamische Gruppe erstellen" style="max-width: 100%">

Wenn die Gruppe erstellt wird, wird sie als Gruppe der obersten Ebene im Abschnitt "Gruppen" angezeigt. Sie können Filterkriterien anpassen, indem Sie die Registerkarte "Kindassets" auswählen und die Filtereinstellungen ändern.

Benutzer können auch dynamische Gruppen aus den Gruppen der obersten Ebene löschen. Dieser Vorgang ist irreversibel.

<img src="/guides/benutzerhandbuch/smartgroupdelete1de.png" alt="Dynamische Gruppe entfernen" style="max-width: 100%">

> Dynamische Gruppen können nicht in der Cockpit-Anwendung genutzt werden.

## <a name="device-details"></a>Anzeigen der Gerätedetails

Durch Anklicken eines Geräts in einer Geräteliste werden detaillierte Informationen zum Gerät angezeigt. Was tatsächlich angezeigt wird, hängt vom Gerätetyp und von der Konfiguration der Benutzeroberfläche ab. Wenn ein Gerät noch keine Messwerte gesendet hat, gibt es keine Registerkarte "Messung".

Am oberen Rand der Gerätedetails wird der Name des Gerätes angezeigt. Unterhalb des Namens wird eine Pfadnavigation angezeigt. Wenn das Gerät Teil einer Asset-Hierarchie (z. B. einer Gruppe) ist, können Sie mit der Pfadnavigation problemlos nach oben navigieren. Da Geräte Teil von mehreren Hierarchien sein können, können mehrere Reihen von Pfadnavigationen gezeigt werden.

Rechts neben dem Namen wird ein Zahnrad angezeigt. Wenn Sie auf das Zahnrad klicken, wird ein Dropdown-Menü mit weiteren Aktionen angezeigt.

Ist das Gerät kompatibel, steht über das Zahnrad ein Menüpunkt "Messwertabfrage starten" zur Verfügung. Mit dieser Option können Sie ein Gerät auffordern, Messungen mit einer bestimmten Frequenz für eine bestimmte Dauer zu senden. Diese Art von Debugging vermeidet zu viel Datenverkehr, der durch das Senden von Messungen erzeugt wird.

<img src="/guides/benutzerhandbuch/devicedetails-de.png" alt="Gerätedetails" style="max-width: 100%">

Die Gerätedetails sind in eine Anzahl von Registerkarten unterteilt. Die gängigsten Standard-Tabs sind:

* [Info](#info)
* [Kindgeräte](#child-devices)
* [Messwerte](#measurements)
* [Alarme](#alarms)
* [Steuerung](#control)
* [Konfiguration](#config)
* [Binäre Konfiguration](#configsnap)
* [Software](#software)
* [Ereignisse](#events)
* [Standort](#location)
* [Shell](#shell)
* [Berechtigungen](#permissions)
* [Tracking](#tracking)
* [Service](#service-monitoring)
* [Logdateien](#logs)
* [Identifikator](#identity)

### <a name="info"></a>Info

Auf der Registerkarte "Info" werden allgemeine Informationen für ein Gerät angezeigt (von oben links nach unten):

* **Verbindungsüberwachung**: Die Konfigurierung der Verbindungsüberwachung, wie [hier](#connection-monitoring) beschrieben
* **Name** und **Typ**: Der Anzeigename des zu editierenden Gerätes sowie eine Kennung für den jeweiligen Gerätetyp
* **Hardware**: Hardwareinformationen vom Gerät gelesen
* **Mobil**: Wenn das Gerät ein Modem enthält, werden hier die mobilen Netzwerkinformationen angezeigt. Sie sehen auch einen "Ortungs" -Link. Wenn genügend Informationen verfügbar sind, bestimmt "Ortung" die grobe Position des Geräts mithilfe der opencellid.org-Datenbank. Dies ist nicht immer erfolgreich und hängt von dem Format ab, das das angeschlossene Mobilfunknetz verwendet, um seine Daten an das Modem zu melden.
* **Gruppen**: Die Gruppen, zu denen dieses Gerät gehört. Hier können Sie Gruppen hinzufügen und entfernen. Weitere Informationen finden Sie unter [Geräte gruppieren](#grouping-devices).
* **System**: Dieser Abschnitt zeigt 
 * die interne ID des Geräts (für den Zugriff aus den Cumulocity-APIs)
 * den "Besitzer" des Geräts (der Cumulocity-Benutzer, der dieses Gerät erstellt hat).
 * den Zeitstempel, als die Gerätedaten zuletzt aktualisiert wurden
 * eine Schaltfläche zum Trennen des Geräts, vorausgesetzt Sie verfügen über Administratorzugriff auf Benutzer und das Gerät wurde über die Funktion [Geräteregistrierung](#device-registration) verbunden.
* **Notizen**: Textnotizen für ein Gerät, die Sie mit Ihren Kollegen teilen können.

Viele andere Felder auf dieser Registerkarte sind editierbar. Es ist nur sinnvoll, sie zu bearbeiten, wenn das Gerät diese Informationen nicht selbst bereitstellt. Wenn das Gerät diese Informationen bereitstellt, werden Ihre Änderungen durch eingehende Informationen vom Gerät überschrieben. Um Ihre Änderungen zu speichern, klicken Sie auf den "Änderungen speichern"-Knopf am unteren Rand des Bildschirms.

> "Letzte Kommunikation" und "Zuletzt aktualisiert" sind zwei völlig unterschiedliche Zeitstempel. "Letzte Kommunikation" zeigt an, wann ein Gerät zuletzt gesendet hat. "Zuletzt aktualisiert" zeigt an, wann der Inventareintrag des Geräts zuletzt aktualisiert wurde. Dieses Update kann vom Gerät, von der Webbenutzeroberfläche oder von einer anderen Anwendung stammen.

### <a name="child-devices"></a>Kindgeräte
Auf dieser Registerkarte werden weitere Geräte angezeigt, die mit dem aktuell angezeigten Gerät verbunden sind. Wenn Sie zum Beispiel ein Gateway betrachten, werden auf der Registerkarte alle mit dem Gateway verbundenen Geräte aufgelistet.

### <a name="measurements"></a>Messwerte

Diese Registerkarte bietet eine Standard-Visualisierung von numerischen Daten, die vom Gerät in Form von Diagrammen zur Verfügung gestellt werden. Diagramme werden in Arten von Messungen zusammengestellt, die mehrere Graphen oder eine "Serie" enthalten können. Zum Beispiel zeigt der Screenshot unten ein Diagramm für die Bewegungsmessung einschließlich Graphen für die Beschleunigung in den drei Dimensionen und ein Diagramm mit Modemstatistiken in Form von Signalstärke und Bitfehlerrate.

![Measurements](/guides/benutzerhandbuch/measurements-de.png)

Wenn ein Diagramm Graphen mit verschiedenen Einheiten enthält, wird eine Y-Achse pro Einheit wiedergegeben. Beispielsweise bestehen Bewegungsmessungen aus drei Parametern mit der Einheit "Meter pro Quadrat-Sekunde", so dass nur eine Achse angezeigt wird. Die Modemstatistik besteht aus der Signalstärke in Dezibel Milliwatt und der Bitfehlerrate in Prozent, so dass für jedes Diagramm eine Achse dargestellt wird.

Um detaillierte Informationen zu den gemessenen Werten zu erhalten, bewegen Sie den Mauszeiger über das Diagramm. Ein Tooltip wird mit detaillierten Informationen über die Messung, die dem Cursor am nächsten ist, angezeigt. 

**Zeitbereiche und Messungen**

Standardmäßig zeigen Diagramme die Rohdaten der letzten Stunde an. Sie können den Zeitbereich auf der X-Achse ändern, indem Sie auf das Drop-down-Menü "Letzte Stunde" klicken.

Wenn Sie den Zeitbereich erhöhen, schaltet das Dropdown-Menü "Keine Aggregation" auf "Stündlich" oder "Täglich" um. Das Diagramm zeigt nun Bereiche statt einzelnen Rohdatenpunkten an. Für "Stündlich" zeigt das Diagramm einen Bereich des minimalen und maximalen Wertes, der in einer Stunde gemessen wird. Für "Täglich" zeigt das Diagramm den über einen Tag gemessenen Mindest- und Höchstwert an. Ebenso zeigen die Tooltips nun Wertebereiche statt einzelner Werte an.

So erhalten Sie einen effizienten Überblick über größere Zeiträume. Ein Graph zeigt nur maximal 5.000 Datenpunkte pro Grafikmaximum an, um Ihren Desktop-Browser nicht zu überladen. Wenn Sie einen feinen Fokus auswählen, der zu mehr als 5.000 Datenpunkten führt, wird eine Warnmeldung angezeigt: "Die Daten wurden abgeschnitten. Verwenden Sie die Aggregation."

Wenn Sie auf die Schaltfläche "Echtzeit" klicken, werden Echtzeit-Benutzeroberflächen-Updates der Graphen ermöglicht, sobald neue Daten von den angeschlossenen Geräten in das System fließen. Sie können die grafischen Anzeige- und Achsengrenzen beeinflussen, indem Sie so genannte "KPIs" einrichten. Mehr hierzu unter [Administration](/guides/benutzerhandbuch/administration-deutsch#kpis).

Wichtig: Um Messkurven zu sehen, muss das Gerät Messungen in einem vorgegebenen Fragmentformat senden.

"fragment_name" : {
	"serie_name" : {
		"value" : ...
		"unit" : ...
	}
}

Tatsächliches Beispiel: 

"c8y_SpeedMeasurement": {
      "Speed": { "value": 1234, "unit": "km/h" }
}

"Fragment_name" und "serie_name" können durch einen anderen gültigen JSON-Eigenschafts-Namen ersetzt werden, der aber keine Leerzeichen und Sonderzeichen (wie [] und *) enthalten darf. Die Struktur muss genau wie oben angegeben sein: ein JSON-Objekt mit zwei Ebenen. 

### <a name="alarms"></a>Alarme

Die Registerkarte "Alarme" zeigt die Alarme eines Gerätes an. Weitere Informationen finden Sie im Abschnitt [Arbeiten mit Alarmen](#alarm-monitoring).

### <a name="control"></a>Steuerung

Auf dieser Registerkarte werden die Vorgänge aufgeführt, die an ein Gerät gesendet werden oder  wurden. Weitere Informationen finden Sie im Abschnitt [Arbeiten mit Fernsteuerung](#operation-monitoring).
 
![Operations](/guides/benutzerhandbuch/operations-de.png)

### <a name="config"></a>Konfiguration

In der Konfiguration können Sie die Parameter und Grundeinstellungen Ihres Geräts konfigurieren. Sie können eine Gerätekonfiguration manuell hinzufügen oder bearbeiten.

<img src="/guides/benutzerhandbuch/textconfig-de.png" alt="Device details" style="max-width: 100%">

### Hinzufügen oder Bearbeiten einer Gerätekonfiguration

So können Sie eine Gerätekonfiguration manuell hinzufügen oder bearbeiten:

- Navigieren Sie zu Ihrem gewünschten Gerät.
- Klicken Sie auf die Registerkarte "Konfiguration".
- Unter "Konfiguration" können Sie die Gerätekonfiguration beliebig hinzufügen oder bearbeiten.
- Wenn Sie fertig sind, klicken Sie auf "Speichern".

### <a name="configsnap"></a>Binäre Konfiguration  

Die binäre Konfiguration erlaubt Ihnen, Konfigurationsdaten abzurufen, zu ändern oder zu speichern. Die Konfigurationsdaten enthalten die Parameter und die Grundeinstellungen Ihres Gerätes. Diese Option finden Sie unter "Konfigurationsablage" im Menüpunkt "Verwaltung".

<center><img src="/guides/benutzerhandbuch/configrepscreenshot-de.png" alt="Konfigurationsablage" style="max-width: 100%"></center>

Wenn die gleiche Konfiguration auf mehrere Geräte angewendet werden soll, bietet sich die Nutzung des Konfigurations-Snapshots an. Mit dem Konfigurations-Snapshot können Sie ein Gerät konfigurieren, den Snapshot herunterladen und auf andere Geräte übertragen.

![Configuration Snapshot](/guides/benutzerhandbuch/configsnapde.png)

### Abrufen einer aktuellen Snapshot-Konfiguration von einem Gerät

Um einen aktuellen Snapshot von einem Gerät abzurufen, navigieren Sie zum Gerät und klicken dann auf die Registerkarte "Konfiguration". Klicken Sie dann im Bereich 
"Konfigurationssnapshot" in der rechten oberen Ecke auf "Neuen Snapshot vom Gerät laden". Der abgerufene Snapshot befindet sich in der "Konfigurationsablage".

Die Konfigurationsablage befindet sich im Menü "Verwaltung". 

<img src="/guides/benutzerhandbuch/retrievesnap-de.png" alt="Konfigurationssnapshot abrufen" style="max-width: 60%">

### Anwenden einer Snapshot-Konfiguration auf einem Gerät 

Um einen neuen Snapshot anzuwenden, navigieren Sie zu einem Gerät und klicken Sie dann auf "Konfiguration". Unter "Konfigurationssnapshot" können Sie einen Eintrag aus der Konfigurationsablage aus dem Dropdown-Menü auswählen. Wenn die Eingabedatei ausgewählt ist, klicken Sie auf "Neuen Snapshot auf das Gerät legen".

<img src="/guides/benutzerhandbuch/addsnap-de.png" alt="Konfigurationssnapshot anwenden" style="max-width: 60%">

### Anwenden einer Snapshot-Konfiguration von einem Gerät auf ein anderes Gerät
 
Um einen Snapshot von einem anderen Gerät auf einem anderen anzuwenden, navigieren Sie zur Registerkarte "Konfiguration" des Geräts, das die gewünschte Konfiguration hat. Holen Sie den aktuellen Snapshot vom Gerät, indem Sie auf "Neuen Snapshot vom Gerät laden" klicken. Navigieren Sie zur Registerkarte "Konfiguration" des anderen Geräts, wählen Sie im Dropdown-Menü im Bereich "Neuen Snapshot anwenden" den neuen Snapshot aus und klicken Sie auf "Snapshot an Gerät senden".
 
> Wenn Sie die Snapshot-Konfiguration von einem Gerät auf einem anderen anwenden, kann die Konfiguration Daten enthalten, die gerätespezifisch sind.
 
### Erstellen einer Snapshot-Konfiguration aus einer Datei

Neue Konfigurationen können der Konfigurationssnapshot-Liste hinzugefügt werden, indem Sie auf "Konfigurationssnapshot hinzufügen" klicken. Anschließend werden Sie zur "Konfigurationsablage" umgeleitet. Alle Gerätekonfigurationen befinden sich in der "Konfigurationsablage" unter dem Menüpunkt "Verwaltung". So fügen Sie einen neuen Snapshot hinzu:

- Klicken Sie "Konfigurationssnapshot hinzufügen".
- Geben Sie den "Namen" ein.
- Geben Sie die "Beschreibung" ein.
- Geben Sie den "Gerätetyp", der sich auf der Registerkarte "Info" des Zielgerätes befindet, ein.
- Fügen Sie die Konfigurationssnapshot-Datei hinzu, indem Sie entweder "Hochladen", "Externe URL" oder "Ausgewählte Datei" anklicken.
- Wenn Sie fertig sind, klicken Sie auf "Konfigurationssnapshot hinzufügen".

![Configuration Snapshot Repository](/guides/benutzerhandbuch/configsnaprepo-de.png)


### <a name="software"></a>Software

Auf dieser Registerkarte können Sie die Firmware eines Geräts und die auf einem Gerät installierte Software verwalten und aktualisieren. 

Um eine neue Firmware zu installieren, wählen Sie im Feld "Zu installierende Firmware" ein Firmware-Image und klicken Sie auf die Schaltfläche "Installieren". 

Um eine Software auf dem Gerät zu installieren, wählen Sie im Feld "Zu installierende Software" ein Softwarepaket aus und klicken Sie auf die Schaltfläche "Installieren". Um ein Paket aus dem Gerät zu entfernen, lassen Sie den Mauszeiger über einem bestimmten Softwarepaket verweilen und klicken Sie auf die Schaltfläche "x".

![Software](/guides/benutzerhandbuch/software-de.png)

Die Installation von Software und Firmware beinhaltet in der Regel einen Neustart des Geräts. Um den Fortschritt einer Installation zu überwachen, gehen Sie zur Registerkarte "Steuerung".

### <a name="events"></a>Ereignisse

Diese Registerkarte ermöglicht die Fehlersuche auf niedriger Ebene eines Geräts. Siehe auch [Fehlerbehebung bei Geräten](#events-all).

### <a name="location"></a>Standort

Die Registerkarte "Standort" zeigt standardmäßig den Standort auf einer Karte an, den das Gerät gemeldet hat. Bei Geräten, die keinen Standort melden, können Sie den Standort auch manuell einstellen. Platzieren Sie dazu einfach die "Markierungsnadel" an der richtigen Stelle auf der angezeigten Karte.

Die Registerkarte wird angezeigt, wenn ein Gerät die Eigenschaft c8y_Position enthält. Wenn Sie ein neues c8y-Positionsereignis senden, können Sie auch das gleiche Fragment c8y_Position auf dem Gerät setzen und es wird automatisch die Position auf der Karte markieren.

### <a name="shell"></a>Shell

Die Geräte-Shell ermöglicht interaktives Arbeiten mit entfernten Geräten. Viele industrielle Geräte unterstützen eine Form der Befehlssprache, seien es AT-Befehle für Modems, CSV-Befehle für viele Tracking-Geräte oder aufwändige Scripting-Mechanismen wie Tixi TiXML. In der Shell können Sie Befehle in der jeweiligen Sprache des Gerätes senden und interaktiv die Ergebnisse der Befehle anzeigen.

Die Shell-Benutzeroberfläche ist in zwei Teile aufgeteilt:

* Eine Liste der bereits ausgeführten Kommandos. Standardmäßig sind die letzten drei Befehle sichtbar.
* Eine Eingabeaufforderung zur Eingabe neuer Befehle, die zur Liste hinzugefügt werden.

Die Liste zeigt Status, Datum und Text eines Befehls an. Wenn Sie auf einen Listeneintrag klicken, wird das Ergebnis des Befehls angezeigt (sofern er ausgeführt wurde).

![Geräte-Shell](/guides/benutzerhandbuch/shell-de.png)

In der Eingabeaufforderung können Sie beliebigen Befehlstext eingeben. Um den Befehlstext an das Gerät zu senden, klicken Sie auf die Schaltfläche "Ausführen". Die Schaltfläche "Ausführen" kann nur gewählt werden, wenn das Gerät online ist.

Um Ihnen mit der Befehlssyntax zu helfen, sind häufig verwendete Befehle für einige Geräte verfügbar, indem Sie auf die Schaltfläche "Wählen Sie ein Beispielkommando aus" klicken. Wählen Sie einen Befehl aus und klicken Sie auf "Verwenden", um den Befehl in die Eingabeaufforderung zu kopieren, oder wählen Sie "Ausführen", um den Befehl sofort auszuführen.

<img src="/guides/benutzerhandbuch/shelltemplates-de.png" alt="Shell-Kommandos" style="max-width: 60%">

### <a name="permissions"></a>Berechtigungen

Die Berechtigung, bestimmte Geräte anzuzeigen, zu bearbeiten oder zu steuern, kann auf Benutzer und Benutzergruppen beschränkt werden. Weitere Informationen zum Verwalten von Berechtigungen finden Sie unter [Administration](/guides/benutzerhandbuch/administration-deutsch). Verwenden Sie den Anwendungswechsler, um zur Administrationsanwendung zu wechseln.

### <a name="tracking"></a>Tracking

Geräte können die Historie ihrer Bewegungen in Cumulocity aufzeichnen. Über die Registerkarte "Tracking" können Sie einen Zeitraum auswählen und die Bewegungen des Geräts während dieses Zeitraums visualisieren. Bewegungen werden als rote Linien auf der Karte angezeigt.

Neben der Karte werden die einzelnen Aufzeichnungen mit ihrer Zeit aufgelistet ("Tracking-Ereignisse"). Wenn Sie auf eine Aufnahme klicken, zeigt eine Markierungsnadel auf der Karte den Speicherort zum Zeitpunkt der Aufnahme an.

Die Registerkarte "Tracking" wird angezeigt, wenn das Gerät eine "c8y_Position"-Eigenschaft enthält.

![Tracking](/guides/benutzerhandbuch/tracking-de.png)

Je nach Typ eines Gerätes und dessen Integration in Cumulocity können Sie geräteseitig auch Geo-Fencing und Bewegungserkennung konfigurieren. 

Außerdem können Informationen über die Zellenidentifikation genutzt werden, um den Standort des Gerätes zu bestimmen (vorausgesetzt, diese Funktion ist aktiviert und das Gerät ist kompatibel).  Derzeit werden die Services von [Combain](https://combain.com/) und [Google](https://developers.google.com/maps/documentation/geolocation/intro) unterstützt. Sie können die Tracks auf Basis von Daten von diesen beiden Diensten anzeigen lassen bzw. GPS-Daten oder Zellenidentifikations-Daten herausfiltern. 

### <a name="service-monitoring"></a>Service
Neben der Verbindungsüberwachung verfügt Cumulocity über eine separate Serviceüberwachung für Maschinen. Weitere Informationen finden Sie unter [Serviceüberwachung](#monitoring-services).

### <a name="logs"></a>Logdateien

Über die Registerkarte "Logdateien" können Sie Log-Informationen von Geräten anfordern. Log-Informationen können nach Datumsbereichen, Art des Logs, Schlüsselwörtern und der maximalen Anzahl der zu übertragenden Zeilen gefiltert werden.

Um Log-Informationen von einem Gerät anzufordern, gibt es die folgenden Optionen:

- Wählen Sie den Datums- und Zeitbereich aus.
- Wählen Sie die Art der Log-Information. Die unterstützten Log-Informationen sind meist gerätespezifisch.
- Geben Sie optional einen Text ein, um die Log-Information zu filtern. Wenn Sie beispielsweise "Benutzer" eingeben, werden nur Zeilen mit dem Wort "Benutzer" in den zurückgegebenen Log-Informationen angezeigt.
- Wählen Sie die maximale Anzahl der anzuzeigenden Zeilen (absteigend) aus.
- Klicken Sie auf "Logdatei anfordern". 

![Request log](/guides/benutzerhandbuch/requestlog-de.png)

Das Anfordern einer Logdatei von einem Gerät kann einige Zeit in Anspruch nehmen. Nachdem die Logdatei vom Cumulocity-Gerät übertragen wurde, erscheint es in der Liste unterhalb der Auswahl-Widgets. Der Eintrag in der Liste enthält den Logzeitbereich, der abgefragt wurde. Klicken Sie auf den Eintrag in der Liste, um die Log-Informationen auf der Seite anzuzeigen. Bewegen Sie den Mauszeiger über den Eintrag, um auf die Download- und Löschsymbole zuzugreifen. Mit dem Download-Symbol können Sie den Log-Auszug auf Ihren lokalen PC herunterladen. Mit dem Löschsymbol können Sie die Logdatei löschen.

### <a name="identity"></a>Identifikator

Cumulocity kann Geräte und Assets mit mehreren externen Identifikatoren assoziieren. Beispielsweise können Geräte häufig durch die IMEI ihres Modems, durch eine Mikrocontroller-Seriennummer sowie durch einen Asset-Tag identifiziert werden. Diese Registerkarte listet alle Identifikatoren auf, die für ein bestimmtes Gerät aufgezeichnet wurden.

Dies ist nützlich, wenn Sie nicht funktionsfähige Hardware haben und die Hardware ersetzen müssen, ohne die aufgezeichneten Daten zu verlieren. Schließen Sie einfach die neue Hardware an Ihr Konto an und ändern Sie den Identifikatoreintrag der alten Hardware, um den Identifikator der neuen Hardware zu erhalten.


## <a name="connection-monitoring"></a>Verbindungsüberwachung

Cumulocity kann die Verbindung zu Ihren Geräten automatisch überwachen. Wenn die Verbindung zu einem Gerät überwacht werden soll, gehen Sie zur Registerkarte "Info" des Geräts. Im Feld "Erwartetes Sendeintervall" rechts wird festgelegt, wie oft Sie vom Gerät hören. Wenn Sie beispielsweise "Erwartetes Sendeintervalll" auf 60 setzen, erwarten Sie, dass das Gerät mindestens einmal in einer Stunde mit Cumulocity kommuniziert. Das Intervall wird entweder vom Gerät selbst eingestellt, basierend auf dem Wissen des Geräts, wie oft es versucht, Daten zu senden, oder es wird von Ihnen manuell gesetzt.

Die verschiedenen Anschlusszustände sind auf dem Bild unten dargestellt. Der obere Pfeil repräsentiert Verkehr vom Gerät zu Cumulocity. Er kann grün, rot oder grau sein. Grün bedeutet, dass Daten innerhalb des erwarteten Intervalls gesendet wurden. Rot bedeutet, dass keine Daten innerhalb des erwarteten Intervalls gesendet wurden. Grau bedeutet, dass kein Intervall konfiguriert ist.

Der untere Pfeil zeigt den Status der Push-Verbindung an, über die Befehle von Cumulocity an das Gerät gesendet werden (eine Verbindung zum /devicecontrol/notifications API, nicht zum Echtzeit-API). Es kann entweder grün oder grau sein. Grün bedeutet, dass die Verbindung hergestellt ist. Grau bedeutet, dass die Verbindung nicht hergestellt ist. Im Falle eines grauen Pfeils unterstützt das Gerät keine Push-Verbindungen, oder es liegt ein Fehler vor.

"Wartungsmodus" ist ein spezieller Verbindungsstatus, der anzeigt, dass das Gerät aktuell gewartet wird und nicht überwacht werden soll. Während ein Gerät gewartet wird, werden keine Alarme für dieses Gerät ausgelöst. Sie können den Wartungsmodus aktivieren, indem Sie das erforderliche Intervall auf einen negativen Wert setzen.

<center><img src="/guides/users-guide/verbcontr1.png" alt="Device details" style="max-width: 60%"></center>


> Die Verbindungsüberwachung erfolgt nicht in Echtzeit. Beispielsweise ändert sich der Zustand der Verbindung nicht sofort, wenn Sie ein Gerät ausschalten. Abhängig von Ihrem Netzwerk kann es ungefähr 20 Minuten dauern, bis eine defekte Verbindung entdeckt wird, da das Netzwerk das Senden von Daten für eine signifikante Zeitspanne wiederholt.

Wenn ein Gerät als offline erkannt wird (es sendet innerhalb des erforderlichen Intervalls keine Daten mehr, und der obere Pfeil ändert seine Farbe auf Rot), wird ein Nichtverfügbarkeitsalarm für das Gerät erzeugt: "Keine Kommunikation mit dem Gerät seit <Zeit>."

## <a name="monitoring-services"></a>Serviceüberwachung

Cumulocity unterscheidet zwischen der Verbindungsüberwachung und der Serviceüberwachung. Die Verbindungsüberwachung zeigt nur an, dass das Gerät mit Cumulocity kommuniziert, es bedeutet nicht automatisch, dass es richtig funktioniert.

Die Serviceüberwachung zeigt an, ob das Gerät in Betrieb ist. Zum Beispiel ist ein Verkaufsautomat in Betrieb, wenn er bereit ist, Waren zu verkaufen. Ein Verkaufsautomat kann Waren ohne eine Verbindung zu Cumulocity mit Bargeld verkaufen. Aus der Perspektive eines Kaufmanns ist es also in Betrieb. Es verhält sich ähnlich, wenn Sie die Stromversorgung eines Gateways ausschalten. Auch dann können die Geräte hinter dem Gateway weiterhin funktionieren.

Cumulocity geht davon aus, dass ein Gerät in Betrieb ist, solange kein kritischer, nicht aufgelöster Alarm für das Gerät vorhanden ist. Dies wird als Zeitanteil angezeigt, für den ein solcher Alarm vorliegt. Wenn ein Gerät keine kritischen Alarme zu irgendeinem Zeitpunkt während eines Zeitraums hatte, war es zu 100 % in Betrieb. Wenn es einige kritische, ungelöste Alarme während der Hälfte der Zeit gab, war das Gerät zu 50 % in Betrieb.

![Service monitoring](/guides/benutzerhandbuch/servicemonitoring-de.png)

Während ein Gerät offline ist, nimmt Cumulocity standardmäßig an, dass das Gerät weiterhin in Betrieb bleibt, wie es war, bevor es die Verbindung verloren hatte. Wenn es zuvor nicht in Betrieb war, geht Cumulocity davon aus, dass das Gerät während eines Verbindungsausfalls außer Betrieb ist.

Es kann Ausnahmen von dieser Regel geben. Wenn Ihre Verkaufsautomaten ausschließlich auf bargeldlose Zahlung angewiesen sind und die Verbindung zum Netzwerk verlieren, bedeutet das, dass die Automaten außer Betrieb sind und aufhören zu verkaufen. In diesem Fall müssen Nichtverfügbarkeitsalarme in der [Administrations-Anwendung](/guides/benutzerhandbuch/administration-deutsch#reprio-alarms) auf "kritische" Priorität statt "wichtige"-Priorität gesetzt werden.

Cumulocity kann die Verfügbarkeit der Dienste auf der Ebene einzelner Geräte oder für alle Geräte anzeigen. Wenn Sie im Navigator "Service" wählen, wird der gesamte Service für alle Geräte angezeigt. Auf dieser Seite sehen Sie auch ein Histogramm, wieviele Geräte im vergangenen Monat wann verfügbar waren (siehe obigen Screenshot).

## <a name="map"></a>Der Standort von Geräten

Wenn Sie im Navigator auf "Karte" klicken, wird eine Karte aller Geräte in Ihrem Konto angezeigt. Geräte werden als "Markierungsnadeln" angezeigt, auf die Sie klicken können, um den Namen des Geräts zu erhalten. Wenn Sie auf den Namen des Geräts klicken, gelangen Sie in die Detailansicht des Geräts. Durch Anklicken des Kontrollkästchens "Echtzeit" wird die Karte automatisch aktualisiert, sobald sich Geräte bewegen.

## <a name="alarm-monitoring"></a>Arbeiten mit Alarmen

Geräte können Alarme auslösen, um anzuzeigen, dass ein Problem vorliegt und eine Intervention erforderlich ist. Alarme können an verschiedenen Orten betrachtet werden:

* Durch Klicken auf "Alarme" im Navigator wird der gesamte Alarmverlauf angezeigt.
* Durch Deaktivieren der "Nur offene Alarme"-Schaltfläche sehen Sie hier die Alarme aller Geräte, die noch nicht gelöst wurden.
* Durch Klicken auf ein Gerät und Auswählen der Registerkarte "Alarme" sehen Sie die Alarme dieses Geräts. Standardmäßig werden nur ungelöste Alarme angezeigt, aber Sie können das "Nur offene Alarme" Kontrollkästchen deaktivieren, um alle Alarme anzuzeigen.

Die Alarmanzeige ist in vier Abschnitte unterteilt, die Alarme unterschiedlicher Prioritäten separat auflisten. In jedem Abschnitt wird zuerst der letzte Alarm angezeigt. Das folgende Bild zeigt die Detailanzeige eines Alarms nach dem Anklicken. Die Detailansicht enthält folgende Elemente:

* **Alarmschweregrad**: Die Schweregrade hierbei sind:
 * **Kritisch**: Das Gerät ist außer Betrieb, und sofortiges Eingreifen ist erforderlich.
 * **Wichtig**: Es gibt ein Problem, welches Aufmerksamkeit erfordert.
 * **Weniger wichtig**: Ein kleineres Problem ist aufgetreten.
 * **Warnung**: Es gibt eine Warnung.
* **Status**: Der Status des Alarms. Das kann sein:
 * **Aktiv**: Wenn der Alarm ausgelöst wurde und noch niemand daran arbeitet.
 * **Zur Kenntnis genommen**: Wenn jemand die "Zur Kenntnis genommen"-Schaltfläche aktiviert hat.
 * **Gelöst**: Wenn entweder jemand auf die Schaltfläche "Löschen" geklickt hat, um einen Alarm manuell zu löschen, oder wenn das Gerät selbst feststellt, dass das Problem nicht mehr besteht.
* **Anzahl**: Die Häufigkeit, mit der dieser Alarm vom Gerät gesendet wurde. Cumulocity dupliziert Alarme, so dass nur ein Alarm eines bestimmten Typs für ein bestimmtes Gerät aktiv sein kann. Wenn ein anderer Alarm des gleichen Typs durch das Gerät gesendet wird, wird die Anzahl erhöht.
* **Beschreibung**: Eine Textbeschreibung des Alarms.
* **Gerät**: Der Name des Geräts. Durch Klicken auf den Namen gelangen Sie in die Detailansicht des Geräts.
* **Datum erstellt**: Der Zeitstempel, als der Alarm zuerst erstellt wurde.
* **Typ**: Die Art des Alarms. Dieser Text dient zum Duplizieren von Alarmen und zum Konfigurieren der Priorität von Alarmen in der [Administrations-Anwendung](/guides/benutzerhandbuch/administration-deutsch#reprio-alarms).
* **Zusätzliche Information**: Ein Alarm kann beliebige zusätzliche Informationen enthalten, die vom Gerät bereitgestellt werden.
* **Änderungsprotokoll**: Zusammen mit dem Alarm wird ein Protokoll der Änderungen des Alarms gespeichert. Dadurch wird ein Alarmverlauf mit verschiedenen Daten erzeugt.

![Alarm display](/guides/benutzerhandbuch/alarme-de.png)

## <a name="operation-monitoring"></a>Arbeiten mit Kommandos

Kommandos werden zur Fernsteuerung von Geräten verwendet. Klicken Sie im Navigator auf "Kommandos", um alle Kommandos anzuzeigen, die an ein Gerät gesendet wurden und noch in der Warteschlange stehen, um an ein Gerät gesendet zu werden. Ähnlich können Sie die Registerkarte "Steuerung" eines bestimmten Geräts auswählen, um die Kommandos dieses Geräts anzuzeigen.

Kommandos können sich in diesen Ausführungszuständen befinden:

* **Unerledigt**: Das Kommando wurde gerade erstellt und wartet darauf, vom Gerät übernommen zu werden.
* **Wird ausgeführt**: Das Kommando wurde vom Gerät übernommen und wird ausgeführt.
* **Erfolgreich**: Das Kommando wurde vom Gerät erfolgreich ausgeführt.
* **Fehlgeschlagen**: Das Kommando konnte nicht vom Gerät ausgeführt werden.

Wenn Sie auf ein Kommando klicken, werden die Parameter des Kommandos angezeigt. Wenn Sie beispielsweise auf ein Konfigurationskommando klicken, wird die Konfiguration angezeigt, die an das Gerät gesendet wird. Das Klicken auf ein fehlgeschlagenes Kommando zeigt den Grund des Fehlers an.

Die Schaltfläche "Alle" zeigt alle Kommandos für ein Gerät an, unabhängig davon, ob sie bereits verarbeitet wurden. Das Gerät führt diese Kommandos in aufsteigender Zeitreihenfolge auf. Kommandos werden streng nach dieser Reihenfolge ausgeführt.

![Operations](/guides/benutzerhandbuch/operations-de.png)

## <a name="bulk-operations"></a>Sammelkommandos

Zur einfacheren Handhabung von vielen Geräten bietet Cumulocity "Sammelkommandos". Mit Sammelkommandos können Sie einfach Kommandos für jedes Gerät in einer Gruppe ausführen.

Um ein Sammelkommando für eine Gruppe auszuführen, gehen Sie folgendermaßen vor:

- Wählen Sie ein Gerät aus und navigieren Sie zur Registerkarte "Steuerung".
- Erstellen Sie ein Kommando.
- Navigieren Sie zu diesem Kommando und klicken Sie auf die drei untereinanderliegenden Kästchen am Ende der Zeile und dann auf "Editiere Zeitplan". 
- Ein neues Fenster öffnet sich, in dem Sie definieren können, wann und mit welcher Verzögerung dieses Kommando für alle Gruppenmitglieder ausgeführt wird.

![Sammelkommando ausführen](/guides/benutzerhandbuch/executebulkoperations-de.png)

<img src="/guides/benutzerhandbuch/executebulkoperations2-de.png" alt="Sammelkommando ausführen Schritt 2" style="max-width: 60%">

> Weitere Informationen über Sammelkommandos finden Sie unter [Arbeiten mit Kommandos](#operation-monitoring).

Um den Status und den Fortschritt Ihrer Kommandos anzuzeigen, klicken Sie auf die gewünschte Gruppe und dann auf "Sammelkommandos".

![Sammelkommando Status](/guides/benutzerhandbuch/bulkoperationsde.png)

Auch Sammelkommandos können bearbeitet werden. Um ein Kommando zu bearbeiten, wählen Sie ein Gerät aus und navigieren Sie zur Registerkarte "Steuerung". Wählen Sie das Kommando aus, klicken Sie auf die drei untereinanderliegenden Kästchen am Ende der Zeile und dann auf "Editiere Zeitplan". Ein neues Fenster wird eingeblendet. Die Werte "Startdatum" und "Verzögerung" können geändert werden. Um die Kommandodetails zu ändern, klicken Sie auf "Anzeigen Kommandodetails". Wenn Sie fertig sind, klicken Sie auf "Neu planen", um Änderungen zu übernehmen, oder klicken Sie auf "Abbrechen", um Änderungen zu verwerfen.

## <a name="events-all"></a>Fehlerbehebung bei Geräten

Ereignisse sind Low-Level-Nachrichten, die von Geräten gesendet werden, die normalerweise für die anwendungsspezifische Verarbeitung verwendet werden. Beispielsweise sendet ein Verkaufsgerät seine Echtzeitverkäufe in Form von Ereignissen. Wenn Sie ein Gerät auf einer genaueren Ebene untersuchen müssen, gehen Sie zur Registerkarte "Ereignisse". Wenn Sie auf einzelne Ereignisse klicken, erhalten Sie weitere Informationen zu den im Ereignis enthaltenen Daten. Ähnlich können Sie alle Ereignisse über alle Geräte sehen, indem Sie im Navigator "Ereignisse" auswählen.

Da Geräte größere Mengen an Ereignisdaten senden können, können Sie die hier gezeigten Daten nach Datum filtern. Sie können auch auf das Kontrollkästchen "Automatische Aktualisierung" klicken, um jederzeit aktuelle Ereignisse zu sehen.

## <a name="software-repo"></a> Verwaltung von Firmware und Software

Cumulocity bietet einen zentralen Platz für die Erfassung von Referenz-Firmware und -Software für Geräte in der "Firmware-Ablage" und in der "Software-Ablage".

Um Firmware zu aktualisieren oder Softwarepakete auf einem bestimmten Gerät hinzuzufügen, müssen Sie drei Schritte durchführen:

1. Firmware- und Software-Dateien mit der [Administrations-Anwendung](/guides/benutzerhandbuch/administration-deutsch#files) hochladen. (Dieser Schritt ist optional und nicht zwingend erforderlich, da der Hersteller die Firmware auch online anbieten kann.)

2. Wählen und speichern Sie die Dateien in der "Firmware-Ablage". Um ein neues Firmware-Image zur Ablage hinzuzufügen, gehen Sie zur "Firmware-Ablage" und klicken Sie auf die Schaltfläche "Firmware hinzufügen". Geben Sie dann den Namen der Firmware, die Version und die URL ein, von der das Gerät die Firmware herunterladen kann. Auf ähnliche Art und Weise verwenden Sie die "Software-Ablage", um Referenz-Softwarepakete hinzuzufügen.

3. Installieren Sie die Firmware oder Software auf einem bestimmten Gerät. Zuerst navigieren Sie zu "Alle Geräte". Wählen Sie das gewünschte Gerät und gehen Sie dann zum "Software"-Tab. Wählen Sie die zu installierende Firmware oder Software aus und klicken Sie auf "Installieren".  (Mehr hierzu unter [Software](/guides/benutzerhandbuch/device-management-deutsch#software).)

> Sie müssen die Administrations-Anwendung aufrufen, um andere Binärdateien in Cumulocity zu speichern. Siehe auch [Administration](/guides/benutzerhandbuch/administration-deutsch#files).

Cumulocity bietet Ihnen die Möglichkeit, Firmware oder Softwareupdates für mehrere Geräte gleichzeitig auszuführen. Um dies zu tun:

- Führen Sie das Softwareupdate in einem einzigen Gerät aus, um zu testen, dass die neue Version wirklich funktioniert.
- Navigieren Sie zum entsprechenden Vorgang und wählen Sie "Ausführen für die gesamte Gruppe".
- Füllen Sie das Formular aus, um den Gesamtvorgang zu planen, und klicken Sie auf die Schaltfläche "Erstellen".

Der Vorgangsstatus kann unter der entsprechenden Gruppe im "Sammelkommandos"-Tab eingesehen werden.

> Weitere Informationen zu Sammelkommandos finden Sie unter [Sammelkommandos](#bulk-operations). 

## <a name="credentials"></a>Verwaltung von Gerätezugangsdaten 

Unter dem Menüpunkt "Gerätezugänge" unter "Verwaltung" sind alle Anmeldeinformationen aufgelistet, die für die angeschlossenen Geräte generiert wurden. Jedes Gerät, das registriert wurde, erscheint hier mit der Namenskonvention "device_&lt;id&gt;".

In den meisten Fällen sollten Sie nichts bearbeiten müssen. Ausnahmen sind:

* Sie haben ein Werksreset auf einem Gerät durchgeführt. Dabei verliert das Gerät häufig seine Zugangsdaten. Wenn das passiert, löschen Sie die Zugangsdaten für das Gerät auch in Cumulocity und fahren Sie dann mit dem normalen [Registrierungsprozess](#device-registration) fort, um das Gerät neu zu registrieren.
* Wenn Sie ein Gerät vorübergehend ausschalten möchten, verwenden Sie die Schaltfläche "Deaktivieren" neben den Geräteanmeldeinformationen.
* Wenn Sie einem einzelnen Gerät mehrere Berechtigungen zuweisen möchten, klicken Sie auf die Gerätezugangsdaten und wählen Sie zusätzliche oder unterschiedliche Benutzergruppen für das Gerät aus.

Die Geräte-Anmeldeinformationen können auch aus einer CSV-Datei bereitgestellt werden. Dateien können über die markierte Schaltfläche hochgeladen werden. 

<img src="/guides/benutzerhandbuch/autoregisterde.png" alt="Sammelregistrierung" style="max-width: 60%">

Weitere Details zur Dateistruktur finden Sie unter [Sammelregistrierung](#creds-upload).

## <a name="simulators"></a> Simulatoren

Mit dem Cumulocity-Simulator können alle Aspekte von IoT-Geräten simuliert werden:

* Einrichten eines simulierten Geräts oder eines Netzwerks von simulierten Geräten
* Festlegen, welche Vorgänge das Gerät verarbeiten kann
* Erstellen von Arbeitsanweisungen basierend auf vordefinierten Nachrichtenvorlagen oder benutzerdefinierten Vorlagen und Planung von Arbeitsschritten
* Erstellen von bis zu zehn Geräten eines definierten Typs
* Generieren von Meldungen für Messungen, Alarme, Ereignisse und Stammmdaten
* Anzeige von Simulationsproblemen als Alarme 

### Was ist ein Simulator?

Mit dem Simulator können Sie künstliche Geräte mit gleicher Funktionalität wie angeschlossene Hardware-Geräte erstellen.

Ein Simulator verwendet eine Wiedergabeliste, um Nachrichten zu simulieren, die das Gerät an die Cumulocity-Plattform sendet. Eine Wiedergabeliste ist eine Folge von Befehlen, die der Simulator nacheinander ausführt. Wenn der letzte Befehl erreicht ist, startet der Simulator erneut mit dem ersten.

Eine Anweisung kann entweder eine Nachricht senden (Messungen, Alarme, Ereignisse und Inventar) oder für eine bestimmte Zeit warten (Schlaf).

Eine Nachricht wird durch Auswählen einer Vorlage (z. B. Senden einer Temperatur) und Bereitstellen der Werte für diese Vorlage (23,0 Grad) definiert. Es stehen viele vordefinierte Nachrichtenvorlagen zur Verfügung, z. B. "Messwert erstellen", "Ereignis senden", "Erstellen" und "Abbrechen" eines Alarms. Diese basieren auf statischen MQTT-Vorlagen. Darüber hinaus können benutzerdefinierte Nachrichtenvorlagen mit dem SmartREST-Vorlagen-Editor definiert werden.

### Einrichten eines Simulators

Um einen Simulator einzurichten, gehen Sie zur Navigation im Device Management und wählen Sie  "Simulatoren" unter "Geräte" aus.

![Neuer Simulator](/guides/benutzerhandbuch/newsimde.png)

Simulatoren können hinzugefügt werden, indem Sie auf "Neuer Simulator" klicken. Sie können nun wählen, ob Sie einen neuen Simulator definieren oder einen voreingestellten Simulator auswählen möchten. Geben Sie dem Simulator einen Namen und definieren Sie die Anzahl der Instanzen (bis zu 10).

<img src="/guides/benutzerhandbuch/addsimde.png" alt="Add Simulator" style="max-width: 60%">

### Voreingestellte Simulatoren

Die andere Möglichkeit ist, einen Simulator aus einem bereits voreingestellten zu erstellen. Derzeit stehen zwei verschiedene voreingestellte Simulatoren zur Verfügung: "Temperaturmesswerte" und "Positionsereignis".

<img src="/guides/benutzerhandbuch/addtempsimde.png" alt="Add Temperature Preset" style="max-width: 60%">

<img src="/guides/benutzerhandbuch/addpossimde.png" alt="Add Position Preset" style="max-width: 60%">

Vorhandene Simulatoren können durch Klicken auf die drei untereinanderliegenden Kästchen in der rechten oberen Ecke bearbeitet, dupliziert oder entfernt werden. Es öffnet sich ein Dropdown-Menü mit diesen Optionen.

![Simulator-Optionen](/guides/benutzerhandbuch/editcloneremsimde.png)


### Hinzufügen von Anweisungen für den Simulator

Nach dem Einrichten eines Simulators können Sie Anweisungen (Instruktionen) hinzufügen und definieren, was Ihr Simulator tun soll. Anweisungen sind einzelne Arbeitsschritte, die zu einer Wiedergabeliste hinzugefügt werden. Der Simulator arbeitet diese Liste durch. 

Im Folgenden ist ein Beispiel für einen Positionsereignissimulator dargestellt.

![Simulator-Anweisungen](/guides/benutzerhandbuch/addinstructionsde.png)

Die folgende Übersicht erscheint:

![Simulator-Anweisungen Schritt 2](/guides/benutzerhandbuch/addinstructions2de.png)

Innerhalb dieses voreingestellten Simulators sind bereits Musteranweisungen enthalten. Sie können zwei Schritte identifizieren: "Positionsereignis erzeugen und Geräteposition aktualisieren" und "Warten".

### Details der Anweisungen

**Fragmente:**

Die Messanweisung bezieht sich auf ein Fragment. Dieses ist das unten gezeigte Beispiel. Fragmente werden verwendet, um die Fähigkeiten eines verwalteten Objekts zu identifizieren. Mehr Informationen über Fragmente finden Sie hier:
[Sensor Library ](https://www.cumulocity.com/guides/reference/sensor-library/). 

![Simulator-Anweisungen Schritt 3](/guides/benutzerhandbuch/addinstructions3de.png)

**SmartREST-Vorlagen**

Andere Optionen zeigen eine Auswahl von SmartREST-Vorlagen. Die SmartREST-Vorlagen werden im Navigator unter dem Eintrag "SmartRest Template" unter "Gerätetypen" erstellt. Diese Vorlagen sind Antwortvorlagen, die eine Liste von Werten erzeugen, die einen Vorgang als Endergebnis beschreiben. Die unten aufgeführte SmartREST-Vorlage erstellt einen Warnalarm mit Text zu einem bestimmten Zeitpunkt.
Spezifische Informationen und Muster einer Vielzahl von Vorlagen sind erhältlich im [MQTT Developer's Guide](/guides/mqtt). 

![Rest Template](/guides/benutzerhandbuch/resttemplatede.png)

![Simulator-Anweisungen Schritt 4](/guides/benutzerhandbuch/addinstructions4de.png)

Die Anweisung "Warten" erfordert einen Wert für die Dauer in Sekunden. Das Bedienfeld auf der rechten Bildschirmhälfte ändert sich entsprechend der Art der Anweisungen, die Sie wählen.

### Hinzufügen von Kommandos zu einem Simulator

Direkt unter der Registerkarte "Anweisungen" finden Sie die unterstützten Kommandos. In diesem Menü können Sie bestimmte Funktionen wie Konfiguration oder Software-/Firmware-Update aktivieren oder deaktivieren.

![Kommandos aus](/guides/benutzerhandbuch/supop1de.png)

![Kommandos an](/guides/benutzerhandbuch/supop2de.png)

Einige Kommandos sind aktiviert. Mithilfe der Schaltfläche "Benutzerdefinierte Kommandos hinzufügen" können Sie auch eigene Kommandos hinzufügen.

### Alarme (innerhalb der Simulatorfunktion)

Der letzte Tab im Simulator-Menü beinhaltet Alarme.

![Simulator-Alarm](/guides/benutzerhandbuch/simalarmde.png)

Dies sind nicht etwa die Alarme, die durch die simulierten Geräte erzeugt werden, sondern diese Alarme beziehen sich auf den Simulator selber. Wenn der Simulator nicht richtig arbeitet, werden hier Alarme oder Warnungen angezeigt.

## <a name="cloud_remote_access"></a>Cloud Remote Access

### Übersicht

Cumulocity Cloud Remote Access implementiert Virtual Network Computing (VNC), um Fernzugriff auf Bedienkonsolen und andere Geräte mit einer grafischen Benutzeroberfläche zu erhalten. Die Anwender der Geräte können so über einen Webbrowser mit den Geräten arbeiten, als ob sie sich direkt vor ihnen befinden. 

![VNC](/guides/benutzerhandbuch/VNC1a-DE.png)

Cloud Remote Access funktioniert wie in der Abbildung unten dargestellt. Ausgehend von dem ferngesteuerten Gerät: Auf dem Gerät läuft ein VNC-Server, und das Gerät ist mit einem Gateway, das mit dem Cloud Remote Access kompatibel ist, verbunden. Dieses Gateway muss in der Device-Management-Anwendung als Gerät registriert sein. Weitere Informationen und Anleitungen zur Geräteregistrierung finden Sie hier: [Geräte manuell verbinden](https://www.cumulocity.com/guides/users-guide/device-management/#device-registration)

![VNC2](/guides/benutzerhandbuch/VNC2-DE.png)

Mit Cloud Remote Access können Sie

- Statusvisualisierungen ansehen und Updates von ferngesteuerten Geräten jederzeit überwachen, so als befänden Sie sich direkt am Gerät
- einfach eine Verbindung zu ferngesteuerten Geräten erstellen, da komplizierte VPN-Setups nicht nötig sind 

![VNC1b](/guides/benutzerhandbuch/VNC1b-DE.png)

Die Verbindung zu ferngesteuerten Geräten ist sicher verschlüsselt durch TLS-Technologie.  Außerdem sind Passwörter in Ihrem Cumulocity-Konto verschlüsselt, so dass Sie sie nicht an anderer Stelle verwalten müssen. 

### Nutzung von Cloud Remote Access 

Cloud Remote Access ist zugänglich über die Device-Management-Anwendung. 

**Voraussetzungen:**

- Ein Gateway, das mit Cloud Remote Access kompatibel ist, ist mit Ihrem Cumulocity-Konto verbunden.  
- Ein Gerät mit einem VNC-Server ist mit dem Gateway verbunden und kann vom Gateway erreicht werden. 
- Cloud Remote Access wurde von Ihnen abonniert. Wenn Sie den "Fernzugriff"-Tab nicht sehen können, wenden Sie sich an sales@cumulocity.com.

In Cumulocity können Sie die Gateways über “Alle Geräte” in der Device-Management-Anwendung finden. 

![Router](/guides/benutzerhandbuch/routerdevice-de.png)

Wählen Sie das Gateway aus der Liste aus. Unten sehen Sie den “Fernzugriff"-Tab. Wenn sie auf den Tab klicken, erscheint eine Liste mit Endpunkten dieses Geräts. Sie können ferngesteuerte Geräte konfigurieren, indem Sie auf “Endpunkt hinzufügen” klicken. 

![Endpunkte](/guides/benutzerhandbuch/endpoints-de.png)

Der Endpunkt ist die IP-Adresse und der Port des VNC-Servers, der auf dem Gerät läuft. Die IP-Adresse und der Port müssen vom Gateway erreichbar sein.

Um einen Endpunkt zu konfigurieren, benötigen Sie die folgenden Berechtigungen: Sowohl "Remote access" (Fernzugriff) als auch "Kommandos" müssen auf “Admin” gesetzt sein. Um Daten zu lesen, reicht eine "Lese"-Berechtigung. Für weitere Informationen über die Gewährung von Berechtigungen siehe [Berechtigungen verwalten](/guides/benutzerhandbuch/administration-deutsch/#permissions).

Ein Dialogfenster öffnet sich, in dem Sie den Endpunkt konfigurieren können. Geben Sie die IP-Adresse, den Port und das Passwort des VNC-Servers ein. Wenn der Endpunkt hinzugefügt ist, wird er in der Liste der Endpunkte angezeigt. 

<img src="/guides/benutzerhandbuch/remoteaccess-de.png" alt="Remote-Access-Endpunkt" style="max-width: 60%">

Um eine Verbindung zu konfigurierten Endpunkten zu schaffen, gehen Sie zum "Fernzugriff"-Tab und wählen Sie einen Endpunkt aus. Diese Endpunkte stellen die ferngesteuerten Geräte dar. Wenn Sie auf "Verbinden" klicken, startet die VNC-Verbindung. 

![Endpunkte verbinden](/guides/benutzerhandbuch/connectendp-de.png)

Ein neuer Browser-Tab öffnet sich, und innerhalb von wenigen Momenten sehen Sie den Bildschirm bzw. die Bedienkonsole des verbundenen Gerätes. Die obere Leiste des Bildschirms zeigt "Starting VNC handshake” an, wenn der Vorgang startet. 

Über das kleine Zahnrad am Ende der Reihe öffnet sich ein Dialog, mit dem Sie Endpunkte bearbeiten oder entfernen können.

![Endpunkte bearbeiten](/guides/benutzerhandbuch/editendpoint-de.png)

### Troubleshooting von Cloud Remote Access

Vergewissern Sie sich, dass Sie die nötigen Berechtigungen für das Hinzufügen von Endpunkten haben. Sie benötigen "Admin"-Rechte für den Fernzugriff ("Remote access") und die Kommandos. Ohne Admin-Rechte bei den Kommandos können Sie keine Geräte registrieren, und ohne Admin-Rechte beim Fernzugriff können Sie keine Endpunkte hinzufügen.
Um eine Verbindung zu einer ferngesteuerten Bedienkonsole zu erstellen, reichen "Lese"-Rechte beim "Remote access".

Die VNC-Verbindung zu einem VNC-Server über ein Gateway kann auch aufgrund von Netzwerkproblemen fehlschlagen. In diesem Fall wenden Sie sich an Ihren Netzwerkadministrator.

Getestet auf den folgenden VNC-Servern:
- Real VNC Connect 6.0.2	
- TightVNC 1.3.9
- TigerVNC 1.7.0
- EfonVNC 4.2
  