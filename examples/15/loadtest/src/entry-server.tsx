import ReactDOMServer from "react-dom/server";
import App from "./App";
import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", (req, reply) => {
  const content = ReactDOMServer.renderToString(<App />);
  reply.header("content-type", "text/html");
  reply.send(`<html><head></head><body>${content}</body></html>`);
});

fastify.listen({ port: 3000 });
