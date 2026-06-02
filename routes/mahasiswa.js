const express = require('express');
const router = express.Router();
const { mahasiswa } = require('../data/dataMahasiswa');


// get semua mahasiswa
router.get('/', (req, res) => {
    res.json({
        success: true,
        total: mahasiswa.length,
        data: mahasiswa
    });
});

// get mahasiswa berdasarkan id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const mhs = mahasiswa.find(m => m.id === id);

    if (!mhs) {
        return res.status(404).json({
            success: false,
            message: 'Mahasiswa tidak ditemukan'
        });
    }

    res.json({
        success: true,
        data: mhs
    });
});

//post tambah mahasiswa

router.post('/', (req, res) => {
    const { nama, nim, jurusan } = req.body;
    //validasi
    if (!nama || !nim || !jurusan) {
        return res.status(400).json({
            success: false,
            message: 'Nama, NIM, dan jurusan harus diisi'
        });
    }

    const mhsBaru = {
        id: getNextId(),
        nama,
        nim,
        jurusan
    };

    mahasiswa.push(mhsBaru);

    res.status(201).json({
        success: true,
        pesan: 'Mahasiswa berhasil ditambahkan',
        data: mhsBaru
    });
});

// update 
//PUT

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const idx = mahasiswa.findIndex(m => m.id === id);

    if (idx === -1) {
        return res.status(404).json({
            success: false,
            message: 'Mahasiswa tidak ditemukan'
        });
    }
    const { nama, nim, jurusan } = req.body;

    // partian update
    if (nama) mahasiswa[idx].nama = nama;
    if (nim) mahasiswa[idx].nim = nim;
    if (jurusan) mahasiswa[idx].jurusan = jurusan;

    res.json({
        success: true,
        pesan: 'Mahasiswa berhasil diupdate',
        data: mahasiswa[idx]
    });
});

// delete mahasiswa
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const idx = mahasiswa.findIndex(m => m.id === id);

    if (idx === -1) {
        return res.status(404).json({
            success: false,
            message: 'Mahasiswa tidak ditemukan'
        });
    }

    //hapus data
    const dihapus = mahasiswa.splice(idx, 1);
    res.json({
        success: true,
        pesan: 'Mahasiswa berhasil dihapus',
        data: dihapus[0]
    });
});

//export router
module.exports = router;