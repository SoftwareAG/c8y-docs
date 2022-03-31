---
layout: redirect
title: Anzeigen von Geräten
weight: 20
---

Klicken Sie auf **Alle Geräte** im Menü **Geräte** des Navigators, um alle mit Ihrem Konto verbundenen Geräte anzuzeigen.

Eine detaillierte Geräteliste wird angezeigt.

![Device list](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-alldevices.png)

<a name="device-list"></a>
### Geräteinformationen

Die Liste enthält eine Zeile für jedes Gerät mit den folgenden Informationen, dargestellt in Spalten:

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
   </colgroup><thead>
<tr>
<th style="text-align:left">Spalte</th>
<th style="text-align:left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Status</td>
<td style="text-align:left">Symbol für den Verbindungsstatus. Weitere Informationen finden Sie unter <a href="#connection-monitoring" class="no-ajaxy">Verbindungsüberwachung</a> in "Überwachen und Steuern von Geräten".</td>
</tr>
<tr>
<td style="text-align:left">Name</td>
<td style="text-align:left">Eindeutiger Name für das Gerät.</td>
</tr>
<tr>
<td style="text-align:left">Modell</td>
<td style="text-align:left">Modelltyp des Geräts. Wird nicht immer angezeigt; abhängig von der Browser-Breite.</td>
</tr>
<tr>
<td style="text-align:left">Seriennummer</td>
<td style="text-align:left">Seriennummer des Geräts. Wird nicht immer angezeigt; abhängig von der Browser-Breite.</td>
</tr>
<tr>
<td style="text-align:left">Gruppe</td>
<td style="text-align:left">Gruppe, der das Gerät gegebenenfalls zugeordnet ist.</td>
</tr>
<tr>
<td style="text-align:left">Registrierungsdatum</td>
<td style="text-align:left">Datum, an dem das Gerät in Ihrem Konto registriert wurde.</td>
</tr>
<tr>
<td style="text-align:left">System ID</td>
<td style="text-align:left">System-ID des Geräts.</td>
</tr>
<tr>
<td style="text-align:left">IMEI</td>
<td style="text-align:left">IMEI des Geräts.</td>
</tr>
<tr>
<td style="text-align:left">Alarme</td>
<td style="text-align:left">Der Alarmstatus des Geräts. Zeigt Anzahl und Typ der zur Zeit für dieses Gerät aktiven Alarme an. Weitere Informationen zu Alarmen finden Sie unter <a href="#alarm-monitoring" class="no-ajaxy">Verwenden von Alarmen</a>.</td>
</tr>
</tbody>
</table>

Die Geräteliste zeigt bis zu 100 Einträge an. Wenn die Geräteliste mehr als 100 Geräte enthält, klicken Sie auf **Mehr laden** am Ende der Liste, um weitere Einträge anzuzeigen.

<a name="configuring-columns"></a>
### Konfigurieren von Spalten

Die Spalten der Geräteliste können nach Bedarf angepasst werden.

#### So blenden Sie Spalten ein/aus

1. Klicken Sie auf **Spalten konfigurieren** in der oberen Menüleiste.
2. Aktivieren/deaktivieren Sie im darauf folgenden Dialog die Checkboxen für die gewünschten/unerwünschten Spalten. <br>![Configure columns](/images/benutzerhandbuch/DeviceManagement/devmgmt-device-list-configure-columns.png)
<br>
3. Klicken Sie auf **Speichern**.

Die Geräteliste wird entsprechend angepasst und zeigt nur die gewählten Spalten.

#### So fügen Sie benutzerdefinierte Spalten hinzu

Darüber hinaus können Sie benutzerdefinierte Spalten hinzufügen, in denen zusätzliche Geräteattribute angezeigt werden.

1. Klicken Sie im Dialog **Spalten konfigurieren** auf **Eigene Spalte hinzufügen**.<br>
![Configure columns](/images/benutzerhandbuch/DeviceManagement/devmgmt-device-list-custom-column.png)<br>
2. Geben Sie im Feld **Kopfzeile** eine Kopfzeile für die neue benutzerdefinierte Spalte ein.  
3. Geben Sie im Feld **Fragmentpfad** das anzuzeigende Attribut des Geräts ein. Verschachtelte Attribute sind zulässig. Für verschachtelte Attribute können jedoch nur {{< product-c8y-iot >}}-Standardfragmente wie `c8y_Mobile.mcc` ausgewählt werden.
4. Wählen Sie einen **Filtermodus** für die neue Spalte aus. <br>
Wenn Sie **Fragment entspricht Wert** wählen, erfolgt die Filterung durch Anwenden der Kriterien, die ein Benutzer in dem Dialogfeld festlegen kann, das beim Klicken auf das Spaltenfilter-Symbol angezeigt wird.<br>
![Specify values](/images/benutzerhandbuch/DeviceManagement/devmgmt-device-list-custom-column.png)
<br>Im Fall von **Fragment existiert** wird nach vorhandenen Fragmenten gefiltert, d. h. danach, ob das Attribut vorhanden ist oder nicht.    
5. Klicken Sie auf **Hinzufügen**.

Die neue Spalte wird hinzugefügt und in der Geräteliste angezeigt.

> **Info:** Während Standardspalten lediglich nach Bedarf ein- oder ausgeblendet werden können, lassen sich benutzerdefinierte Spalten auch dauerhaft löschen.

#### So löschen Sie ein Gerät aus der Liste

1. Bewegen Sie den Mauszeiger über die Zeile des zu löschenden Geräts.
2. Klicken Sie auf das Löschen-Symbol rechts neben der Zeile.

Das Objekt wird dauerhaft aus der Plattform gelöscht.

> **Wichtig:** Wenn Sie ein Gerät löschen, wird dieses aus der {{< product-c8y-iot >}}-Datenbank gelöscht, einschließlich aller erzeugter Daten. Alternativ können Sie alle nicht mehr benötigten Geräte in einer Gruppe zusammenfassen (siehe [Gruppieren von Geräten](#grouping-devices)). So stellen Sie sicher, dass alle Berichte korrekt erhalten bleiben. Damit für stillgelegten Geräte keine Alarme mehr ausgelöst werden, deaktivieren Sie die [Verbindungsüberwachung](#connection-monitoring) für das entsprechende Gerät. Löschen Sie ein Gerät, werden dadurch nicht die Daten der Kindgeräte gelöscht.

<a name="searching-devices"></a>
### So suchen Sie nach Geräten

{{< product-c8y-iot >}} umfasst eine Volltextsuche nach Geräten.

Klicken Sie auf das Lupensymbol rechts oben und geben Sie einen Suchbegriff in das Textfeld ein.

Weitere Informationen zur Suchfunktionalität finden Sie unter [Erste Schritte > Eigenschaften und Funktionen der Benutzeroberfläche](/benutzerhandbuch/getting-started-de#gui-features).

Unser Beispiel zeigt eine Suche nach "NTC".

![Search for devices](/images/benutzerhandbuch/DeviceManagement/devmgmt-search.png)

<a name="filtering-devices"></a>
### So filtern Sie Geräte

Die Geräteliste bietet eine Filterfunktion, um Geräte in der Liste nach bestimmten Kriterien zu Filtern.

Die Filterfunktion steht für jede Spalte zur Verfügung. Klicken Sie auf das Filtersymbol neben dem Namen der Spalte, nach der Sie filtern möchten.

![Device filtering](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-filter.png)

Legen Sie im Dialog **Filteroptionen** Ihre Filteroptionen fest.

Die meisten Spalten enthalten Text. Hier können Sie filtern, indem Sie wie im Suchfeld einen beliebigen Text in das Textfeld eingeben. Klicken Sie auf **+ Oder**, um ein weiteres Textfeld hinzuzufügen, falls Sie nach mehr als einem Begriff filtern möchten.

Abgesehen vom Filtern nach Text gibt es folgende weitere Optionen:

* Bei Datumsfeldern (z. B. **Registrierungsdatum**) geben Sie ein Zeitintervall als Filter ein.
* In der Spalte **Status** können Sie nach verschiedenen Kriterien filtern, die jeweils den Sende-, Push- oder Wartungsstatus des Geräts repräsentieren.
* In der Spalte **Alarm** entsprechen die Filterkriterien den Alarmtypen (kritisch, wichtig, weniger wichtig, Warnung, keine Alarme).
* Wenn für benutzerdefinierte Spalten bei der Konfiguration das Kriterium **Fragment entspricht Wert** festgelegt wurde, muss ein Wert bereitgestellt werden.
* Wenn bei der Konfiguration das Kriterium **Fragment existiert** festgelegt wurde, hängt die Filterung davon ab, ob das Fragment existiert oder nicht.

Klicken Sie im Dialog **Filteroptionen** auf die Option **Aufsteigend** oder **Absteigend**, wenn Sie die Geräte in einer bestimmten Reihenfolge sortieren möchten. Klicken Sie auf **Anwenden**, um die Filterbedingungen anzuwenden.

Die Geräteliste zeigt nun nur noch die Geräte an, auf die die Filterbedingungen zutreffen.

Klicken Sie **Filter zurücksetzen** links in der oberen Menüleiste, wenn Sie alle Filter zurücksetzen und wieder alle Geräte anzeigen möchten.

>**Info:** Wenn Sie die Liste anhand eines Textfelds, z. B. **Gerätename**, in aufsteigender oder absteigender Reihenfolge sortieren lassen, beachten Sie, dass die daraus resultierende alphabetische Sortierung auf ASCII/UTF basiert: A < B < ... < Z < ... < a < b ... < z. Namen, die mit Kleinbuchstaben beginnen, werden unter allen Namen mit Großbuchstaben aufgelistet bzw. umgekehrt.