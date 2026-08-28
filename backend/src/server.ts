import { App } from './app.js';

const PORT = Number(process.env.APP_PORT) || 3001;

new App().start(PORT);
