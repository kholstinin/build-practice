import path from "node:path";
import fs from "node:fs";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyStatic, {
  root: [
    path.resolve(import.meta.dirname, "dist"),
    path.resolve(import.meta.dirname, "static"),
  ],
});

function htmlReply(reply, html) {
  reply.type("text/html; charset=utf-8");

  return html;
}

const bundlers = ["webpack", "esbuild", "rollup", "vite"];

bundlers.forEach((bundler) => {
  fastify.get(`/${bundler}`, async function handler(_request, reply) {
    const html = fs.readFileSync(`./dist/${bundler}/index.html`, "utf-8");
    return htmlReply(reply, html);
  });
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
