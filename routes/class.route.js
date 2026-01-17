const express = require("express");
const { getClasses, createClasses, getClassesById, updateClasses, deleteClasses } = require("../controllers/class.controller");
const { getStudentById } = require("../controllers/student.controller");

const router = express.Router();

router.get('/', getClasses);
router.post('/create', createClasses);
router.get('/:id', getClassesById);
router.put('/update/:id', updateClasses);
router.delete('/delete/:id', deleteClasses);
module.exports = router;