---
order: 30
layout: redirect
title: Context support
---

@UserScope and @TenantScope at type level annotation indicate that a bean created from class will be created in the scope defined. The user scope implies using user credentials to authorize against the platform. The tenant scope implies using microservice credentials.

Example of injecting a bean into the tenant scope is available in the Platform Api module as follows:

    @TenantScope
    public EventApi eventApi(Platform platform) throws SDKException {
        return platform.getEventApi();
    }  

And then sample utilization of the bean can be as follows:

    @Autowired
    private PlatformProperties platformProperties;
    @Autowired
    private ContextService<MicroserviceCredentials> contextService;
    @Autowired
    private EventApi eventApi;

    public PagedEventCollectionRepresentation get10Events() {
        return contextService.callWithinContext(
                (MicroserviceCredentials) platformProperties.getMicroserviceBoostrapUser()
                , new Callable<PagedEventCollectionRepresentation>(){
            public PagedEventCollectionRepresentation call(){
                return eventApi.getEvents().get(10);
            }
        });
    }