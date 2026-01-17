const express = require("express");
const {
    getTeachers,
    createTeacher,
    getTeacherById,
    updateTeacher,
    deleteTeacher
} = require("../controllers/teacher.controller");

const router = express.Router();    

router.get("/getall", getTeachers);
router.post("/create", createTeacher);    
router.get("/:id", getTeacherById);
router.put("/update/:id", updateTeacher);
router.delete("/delete/:id", deleteTeacher);
module.exports = router;