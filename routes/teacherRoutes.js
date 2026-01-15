const express = require("express");
const router = express.Router();
const teacher = require("../models/teacherModel");



// GET ALL
const getAll = async (req, res) => {
    try{
        const teacher = await teacher.findAll();
        res.json(teacher);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    getAll
};