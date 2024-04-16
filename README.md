# Monitoring Solution

This repository offers a comprehensive monitoring solution that's easily deployable, integrating several essential components:

- **Grafana**: A versatile frontend for monitoring and alert management.
- **Prometheus**: A robust monitoring solution designed to pull metrics from various exporters.
- **Node Exporter**: A tool for exposing system metrics to Prometheus.
- **Telegraf**: A monitoring agent capable of gathering metrics from diverse sources.
- **InfluxDB**: A reliable timeseries database for persistent storage of metrics data.
- **Alertmanager**: A component responsible for handling alerts and notifications.

# Getting Started

Deploying and configuring this monitoring solution is quick and straightforward, requiring minimal setup time.

## Deployment:

```bash
$ ./deploy_all.sh
```

Once deployed, you can access the monitoring dashboard at http://localhost:3001/.

## Configuration:

To ensure seamless operation, follow these steps to configure Grafana:

1. Open Grafana Data Sources.
2. Add a new data source with the following details:
   - Name: InfluxDB (or your preferred name)
   - Type: InfluxDB
   - URL: http://influxdb:8086
   - Access: Server (Default)
   - Database: YourDatabaseName
   - HTTP Headers: Add a custom HTTP Header with the following details:
     - Header: Authorization
     - Value: Token [configuration_env.DOCKER_INFLUXDB_INIT_ADMIN_TOKEN]
3. Click on "Save & Test".

Your setup is now complete and ready for use!

## Undeployment:

To remove the deployed monitoring solution, execute the following command:

```bash
$ ./undeploy_all.sh
```

This will clean up the deployment and associated resources.
