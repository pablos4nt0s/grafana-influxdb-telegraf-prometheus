import {
  initializeFaro,
  ConsoleInstrumentation,
  LogLevel,
  WebVitalsInstrumentation,
  ErrorsInstrumentation,
  FetchTransport,
} from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

const faroInstance = initializeFaro({
  transports: [
    new FetchTransport({
      url: process.env.REACT_APP_GRAFANA_FARO_URL ?? '',
    }),
  ],
  app: {
    name: 'Team Feedback',
    environment: 'production',
  },
  instrumentations: [
    new ConsoleInstrumentation({
      disabledLevels: [
        LogLevel.WARN,
        LogLevel.LOG,
        LogLevel.DEBUG,
        LogLevel.INFO,
      ],
    }),
    new ErrorsInstrumentation(),
    new WebVitalsInstrumentation(),
    new TracingInstrumentation(),
  ],
  batching: {
    enabled: true,
  },
});

export const pushError = (error: Error) => {
  faroInstance?.api.pushError(error);
};

export const pushLog = (message: string | number) => {
  faroInstance?.api.pushLog([message]);
};

export const pushView = (viewName: string) => {
  faroInstance?.api.setView({ name: viewName });
};
