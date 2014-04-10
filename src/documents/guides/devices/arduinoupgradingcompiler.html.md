# Upgrading compiler in Arduino IDE

Currently by default Arduino comes with avr-gcc 4.3.2. This is quite old version and is known to have many bugs. In Cumulocity library these cause Device Control to not work and restart a program. We strongly recommend updating the compiler and??

Whatever your platform is, please have in mind that avr-gcc 4.7.2 and avr-libc 1.8.0 are the currently the only versions confirmed to be working with Device Control functionality. However, we expect that further versions should work as well.

Below you find instructions for?? Mac, Windows and Linux on how to upgrade compiler and libc.

# Mac OS X

## Download packages

For Macintosh you can download the latest versions of 'avr-gcc' and 'avr-libc' using MacPorts.???? You can also download the packages manually from the package repository. Follow these links to download the latest packages of avr-gcc and avr-libc. Then replace them in Arduino IDE directory.

[http://jog.id.packages.macports.org/macports/packages/avr-gcc/](http://jog.id.packages.macports.org/macports/packages/avr-gcc/)
[http://jog.id.packages.macports.org/macports/packages/avr-libc/](http://jog.id.packages.macports.org/macports/packages/avr-libc/)

Darwin\_10 package is for Mac OS X 10.6.x, whereas Darwin 11 is for Mac OS X 10.7.x and Darwin 12 for version 10.8.

??Next you need to merge the contents of these packages with the contents of the Arduino IDE. NOTE, that on Macintosh copying a directory over another directory will completely replace the directory contents ( as opposed to Windows, where a file merge is done).???? Replacing complete directories should not be done - you would loose important files - instead MERGE the contents of the directories.

Open Arduino IDE directories.?? To open the Arduino IDE directories on Macintosh hold "Control" button on keyboard while clicking on the Arduino Application Icon, select "Show Package Contents".

In the Package Contents navigate to directory:

???? ??Contents/Resources/Java/hardware/tools/avr

## Updating GCC?? compiler

Now MERGE the contents of GCC4.7.2 directories over to the Arduino IDE folders, as shown below.
Confirm questions about overwriting/replacement of files.

![final mac copy gcc](images/arduino/final_mac_copy_gcc.png)

## Updating Libc 1.8.0

You also need to update libc to version 1.8.0. Unpack the avr-libc 1.8.0 package and MERGE the files over to the Arduini IDE folders as shown?? below. Confirm questions about overwriting/replacement of files.
NOTE: Do not copy whole directories, as this would remove some files in the Arduini IDE directories ( e.g. the ldscripts folder in avr/lib in the IDE).

![final mac copy libc](images/arduino/final_mac_copy_libc.png)

# 

# Linux

On Fedora you can just install the latest Arduino with following command:

yum install arduino

This should install all the required dependencies, including avr-gcc compiler, in the latest version.

On other distributions you will have to replace libraries in Arduino IDE directory. You can follow these links:
[http://www.micahcarrick.com/installing-gnu-tools-avr-gcc.html](http://www.micahcarrick.com/installing-gnu-tools-avr-gcc.html)

## 

# Windows

Please follow instructions here:??[http://andybrown.me.uk/wk/2012/04/28/avr-gcc-4-7-0-and-avr-libc-1-8-0-compiled-for-windows/](http://andybrown.me.uk/wk/2012/04/28/avr-gcc-4-7-0-and-avr-libc-1-8-0-compiled-for-windows/)

Note: Instructions are for Arduino IDE 1.0. For Arduino IDE 1.0.4 files from "Step 4" will not work. Please use following files for Arduino IDE 1.0.4:??[sources](images/arduino/sources.zip).

## Replace packages

By default avr-gcc is located in:

ARDUINO\_DIR/hardware/tools/avr/lib/gcc/avr/

The avr-libc library is located in:

ARDUINO\_DIR/hardware/tools/avr/lib/avr/

This is where you need to place newly downloaded package
