const express = require("express");
const router = express.Router();
const Teacher = require("../models/teacherModel");

// GET ALL
const getAll = async (req, res) => {
    try{
        const teachers = await Teacher.findAll();
        res.json(teachers);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

router.get("/", getAll);

module.exports = router;