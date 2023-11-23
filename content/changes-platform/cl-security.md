---
title: Security
layout: change_log
section:
  - change_log
weight: 60
---


### December 2023

#### -Security- Update of third-party protobuf-java

In order to address security vulnerabilities (CVE-2022-3509, CVE-2022-3510, CVE-2022-3171), the third-party software "protobuf-java" has been updated from version 3.19.2 to version 3.19.6. [MTM-53001]


#### -Announcement- User administrator can no longer set password for other users

As announced earlier, see the release notes for [release 10.17](https://cumulocity.com/releasenotes/release-10-17-0/announcements-10-17-0), to improve security, from a future version, user administrators will no longer be able to explicitly set passwords or email addresses for other users in the tenant. This change prevents that an attacker could have access to all users, in case the administrator account was compromised. Note that the administrator will still have the option to force the user to reset the password on the next login or disable the user.
