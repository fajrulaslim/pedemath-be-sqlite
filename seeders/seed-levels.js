const Level = require('../models/level');

const levelsData = [
    { id: 1, nama: 'Level 1'},
    { id: 2, nama: 'Level 2' },
    { id: 3, nama: 'Level 3' },
];

async function seedLevels() {
    try {
        await Level.bulkCreate(levelsData);
        console.log('Seeder: Data levels telah dimasukkan');
    } catch (error) {
        console.error('Seeder Error:', error);
    }
}

seedLevels();