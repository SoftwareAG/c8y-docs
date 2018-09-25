---
order: 60
title: Building a scheduled task
layout: redirect
---

In order to add a new scheduled task, add it as shown in the example below. All scheduled tasks should look similar to

    public class SomeTask : IScheduledTask
    {
        public string Schedule => "0 1/6 * * *";

        public async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            //...
        }
    }

where the Schedule property is a cron expression and ExecuteAsync() method is the work to execute asynchronously.

Then you can easily register scheduled tasks

    public void ConfigureServices(IServiceCollection services)
    {
        // ...
        // Add scheduled tasks
        services.AddSingleton<IScheduledTask, SomeTask>();
    }