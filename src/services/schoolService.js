const School = require('../models/schoolModel');
const { getDistance } = require('../utils/distance');

const SchoolService = {
  async addSchool({ name, address, latitude, longitude }) {
    if (!name || !address || !latitude || !longitude) {
      throw new Error('All fields are required');
    }
    if (typeof latitude !== 'number' || typeof longitude !== 'number') {
      throw new Error('Latitude and longitude must be numbers');
    }
    return School.create({ name, address, latitude, longitude });
  },

  async listSchools({ latitude, longitude }) {
    if (!latitude || !longitude) {
      throw new Error('Latitude and longitude are required');
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    if (isNaN(userLat) || isNaN(userLon)) {
      throw new Error('Invalid latitude or longitude');
    }

    const schools = await School.getAll();

    const sortedSchools = schools
      .map((school) => {
        const distance = getDistance(userLat, userLon, school.latitude, school.longitude);
        return { ...school, distance };
      })
      .sort((a, b) => a.distance - b.distance);

    return sortedSchools;
  },
};

module.exports = SchoolService;
