const db = require('../config/database');

const School = {
  async create({ name, address, latitude, longitude }) {
    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [name, address, latitude, longitude];
    const { rows } = await db.query(query, values);
    return rows[0];
  },

  async getAll() {
    const query = 'SELECT * FROM schools';
    const { rows } = await db.query(query);
    return rows;
  },
};

module.exports = School;
