const express = require('express');
const router = express.Router();
const SchoolController = require('../controllers/schoolController');

router.post('/addSchool', SchoolController.addSchool);
router.get('/listSchools', SchoolController.listSchools);

module.exports = router;
