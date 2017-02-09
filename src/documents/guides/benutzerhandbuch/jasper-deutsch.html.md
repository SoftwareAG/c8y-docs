---
order: 60
title: Jasper Control Center
layout: default
---

## <a name="overview"></a>Überblick

Das Jasper Control Center-Add-On zu Cumulocity bietet Ihnen eine ganzheitliche Ansicht der mobilen Gerätekonnektivität. Dieses Add-On arbeitet innerhalb der Cumulocity Device Management-Anwendung. Während Cumulocity selbst direkt mit Geräten kommuniziert und die von dem Gerät gemeldeten Konnektivitätsinformationen anzeigt, ergänzt das Jasper Control Center-Add-On dies mit einer Ansicht der Konnektivität.

<img src="/guides/users-guide/jasperarchitecturede.png" alt="Jasper architecture"  style="max-width: 100%">

Wenn Sie ein Jasper Control Center-Konto bei Ihrem Netzbetreiber haben, können Sie dieses Konto an Ihren Cumulocity-Mandanten verknüpfen. Mit dieser Kombination können Sie:

* Prüfen Sie den Status der SIM-Karte im Gerät und aktivieren oder deaktivieren Sie sie.
* Überprüfen Sie den vom Netz gemeldeten Online-Status des Geräts.
* Anzeigen von Datenverkehr, SMS und Sprachanrufen.
* Zeigen Sie den Verlauf von Datensitzungen und Änderungen der SIM-Karte oder Tarife an.
* Rufen Sie die Diagnosetools des Control Centers auf.
* Kommunizieren Sie mit dem Gerät über SMS-Nachrichten, zum Beispiel, um APN-Parameter festzulegen.

Die folgenden Abschnitte beschreiben:

* Wie verbindet man den [Jasper Control Center account](#link-account) mit dem Cumulocity Mandanten.
* Wie verbindet man [SIMs](#link-sims) und Mobile Geräte.
* Welche Information wird [gezeigt](#jasperinfo).
* Wie kann man  [Verbindungen verwalten](#managing) über das Device Management.

## <a name="link-account"></a>Den Jasper Control Center Account verbinden

Cumulocity greift auf Ihr Jasper Control Center-Konto zu, indem Sie einen "dedicated" Benutzer verwenden, den Sie im Control Center erstellen und in Cumulocity konfigurieren möchten. Dieser Benutzer wird für den Zugriff von Cumulocity auf das Jasper Control Center verwendet, sodass die Berechtigungen des Benutzers Einfluss auf die in Cumulocity verfügbaren Funktionalitäten haben.

Neben dem Benutzer benötigen Sie auch einen sogenannten API-Lizenzschlüssel und eine API-Server-URL. So ermitteln Sie den API-Lizenzschlüssel und die API-Server-URL:

* Verwenden Sie einen Administratorbenutzer des Control Center, um sich in Ihrem Control Center-Konto anzumelden, und klicken Sie auf der Homepage des Control Center auf "API-Integration".
* Ihr API-Lizenzschlüssel und die API-Server-URL werden oben links angezeigt.

***Wir empfehlen, einen eigenen Benutzer im Jasper Control Center zu erstellen:***

* Navigieren Sie als Administrator zu "Admin" und "Benutzer".
* Klicken Sie auf die Schaltfläche "Neu erstellen".
* Geben Sie den Benutzernamen und weitere Details des Benutzers ein.
* Wenn Sie SIM-Karten von Cumulocity aktivieren und deaktivieren oder SMS von Cumulocity senden möchten, verwenden Sie die Rolle "ACCOUNTUSER". Verwenden Sie andernfalls die Rolle "ACCOUNTREADONLY".
* Klicken Sie auf "OK", um einen Benutzer zu erstellen, und geben Sie dann Ihr Kennwort ein. Klicken Sie dann erneut auf "OK". (Hinweis: Sie müssen Ihr Administratorkennwort eingeben, nicht das Kennwort, das der neue Benutzer erhält.)

![Jasper user management](/guides/users-guide/jasperadmin.png)

Der Benutzer ist nun erstellt, hat aber noch kein Passwort. Folgen Sie den Anweisungen, die Ihnen von Control Center per E-Mail zugewiesen wurden, um ein Passwort festzulegen. Verbinden Sie nun Ihr Jasper Control Center-Konto mit Cumulocity:

* Verwenden Sie einen Cumulocity-Administratorbenutzer, um sich in der Anwendung Cumulocity Administration anzumelden.
* Klicken auf das Menu Verbindungen. Wenn das Menu nicht angezeigt werden sollte, dann [Stellen Sie sicher das der Nutzer Admin Rechte für das Options-Management hat. ](/guides/users-guide/administration#permissions). Sonst bitte den [Support](https://support.cumulocity.com) kontaktieren.
* Den Key, URL, Nutzername und Passwort eingeben und "Speichern".

![Jasper settings](/guides/users-guide/jaspersettings.png)

Das Add-On ist nun eingerichtet.

## <a name="link-sims"></a>SIMs und Mobile Geräte verbinden

Wechseln Sie nun in die Geräteverwaltung und navigieren Sie zu einem Gerät, das über eine von Jasper Control Center verwaltete SIM-Karte verbunden ist. Sie sollten eine Registerkarte "Verbindungen" sehen. Wenn diese Registerkarte nicht angezeigt wird,

* Hat der  Benutzer keine Berechtigungen für "Verbindungen"?
* Das Gerät ist nicht mit einer SIM-Karte verbunden.
* Das Gerät ist mit einer SIM-Karte verbunden, die Karte wird jedoch nicht vom Jasper Control Center-Konto verwaltet.

Um Berechtigungen zuzuordnen, navigieren Sie zur Administrationsanwendung und wählen Sie "Read" oder "Admin" Berechtigungen für "Verbindungen", wie unten gezeigt.

<img src="/guides/users-guide/connectivityperms.png" alt="Connectivity permission settings"  style="max-width: 80%">

Jasper Control Center identifiziert SIM-Karten über ihre ICCID ("integrated circuit card identifier"). In den meisten Fällen melden die Geräte die ICCID ihrer SIM-Karte automatisch an Cumulocity. Wenn die ICCID nicht angezeigt wird:

* Bestimmen Sie die ICCID der SIM-Karte. Es wird auf der SIM-Karte gedruckt und ist im Control Center sichtbar.
* Geben Sie die ICCID im Register "Info" ein und klicken Sie auf "Speichern".
* Klicken Sie auf die Schaltfläche "Neu Laden" des Browsers, um die Registerkarte "Verbindungen" zu öffnen.

> Es kann einige Sekunden dauern, bis die Registerkarte zum ersten Mal auf einem Gerät angezeigt wird, da Cumulocity prüft, ob die jeweilige SIM-Karte vom Jasper Control Center verwaltet wird.

## <a name="jasperinfo"></a>Der "Verbindungen" Tab

Navigieren Sie nun zum Tab "Verbindungen". Es zeigt mehrere Abschnitte von Informationen:

* Status.
* SMS.
* Sessions.
* Audit Protokolle.

> Einige Abschnitte werden möglicherweise nicht angezeigt oder leer sein. Wenn zum Beispiel keine SMS gesendet wurde und Sie keine Berechtigung zum Senden von SMS haben, wird der SMS-Abschnitt nicht angezeigt.

Im Abschnitt "Status" werden Zusammenfassungsinformationen für die SIM-Karte aufgelistet, wie im Screenshot unten ersichtlich. Die erste Zeile zeigt an, ob das Gerät derzeit eine Datensitzung ausführt. Wenn dies der Fall ist, wird der Start der Sitzung und die aktuelle WAN-IP-Adresse des Geräts angezeigt.

Im Abschnitt "Status" werden Zusammenfassungsinformationen für die SIM-Karte aufgelistet, wie im Screenshot unten ersichtlich. Die erste Zeile zeigt an, ob das Gerät derzeit eine Datensitzung ausführt. Wenn dies der Fall ist, wird der Start der Sitzung und die aktuelle WAN-IP-Adresse des Geräts angezeigt.

Die rechte Seite des Abschnitts zeigt Nutzungsinformationen für den aktuellen Monat, vom ersten des Monats bis heute. Wenn man über den Tooltip hoovert, wird der abgedeckte Zeitraum angezeigt, einschließlich der Nutzung während des letzten Monats.

![Status section](/guides/users-guide/jasperstatus.png)

Im Abschnitt "SMS" werden die Textnachrichten angezeigt, die an das Gerät gesendet und vom Gerät empfangen wurden

* Wann die Nachricht gesendet oder empfangen wurde.
* Wo wurde es gesendet und wo es gesendet wurde.
* Der Lieferstatus der Nachricht.
  * Für Meldungen an das Gerät: "Pending", wenn es noch nicht vom Gerät empfangen wurde, oder "Delivered", wenn es vom Gerät empfangen wurde.
  * Für Nachrichten vom Gerät: "Empfangen", wenn es von Control Center empfangen wurde, oder "Abgebrochen", wenn es noch nicht von Control Center empfangen wurde.
* Was die Richtung der Nachricht ist: MT ("Mobile terminated"), wenn es auf das Gerät ging, oder MO ("Mobile stammte"), wenn es aus dem Gerät kam.

Vorausgesetzt, Sie haben die Berechtigung "Admin" für "Verbindungen", können Sie auch Textnachrichten an das Gerät senden, indem Sie den Text eingeben und auf "SMS senden" klicken.

![SMS section](/guides/users-guide/jaspersms.png)

Im Abschnitt "Sitzungen" wird das Protokoll der von dem Gerät ausgeführten Daten-Sitzungen angezeigt. Es listet, wann die Sitzung begann, wie lange es dauerte und wie viel Datenverkehr verbraucht wurde.

![Sessions section](/guides/users-guide/jaspersessions.png)

Im Abschnitt "Sitzungen" wird das Protokoll der von dem Gerät ausgeführten Daten-Sitzungen angezeigt. Es listet, wann die Sitzung begann, wie lange es dauerte und wie viel Datenverkehr verbraucht wurde.

![Audit logs section](/guides/users-guide/jasperaudits.png)

> Diese Registerkarte wird nicht in Echtzeit aktualisiert. Um aktuelle Daten anzuzeigen, klicken Sie oben auf den Link "Reload".


## <a name="managing"></a>Verwalten von Verbindungen

Wenn Sie vermuten, dass ein Gerät nicht korrekt an Cumulocity berichtet oder es keine Befehle empfängt, können Sie den Verbindungsstatus des Geräts über die Registerkarte "Konnektivität" überprüfen. Überprüfen Sie, ob

* Die SIM-Karte ist aktiviert. Wenn die SIM-Karte nicht aktiviert ist, können Sie sie im Dropdown-Menü "Aktiviert" aktivieren. Es kann eine Weile dauern, bis die SIM-Karte im Netzwerk aktiv ist. Möglicherweise ist ein Reset des Geräts erforderlich, um es wieder an das Netzwerk zu binden.
* Das Gerät ist mit dem Netzwerk verbunden. Wenn das Gerät nicht mit dem Netzwerk verbunden ist, kann dies mehrere Gründe haben:
 * Das Gerät befindet sich an einem Standort ohne Mobilfunknetz. Wenn das Gerät die Netzwerkqualitätsparameter meldet, navigieren Sie zum Menüpunkt ["Messwerte" Tab](/guides/users-guide/device-management#measurements) des Geräts und überprüfen Sie die zuletzt gemeldeten Signalstärke- und Fehlerratenparameter. 
 * Es gibt ein Netzwerk- oder Hardwareproblem (Antenne, Modem). Wählen Sie das Zahnrad-Symbol oben rechts und klicken Sie auf "SIM-Details", dann öffnen Sie das Jasper Control Center Diagnosetool. Wenn das Gerät keine Verbindung zum Netzwerk herstellt, kann es schadhaft sein.
 * Das Gerät befindet sich in einer Datensitzung. Wenn sich das Gerät nicht in einer Datensitzung befindet, kann dies wiederum mehrere Gründe haben:
  * Die APN-Einstellungen sind im Gerät falsch konfiguriert.
  * Die SIM-Karte ist über Verkehrslimit.
  * Das Datenroaming ist auf dem Gerät deaktiviert und das Gerät befindet sich nicht im Heimnetzwerk der SIM-Karte.
  * Datenroaming für das jeweilige Netz ist nicht im Plan der SIM-Karte enthalten.
  * Die SIM-Konfiguration wurde geändert.

Die Datenkonnektivität kann an verschiedenen Stellen analysiert werden:

* Wenn das Gerät seine Netzwerkkonfiguration meldet, navigieren Sie zur Registerkarte "Netzwerk" und überprüfen Sie, eventuell bearbeiten, die APN-Einstellungen.
* Wenn das Gerät Shell unterstützt, navigieren Sie zum ["Shell" tab](/guides/users-guide/device-management/#shell) und überprüfen oder bearbeiten Sie APN-Einstellungen und Roaming-Konfiguration.
* Überprüfen Sie den Abschnitt "Sessions" auf der Registerkarte "Connectivity", um zu sehen, ob das Gerät zuvor kommuniziert hat und wie viel Verkehr es verwendet hat.
* Überprüfen Sie den Abschnitt "Sessions" auf der Registerkarte "Connectivity", um zu sehen, ob das Gerät zuvor kommuniziert hat und wie viel Datenvolumen es verwendet hat.
* Klicken Sie abschließend auf das Zahnrad oben rechts und wählen Sie "SIM-Details", um zur SIM-Konfiguration im Jasper Control Center zu navigieren.

> Der Menüpunkt "SIM-Details" erfordert eine Anmeldung für Jasper Control Center. Diese Anmeldung wird unabhängig von Ihrem Administrator zur Verfügung gestellt. 

Wenn das Gerät weiterhin keine Cumulocity-Meldung enthält, kann es zu einem Konfigurations- oder Softwareproblem auf dem Gerät kommen.

* Das Gerät kann seine Anmeldeinformationen verloren haben, z. B. aufgrund eines Werks-Reset oder vollständiger Verlust der Leistung. In diesem Fall können Sie [Re-registrieren des Geräts](/guides/users-guide/device-management#device-registration).
* Es kann ein Konfigurations- oder Softwareproblem mit dem Gerät geben, das gerätespezifisch analysiert werden muss.