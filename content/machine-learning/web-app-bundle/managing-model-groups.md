---
title: Managing model groups
layout: redirect
weight: 35

aliases:
  - /predictive-analytics/web-app/#managing-model-groups
---

In the **Model groups** page you can manage the model groups added by you. Model groups allow you to group models together. 

Primarily, a model group can also be used to represent a specific use case and all the models targeted towards the same use case can be grouped together.
This group can then be used while data processing.

Note that the models grouped together need to be homogenous in terms of the model inputs and ouputs.

Model group management functionality includes:

* Adding model groups
* Updating model groups
* Deleting model groups
* Viewing model group properties

Click **Model groups** in the navigator, to open the **Model groups** page. 

![Model groups](/images/zementis/zementis-model-groups.png)

### Adding model groups

To add a new model group, perform the following steps:

1. Click **Add Group** in the **Model groups** page. 
2. In the **Assign Model Groups** wizard, enter the name of the group you want to create. The **Available** list shows the models which are not part of any other group.
Select the models which belong to a particular use case and assign them to the group by moving them under the **Selected** list. 
![Add group](/images/zementis/zementis-add-group.png)
<br>Click **Next** to proceed. 
3. Select a primary model from the set of models assigned to this group. The significance of the primary model is that it will be considered as the default model during data processing.
Click **Complete** to add the new group.

Once your model group is created successfully, you will see a corresponding confirmation message. The new model group will be added to the list of model groups.

### Updating model groups

In order to edit the models assigned to a group and also to update the primary model, perform the following steps:

1. Click the edit icon on the card of the group. 
2. In the **Edit Group** wizard, update the models by selecting only those models which should be part of the group.
![Update group](/images/zementis/zementis-edit-groups.png)
<br>Click **Next** to proceed. 
3. Select a primary model from the list of models displayed. Click **Save** to update the group with your changes.

Once your model group is updated successfully, you will see a corresponding confirmation message.

### Deleting model groups

To delete a model group, click the delete icon on its card and confirm the deletion.  

Once a model group is deleted, it will be removed permanently from your list of model groups. 

### Viewing model group properties

To view the properties of a model group, click the info icon on its card. 

Properties include the names of all the models which are part of this group and also the name of the group's primary model.