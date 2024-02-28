const User = require('../models/user');

const usersData = [
    { id: 1, nama: 'Admin', kelas: null, total_video: 0, total_materi: 0, total_kuis: 0, total_bintang: 0 },
    { id: 2, nama: 'Davina Anindya Rahayudhie', kelas: '1', total_video: 0, total_materi: 0, total_kuis: 0, total_bintang: 0 },
    { id: 3, nama: 'Dimas Rizky Darmawan', kelas: '1', total_video: 0, total_materi: 0, total_kuis: 0, total_bintang: 0 },
    { id: 4, nama: 'Dwi Retno Ayuningtyas', kelas: '1', total_video: 0, total_materi: 0, total_kuis: 0, total_bintang: 0 },
    { id: 5, nama: 'Gendis Kartika Priyono', kelas: '1', total_video: 0, total_materi: 0, total_kuis: 0, total_bintang: 0 },
    { id: 6, nama: 'Zayyan Abiyyu', kelas: '1', total_video: 0, total_materi: 0, total_kuis: 0, total_bintang: 0 },
];

async function seedUsers() {
    try {
        await User.bulkCreate(usersData);
        console.log('Seeder: Data users telah dimasukkan');
    } catch (error) {
        console.error('Seeder Error:', error);
    }
}

seedUsers();