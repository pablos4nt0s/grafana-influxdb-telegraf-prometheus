# Monitoring Solution

This repository offers a comprehensive monitoring solution that's easily deployable, integrating several essential components:

- **Grafana**: A versatile frontend for monitoring and alert management.
- **Prometheus**: A robust monitoring solution designed to pull metrics from various exporters.
- **Node Exporter**: A tool for exposing system metrics to Prometheus.
- **Telegraf**: A monitoring agent capable of gathering metrics from diverse sources.
- **InfluxDB**: A reliable timeseries database for persistent storage of metrics data.
- **Node.js Application**: App example using Prometheus client for Node.js.

# Getting Started

Deploying and configuring this monitoring solution is quick and straightforward, requiring minimal setup time.

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
