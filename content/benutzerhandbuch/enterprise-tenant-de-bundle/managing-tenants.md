---
aliases:
- /benutzerhandbuch/enterprise-edition-de/#managing-tenants
layout: redirect
title: Verwalten von Mandanten
weight: 10
---

Über den {{< enterprise-tenant-de >}} von {{< product-c8y-iot >}} können Sie die Mandantenfunktionalität nutzen, mit der sich Untermandanten erstellen und verwalten lassen.

> **Wichtig:** Es besteht ein entscheidender Unterschied zwischen mehreren Mandanten einerseits und mehreren Benutzern mit verschiedenen Berechtigungen innerhalb eines Mandanten andererseits. Mandanten sind physikalisch getrennte Datenbereiche mit einer eigenen URL, eigenen Benutzern einer eigenen Anwendungsverwaltung und ohne Datenteilung. Benutzer eines Mandanten teilen sich standardmäßig dieselbe URL und denselben Datenbereich. Sollte es sich bei Ihren Benutzern also etwa um verschiedene Kunden handeln, die streng getrennt gehalten werden müssen, da es sich eventuell sogar um Mitbewerber handelt, empfehlen wir dringend, mit verschiedenen Mandanten zu arbeiten. Nähere Informationen zum Ansatz mit rollenbasiertem Zugriff im Unterschied zum Ansatz mit mehreren Mandanten finden Sie unter [Rollenbasierter Zugriff versus Mandantenfähigkeit](/concepts/tenant-hierarchy/#comparison).

>**Info:** Wenn Sie diese Funktion verwenden möchten, wenden Sie sich bitte an den [Produkt-Support](/welcome/contacting-support/).

Um die Mandantenfunktionalität nutzen zu können, muss Ihr Benutzer über die entsprechenden Berechtigungen verfügen. Informationen zum Bearbeiten von Berechtigungen finden sie unter [Erstellen und Bearbeiten von Rollen](/benutzerhandbuch/administration-de#create-edit-roles) im Abschnitt Verwalten von Berechtigungen. Da es sich bei der Bearbeitung von Mandanten um eine sensible Operation handelt, sind die entsprechenden Berechtigungen granularer:

- LESEN: Durchsuchen und Ansehen von Mandanten.
- ERSTELLEN: Erstellen neuer Mandanten.
- AKTUALISIEREN: Bearbeiten von Mandanten (einschließlich Abonnements) und Sperren oder Aktivieren von Mandanten.
- ÄNDERN: Erstellen, Bearbeiten und Löschen von Mandanten

### So zeigen Sie Untermandanten an

Klicken Sie auf **Untermandanten** im Menü **Mandanten**, um alle in Ihrem Konto vorhandenen Untermandanten in Raster- oder Listenform anzuzeigen.

Die Seite **Mandanten** zeigt die folgenden Informationen für jeden Untermandanten an:

* Name des Untermandanten, z. B. Name des Unternehmens Ihres Kunden.
* ID und Domain.
* Optional: Kontaktname und Telefonnummer.
* Das Erstellungsdatum für den Mandanten.
* Status des Mandanten, entweder aktiv (angezeigt durch ein grünes Häkchen) oder gesperrt (angezeigt durch ein rotes Kreuz).

Im {{< management-tenant-de >}} finden Sie zudem Informationen über den übergeordneten Mandanten, d. h. den Mandanten, der den aufgeführten Mandanten erstellt hat.

<a name="creating-tenants"></a>
### So erstellen Sie einen Untermandanten

1. Klicken Sie auf **Mandanten anlegen** rechts in der oberen Menüleiste.

	![Create subtenant](/images/benutzerhandbuch/enterprise-tenant/et-subtenant-create.png)

2. Geben Sie die folgenden Attribute an:

	<table>
	<col style="width:20%">
	<col style="width:80%">
	<thead>
	<tr>
	<th style="text-align:left">Feld</th>
	<th style="text-align:left">Beschreibung</th>
	</tr>
	</thead>
	<tbody>
	<tr>
	<td style="text-align:left">Domain/ URL</td>
	<td style="text-align:left">Geben Sie eine Subdomain ihrer Wahl ein, beispielsweise "acme". Die URL des Mandanten lautet dann "acme.{{< domain-c8y >}}" auf {{< domain-c8y >}}. Sie können nur eine Subdomain-Ebene verwenden. Sie können zum Beispiel nur "acme.{{< domain-c8y >}}" auf {{< domain-c8y >}} verwenden. Sie können aber nicht "mycustomer.acme.{{< domain-c8y >}}" wählen. Dies wird vom TLS-Standard nicht unterstützt. <br> Die Mandanten-Domain kann Kleinbuchstaben, Ziffern oder Bindestriche (-) enthalten. Sie muss mit einem Buchstaben beginnen; Bindestriche sind nur in der Mitte zulässig; die Mindestlänge beträgt 2 Zeichen. </td>
	</tr>
	<tr>
	<td style="text-align:left">Name</td>
	<td style="text-align:left">Name des Mandanten, z. B. Name des Unternehmens.</td>
	</tr>
	<tr>
	<td style="text-align:left">E-Mail-Adresse des Administrators</td>
	<td style="text-align:left">Sie müssen eine gültige E-Mail-Adresse angeben, damit Benutzer ihr Passwort ändern können.</td>
	</tr>
	<tr>
	<td style="text-align:left">Benutzername des Administrators</td>
	<td style="text-align:left">Benutzername des Administrators dieses Mandanten.</td>
	</tr>
	<tr>
	<td style="text-align:left">Kontaktname</td>
	<td style="text-align:left">Optionaler Name des Ansprechpartners.</td>
	</tr>
	<tr>
	<td style="text-align:left">Telefonnummer</td>
	<td style="text-align:left">Optionale Telefonnummer des Ansprechpartner.</td>
	</tr>
	<tr>
	<td style="text-align:left">Link zum Zurücksetzen des Passworts als E-Mail senden</td>
	<td style="text-align:left">Standardmäßig ausgewählt. Wenn Sie diese Option deaktivieren, müssen Sie ein Passwort bereitstellen und dieses bestätigen (weitere Informationen zur Passwortstärke finden Sie unter <a href="/benutzerhandbuch/getting-started-de/#login" class="no-ajaxy">Erste Schritte &gt; Aufrufen und Anmelden an der {{< product-c8y-iot >}}-Plattform &gt; So melden Sie sich an der Plattform an</a>).</td>
	</tr>
	<tr>
	<td style="text-align:left">Mandantenregel</td>
	<td style="text-align:left">Sie können eine Mandantenregel aus der Auswahlliste auswählen, die auf den Mandanten angewendet werden soll.</td>
	</tr>
	</tbody>
	</table>

3. Klicken Sie auf **Speichern**, um Ihre Eingaben zu speichern.

Wenn der Untermandant erstellt wird, erhält er eine automatisch generierte ID, die nicht geändert werden kann. Zudem wird er automatisch mit einem ersten Administrator-Benutzer ("Benutzername des Administrators") eingerichtet. Dieser Administrator kann andere Benutzer erstellen und Berechtigungen vergeben. Der erste Benutzer kann nicht gelöscht werden, um ein Aussperren zu verhindern.

Vom {{< management-tenant-de >}} aus können Sie anderen Mandanten erlauben, Untermandanten zu erstellen. Aktivieren Sie hierzu die Option **Erstellen von Untermandanten zulassen** im Mandanten-Editor.

### So können Sie Untermandanten-Attribute anzeigen oder bearbeiten

Klicken Sie auf den gewünschten Untermandanten oder auf das Menüsymbol rechts im Untermandanten-Eintrag und anschließend auf **Bearbeiten**.

In der Registerkarte **Attribute** können alle Felder außer **ID**, **Domain/ URL** und **Benutzername des Administrators** bearbeitet werden. Detaillierte Informationen zu den einzelnen Feldern finden Sie unter [So erstellen Sie einen Untermandanten](#creating-tenants).

Um das Mandantenpasswort zu ändern, klicken Sie auf **Passwort ändern**, geben Sie das neue Passwort in die dafür angezeigten Felder ein und klicken Sie auf **Speichern**.

<a name="user-access"></a>
#### Informationen zum Supportbenutzerzugriff

Auf der rechten Seite der Registerkarte **Attribute** finden Sie Informationen zu Supportbenutzeranfragen/-zugriff für die Untermandanten.

<img src="/images/benutzerhandbuch/enterprise-tenant/et-support-user-properties.png" alt="Support user access information" style="max-width: 100%">

Hier werden die folgenden Informationen angezeigt:

<table>
<colgroup>
<col width="20%">
<col width="80%">
</colgroup>
<thead>
<tr>
<th style="text-align:left">Feld</th>
<th style="text-align:left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Status</td>
<td style="text-align:left">Kann entweder "Eingeschaltet" oder "Ausgeschaltet" sein. <br>"Eingeschaltet" bedeutet: <br>- Supportbenutzerzugriff wurde im {{< management-tenant-de >}} global aktiviert (siehe <a href="../../benutzerhandbuch/administration-de/#platform-configuration-settings">Administration &gt; Plattform-Konfigurationseinstellungen</a>),<br>- ein oder mehrere Untermandanten-Benutzer haben Supportbenutzerzugriff aktiviert.<br>"Ausgeschaltet" bedeutet: <br>- Supportbenutzerzugriff wurde im {{< management-tenant-de >}} global deaktiviert, <br>- kein Untermandanten-Benutzer hat derzeit einen aktiven Supportbenutzerzugriff (d. h. jede Supportbenutzeranfrage ist entweder abgelaufen oder wurde deaktiviert).</td>
</tr>
<tr>
<td style="text-align:left">Anzahl aktiver Anfragen</td>
<td style="text-align:left">Anzahl der aktuell aktiven Anfragen im Untermandanten. Wird nur angezeigt, wenn Supportbenutzerzugriff nicht global im {{< management-tenant-de >}}eingeschaltet ist. Wird als Zahl in einem kleinen roten Punkt angezeigt.</td>
</tr>
<tr>
<td style="text-align:left">Ablaufdatum</td>
<td style="text-align:left">Legt das Datum fest, an dem der Supportbenutzerzugriff für den Mandanten abläuft. Wenn kein Datum festgelegt wurde, wird das Ablaufdatum auf "Unbegrenzt" gesetzt.</td>
</tr>
</tbody>
</table>

### Sperren von Untermandanten

Das Sperren eines Mandanten verhindert jeglichen Zugriff auf diesen Mandanten, unabhängig davon, ob der Zugriff über ein Gerät, einen Benutzer oder eine andere Anwendung erfolgt. Zudem sind alle seine Microservices nicht gestartet, und bei Reaktivierung des Mandanten werden alle seine Microservices neu gestartet.

Die Daten des Mandanten bleiben in der Datenbank und können später durch Klicken auf **Einschalten** wieder bereitgestellt werden.

Näheres zur Abrechnungsperspektive von gesperrten Mandanten finden Sie unter [Nutzungsstatistiken und Abrechnung > Lebenszyklus](#lifecycle).

>**Wichtig:** Mandanten, die für alle {{< product-c8y-iot >}} Public-Cloud-Instanzen gesperrt sind, werden nach 60 Tagen automatisch gelöscht.
>
> **Info:** Wenn Data Broker-Konnektoren für einen Mandanten konfiguriert sind, führt das Sperren dieses Mandanten dazu, dass alle seine Data Broker-Konnektoren ebenfalls gesperrt werden.


#### So sperren Sie einen Untermandanten

1. Klicken Sie auf das Menüsymbol rechts im jeweiligen Untermandanten-Eintrag und anschließend auf **Sperren**.

	![Suspend tenant](/images/benutzerhandbuch/enterprise-tenant/et-subtenant-suspend.png)

2. Bestätigen Sie im darauf folgenden Dialog das Sperren, indem Sie **OK** klicken und Ihr Passwort eingeben.

Während des Sperrvorgangs wird eine E-Mail an den Administrator des Mandanten gesendet, wenn eine entsprechende E-Mail-Adresse konfiguriert ist.

>**Info:** Als Service Provider können Sie diese E-Mail unterdrücken.


### Löschen von Untermandanten

>**Wichtig:** Das Löschen eines Untermandanten kann nicht rückgängig gemacht werden. Deshalb ist diese Funktion aus Sicherheitsgründen nur im {{< management-tenant-de >}} verfügbar. Mandanten können ausschließlich vom {{< management-tenant-de >}} aus gelöscht werden.
>
>Administratoren in {{< enterprise-tenant-de >}}s dürfen aktive Untermandanten nur sperren, aber nicht löschen.

#### So löschen Sie einen Untermandanten

Klicken Sie auf das Menüsymbol rechts im jeweiligen Untermandanten-Eintrag und anschließend auf **Löschen**, um einen Mandanten dauerhaft zu löschen und alle zugehörigen Daten zu entfernen.


<a name="subscribe"></a>
### Anwendungen

In der Registerkarte **Anwendungen** können Sie alle für einen Mandanten abonnierten Anwendungen ansehen sowie Anwendungen für einen Mandanten abonnieren oder entfernen. Standardmäßig werden für einen Mandanten die Standardanwendungen von {{< product-c8y-iot >}} abonniert.

<img src="/images/benutzerhandbuch/enterprise-tenant/et-subtenant-applications.png" alt="Subscribe tenant" style="max-width: 100%">

#### So abonnieren Sie eine Anwendung

Bewegen Sie den Mauszeiger über die unter **Verfügbare Anwendungen** auf der rechten Seite angezeigten Anwendungen und klicken Sie bei der gewünschten Anwendung auf **Abonnieren**.

#### So bestellen Sie eine Anwendung ab

Bewegen Sie den Mauszeiger über die unter **Abonnierte Anwendungen** auf der linken Seite angezeigten Anwendungen und klicken Sie bei der gewünschten Anwendung auf **Abbestellen**.

#### Überwachen von Microservices

Für alle Anwendungen, die als Microservices von {{< product-c8y-iot >}} gehostet werden, wird neben dem Namen der Microservice-Status als Symbol angezeigt:

<img src="/images/benutzerhandbuch/enterprise-tenant/et-applications-status.png" alt="Application details">

Der Microservice kann sich in einem der folgenden Status befinden:

* <img src="/images/icons/ok.png" alt="Up" style="max-width: 100%; display: inline-block;"> Microservice ist in Betrieb
* <img src="/images/icons/warning.png" alt="Unhealthy" style="max-width: 100%; display: inline-block;">&nbsp; Microservice ist gestört
* <img src="/images/icons/danger.png" alt="Down" style="max-width: 100%; display: inline-block;"> Microservice ist außer Betrieb

Details zum Status können durch Ausklappen des jeweiligen Eintrags angezeigt werden.

<img src="/images/benutzerhandbuch/enterprise-tenant/et-application-details.png" alt="Application details">

Folgende Informationen werden angezeigt:

* Aktiv: Anzahl der aktiven Microservice-Instanzen
* Gestört: Anzahl der inaktiven Microservice-Instanzen
* Erwartet: Anzahl der erwarteten Microservice-Instanzen
* Name: Name der Microservice-Instanz
* Neustarts: Anzahl der Neustarts von Microservice-Instanzen

Weitere Details finden Sie in der Registerkarte **Status** der entsprechenden Anwendung, siehe [Administration > Verwalten von Anwendungen](/benutzerhandbuch/administration-de#managing-applications).


<a name="tenants-custom-properties"></a>
### Benutzerdefinierte Attribute

Die Registerkarte **Benutzerdefinierte Attribute** ermöglicht Ihnen das Anzeigen und Bearbeiten von Werten von benutzerdefinierten Attributen, sowohl von vordefinierten (wie "Externe Referenz") als auch denen, die in der [Attributsbibliothek](/benutzerhandbuch/administration-de#properties) definiert sind. Solche Attribute werden auch als Spalten auf der Seite [Nutzungsstatistiken](/benutzerhandbuch/enterprise-tenant-de/#usage-and-billing) angezeigt.

![Custom properties](/images/benutzerhandbuch/enterprise-tenant/et-subtenant-custom-properties.png)

#### Begrenzen der Anfragerate für Untermandanten

Plattformadministratoren können die Anfragerate jedes Untermandanten über die folgenden benutzerdefinierten Attribute begrenzen:

* HTTP-Puffer begrenzen - Begrenzung des HTTP-Anfragenpuffers für den Mandanten
* HTTP-Anfragen begrenzen - Begrenzung der HTTP-Anfragen für den Mandanten pro Sekunde
* Stream-Puffer begrenzen - Begrenzung des MQTT-Anfragenpuffers für den Mandanten
* Stream-Anfragen begrenzen - Begrenzung der MQTT-Anfragen für den Mandanten pro Sekunde

Die Anfragen-Begrenzungsfunktion wird erst aktiviert, wenn beide HTTP-Attribute (HTTP-Queue begrenzen und HTTP-Anfragen begrenzen) konfiguriert sind. Wird einer der Werte weggelassen, funktioniert es nicht.

>**Wichtig:** Eine Begrenzung der Rate kann eine wirksame Maßnahme gegen Bedrohungen wie Brute-Force-Anmeldeversuche, API-Missbrauch und Überflutung mit Anfragen sein und verringert somit die Menge des schädlichen/unerwünschten Datenverkehrs. Dies trägt zum Schutz vor DoS-Angriffen (Denial of Service) und zur Sicherstellung der für legitime Anfragen verfügbaren Bandbreite bei.

Außerdem ist es möglich, die Größe des CEP-Puffers und des Data Broker-Puffers für einen Mandanten anzupassen. Dies kann mithilfe der folgenden benutzerdefinierten Untermandant-Fragmente vom {{< management-tenant-de >}} aus durchgeführt werden:

* cep.queue.limit
* data-broker.queue.limit

Wenn keine Begrenzung auf Mandanten- und Systemebene vorliegt, wird die Begrenzungsfunktion als deaktiviert betrachtet und der Mandant erhält unbegrenzten Zugriff. Um die Begrenzung der Anfragerate wieder abzuschalten, setzen Sie den Wert auf "-1".

#### Begrenzen der Geräteanzahl für Untermandanten

Über das benutzerdefinierte Attribut "Geräteanzahl begrenzen" können Plattformadministratoren die Anzahl der gleichzeitig registrierten Hauptgeräte oder der registrierten Geräte insgesamt (einschließlich Kindgeräte) begrenzen.

Auf der Seite [Nutzungsstatistiken](/benutzerhandbuch/enterprise-tenant-de/#usage-and-billing) können sie die Höchstanzahl registrierter Geräte bzw. Hauptgeräte sowie den Höchstwert des genutzten Datenspeichers einsehen.

#### Produkterfahrungs-Tracking

Über das Kontrollkästchen **Gainsight-Tracking aktivieren** kann ein übergeordneter Mandant das Produkterfahrungs-Tracking über die Produkterfahrungssoftware [Gainsight PX](https://www.gainsight.com/product-experience/) für den jeweiligen untergeordneten Mandanten aktivieren/deaktivieren.

Auf Mandantenebene kann das Produkterfahrungs-Tracking von Gainsight durch Deaktivieren des Cookie-Banners auf der Seite **Branding** ausgeschaltet werden, siehe [Anpassen der Plattform > Branding](/benutzerhandbuch/enterprise-tenant-de/#branding).

Auch wenn Tracking für einen Mandanten aktiviert ist, müssen Benutzer aktiv das Tracking von funktionellen Cookies akzeptieren, damit funktionelle Daten zur Nutzung der Plattform verfolgt werden können, siehe [Erste Schritte > Aufrufen und Anmelden an der Plattform](/benutzerhandbuch/getting-started-de/#accessing-platform).


<a name="tenant-policies"></a>
### Mandantenregeln

Eine Mandantenregel ist eine Menge von Mandantenoptionen und Datenhaltungsregeln. Mandantenoptionen und Datenhaltungsregeln können während der Erstellung eines Mandanten konfiguriert werden.

<img src="/images/benutzerhandbuch/enterprise-tenant/et-tenant-policy-assign.png" alt="Assign tenant policy">

Das Erstellen einer Mandantenregel mit bestimmten Optionen und Regeln spart Zeit bei der Erstellung verschiedener Mandanten mit den gleichen Einstellungen.

>**Info:** Die Optionen und Regeln werden in den Mandanten kopiert. Änderungen an der Regel haben keine Auswirkungen auf bereits erstellte Mandanten.

#### So zeigen Sie Mandantenregeln an

Klicken Sie auf **Mandantenregeln** im Menü **Mandanten**, um alle verfügbaren Mandantenregeln anzuzeigen.

<img src="/images/benutzerhandbuch/enterprise-tenant/et-tenant-policies.png" alt="Tenant policies">

Für jede Mandantenregel wird der Name, eine optionale Beschreibung und die Anzahl der Optionen und Datenhaltungsregeln angezeigt, wahlweise in Listen- oder Gitteransicht.

#### So erstellen Sie eine Mandantenregel

1. Klicken Sie auf **Regel hinzufügen** in der oberen Menüleiste.
<br>![Add new policy](/images/benutzerhandbuch/enterprise-tenant/et-tenant-policy-add.png)<br>
2. Geben Sie im darauf folgenden Dialog einen Namen und eine optionale Beschreibung ein.
3. Geben Sie mindestens eine Datenhaltungsregel ein. Weitere Informationen zur Erstellung von Datenhaltungsregeln finden Sie unter [Administration > Verwalten der Datenhaltung > Datenerhaltungsregeln](/benutzerhandbuch/administration-de#retention-rules).
4. Geben Sie optional eine Mandantenoption ein.
5. Klicken Sie auf **Speichern**.

Die Mandantenregel wird der Mandantenregel-Liste hinzugefügt.

>**Wichtig:** Beim Definieren der Datenhaltungsregeln und der Optionen können Sie durch Aktivieren eines Kontrollkästchen erlauben, dass Untermandanten Definitionen dieser Regeln oder Optionen bearbeiten können. Standardmäßig ist das Kontrollkästchen nicht aktiviert. Hinweis: Wenn Sie dieses Kontrollkästchen nach Anlegen des Untermandanten nicht aktivieren, müssen Sie zum Bearbeiten dieser Regeln und Optionen vom {{< management-tenant-de >}} aus eine Aktualisierung starten.

#### So bearbeiten Sie eine Mandantenregel

Klicken Sie auf den jeweiligen Regeleintrag oder auf das Menüsymbol rechts im Regeleintrag und anschließend auf **Bearbeiten**.

Nehmen Sie im darauf folgenden Dialog die gewünschten Änderungen vor und klicken Sie auf **Speichern**, um Ihre Einstellungen zu speichern.

Um eine Datenhaltungsregel oder eine Mandantenoption aus einer Regel zu entfernen, bewegen Sie den Mauszeiger darüber und klicken Sie auf das Löschen-Symbol.

#### So duplizieren Sie eine Mandantenregel

Klicken Sie auf das Menüsymbol in dem Mandantenregel-Eintrag, den Sie duplizieren wollen, und klicken Sie dann auf **Duplizieren**.

#### So löschen Sie eine Mandantenregel

Klicken Sie auf das Menüsymbol in dem Mandantenregel-Eintrag, den Sie löschen wollen, und klicken Sie dann auf **Löschen**.

<a name="default-subscriptions"></a>
### Standardabonnements

In der {{< product-c8y-iot >}}-Plattform können Sie konfigurieren, welche Anwendungen und Microservices bei der Erstellung eines Mandanten für diesen abonniert sind. Wenn Sie einen neuen Mandanten erstellen, werden die angegebenen Anwendungen und Microservices automatisch für ihn abonniert.

Zusätzlich können Sie festlegen, welche Anwendungen und Microservices für einen Mandanten abonniert werden, wenn ein System-Upgrade durchgeführt wird. Diese Liste kann von den Standardabonnements bei der Mandantenerstellung abweichen. Beispielsweise könnten bestimmte Standardanwendungen für einen Mandanten nach der Erstellung abbestellt worden sein und Sie wollen nicht, dass diese Anwendungen erneut für ihn abonniert werden, oder Sie möchten andere Anwendungen für ihn abonnieren.

Auf der Seite **Standardabonnements** können Sie zwei separate Listen von Anwendungen konfigurieren, die standardmäßig abonniert werden sollen:

- für jeden neuen Mandanten bei dessen Erstellung,
- für jeden bestehenden Mandanten bei einem Plattform-Upgrade.

> **Info:** Diese Standardlisten können Sie für bestimmte Untermandanten außer Kraft setzen, indem Sie zusätzliche Mandantenoptionen festlegen, z. B. über eine Mandantenregel. Näheres hierzu siehe [Standardabonnements](#default-subscriptions) unten oder die [Tenant API](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Tenant-API) in der {{< openapi >}}.

Links wird die Liste der abonnierbaren Anwendungen (Web-Anwendungen und Microservices) angezeigt. Sie umfasst

- alle eigenen Anwendungen,
- alle abonnierten Anwendungen, deren Namen von den eigenen Anwendungen abweichen.

> **Info:** Um leichter unterscheiden zu können, welche Anwendung eine eigene und welche eine abonnierte ist, wird die Mandanten-ID des Besitzers angezeigt.

Rechts sehen Sie die Spalten **Zum Zeitpunkt der Mandantenerstellung abonniert** und **Plattform-Upgrade abonniert**.

Anfänglich zeigen die Listen die aus der Mandantenhierarchie geerbten Standardabonnements.

<img src="/images/benutzerhandbuch/Administration/admin-default-subscriptions-inherited.png" alt="Default subscriptions - inherited from tenant hierarchy">

<br>
Sie können beide Listen außer Kraft setzen, indem Sie den entsprechenden Umschalter betätigen. Dadurch werden alle verfügbaren Anwendungen sichtbar (anfänglich sind nicht ausgewählte Anwendungen ausgeblendet), doch die Auswahl bleibt unverändert.

Als Nächstes passen Sie die Listen nach Ihren Bedürfnissen an, indem Sie zusätzliche Anwendungen auswählen, die standardmäßig abonniert werden sollen, oder Anwendungen abwählen, die nicht abonniert werden sollen.

Sie können auch alle abwählen, wenn Sie nicht möchten, dass bei einer Mandantenerstellung bzw. einem Plattform-Upgrade Abonnements getätigt werden.

<img src="/images/benutzerhandbuch/Administration/admin-default-subscriptions-overridden.png" alt="Default subscriptions - overriding settings from tenant hierarchy">
<br>
Wenn Sie zu den von der Mandantenhierarchie geerbten Einstellungen zurückkehren möchten, betätigen Sie einfach erneut den Umschalter.

Speichern Sie die Einstellungen, indem Sie unten auf der Seite auf **Speichern** klicken.

> **Info:** Veraltete Einträge, die keinen bestehenden Anwendungen entsprechen, werden beim Speichern entfernt. Wenn eine Anwendung, die in einer der Listen ausgewählt war, entfernt wurde, wird sie während der Mandantenerstellung bzw. dem Plattform-Upgrade stillschweigend ignoriert. Wird danach (aber noch bevor die Einstellungen auf dieser Seite erneut gespeichert werden, wodurch der veraltete Eintrag gelöscht wird) eine andere Anwendung mit demselben Namen erstellt, so wird anstelle der früheren Anwendung die neue Anwendung abonniert.

<a name="default-applications"></a>
#### Außerkraftsetzen von Standardabonnements

Die Standardabonnements können Sie für Untermandanten außer Kraft setzen, indem Sie eine Mandantenregel mit den folgenden Optionen einrichten:

* zum Definieren von Web-Anwendungen, die für neue Mandanten bei deren Erstellung abonniert werden sollen:
  * category: configuration
  * key: default.tenant.applications
  * value: kommaseparierte Liste von Anwendungsnamen, z. B. administration,devicemanagement,cockpit,feature-microservice-hosting,feature-cep-custom-rules
* zum Definieren von Microservices, die für neue Mandanten bei deren Erstellung abonniert werden sollen:
  * category: configuration
  * key: default.tenant.microservices
  * value: kommaseparierte Liste von Microservice-Namen, z. B. device-simulator,report-agent,sms-gateway
* zur Verwendung einer anderen Liste von Web-Anwendungen, die für bestehende Mandanten bei einem Plattform-Upgrade abonniert werden sollen:
  * category: configuration
  * key: on-update.tenant.applications.enabled
  * value: true/false (wenn "false" oder nicht festgelegt, wird dieselbe Liste wie bei default.tenant.applications verwendet)
* zum Definieren von Web-Anwendungen, die für bestehende Mandanten bei einem Plattform-Upgrade abonniert werden sollen:
  * category: configuration
  * key: on-update.tenant.applications
  * value: kommaseparierte Liste von Anwendungsnamen, z. B. administration,devicemanagement,cockpit,feature-microservice-hosting,feature-cep-custom-rules
* zur Verwendung einer anderen Liste von Microservices, die für bestehende Mandanten bei einem Plattform-Upgrade abonniert werden sollen:
  * category: configuration
  * key: on-update.tenant.microservices.enabled
  * value: true/false (wenn "false" oder nicht festgelegt, wird dieselbe Liste wie bei default.tenant.microservices verwendet)
* zum Definieren von Microservices, die für bestehende Mandanten bei einem Plattform-Upgrade abonniert werden sollen:
  * category: configuration
  * key: on-update.tenant.microservices
  * value: kommaseparierte Liste von Microservice-Namen, z. B. device-simulator,report-agent,sms-gateway
