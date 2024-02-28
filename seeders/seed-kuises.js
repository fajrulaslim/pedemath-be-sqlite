const Kuis = require('../models/kuis');

const kuisesData = [
    {
        nama: 'No. 1',
        level_id: 1,
        soal_atas: 12,
        operasi: "+",
        soal_bawah: 13,
        jawaban: 25
      },
      {
        nama: 'No. 2',
        level_id: 1,
        soal_atas: 12,
        operasi: "+",
        soal_bawah: 14,
        jawaban: 26
      },
      {
        nama: 'No. 3',
        level_id: 1,
        soal_atas: 14,
        operasi: "+",
        soal_bawah: 13,
        jawaban: 27
      },
      {
        nama: 'No. 4',
        level_id: 1,
        soal_atas: 15,
        operasi: "+",
        soal_bawah: 13,
        jawaban: 28
      },
      {
        nama: 'No. 5',
        level_id: 1,
        soal_atas: 13,
        operasi: "+",
        soal_bawah: 16,
        jawaban: 29
      },
      // Level 2
      {
        nama: 'No. 1',
        level_id: 2,
        soal_atas: 22,
        operasi: "+",
        soal_bawah: 11,
        jawaban: 33
      },
      {
        nama: 'No. 2',
        level_id: 2,
        soal_atas: 21,
        operasi: "+",
        soal_bawah: 14,
        jawaban: 35
      },
      {
        nama: 'No. 3',
        level_id: 2,
        soal_atas: 24,
        operasi: "+",
        soal_bawah: 12,
        jawaban: 36
      },
      {
        nama: 'No. 4',
        level_id: 2,
        soal_atas: 25,
        operasi: "+",
        soal_bawah: 12,
        jawaban: 37
      },
      {
        nama: 'No. 5',
        level_id: 2,
        soal_atas: 26,
        operasi: "+",
        soal_bawah: 13,
        jawaban: 39
      },
      // Level 3
      {
        nama: 'No. 1',
        level_id: 3,
        soal_atas: 21,
        operasi: "+",
        soal_bawah: 23,
        jawaban: 44
      },
      {
        nama: 'No. 2',
        level_id: 3,
        soal_atas: 23,
        operasi: "+",
        soal_bawah: 22,
        jawaban: 45
      },
      {
        nama: 'No. 3',
        level_id: 3,
        soal_atas: 26,
        operasi: "+",
        soal_bawah: 21,
        jawaban: 47
      },
      {
        nama: 'No. 4',
        level_id: 3,
        soal_atas: 22,
        operasi: "+",
        soal_bawah: 26,
        jawaban: 48
      },
      {
        nama: 'No. 5',
        level_id: 3,
        soal_atas: 25,
        operasi: "+",
        soal_bawah: 24,
        jawaban: 49
      },
];

async function seedKuises() {
    try {
        await Kuis.bulkCreate(kuisesData);
        console.log('Seeder: Data kuises telah dimasukkan');
    } catch (error) {
        console.error('Seeder Error:', error);
    }
}

seedKuises();