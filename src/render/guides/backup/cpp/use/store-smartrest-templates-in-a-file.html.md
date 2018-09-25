---
order: 50
title: Store SmartREST Templates in a File
layout: redirect
---

Over time, your template collection would grow large, and you would like to store them in a text file instead of hard coding them in your source code. The benefits are tow-fold: you don't need to recompile the code every time only because the templates change, and there is no need to escape special characters which is error-prone.

A utility function `readSrTemplate` is provided for reading template collection from a text file. Listing 9 shows the usage of this function. It reads file *srtemplate.txt* from the current directory and stores the version number and template content into arguments `srversion` and `srtemplate`, respectively.

    // ex-05-template: src/main.cc
    #include <srutils.h>
    // ...
    
    int main()
    {
            // ...
            string srversion, srtemplate;
            if (readSrTemplate("srtemplate.txt", srverision, srtemplate) != 0)
                    return 0;
            // ...
    }

The file format required by `readSrTemplate` is as simple as following:

-   First line contains only the template version number.
-   Every template must be on one line of its own.
-   A line starts with `#` as first character (with no leading spaces or tabs) is considered a comment line and will be ignored.
-   A complete empty line (with no spaces and tabs) will be ignored.
-   No trailing spaces or tabs are allowed for any line except comment lines.

See listing 10 for an example of template file.

    helloc8y_3
    
    10,100,GET,/identity/externalIds/c8y_Serial/%%,,application/json,%%,STRING,
    
    10,101,POST,/inventory/managedObjects,application/json,application/json,%%,, "{""name"":""HelloC8Y-Agent"",""type"":""c8y_hello"", ""c8y_IsDevice"":{},""com_cumulocity_model_Agent"":{}}"
    
    10,102,POST,/identity/globalIds/%%/externalIds,application/json,,%%,STRING STRING,"{""externalId"":""%%"",""type"":""c8y_Serial""}"
    
    10,103,POST,/measurement/measurements,application/json,,%%,NOW UNSIGNED NUMBER,"{""time"":""%%"",""source"":{""id"":""%%""}, ""type"":""c8y_CPUMeasurement"", ""c8y_CPUMeasurement"":{""Workload"":{""value"":%%,""unit"":""%""}}}"
    
    10,104,PUT,/inventory/managedObjects/%%,application/json,,%%,UNSIGNED STRING, "{""c8y_SupportedOperations"":[%%]}"
    
    10,105,PUT,/devicecontrol/operations/%%,application/json,,%%,UNSIGNED STRING, "{""status"":""%%""}"
    
    11,500,$.managedObject,,$.id
    
    11,501,,$.c8y_IsDevice,$.id
    
    11,502,,$.c8y_Restart,$.id,$.deviceId
