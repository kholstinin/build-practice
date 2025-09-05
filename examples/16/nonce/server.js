import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";

function generateCSP(nonce) {
  return `script-src 'nonce-${nonce}'`;
}

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
  const nonce = crypto.randomBytes(16).toString("hex");
  reply.header("Content-Security-Policy", generateCSP(nonce));

  reply.type("text/html; charset=utf-8");

  return html.replaceAll("{{NONCE_VALUE}}", nonce);
}

const bundlers = ["webpack", "esbuild", "rollup", "vite"];

bundlers.forEach((bundler) => {
  fastify.get(`/${bundler}`, async function handler(_request, reply) {
    const html = fs.readFileSync(`./dist/${bundler}/index.html`, "utf-8");
    return htmlReply(reply, html);
  });
});

fastify.get(`/nonce`, async function handler(_request, reply) {
  const html = fs.readFileSync(`./static/nonce-example.html`, "utf-8");
  return htmlReply(reply, html);
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
