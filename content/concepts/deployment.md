---
title: Cumulocity IoT releases
layout: bundle
sector:
  - getting_started
weight: 110
---

### Introduction

* Cumulocity IoT is a cloud service and continuously maintained and upgraded according to the [SLA](...).
* This maintenance process is designed to be seamless and generally invisible to customers. The timing and content of upgrades are at the discretion of Cumulocity.
* As soon as new features and improvements have passed Cumulocity quality assurance, they are gradually made available to customers inside their tenants.
* Benefit is quick availability of new functionality and up to date security and bug fixes.
* New or changed functionality is communicated through the [change logs](https://cumulocity.com/docs/change-logs/). Upgrade time slots can be seen on the [status pages](https://status.cumulocity.com).

* To ensure that connected devices and customer functionality developed on top of Cumulocity continues to work, strict [API compatiblity](https://cumulocity.com/docs/concepts/compatibility-policy/) is maintained and extensively tested.
* This informational document is provided as a courtesy to Cumulocity IoT customers. Cumulocity acknowledges that
  * IoT hardware devices and legacy industry protocols may be very sensitive to compatible changes and may need to be tested. For example, security stacks in IoT devices are often not upgraded with respect to recent secure communication cyphers that need to be supported by Cumulocity IoT for security reasons.
  * Customers may not be used to cloud release models or may be in regulated domains may need to follow changes up more closely and report on them.
* For that reason, we communicate upgrade models and frequently asked questions here.


### Continuous deployment

* At any time, automated deployment, automated fixes.
* Private/public preview releases (eu-latest), or customer dev environment.
* Customer information for new features and changes through change log.
* Normal ongoing support.
* Staged deployment: From QA -> eu-latest/customer dev -> commercial/ customer prod
  * Proposal: Use "staged" or "phased" instead of "zonal" because "zonal" is used data center zones.
  * Proposal: Only distinguish QA, zone 1/dev and commercial. Other communication is a bit odd and zone 2 is left out in some parts of Rumi's doc.
* Promotion: Automatically, time depending on size/complexity (~2-3 weeks after upgrade), rollback in case of issues.
* Hotfixes any time.

### Application enablement

* API compatibility, cloning (references to doc).
* CI/CD against eu-latest for critical cases.

### Annual deployment

* Upgrades once a year, manual, as project with tight time coordination and support from C8Y.
* Exact time frames for test periods, upgrade periods, end of maintenance and end of support.
* Manual bug fix installation.
* Longer upgrade duration (due to larger size).
* Image from Rumi


### FAQ

#### Can I check when a particular change is available in my tenant?

Proposal: Can we link change log updates with eu-latest deployments? E.g., have some soft statement here like "Generally, after a change is published in the change log, it is part of the next eu-latest upgrade/it was part of the last eu-latest upgrade."

#### Can I get notification when something is deployed?

Proposal: You can subscribe to notifications from the [status page](https://status.cumulocity.com) for your region.

TBD: Can we make the status page subscriptions more granular, at least for the shared instances? (Requires likely the next better status page plan.)

#### Can I cherry pick changes?

Changes are published to all instances unless you are on the annual upgrade plan for regulated environments.

#### Can I roll back changes?

Changes are transparently rolled back by Cumulocity should a problem in production occurr. If you encounter a problem, please contact support.


#### Who is eligible for annual deployment?

Annual deployment is a premium service for regulated customers. Please contact your Cumulocity representative for more information.

TBD: Does anyone know what the exact regulatory requirements are where we need to support our customers?

