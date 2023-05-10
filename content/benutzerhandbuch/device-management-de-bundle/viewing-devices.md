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
<td style="text-align:left">Der Alarmstatus des Geräts. Zeigt Anzahl und Typ der zur Zeit für dieses Gerät aktiven Alarme an. Enthält nur Alarme für das übergeordnete Gerät. Weitere Informationen zu Alarmen finden Sie unter <a href="#alarm-monitoring" class="no-ajaxy">Verwenden von Alarmen</a>.</td>
</tr>
</tbody>
</table>

Für Benutzer mit globalen Rollen werden die Elemente in der Geräteliste in Seiten unterteilt angezeigt. Sie können die Anzahl der Elemente pro Seite wählen und direkt zu einer beliebigen Seite springen. Benutzer mit Stammdatenrollen sehen anfangs bis zu 50 Elemente. Wenn mehr als 50 Geräte vorhanden sind, werden diese geladen, wenn Sie in der Liste nach unten scrollen.

<a name="configuring-columns"></a>

### Konfigurieren von Spalten

Die Spalten der Geräteliste können nach Bedarf angepasst werden.

#### So blenden Sie Spalten ein/aus

1. Klicken Sie in der Tabellenkopfzeile auf **Spalten konfigurieren**.
2. Aktivieren/deaktivieren Sie in der darauf folgenden Auswahlliste die Checkboxen für die gewünschten/unerwünschten Spalten.

Die Geräteliste wird entsprechend angepasst und zeigt nur die gewählten Spalten.

#### So fügen Sie benutzerdefinierte Spalten hinzu

Darüber hinaus können Sie benutzerdefinierte Spalten hinzufügen, in denen zusätzliche Geräteattribute angezeigt werden.

1. Klicken Sie in der Auswahlliste **Spalten konfigurieren** auf **Eigene Spalte hinzufügen**.<br>
   ![Configure columns](/images/benutzerhandbuch/DeviceManagement/devmgmt-device-list-custom-column.png)<br>
2. Geben Sie im Feld **Kopfzeile** eine Kopfzeile für die neue benutzerdefinierte Spalte ein.
3. Geben Sie im Feld **Fragmentpfad** das anzuzeigende Attribut des Geräts ein. Verschachtelte Attribute sind zulässig. Für verschachtelte Attribute können jedoch nur {{< product-c8y-iot >}}-Standardfragmente wie `c8y_Mobile.mcc` ausgewählt werden.
4. Stellen Sie den Umschalter **Diese Spalte speichern, um eine weitere hinzuzufügen** auf aktiv, um direkt nach dem Speichern der aktuellen benutzerdefinierten Spalte eine weitere zu erstellen, ohne den Dialog zu verlassen.
5. Klicken Sie auf **Speichern**.

Die neue Spalte wird hinzugefügt und in der Geräteliste angezeigt.

{{< c8y-admon-info >}}
Während Standardspalten lediglich nach Bedarf ein- oder ausgeblendet werden können, lassen sich benutzerdefinierte Spalten auch dauerhaft löschen.
{{< /c8y-admon-info >}}

#### So löschen Sie ein Gerät aus der Liste

1. Bewegen Sie den Mauszeiger über die Zeile des zu löschenden Geräts.
2. Klicken Sie auf das Löschen-Symbol rechts neben der Zeile.
3. Bestätigen Sie das Entfernen des Geräts. Wählen Sie optional, ob Kindgeräte des Geräts oder der zugehörige Gerätebesitzer gelöscht werden sollen. Beachten Sie, dass nicht beide Optionen gewählt werden können.

Das Objekt wird dauerhaft aus der Plattform gelöscht.

{{< c8y-admon-important title="Wichtig" >}}
Wenn Sie ein Gerät löschen, wird dieses aus der {{< product-c8y-iot >}}-Datenbank gelöscht, einschließlich aller erzeugter Daten. Alternativ können Sie alle nicht mehr benötigten Geräte in einer Gruppe zusammenfassen (siehe [Gruppieren von Geräten](#grouping-devices)). So stellen Sie sicher, dass alle Berichte korrekt erhalten bleiben. Damit für stillgelegten Geräte keine Alarme mehr ausgelöst werden, deaktivieren Sie die [Verbindungsüberwachung](#connection-monitoring) für das entsprechende Gerät. Löschen Sie ein Gerät, werden dadurch nicht die Daten der Kindgeräte gelöscht.
{{< /c8y-admon-important >}}

<a name="filtering-devices"></a>

### So filtern Sie Geräte

Die Geräteliste bietet eine Filterfunktion, um Geräte in der Liste nach bestimmten Kriterien zu Filtern.

Die Filterfunktion steht für jede Spalte zur Verfügung. Klicken Sie auf das Filtersymbol neben dem Namen der Spalte, nach der Sie filtern möchten.

Legen Sie in der Auswahlliste Ihre Filteroptionen fest.

Die meisten Spalten enthalten Text. Hier können Sie filtern, indem Sie wie im Suchfeld einen beliebigen Text in das Textfeld eingeben. Klicken Sie auf **+ Nächsten hinzufügen**, um ein weiteres Textfeld hinzuzufügen, falls Sie nach mehr als einem Begriff filtern möchten.

Abgesehen vom Filtern nach Text gibt es folgende weitere Optionen:

- Bei Datumsfeldern (z. B. **Registrierungsdatum**) geben Sie ein Zeitintervall als Filter ein.
- In der Spalte **Status** können Sie nach verschiedenen Kriterien filtern, die jeweils den Sende-, Push- oder Wartungsstatus des Geräts repräsentieren.
- In der Spalte **Alarm** entsprechen die Filterkriterien den Alarmtypen (kritisch, wichtig, weniger wichtig, Warnung, keine Alarme).
- Wählen Sie für benutzerdefinierte Spalten die Option **Nur Zeilen, in denen der Wert definiert ist**, um anhand dessen zu filtern, ob das Fragment existiert, oder legen Sie einen oder mehrere Filterbegriffe fest, denen der Eintrag entsprechen muss.

Klicken Sie auf **Anwenden**, um die Filterbedingungen anzuwenden.

Die Geräteliste zeigt nun nur noch die Geräte an, auf die die Filterbedingungen zutreffen.

Die Sortierfunktion steht bei jeder Spalte zur Verfügung. Klicken Sie auf das Sortieren-Symbol in der jeweiligen Spaltenüberschrift einmal, um die Einträge in aufsteigender Reihenfolge zu sortieren, oder zweimal, um sie in absteigender Reihenfolge zu sortieren. Klicken Sie erneut auf das Sortieren-Symbol, um die Sortierung bei dieser Spalte aufzuheben.

Klicken Sie auf **Filter zurücksetzen** in der Tabellenkopfzeile, wenn Sie alle Filter zurücksetzen und wieder alle Geräte anzeigen möchten.

{{< c8y-admon-info >}}
Wenn Sie die Liste anhand eines Textfelds, z. B. **Gerätename**, in aufsteigender oder absteigender Reihenfolge sortieren lassen, beachten Sie, dass die daraus resultierende alphabetische Sortierung auf ASCII/UTF basiert: A < B < ... < Z < ... < a < b ... < z. Namen, die mit Kleinbuchstaben beginnen, werden unter allen Namen mit Großbuchstaben aufgelistet bzw. umgekehrt.
{{< /c8y-admon-info >}}