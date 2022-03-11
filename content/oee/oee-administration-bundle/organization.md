---
weight: 60
title: Organization
layout: redirect
---

In the **Organization** page under **Administration**, you can customize the [**Machine Park Overview**](/oee/oee-dashboards/#machine-park). Various entities, i.e. sites, areas and lines, can be created from here and can be arranged according to your needs.

![Organization](/images/oee/administration/admin-organization.png)

The **Organization structure** area reflects the structure of the **Machine Park Overview**.

The entities listed in the **Unassigned entities** area, are not shown in the **Machine Park Overview** and no calculation is performed for them.

Click the arrow icon at the right to expand or collapse the entity and show or hide its details.

<a name="create-entity"></a>
### To create a new entity

1. Click **Add a new entity** at the right of the top menu bar to create a new entity.
2. In the dialog box, select the entity type (one of "Site", "Line", or "Area").
3. Enter a unique name for the entity (mandatory) and an optional description.
4. Specify a value for the OEE target in percent.
5. Click **Add** to add the new entity.

![Creating a new site](/images/oee/administration/admin-create-site.png)

The entity will be added to the bottom of the **Organization** page under **Unassigned entities**.

Lines must be assigned to sites or areas.

### To edit an entity

Click the pencil icon next to the entity name to open the entity editor and edit the entity.

### To assign an entity

Click the **Add** button to add an entity (line, area, or machine) to another entity.

#### Example: To attach a line to a site

1. Click the **Add** button on the site to which you want to attach a line (entity).
2. Select your desired line and click **Add**.

The line will be added to the site in the **Organization structure** and get represented in the [**Machine Park Overview**](/oee/oee-dashboards/#machine-park).

### To unassign an entity

Click the **Unassign** button at the right of an entity to unassign a previously attached entity.

### To delete an entity

Click the **Delete** button at the right of an entity to delete (and unassign) an entity.

Deleting an entity will result in unassigning all entities previously assigned to this entity.

### To rearrange entities

By activating the **Enable drag and drop** toggle in the top menu bar, you can rearrange the entities under **Organization structure** and **Unassigned entities** by dragging and dropping them freely, thus modifying the **Machine park Overview**.
