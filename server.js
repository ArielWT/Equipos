// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Carpeta con tu webapp estática
const staticDir = path.join(__dirname, 'webapp');
app.use(express.static(staticDir));

// Si quieres soportar rutas tipo SPA, descomenta esto:
// app.get('*', (_, res) => res.sendFile(path.join(staticDir, 'index.html')));

app.listen(PORT, () => {
  console.log(`Servidor web escuchando en puerto ${PORT}`);
});
