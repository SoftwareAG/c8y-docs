---
order: 20
title: Anzeigen von Geräten
layout: redirect
---

Klicken Sie **Alle Geräte** im Menü **Geräte** im Navigator, um alle mit Ihrem Konto verbundenen Geräte anzuzeigen.

Eine detaillierte Geräteliste wird angezeigt.

<img src="/guides/images/benutzerhandbuch/devmgmt-devices-list.png" alt="Geräteliste" style="max-width: 100%">


### <a name="device-list"></a>Geräteliste

Die Liste enthält eine Zeile für jedes Gerät mit den folgenden Informationen, dargestellt in Spalten:

|Spalte|Beschreibung|
|:---|:---|
|Status|Symbol für den Verbindungsstatus. Weitere Informationen finden Sie unter [Überwachen von Verbindungen](#connection-monitoring) in "Überwachen und Steuern von Geräten".
|Name|Eindeutiger Name für das Gerät.
|Modell|Modelltyp des Geräts. Wird nicht immer angezeigt; abhängig von der Browser-Breite.
|Seriennummer|Seriennummer des Geräts. Wird nicht immer angezeigt; abhängig von der Browser-Breite.
|Gruppe|Gruppe, der das Gerät gegebenenfalls zugeordnet ist.
|Registrierungsdatum|Datum, an dem das Gerät in Ihrem Konto registriert wurde. 
|System ID|System-ID des Geräts.
|IMEI|IMEI des Geräts.
|Alarme|Der Alarmstatus des Geräts. Zeigt Anzahl und Typ der zur Zeit für dieses Gerät aktiven Alarme an. Weitere Informationen zu Alarmen finden Sie unter [Arbeiten mit Alarmen](#alarm-monitoring).

Die Geräteliste zeigt bis zu 100 Einträge an. Wenn die Geräteliste mehr als 100 Geräte enthält, klicken Sie **Mehr laden** am Ende der Liste, um weitere Einträge anzuzeigen.

Wenn Sie den Mauszeiger über einen Eintrag in der Liste bewegen, erscheint auf der rechten Seite der Zeile die Schaltfläche **Löschen**. Klicken Sie diese, um ein Gerät endgültig zu löschen.

**Wichtig:** Wenn Sie ein Gerät löschen, wird dieses aus der Cumulocity-Datenbank gelöscht, einschließlich aller erzeugter Daten. Alternativ können Sie alle nicht mehr benötigten Geräte in einer Gruppe zusammenfassen (siehe [Gruppieren von Geräten](#grouping-devices)). So stellen Sie sicher, dass alle Berichte korrekt erhalten bleiben. Damit für stillgelegten Geräte keine Alarme mehr ausgelöst werden, deaktivieren Sie die [Verbindungsüberwachung](#connection-monitoring) für das entsprechende Gerät. Löschen Sie ein Gerät, werden dadurch nicht die Daten der Kindgeräte gelöscht.

### <a name="searching-devices"></a>Suchen nach Geräten

Cumulocity umfasst eine Volltextsuche nach Geräten. 

Klicken Sie auf das Lupensymbol rechts oben und geben Sie einen Suchbegriff in das Textfeld ein. Cumulocity gibt alle Geräte zurück, die diesen Begriff in einem Attribut enthalten (Name, Modell, Fragmente ...).

Unser Beispiel zeigt eine Suche nach "Ublox C027". 

<img src="/guides/images/benutzerhandbuch/devmgmt-devices-search.png" alt="Gerätesuche" style="max-width: 100%">

**Info**: Im Gegensatz zur Filterfunktion, ist die Verwendung von Platzhaltern in einer Suche nicht möglich. 

Weitere Informationen zur Suchfunktionalität finden Sie unter [Erste Schritte > Eigenschaften und Funktionen der Benutzeroberfläche](/guides/users-guide/overview#gui-features). 

### <a name="filtering-devices"></a>Filtern von Geräten

Die Geräteliste bietet eine Filterfunktion, um Geräte in der Liste nach bestimmten Kriterien zu Filtern.

Die Filterfunktion steht für jede Spalte zur Verfügung. Klicken Sie auf das Filtersymbol neben dem Namen der Spalte, nach der Sie filtern möchten. 
 
<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_Filtering.png" alt="Filtering" style="max-width: 100%">

Im folgenden Fenster können Sie entsprechende Filterkriterien setzen.

<img src="/guides/images/benutzerhandbuch/devmgmt-device-filter-options.png" alt="Filteroptionen" style="max-width: 50%">

Die meisten Spalten enthalten Text. Hier können Sie filtern, indem Sie einen beliebigen Text in das Textfeld eingeben wie im Suchfeld. Klicken Sie **+ Oder** ,um ein weiteres Textfeld hinzuzufügen, falls Sie nach mehr als einem Begriff filtern möchten. 

Weitere Informationen finden Sie auch unter [Erste Schritte > Eigenschaften und Funktionen der Benutzeroberfläche](/guides/users-guide/overview#gui-features). 

Abgesehen vom Filtern nach Text gibt es folgende weitere Optionen:

* Bei Datumsfeldern (z. B. **Registrierungsdatum**) geben Sie ein Zeitintervall als Filter ein.  
* In der Spalte **Status** können Sie nach verschiedenen Kriterien filtern, die jeweils den Sende-, Push- oder Wartungsstatus des Geräts repräsentieren. 
* In der Spalte **Alarm** entsprechen die Filterkriterien den Alarmtypen  (kritisch, wichtig, weniger wichtig, Warnung, keine Alarme).

Klicken Sie **Aufsteigend** oder **Absteigend** unten im Fenster **Filteroptionen**, wenn Sie die Geräte in einer bestimmten Reihenfolge sortieren möchten. Klicken Sie **Anwenden**, um die Filterbedingungen anzuwenden.

Die Geräteliste zeigt nun nur noch die Geräte an, auf die die Filterbedingungen zutreffen.

Klicken Sie **Filter zurücksetzen** in der oberen Menüleiste, wenn Sie alle Filter zurücksetzen und wieder alle Geräte anzeigen möchten.

>**Info**: Wenn Sie die Liste anhand eines Textfelds, z.B. **Gerätename**, in aufsteigender oder absteigender Reihenfolge sortieren lassen, beachten Sie, dass die daraus resultierende alphabetische Sortierung auf ASCII/UTF basiert: A < B < ... < Z < ... < a < b ... < z. Namen, die mit Kleinbuchstaben beginnen, werden unter allen Namen mit Großbuchstaben aufgelistet bzw. umgekehrt.
