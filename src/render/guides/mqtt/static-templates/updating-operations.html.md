---
order: 60
layout: redirect
title: Updating operations
---

When using the template to set an operation to state SUCCESSFUL it supports sending additional parameters to trigger additional calls on the server.
The table below shows the operations that support this feature and what will be done with the parameters.

|Fragment|Parameters|Action triggered|
|:-------|:-------|:-------|
|c8y_Command|result|Result will be added to operation|
|c8y_RelayArray|Relay states|Device object will be updated with the states|
|c8y_CommunicationMode|No parameter needed|Device object will be updated with the mode|
|c8y_LogfileRequest|File url|File url will be added to operation|
|c8y_DownloadConfigFile|(optional) timestamp|Device object will be updated with the ID of the configuration dump and the timestamp (or server time)|
