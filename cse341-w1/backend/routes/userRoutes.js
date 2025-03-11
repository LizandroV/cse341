import express from 'express';
import professional from '../controllers/professional.js';

const route = express.Router();

route.get('/', professional.getAll);
route.get('/:id', professional.getOne);
route.post('/', professional.create);
route.put('/:id', professional.update);
route.delete('/:id', professional.delete);

export default route;