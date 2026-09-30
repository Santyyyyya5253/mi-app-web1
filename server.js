const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Laboratorio 3: Pipeline CI/CD Funcional v2.0</h1><p>Despliegue automatizado con Jenkins y Docker.</p>');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
