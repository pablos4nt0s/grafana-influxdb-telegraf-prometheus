import './setup-open-telemetry';
import Fastify from 'fastify';
import fastifyMetrics from 'fastify-metrics';
import cors from '@fastify/cors';
import { feedbackRoutes } from './routes/feedbackRoutes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import pino from 'pino';
import pinoLoki from 'pino-loki';
import promClient from 'prom-client';
import './customMetrics';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const logger = pino(
  {
    level: 'trace',
  },
  pinoLoki({
    batching: false,
    labels: { application: 'backend-api' },
    host: process.env.GRAFANA_CLOUD_LOKI_URL!,
    basicAuth: {
      username: process.env.GRAFANA_CLOUD_LOKI_USERNAME!,
      password: process.env.GRAFANA_CLOUD_API_KEY!,
    },
  })
);

const fastify = Fastify({
  logger,
});

fastify.register(fastifyMetrics, {
  endpoint: '/metrics',
  defaultMetrics: { enabled: true },
  routeMetrics: { enabled: true },
  promClient,
});

const connectToMongo = async () => {
  await mongoose.connect('mongodb://mongo:27017/', {
    dbName: 'team-feedback',
    user: process.env.MONGO_INITDB_ROOT_USERNAME!,
    pass: process.env.MONGO_INITDB_ROOT_PASSWORD!,
  });
  fastify.log.info('MongoDB connected...');
};

const start = async () => {
  try {
    await connectToMongo();
    await fastify.register(cors);
    await fastify.register(feedbackRoutes);
    await fastify.listen({ port: 3001, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
