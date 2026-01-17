const express = require('express');
const { getAttendance, createAttendance, getAttendanceById, updateAttendance, deleteAttendance } = require('../controllers/attendence.controller');


const router = express.Router();

router.get('/getall',getAttendance );
router.post('/create', createAttendance);
router.get('/:id', getAttendanceById);
router.put('/update/:id', updateAttendance);
router.delete('/delete/:id', deleteAttendance);
module.exports = router;