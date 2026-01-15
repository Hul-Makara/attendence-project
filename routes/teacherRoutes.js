const express = require("express");
const {
    getTeachers,
    createTeacher,
    getTeacherById,
    updateTeacher,
    deleteTeacher
} = require("../controllers/teacherController");

const router = express.Router();    

router.get("/", getTeachers);
router.post("/", createTeacher);    
router.get("/:id", getTeacherById);
router.put("/:id", updateTeacher);
router.delete("/:id", deleteTeacher);
module.exports = router;