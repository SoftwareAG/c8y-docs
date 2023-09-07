---
weight: 100
title: Konfigurieren von Cockpit-Anwendungen
layout: redirect
---

{{< product-c8y-iot >}} bietet Ihnen die Möglichkeit, benutzerdefinierte Cockpit-Anwendungen nach Ihren eigenen Bedürfnissen zu konfigurieren.

{{< c8y-admon-req title="Anforderungen" >}}
Zur Verwendung der Cockpit-Konfiguration-Funktionalität müssen die folgenden Anforderungen erfüllt sein:

* Sie verfügen über eine ADMIN-Berechtigung für den Berechtigungstyp "Anwendungsverwaltung".

* Die Cockpit-Anwendung kann nur konfiguriert werden, wenn Sie im Besitz des Mandanten ist. Sie müssen also zuerst eine eigene Cockpit-Anwendung erstellen, indem Sie die vorhandene Cockpit-Anwendung duplizieren. Nähere Informationen zur Duplizierung einer Anwendung finden Sie unter [Verwalten von Anwendungen > Benutzerdefinierte Anwendung > So fügen Sie eine benutzerdefinierte Anwendung hinzu](/benutzerhandbuch/administration-de/#adding-applications).

Wenn diese Anforderungen erfüllt sind, wird im Menü **Konfiguration** des Navigators der benutzerdefinierten Cockpit-Anwendung der Eintrag **App-Konfiguration** angezeigt.
{{< /c8y-admon-req >}}

### So konfigurieren Sie eine benutzerdefinierte Cockpit-Anwendung

Klicken Sie im Navigator auf **App-Konfiguration** im Menü **Konfiguration**.

![App configuration](/images/benutzerhandbuch/cockpit/cockpit-app-configuration.png)

Auf der Seite **App-Konfiguration** können Sie verschiedene Aspekte Ihrer Cockpit-Anwendung individuell anpassen.

#### Funktionen

Im Abschnitt **Funktionen** können Sie bestimmte Funktionen wie etwa die globale Suche, Alarme oder den Daten-Explorer deaktivieren.

Standardmäßig sind alle Funktionen aktiviert. Verwenden Sie den Umschalter neben der jeweiligen Funktion, um diese zu deaktivieren. Das entsprechende Menüelement im Navigator (oder die entsprechende Schaltfläche wie im Falle der Globale-Suche-Schaltfläche) wird sofort entfernt und die Funktionalität ist erst wieder verfügbar, wenn sie erneut aktiviert wird.

#### Oberste Knoten

Unter **Oberste Knoten** können Sie wählen, welche Gruppen auf der obersten Ebene des Navigators angezeigt werden sollen. Standardmäßig wird nur der Eintrag **Gruppen** angezeigt (sofern er im Abschnitt **Funktionen** nicht deaktiviert wurde).

![Nodes configuration](/images/benutzerhandbuch/cockpit/cockpit-configuration-nodes.png)

Wählen Sie rechts die Haupt- oder Untergruppen aus, die als oberste Knoten im Navigator angezeigt werden sollen. Sobald eine Gruppe ausgewählt wurde, wird sie der benutzerdefinierten Liste der obersten Knoten hinzugefügt. Darüber hinaus können Sie die Knoten weiter konfigurieren, indem Sie die Anzeige der Geräte für eine bestimmte Gruppe aktivieren/deaktivieren. Bei Deaktivierung werden alle Geräte für diese Gruppe ausgeblendet, d. h. nicht im Navigator angezeigt.

#### Start-Dashboard

Im Abschnitt **Start-Dashboard** können Sie wählen, wie das Start-Dashboard, d. h. die Landing-Page für diese Anwendung, behandelt wird.

Zur individuellen Anpassung des Start-Dashboards können Sie eine der folgenden Optionen wählen:

* Es wird im gesamten Mandanten widergespiegelt (Standardwert).
* Es wird nur in der aktuellen benutzerdefinierten Anwendung widergespiegelt.
* Es wird nur im aktuellen Benutzer widergespiegelt. Beachten Sie, dass dieser Benutzer dann eine ERSTELLEN-Berechtigung für den Berechtigungstyp "Stammdaten" benötigt.

#### Sonstiges

Abschließend können Sie festlegen, ob der Navigator beim Start ausgeblendet sein soll. Standardmäßig wird der Navigator beim Start angezeigt.
