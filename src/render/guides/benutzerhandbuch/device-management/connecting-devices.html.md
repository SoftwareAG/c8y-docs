---
order: 11
title: Verbinden von Geräten
layout: redirect
---

<a name="device-registration"></a>

Dieser Abschnitt beschreibt, wie Sie Geräte mit Ihrem Cumulocity-Konto verbinden können, sowohl manuell als auch durch Bulk-Registrierung. 

Um Geräte mit Ihrem Cumulocity-Konto zu verbinden, führen Sie folgenden Schritte aus:

Öffnen Sie die Seite **Geräteregistrierung** im Menü **Geräte** im Navigator und klicken Sie **Gerät registrieren**.

Im Dialog **Geräte registrieren** können Sie eine der folgenden Optionen wählen:
	
* **[Manuelle Geräteregistrierung](#device-registration-manually)** - um manuell ein Gerät oder mehrere Geräte zu verbinden
* **[Bulk-Geräteregistrierung](#creds-upload)** - um in einem Schritt eine große Anzahl von Geräten zu registrieren

Wenn Sie eine entsprechende Anwendung abonniert haben, sehen Sie außerdem die Option **Benutzerdefinierte Geräteregistrierung** zum Registrieren von bestimmten Gerätetypen wie etwa LoRa oder Sigfox. Weitere Informationen finden Sie in der Dokumentation zu diesen optionalen Services.  

<img src="/guides/images/benutzerhandbuch/devmgmt-register-devices-custom.png" alt="Geräte registrieren" style="max-width: 50%">


### <a name="device-registration-manually"></a>Manuelles Verbinden eines Geräts

Der folgende Prozess beschreibt das manuelle Verbinden eines Geräts. Je nach Gerätetyp sind möglicherweise nicht alle beschriebenen Schritte relevant.

Um Geräte mit Ihrem Cumulocity-Konto zu verbinden, führen Sie folgende Schritte aus:

1. Öffnen Sie die Seite **Geräteregistrierung** im Menü **Geräte** und klicken Sie **Gerät registrieren**.
2. Wählen Sie im im Dialog **Geräte registrieren** die Option **Manuelle Geräteregistrierung**.
<img src="/guides/images/benutzerhandbuch/devmgmt-device-registration-general.png" alt="Manuelle Geräteregistrierung" style="max-width: 50%">
3. Geben Sie im Feld **Geräte-ID** die eindeutige Kennung des Geräts ein. Diese finden Sie in der Gerätedokumentation. Bei mobilen Geräten handelt es sich dabei meistens um die IMEI (International Mobile Equipment Identity), die häufig auf der Rückseite des Geräts zu finden ist. 
4. Wählen Sie optional eine Gruppe aus, der Sie das Gerät nach der Registrierung zuweisen möchten. Weiter Informationen zum Zuweisen zu Gruppen finden Sie unter [Gruppieren von Geräten](#grouping-devices).
5. Klicken Sie **Weiteres Gerät hinzufügen**, um ein weiteres Gerät zu registrieren. Geben Sie auch hier die Geräte-ID ein und weisen Sie optional das Gerät einer Gruppe zu. Auf diese Weise können Sie mehrere Geräte in einem Schritt registrieren.
6. Klicken Sie **Weiter**, um Ihr(e) Gerät(e) zu registrieren. 

**Info**: In der Enterprise Edition kann der Management-Mandant hier auch einen Untermandanten auswählen, dem das Gerät zugewiesen wird. Beachten Sie jedoch, dass der Management-Mandant Geräte entweder einer Gruppe ODER einem Mandanten zuweisen kann, nicht beides, da der Management-Mandant keinen Zugriff auf die Stammdaten der Untermandanten hat.

Nach erfolgreicher Registrierung werden Geräte mit dem Status **Warten auf Verbindung** auf der Seite [**Geräteregistrierung**](#dev-registration) angezeigt.

Schalten Sie das Gerät bzw. die Geräte ein und warten Sie, bis die Verbindung hergestellt wird. 

Wenn ein Gerät verbunden ist, wechselt der Status auf **Bitte akzeptieren**. Klicken Sie **Akzeptieren**, um die Verbindung zu bestätigen. Der Status des Geräts wechselt auf **Akzeptiert**.

>**Info**: Bei Problemen finden Sie möglicherweise weitere Information

>* im jeweiligen [Device Guide](/guides/devices) für Ihren Gerätetypen,
* im [Developer Center](http://cumulocity.com/dev-center/) auf unserer Website
* oder im Handbuch Ihres Geräts.

### <a name="dev-registration"></a> Seite Geräteregistrierung

Auf der Seite **Geräteregistrierung** werden alle Geräte angezeigt, die sich aktuell im Registrierungsprozess befinden.

<img src="/guides/images/users-guide/DeviceManagement/devmgmt-device-registration.png" alt="Seite Geräteregistrierung" style="max-width: 100%">

Für jedes Gerät werden die folgenden Informationen angezeigt:

* Gerätename, der bei der Registrierung vergeben wurde
* Gerätestatus (siehe unten)
* Erstellungsdatum
* Mandant, mit dem das Gerät registriert wurde

Geräte können einen der folgenden Status haben:

* **Warten auf Verbindung** - Das Gerät ist registriert worden, aber es hat sich noch kein Gerät mit der spezifischen ID verbunden. 
* **Bitte akzeptieren** - Ein Gerät mit der spezifischen ID versucht zu kommunizieren, aber der Benutzer, der das Gerät registriert hat, muss die Verbindung noch explizit akzeptieren, damit Zugangsdaten zum Gerät gesendet werden.  
* **Akzeptiert** - Der Benutzer hat bestätigt, dass Zugangsdaten an das Gerät gesendet werden dürfen. 

### <a name="creds-upload"></a>Bulk-Registrierung von Geräten

Um eine größere Anzahl von Geräten zu registrieren, bietet Cumulocity die Möglichkeit der Bulk-Registrierung, mit der viele Geräte gleichzeitig in einem Schritt registriert werden können. Das geschieht über das Hochladen einer CSV-Datei.

1. Öffnen Sie die Seite **Geräteregistrierung** im Menü **Geräte** und wählen Sie **Gerät registrieren**.
2. Wählen Sie im Im Dialog **Geräte registrieren** die Option **Bulk-Geräteregistrierung**.
<img src="/guides/images/users-guide/DeviceManagement/devmgmt-bulk-registration.png" alt="Bulk-Registrierung" style="max-width: 100%">
3. Klicken Sie **Datei zum Hochladen auswählen** und wählen Sie die hochzuladende CSV-Datei auf Ihrem Computer aus. 

Abhängig vom Format der hochgeladenen CSV-Datei wird eine der beiden folgenden Registrierungsarten ausgeführt:

1. **Einfache Registrierung**

	Die CSV-Datei enthält zwei Spalten: ID;PATH, wobei ID der Kennung des Geräts entspricht, z. B. der Seriennummer, und PATH eine durch Schrägstrich separierte Liste von Gruppennamen ist (Pfad zu den Gruppen, zu denen das Gerät nach der Registrierung hinzugefügt werden soll).


		ID;PATH
		Device1;Group A
		Device2;Group A/Group B


	Nachdem die Datei hochgeladen wurde, werden alle erforderlichen neuen Gruppen sowie alle neuen Registrierungen mit dem Status **Warten auf Verbindung** erstellt . Anschließend muss der übliche Registrierungsprozess (AKZEPTIEREN) durchlaufen werden (siehe oben).

1. **Vollständige Registrierung**

	Die CSV-Datei muss mindestens die IDs der Geräte als Kennung sowie die Zugangsdaten zu den Geräten enthalten.  

		ID;Credentials;PATH;ICCID;NAME;TYPE
		006064ce800a;LF2PWJoLG1Fz;Sample_Düsseldorf;+491555555;Sample_Device1;c8y_Device
		006064ce8077;OowoGKAbiNJs;Sample_Düsseldorf;+491555555;Sample_Device2;c8y_Device
	
	Darüberhinaus kann die Datei weitere Spalten, etwa ICCID, NAME, TYPE wie im Beispiel oben, enthalten. 
	
	Um die Geräte zu verbinden, müssen diese mit den relevanten Informationen vorregistriert sein. Genauer gesagt muss jedes Gerät folgendermaßen konfiguriert sein: 

	* Benutzername - der Benutzername für das Cumulocity-Konto im Format &lt;tenant&gt;/device_&lt;id&gt;, wobei &lt;tenant&gt; sich auf den Mandanten bezieht, von welchem die CSV-Datei importiert wird und &lt;id&gt; sich auf den entsprechenden Wert in der CSV-Datei bezieht.
	* Passwort - das Passwort für den Zugang zu Cumulocity, entspricht dem Wert "Credentials" in der CSV-Datei.
	* Gerätedaten - Felder TYPE, NAME, ICCID, IDTYPE, PATH, SHELL in der CSV-Datei.
	
	Nachdem die Daten importiert wurden, erhalten Sie Informationen zu der Anzahl der Geräte, die vorregistriert wurden, sowie zu möglichen aufgetretenen Fehlern.
	
Für beide CSV-Dateiformate werden entsprechende Vorlagen zum Herunterladen bereitgestellt, aus denen Sie die Struktur ersehen oder kopieren können. 

Weitere Informationen zum Dateiformat und möglichen CSV-Varianten finden Sie unter [Bulk device credentials](/guides/reference/device-credentials/#creds-upload) im Reference Guide.
 
**Info**: Wenn Sie mit der Enterprise Edition von Cumulocity arbeiten, können Sie auch Geräte über mehrere Mandanten registrieren, indem Sie eine Spalte "Mandant" hinzufügen und die CSV-Datei vom Management-Mandanten aus importieren. 