---
layout: redirect
title: Verwalten von Gerätedaten
weight: 60
---

### Übersicht

Die Device Management-Anwendung bietet verschiedene Funktionen, die Sie bei der effizienten Verwaltung Ihrer Geräte unterstützen:

| Funktion                                              | Beschreibung                                                                                                                                 |
|:-----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| [Verwalten von Geräte-Firmware](#firmware-repo)           | Wie Sie Firmware, Firmware-Versionen und -Patches im Firmware-Repository abrufen und verwalten und sie auf Geräten installieren und aktualisieren. |
| [Verwalten von Geräte-Software](#software-repo)           | Wie Sie Software, Software-Versionen und -Patches im Software-Repository abrufen und verwalten und sie auf Geräten installieren und aktualisieren.          |
| [Verwalten von Konfigurationen](#configuration-repository) | Wie Sie Konfigurationsdaten von einem Gerät abrufen und sie als Konfigurationssnapshot in einem Konfigurations-Repository speichern und verwalten.                         |
| [Verwalten von Gerätezugangsdaten](#credentials)          | Wie Sie die für Ihre verbundenen Geräte erstellten Zugangsdaten verwalten.                                                                         |
| [Verwalten von Geräteprofilen](#device-profiles)         | Wie Sie Geräteprofile - eine Zusammenstellung von Firmware, Software und Konfiguration - verwalten und sie auf Geräte anwenden.                                 |
| [Verwalten von vertrauenswürdigen Zertifikaten](#trusted-certificates)| Wie Sie vertrauenswürdige Zertifikate verwalten.                                                                                                         |

Sämtliche Funktionen können über das Menü **Verwaltung** im Navigator aufgerufen werden:

![Management menu](/images/benutzerhandbuch/DeviceManagement/devmgmt-management-menu.png)

<a name="firmware-repo"></a>
### Verwalten von Geräte-Firmware

Mit dem Firmware-Repository bietet {{< product-c8y-iot >}} die Möglichkeit, Referenz-Firmware für Geräte zu verwalten.

Pro Gerät kann nur eine Firmware-Paketversion angewendet werden.

#### Anzeigen von Firmware

Klicken Sie im Menü **Verwaltung** des Navigators auf **Firmware Repository**.

Die verfügbaren Firmware-Objekte werden in Form einer Liste angezeigt.

![Firmware list](/images/benutzerhandbuch/DeviceManagement/devmgmt-firmware-list.png)

Jeder Eintrag enthält den Namen der Firmware, den Gerätetypen, auf den sie anwendbar ist (falls angegeben) und eine Bezeichnung, die angibt, ob und wie viele Versionen für eine bestimmte Firmware verfügbar sind.
Links in der oberen Menüleiste können Sie die Repository-Einträge nach Name, Beschreibung und Gerätetyp filtern. Weitere Informationen zur Filterfunktionalität finden Sie unter [Erste Schritte > Eigenschaften und Funktionen der Benutzeroberfläche > Filtern](/benutzerhandbuch/getting-started-de/#filtering).

Wenn sie auf einen Eintrag klicken, werden die Details dieser Firmware sowie alle verfügbaren Versionen und Patches angezeigt.

![Firmware details](/images/benutzerhandbuch/DeviceManagement/devmgmt-firmware-details.png)

Am Anfang der Liste stehen der Name der Firmware, eine Beschreibung und ein oder mehrere Gerätetypfilter (optional). Wenn ein Filter gesetzt ist, wird die Firmware nur für die entsprechenden Geräte zur Installation angeboten. Ist kein Filter gesetzt, wird sie für alle Geräte angeboten.

Die Liste der Versionen und Patches enthält den Versionsnamen und den Namen der Firmware-Binärdatei. Darüber hinaus gibt sie an, ob für eine Firmware Patches bereitstehen. Durch Aufklappen des Versionseintrages können diese angezeigt werden. Die Versionen und Patches sind nach ihrem Erstellungszeitpunkt (absteigend) sortiert.

#### Hinzufügen von Firmware, Firmware-Versionen oder Firmware-Patches

##### So fügen Sie eine neue Firmware oder Firmware-Version hinzu

1. Klicken Sie auf der Seite **Firmware Repository** rechts in der oberen Menüleiste auf **Firmware hinzufügen**.
2. Im darauffolgenden Dialog können Sie
	* eine neue Firmware hinzufügen, indem Sie einen Namen für die Firmware eingeben (im darauffolgenden Fenster durch Klicken auf **Hinzufügen** bestätigen) und eine Beschreibung sowie die Version hinzufügen (alle Angaben erforderlich).
	* eine neue Version hinzufügen, indem Sie die Firmware, für die Sie die Version hinzufügen möchten, in der Auswahlliste im Feld **Firmware** auswählen und eine Version eingeben.
3. Optional können Sie den Gerätetypfilter definieren, wenn Sie eine neue Firmware hinzufügen.
3. Laden Sie entweder eine Binärdatei aus Ihrem Dateisystem hoch oder geben Sie eine URL an, unter der die Firmware heruntergeladen werden kann.
4. Klicken Sie auf **Speichern**.

![Add firmware](/images/benutzerhandbuch/DeviceManagement/devmgmt-firmware-add.png)

Das Firmware-Objekt wird der Firmware-Liste bzw. die Firmware-Version den Firmware-Details hinzugefügt und die Versionsbezeichnung wird entsprechend aktualisiert.

Wenn Sie in den Details einer bestimmten Firmware auf **Firmware hinzufügen** klicken, sieht der Dialog etwas anders aus, da die Firmware bereits ausgewählt ist. Geben Sie die neue Versionsnummer ein und laden Sie eine Binärdatei hoch oder geben Sie einen Dateipfad an.

##### So fügen Sie einen neuen Firmware-Patch hinzu

1. Klicken Sie auf der Seite **Firmware Repository** rechts in der oberen Menüleiste auf **Firmware-Patch hinzufügen**.
2. Wählen Sie im darauffolgenden Dialog im Feld **Firmware** der Auswahlliste die Firmware, für die Sie den Patch hinzufügen möchten.
3. Wählen Sie im Feld **Version** die Version, für die Sie einen Patch hinzufügen möchten.  
3. Geben Sie im Feld **Patch** einen Namen für den Patch ein.
3. Laden Sie entweder eine Binärdatei aus Ihrem Dateisystem hoch oder geben Sie eine URL an, unter der die Firmware heruntergeladen werden kann.
4. Klicken Sie auf **Speichern**.

Wie beim Hinzufügen von Versionen sieht der Dialog etwas anders aus, wenn Sie in den Details einer bestimmten Firmware auf **Firmware-Patch hinzufügen** klicken. Dies liegt daran, dass die Firmware bereits ausgewählt ist.

Der Firmware-Patch wird den Versionsdetails innerhalb der Firmware-Details hinzugefügt.

#### So bearbeiten Sie eine Firmware

1. Klicken Sie auf das Menüsymbol rechts neben einem bestimmten Firmware-Eintrag und anschließend im Kontextmenü auf **Bearbeiten**.
2. Bearbeiten Sie den Namen, die Beschreibung oder den Gerätetypfilter, indem Sie auf das daneben angezeigte Bleistiftsymbol klicken. Nehmen Sie die gewünschten Änderungen vor und klicken Sie auf **Speichern**.

Die Firmware wird entsprechend aktualisiert.

#### Löschen von Firmware, Firmware-Versionen oder Firmware-Patches

##### So löschen Sie eine Firmware

Klicken Sie auf das Menüsymbol rechts neben einem bestimmten Firmware-Eintrag und anschließend im Kontextmenü auf **Löschen**.

Das Objekt wird aus dem Firmware-Repository gelöscht.

##### So löschen sie eine Firmware-Version oder ein Firmware-Patch

Bewegen Sie den Mauszeiger in den Details einer bestimmten Firmware über den Eintrag der zu löschenden Version oder des zu löschenden Patches und klicken Sie auf das Löschen-Symbol. Die Firmware-Version oder der Firmware-Patch wird aus den Firmware-Details gelöscht.

<a name="managing-firmware"></a>
#### Verwalten von Firmware auf einem Gerät

Sie können die für ein Gerät installierte Firmware auf der Registerkarte **Firmware** dieses Geräts verwalten.

{{< c8y-admon-info >}}
Die Registerkarte **Firmware** wird für Geräte angezeigt, die Operationen vom Typ `c8y_Firmware` unterstützen.
{{< /c8y-admon-info >}}

Klicken Sie im Menü **Geräte** des Navigators auf **Alle Geräte**, wählen Sie das gewünschte Gerät aus der Geräteliste und öffnen Sie die dazugehörige Registerkarte **Firmware**.

Die Registerkarte **Firmware** zeigt die aktuell auf dem Gerät installierte Firmware.

![Firmware tab](/images/benutzerhandbuch/DeviceManagement/devmgmt-firmware-tab.png)

Darüber hinaus zeigt sie den Operationsstatus der letzten Operation an (ERFOLGREICH, AUSSTEHEND, WIRD AUSGEFÜHRT, oder FEHLGESCHLAGEN). Durch Klicken auf die Operation werden die Operationsdetails angezeigt.
##### So installieren/ersetzen Sie Firmware auf einem Gerät

1. Klicken Sie auf der Registerkarte **Firmware** auf **Firmware installieren** (oder **Firmware ersetzen** wenn bereits Firmware auf dem Gerät installiert ist).
2. Wählen Sie eine Firmware und die gewünschte Version aus der Liste. Diese enthält die gesamte Firmware, die für diesen Gerätetyp im Firmware-Repository bereitsteht.
3. Klicken Sie auf **Installieren**.

Die von dem Gerät auszuführende Installationsoperation wird erzeugt. Die Installation der Firmware ist abgeschlossen, sobald das Gerät die Operation ausgeführt hat.

Klicken Sie auf die Operation, um Details dazu anzuzeigen. Der Status der letzten Operation wird ebenfalls auf der Registerkarte **Firmware** angezeigt.


##### So installieren/aktualisieren Sie Firmware auf mehreren Geräten

{{< product-c8y-iot >}} bietet die Möglichkeit, Firmware-Updates für mehrere Geräte gleichzeitig durchzuführen.

1. Führen Sie die Firmware-Operation (installieren oder ersetzen) zunächst für ein Gerät aus, um zu testen, ob die neue Version funktioniert.
2. Navigieren Sie in der Registerkarte **Steuerung** zu der Operation und wählen Sie im Kontextmenü **Als Bulk-Operation planen**.
3. Geben Sie einen Zeitpunkt an, zu dem die Bulk-Operation ausgeführt werden soll, und klicken Sie auf **Erstellen**. Weitere Informationen zu Bulk-Operationen finden Sie unter [Überwachen und Steuern von Geräten](/benutzerhandbuch/device-management-de/#monitoring-and-controlling-devices).

Der Status der Bulk-Operation wird auf der Registerkarte **Bulk-Operationen** unter **Gerätesteuerung** angezeigt.

Außerdem werden die Operationsdetails auf der Registerkarte **Steuerung** der ausgewählten Geräte angezeigt.

<a name="software-repo"></a>
### Verwalten von Geräte-Software

Mit dem Software-Repository bietet {{< product-c8y-iot >}} die Möglichkeit, Referenz-Software für Geräte zu verwalten. Auf einem Gerät können mehrere Software-Pakete installiert werden.

#### Anzeigen von Software

Klicken Sie im Menü **Verwaltung** des Navigators auf **Software Repository**.

Die verfügbaren Software-Objekte werden in Form einer Liste angezeigt.

![Software list](/images/benutzerhandbuch/DeviceManagement/devmgmt-software-repository.png)

Jeder Eintrag enthält den Namen der Software, den Gerätetyp, auf den sie anwendbar ist (falls angegeben), den Software-Typ (falls angegeben) sowie einen Sticker, der angibt, ob und wie viele Versionen für eine bestimmte Software verfügbar sind.
Die Werte in jeder Spalte außer in der Spalte **Versionen** können durch Klicken auf das Filter- oder Sortiersymbol in der Spaltenüberschrift gefiltert bzw. sortiert werden.

Wenn sie auf einen Eintrag klicken, werden die Details dieser Software sowie alle verfügbaren Versionen angezeigt.

![Software details](/images/benutzerhandbuch/DeviceManagement/devmgmt-software-details.png)

Am Anfang der Liste stehen der Name der Software, eine Beschreibung, ein oder mehrere Gerätetypfilter (optional) und ein Software-Typ.
Wenn ein Gerätetypfilter gesetzt ist, wird die Software nur für die entsprechenden Geräte zur Installation angeboten.
Ist kein Filter gesetzt, wird sie für alle Geräte angeboten.
Der Software-Typ bewirkt, dass die Software nur auf Geräten installierbar ist, die den jeweiligen Software-Typ explizit unterstützen.

{{< c8y-admon-info >}}
Im Feld **Software-Typ** wird Ihnen eine Liste von Typen vorgeschlagen, die in Ihrem Software-Repository bereits verwendet werden. Bevor Sie das Definieren eines neuen Software-Typs in Betracht ziehen (das Feld akzeptiert neue Werte direkt), überprüfen Sie anhand der Vorschläge in der Auswahlliste, ob der gewünschte Typ bereits für eine andere Software definiert wurde. Auf diese Weise sorgen Sie für größere Konsistenz der Software-Typen innerhalb Ihres Unternehmens. Wenn Sie z. B. Container-Images verwenden, können Sie nach `container` oder `image` oder versuchsweise nach spezifischeren Typen wie `docker`, `lxc` usw. suchen. Dadurch können Sie verhindern, dass Ihre Software-Typen unübersichtlich werden und Sie verschiedene Namen für ein und denselben Software-Typ verwenden.
{{< /c8y-admon-info >}}

Die Liste der Versionen und Patches enthält den Versionsnamen und den Namen der Software-Binärdatei.
Die Versionen sind nach ihrem Erstellungszeitpunkt (absteigend) sortiert.

#### So fügen Sie eine neue Software oder Software-Version hinzu

1. Klicken Sie auf der Seite **Software Repository** rechts in der oberen Menüleiste auf **Software hinzufügen**.
2. Im darauffolgenden Dialog können Sie
	* eine neue Software hinzufügen, indem Sie einen Namen für die Software eingeben (im darauffolgenden Fenster durch Klicken auf **Hinzufügen** bestätigen) und eine Beschreibung sowie die Version hinzufügen (alle Angaben erforderlich).
	* eine neue Version hinzufügen, indem Sie die Software, für die Sie die Version hinzufügen möchten, in der Auswahlliste im Feld **Software** auswählen und eine Version eingeben.
3. Optional können Sie den Gerätetypfilter definieren, wenn Sie eine neue Software hinzufügen.
4. Definieren Sie den Software-Typ. Dies bewirkt, dass die Software nur auf Geräten installierbar ist, die den jeweiligen Software-Typ erklärtermaßen unterstützen.
5. Laden Sie entweder eine Binärdatei aus Ihrem Dateisystem hoch oder geben Sie eine URL an, unter der die Software heruntergeladen werden kann.
6. Klicken Sie auf **Software hinzufügen**.

![Add software](/images/benutzerhandbuch/DeviceManagement/devmgmt-software-add.png)

Das Software-Objekt wird der Software-Liste bzw. die Software-Version den Software-Details hinzugefügt und die Versionsnummer wird entsprechend aktualisiert.

Wenn Sie in den Details einer bestimmten Software auf **Software hinzufügen** klicken, sieht der Dialog etwas anders aus, da die Software bereits ausgewählt ist. Geben Sie die neue Versionsnummer ein und laden Sie eine Binärdatei hoch oder geben Sie einen Dateipfad an.

#### So bearbeiten Sie eine Software

1. Klicken Sie auf das Menüsymbol rechts neben einem bestimmten Software-Element und anschließend im Kontextmenü auf **Bearbeiten**.
2. Bearbeiten Sie den Namen, die Beschreibung, den Gerätetypfilter oder den Software-Typ, indem Sie auf das daneben angezeigte Bleistiftsymbol klicken. Nehmen Sie die gewünschten Änderungen vor und klicken Sie auf **Speichern**.

Die Software wird entsprechend aktualisiert.


#### Löschen von Software-Elementen oder Software-Versionen

##### So löschen Sie eine Software

Klicken Sie auf das Menüsymbol rechts neben einem bestimmten Software-Element und anschließend im Kontextmenü auf **Löschen**.

Die Software wird mit sämtlichen Versionen aus dem Software-Repository gelöscht.

##### So löschen Sie eine Software-Version

Bewegen Sie den Mauszeiger in den Details einer bestimmten Software über den Eintrag der zu löschenden Version und klicken Sie auf das Löschen-Symbol. Die Software-Version wird aus den Software-Details gelöscht.

<a name="managing-software"></a>
#### Verwalten von Software auf einem Gerät

Sie können die Software eines Geräts auf der Registerkarte **Software** dieses Geräts verwalten.

{{< c8y-admon-info >}}
Die Registerkarte **Software** wird für Gerate angezeigt, die eine der folgenden Operationen unterstützen: c8y&#95;SoftwareUpdate, c8y&#95;SoftwareList, c8y&#95;Software.
{{< /c8y-admon-info >}}

Klicken Sie im Menü **Geräte** des Navigators auf **Alle Geräte**, wählen Sie das gewünschte Gerät aus der Geräteliste und öffnen Sie die dazugehörige Registerkarte **Software**.

Die Registerkarte **Software** listet die gesamte auf dem Gerät installierte Software auf. Wenn eine bestimmte Software einen Typ hat, wird dieser neben ihrem Namen angezeigt. Sie können nach einer bestimmten Software anhand ihres Namens suchen oder die Liste anhand des Software-Typs filtern.

![Software tab](/images/benutzerhandbuch/DeviceManagement/devmgmt-software-tab.png)

Darüber hinaus zeigt sie den Operationsstatus der letzten Operation an (ERFOLGREICH, AUSSTEHEND, WIRD AUSGEFÜHRT, oder FEHLGESCHLAGEN). Durch Klicken auf die Operation werden die Operationsdetails angezeigt.

##### So installieren Sie Software auf einem Gerät

1. Klicken Sie auf der Registerkarte **Software** auf **Software installieren**.

    {{< c8y-admon-info >}}
Im Dialog **Software installieren** werden nur Software-Elemente angezeigt, die dem Gerätetyp entsprechen. Zudem gilt: Wenn für das Gerät `c8y_SupportedSoftwareTypes` deklariert wurden, werden in dem Dialog nur die Software-Elemente angezeigt, die den unterstützten Software-Typen entsprechen.
    {{< /c8y-admon-info >}}

2. Wählen Sie einen oder mehrere Software-Einträge, indem Sie die entsprechende Version in der Liste auswählen. Diese enthält alle Software-Elemente, die für diesen Gerätetyp im Software-Repository bereitstehen.  
Bei Geräten, die erweiterte Software-Management-Funktionen unterstützen, können bereits installierte Software-Elemente nicht in der Liste der verfügbaren Software-Elemente vorab gefiltert werden. Daher wird nach Auswahl der jeweiligen Software-Version überprüft, ob die ausgewählte Software bereits auf dem Gerät installiert ist. Ist dies der Fall, wird durch eine Warnung neben der ausgewählten Version darauf hingewiesen, dass die Software-Version bereits auf dem Gerät vorhanden ist.  
Sie können das bereits installierte Software-Element unter **Software-Änderungen** entfernen oder aber beibehalten und im Rahmen der Änderungen anwenden. Wie mit einer solchen Aktualisierung umgegangen werden soll, bleibt dem Geräte-Agenten überlassen.

3. Klicken Sie auf **Installieren**.

4. Überprüfen Sie Ihre geplanten Änderungen unter **Software-Änderungen** auf der rechten Seite und bestätigen Sie die Software-Update-Operation durch Klicken auf **Änderungen übernehmen**.

Die von dem Gerät auszuführende Installationsoperation wird erzeugt. Die Installation der Software ist abgeschlossen, sobald das Gerät die Operation ausgeführt hat.

Klicken Sie auf die Operation, um Details dazu anzuzeigen. Der Status der letzten Operation wird ebenfalls auf der Registerkarte **Software** angezeigt.


##### So aktualisieren Sie Software auf einem Gerät

Bewegen Sie den Mauszeiger über das Software-Element, das Sie aktualisieren möchten, und klicken Sie auf **Aktualisieren**.
Wählen Sie eine Version aus der Liste und klicken Sie erneut auf **Aktualisieren**.

Die Software wird mit der ausgewählten Version aktualisiert.

##### So löschen Sie Software von einem Gerät

Bewegen Sie den Mauszeiger über das Software-Element, das Sie löschen möchten, und klicken Sie auf das Löschen-Symbol.

##### So installieren Sie Software auf mehreren Geräten

{{< product-c8y-iot >}} bietet die Möglichkeit, Software-Updates für mehrere Geräte gleichzeitig durchzuführen.

1. Führen Sie die Software-Operation (installieren oder ersetzen) zunächst für ein Gerät aus, um zu testen, ob die neue Version funktioniert.
2. Navigieren Sie in der Registerkarte **Steuerung** zu der Operation und wählen Sie im Kontextmenü **Als Bulk-Operation planen**.
3. Geben Sie einen Zeitpunkt an, zu dem die Bulk-Operation ausgeführt werden soll, und klicken Sie auf **Erstellen**. Weitere Informationen zu Bulk-Operationen finden Sie unter [Überwachen und Steuern von Geräten](/benutzerhandbuch/device-management-de/#monitoring-and-controlling-devices).

Der Status und die Details der Bulk-Operation werden auf der Registerkarte **Bulk-Operationen** unter **Gerätesteuerung** angezeigt.

Außerdem werden die Operationsdetails auf der Registerkarte **Steuerung** der ausgewählten Geräte angezeigt.

<a name="configuration-repository"></a>
### Verwalten von Konfigurationen

In {{< product-c8y-iot >}} können Sie Konfigurationsdaten von einem Gerät abrufen oder aus einer Datei laden und diese in einem Konfigurations-Repository speichern und verwalten. Konfigurationsdaten enthalten die Grundeinstellungen und Parameter eines Geräts.

Solche Konfigurationssnapshots sind beispielsweise nützlich, um die gleiche Konfiguration auf mehrere Geräte anzuwenden, wie im Folgenden beschrieben.

Klicken Sie auf **Konfigurations-Repository** im Menü **Verwaltung** des Navigators. Auf der Seite **Konfigurations-Repository** werden alle verfügbaren Konfigurationssnapshots aufgelistet. Jeder Eintrag zeigt den Namen und die Beschreibung der Konfiguration sowie den Geräte- und Konfigurationstyp.

![Configuration Repository](/images/benutzerhandbuch/DeviceManagement/devmgmt-management-configrepo.png)

<a name="add-snapshot"></a>
#### So fügen Sie einen Konfigurationssnapshot hinzu

1. Klicken Sie auf **Konfigurationssnapshot hinzufügen** rechts in der oberen Menüleiste.
2. Geben Sie im darauffolgenden Dialog einen eindeutigen Namen ein.
3. Geben Sie im Feld **Gerätetyp** einen Gerätetypen ein. Den Gerätetypen finden Sie in der Registerkarte **Info** des Zielgeräts.
4. Sie können optional eine Beschreibung für die Konfiguration eingeben.
5. Geben Sie den Konfigurationstyp, zum Beispiel "ssh", ein.
6. Geben Sie die Datei mit dem Konfigurationssnapshot an, indem Sie sie aus dem Dateisystem hochladen, indem Sie eine URL angeben, über die der Konfigurationssnapshot abgerufen werden kann, oder indem Sie eine Datei auswählen.
7. Klicken Sie auf **Konfiguration hinzufügen**.

Der Konfigurationssnapshot wird dem Konfigurations-Repository hinzugefügt.

#### So bearbeiten Sie einen Konfigurationssnapshot

Zum Bearbeiten eines Konfigurationssnapshots klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Bearbeiten**.

Weitere Informationen zu den Feldern finden Sie unter [So fügen Sie einen Konfigurationssnapshot hinzu](/benutzerhandbuch/device-management-de#add-snapshot).

![Configuration Repository](/images/benutzerhandbuch/DeviceManagement/devmgmt-management-configrepoedit.png)

Klicken Sie auf **Konfiguration aktualisieren**, um Ihre Änderungen zu speichern.

#### So löschen Sie einen Konfigurationssnapshot

Zum Löschen eines Konfigurationssnapshots klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Löschen**.

Der Konfigurationssnapshot wird aus dem Konfigurationssnapshot-Repository gelöscht.

#### So laden und wenden Sie einen Konfigurationssnapshot an

Das Verwalten von Konfigurationen, also das Anfordern einer Konfiguration von einem Gerät und das Senden einer Konfiguration an ein Gerät, kann auf mehrere Arten erfolgen. Je nach Benutzerberechtigungen und Geräteeinstellungen können Sie mit textbasierter, typenbasierter oder dateibasierter Konfiguration arbeiten. Detailliertere und technische Informationen finden Sie unter [Device management library > Configuration](/reference/device-management-library/#configuration) im *Reference Guide*.

#### So laden Sie einen Konfigurationssnapshot und wenden ihn auf ein Gerät an, das die typenbasierte Konfiguration unterstützt

Wir empfehlen ihnen, die typenbasierte Konfiguration zu verwenden. Bei typenbasierter Konfiguration können Geräte mehrere Konfigurationen gleichzeitig verwalten. Sie können verschiedene Konfigurationen für verschiedene Typen hochladen oder abrufen. Dieser Ansatz ist flexibler, da die Konfigurationen nicht als Dateien, sondern als Ereignisse behandelt werden, was effizienter ist.

1. Navigieren Sie unter **Geräte** > **Alle Geräte** zu dem entsprechenden Gerät und wechseln Sie zur Registerkarte **Konfiguration**.
2. Wählen Sie den gewünschten Konfigurationstyp unter **Geräteunterstützte Konfigurationen** und klicken Sie auf
   **Snapshot vom Gerät abrufen** auf der rechten Seite.

Sobald Sie den Snapshot geladen haben, können Sie ihn im Abschnitt **Vorschau** speichern oder herunterladen. Der Snapshot wird zum **Konfigurations-Repository** hinzugefügt, auf das Sie über das Menü **Verwaltung** im Navigator zugreifen können.

![Retrieve Configuration Snapshot](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-config-getnewsnapshot.png)

{{< c8y-admon-info >}}
Wenn Sie auf **Snapshot vom Gerät abrufen** klicken, wird eine neue Operation erstellt. Wenn sich die Operation im Status AUSSTEHEND oder WIRD AUSGEFÜHRT befindet, ist es nicht möglich, eine weitere Konfigurationsanforderung für den Konfigurationstyp zu stellen. Navigieren Sie zur Registerkarte **Steuerung** eines Geräts, um die Operation abzubrechen oder die Änderungshistorie der Operation anzuzeigen.
{{< /c8y-admon-info >}}

So wenden Sie einen Konfigurationssnapshot auf ein Gerät an, das mehrere Konfigurationstypen unterstützt

1. Navigieren Sie zu dem entsprechenden Gerät und wechseln Sie zur Registerkarte **Konfiguration**.
2. Wählen Sie den gewünschten Konfigurationstyp unter **Geräteunterstützte Konfigurationen**.
3. Wählen Sie eine Konfigurationsdatei unter **Verfügbare unterstützte Konfigurationen**.
4. Klicken Sie auf der rechten Seite auf **Konfiguration an Gerät senden**, um den ausgewählten Snapshot an das Gerät zu senden.

![Apply new snapshot to a device](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-config-putsnapshot.png)

{{< c8y-admon-info >}}
Unter **Verfügbare unterstützte Konfigurationen** werden nur die Konfigurationsdateien angezeigt, die über ein passendes Konfigurationstyp-Attribut verfügen oder für die kein Konfigurationstyp definiert wurde. Zudem werden Konfigurationsdateien basierend auf dem Gerätetypen gefiltert.
{{< /c8y-admon-info >}}

#### So laden Sie einen Konfigurationssnapshot und wenden ihn auf ein Gerät an, das dateibasierte Konfiguration unterstützt

Geräte, die Konfigurationen als Dateien verwalten, können dies in grundlegender Form mithilfe einer dateibasierten Konfiguration tun. Bei dateibasierter Konfiguration kann pro Gerät nur eine einzige Konfiguration festgelegt werden.

![Retrieve Configuration Snapshot](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-config-old-getnewsnapshot.png)

#### So laden Sie einen Konfigurationssnapshot und wenden ihn auf ein Gerät an, das textbasierte Konfiguration unterstützt

Die grundlegendste Form der Konfiguration ist die textbasierte Konfiguration. Ein Textbefehl kann von einem Gerät gesendet oder empfangen werden. Wir empfehlen Ihnen, die textbasierte Konfiguration nur für kurze, menschenlesbare Konfigurationsdateien zu verwenden.

![Send Text Configuration](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-config-text-getnewsnapshot.png)

<a name="credentials"></a>
### Verwalten von Gerätezugangsdaten

Die Registerkarte **Gerätezugangsdaten** listet alle Zugangsdaten auf, die für Ihre verbundenen Geräte erstellt wurden. Jedes Gerät, das [registriert](#dev-registration) wurde, wird hier mit der Namenskonvention "device_&lt;id&gt;" angezeigt.

![Device credentials](/images/benutzerhandbuch/DeviceManagement/devmgmt-device-credentials.png)

#### So verwalten Sie Berechtigungen für ein Gerät

1. Klicken Sie auf den Pfeil in der Spalte **Globale Rollen**, um eine Liste mit globalen Rollen anzuzeigen.
2. Zum Zuweisen oder Entfernen von Berechtigungen für ein einzelnes Gerät aktivieren bzw. deaktivieren Sie die jeweiligen Rollen.
3. Klicken Sie auf **Anwenden**.

Die Rollen für die Geräte werden entsprechend aktualisiert.

#### So bearbeiten Sie Gerätezugangsdaten

1. Klicken Sie auf das Menüsymbol rechts neben einem Gerätezugangsdaten-Eintrag und anschließend auf **Bearbeiten**, um die Gerätedetails zu öffnen.

2. In der Detail-Seite können Sie ein Gerät deaktivieren/aktivieren, indem Sie auf den Umschalter **Aktiv** klicken, das Passwort für ein Gerät ändern oder in der Liste **Globale Rollen** Berechtigungen zuweisen oder entfernen.

	![Device credentials details](/images/benutzerhandbuch/DeviceManagement/devmgmt-device-credentials-details.png)

3. Klicken Sie auf **Speichern**.

Die Gerätezugangsdaten werden entsprechend aktualisiert.


#### So deaktivieren Sie Gerätezugangsdaten

Klicken Sie auf das Menüsymbol rechts neben dem Gerätezugangsdaten-Eintrag und anschließend auf **Abschalten**.

Die Gerätezugangsdaten werden vorübergehend deaktiviert.

#### So löschen Sie Gerätezugangsdaten

Klicken Sie auf das Menüsymbol rechts neben dem Gerätezugangsdaten-Eintrag und anschließend auf **Löschen**.

Die Gerätezugangsdaten werden dauerhaft gelöscht.

Das Löschen von Gerätezugangsdaten kann erforderlich sein, wenn Sie ein Gerät auf die Werkseinstellungen zurückgesetzt haben. In diesem Fall verliert das Gerät häufig seine zugewiesenen Zugangsdaten. Löschen Sie diese und fahren Sie mit dem normalen [Registrierungsprozess](#dev-registration) fort, um das Gerät erneut zu registrieren.

<a name="device-profiles"></a>
### Verwalten von Geräteprofilen

Geräteprofile stellen eine Kombination aus einer Firmware-Version, einem oder mehreren Software-Paketen und einer oder mehreren Konfigurationsdateien, die auf einem Gerät bereitgestellt werden können, dar. Basierend auf den Geräteprofilen können Benutzer mit Hilfe von Bulk-Operationen eine bestimmte Zielkonfiguration auf Geräten bereitstellen.

#### So zeigen Sie Geräteprofile an

Zum Anzeigen der Seite **Geräteprofile**, die sämtliche verfügbaren Geräteprofile auflistet, klicken Sie im Menü **Verwaltung** des Navigators auf **Geräteprofile**.

![Device profiles list](/images/benutzerhandbuch/DeviceManagement/devmgmt-device-profile-list.png)

Jeder Geräteprofil-Eintrag zeigt den Profilnamen und die gewählten Gerätetypen, falls vorhanden.

Klicken Sie auf einen Geräteprofilnamen, um die Details dieses Geräteprofils anzuzeigen.

Der Abschnitt **Name und Gerätetyp** zeigt den Namen des Profils und die optional gewählten Gerätetypen an.

Die darauffolgenden Abschnitte listen die Firmware-Version, die Software-Pakete und die Konfigurationsdateien für dieses bestimmte Geräteprofil auf.

![Device profile details](/images/benutzerhandbuch/DeviceManagement/devmgmt-device-profile-details.png)

#### So fügen Sie ein Geräteprofil hinzu

Um ein neues Geräteprofil hinzuzufügen, klicken Sie rechts in der oberen Menüleiste auf **Geräteprofil hinzufügen**.

Geben Sie im Fenster **Geräteprofil hinzufügen** einen Namen für das Profil an und tragen Sie optional einen oder mehrere Gerätetypen ein. Wenn ein Gerätetyp angegeben wird, kann das Geräteprofil nur Geräten dieses bestimmten Typs zugewiesen werden. Wird kein Gerätetyp angegeben, ist das Profil für alle Gerätetypen verfügbar.

<a name="to-add-items"></a>
#### So fügen Sie Elemente zu einem Geräteprofil hinzu

In den Details eines Geräteprofils können sie Firmware-Versionen, Software-Pakete und Konfigurationsdateien hinzufügen.

Klicken Sie auf **Firmware hinzufügen**, um dem Profil eine Firmware-Version hinzuzufügen. Wählen Sie eine Firmware und eine Version aus der Liste und klicken Sie auf **Speichern**, um die Auswahl zu dem Profil hinzuzufügen. Wenn ein Gerätetyp für das Profil definiert wurde, können nur Firmware-Versionen mit dem entsprechenden Gerätetyp gewählt werden. Sie können nur eine Firmware-Version zu einem Profil hinzufügen.

Nähere Informationen zu Firmware finden Sie unter [Verwalten von Geräte-Firmware](#firmware-repo).

Klicken Sie auf **Software hinzufügen**, um dem Profil eine Software hinzuzufügen. Wählen Sie eine Software und eine Software-Version aus der Liste und klicken Sie auf **Speichern**, um die Auswahl zu dem Profil hinzuzufügen. Wenn ein Gerätetyp für das Profil definiert wurde, können nur Software-Versionen mit dem entsprechenden Gerätetyp gewählt werden. Sie können mehrere Software-Pakete zu einem Profil hinzufügen.

Nähere Informationen zu Software finden Sie unter [Verwalten von Geräte-Software](#software-repo).

Klicken Sie auf **Konfiguration hinzufügen**, um dem Profil eine Software hinzuzufügen. Wählen Sie eine Konfigurationsdatei aus der Liste und klicken Sie auf **Speichern**, um die Auswahl zu dem Profil hinzuzufügen. Sie können mehrere Konfigurationsdateien zu einem Profil hinzufügen.

Nähere Informationen zu Konfigurationssnapshots finden Sie unter [Verwalten von Konfigurationen](#configuration-repository).

#### So aktualisieren Sie Geräteprofile

Zum Aktualisieren eines Geräteprofils klicken Sie auf das Menüsymbol rechts neben dem jeweiligen Eintrag und anschließend auf **Bearbeiten**.

Bearbeiten Sie den Namen und die Gerätetypen, indem Sie auf das Bleistiftsymbol neben den entsprechenden Feldern klicken. Nehmen Sie die gewünschten Änderungen vor und klicken Sie auf **Speichern** um Ihre Bearbeitungen zu speichern.

Sie können außerdem Firmware, Software oder Konfigurationselemente löschen oder neue hinzufügen.

Zum Löschen eines Elements bewegen Sie den Mauszeiger darüber und klicken Sie auf das Löschen-Symbol.

Nähere Informationen zum Hinzufügen von Firmware, Software oder Konfigurationselementen finden Sie unter [So fügen Sie Elemente zu einem Geräteprofil hinzu](#to-add-items).

Beachten Sie, dass bei Firmware immer nur ein Element im Profil erlaubt ist.


#### So duplizieren Sie Geräteprofile

Zum Duplizieren eines Geräteprofils klicken Sie auf das Menüsymbol rechts neben dem jeweiligen Eintrag und anschließend auf **Duplizieren**.

Wenn Sie ein Profil duplizieren, wird eine weitere Instanz des Profils mit demselben Inhalt angelegt. Standardmäßig erhält der Name des Originalprofils den Zusatz "Copy of". Sie können dem Profil einen anderen Namen geben, indem Sie auf das Bleistiftsymbol neben dem Namen klicken und den Namen bearbeiten.

#### So löschen Sie Geräteprofile

Zum Löschen eines Geräteprofils klicken Sie auf das Menüsymbol rechts neben dem jeweiligen Eintrag und anschließend auf **Löschen**.

{{< c8y-admon-info >}}
Wenn Sie ein Profil löschen, wird der Eintrag aus dem Geräteprofil-Repository gelöscht. Dies hat keine Auswirkungen auf die Geräte, die das Profil aktuell nutzen.
{{< /c8y-admon-info >}}

<a name="applying-device-profiles"></a>
### Geräteprofile auf Geräte anwenden

Geräteprofile können angewendet werden auf:

* [einzelne Geräte](#to-apply-profiles-to-single-devices)
* [mehrere Geräte mit Hilfe von Bulk-Operationen](#to-apply-profiles-to-multiple-devices)

Die Registerkarte **Geräteprofil** eines bestimmten Geräts zeigt die Details des aktuell auf dem Gerät installierten Profils.

![Currently installed profile](/images/benutzerhandbuch/DeviceManagement/devmgmt-device-profile-tab.png)

{{< c8y-admon-info >}}
Die Registerkarte **Geräteprofil** wird für Geräte angezeigt, die Operationen vom Typ `c8y_DeviceProfile` unterstützen.
{{< /c8y-admon-info >}}

<a name="to-apply-profiles-to-single-devices"></a>
#### So wenden Sie Geräteprofile auf ein einzelnes Gerät an

Auf der Registerkarte **Geräteprofil** eines Geräts können Sie Geräteprofile auf einzelne Geräte anwenden.

1. Wählen Sie auf der Registerkarte **Geräteprofil** ein Geräteprofil aus der Auswahlliste. Es werden nur die Profile angezeigt, die zu dem Gerätetypen passen (falls angegeben), oder für die kein Gerätetyp angegeben wurde.
2. Klicken Sie auf **Geräteprofil zuweisen**, um die Aktualisierungsoperation zu starten.

<a name="to-apply-profiles-to-multiple-devices"></a>
#### So wenden Sie Geräteprofile auf mehrere Geräte an

Geräteprofile können mittels Bulk-Operationen auf mehrere Geräte angewendet werden.

1. Klicken Sie im Menü **Übersicht** auf **Gerätesteuerung**, um zur Seite **Gerätesteuerung** zu gelangen. Auf der Seite **Gerätesteuerung** können Sie eine neue Bulk-Operation zum Anwenden eines Geräteprofils erstellen.
2. Klicken Sie auf der Registerkarte **Bulk-Operationen** rechts in der oberen Menüleiste auf **Neue Bulk-Operation** und wählen Sie im darauffolgenden Dialog **Geräteprofil anwenden**.
3. Um eine Bulk-Operation zum Anwenden eines Geräteprofils zu planen, befolgen Sie die Schritte unter [Überwachen und Steuern von Geräten > Verwenden von Operationen> So fügen Sie eine Bulk-Operation hinzu](/benutzerhandbuch/device-management-de/#bulk-operations).

Die Geräte installieren die Firmware, Software und Konfigurationselemente des Profils und senden einen Bericht über den Status der Operation. Nachdem das Profil angewendet wurde, werden die Geräteobjekte in der Plattform mit der neuen Profilinformation aktualisiert.

{{< c8y-admon-info >}}
Beim Anlegen von Bulk-Operationen können Filter verwendet werden, die es Ihnen ermöglichen, Bulk-Operationen nur für die Geräte anzulegen, auf die noch kein Profil angewendet wurde.
{{< /c8y-admon-info >}}

<a name="trusted-certificates"></a>
### Verwalten von vertrauenswürdigen Zertifikaten

In {{< product-c8y-iot >}} können sich Geräte via MQTT-Protokoll und unter Verwendung eines X.509-Zertifikats zur Authentifizierung miteinander verbinden. Das Zertifikat muss dazu von {{< product-c8y-iot >}} als vertrauenswürdig eingestuft werden. Ein Zertifikat ist vertrauenswürdig, wenn es zu den vertrauenswürdigen Zertifikaten hinzugefügt wurde und aktiviert ist.

{{< c8y-admon-info >}}
Dieser Abschnitt beschreibt, wie Sie vertrauenswürdige Zertifikate verwalten. Informationen zum Verbinden von Geräten mit Zertifikaten finden Sie unter [Geräteintegration mit MQTT > Gerätezertifikate](/device-integration/mqtt#device-certificates) in *Device Integration*.
{{< /c8y-admon-info >}}

Klicken Sie im Menü **Verwaltung** des Navigators auf **Vertrauenswürdige Zertifikate**.

Alle Zertifikate des Mandanten werden angezeigt.

![Trusted certificates List](/images/benutzerhandbuch/DeviceManagement/devmgmt-trusted-certificates-list.png)

Die Spalte **Status** zeigt an, ob das Zertifikat aktiviert oder deaktiviert ist. Ein Mandant kann jederzeit über eine beliebige Anzahl von aktivierten oder deaktivierten Zertifikaten verfügen.
Durch Klicken auf das Pfeilsymbol rechts neben einem Zertifikat können Sie weitere Details zu dem betreffenden Zertifikat aufklappen.

Die Information in der Tabelle rechts stammt von dem bereitgestellten Zertifikat. Der Inhalt ist schreibgeschützt und kann nicht geändert werden.

![Trusted certificate details](/images/benutzerhandbuch/DeviceManagement/devmgmt-trusted-certificates-details.png)


#### So fügen Sie ein Zertifikat hinzu

Bevor Sie ein neues vertrauenswürdiges Zertifikat hinzufügen, stellen Sie folgende Punkte sicher:

* Es handelt sich um ein X.509-Zertifikat im PEM-Format.
* Das Zertifikat liegt in Version 3 vor.
* Das Zertifikat enthält `BasicConstraints:[CA:true]`.
* Das Zertifikat wurde noch nicht in {{< product-c8y-iot >}} hochgeladen.
* Das Zertifikat ist noch gültig (nicht abgelaufen).

Um ein Zertifikat hinzuzufügen, gehen Sie folgendermaßen vor:

1. Klicken Sie auf **Vertrauenswürdiges Zertifikat hinzufügen** rechts in der oberen Menüleiste.
2. Geben Sie im nächsten Dialog die folgenden Informationen ein:

| Feld             | Beschreibung                                                                                                                                |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| Zertifikatsname  | Vom Benutzer angegebener Name für das Zertifikat. Dieser Name wird nicht von {{< product-c8y-iot >}} verwendet und kann als Beschreibung des Zertifikats dienen.         |
| Zertifikat       | Datei, die das Zertifikat im PEM-Format enthält. Fügen Sie die Datei durch Ablegen in dieses Feld oder Durchsuchen ihres Dateisystems hinzu.            |
| Auto-Registrierung | Bei Auswahl dieser Option werden neue Geräte, die ein Zertifikat nutzen, das durch die ausgebende Zertifizierungsstelle signiert ist, automatisch registriert. |
| Eingeschaltet/Ausgeschaltet | In ausgeschaltetem Zustand können sich Geräte, die ein Zertifikat nutzen, das durch die ausgebende Zertifizierungsstelle signiert ist, nicht verbinden.               |

3. Klicken Sie auf **Zertifikat hinzufügen**, um das Zertifikat zu validieren und zu speichern.

{{< c8y-admon-info >}}
Aus Leistungsgründen sollten Sie nicht die Zertifikate von jedem Gerät, das Sie verbinden möchten, hinzufügen, sondern nur das Stammzertifikat oder eines der Zwischenzertifikate aus der Kette, die zum Signieren der von Geräten verwendeten Zertifikate genutzt wurde.
{{< /c8y-admon-info >}}

#### So bearbeiten Sie ein vertrauenswürdiges Zertifikat

In der Detailansicht eines Zertifikats können Sie die Parameter auf der linken Seite, d. h. den Zertifikatsnamen und die Einstellungen für die Auto-Registrierung sowie die Eingeschaltet/Ausgeschaltet-Option ändern.

Weitere Informationen zu den Feldern finden Sie in der vorstehenden Beschreibung zum Hinzufügen von Zertifikaten.

#### So löschen Sie ein vertrauenswürdiges Zertifikat

Um ein Zertifikat dauerhaft aus der Liste der vertrauenswürdigen Zertifikate zu löschen, klicken Sie auf das Menüsymbol rechts neben dem betreffenden Eintrag und anschließend im Kontextmenu auf **Löschen**.
Das Zertifikat wird dauerhaft gelöscht.