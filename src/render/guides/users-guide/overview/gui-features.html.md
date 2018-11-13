---
order: 40
title: GUI functionalities and features
layout: default
---



### <a name="screen"></a>Main screen elements

The general structure common to all Cumulocity applications includes the following screen elements:

<table>
<col width="200">
<thead>
<tr>
<th style="text-align:left">Element</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>Navigator</strong></td>
<td style="text-align:left">On the left you find the navigator. At the top of the navigator the name and logo of the application is displayed, indicating which application you are currently using. Below you find a list of entries leading to the various pages of the application. The entries are grouped into menus and menu items. You can collapse or expand menus in the navigator by clicking the menu name. Clicking the small arrow at the very left of the top bar will hide/or unhide the navigator. Per default, it is visible.</td>
</tr>
<tr>
<td style="text-align:left"><strong>Tabs</strong></td>
<td style="text-align:left">Some pages, e.g. the page of any particular device, are divided into several tabs, either displayed vertically or horizontally.</td>
</tr>
<tr>
<td style="text-align:left"><strong>Top bar</strong></td>
<td style="text-align:left"><strong>Page title</strong><br> At the left of the top bar the title of the active page is displayed, if any. <br> <br><img src="/guides/Icons/Icon-Search.svg" alt="Search" style="vertical-align:middle;"> <strong>Search button</strong><br> Clicking the <strong>Search</strong> button opens a search field to enter text for a full-text search. For details refer to <a href="#searching" class="no-ajaxy">Searching</a> below. Not always available.<br><br> <img src="/guides/Icons/Icon-Plus.svg" alt="Plus" style="max-width:100%"> <strong>Plus button</strong><br> Most application pages show an <strong>Plus</strong> button at the top bar. Clicking it opens a context menu providing further functionalities. The context menu is created dynamically, i.e. it depends on the active page which commands are provided. <br><br><strong>Application Switcher</strong><br> The <strong>Application Switcher</strong> on the right allows you to quickly switch between Cumulocity applications. <br><br> <img src="/guides/Icons/Icon-User.svg" alt="User" style="max-width:100%"> <strong>User button</strong><br> Right from the application switcher yo will find the <strong>User</strong> button with your user name. Clicking it will open up a context menu with commands related to your account settings. <br> <br>Other buttons/ information may be available in the top bar depending on the application and the page being displayed. </td>
</tr>
<tr>
<td style="text-align:left"><strong>Top menu bar</strong></td>
<td style="text-align:left">Depending on the active application and the active page, a secondary bar is displayed below the top bar providing further functionalities like a <strong>Reload</strong> link for reloading the page or a <strong>Realtime</strong> link for the display of realtime data. </td>
</tr>
<tr>
<td style="text-align:left"><strong>Right drawer</strong></td>
<td style="text-align:left">Clicking the small arrow at the very right of the top bar will unhide/hide the right drawer, offering quick links to other applications and to relevant documentation. Per default, the right drawer is hidden.</td>
</tr>
<tr>
<td style="text-align:left"><strong>Page</strong></td>
<td style="text-align:left">"Page" actually refer to the main area in the application. The content provided here depends on the menu item selected in the dashboard. The structuring of the content differs from page to page. Data may for example be displayed in a list with a row for each object or you may find it being presented in a grid in which objects are represented by cards. </td>
</tr>
</tbody>
</table>

![Cumulocity application](/guides/images/users-guide/Overview/ScreenElements.png)

On smaller screens, the layout of an application changes, as shown below. The navigator is hidden and only some of the tabs are visible. To access the navigator, click the menu icon on the top left. To access other tabs, scroll the tabs left or right (the way to scroll the tabs may depend on your device).

<img src="/guides/images/users-guide/appsmall.png" alt="Layout on small devices" style="max-width: 50%">

> **Info:** Cumulocity applications provide tooltips when you hover over a particular screen element. When you use Cumulocity applications on touch devices, tooltips are shown when you touch a screen element for a longer time.

### <a name="searching-and-filtering"></a>Search and filter functionality

#### <a name="searching"></a>Searching

The Cumulocity search field provides a full-text search of the whole inventory. 

Entering multiple words separated by a blank returns all objects that match any of the words. For example, entering

	My Demo Device

will return objects containing "My", "Demo" or "Device". 

If you want to search for objects matching an exact phrase enclose it in quotation marks:

	"My Demo Device"

You can also exclude words by putting a hyphen before the word to search the inventory for objects containing e.g. "My" or "Demo" but not "Device":

	My Demo -Device


Note, that using "-" inside a string works as a delimiter searching for all parts of the search string:

	My-Demo-Device


Case is ignored. The following search texts return the same result:

	My Demo Device
	my demo device


>**Info:** Other than with filtering, using wildcards in a search is not supported.

#### <a name="filtering"></a>Filtering

Some pages offer a filtering functionality to filter objects in a list.

As opposed to the search functionality, on entering filtering criteria you must not necessarily enter complete words. 

In many cases you can just enter any arbitrary text into a text field, even just single characters. Entering

	cl

will reduce the list to all objects containing the string "cl".

In other cases you may enter * as wildcard character to return all objects starting with "cl":

	cl*


The list will be reduced to the selected objects accordingly.

### Realtime behavior of the navigator

In the navigator, changes are not updated in realtime, i.e. new, removed or renamed devices or groups will not be updated immediately. 

You will only see such changes in the navigator of the application, in which you have made the changes. For example, if you unassign a device from a group in the Device Management application you will immediately see it removed from the group in the navigator of your current application, but if you have another window open with e.g. the Cockpit application you won't see the changes. 

You will only see the changes after a refresh or another request (expanding a group in the navigator for example).