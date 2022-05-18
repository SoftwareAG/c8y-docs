---
weight: 90
layout: bundle
title: webMethods.io Integration
outputs:
- html
- json
aliases:
  -/users-guide/optional-services/#webMethods
---

webMethods.io Integration ist die cloudbasierte Integrationslösung der {{< company-sag >}}. Sie ermöglicht Ihnen Aufgaben zu automatisieren, indem Sie Cloud-Anwendungen und -Dienste (wie Marketo, Salesforce, Evernote und Gmail) verknüpfen, ohne Code schreiben zu müssen.

Die vollständige Dokumentation zur webMethods.io Integration finden Sie unter [https://docs.webmethods.io/](https://docs.webmethods.io/).

### Erste Schritte

>**Info:** Die unten beschriebene Benutzeroberfläche steht Ihnen nur zur Verfügung, wenn Ihr Mandant in der {{< sag-cloud >}} angelegt wurde. Sie können zwar webMethods.io verwenden, um {{< product-c8y-iot >}} in andere Anwendungen zu integrieren, der Application Switcher und die Single-Sign-On-Funktion werden Ihnen jedoch nicht angeboten.

Um die webMethods.io Integration zu abonnieren, gehen Sie folgendermaßen vor:

1. Melden Sie sich in der **{{< sag-cloud >}}** an der {{< product-c8y-iot >}}-Plattform an.

2. Wählen Sie **webMethods.io Integration** im Application Switcher.

![webMethods.io App Switcher Integration](/images/benutzerhandbuch/webMethods.io/wmio-appswitcher-integration.png)

>**Info:** Wenn das Symbol nicht verfügbar ist, haben Sie die **webMethods.io Integration** möglicherweise nicht abonniert. Wenn Sie sie abonnieren möchten, öffnen Sie den Application Switcher und klicken Sie auf **MyCloud**. Sie werden zum **{{< sag-cloud >}}**-Portal weitergeleitet, wo sie eine kostenlose Testversion abonnieren können.
<br><br>![webMethods.io App Switcher My Cloud](/images/benutzerhandbuch/webMethods.io/wmio-appswitcher-mycloud.png)

### Beispiele

Integrationen in webMethods.io werden "Workflows" genannt. Ein Workflow ist eine Verbindung zwischen zwei oder mehr Web-Anwendungen oder -Services. Es handelt sich dabei gewissermaßen um eine Reihe von Schritten, die zur Ausübung einer Aufgabe notwendig sind.

Im folgenden Beispiel wird ein Workflow durch einen Alarm in {{< product-c8y-iot >}} ausgelöst, ein Ticket in Zendesk erstellt und eine SMS versandt.

![webMethods.io Example Workflow](/images/benutzerhandbuch/webMethods.io/wmio-example1.png)

webMethods.io stellt Ihnen auch vorkonfigurierte Workflows zur Verfügung, die sogenannten "Recipes".

![webMethods.io Example Recipe](/images/benutzerhandbuch/webMethods.io/wmio-recipe-salesforce.png)

Weitere Beispiele und technische Anleitungen finden Sie auf der [{{< sag-dev-community >}}-Website](https://techcommunity.softwareag.com/en_en/webmethods-apis-integration-microservices.html).
