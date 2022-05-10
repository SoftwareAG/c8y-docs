---
weight: 80
title: Plattform-Konfigurationseinstellungen
layout: redirect
---

<a name="config-platform"></a>

Vom {{< management-tenant-de >}} aus können Sie Attribute konfigurieren, die global für die gesamte {{< product-c8y-iot >}}-Bereitstellung gelten.

Klicken Sie auf **Konfiguration** im Menü **Einstellungen**, um die Seite **Konfiguration** aufzurufen.

![Configuration settings](/images/benutzerhandbuch/Administration/admin-settings-configuration.png)

Die meisten Einstellungen, die Sie hier konfigurieren können, sind auch im {{< enterprise-tenant-de >}} verfügbar. Weitere Informationen finden Sie unter [{{< enterprise-tenant-de >}} > Anpassen der Plattform](/benutzerhandbuch/enterprise-tenant-de/#customization).

Darüber hinaus können die folgenden Einstellungen nur im {{< management-tenant-de >}} konfiguriert werden.

### Passwörter

Im Bereich **Passwörter** können Sie Passworteinstellungen wie Standardstärke, Länge oder Gültigkeit für die Benutzer in Ihrem Mandanten festlegen.

![Passwords settings](/images/benutzerhandbuch/enterprise-tenant/et-settings-configuration-passwords.png)

Aktivieren Sie die Checkbox **Nur starke "grüne" Passwörter für alle Benutzer zulassen**, um die Benutzer in Ihrem Mandanten zur Verwendung von Passwörtern zu zwingen, die die Bedingungen für "grüne" Passwörter erfüllen, siehe auch [Erste Schritte > Benutzeroptionen und -einstellungen](/benutzerhandbuch/getting-started-de/#user-settings).

* **Gültigkeitsdauer von Passwörtern in Tagen** - Die Anzahl der Tage, die ein Passwort gültig sein kann, bevor es zurückgesetzt werden muss; der Mindestwert ist "0", der Höchstwert "999999". Leer lassen, um den Wert aus den Mandantenoptionen zu übernehmen, die im {{< management-tenant-de >}}en konfiguriert sind, siehe *{{< product-c8y-iot >}} Core - Operations guide*.
* **Größe der Passworthistorie** - Anzahl der Male, bis das aktuelle Passwort wiederverwendet werden kann.  Der Mindestwert beträgt "0", der voreingestellte Wert ist "10".  
* **Minimale Länge** - Die Mindestanzahl an Zeichen, die für ein sicheres Passwort erforderlich sind. Der Mindestwert (und der voreingestellte Wert) beträgt "8", der Höchstwert ist "32". Leer lassen, um diese Bedingung zu überspringen.


<a name="config-support-users"></a>
### Supportbenutzer

Im Bereich **Supportbenutzer** konfigurieren Sie die Parameter für den Supportbenutzerzugriff für Untermandanten-Benutzer.

Diese Funktion gibt den Anbietern der {{< product-c8y-iot >}}-Plattform (im Falle von Public-Cloud-Instanzen die {{< company-sag >}} und bei lokalen Installationen der jeweilige Service-Provider) die Möglichkeit, ihre Kunden zu unterstützen, indem sie über einen Supportbenutzer auf deren Benutzer zugreifen. Ein Supportbenutzer ist ein Benutzer im {{< management-tenant-de >}} mit spezifischen Berechtigungen, nämlich für den Zugriff auf Untermandanten-Benutzer im Falle von Problemen. Weitere Informationen finden Sie unter [Supportbenutzerzugriff](/benutzerhandbuch/enterprise-tenant-de/#support-user-access).

<img src="/images/benutzerhandbuch/enterprise-tenant/et-settings-configuration-support-user.png" alt="Support user configuration">

Legen Sie im Feld **Supportbenutzer aktivieren** fest, ob der Supportbenutzerzugriff für Untermandanten-Benutzer aktiviert sein soll. Hier sind folgende Werte möglich:

* *true*: Supportbenutzerzugriff ist standardmäßig für alle Untermandanten aktiviert. Ein Supportbenutzer kann sich bei jedem Untermandanten als beliebiger Benutzer anmelden. Beachten Sie, dass Untermandanten-Benutzer den Zugriff nicht selbst deaktivieren können.
* *false*: Supportbenutzerzugriff ist für alle Untermandanten deaktiviert, kann aber für einen Untermandanten explizit aktiviert werden. Ein Supportbenutzer kann sich nur bei Untermandanten anmelden, für die mindestens ein Benutzer diesen Zugriff explizit ermöglicht hat.
* Ein explizites Datum im Datum-Uhrzeit-Format, bis zu dem der Supportbenutzerzugriff aktiviert bleiben soll. Wenn kein Datum festgelegt wird, wird der Wert auf "Unbegrenzt" gesetzt.

Im Feld **Gültigkeitsdauer** können Sie optional die Supportdauer angeben, d. h. um wie viele Stunden der Supportbenutzerzugriff nach einer Supportbenutzeranfrage verlängert wird. Geben Sie die Anzahl der Stunden ein. Der Standardwert ist 24 Stunden.

Ablaufdatum und -uhrzeit werden anhand der im Feld **Gültigkeitsdauer** angegebenen Dauer aktualisiert. Beispiel: Wenn das aktuelle Ablaufdatum 01/09/2018 15:00 lautet und die Dauer von 24 Stunden beibehalten wurde, aktualisiert der aktivierende Supportbenutzer das Ablaufdatum auf 01/10/2018 15:00.

Details zum Status von Supportanfragen und Supportbenutzerzugriff für einen Mandanten finden Sie in der Registerkarte **Attribute** des Mandanten, siehe [{{< enterprise-tenant-de >}}> Verwalten von Mandanten](/benutzerhandbuch/enterprise-tenant-de/#managing-tenants).

<a name="configuring-support-users"></a>
#### Konfigurieren eines Supportbenutzers

Ein Supportbenutzer ist ein Benutzer im {{< management-tenant-de >}} mit spezifischen Berechtigungen. Dieser Benutzer kann sich beim Zielmandanten anmelden und sich als Zielbenutzer ausgeben.

Um einen Benutzer im {{< management-tenant-de >}} als Supportbenutzer zu konfigurieren, müssen Sie dem Benutzer die entsprechenden Rollen zuweisen. Dies kann entweder durch Verwendung einer globalen Rolle oder durch Verwendung von Stammdatenrollen erfolgen.  

**Verwendung einer globalen Rolle**

1. Erstellen Sie eine Rolle "Support" mit der Berechtigung "Support READ" und "Support ADMIN".
2. Weisen Sie die Rolle "Support" dem entsprechenden Benutzer zu und entfernen Sie alle anderen Rollen für den Benutzer.

**Verwendung von Stammdatenrollen**

Mit Stammdatenrollen können Sie einen Supportbenutzer selektiv spezifischen Untermandanten zuweisen.

1. Erstellen Sie eine Stammdatenrolle namens "Support" mit Typ = "*" und Berechtigung = "Alle".
2. Erstellen Sie eine Gruppe aller Untermandanten, die vom Benutzer unterstützt werden sollen.
3. Weisen Sie die Stammdatenrolle "Support" der oben genannten Gruppe zu, wie unter [Administration > Verwalten von Berechtigungen > Zuweisen von Stammdatenrollen zu Benutzern](/benutzerhandbuch/administration-de#attach-inventory) beschrieben.

> **Info:** Die Supportbenutzer-Funktion funktioniert nicht, wenn der Supportbenutzer Zwei-Faktor-Authentifizierung aktiviert, aber keine Telefonnummer hinterlegt hat. Die Telefonnummer muss zunächst hinterlegt werden, um sich als Supportbenutzer einloggen zu können.
