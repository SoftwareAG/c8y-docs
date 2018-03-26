---
order: 40
layout: redirect
title: Accessing the identity service
---

A device typically has a technical identifier that an agent needs to know to be able to contact the device. Examples are meter numbers, IP addresses and REST URLs. To associate such identifiers with the unique identifier of Cumulocity, agents can use the identity service. Again, to create the association, create an object of type "ExternalIDRepresentation" and send it to the platform. The code snippet below shows how to register a REST URL for a device. It assumes that "mo" is the managed object from the above example and "deviceUrl" is a string with the REST URL of the device.

    final String ASSET_TYPE = "com_cumulocity_idtype_AssetTag";
    final String deviceUrl = "SAMPLE-A-239239232";
            
    ExternalIDRepresentation externalIDGid = new ExternalIDRepresentation();
    externalIDGid.setType(ASSET_TYPE);
    externalIDGid.setExternalId(deviceUrl);
    externalIDGid.setManagedObject(mo);
    IdentityApi identityApi= platform.getIdentityApi();
    identityApi.create(externalIDGid);

Now, if you need the association back, you can just query the identity service as follows:

    ID id = new ID();
    id.setType(ASSET_TYPE);
    id.setValue(deviceUrl);
    externalIDGid = identityApi.getExternalId(id);

The returned object will contain the unique identifier and a link to the managed object.