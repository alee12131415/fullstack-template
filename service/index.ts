import Fastify from "fastify";

import { api } from "./src/api"

const fastify = Fastify({ logger: true });

fastify.get('/', async (request, reply) => {
    reply.send({ hello: "world "});
});

fastify.register(api, { prefix: "api" });

fastify.listen({
    port: 3000,
    host: "0.0.0.0", // for docker
}, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
