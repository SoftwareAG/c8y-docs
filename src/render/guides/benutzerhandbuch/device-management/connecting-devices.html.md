---
order: 11
title: Verbinden von Geräten
layout: redirect
---

<a name="device-registration"></a>

Dieser Abschnitt beschreibt, wie Sie Geräte mit Ihrem Cumulocity-Konto verbinden können, sowohl manuell als auch durch Bulk-Registrierung. 

### <a name="device-registration-manually"></a>Manuelles Verbinden eines Geräts

Der folgende Prozess beschreibt das manuelle Verbinden eines Geräts. Je nach Gerätetyp sind möglicherweise nicht alle beschriebenen Schritte relevant.

Um Geräte mit Ihrem Cumulocity-Konto zu verbinden, führen Sie folgende Schritte aus:

1. Öffnen Sie die Seite "Geräteregistrierung" im Menü "Geräte" und wählen Sie **Gerät registrieren**.
2. Wählen Sie im folgenden Fenster **Manuelle Geräteregistrierung**, um ein oder mehrere Geräte einzeln zu registrieren, im Gegensatz zur Bulk-Registrierung, die im nächsten Abschnitt beschrieben wird.
3. Geben Sie im Feld "Geräte-ID" die eindeutige ID des Geräts ein. Diese finden Sie in der Gerätedokumentation. Bei mobilen Geräten handelt es sich dabei meistens um die IMEI (International Mobile Equipment Identity), die häufig auf der Rückseite des Geräts zu finden ist. 
4. Wählen Sie optional eine Gruppe aus, der Sie das Gerät nach der Registrierung zuweisen möchten. Weiter Informationen zum Zuweisen zu Gruppen finden Sie unter [Gruppieren von Geräten](#grouping-devices).
5. Klicken Sie **Weiteres Gerät hinzufügen**, um ein weiteres Gerät zu registrieren. Geben Sie auch hier die Geräte-ID ein und weisen Sie optional das Gerät einer Gruppe zu. Auf diese Weise können Sie mehrere Geräte in einem Schritt registrieren.
6. Klicken Sie **Weiter**, um Ihr(e) Gerät(e) zu registrieren. Nach erfolgreicher Registrierung werden Geräte mit dem Status "Warten auf Verbindung" auf der Seite angezeigt.

<img src="/guides/images/benutzerhandbuch/devmgmt-register-device.png" alt="Mehrere Geräte registrieren" style="max-width: 50%">

Schalten Sie das Gerät bzw. die Geräte ein und warten Sie, bis die Verbindung hergestellt wird. 

Wenn ein Gerät verbunden ist, wechselt der Status auf "Bitte akzeptieren". Klicken Sie **Akzeptieren**, um die Verbindung zu bestätigen. Der Status des Geräts wechselt auf "Akzeptiert".

**Info**: Bei Problemen sehen Sie im [Device Guide](/guides/devices) für Ihren Gerätetypen nach, suchen Sie nach Ihrem Gerätetypen im [Developer Center](http://cumulocity.com/dev-center/) auf unserer Website oder konsultieren Sie das Handbuch Ihres Geräts.

### <a name="creds-upload"></a>Bulk-Registrierung von Geräten

Um eine größere Anzahl von Geräten zu registrieren, bietet Cumulocity die Möglichkeit der Bulk-Registrierung, mit der viele Geräte gleichzeitig in einem Schritt registriert werden können. Das geschieht über das Hochladen einer CSV-Datei, die neben den IDs mindestens die Zugangsdaten der zu registrierenden Geräte enthalten muss. 

1. Öffnen Sie die Seite "Geräteregistrierung" im Menü "Geräte" und wählen Sie **Gerät registrieren**.
2. Wählen Sie im folgenden Fenster **Bulk-Geräteregistrierung**.
3. Wählen Sie die hochzuladende CSV-Datei auf Ihrem Computer aus. Die CSV-Datei muss folgende Struktur haben:

		ID;Credentials;Tenant;PATH;ICCID;NAME;TYPE
		006064ce800a;LF2PWJoLG1Fz;management;Sample_Düsseldorf;	+491555555;Sample_Device1;c8y_Device
		006064ce8077;OowoGKAbiNJs;management;Sample_Düsseldorf;	+491555555;Sample_Device2;c8y_Device

 <!--
You may also download a template file here to view or copy the structure.
Needs to be tested. Seems to be outdated.
 Use the "Upload" button to upload the CSV file, as shown in the screenshot below. After the data is imported, you will get feedback on the number of devices that were pre-registered as well as on any potential errors that may have occurred. -->

**Vor-Registrieren von Geräten**

Um die Geräte zu verbinden, müssen diese mit den relevanten Informationen vor-registriert sein. Genauer gesagt muss jedes Gerät folgendermaßen konfiguriert sein: 

* Benutzername - der Benutzername für das Cumulocity-Konto im Format &lt;tenant&gt;/device_&lt;id&gt;, wobei &lt;tenant&gt; sich auf den Mandanten bezieht, von welchem die CSV-Datei importiert wird und &lt;id&gt; sich auf den entsprechenden Wert in der CSV-Datei bezieht.
* Passwort - das Passwort für den Zugang zu Cumulocity, entspricht dem Wert "Credentials" in der CSV-Datei.
* Gerätedaten - Felder "Type", "Name", "Iccid", "Idtype", "Path", "Shell" in der CSV-Datei.

**Info**: Wenn Sie mit der Enterprise Edition von Cumulocity arbeiten, können Sie auch Geräte über mehrere Mandanten registrieren, in dem Sie eine Spalte "Mandant" hinzufügen und die CSV-Datei vom Management-Mandanten aus importieren. 

Weitere Informationen zum Dateiformat und möglichen CSV-Varianten finden Sie unter  
[Bulk device credentials](/guides/reference/device-credentials/#creds-upload) im Reference Guide.
