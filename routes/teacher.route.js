const express = require("express");
const {
    getTeacher,
    createTeacher,
    getTeacherById,
    updateTeacher,
    deleteTeacher
} = require("../controllers/teacher.controller");

const router = express.Router();    

router.get("/getall", getTeacher);
router.post("/create", createTeacher);    
router.get("/:id", getTeacherById);
router.put("/update/:id", updateTeacher);
router.delete("/delete/:id", deleteTeacher);
module.exports = router;