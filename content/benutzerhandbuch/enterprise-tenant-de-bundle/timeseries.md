---
weight: 120
title: Erweiterter Support für Zeitreihen
layout: redirect
aliases:
  - /benutzerhandbuch/enterprise-tenant-de/#timeseries
---

Der {{< product-c8y-iot >}} Betriebsspeicher bietet erweiterten Support für Zeitreihen (sogenannte Zeitreihensammlungen) für Messdaten. Im Folgenden wird beschrieben, wie sich diese Funktion aktivieren/deaktivieren lässt.

{{< c8y-admon-info >}}
Der erweiterte Support für Zeitreihen kann bei neuen Mandanten eventuell standardmäßig durch einen {{< product-c8y-iot >}}-Administrator aktiviert sein.
{{< /c8y-admon-info >}}

### Konfigurieren

Der erweiterte Support für Zeitreihen kann über eine REST API als Mandantenkonfiguration konfiguriert werden.
Das folgende Beispiel zeigt, wie Sie Zeitreihensammlungen für einen Untermandanten **aktivieren** können:

```http request
POST {sub-tenant-url}/tenant/options
Content-Type: application/json
{
    "category": "configuration",
    "key": "timeseries.mongodb.collections.mode",
    "value": "ENABLED"
}
```

Das folgende Beispiel zeigt, wie Sie Zeitreihensammlungen für einen Untermandanten **deaktivieren** können:

```http request
POST {sub-tenant-url}/tenant/options
Content-Type: application/json
{
    "category": "configuration",
    "key": "timeseries.mongodb.collections.mode",
    "value": "DISABLED"
}
```
{{< c8y-admon-info >}}
Mandantenoptionen sind nicht vom übergeordneten Mandanten vererbbar, das Aktivieren der Eigenschaft beim Enterprise Tenant wirkt sich also nicht auf die Untermandanten aus.
{{< /c8y-admon-info >}}

### Auswirkungen der Konfiguration

Die Konfiguration wirkt sich auf die Sammlung aus, in der die Messdaten gespeichert sind.
Durch Aktivieren oder Deaktivieren des Attributs werden Sammlungen im Hintergrund gewechselt.
Dies kann unter Umständen dazu führen, dass die Daten in mehreren Sammlungen gespeichert werden.
Um dies zu verhindern, konfigurieren Sie das Attribut nur zu Beginn einer Mandanten-Einstellung, idealerweise, wenn noch keine Messdaten gespeichert sind.
Migration und nahtlose Konfiguration werden Bestandteile zukünftiger Versionen sein.

{{< c8y-admon-caution title="Vorsicht" >}}
Nachdem Sie das Attribut aktiviert haben, sollten Sie vermeiden, es wieder auf `DEAKTIVIERT` zu setzen, da dies zu Datenverlusten führen kann. Tun Sie dies nur bei einem Problem oder Notfall.
{{< /c8y-admon-caution >}}

### Nicht unterstützte APIs

Die folgenden APIs werden nicht unterstützt und es gibt keinen Ersatz für sie:

* `GET /measurement/measurements/{id}`
* `DEL /measurements/measurement/{id}`

Die folgende API wird teilweise unterstützt:

* `DEL /measurements/measurement/`

In Version 10.16 werden die Parameter `dateFrom` und `dateTo` nicht unterstützt. Verwenden Sie stattdessen Datenhaltungsregeln, um abgelaufene Messdaten aus dem Betriebsspeicher zu entfernen.

In 10.17+ müssen die Parameter `dateFrom` und `dateTo` auf volle Stunden gekürzt werden (z. B. `2022-08-19T14:00:00.000Z`), andernfalls wird ein Fehler gemeldet.

### Überprüfen, ob Zeitreihensammlungen aktiviert sind

Mit der folgenden Anfrage können Sie den Wert des Attributs für Zeitreihensammlungen überprüfen:

```http request
GET /tenant/options/configuration/timeseries.mongodb.collections.mode
Content-Type: application/json
```

Beispiel für eine Antwort, wenn die Konfiguration aktiviert ist:

```JSON
{
"category": "configuration",
"key": "timeseries.mongodb.collections.mode",
"value": "ENABLED"
}
```

Wenn die Konfiguration für den Mandanten überhaupt nicht festgelegt ist, wird bei der oben genannten Anfrage der Antwortcode 404 erzeugt.