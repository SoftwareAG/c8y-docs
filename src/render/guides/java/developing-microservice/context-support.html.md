---
order: 30
layout: redirect
title: Context support
---
The following section describes context support, as utility tool for the user management description in Managing application > [Cumulocity microservices](/guides/concepts/applications/microservices) in the Concepts guide.

@UserScope and @TenantScope at type level annotation indicate that a bean created from class will be created in the scope defined. The user scope implies using tenant platform user credentials for platform calls. The tenant scope implies using service user credentials.

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
