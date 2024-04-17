const { createServer } = require('http');
const { URL } = require('url');
const { Registry, collectDefaultMetrics, Histogram } = require('prom-client');

const register = new Registry();

register.setDefaultLabels({
  app: 'app-example-api'
});

collectDefaultMetrics({ register });

const httpRequestDurationMicroseconds = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10] // 0.1 to 10 seconds
});

register.registerMetric(httpRequestDurationMicroseconds);

const createOrderHandler = async (req, res) => {
  // return an error 1% of the time
  if (Math.floor(Math.random() * 100) === 0) {
    throw new Error('Internal Error');
  }

  // delay for 3-6 seconds
  const delaySeconds = Math.floor(Math.random() * (6 - 3)) + 3;
  await new Promise(resolve => setTimeout(resolve, delaySeconds * 1000));

  res.end('Order created successfully');
};

const server = createServer(async (req, res) => {
  const end = httpRequestDurationMicroseconds.startTimer();
  const route = new URL(req.url, `http://${req.headers.host}`).pathname;

  try {
    if (route === '/metrics') {
      res.setHeader('Content-Type', register.contentType);
      res.end(register.metrics());
      return;
    }

    if (route === '/orders') {
      await createOrderHandler(req, res);
      return;
    }
  } catch (error) {
    res.writeHead(500).end();
    return;
  }

  res.writeHead(404).end(); // Default 404 handler
  end({ route, code: res.statusCode, method: req.method });
});

server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
