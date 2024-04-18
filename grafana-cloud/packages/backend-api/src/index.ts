import './setup-open-telemetry';
import Fastify from 'fastify';
import { FastifyInstance } from 'fastify';
import fastifyMetrics from 'fastify-metrics';
import cors from '@fastify/cors';
import { feedbackRoutes } from './routes/feedbackRoutes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const fastify = Fastify({
  logger: true,
}) as FastifyInstance;

fastify.register(fastifyMetrics, {
  endpoint: '/metrics',
  enableDefaultMetrics: true,
  enableRouteMetrics: true,
} as any);

const connectToMongo = async () => {
  await mongoose.connect('mongodb://mongo:27017/', {
    dbName: 'team-feedback',
    user: process.env.MONGO_INITDB_ROOT_USERNAME || '',
    pass: process.env.MONGO_INITDB_ROOT_PASSWORD || '',
  });
  console.log('MongoDB connected...');
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
