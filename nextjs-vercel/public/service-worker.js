import { cacheGenerator } from './tulo.js';

const version = 2.0;

const imageCacheSpec = {
  name: 'imageCache' + version,
  types: ['image'],
  urls: ['vercel.svg', 'favicon.ico'],
  strategy: 'NetworkFirst',
  expiration: 60 * 60 * 1000,
};

cacheGenerator([imageCacheSpec]);
