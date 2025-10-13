// server.js (archivos en raíz)
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sirve estáticos desde la raíz del repo
const staticDir = __dirname;
app.use(express.static(staticDir));

// SPA opcional:
// app.get('*', (_, res) => res.sendFile(path.join(staticDir, 'index.html')));

app.listen(PORT, () => {
  console.log(`Servidor web escuchando en puerto ${PORT}`);
});
