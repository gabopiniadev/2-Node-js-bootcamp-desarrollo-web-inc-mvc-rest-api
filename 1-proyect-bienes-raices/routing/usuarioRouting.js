import express from 'express';

const router = express.Router();

//Routing  GET
router.get('/', (req, res) => {
    res.send('Bienvenido al Curso de NodeJS!');
});

//Routing POST
router.post('/nosotros', (req, res) => {
    res.json('Respuesta de tipo Post!');
});

export default router;