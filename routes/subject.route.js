const express = require('express');
const { getSubjects, createSubject, getSubjectById, updateSubject, deleteSubject } = require('../controllers/subject.controller');


const router = express.Router();

router.get('/getall', getSubjects);
router.post('/create', createSubject);
router.get('/:id', getSubjectById);
router.put('/update/:id', updateSubject);
router.delete('/delete/:id', deleteSubject);
module.exports = router;