// data sementara untuk mahasiswa
// pengganti database sementara

let mahasiswa = [
    {
        id: 1,
        nama: 'Budi Santoso',
        nim: '2024001',
        jurusan: 'Teknik Informatika'
    },
    {
        id: 2,
        nama: 'Siti Rahayu',
        nim: '2024002',
        jurusan: 'Sistem Informasi'
    },
]

// nextid untuk auto-increment id mahasiswa baru
let nextId = 3;

module.exports = { mahasiswa, getNextId: () => nextId++ };