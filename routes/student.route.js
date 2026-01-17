const express = require('express');
const {
    getStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../controllers/student.controller');

const router = express.Router();

router.get('/getall', getStudents);
router.post('/create', createStudent);
router.get('/:id', getStudentById);
router.put('/update/:id', updateStudent);
router.delete('/delete/:id', deleteStudent);
module.exports = router;