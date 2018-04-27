---
order: 21
title: Support für Benutzer in anderen Mandanten
layout: redirect
---

Supportbenutzer sind Benutzer im Management-Mandanten, die über die spezielle Berechtigung verfügen, sich als andere Benutzer des Mandanten anmelden zu können. Nehmen wir an, Sie erhalten eine Support-Anfrage von einem Benutzer "john" im Mandanten "acme.cumulocity.com". Der Benutzer kann eine bestimmte Funktion nicht verwenden und Sie vermuten, dass es sich um ein Berechtigungsproblem handelt. Ihr Benutzername im Management-Mandanten ist "jill" und Sie haben die Berechtigung, Support für "acme.cumulocity.com" zu leisten. In diesem Fall melden Sie sich auf "acme.cumulocity.com" mit dem Benutzernamen "jill&#36;john" und Ihrem Passwort für "jill" an. Nun können Sie reproduzieren, was "john" sieht.

### Konfigurieren von Supportbenutzern

Es gibt zwei verschiedene Einstellungen für Supportbenutzer in Cumulocity:

*   Ein Service Provider konfiguriert bestimmte Berechtigungen für Benutzer des Management-Mandanten, die Ihnen ermöglichen, Support zu leisten.
*   Benutzer eines Mandanten fragen Support an und erteilen so Benutzern des Management-Mandanten Zugriff.

> **Info:** Die Supportbenutzer-Funktion funktioniert nicht, wenn der Supportbenutzer Zwei-Faktor-Authentifizierung aktiviert, aber keine Telefonnummer hinterlegt hat. Die Telefonnummer muss zunächst hinterlegt werden, um sich als Supportbenutzer einloggen zu können.

**Berechtigung über den Management-Mandanten**

Damit ein Benutzer des Management-Mandanten für Benutzer in anderen Mandanten Support leisten kann, müssen Sie dem Benutzer entweder die globale Berechtigung "Support" oder die Stammdatenrolle "Support" (jeweils "Lesen" und "Ändern") zuweisen.

Über die Stammdatenrolle "Support" können Sie dediziert die Supportberechtigung für einzelne Benutzer zuweisen. Erstellen Sie eine Gruppen der Mandanten, denen der Benutzer Support geben soll und weisen Sie dem Benutzer und der Gruppe die Stammdatenrolle zu wie unter [Zuweisen von Stammdatenrollen](/guides/benutzerhandbuch/administration#attach-inventory) beschrieben.

**Vom Benutzer erteilte Berechtigung**

Benutzer können Support anfragen und einem Benutzer des Management-Mandanten erlauben, sich an ihrem Konto anzumelden. Klicken Sie auf die **Benutzer**-Schaltfläche rechts in der oberen Leiste und wählen Sie im Kontextmenü **Supportanfrage stellen**. Füllen Sie im folgenden Fenster das Formular aus.

<img src="/guides/images/benutzerhandbuch/ee-support-request.png" alt="Support ermöglichen" style="max-width: 50%">

### Melden Sie sich als Supportbenutzer an.

Verwenden Sie den folgenden Benutzernamen, um sich als Supportbenutzer anzumelden:

    <Supportbenutzer>$<Benutzer>

"Supportbenutzer" ist der Supportbenutzer im Management-Mandanten, der den Support ausführt. "user" ist der unterstützte Benutzer.

Alternativ können Sie

    <Supportbenutzer>$

verwenden.

In diesem Fall greift der Supportbenutzer über einen der Administrationsbenutzer auf den Mandanten zu.

> **Wichtig:** In vielen Umgebungen ist der Zugriff auf den Management-Mandanten eingeschränkt auf bestimmte Netzwerke oder Hosts oder kann nur über einen Tunnel ausgeführt werden. Wenn Sie sich mit der Supportbenutzer-Funktion anmelden, müssen Sie sicherstellen, dass Sie Zugriff auf den Management-Mandanten haben. Wenn Sie einen Tunnel verwenden, um auf den Management-Mandanten zuzugreifen, müssen Sie möglicherweise ein Login der Form `<Mandant><Supportbenutzer>$<Benutzer>` verwenden.

Audit-Logs werden für jeden Zugriff eines Supportbenutzers erstellt sowie für jede ausgeführte Aktion. In der Spalte "Wer?" wird der Name des Autors folgendermaßen angezeigt:

    "Supportbenutzer$Benutzer"


