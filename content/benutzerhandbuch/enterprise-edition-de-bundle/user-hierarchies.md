---
weight: 20
title: Verwalten von Benutzerhierarchien
layout: redirect
---

Mit Benutzerhierarchien können Sie verschiedene Organisationen in Cumulocity getrennt verwalten, die dennoch dieselbe Datenbank teilen. Diese Organisationen können eingeschränkten Zugriff auf eine Untermenge der geteilten Daten haben und ihre eigenen untergeordneten Benutzer verwalten.

> Info: Um diese Funktion verwenden zu können, muss Ihr Mandant die folgende Anwendung abonniert haben: "feature-user-hierarchies".

### Anzeigen von Benutzerhierarchien

In der Seite **Benutzer** werden Benutzerhierarchien durch einen Pfeil links vom Benutzer-Symbol angezeigt. Klicken Sie auf diesen Pfeil, um die Benutzerhierarchie auszuklappen. Sie können auch alle Benutzerhierarchien gleichzeitig anzeigen oder verbergen, indem Sie **Alle ausklappen** bzw. **Alle einklappen** oben rechts klicken.

Eine kleine Zahl neben dem Benutzernamen zeigt an, wieviele direkte untergeordnete Benutzer ein Benutzer hat. Untergeordnete Benutzer sind Benutzer, die von ihrem übergeordneten Benutzer verwaltet werden können und die maximal die Berechtigungen des übergeordneten Benutzers haben können. Im Beispiel unten hat der Benutzer "TestUser" zwei direkte untergeordnete Benutzer.

![Benutzerhierarchien](/guides/images/users-guide/userhierarchies.png)

### <a name="sub-users"></a>Erstellen von untergeordneten Benutzern

Benutzerhierarchien werden erstellt, indem einem Benutzer ein "Besitzer" zugewiesen wird. Dieser "Besitzer" kann den Benutzer verwalten. Der Benutzer kann maximal die Berechtigungen des Besitzers haben.

Wählen Sie in der Seite **Benutzer** einen Benutzer aus, dem Sie einen Besitzer zuweisen möchten. Wählen Sie im Feld **Besitzer** einen Benutzer aus der Auswahlliste und klicken Sie **Fertig** zum Bestätigen.

![Besitzer auswählen](/guides/images/benutzerhandbuch/ee-user-hierarchies-owner.png)

> **Info:** Wenn Sie einen neuen Benutzer erstellen, wird der Besitzer automatisch auf den Benutzer gesetzt, der angemeldet ist. Der Besitzer kann später geändert werden. Nur Benutzer mit der Berechtigung "USER ADMIN" können Besitzer zuweisen.
> 
> Wenn Sie möchten, dass ein Besitzer nur seine untergeordneten Benutzer verwalten kann, stellen Sie sicher, dass der Besitzer keine globale Rolle mit Administrationsrechten für alle Benutzer hat.

Nehmen wir an, ein Benutzer mit der "business"-Rolle wird der Besitzer eines neuen Benutzers. Dann kann der neue Benutzer nur die Rolle "business" erhalten, da er keine höhere Berechtigung haben kann als sein Besitzer.

### <a name="delegate"></a>Delegieren von Benutzerhierarchien

In Cumulocity können Sie Benutzerhierarchien und Berechtigungen auf andere Benutzer übertragen. Der Benutzer, dem die Berechtigungen übertragen werden, hat die gleichen Benutzerverwaltungsrechte wie der Benutzer, der die Übertragung aktiviert hat.

Sie können Berechtigungen auch temporär übertragen, wenn Sie etwa zeitweilig nicht verfügbar sind.

Um einem Benutzer Ihre Berechtigungen zu übertragen, öffnen Sie entweder den Benutzer und klicken Sie das Delegieren-Symbol im Feld **Delegiert von**, oder öffnen Sie das Kontextmenü über das Menüsymbol rechts vom Benutzer und wählen Sie **Delegieren**.

![Benutzerdelegierung](/guides/images/benutzerhandbuch/ee-user-hierarchies-delegate.png)

Entfernen Sie die Delegierung im Feld **Delegiert von** oder klicken Sie im Kontextmenü **Delegierung aufheben**, um eine Übertragung von Berechtigungen wieder aufzuheben.

Wenn der Benutzer, dem Sie die Berechtigungen übertragen haben, auch bestimmte Geräte verwalten können soll, muss der Admin-Benutzer diesem Benutzer die Berechtigung für die entsprechenden Geräte (Stammdatenrollen) direkt zuweisen. Dies kann über den Befehl **Stammdatenrollen eines anderen Benutzers kopieren** erfolgen. Weitere Informationen finden Sie unter [Zuweisen von Stammdatenrollen](/guides/benutzerhandbuch/administration#attach-inventory).

> **Info:** Die Delegierung funktioniert nur im Bereich Benutzerverwaltung und hat keine Auswirkungen auf andere Bereiche.

### Fehlerbehebung für untergeordnete Benutzer

Im folgenden Beispiel kann der Benutzer nicht den Zugriff auf die Anwendung "Administration" ändern, da der Besitzer des Benutzers keine Berechtigung USER MANAGEMENT hat. Daher kann der Besitzer keinen Zugriff auf integrierte Anwendungen erteilen.

![Warnmeldung](/guides/images/users-guide/warning1.png)