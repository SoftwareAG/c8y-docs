---
weight: 40
title: Customizing the build
layout: redirect
---

In [Building the C++ library](/device-sdk/cpp/#build) we briefly explained how to build the library. In this section we will go into depth about how to customize the build options to tailor an optimal build for your particular use case.

All the following customization options shall be added in your *init.mk* file.

Option                  |  Description  
------------------------|------------------------
SR_PLUGIN_LUA <span style="display:inline-block; width:200px"> </span>           |  Switch for Lua plugin support. Defaults to 0, which disables Lua support. Setting it to 1 will enable Lua plugin support. Also remember to provide the necessary Lua's C library, and add to your `CPPFLAGS`, `CXXFLAGS`, `LDFLAGS` and `LDLIBS` the required compile and link flags, etc.
SR_PROTO_HTTP_VERSION   |  HTTP version, defaults to 1.1. Set it to 1.0 for environments when HTTP/1.1 is not supported.
SR_SOCK_RXBUF_SIZE      |  Maximum receive buffer size for `SrNetSocket`, defaults to 1024 bytes. This number dictates the maximum number of bytes the `recv` method of `SrNetSocket` can block waiting for response. This parameter only affects the receive buffer of `SrNetSocket`.
SR_AGENT_VAL            |  Polling interval for `SrAgent`, defaults to 5 milliseconds. Internally `SrAgent` schedules all `SrTimerHandler` and `SrMsgHandler` by constantly polling for expired `SrTimer` and arrived messages from ingress `SrQueue`. This parameter dictates the interval between two consecutive pollings. When this parameter is set too high, the agent may appear to be sluggish, whereas when it is set too low, many CPU cycles are wasted. This is a trade-off parameter that needs to be fine-tuned for any particular device.
SR_REPORTER_NUM         |  Maximum number of aggregated requests, defaults to 512. For saving traffic use, `SrReporter` has a mechanism to aggregate many messages into one request and send them all at once. This number dictates the maximum number of messages that can be aggregated.
SR_REPORTER_VAL         |  Maximum waiting time between two consecutive requests for aggregation, defaults to 400 milliseconds. When aggregating requests, `SrReporter` will wait for consecutive messages with a defined timeout. If the next messages come after the timeout, `SrReporter` will stop the waiting loop and starts sending the already aggregated messages. When set to a higher number, higher aggregation can be expected, therefore, results in lower traffic use, whereas when set to a lower number, the agent will be more responsive since it will not wait for aggregating the next message. This is a trade-off parameter that needs to be fine-tuned for any particular use case.
SR_REPORTER_RETRIES     |  Maximum number of retries when sending fails, defaults to 9 times. For counteracting temporary network failures, `SrReporter` implemented an exponential wait and multi-trials measure. When the first trial fails, it waits 1 second and retries again; when the second trial fails, it waits 2 seconds; when the third trial fails, it waits 4 seconds, and so on, until the defined number of retries are exhausted. Note when `SrReporter` enters the retry loop, messages sent via `SrAgent` will be queued up in the egress `SrQueue`, until the `SrReporter` successfully sends the aggregated requests so far or exhausts all retries.
SR_CURL_SIGNAL          |  Whether allows `libcurl` from installing any signal handlers, defaults to 1, which allows `libcurl` to install signal handlers. Certain versions of `libcurl` contains a bug that when built with a synchronous DNS resolver, randomly crashes when the DNS lookup timed out. When you experience this issue, you can workaround this bug by disabling `libcurl` from installing signal handlers. As a side effect, `libcurl` will not be able to terminate DNS lookup.The recommended approach is to re-built `libcurl` with an asynchronous DNS resolver.
SR_SSL_VERIFYCERT  |  Whether to verify server's certificate when using HTTPS, defaults to 1. Many embedded devices have no CA certificates installed and thus not be able to verify server's certificate when communicating via HTTPS. As a workaround, you can disable certificate verification by setting this macro to 0.
SR_FILEBUF_PAGE_SCALE  |  Set scale of page size for file backed buffering, default is 3. When `filebuf` feature is enabled for `SrReporter`, messages are managed at a minimum unit of one page, instead of single message, for easy and efficient buffer managing. Therefore, larger page size will buffer more messages, but messages are also discarded in bigger chunks. In contrary, smaller page size buffers less messages, but messages are also discarded in smaller chunks.

The following table has the page scale and its corresponding page size for filebuf.

Page Scale  |  Page Size
---|---
0  |  512 B
1  |  1 KB
2  |  2 KB
3  |  4 KB
4  |  8 KB
5  |  16 KB
6  |  32 KB
7  |  64 KB
