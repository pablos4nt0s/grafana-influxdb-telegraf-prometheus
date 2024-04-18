import { FastifyInstance, FastifyPluginCallback } from 'fastify';
import Feedback from '../models/Feedback';
import { PaginatedResponseQueryParams } from '../types';

const JOHN_DOE_ID = 1;

export const feedbackRoutes: FastifyPluginCallback = (
  fastify: FastifyInstance,
  opts,
  done
) => {
  fastify.get<PaginatedResponseQueryParams>(
    '/feedbacks/given',
    async (request, reply) => {
      const { page = 1, pageSize = 50 } = request.query;

      try {
        const feedbacks = await Feedback.find({ reviewer_id: JOHN_DOE_ID })
          .populate('reviewee_id')
          .populate('reviewer_id')
          .limit(pageSize)
          .skip((page - 1) * pageSize)
          .then((feedbacks) =>
            feedbacks.map((feedback) => ({
              ...feedback.toObject(),
              reviewer: feedback.reviewer_id,
              reviewee: feedback.reviewee_id,
            }))
          );
        const total = await Feedback.countDocuments({
          reviewer_id: JOHN_DOE_ID,
        });

        reply.send({
          data: feedbacks,
          total,
          page,
          totalPages: Math.ceil(total / pageSize),
        });
      } catch (error) {
        fastify.log.error(error);
        reply.status(500).send({ error: 'Failed to fetch data' });
      }
    }
  );

  fastify.get<PaginatedResponseQueryParams>(
    '/feedbacks/received',
    async (request, reply) => {
      const { page = 1, pageSize = 50 } = request.query;

      try {
        const feedbacks = await Feedback.find({ reviewee_id: JOHN_DOE_ID })
          .populate('reviewee_id')
          .populate('reviewer_id')
          .limit(pageSize)
          .skip((page - 1) * pageSize)
          .then((feedbacks) =>
            feedbacks.map((feedback) => ({
              ...feedback.toObject(),
              reviewer: feedback.reviewer_id,
              reviewee: feedback.reviewee_id,
            }))
          );
        const total = await Feedback.countDocuments({
          reviewee_id: JOHN_DOE_ID,
        });

        reply.send({
          data: feedbacks,
          totalPages: Math.ceil(total / pageSize),
          total,
          page,
        });
      } catch (error) {
        fastify.log.error(error);
        reply.status(500).send({ error: 'Failed to fetch data' });
      }
    }
  );

  done();
};
