const path = require('path');
const fastify = require('fastify')({ logger: true });
const fastifyStatic = require('fastify-static');

fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/public/'
});


fastify.listen(3000, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
});
