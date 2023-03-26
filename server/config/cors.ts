import envs from './env';

const allowedProdHeaders = ['Content-Type', 'Authorization'];

export default {
      origin: envs.MODE === 'dev' ? envs.DEV_ORIGIN : '',
      allowedHeaders: envs.MODE === 'dev' ? '*' : allowedProdHeaders,
      methods: ['GET', 'POST', 'PUT', 'DELETE']
}