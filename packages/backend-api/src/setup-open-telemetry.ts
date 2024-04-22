import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';

const provider = new NodeTracerProvider();
provider.register();

const otlpExporter = new OTLPTraceExporter({
  url: 'http://alloy:4317',
});

provider.addSpanProcessor(new SimpleSpanProcessor(otlpExporter));
