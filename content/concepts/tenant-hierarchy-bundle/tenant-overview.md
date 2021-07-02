---
weight: 10
title: Overview
layout: redirect
---

Tenants are physically separated data spaces with a separate URL, with a specific set of users, a separate application management and no data sharing by default. Users in a single tenant share the same URL and the same data space.

For many scenarios it is sufficient to manage multiple parties within a single tenant. In this case, you [control the user access](/concepts/security/#access-control) by assigning appropriate roles - to specify which devices a user can see - and this way separate and protect multiple parties from each other. This approach corresponds to a [{{< tenant-type-1 >}}](/concepts/tenant-hierarchy/#standard-tenant) in {{< product-name-1 >}}.

For other scenarios this approach might not be sufficient for various reasons and it might be relevant to manage a portfolio of tenants. This [multi-tenancy approach](/concepts/tenant-hierarchy/#multi-tenancy) is reflected by the concept of [{{< tenant-type-2 >}}s](/concepts/tenant-hierarchy/#enterprise-tenant) in {{< product-name-1 >}}.  
