---
order: 70
title: Microservice subscription
layout: redirect
---

The following section refers to the user management as described in Managing application > [Cumulocity microservices](/guides/concepts/applications/microservices) in the Concepts guide.

This SDK has a task CurrentApplicationSubscriptionsTask, which only fetches a list of all subscriptions. The CurrentApplicationSubscriptionsTask is the IScheduledTask implementation which runs every hour:

            services.AddSingleton<IScheduledTask, CurrentApplicationSubscriptionsTask>();

            services.AddScheduler((sender, args) =>
            {
                Debug.Write(args.Exception.Message);
                args.SetObserved();
            });

It should get all subscriptions and make it available for any other part of my application to work with.

As you can see, the AddScheduler takes a delegate that handles unobserved exceptions. In our scheduler code, TaskFactory.StartNew() is used to run the task’s code. If there is an unhandled exception, you won’t see this exception. 

Therefore you may want to so some logging. This is normally done by setting TaskScheduler.UnobservedTaskException, that is global for this case so added our own to specifically catch scheduled tasks unhandled exceptions.

The SDK allows you to subscribe to the event application subscriptions changed.

Start by getting the singleton instance of the hub:

    var hub = MessageHub.Instance;

You can now use the hub to subscribe to any publication of a given type, in our case OnChangedSubscription.

    public class HomeController : Controller

    {

        private readonly MessageHub _hub;
        private readonly Guid _subscriptionToken;

        public HomeController(Platform platform,MessageHub hub)
        {
            _hub = hub;
            _subscriptionToken =   _hub.Subscribe<List<ChangedSubscription>>(OnChangedSubscription);
        }

        private void OnChangedSubscription(List<ChangedSubscription> obj)
        {

        }

}


