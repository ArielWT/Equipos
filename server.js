const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Si tus archivos están en webapp/
const staticDir = path.join(__dirname, 'webapp');
// Si todavía están en la raíz, usa: const staticDir = __dirname;

app.use(express.static(staticDir));
// Si en el futuro usas SPA:
// app.get('*', (_, res) => res.sendFile(path.join(staticDir, 'index.html')));

app.listen(PORT, () => console.log(`Servidor web escuchando en puerto ${PORT}`));
