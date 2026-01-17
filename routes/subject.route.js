const express = require("express");
const { getClasses, createClasses, getClassesById, updateClasses, deleteClasses } = require("../controllers/class.controller");
const { getStudentById } = require("../controllers/student.controller");
const { getSubjects, createSubject, updateSubject, deleteSubject } = require("../controllers/subject.controller");

const router = express.Router();

router.get('/', getSubjects);
router.post('/create', createSubject);
router.get('/:id', getSubjectsById);
router.put('/update/:id', updateSubject);
router.delete('/delete/:id', deleteSubject);
module.exports = router;