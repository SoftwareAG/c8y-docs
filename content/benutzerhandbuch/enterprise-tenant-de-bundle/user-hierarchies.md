---
aliases:
- /benutzerhandbuch/enterprise-edition-de/#user-hierarchies
layout: redirect
title: Verwalten von Benutzerhierarchien
weight: 20
---

Mit Benutzerhierarchien können Sie verschiedene Organisationen in {{< product-c8y-iot >}} verwalten, die dennoch dieselbe Datenbank teilen. Diese Organisationen können eingeschränkten Zugriff auf eine Untermenge der geteilten Daten haben und ihre eigenen untergeordneten Benutzer verwalten.

{{< c8y-admon-info >}}
Um diese Funktion verwenden zu können, muss Ihr Mandant die folgende Anwendung abonniert haben: "feature-user-hierarchy".
{{< /c8y-admon-info >}}

### Anzeigen von Benutzerhierarchien

Auf der Seite **Benutzer** werden Benutzerhierarchien durch einen Pfeil links vom Benutzer-Symbol angezeigt. Klicken Sie auf diesen Pfeil, um die Benutzerhierarchie auszuklappen. Sie können auch alle Benutzerhierarchien gleichzeitig anzeigen oder verbergen, indem Sie **Alle ausklappen** bzw. **Alle einklappen** rechts in der oberen Menüleiste klicken.

Eine kleine Zahl neben dem Benutzernamen zeigt an, wieviele direkt untergeordnete Benutzer ein Benutzer hat. Untergeordnete Benutzer sind Benutzer, die von ihrem übergeordneten Benutzer verwaltet werden können und die maximal die Berechtigungen des übergeordneten Benutzers haben können. Im Beispiel unten hat der Benutzer "Demo user" zwei direkt untergeordnete Benutzer.

![User hierarchies](/images/benutzerhandbuch/enterprise-tenant/et-user-hierarchy.png)

<a name="sub-users"></a>
### So erstellen Sie einen untergeordneten Benutzer

Benutzerhierarchien werden erstellt, indem einem Benutzer ein "Besitzer" zugewiesen wird. Dieser Besitzer kann den Benutzer verwalten. Der Benutzer kann maximal die Berechtigungen des Besitzers haben.

1. Wählen Sie den Benutzer auf der Seite **Benutzer**.
2. Wählen Sie im Feld **Besitzer** den Benutzer aus der Auswahlliste, den Sie als Besitzer zuweisen möchten.
3. Klicken Sie zum Bestätigen auf **Fertig**.

![Select owner](/images/benutzerhandbuch/enterprise-tenant/et-user-hierarchy-assign-owner.png)

{{< c8y-admon-info >}}
Wenn Sie einen neuen Benutzer erstellen, wird der Besitzer automatisch auf den Benutzer gesetzt, der angemeldet ist, sofern der angemeldete Benutzer nur die "Benutzerverwaltung"-Berechtigung ERSTELLEN hat. Der Besitzer kann später geändert werden, jedoch nur durch einen Benutzer mit der "Benutzerverwaltung"-Berechtigung ADMIN.

Wenn Sie möchten, dass ein Besitzer nur seine untergeordneten Benutzer verwalten kann, stellen Sie sicher, dass der Besitzer keine globale Rolle mit der "Benutzerverwaltung"-Berechtigung für alle Benutzer hat.
{{< /c8y-admon-info >}}

**Beispiel**

Ein Benutzer A hat die Rolle "business". Benutzer A wird zum Besitzer eines neuen Benutzers B. Dem Benutzer B kann dann nur eine business-Rolle zugewiesen werden (und nicht etwa eine admin-Rolle), da der Benutzer keine höhere Berechtigung haben kann als der Besitzer. Wenn Sie versuchen, Benutzer B eine andere Rolle als "business" zuzuweisen, so ist die Rolle für ein Abonnement nicht verfügbar und wird mit einem Warnsymbol und dem Hinweis versehen, dass diese Operation nicht zulässig ist.

<a name="delegate"></a>
### Delegieren von Benutzerhierarchien

In {{< product-c8y-iot >}} kann ein Benutzer seine Benutzerhierarchien und Berechtigungen einem anderen Benutzer übertragen (beide Benutzer müssen derselben Hierarchie angehören). Der Benutzer, dem die Berechtigungen übertragen werden, hat die gleichen Benutzerverwaltungsrechte wie der Benutzer, der die Übertragung aktiviert hat. Zur Durchführung der Benutzerverwaltung muss der delegierte Benutzer die Berechtigung USER_MANAGEMENT_CREATE haben oder eine der vordefinierten Rollen verwenden: "Geteilter Benutzermanager", "Benutzerverwaltung".

Sie können Berechtigungen auch temporär übertragen, wenn Sie etwa zeitweilig nicht verfügbar sind.

#### So delegieren Sie Berechtigungen an einen Benutzer

Öffnen Sie entweder den Benutzer und klicken Sie auf das Delegieren-Symbol im Feld **Delegiert von** oder öffnen Sie das Kontextmenü über das Menüsymbol rechts vom Benutzer und wählen Sie **Delegieren**.

#### So heben Sie die Delegierung von Berechtigungen auf

Entfernen Sie die Delegierung im Feld **Delegiert von** oder klicken Sie auf das Menüsymbol rechts neben dem Benutzereintrag in der Benutzerliste und wählen Sie **Delegierung aufheben** aus dem Kontextmenü.

Wenn der Benutzer, dem Sie die Berechtigungen übertragen haben, auch bestimmte Geräte verwalten können soll, muss der Admin-Benutzer diesem Benutzer die Berechtigung für die entsprechenden Geräte (Stammdatenrollen) direkt zuweisen. Dies kann über den Befehl **Stammdatenrollen eines anderen Benutzers kopieren** erfolgen. Weitere Informationen finden Sie unter [Zuweisen von Stammdatenrollen](/benutzerhandbuch/administration-de#attach-inventory).

{{< c8y-admon-info >}}
Die Delegierung funktioniert nur im Bereich Benutzerverwaltung und hat keine Auswirkungen auf andere Bereiche.
{{< /c8y-admon-info >}}

### Fehlerbehebung für untergeordnete Benutzer

Im folgenden Beispiel kann der Benutzer nicht den Zugriff auf die "Administration"-Anwendung ändern, da der Besitzer des Benutzers keine Berechtigung "Benutzerverwaltung" hat. Daher kann der Besitzer keinen Zugriff auf integrierte Anwendungen erteilen.

![Warning message](/images/benutzerhandbuch/enterprise-tenant/et-warning.png)