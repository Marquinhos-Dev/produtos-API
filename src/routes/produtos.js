import express from 'express';
const produtosRouter = express.Router();
import * as functions from '../controller/produtos.js';

produtosRouter.post('/', functions.store);
produtosRouter.get('/', functions.index);
produtosRouter.get('/:id', functions.show);
produtosRouter.put('/:id', functions.update);
produtosRouter.delete('/:id', functions.destroy);

export default produtosRouter;