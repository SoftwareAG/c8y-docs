---
weight: 50
title: Supportbenutzerzugriff
layout: redirect
---

Mit der Funktion "Supportbenutzerzugriff" können sich Supportbenutzer, d. h. Benutzer des Management-Mandanten mit spezifischen Berechtigungen, bei Konten von Benutzern anderer Untermandanten anmelden, um bei Problemen Hilfe zu leisten.

Hierzu muss der Supportbenutzerzugriff aktiviert sein. Dies kann global auf Plattform-Ebene oder auf Benutzerebene erfolgen, wie unten beschrieben.


### <a name="configuring-support-access"></a>Konfigurieren von Supportbenutzerzugriff

Supportbenutzerzugriff kann auf verschiedenen Ebenen aktiviert werden.

**Plattform-Ebene**

Der Management-Mandant kann den Supportbenutzerzugriff für alle Untermandanten auf Plattform-Ebene aktivieren. Dies erfolgt auf der Seite **Konfiguration**, siehe [Anpassen der Plattform](/benutzerhandbuch/enterprise-edition-de#customization).

Wenn Supportbenutzerzugriff aktiviert ist, können sich Supportbenutzer bei jedem Untermandanten als beliebiger Benutzer anmelden, sofern dies nicht auf Untermandanten-Ebene außer Kraft gesetzt ist. Untermandanten-Benutzer können den Zugriff nicht selbst deaktivieren. Wenn Supportbenutzerzugriff deaktiviert ist, können sich Supportbenutzer nur bei Untermandanten anmelden, für die mindestens ein Benutzer diesen Zugriff explizit ermöglicht hat, siehe folgende Beschreibung.

**Untermandanten-/Benutzerebene**

Wenn Supportbenutzerzugriff auf der Plattform-Ebene deaktiviert ist, kann er immer noch durch einen Untermandanten-Benutzer aktiviert werden. Dies erfolgt durch Klicken auf **Support aktivieren** im Menü **Benutzer**, siehe [Erste Schritte > Benutzeroptionen und -einstellungen](/benutzerhandbuch/getting-started-de/#user-settings).

Der Supportzugriff ist dann nicht auf den Benutzer beschränkt, der ihn aktiviert hat, sondern gilt für alle Benutzer des Untermandanten. Dies ist notwendig, um Probleme mit Rollen/Rechten nachvollziehen zu können.

Nachdem ein Benutzer den Supportzugriff aktiviert hat, ändert sich der Menüpunkt auf **Support deaktivieren**, so dass der Benutzer eine ausstehende Supportanfrage deaktivieren kann, die sich erübrigt hat, bevor sie abläuft.

> **Info:** Wenn ein Benutzer mit Mandanten-Admin-Berechtigungen die Supportanfrage deaktiviert, werden *alle* Supportanfragen für den Mandanten deaktiviert.

Die Dauer der aktiven Supportanfrage ist auf Plattform-Ebene konfigurierbar (der Standardwert ist 24 Stunden), siehe [Anpassen der Plattform](/benutzerhandbuch/enterprise-edition-de#customization).

Jede neue Supportanfrage verlängert die Supportdauer um die angegebene Anzahl von Stunden. Nachdem die letzte Supportanfrage in einem Untermandanten abgelaufen ist oder vom Benutzer aktiv deaktiviert wurde, wird der Supportbenutzerzugriff für den Untermandanten sofort deaktiviert (sofern er nicht global aktiviert ist).

Details zum Status von Supportanfragen und Supportbenutzerzugriff für einen Mandanten finden Sie in der Registerkarte **Attribute** des Mandanten, siehe [Verwalten von Mandanten](/benutzerhandbuch/enterprise-edition-de#managing-tenants).

### Konfigurieren von Supportbenutzern

Es gibt zwei verschiedene Einstellungen für Supportbenutzer in Cumulocity IoT:

- Ein Service Provider konfiguriert bestimmte Berechtigungen für Benutzer des Management-Mandanten, die diesen ermöglichen, Support zu leisten.
- Benutzer eines Mandanten fragen Support an und erteilen so Benutzern des Management-Mandanten Zugriff.

> **Info:** Die Supportbenutzer-Funktion funktioniert nicht, wenn der Supportbenutzer Zwei-Faktor-Authentifizierung aktiviert, aber keine Telefonnummer hinterlegt hat. Die Telefonnummer muss zunächst hinterlegt werden, um sich als Supportbenutzer einloggen zu können.

**Berechtigung über den Management-Mandanten**

Damit ein Benutzer des Management-Mandanten für Benutzer in anderen Mandanten Support leisten kann, müssen Sie dem Benutzer entweder die globale Rolle "Support" oder die Stammdatenrolle "Support" (jeweils LESEN und AKTUALISIEREN) zuweisen.

Mit der Stammdatenrolle "Support" können Sie einzelnen Benutzern selektiv Support zuweisen. Erstellen Sie eine Gruppe der Mandanten, die der Benutzer unterstützen soll, und weisen Sie dann die Stammdatenrolle dem Benutzer und der Gruppe zu, wie unter [Administration > Verwalten von Berechtigungen > Zuweisen von Stammdatenrollen](/benutzerhandbuch/administration-de#attach-inventory) beschrieben.

**Vom Benutzer erteilte Berechtigung**

Benutzer können Support anfragen und einem Benutzer des Management-Mandanten erlauben, sich an ihrem Konto anzumelden. Klicken Sie hierzu auf die Schaltfläche **Benutzer** rechts in der oberen Leiste und wählen Sie im Kontextmenü **Supportbenutzer aktivieren**. Weitere Informationen finden Sie unter [Erste Schritte > Benutzeroptionen und -einstellungen](/benutzerhandbuch/getting-started-de/#user-settings).


### So melden Sie sich als Supportbenutzer an

Um sich vom Management-Mandanten aus als Supportbenutzer anzumelden, verwenden Sie folgende Form der Anmeldung:

	<tenant id>/<support user>$<user>


* `Mandanten-ID (tenant id)` ist die Mandanten-ID des zu unterstützenden Benutzers. Die Mandanten-ID wird im Benutzer-Auswahlmenü der Benutzeroberfläche angezeigt.
* `Supportbenutzer (support user)` ist der Benutzername des Management-Mandant-Benutzers, der den Support leistet.
* `Benutzer (user)` ist der Benutzername des unterstützten Benutzers.

**Beispiel**

Angenommen, Sie erhalten einen Supportanruf von einem Benutzer "John" im Mandanten *testtenant.cumulocity.com* (mit der ID *t07007007*). Der Benutzer kann eine bestimmte Funktion nicht verwenden und Sie vermuten, dass es sich um ein Berechtigungsproblem handelt. Ihr Benutzername im Management-Mandanten ist "Jill" und Sie haben die Berechtigung, Support für *testtenant.cumulocity.com* zu leisten. In diesem Fall können Sie sich mit dem folgenden Kommando anmelden, um zu reproduzieren, was John sieht:

	t07007007/Jill$John


In manchen Umgebungen, insbesondere in Testumgebungen, können Sie einfach die Zielmandanten-URL (z. B. *testtenant.cumulocity.com*) aufrufen und sich mit Folgendem beim Mandanten anmelden:

	<support user>$<user>

Alternativ können Sie

```
<support user>$
```

verwenden, um mit einem der Administrationsbenutzer auf den Mandanten zuzugreifen.

Audit-Logs werden für jeden Zugriff eines Supportbenutzers erstellt sowie für jede ausgeführte Aktion. In der Spalte "Wer?" wird der Name des Autors folgendermaßen angezeigt: "support_user$user".
