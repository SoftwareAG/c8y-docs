---
title: Arbeiten mit Dashboards
weight: 40
---

Dashboards ermöglichen eine individuelle Visualisierung Ihrer Daten anhand verschiedener Widgets. Widgets können Karten, Bilder, Graphen, Tabellen und andere grafische Darstellungen von Daten anzeigen.

{{< c8y-admon-req title="Anforderungen" >}}
ROLLEN UND BERECHTIGUNGEN:

- Zum Anzeigen von Dashboards: LESEN-Berechtigung für Berechtigungstyp "Stammdaten" oder LESEN-Berechtigung für "Stammdaten" in Stammdatenrollen
- Zum Bearbeiten von Widgets innerhalb eines Dashboards: ADMIN-Berechtigung für Berechtigungstyp "Stammdaten" oder ÄNDERN-Berechtigung für "Stammdaten" in Stammdatenrollen
- Zum Erstellen eines Dashboards: ERSTELLEN- oder ADMIN-Berechtigung für Berechtigungstyp "Stammdaten" oder ÄNDERN-Berechtigung für "Stammdaten" in Stammdatenrollen
- Zum Löschen eines Dashboards: ADMIN-Berechtigung für Berechtigungstyp "Stammdaten" oder ÄNDERN-Berechtigung für "Stammdaten" in Stammdatenrollen
- Zum Teilen/Kopieren eines Dashboards: CREATE-Berechtigung für Berechtigungstyp "Stammdaten" oder ÄNDERN-Berechtigung für "Stammdaten" in Stammdatenrollen
  {{< /c8y-admon-req >}}

{{< product-c8y-iot >}} bietet eine Reihe voreingestellter Widgets, Details finden Sie im Abschnitt [Widgets-Sammlung](#widgets-collection). Sie können auch eigene Widgets entwickeln und Ihrem {{< product-c8y-iot >}}-Konto hinzufügen. Weitere Informationen finden Sie im [Web SDK Guide](/web/).

<a name="creating-dashboards"></a>

### So erstellen Sie ein Dashboard

1. Wählen Sie im Navigator das Objekt (Gruppe oder Gerät) aus, für welches Sie ein Dashboard erstellen möchten.
2. Klicken Sie auf das Pluszeichen rechts neben den Registerkarten, um den Dashboard-Editor zu öffnen.

3. Geben Sie im Abschnitt **Registerkarte** des Dashboard-Editors folgende Informationen ein:

    * ein Symbol, das neben dem Dashboard-Namen im Navigator erscheint.
    * einen Namen für das Dashboard, der auch im Navigator angezeigt wird.
    * Die Position des Dashboards im Navigator. "10000" erscheint an oberster und "-10000" an unterster Position.
<br><br>

4. Aktivieren Sie die Option **Dashboard auf alle Geräte des Typs <Gerätetyp> anwenden**, um das Dashboard mit allen Geräten dieses Typs zu teilen.

5. Legen Sie im Abschnitt **Verfügbarkeit** auf Basis globaler Rollen fest, welche Benutzer Zugriff auf das Dashboard haben sollen. Standardmäßig sind alle globalen Rollen ausgewählt, d. h. ein Benutzer mit mindestens einer solchen Rolle hat Zugriff auf das Dashboard.

   {{< c8y-admon-info >}}
- Dashboards sind immer sichtbar für ihren Besitzer und für Benutzer mit ADMIN-Berechtigung für den Berechtigungstyp "Stammdaten".
- Dies Funktionalität basiert vollständig auf Client-seitigen Lösungen. Wenn Benutzer einen korrekten Link zum Dashboard haben, können sie immer noch darauf zugreifen.
    {{< /c8y-admon-info >}}

6. Im Abschnitt **Layout** können Sie ein Design für das Dashboard wählen ("Hell", "Dunkel", "Transparent" oder "Branding") und einen Standardstil für die Kopfzeile der Widgets ("Standard", "Rand", "Overlay", oder "Verborgen"). Außerdem können Sie die Einstellung für den Rand der Widgets festlegen (Standwert ist 15 px).
7. Aktivieren Sie die Option **Widget-Titel übersetzen, wenn möglich**, um den Widget-Titel bei jeder Änderung der Sprache übersetzen zu lassen.

    {{< c8y-admon-info >}}
Die Widget-Titel werden nur übersetzt, wenn eine gültige Übersetzung verfügbar ist.
    {{< /c8y-admon-info >}}
8. Im Abschnitt **Vorschau** wird sofort eine Vorschau der ausgewählten Layout-Einstellungen angezeigt, um Ihre Einstellungen zu visualisieren.

9. Klicken Sie auf **Speichern** um das Dashboard zu erstellen und zu öffnen.

<br>Als nächstes können Sie Widgets zu Ihrem Bericht hinzufügen.

Nähere Informationen zum Hinzufügen, Ändern oder Entfernen von Widgets finden Sie unter [Verwenden von Widgets in Dashboards und Berichten](#using-widgets).

<a name="sharing-dashboards"></a>
### Teilen von Dashboards

Sie können ein Dashboard für ein bestimmtes Gerät erstellen und auf alle Geräte des gleichen Typs anwenden. Dies ist jedoch nur möglich, wenn das Typ-Attribut für das Gerät gesetzt ist.

Wählen Sie dazu die Option **Dashboard auf alle Geräte des Typs [TYP] anwenden** im Dashboard-Editor. [TYP] zeigt den Typ des Geräts an, das gerade ausgewählt ist.

Im Editor wird eine entsprechende Nachricht angezeigt.

<img src="/images/benutzerhandbuch/cockpit/cockpit-dashboard-share.png" name="Shared dashboard"/>

An diesem Dashboard vorgenommene Änderungen werden automatisch auf alle Dashboard-Instanzen angewendet.

{{< c8y-admon-info >}}
Sie können nur für das Gerät selbst Widgets und Daten zum Dashboard hinzufügen. Es ist nicht möglich, Daten von Kindgeräten hinzuzufügen, da die Struktur dieser Geräte von Gerät zu Gerät unterschiedlich sein kann.
{{< /c8y-admon-info >}}

### So bearbeiten Sie ein Dashboard

Klicken Sie auf **Bearbeiten** in der oberen Menüleiste, um ein Dashboard zu bearbeiten.

Der Dashboard-Editor wird angezeigt. Detaillierte Informationen zu den einzelnen Feldern finden Sie unter [So erstellen Sie ein Dashboard](#creating-dashboards).

### So kopieren Sie ein Dashboard von einem Objekt in ein anderes

1. Klicken Sie auf **Mehr...** in der oberen Menüleiste und wählen Sie im Kontextmenü **Dashboard kopieren**.

2. Navigieren Sie zu dem Objekt, in welches Sie das Dashboard kopieren möchten und wählen Sie im Kontextmenü **Dashboard [NAME] einfügen**, um das Dashboard einzufügen.

Eine alternative Methode zum Kopieren eines Dashboards ist das
Konzept "Dashboard pro Typ". Mit dem Konzept "Dashboard pro Typ" teilen Sie das Dashboard eines Objekts mit **allen** Objekten desselben Typs, siehe [Teilen von Dashboards](#sharing-dashboards).


### So löschen Sie ein Dashboard

Klicken Sie auf **Mehr...** in der oberen Menüleiste und wählen Sie im Kontextmenü **Dashboard löschen**, um ein Dashboard aus einem Objekt zu löschen.