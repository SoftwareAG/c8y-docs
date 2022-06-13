---
layout: redirect
title: Verwalten von Gerätetypen
weight: 50
---

Um Daten aus verschiedenen Gerätetypen zu verarbeiten, verwendet {{< product-c8y-iot >}} Geräteprotokolle, die in einer Datenbank gespeichert sind.

Klicken Sie auf **Geräteprotokolle** im Menü **Gerätetypen** des Navigators.

Die Seite **Geräteprotokolle** zeigt eine Liste aller in Ihrem Konto verfügbaren Geräteprotokolle an.

![Device protocols](/images/benutzerhandbuch/DeviceManagement/devmgmt-device-protocols.png)

Die Geräteprotokoll-Liste zeigt die folgenden Informationen an:

* den Geräteprotokolltyp (z. B. Modbus, CANOpen, LoRa)
* den Gerätetypnamen
* die Anzahl der Ressourcen für das Gerät (auf der rechten Seite)

### So fügen Sie ein Geräteprotokoll hinzu

1. Klicken Sie auf **Geräteprotokoll hinzufügen** in der oberen Menüleiste.
 <br>![Add device protocol](/images/benutzerhandbuch/DeviceManagement/devmgmt-device-protocol-add.png)
2. Wählen Sie einen der verfügbaren Geräteprotokolltypen aus der Liste.
3. Geben Sie im darauf folgenden Dialog einen Namen und eine optionale Beschreibung für das Geräteprotokoll ein und klicken Sie auf **Erstellen**.
4. Geben Sie die Konfiguration für das Geräteprotokoll ein. Die Konfiguration des Geräteprotokolls hängt vom Protokolltypen ab. <br>
Weitere Informationen zum Konfigurieren von Geräteprotokollen finden Sie in der Dokumentation des jeweiligen Gerätetyps, den Sie anlegen möchten, siehe [Protocol Integration Guide](/protocol-integration/overview).
5. Klicken Sie auf **Speichern**.

Das Geräteprotokoll wird der Gerätedatenbank hinzugefügt.

### So importieren Sie ein Geräteprotokoll

Um ein Geräteprotokoll aus einem bestehenden Protokoll hinzuzufügen, gehen Sie folgendermaßen vor:

1. Klicken Sie auf **Importieren** in der oberen Menüleiste.
 <br>![Import device protocol](/images/benutzerhandbuch/DeviceManagement/devmgmt-device-protocol-import.png)
2. Wählen Sie das zu importierende Geräteprotokoll entweder aus einer Liste der vordefinierten Protokolle aus oder laden Sie es aus einer Datei, indem Sie zu dieser navigieren.
3. Geben Sie einen Namen für das neue Protokoll ein und klicken Sie auf **Speichern**.

Das Geräteprotokoll wird der Gerätedatenbank hinzugefügt.

### So bearbeiten Sie ein Geräteprotokoll

Zum Bearbeiten eines Geräteprotokolls klicken Sie einfach auf das Protokoll oder auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Bearbeiten**.

Weitere Informationen zu den Feldern finden Sie in der Dokumentation des jeweiligen Gerätetyps, siehe [Protocol Integration Guide](/protocol-integration/overview).

### So löschen Sie ein Geräteprotokoll

Zum Löschen eines Geräteprotokolls klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Löschen**.

Das Geräteprotokoll wird aus der Gerätedatenbank gelöscht.

### So exportieren Sie ein Geräteprotokoll

Zum Exportieren eines Geräteprotokolls klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Exportieren**.

Das Geräteprotokoll wird in Ihr Dateisystem exportiert.