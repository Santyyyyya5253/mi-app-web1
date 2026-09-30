const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Laboratorio 1: Aplicación Web en Contenedores</h1><p>Desplegada exitosamente con Docker.</p>');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
