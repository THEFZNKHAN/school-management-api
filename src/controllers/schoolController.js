const SchoolService = require('../services/schoolService');

const SchoolController = {
  async addSchool(req, res, next) {
    try {
      const school = await SchoolService.addSchool(req.body);
      res.status(201).json({ message: 'School added successfully', school });
    } catch (error) {
      next(error);
    }
  },

  async listSchools(req, res, next) {
    try {
      const schools = await SchoolService.listSchools(req.query);
      res.json(schools);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = SchoolController;
