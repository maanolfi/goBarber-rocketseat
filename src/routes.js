import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ hello: 'marco veio dfff' });
});

export default routes;
