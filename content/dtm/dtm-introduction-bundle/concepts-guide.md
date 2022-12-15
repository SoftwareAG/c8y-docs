---
weight: 10
title: Concepts Guide
layout: redirect
---
### Digital Twin

A digital twin is a virtual representation of a physical object or system. It is typically used in the context of the Internet of Things (IoT) to help visualize and analyze how a physical object is performing, or to predict how it might behave in the future.

Digital twins can be used to simulate and test the performance of complex systems, such as buildings, factories, or even entire cities. By using digital twins, engineers and designers can better understand how a system works and identify potential problems before they occur.  

In the Digital Twin Manager application, an **Asset** represents a digital twin.

<div style="width: 100%">
<div style="display: inline-block; width: 35%">
<img src="/images/dtm/digital-twin/dtm-digital-twin.png" alt="Digital Twin" />
</div>
<div style="display: inline-block; width: 40%">
<h4>Digital Twin attributes</h4>

* Represents a **unique** physical asset.
* Associated with a **single, specific instance** of a physical asset.
* Continuously **collects data** (through sensors, devices, etc).
* Continuously **connected** to the physical asset, updating itself with any change to the asset’s state, condition, and context 
* Provides value through **visualization**, **analysis**, **prediction**, and **optimization** 

</div>
</div>

### Asset Hierarchy

An asset hierarchy is a structure that organizes multiple assets into a hierarchy, allowing for the visualization and management of complex systems.

As an example, to create a digital twin of a Windmill,
<p align="center">
<img src="/images/dtm/digital-twin/dtm-digital-twin-windmill.png" alt="Windmill" />
</p>

1. Start by defining the scope of the hierarchy. Identify the key systems, processes, and components to be included.

2. Draft the hierarchy of the digital twins you need based on your definition.

<p align="center">
<img src="/images/dtm/digital-twin/dtm-asset-hierarchy-windmill.png" alt="Windmill asset hierarchy" style="height:60vh"/>
</p>

3. Determine the level of detail needed for each system, process, and component in the hierarchy. This will help determine the level of accuracy and complexity required for each asset type. In our example, we need to be able to set for each instance, the tower’s height, the blade's length, etc.

4. Create all the properties you need in the **Digital twin library** so you can use it in asset types. 

5. While creating the asset types, you need to work from inside to the outside. Following our example, start by creating the Blade asset type, then the Rotor asset type, follow the same process for the Rotor siblings (the Tower and the Nacelle) and finally the Windmill asset type.<br/>You must follow this process because, for each asset type, you need to assign the required properties and set the allowed contained asset types (a Windmill requires a Rotor, which in turn requires Blades).

6. Finally, after all required asset types are created, you can start adding asset instances.This process starts from the outer most level (the Windmill) and finishes at the deepest level (the Blades).

7. Test and validate the asset hierarchy to ensure that it accurately represents the real-world system or process. This may involve simulating different scenarios and comparing the results to real-world data.

8. Continuously update and maintain the asset hierarchy as changes occur in the real-world system or process. This will ensure that the hierarchy remains accurate and up to date. 


