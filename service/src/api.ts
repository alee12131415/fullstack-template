import type { FastifyPluginCallback } from "fastify";

export const api: FastifyPluginCallback = (fastify, opts, done) => {
    fastify.get("/title", async (request, reply) => {
        reply.send({ title: "Title from server"});
    });

    done();
};
