const express = require('express');
const app = express();
const port = 3000;

//middleware: passing data in json format
app.use(express.json());

// import & gunakan routes mahasiswa
const mahasiswaRoutes = require('./routes/mahasiswa');
app.use('/api/mahasiswa', mahasiswaRoutes);

// route dasar 
app.get('/', (req, res) => {
    res.json({ pesan: 'server CRUD Aktif' });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});