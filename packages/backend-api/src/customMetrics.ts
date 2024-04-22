import client from 'prom-client';

// NOTE: These metrics are still not used in the codebase.

export const feedbackCount = new client.Gauge({
  name: 'feedback_count',
  help: 'Number of feedbacks given',
});

export const userCount = new client.Gauge({
  name: 'user_count',
  help: 'Number of users in the system',
});
