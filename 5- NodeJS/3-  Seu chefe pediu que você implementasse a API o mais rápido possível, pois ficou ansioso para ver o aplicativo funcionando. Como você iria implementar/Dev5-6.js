const express = require('express');
const app = express();

app.get('/listar/:status_code', (req, res) => {
    const status_code = req.params.status_code;
    if (status_code == 404) {
        res.sendStatus(404);
    } else if (status_code == 200) {
        res.status(200).send('Olá Mundo!');
    } else {
        res.status(400).json({ message: 'Código de status inválido' });
    }
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
