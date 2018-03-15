---
order: 60
title: Lua plugin
layout: redirect
---

Instead of using `c++` for your development, the library also supports rapid development in `Lua`. For `Lua` plugin support, you must build the library with explicitly enabling `Lua` support, as it's disabled by default, see Chapter (See section ) about how to enable `Lua` plugin support.

Listing 11 demonstrates how to load a `Lua` plugin and add path `lua/` into `Lua`'s `package.path` for library search path.

    // ex-06-lua: src/main.cc
    #include <srluapluginmanager.h>
    // ...
    
    int main()
    {
            // ...
            SrLuaPluginManager lua(agent);
            lua.addLibPath("lua/?.lua");  // add given path to Lua package.path
            lua.load("lua/myplugin.lua"); // load Lua plugin
            // ...
            return 0;
    }

Listing 12 shows how to send CPU measurements and handle operation in `Lua` instead of `c++`. All `Lua` plugins are managed by `SrLuaPluginManager`, it is exposed to all `Lua` plugins as an opaque object named *c8y*. The only requirement for a `Lua` plugin is having a `init` function, which will be called by `SrLuaPluginManager` at load time to initialize the `Lua` plugin.

The example also shows how to define your own `Lua` library and share its variable `myString` in your `Lua` plugins.

    -- ex-06-lua: lua/mylib.lua
    myString = "Hello, Cumulocity!"
    
    ----------------------------------------
    
    -- ex-06-lua: lua/myplugin.lua
    require('mylib')
    local timer
    
    function restart(r)
       c8y:send('105,' .. r:value(2) .. ',EXECUTING')
       for i = 0, r.size - 1 do     -- index in C++ starts from 0.
          srDebug(r:value(i))
       end
       c8y:send('105,' .. r:value(2) .. ',SUCCESSFUL')
    end
    
    function cpuMeasurement()
       local cpu = math.random(100)
       c8y:send('103,' .. c8y.ID .. ',' .. cpu)
    end
    
    function init()
       srDebug(myString)            -- myString from mylib
       timer = c8y:addTimer(10 * 1000, 'cpuMeasurement')
       c8y:addMsgHandler(502, 'restart')
       return 0                     -- signify successful initialization
    end

<div class="note">
You may encounter an error saying "Package lua was not found in the pkg-config search path." when building this example, then you would need to modify the expression `$(shell pkg-config --cflags lua)` to add a proper version number to `lua`. The proper version number depends on your installed Lua version and your Linux distribution.

</div>
