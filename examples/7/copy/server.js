import path from "node:path";
import fs from "node:fs";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";

const html = fs.readFileSync('./dist/index.html', 'utf-8');

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyStatic, {
  root: [path.join(import.meta.dirname, "dist"), path.join(import.meta.dirname, "static")],
});

fastify.get("/", async function handler(request, reply) {
  reply.type('text/html; charset=utf-8')
  return reply.send(html);
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
