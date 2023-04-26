---
layout: redirect
title: Verbinden von Geräten
weight: 11
---

<a name="dev-registration"></a>

### Geräteregistrierung

Auf der Seite **Geräteregistrierung** werden alle Geräte angezeigt, die sich aktuell im Registrierungsprozess befinden.

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
* **Blockiert** - Die Geräteregistrierung wurde blockiert, weil die Höchstzahl an fehlgeschlagenen Versuchen überschritten wurde.

{{< c8y-admon-info >}}
Wenn eine Geräteregistrierung **blockiert** ist, müssen Sie sie zuerst löschen und dann neu erstellen.
{{< /c8y-admon-info >}}

Geräte können auf verschiedene Weise mit Ihrem {{< product-c8y-iot >}}-Konto verbunden werden.

### So registrieren Sie Geräte

Um Geräte zu registrieren, können Sie eine der folgenden Optionen wählen:

* **[Einzel-Geräteregistrierung](#device-registration-manually)** - zum manuellen Verbinden eines Gerätes oder mehrerer Geräte nacheinander.
* **[Bulk-Geräteregistrierung](#bulk-registration)** - zum Registrieren größerer Gerätemengen in einem Schritt.

Microservice-Entwickler können auch die [Erweiterte Geräteregistrierung](/concepts/applications/#extensible-device-registration) verwenden und ein benutzerdefiniertes Registrierungsformular implementieren, das sich nahtlos in die Benutzeroberfläche einfügt.

{{< c8y-admon-info >}}
Die folgenden Beschreibungen gelten für die allgemeinen Geräteregistrierungsprozesse. Wenn Sie spezielle Protokollintegrationen abonnieren, werden Ihnen zusätzliche protokollspezifische Optionen angezeigt (z. B. für LWM2M oder OPC UA). Eine vollständige Liste der unterstützten Protokolle finden Sie im [Protocol Integration Guide](/protocol-integration/overview/). Darin finden Sie auch Beschreibungen für die protokollspezifischen Registrierungsprozesse.
{{< /c8y-admon-info >}}

<a name="device-registration-manually"></a>
#### Einzel-Geräteregistrierung

{{< product-c8y-iot >}} ermöglicht eine einzelne Geräteregistrierung, um manuell mehrere Geräte nacheinander zu verbinden.
<br>
##### So verbinden Sie ein Gerät manuell
<br>
{{< c8y-admon-info >}}
Je nach Gerätetyp sind möglicherweise nicht alle beschriebenen Schritte relevant.
{{< /c8y-admon-info >}}

1. Klicken Sie auf **Registrierung** im Menü **Geräte** des Navigators.
2. Klicken Sie auf der Seite **Geräteregistrierung** rechts in der oberen Leiste auf **Gerät registrieren** und wählen Sie aus dem Auswahlmenü die Option **Einzelregistrierung** > **Generell**. Der Dialog **Geräte registrieren** wird angezeigt.
3. Geben Sie im Feld **Geräte-ID** die eindeutige ID des Geräts ein. Diese finden Sie in der Gerätedokumentation. Bei mobilen Geräten handelt es sich dabei meistens um die IMEI (International Mobile Equipment Identity), die häufig auf der Rückseite des Geräts zu finden ist.
4. Wählen Sie optional eine Gruppe aus, der Sie das Gerät nach der Registrierung zuweisen möchten, siehe auch [Gruppieren von Geräten](#grouping-devices).
5. Klicken Sie auf **Gerät hinzufügen**, um ein weiteres Gerät zu registrieren. Geben Sie auch hier die Geräte-ID ein und weisen Sie optional das Gerät einer Gruppe zu. Auf diese Weise können Sie mehrere Geräte in einem Schritt registrieren.
6. Klicken Sie auf **Weiter**, um Ihr(e) Gerät(e) zu registrieren.

{{< c8y-admon-info >}}
In einem {{< enterprise-tenant-de >}} kann der {{< management-tenant-de >}} auch direkt einen Mandanten auswählen, dem das Gerät von hier aus hinzugefügt werden soll. Bitte beachten Sie: Da der {{< management-tenant-de >}} keinen Zugriff auf die Stammdaten des Untermandanten hat, können Sie Geräte entweder für einen Mandanten ODER für eine Gruppe registrieren, nicht jedoch für beides.

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-device-registration-tenant.png" alt="General device registration">
{{< /c8y-admon-info >}}

Nach erfolgreicher Registrierung werden die Geräte auf der Seite [Geräteregistrierung](#dev-registration) mit dem Status "Wartet auf Verbindung" angezeigt.

Schalten Sie das Gerät bzw. die Geräte ein und warten Sie, bis die Verbindung hergestellt wird.

Wenn ein Gerät verbunden ist, wechselt der Status auf "Bitte akzeptieren".

{{< c8y-admon-info >}}
Die Anzeige **Bitte akzeptieren** kann sich je nach der [Sicherheitstokenregel](#security-token-policy-for-device-registration) unterscheiden.
{{< /c8y-admon-info >}}

Klicken Sie auf **Akzeptieren**, um die Verbindung zu bestätigen. Der Status des Geräts wechselt auf "Akzeptiert".

{{< c8y-admon-info >}}
Im Falle von Problemen lesen Sie die Dokumentation zu Ihrem Gerätetyp im [{{< product-c8y-iot >}} {{< device-portal >}}]({{< link-device-portal >}}) oder schlagen Sie im Handbuch zu Ihrem Gerät nach.
{{< /c8y-admon-info >}}

<a name="security-token-policy-for-device-registration"></a>
#### Sicherheitstokenregel für die Geräteregistrierung

Konfigurieren Sie die Sicherheitstokenregel, um das Risiko zu mindern, dass noch nicht registrierte Geräte durch Bedrohungsakteure übernommen werden, z. B. durch Erraten ihrer Seriennummer.

{{< c8y-admon-info >}}
Die Funktion erfordert eine LESEN-Berechtigung für "Optionen". Fehlt die Berechtigung, wird die Sicherheitstokenregel standardmäßig auf OPTIONAL gesetzt.
{{< /c8y-admon-info >}}

{{< product-c8y-iot >}} unterstützt die folgenden Werte für die Sicherheitstokenregel:

* IGNORIEREN - Selbst wenn ein Gerät eine sichere Registrierung erfordert, ignoriert {{< product-c8y-iot >}} dieses Erfordernis.
* OPTIONAL - Wenn ein Gerät eine sichere Registrierung erfordert, fordert {{< product-c8y-iot >}} ein zusätzliches Sicherheitstoken vom Benutzer an.
* ERFORDERLICH - Alle mit {{< product-c8y-iot >}} verbundenen Geräte müssen während der Registrierung ein Sicherheitstoken verwenden.

Die Regel kann durch Festlegen der folgenden Mandantenoption mit einem der oben genannten Werte konfiguriert werden, z. B.:

```json
{
  "category": "device-registration",
  "key": "security-token.policy",
  "value": "IGNORED"
}
```

{{< c8y-admon-info >}}
Die Anzeige **Bitte akzeptieren** kann sich je nach der [Sicherheitstokenregel](#security-token-policy-for-device-registration) unterscheiden.
{{< /c8y-admon-info >}}

##### Ignorierte Sicherheitstokenregel

Mit dem Wert "IGNORED" für die Sicherheitstokenregel kann ein mit {{< product-c8y-iot >}} verbundenes Gerät ohne jede Token-Validierung akzeptiert werden:

![Accepting devices registrations under ignored security token policy](/images/benutzerhandbuch/DeviceManagement/devmgmt-at-register-device-pending-acceptance-ignored-security.png)

<a name="optional-security-token-policy"></a>
##### Optionale Sicherheitstokenregel

Die Liste der Geräteregistrierungen wird im Bild unten präsentiert. Beachten Sie, dass die Eingabe für Sicherheitstokens für alle Geräte angezeigt wird.

![Accepting devices registrations under optional security token policy](/images/benutzerhandbuch/DeviceManagement/devmgmt-at-register-device-pending-acceptance-optional-security.png)

**Registrierung ohne Verwendung eines Sicherheitstokens**

Wenn ein mit {{< product-c8y-iot >}} verbundenes Gerät kein Sicherheitstoken verwendet, kann die Registrierung erfolgen, ohne dass in der Sicherheitstoken-Eingabe ein Wert bereitgestellt wird.

Wenn ein Sicherheitstoken für ein Gerät bereitgestellt wird, das unsicher verbunden ist, wird dieses akzeptiert und das Token wird ignoriert.

**Registrierung mithilfe eines Sicherheitstokens**

Wenn ein mit {{< product-c8y-iot >}} verbundenes Gerät ein Sicherheitstoken verwendet, kann die Registrierung nur abgeschlossen werden, wenn der Benutzer ein Token bereitstellt, das mit demjenigen übereinstimmt, das vom Gerät beim Herstellen der Verbindung übereinstimmt.

![Providing a token for device registration request in optional security token policy](/images/benutzerhandbuch/DeviceManagement/devmgmt-at-register-device-pending-acceptance-optional-security-enter-token.png)

Bei Bereitstellung eines falschen Tokens wird eine Fehlermeldung angezeigt, die über eine Nichtübereinstimmung zwischen dem vom Gerät verwendeten Wert und dem über die Benutzeroberfläche bereitgestellten Wert informiert.

Nach einer bestimmten Anzahl fehlgeschlagener Versuche erreicht die Registrierung den blockierten Zustand, was durch eine entsprechende Fehlermeldung angezeigt wird.
Die blockierte Registrierung muss vor dem nächsten Versuch, das Gerät zu verbinden, beseitigt werden.

**Eingeschränkte Verwendung der Funktion "Alle akzeptieren"**

Die Funktion **Alle akzeptieren** wird bei Geräten unterstützt, die ohne Verwendung eines Sicherheitstokens mit {{< product-c8y-iot >}} verbunden werden.

Bei jedem Gerät, das ein Sicherheitstoken verwendet, ist die Funktion **Alle akzeptieren** nicht verfügbar und es wird eine Warnmeldung angezeigt. In den Details der Warnmeldung werden die Geräte aufgelistet, die nicht automatisch akzeptiert werden konnten.

Um solche Geräte zu akzeptieren, muss der richtige **Sicherheitstoken**-Wert manuell bereitgestellt und auf **Akzeptieren** geklickt werden.


##### Erforderliche Sicherheitstokenregel

In diesem Modus muss jedes mit {{< product-c8y-iot >}} verbundene Gerät beim Herstellen der Verbindung ein Sicherheitstoken verwenden und der Benutzer muss beim Akzeptieren des Geräts dasselbe Token eingeben.

Zum Akzeptieren von Geräten ist genauso vorzugehen, wie unter [Optionale Sicherheitstokenregel](#optional-security-token-policy) beschrieben.

In diesem Modus werden alle Geräte, die sich ohne ein Sicherheitstoken mit {{< product-c8y-iot >}} verbinden, blockiert, und ihre Registrierung kann nicht abgeschlossen werden.

<a name="bulk-registration"></a>
#### Bulk-Geräteregistrierung

Um eine größere Anzahl von Geräten zu registrieren, bietet {{< product-c8y-iot >}} die Möglichkeit der Bulk-Registrierung, d. h. einer Registrierung mehrerer Geräte durch Hochladen einer CSV-Datei.

{{< c8y-admon-info >}}
Es gibt keine Einschränkung hinsichtlich der Anzahl der Geräte, die durch eine Bulk-Registrierung registriert werden können. Je mehr Geräte Sie jedoch hinzufügen, desto langsamer erfolgen die Erstellung und die Operation.
{{< /c8y-admon-info >}}

##### So führen Sie eine Bulk-Registrierung von Geräten durch


1. Klicken Sie auf **Registrierung** im Menü **Geräte** des Navigators.

2. Klicken Sie auf der Seite **Geräteregistrierung** rechts in der oberen Leiste auf **Gerät registrieren** und wählen Sie aus dem Auswahlmenü die Option **Bulk-Registrierung** > **Generell**. Der Dialog **Bulk-Geräteregistrierung** wird angezeigt.

3. Klicken Sie auf die Plus-Schaltfläche, um die hochzuladende CSV-Datei auszuwählen, oder wählen Sie sie durch Ziehen und Ablegen aus.

Je nach Format der hochgeladenen CSV-Datei wird einer der folgenden Registrierungstypen verarbeitet:

* Einfache Registrierung
* Vollständige Registrierung

{{< c8y-admon-info >}}
Durch Mehrfachregistrierung wird eine elementare Darstellung des Geräts erstellt. Danach muss das Gerät sie auf eine volle Darstellung mit eigenem Status aktualisieren.
{{< /c8y-admon-info >}}

Ein Trennzeichen wird automatisch aus der CSV-Datei übernommen. Gültige Trennzeichenwerte sind: `\t` (Tabulatorzeichen), `;` (Semikolon) und `,` (Komma).

**Einfache Registrierung**

Die CSV-Datei enthält zwei Spalten: ID;PATH, wobei ID die Gerätebezeichnung, z. B. die Seriennummer, und PATH eine durch Schrägstriche getrennte Liste von Gruppennamen (Pfad zu der Gruppe, der das Gerät nach der Registrierung zugewiesen werden soll) ist.

```
ID;PATH
Device1;Group A
Device2;Group A/Group B			
```


Nachdem die Datei hochgeladen wurde, werden alle erforderlichen neuen Gruppen erstellt und neue Registrierungen mit dem Status "Wartet auf Verbindung" angelegt und der normale Registrierungsprozess muss fortgesetzt werden (siehe oben).

**Vollständige Registrierung**

Die CSV-Dateien müssen mindestens die IDs als Gerätebezeichnung und die Zugangsdaten der Geräte enthalten.

Neben diesen Spalten kann die Datei auch andere Spalten wie ICCID, NAME oder TYPE enthalten, wie im folgenden Beispiel gezeigt:

```
ID;CREDENTIALS;TYPE;NAME;ICCID;IDTYPE;PATH;SHELL;AUTH_TYPE
006064ce800a;LF2PWJoLG1Fz;c8y_Device;Sample_Device1;+491555555;c8y_Serial;bulk group/subgroup1;1;BASIC
006064ce8077;OowoGKAbiNJs;c8y_Device;Sample_Device2;+491555555;c8y_Serial;bulk group/subgroup2;1;BASIC
```

Um die Geräte zu verbinden, werden diese mit den relevanten Informationen vorregistriert. Genauer gesagt wird jedes Gerät folgendermaßen konfiguriert:

* Benutzername - der Benutzername für das {{< product-c8y-iot >}}-Konto im Format &lt;tenant&gt;/device_&lt;id&gt;, wobei sich &lt;tenant&gt; auf den Mandanten bezieht, von welchem die CSV-Datei importiert wird, und &lt;id&gt; auf den entsprechenden Wert in der CSV-Datei.
* Passwort - das eindeutige Passwort für jedes Gerät für den Zugang zu {{< product-c8y-iot >}}, entspricht dem Wert "Credentials" in der CSV-Datei.
* Gerätedaten - Felder TYPE, NAME, ICCID, IDTYPE, PATH, SHELL in der CSV-Datei.

Nachdem die Daten importiert wurden, erhalten Sie eine Rückmeldung zur Anzahl der Geräte, die vorregistriert wurden, sowie zu gegebenenfalls aufgetretenen Fehlern.

Für beide Bulk-Registrierungstypen (einfach/vollständig) stellen wir praktische CSV-Vorlagendateien bereit, die Sie aus dem Registrierungsassistenten herunterladen können, um die Struktur anzuzeigen oder zu kopieren.

{{< c8y-admon-info >}}
Wenn das Gerät mit der jeweiligen Bezeichnung bereits existiert, wird es mit den Daten aus der CSV-Datei aktualisiert.
{{< /c8y-admon-info >}}

##### So importieren Sie CSV-Daten in Microsoft Excel

1. Wechseln Sie in Microsoft Excel zur Registerkarte **Daten**.
2. Wählen Sie in der Registerkarte **Daten** in der oberen Menüleiste die Option **Aus Text**.
3. Wählen Sie die zu importierende CSV-Datei aus, indem Sie zu ihr navigieren (in diesem Fall zu der Vorlagendatei, die Sie von der {{< product-c8y-iot >}}-Plattform heruntergeladen haben).
4. Behalten Sie in Schritt 1 des **Textimport-Assistenten** die Standardeinstellungen bei und klicken Sie auf **Weiter**.
5. Wählen Sie in Schritt 2 des **Textimport-Assistenten** die Option **Semikolon** und klicken Sie auf **Fertig stellen**.

Weitere Informationen zum Dateiformat und akzeptierten CSV-Varianten finden Sie auch unter
[Create a bulk device credentials request](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#operation/postBulkNewDeviceRequestCollectionResource) in der {{< openapi >}}.

{{< c8y-admon-info >}}
Wenn Sie mit dem {{< enterprise-tenant-de >}} arbeiten, können Sie auch Geräte über mehrere Mandanten registrieren, indem Sie eine Spalte **Mandant** hinzufügen und die CSV-Datei vom {{< management-tenant-de >}} aus importieren.
{{< /c8y-admon-info >}}
