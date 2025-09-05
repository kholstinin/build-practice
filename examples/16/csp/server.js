import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";

function generateCSP() {
  // log - 'sha256-/b/HvSeUCyUL0XlV1ZK0nwDk18O2BpM5Scj+dZ1weIY='
  // button - 'sha256-SXo66yMaTv67XnUOYpq/cNBwdOiCX5bEf2jWIu3jgvQ='
  return `script-src 'self'`;
}

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyStatic, {
  root: [path.resolve(import.meta.dirname, "dist"), path.resolve(import.meta.dirname, "static")],
});

function htmlReply(reply, bundler) {
  reply.header("Content-Security-Policy", generateCSP());

  const html = fs.readFileSync(`./dist/${bundler}/index.html`, "utf-8");
  reply.type("text/html; charset=utf-8");

  return html;
}

const bundlers = ["webpack", "esbuild", "rollup", "vite"];

bundlers.forEach((bundler) => {
  fastify.get(`/${bundler}`, async function handler(_request, reply) {
    return htmlReply(reply, bundler);
  });
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
