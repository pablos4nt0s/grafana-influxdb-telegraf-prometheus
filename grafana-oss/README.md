# Monitoring Playground for Grafana

This repository aims to serve as a playground for monitoring using popular tools, providing a comprehensive solution that's easily deployable. It integrates several essential components:

- **Grafana**: A versatile frontend for monitoring and alert management.
- **Prometheus**: A robust monitoring solution designed to pull metrics from various exporters.
- **Node Exporter**: A tool for exposing system metrics to Prometheus.
- **Telegraf**: A monitoring agent capable of gathering metrics from diverse sources.
- **InfluxDB**: A reliable timeseries database for persistent storage of metrics data.
- **Node.js Application**: Sample app utilizing the Prometheus client for Node.js.

![alt text](image.png)

# Getting Started

Deploying and configuring this monitoring solution is quick and straightforward, requiring minimal setup time.

## Prerequisites

You need to have [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

## Deployment:

```bash
$ ./deploy_all.sh
```

Once deployed, you can access the monitoring dashboard at http://localhost:3000/.

## Undeployment:

To remove the deployed monitoring solution, execute the following command:

```bash
$ ./undeploy_all.sh
```

This will clean up the deployment and associated resources.
