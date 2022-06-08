---
layout: redirect
title: Verbinden von Geräten
weight: 11
---

<a name="dev-registration"></a>

### Geräteregistrierung

Auf der Seite **Geräteregistrierung** werden alle Geräte, die sich aktuell im Registrierungsprozess befinden, entweder als Liste oder als Raster angezeigt.

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-device-registration.png" alt="Device registration page">

Die folgenden Informationen werden für jedes Gerät angezeigt:

* Bei der Registrierung angegebener Gerätename
* Status des Geräts (siehe unten)
* Erstellungsdatum
* Mandant, von dem aus das Gerät registriert wurde

Die Geräte können einen der folgenden Status haben:

* **Wartet auf Verbindung** - Das Gerät wurde registriert, aber kein Gerät mit der angegebenen ID hat versucht, eine Verbindung herzustellen.
* **Bitte akzeptieren** - Es liegt eine Kommunikation von einem Gerät mit der angegebenen ID vor, doch der Benutzer, der die Registrierung vornimmt, muss noch explizit zustimmen, damit die Zugangsdaten an das Gerät gesendet werden.
* **Akzeptiert** - Der Benutzer hat erlaubt, dass die Zugangsdaten an das Gerät gesendet werden.

Geräte können auf verschiedene Weise mit Ihrem {{< product-c8y-iot >}}-Konto verbunden werden.

### So registrieren Sie Geräte

Um Geräte zu registrieren, können Sie eine der folgenden Optionen wählen:

* **[Manuelle Geräteregistrierung](#device-registration-manually)** - zum manuellen Herstellen einer Verbindung mit einem oder mehreren Geräten
* **[Bulk-Geräteregistrierungg](#creds-upload)** - zum Registrieren größerer Gerätemengen in einem Schritt

Sofern Sie die erforderlichen Anwendungen abonniert haben, wird Ihnen eine dritte Option angezeigt:
**Benutzerdefinierte Geräteregistrierung** - zum Registrieren von Geräten spezifischer Typen, z. B. Actility LoRa oder Sigfox, siehe die Dokumentation zu diesen Services im [Protocol Integration Guide](/protocol-integration/overview).

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-register-devices-custom.png" alt="Register devices">

<a name="device-registration-manually"></a>
#### So verbinden Sie ein Gerät manuell

>**Info:** Je nach Gerätetyp sind möglicherweise nicht alle beschriebenen Schritte relevant.

1. Klicken Sie auf **Geräteregistrierung** im Menü **Geräte** des Navigators und klicken Sie dann auf **Gerät registrieren**.
2. Wählen Sie im darauf folgenden Dialog **Geräte registrieren** die Option **Manuelle Geräteregistrierung**.

  <img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-registration-general.png" alt="General device registration" style="max-width: 100%">

3. Geben Sie im Feld **Geräte-ID** die eindeutige ID des Geräts ein. Diese finden Sie in der Gerätedokumentation. Bei mobilen Geräten handelt es sich dabei meistens um die IMEI (International Mobile Equipment Identity), die häufig auf der Rückseite des Geräts zu finden ist.
4. Wählen Sie optional eine Gruppe aus, der Sie das Gerät nach der Registrierung zuweisen möchten, siehe auch [Gruppieren von Geräten](#grouping-devices).
5. Klicken Sie auf **Weiteres Gerät hinzufügen**, um ein weiteres Gerät zu registrieren. Geben Sie auch hier die Geräte-ID ein und weisen Sie optional das Gerät einer Gruppe zu. Auf diese Weise können Sie mehrere Geräte in einem Schritt registrieren.
6. Klicken Sie auf **Weiter**, um Ihr(e) Gerät(e) zu registrieren.

> **Info:** In einem {{< enterprise-tenant-de >}} kann der {{< management-tenant-de >}} auch direkt einen Mandanten auswählen, dem das Gerät von hier aus hinzugefügt werden soll. Bitte beachten Sie: Da der {{< management-tenant-de >}} keinen Zugriff auf die Stammdaten des Untermandanten hat, können Sie Geräte entweder für einen Mandanten ODER für eine Gruppe registrieren, nicht jedoch für beides.

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-device-registration-tenant.png" alt="General device registration">

Nach erfolgreicher Registrierung werden die Geräte auf der Seite [Geräteregistrierung](#dev-registration) mit dem Status "Wartet auf Verbindung" angezeigt.

Schalten Sie das Gerät bzw. die Geräte ein und warten Sie, bis die Verbindung hergestellt wird.
Wenn ein Gerät verbunden ist, wechselt der Status auf "Bitte akzeptieren".
Klicken Sie auf **Akzeptieren**, um die Verbindung zu bestätigen. Der Status des Geräts wechselt auf "Akzeptiert".

> **Info:** Im Falle von Problemen lesen Sie die Dokumentation zu Ihrem Gerätetyp im [{{< product-c8y-iot >}} {{< device-portal >}}]({{< link-device-portal >}}) oder schlagen Sie im Handbuch zu Ihrem Gerät nach.

<a name="creds-upload"></a>
#### So führen Sie eine Bulk-Registrierung von Geräten durch

Um eine größere Anzahl von Geräten zu registrieren, bietet {{< product-c8y-iot >}} die Möglichkeit der Bulk-Registrierung, d. h. einer Registrierung mehrerer Geräte durch Hochladen einer CSV-Datei.

> **Info:** Es gibt keine Einschränkung hinsichtlich der Anzahl der Geräte, die durch eine Bulk-Registrierung registriert werden können. Je mehr Geräte Sie jedoch hinzufügen, desto langsamer erfolgen die Erstellung und die Operation.

1. Klicken Sie auf **Geräteregistrierung** im Menü **Geräte** des Navigators und klicken Sie dann auf **Gerät registrieren**.
2. Wählen Sie im darauf folgenden Dialog **Geräte registrieren** die Option **Bulk-Geräteregistrierung**.

  <img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-bulk-registration.png" alt="Bulk registration" style="max-width: 100%">

3. Klicken Sie auf **Datei zum Hochladen auswählen** und wählen Sie die hochzuladende CSV-Datei aus, indem Sie auf Ihrem Computer zu der Datei navigieren.

<br>
Je nach Format der hochgeladenen CSV-Datei wird einer der folgenden Registrierungstypen verarbeitet:

* Einfache Registrierung
* Vollständige Registrierung

> **Info:** Durch Mehrfachregistrierung wird eine elementare Darstellung des Geräts erstellt. Danach muss das Gerät sie auf eine volle Darstellung mit eigenem Status aktualisieren.

**Einfache Registrierung**

Die CSV-Datei enthält zwei Spalten: ID;PATH, wobei ID die Gerätebezeichnung, z. B. die Seriennummer, und PATH eine durch Schrägstriche getrennte Liste von Gruppennamen (Pfad zu der Gruppe, der das Gerät nach der Registrierung zugewiesen werden soll) ist.

```asciidoc
    ID;PATH
    Device1;Group A
    Device2;Group A/Group B			
```


Nachdem die Datei hochgeladen wurde, werden alle erforderlichen neuen Gruppen erstellt und neue Registrierungen mit dem Status "Wartet auf Verbindung" angelegt und der normale Registrierungsprozess muss fortgesetzt werden (siehe oben).

**Vollständige Registrierung**

Die CSV-Dateien müssen mindestens die IDs als Gerätebezeichnung und die Zugangsdaten der Geräte enthalten.

Neben diesen Spalten kann die Datei auch andere Spalten wie ICCID, NAME oder TYPE enthalten, wie in diesem Beispiel gezeigt.

```asciidoc
    ID;Credentials;PATH;ICCID;NAME;TYPE
    006064ce800a;LF2PWJoLG1Fz;Sample_Düsseldorf;+491555555;Sample_Device1;c8y_Device
    006064ce8077;OowoGKAbiNJs;Sample_Düsseldorf;+491555555;Sample_Device2;c8y_Device		
```

Um die Geräte zu verbinden, werden diese mit den relevanten Informationen vorregistriert. Genauer gesagt wird jedes Gerät folgendermaßen konfiguriert:

* Benutzername - der Benutzername für das {{< product-c8y-iot >}}-Konto im Format &lt;tenant&gt;/device_&lt;id&gt;, wobei sich &lt;tenant&gt; auf den Mandanten bezieht, von welchem die CSV-Datei importiert wird, und &lt;id&gt; auf den entsprechenden Wert in der CSV-Datei.
* Passwort - das Passwort für den Zugang zu {{< product-c8y-iot >}}, entspricht dem Wert "Credentials" in der CSV-Datei.
* Gerätedaten - Felder TYPE, NAME, ICCID, IDTYPE, PATH, SHELL in der CSV-Datei.

Nachdem die Daten importiert wurden, erhalten Sie eine Rückmeldung zur Anzahl der Geräte, die vorregistriert wurden, sowie zu gegebenenfalls aufgetretenen Fehlern.

Für beide Bulk-Registrierungstypen (einfach/vollständig) stellen wir praktische CSV-Vorlagendateien bereit, die Sie aus dem Registrierungsassistenten herunterladen können, um die Struktur anzuzeigen oder zu kopieren.

>**Info:** Wenn das Gerät mit der jeweiligen Bezeichnung bereits existiert, wird es mit den Daten aus der CSV-Datei aktualisiert.

##### So importieren Sie CSV-Daten in Microsoft Excel

1. Wechseln Sie in Microsoft Excel zur Registerkarte **Daten**.
2. Wählen Sie in der Registerkarte **Daten** in der oberen Menüleiste die Option **Aus Text**.
3. Wählen Sie die zu importierende CSV-Datei aus, indem Sie zu ihr navigieren (in diesem Fall zu der Vorlagendatei, die Sie von der {{< product-c8y-iot >}}-Plattform heruntergeladen haben).
4. Behalten Sie in Schritt 1 des **Textimport-Assistenten** die Standardeinstellungen bei und klicken Sie auf **Weiter**.
5. Wählen Sie in Schritt 2 des **Textimport-Assistenten** die Option **Semikolon** und klicken Sie auf **Fertig stellen**.

Weitere Informationen zum Dateiformat und akzeptierten CSV-Varianten finden Sie auch unter
[Create a bulk device credentials request](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#operation/postBulkNewDeviceRequestCollectionResource) in der {{< openapi >}}.

>**Info:** Wenn Sie mit dem {{< enterprise-tenant-de >}} arbeiten, können Sie auch Geräte über mehrere Mandanten registrieren, indem Sie eine Spalte **Mandant** hinzufügen und die CSV-Datei vom {{< management-tenant-de >}} aus importieren.