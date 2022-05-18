---
aliases:
- /benutzerhandbuch/enterprise-edition#users-in-other-tenants-de
layout: redirect
title: Supportbenutzerzugriff
weight: 50
---

Die Funktion "Supportbenutzerzugriff" gibt den Anbietern der {{< product-c8y-iot >}}-Plattform (im Falle von Public-Cloud-Instanzen die {{< company-sag >}} und im Falle von individuellen lokalen Installationen der jeweilige Service-Provider) die Möglichkeit, ihre Kunden zu unterstützen, indem sie über einen Supportbenutzer auf deren Benutzer zugreifen. Ein Supportbenutzer ist ein Benutzer im {{< management-tenant-de >}} mit spezifischen Berechtigungen, nämlich für den Zugriff auf Untermandanten-Benutzer im Falle von Problemen.

Zur Nutzung dieser Funktion muss Supportbenutzerzugriff konfiguriert sein und die erforderlichen Supportbenutzer müssen im {{< management-tenant-de >}} erstellt sein, siehe [Administration > Plattform-Konfigurationseinstellungen > Supportbenutzer](/benutzerhandbuch/administration-de/#config-support-users).

> **Info:** In den Public-Cloud-Instanzen von {{< product-c8y-iot >}} kann die Supportbenutzer-Funktionalität nur vom [{{< sag-support >}}](/welcome/contacting-support/)-Team zur Bereitstellung von Kundensupport verwendet werden. Sie ist nicht für {{< enterprise-tenant-de >}}-Kunden zur Unterstützung ihrer Kunden/Untermandanten verfügbar.

<a name="configuring-support-access"></a>
### Konfigurieren von Supportbenutzerzugriff

Supportbenutzerzugriff kann entweder

* standardmäßig für alle Untermandanten aktiviert sein oder
* für alle Untermandanten deaktiviert, aber von einem Benutzer für seinen Mandanten explizit eingeschaltet sein.

Dies wird global im *{{< management-tenant-de >}}* konfiguriert, siehe [Administration > Plattform-Konfigurationseinstellungen > Supportbenutzer](/benutzerhandbuch/administration-de/#config-support-users).


Bei globaler Aktivierung kann sich der Supportbenutzer bei allen zulässigen Untermandanten als beliebiger Benutzer uneingeschränkt anmelden.

Bei globaler Deaktivierung kann der Supportbenutzerzugriff bei Bedarf immer noch durch einen Untermandanten-Benutzer eingeschaltet werden. Dies erfolgt durch Klicken auf **Support aktivieren** im Menü **Benutzer**, siehe [Erste Schritte > Benutzeroptionen und -einstellungen](/benutzerhandbuch/getting-started-de/#user-settings). Der Supportzugriff ist nicht auf den Benutzer beschränkt, der ihn aktiviert hat, sondern gilt für alle Benutzer des Mandanten. Dies ist notwendig, um Probleme mit Rollen/Rechten nachvollziehen zu können.

Nachdem ein Benutzer den Supportzugriff aktiviert hat, ändert sich der Menüpunkt auf **Support deaktivieren**, so dass der Benutzer eine ausstehende Supportanfrage deaktivieren kann, die sich erübrigt hat, bevor sie abläuft.

> **Info:** Wenn die Schaltfläche **Support aktivieren** oder **Support deaktivieren** im Menü **Benutzer** nicht zu sehen ist, wurde der Supportbenutzerzugriff global aktiviert. Weitere Details erfragen Sie bitte beim [Produkt-Support](/welcome/contacting-support/).

> **Info:** Wenn ein Benutzer mit Mandanten-Admin-Berechtigungen die Supportanfrage deaktiviert, werden *alle* Supportanfragen für den Mandanten deaktiviert.

Die Dauer der aktiven Supportanfrage kann im {{< management-tenant-de >}} global konfiguriert werden (der Standardwert ist 24 Stunden), siehe [Administration > Plattform-Konfigurationseinstellungen](/benutzerhandbuch/administration-de/#platform-configuration-settings).

Jede neue Supportanfrage verlängert die Supportdauer um die angegebene Anzahl von Stunden. Nachdem die letzte Supportanfrage in einem Untermandanten abgelaufen ist oder vom Benutzer aktiv deaktiviert wurde, wird der Supportbenutzerzugriff für den Untermandanten sofort deaktiviert (sofern er nicht global aktiviert ist).

Details zum Status von Supportanfragen und Supportbenutzerzugriff für einen Mandanten finden Sie in der Registerkarte **Attribute** des Mandanten, siehe [Verwalten von Mandanten](/benutzerhandbuch/enterprise-tenant-de#managing-tenants).

### So melden Sie sich als Supportbenutzer an

Um sich vom {{< management-tenant-de >}} aus als Supportbenutzer anzumelden, müssen Sie im Login-Bildschirm folgende Informationen eingeben:

* Mandanten-ID: die Mandanten-ID des zu unterstützenden Benutzers. Die Mandanten-ID wird im Benutzer-Auswahlmenü der Benutzeroberfläche angezeigt. In manchen Umgebungen, insbesondere in Testumgebungen, können Sie die Zielmandanten-URL (z. B. *testtenant.{{< domain-c8y >}}*) aufrufen und sich ohne die Mandanten-ID beim Mandanten anmelden.
* Supportbenutzer: der Benutzername des {{< management-tenant-de >}}-Benutzers, der den Support leistet.
* Benutzer: der Benutzername des zu unterstützenden Benutzers.

"Supportbenutzer" und "Benutzer" sind in folgender Schreibweise in das Feld **Benutzername** einzugeben:

&#60;support user>&#36;&#60;user>

**Beispiel**

Nehmen wir an, Sie erhalten eine Supportanfrage von einem Benutzer "John" im Mandanten *testtenant.{{< domain-c8y >}}* (mit der Mandanten-ID *t07007007*). Ihr Benutzername im {{< management-tenant-de >}} ist "Jill" und Sie haben die Berechtigung, Support für *testtenant.{{< domain-c8y >}}* zu leisten. In diesem Fall können Sie sich mit den folgenden Zugangsdaten anmelden, um zu reproduzieren, was John sieht:

![Support user access login](/images/benutzerhandbuch/enterprise-tenant/et-support-user-access.png)

Alternativ können Sie "&#60;support user>&#36;" im Feld **Benutzername** eingeben, um mit einem der Administrationsbenutzer auf den Mandanten zuzugreifen.

Audit-Logs werden für jeden Zugriff eines Supportbenutzers erstellt sowie für jede ausgeführte Aktion. In der Spalte "Wer?" wird der Name des Autors folgendermaßen angezeigt: "support_user$user".