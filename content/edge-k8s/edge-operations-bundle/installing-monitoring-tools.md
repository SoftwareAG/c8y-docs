---
weight: 12
title: Installing and Configuring Monitoring Tools
layout: redirect
---

### Installing Prometheus {#prometheus-install}
Prometheus is an open-source project that is used for monitoring application state. See https://prometheus.io/ for detailed information on Prometheus and how to use it. See [Installing Prometheus](https://prometheus.io/docs/prometheus/latest/installation/) for detailed steps on installing Prometheus.

### Installing Grafana {#Grafana-install}
Grafana is an open-source project which serves as an introductory tool for querying, visualising, alerting, and exploring metrics, logs, and traces from diverse storage locations. See https://grafana.com/docs/grafana/latest/ for detailed information on Grafana and how to use it. See [Installing Grafana](https://grafana.com/docs/grafana/latest/setup-grafana/installation/) for detailed steps on installing Grafana.

### Configuring Prometheus {#prometheus-config}
Prometheus can be configured with a custom configuration file. The file should be placed into /etc/prometheus/prometheus.yml. Two example files are provided below, one for when certificate validation is skipped, and one for validating with certificates.

Configuration file when skipping certificate validation:
```
global:
  scrape_interval: 90s
  scrape_timeout: 90s
  evaluation_interval: 1m

scrape_configs:
- job_name: 'c8yedge-metrics'
  scrape_interval: 120s

  metrics_path: /metrics
  scheme: https
  tls_config:
    insecure_skip_verify: true
  static_configs:
    - targets:
      - <domain>:8443
```

Configuration file with certificate validation:
```
global:
  scrape_interval: 90s
  scrape_timeout: 90s
  evaluation_interval: 1m

scrape_configs:
- job_name: 'c8yedge-metrics'
  scrape_interval: 120s

  metrics_path: /metrics
  scheme: https
  tls_config:
    ca_file: /etc/ssl/ca.crt
    cert_file: /etc/ssl/client.crt
    key_file: /etc/ssl/client.key
  static_configs:
    - targets:
      - <domain>:8443
```
