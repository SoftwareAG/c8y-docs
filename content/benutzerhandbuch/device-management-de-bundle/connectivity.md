---
weight: 100
title: Connectivity
layout: redirect
aliases:
  -/users-guide/optional-services/#connectivity
---

Der Connectivity-Agent, der von der Anwendung Cumulocity IoT Device Management aus arbeitet, liefert grundlegende Informationen zu Mobilgeräten sowie zusätzliche Details zur Konnektivität.

Cumulocity IoT lässt sich mit der SIM-Connectivity-Management-Plattform Jasper integrieren. Für die SIM-Connectivity-Management-Plattformen Comarch und Ericsson bietet Cumulocity IoT eine experimentelle Implementierung. Weitere Details erfragen Sie bitte beim [Produkt-Support](/about-doc/contacting-support).

Die folgenden Funktionen werden von diesen Anbietern bereitgestellt:

|Funktion|Jasper|Ericsson|Comarch|
|:------|:-----|:-------|:------|
|Status der SIM-Karte im Gerät prüfen|x|x|x|
|Vom Netzwerk gemeldeten Online-Status der Geräte prüfen|x|x|x|
|SIM-Karten-Status ändern, z. B. aktivieren oder deaktivieren|x|x|x|
|SIM-Karte von aktueller Sitzung trennen| | |x|
|Über Textnachrichten mit dem Gerät kommunizieren, z. B. um APN-Parameter festzulegen|x| |x|
|Nutzungsübersicht über Datenverkehr, Textnachrichten und Sprachanrufe anzeigen|x|x|x|
|Nutzungsdetails zu Datenverkehr, Textnachrichten und Sprachanrufen anzeigen|x|x| |
|Verlauf von Datensitzungen und etwaigen Änderungen an SIM-Karte oder Datenverkehr anzeigen|x| |&nbsp;|

Wie Sie sehen, bietet Jasper derzeit den größten Funktionsumfang.

Die folgende Beschreibung basiert vornehmlich auf Jasper, doch dieselbe Konfiguration und Nutzung gilt auch für die anderen Anbieter. Etwaige Unterschiede werden explizit angegeben.

<img src="/images/benutzerhandbuch/connectivity/connectivity-jasperarchitecture.png" alt="Jasper architecture">

In den nachstehenden Abschnitten wird Folgendes beschrieben:

* [Einrichten Ihres Jasper Control Center-Kontos](#link-account) (beispielhaft)
* Konfigurieren der [Konnektivität](#connectivity) zum SIM-Anbieter in Ihrem Cumulocity IoT-Mandanten
* [Verknüpfen von SIMs](#link-sims) und Mobilgeräten
* In der [Registerkarte "Connectivity"](#jasperinfo) angezeigte Informationen
* [Verwalten der Konnektivität](#managing) über Device Management

### <a name="link-account"></a>Einrichten Ihres Jasper Control Center-Kontos

In den folgenden Schritten wird beschrieben, wie Sie im Jasper Control Center einen dedizierten Benutzer einrichten können. Dieser Benutzer wird für jeglichen Zugriff von Cumulocity IoT auf das Jasper Control Center verwendet. Die Berechtigungen des Benutzers haben also Einfluss auf die in Cumulocity IoT verfügbaren Funktionalitäten.

>**Info:** Für Ericsson oder Comarch empfehlen wir Ihnen ebenso, einen dedizierten Benutzer einzurichten, um die Zugangsdaten zu erhalten, die für die Verbindung mit Cumulocity IoT erforderlich sind. Weitere Informationen erfragen Sie bitte bei Ihrem Administrator oder unserem Supportteam.

Neben dem Benutzer benötigen Sie auch einen sogenannten API License Key (nur für Jasper erforderlich) und eine API-Server-URL. Zur Ermittlung Ihres API License Key und der API-Server-URL melden Sie sich über einen Control Center-Administratorbenutzer bei Ihrem Control Center-Konto an und klicken Sie auf der Control Center-Startseite auf **API Integration**.
Ihr API License Key und die API-Server-URL werden links oben anzeigt.

Zum Erstellen eines Benutzers im Jasper Control Center führen Sie die folgenden Schritte aus:

1. Navigieren Sie als Admin-Benutzer zu **Admin** und **Users**.
1. Klicken Sie auf **Create New**.
1. Geben Sie den Benutzernamen und weitere Details des Benutzers ein.
1. Wenn Sie in der Lage sein möchten, SIM-Karten über Cumulocity IoT zu aktivieren und zu deaktivieren oder SMS von Cumulocity IoT aus zu senden, verwenden Sie die Rolle ACCOUNTUSER. Andernfalls verwenden Sie die Rolle ACCOUNTREADONLY.
1. Klicken Sie auf **OK**, um den Benutzer zu erstellen, geben Sie dann Ihr Admin-Passwort ein und klicken Sie erneut auf **OK**.

![Jasper user management](/images/benutzerhandbuch/connectivity/connectivity-jasperadmin.png)

Der Benutzer ist nun erstellt, aber hat noch kein Passwort. Folgen Sie den Anweisungen, die Ihnen das Control Center per E-Mail gesendet hat, um das Passwort festzulegen.


### <a name="connectivity"></a>Konfigurieren der Konnektivität für den SIM-Anbieter in Cumulocity IoT

Führen Sie den folgenden Schritt aus, um die Konnektivität in Cumulocity IoT zu konfigurieren:

1. Melden Sie sich über einen Cumulocity IoT-Administratorbenutzer bei der Cumulocity IoT-Plattform an.
1. Wechseln Sie zur Anwendung Administration.
1. Klicken Sie auf **Connectivity** im Menü **Einstellungen** des Navigators. Falls das Menüelement nicht angezeigt wird, vergewissern Sie sich, dass Ihr Benutzer über die [ADMIN-Berechtigung für Connectivity](/benutzerhandbuch/administration-de#managing-permissions) verfügt. Ist das Menüelement noch immer nicht verfügbar, wenden Sie sich bitte an den [Produkt-Support](/about-doc/contacting-support), um den Connectivity-Agenten in Ihrem Mandanten bereitzustellen.
2. Wechseln Sie zur Registerkarte **Mobilfunkanbieter-Einstellungen**.
3. Wählen Sie einen Anbieter aus der Auswahlliste aus.
1. Geben Sie die Zugangsdaten (URL, Schlüssel (im Falle von Jasper), Benutzername und Passwort) für das entsprechende SIM-Anbieter-Konto ein. Wenn Ihnen keine Zugangsdaten vorliegen, fragen Sie Ihren Administrator.
2. Klicken Sie auf **Speichern**, um Ihre Einstellungen zu speichern.

![Jasper settings](/images/benutzerhandbuch/connectivity/connectivity-item.png)

Der Connectivity-Agent ist nun eingerichtet.

### <a name="link-sims"></a>Verknüpfen von SIMs und Mobilgeräten

Wechseln Sie zur Anwendung Device Management und navigieren zu dem Gerät, das über eine SIM-Karte verbunden ist, die vom SIM-Anbieter Ihrer Wahl verwaltet wird. Das Gerät sollte eine Registerkarte namens **Connectivity** aufweisen. Wird diese Registerkarte nicht angezeigt, hat dies einen der folgende Gründe:

* Ihr Benutzer hat keine Berechtigungen für Connectivity.
* Das Gerät ist mit keiner SIM-Karte verknüpft.
* Das Gerät ist zwar mit einer SIM-Karte verknüpft, doch die Karte wird nicht durch das entsprechende SIM-Anbieter-Konto verwaltet.

Um Berechtigungen zuzuweisen, navigieren Sie zur Anwendung Administration und vergewissern Sie sich, dass Ihrem Benutzer eine Rolle mit LESEN- oder ADMIN-Berechtigung für Connectivity zugewiesen ist.

<img src="/images/benutzerhandbuch/connectivity/connectivity-permissions.png" alt="Connectivity permission settings"  style="max-width: 80%">

Jasper und Comarch identifizieren SIM-Karten über ihre ICCID (Integrated Circuit Card Identifier). Ericsson verwendet stattdessen eine MSISDN (Mobile Station International Subscriber Directory Number). In den meisten Fällen melden die Geräte die ICCID und die MSISDN Ihrer SIM-Karte automatisch an Cumulocity IoT.

Falls die ICCID nicht automatisch angezeigt wird, überprüfen Sie Folgendes:

* Ermitteln Sie die ICCID der SIM-Karte. Sie ist auf die SIM-Karte aufgedruckt und wird im Control Center angezeigt.
* Geben Sie die ICCID in der Registerkarte **Info** ein und klicken Sie dann auf **Speichern**.
* Klicken Sie in der oberen Menüleiste auf **Neu laden**, damit die Registerkarte **Connectivity** erscheint.

> Beachten Sie, dass es einige Sekunden dauern kann, bis die Registerkarte bei einem Gerät zum ersten Mal erscheint, da Cumulocity IoT überprüft, ob die jeweilige SIM-Karte durch den SIM-Anbieter verwaltet wird.

### <a name="jasperinfo"></a>Registerkarte "Connectivity"

In der Registerkarte **Connectivity** finden Sie folgende Abschnitte:

* Status
* SMS
* Sitzungen
* Audit-Logs

![Connectivity tab](/images/benutzerhandbuch/connectivity/connectivity-tab.png)

>**Info:** Einige Abschnitte werden eventuell nicht angezeigt oder sind leer. Wenn beispielsweise keine SMS gesendet wurden und Sie keine Berechtigung zum Senden von SMS haben, wird der SMS-Abschnitt nicht angezeigt.

Im Abschnitt **Status** werden zusammenfassende Informationen zur SIM-Karte aufgeführt.

![Status section](/images/benutzerhandbuch/connectivity/connectivity-status.png)

Die erste Zeile gibt Auskunft darüber, ob das Gerät momentan eine Datensitzung durchführt. Ist dies der Fall, werden der Beginn der Sitzung und die aktuelle WAN-IP-Adresse des Geräts angezeigt.

Die zweite Zeile zeigt weitere Statusinformationen an: die ICCID der SIM-Karte, den Aktivierungszustand der SIM-Karte und, sofern eingestellt, die festgelegte IP-Adresse der SIM-Karte. Sofern Sie über eine ADMIN-Berechtigung für Connectivity verfügen, können Sie den Aktivierungszustand über das Auswahlmenü ändern.

Am unteren Ende finden Sie Nutzungsinformationen für den aktuellen Monat, d. h. vom ersten Tag des Monats bis heute. Durch Bewegen der Maus über den Tooltip wird der abgedeckte Zeitraum angezeigt, einschließlich der Nutzung im Vormonat.

Der Abschnitt **SMS** zeigt die Textnachrichten an, die an das Gerät gesendet und von diesem empfangen wurden, einschließlich

* Sende- bzw. Empfangszeitpunkt der Nachricht
* Absender und Empfänger der Nachricht
* Zustellungsstatus der Nachricht:
 * Für Nachrichten an das Gerät: "Ausstehend", wenn die Nachricht vom Gerät nicht empfangen wurde, oder "Übergeben", wenn sie vom Gerät empfangen wurde.
 * Für Nachrichten vom Gerät: "Empfangen", wenn die Nachricht vom SIM-Anbieter empfangen wurde, oder "Abgebrochen", wenn sie noch nicht vom SIM-Anbieter empfangen wurde.
* Senderichtung der Nachricht: MT ("Mobile terminated"), wenn sie an das Gerät gesendet wurde, oder MO ("Mobile originated"), wenn sie vom Gerät kam.

Sofern Sie über eine ADMIN-Berechtigung für Connectivity verfügen, können Sie auch Textnachrichten an das Gerät senden, indem Sie den Text eingeben und auf **SMS senden** klicken.

![SMS section](/images/benutzerhandbuch/connectivity/connectivity-jaspersms.png)

Im Abschnitt **Sitzungen** werden die Logdaten der vom Gerät durchgeführten Datensitzungen angezeigt. Hier wird aufgeführt, wann die Sitzung begann, wie lange sie dauerte und wie viel Datenverkehr verbraucht wurde.

![Sessions section](/images/benutzerhandbuch/connectivity/connectivity-sessions.png)

Im Abschnitt **Audit-Logs** werden alle Änderungen an der SIM-Karte und ihrem Tarif aufgeführt. Angezeigt werden die Art der Änderung, alter und neuer Wert, wann die Änderung durch wen erfolgte und ob die Änderung erfolgreich war.

![Audit logs section](/images/benutzerhandbuch/connectivity/connectivity-jasperaudits.png)

Die Registerkarte **Connectivity** wird nicht in Echtzeit aktualisiert. Um aktuelle Daten anzuzeigen, klicken Sie in der oberen Menüleiste auf **Neu laden**.


### <a name="managing"></a>Überprüfen der Konnektivität

Wenn Sie den Verdacht haben, dass ein Gerät nicht die korrekten Daten an Cumulocity IoT meldet oder keine Kommandos empfängt, können Sie den Konnektivitätsstatus des Geräts überprüfen.

Prüfen Sie in der Registerkarte **Connectivity**, ob

* die SIM aktiviert ist. Ist die SIM-Karte nicht aktiviert, können Sie sie aktivieren, indem Sie "Aktiviert" aus dem Status-Auswahlmenü wählen. <br> ![Activate SIM card](/images/benutzerhandbuch/connectivity/connectivity-status-activate.png) <br> Es kann eine Weile dauern, bis die SIM-Karte im Netzwerk aktiviert ist. Unter Umständen ist ein Reset des Geräts notwendig, damit es sich wieder in das Netzwerk einwählt.
* das Gerät mit dem Netzwerk verbunden ist. Falls sich das Gerät nicht mit dem Netzwerk verbindet, kann dies mehrere Ursachen haben:
 * Das Gerät befindet sich an einem Ort ohne Mobilfunkabdeckung. Falls das Gerät Netzwerk-Qualitätsparameter meldet, können Sie zur [Registerkarte **Messwerte**](/benutzerhandbuch/device-management-de#measurements) des Geräts navigieren und die zuletzt gemeldeten Signalstärke- und Fehlerraten-Parameter überprüfen.
 * Es liegt ein Netzwerk- oder Hardwareproblem (Antenne, Modem) vor. Klicken Sie zum Beispiel für das Jasper Control Center rechts oben auf das Zahnrad-Symbol, wählen Sie **SIM-Details** und öffnen Sie dann das Diagnose-Tool des Jasper Control Center. Sollte das Gerät nicht versuchen, sich mit dem Netzwerk zu verbinden, ist es möglicherweise defekt.
* Das Gerät befindet sich in einer Datensitzung. Befindet es sich nicht in einer Datensitzung, kann dies wiederum mehrere Ursachen haben:
 * Die APN-Einstellungen sind im Gerät falsch konfiguriert.
 * Die SIM-Karte hat den verfügbaren Datenverkehr überschritten.
 * Daten-Roaming ist am Gerät deaktiviert und das Gerät befindet sich nicht im Heimatnetzwerk der SIM-Karte.
 * Daten-Roaming für das jeweilige Netzwerk ist nicht im Funktionsumfang der SIM-Karte enthalten.
 * Die SIM-Konfiguration wurde geändert.

Die Datenkonnektivität kann an verschiedenen Stellen analysiert werden:

* Wenn das Gerät seine Netzwerkkonfiguration meldet, navigieren Sie zur Registerkarte **Netzwerk**. Überprüfen Sie die APN-Einstellungen und bearbeiten Sie sie gegebenenfalls.
* Wenn das Gerät die Shell-Funktion unterstützt, navigieren Sie zur [Registerkarte **Shell**](/benutzerhandbuch/device-management-de/#shell). Überprüfen Sie die APN-Einstellungen und die Roaming-Konfiguration und bearbeiten Sie sie gegebenenfalls.
* Überprüfen Sie im Abschnitt **Sitzungen** der Registerkarte **Connectivity**, ob das Gerät früher kommuniziert hat und wie viel Datenverkehr verbraucht wurde.
* Überprüfen Sie im Abschnitt **Audit-Logs** der Registerkarte **Connectivity**, ob in letzter Zeit Änderungen an der SIM-Karte vorgenommen wurden.
* Klicken Sie zum Schluss rechts oben auf das Zahnrad und wählen Sie **SIM-Details**, um zur SIM-Konfiguration im Jasper Control Center zu gelangen.

> Beim Menüelement **SIM-Details** sind Anmeldedaten für das Jasper Control Center erforderlich. Diese Anmeldedaten werden Ihnen von Ihrem Administrator unabhängig bereitgestellt.

Wenn das Gerät noch immer nichts an Cumulocity IoT meldet, liegt möglicherweise ein Konfigurations- oder Softwareproblem am Gerät vor.

* Das Gerät hat möglicherweise seine Zugangsdaten verloren, beispielsweise durch ein Reset auf die Werkseinstellungen oder durch einen kompletten Stromausfall. In diesem Fall können Sie das [Gerät neu registrieren](/benutzerhandbuch/device-management-de/#connecting-devices).
* Es könnte ein Konfigurations- oder Softwareproblem am Gerät vorliegen, das gerätespezifisch analysiert werden muss.
