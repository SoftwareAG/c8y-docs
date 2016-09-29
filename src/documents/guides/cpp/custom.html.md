---
order: 20
title: Customize
layout: default
---
<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#ch:custom">1. Build Customization</a></li>
</ul>
</div>
</div>

# Build Customization<a id="ch:custom" name="ch:custom"></a>


In Chapter (See section ) we briefly explained how to build the library, in this chapter we will go into depth about how to customize the build options to tailor a optimal build for your particular use case.

All customization options listed in the following shall be added in your *init.mk* file.

1.  `SR_PLUGIN_LUA=0`

    Switch for `Lua` plugin support, defaults to 0, which disables `Lua` support. Set it to 1 will enable `Lua` plugin support. Also remember to provide necessary `Lua`'s `C` library and add to your `CPPFLAGS`, `CXXFLAGS`, `LDFLAGS` and `LDLIBS` the required compile and link flags, etc.

2.  `SR_PROTO_HTTP_VERSION=1.1`

    HTTP version, defaults to 1.1. Set it to 1.0 for environments when `HTTP/1.1` is not supported.

3.  `SR_SOCK_RXBUF_SIZE=1024`

    Maximum receive buffer size for `SrNetSocket`, defaults to 1024 bytes. This number dictates the maximum number of bytes the `recv` method of `SrNetSocket` can block waiting for response. This parameter only affects the receive buffer of `SrNetSocket`.

4.  `SR_AGENT_VAL=5`

    Polling interval for `SrAgent`, defaults to 5 milliseconds. Internally `SrAgent` schedules all `SrTimerHandler` and `SrMsgHandler` by constantly polling for expired `SrTimer` and arrived messages from ingress `SrQueue`, this parameter dictates the interval between two consecutive polling. When is parameter is set too high, the agent may appear to be sluggish, whereas when set too low, many CPU cycles are wasted. This is a trade-off parameter that needs to be fine-tuned for any particular device.

5.  `SR_REPORTER_NUM=512`

    Maximum number of aggregated requests, defaults to 512. For saving traffic use, `SrReporter` has a mechanism to aggregate many messages into one request and send them all in once. This number dictates the maximum number of messages that can be aggregated.

6.  `SR_REPORTER_VAL=400`

    Maximum waiting time between two consecutive requests for aggregation, defaults to 400 milliseconds. When aggregating requests, `SrReporter` will wait for consecutive messages with a defined timeout. If the next messages comes after the timeout, `SrReporter` will stop the waiting loop and starts sending the already aggregated messages. When set to a higher number, higher aggregation can be expected, therefore, results in lower traffic use, whereas when set to a lower number, agent will be more responsive since it will not wait for aggregating next message. This is a trade-off parameter that needs to be fine-tuned for any particular use case.

7.  `SR_REPORTER_RETRIES=9`

    Maximum number of retries when sending fails, defaults to 9 times. For counteracting temporary network failures, `SrReporter` implemented an exponential wait and multi-trials measure. When the first trial fails, it waits 1 second and retries again, when the second trial fails, it waits 2 seconds, when the third trial fails, it waits 4 seconds, and so on, until the defined number of retries exhausted. Note when `SrReporter` enters the retry loop, messages sent via `SrAgent` will be queued up in the egress `SrQueue`, until the `SrReporter` successfully sends the aggregated requests so far or exhausts all retries.

8.  `SR_CURL_SIGNAL=1`

    Whether allow *libcurl* from installing any signal handlers, defaults to 1, which allows *libcurl* to install signal handlers. Certain versions of *libcurl* contains a bug that when built with a synchronous DNS resolver, randomly crashes when the DNS lookup timed out. When you experience this issue, you can workaround this bug by disabling *libcurl* from installing signal handlers. As a side effect, *libcurl* will not be able to terminate DNS lookup, recommended approach is to re-built *libcurl* with an asynchronous DNS resolver.

9.  `SR_SSL_VERIFYCERT=1`

    Whether to verify server's certificate when using HTTPS, defaults to 1. Many embedded devices have no CA certificates installed and thus not be able to verify server's certificate when communicating via HTTPS. As a workaround, you can disable certificate verification by setting this macro to 0.

10. `SR_FILEBUF_PAGE_SCALE=3`

    Set scale of page size for file backed buffering, default is 3. When `filebuf` feature is enabled for `SrReporter`, messages are managed at a minimum unit of one page, instead of single message, for easy and efficient buffer managing. Therefore, larger page size will buffer more messages, but messages are also discarded in bigger chunks. In contrary, smaller page size buffers less messages, but messages are also discarded in smaller chunks. Possible page scale values and corresponding page size can be found in Table 1.
    
<table id="tab:pagescale" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption class="t-above"><span class="table-number">Table 1:</span> List of page scale and corresponding page size for filebuf.</caption>

<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="left">Page Scale</th>
<th scope="col" class="left">Page Size</th>
</tr>
</thead>

<tbody>
<tr>
<td class="left">0</td>
<td class="left">512 B</td>
</tr>


<tr>
<td class="left">1</td>
<td class="left">1 KB</td>
</tr>


<tr>
<td class="left">2</td>
<td class="left">2 KB</td>
</tr>


<tr>
<td class="left">3</td>
<td class="left">4 KB</td>
</tr>


<tr>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left">4</td>
<td class="left">8 KB</td>
</tr>


<tr>
<td class="left">5</td>
<td class="left">16 KB</td>
</tr>


<tr>
<td class="left">6</td>
<td class="left">32 KB</td>
</tr>


<tr>
<td class="left">7</td>
<td class="left">64 KB</td>
</tr>
</tbody>
</table>
