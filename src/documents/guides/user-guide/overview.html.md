---
order: 10
title: Overview
layout: default
---

## General

The following sections describe how to access Cumulocity from web browsers. It describes:

   * What web browsers are support?
   * How to login to Cumulocity?
   * How to navigate around?
   * How to link into the application?
   * How to use Cumulocity on touch devices?
   * User interface conventions

### What web browsers are support?

To use Cumulocity, you need a modern web browser.

We test with the following web browsers:

  * Internet Explorer (Version 10 and 11)
  * Firefox (latest)
  * Chrome (latest)

You can also use the web browser on smartphones and tablet. We have tested it with the following browsers:

  * Chrome on Android (latest) on Galaxy Smartphones and Tablets
  * Safari on iOS (latest) on Apple iPhone and iPad.

### How to login to Cumulocity?

To access the applications for your Cumulocity tenant, use the following URL:

   * https://<account>.cumulocity.com/

You are then redirected to the login page. On the login page enter your credentials, i.e. your username and password. If you do not have received a username and password, or if you have lost it, then please contact the Cumulocity Administrator in your organisation. This person can reset your password.

If you are yourself the Administrator of `<account>` (i.e. you have the username `admin`), then you should have received the credentials from Cumulocity Support. Please contact support if you need to reset you password.

TODO: Login picture.  

Important: Make sure that the address bar of your browser shows a https connection. This ensures that the connection from your computer to Cumulocity is encrypted.  

Note: The above link is valid for Cumulocity Standard deployment options. For the deployment options "Reserved" and "Private" the URL is customer specific.

### How to navigate around?

Cumulocity Applications have the following layout:

TODO: Picture

The web page has the following areas:

  * Navigator: Using the navigator, you can goto the different pages of an application. Click on an entry in the navigator to open the respective page. You can collapse or expand sections in the navigator by clicking on the section headers, i.e. the lines with a triangle in front of the text. 
  * Application Switcher: Using the application switcher, you can change from one application to another. You might have to re-enter your credentials if you have not selected "Remember me" on your original login to Cumulocity.
  * User Id: You can see here, under which username you are logged into the system. To logout, click on the icon and select "Logout".
  * Content: Most of the web page is occupied by the content, which changed from page to page.

### How to link into the application?

Each page has its individual URL. For example, to show the basic information for a device, you can enter the following URL:

  * https://<tenant>.cumulocity.com/apps/devicemanagement/index.html#/device/<id>/info

Using this URL, you can

  * Save bookmarks for specific devices or pages
  * Send Emails (manually or automatic using the real-time event engine) which include a link to devices or sensor data.
  * Use the backwards and forwards button in your browser.
  * Write own web applications, that link directly to information in Cumulocity

### How to use Cumulocity on touch devices?

The applications can be used with traditional web browsers, using a keyboard and a mouse. And the applications can be used with touch devices, like tablets and smartphones.

Using Cumulocity with touch devices differs slightly compared to using it with traditional browsers:
   * Responsive Web Design: Many touch devices have less screen real estate. To compensate this, Cumulocity implements a responsive web design, which dynamically adjusts the page layout to the smaller screen. This also happens if you reduce the window size of your web browser. 
   * Touch gestures: TBD
   * No hover: "hover" refers to the effect that when your mouse cursor is over an element, additional information appears. For example, in Cumulocity, when you move the cursor over a device in the device list, then a button to delete the device appears. This behaviour can be emulated on a touch device by "touching" the element for a longer time. 

### How to execute actions?

To provide a consistent user interface, Cumulocity follows the following certain user interface conventions. The conventions help you to understand what certain user elements do and provide you with a consistent behaviour over different actions.

The following conventions for actions exists:
   * Solid filled buttons: This issues an action that will change data in the Cumulocity data base, i.e. on the server side. Example: Save changed data, or install software on the device.
   * Link style button: This issues an action that will open new dialogs or options. It will not perform any change of data in Cumulocity.
   * Inside lists or tables: hover actions
   * Behind COGS Symbol: Use drop down menu

## Asset Management

### Overview

Using the Cumulocity Asset Management, you can create, edit and view your assets in various ways. Assets are the "things" in "Internet of the things". These might be cars, machines, buildings, or other items. Also IoT devices are managed as assets.

With asset management you can:

 * Register new devices
 * Browse existing assets
 * Searching assets 
 * View assets on maps

Assets can be organized in groups:

 * Creating Groups
 * Assign assets to groups
 * Viewing groups
 * Removing Groups
 


## Alarm management

## Device Control

## Asset Tracking
