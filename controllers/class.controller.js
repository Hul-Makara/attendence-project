const express = require('express');
const router = express.Router();
const Classes = require('../models/classModel');

// Get all classes
const getClasses = async (req, res) => {
    try {
        const classes = await Classes.findAll();
        res.status(200).json({
            success: true,
            total: classes.length,
            data: classes
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            succcess: false,  // Typo: should be success
            message: "Server error",
            error: error.message
        });
    }
};

// Create Classes
const createClasses = async (req, res) => {
    try {
        const { class_code, class_year, schedule, room_number, subject_id } = req.body;
        const newClasses = await Classes.create({
            class_code,
            class_year,
            schedule,
            room_number,
            subject_id
        });
        res.status(201).json({
            success: true,
            message: "Classes created successfully",
            data: newClasses
        });
    } catch (error) {
        console.log("Error:", error),
            res.status(500).json({
                success: false,
                message: " server error",
                error: error.message
            });
    }
};
// Get Classes by id
const getClassesById = async (req, res) => {
    try {
        const classesData = await Classes.findByPk(req.params.id);
        if (!classesData) {
            return res.status(404).json({
                success: false,
                message: "Classes not found"
            });
        }
        res.status(200).json({
            success: true,
            data: classesData
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};

// Update Classes
const updateClasses = async (req, res) => {
    try {
        const { class_code, class_year, schedule, room_number, subject_id } = req.body;
        const classes = await Classes.findByPk(req.params.id); // Fixed: Changed from req.param.id to req.params.id
        if (!classes) {
            return res.status(404).json({
                success: false,
                message: "Class not Found"
            });
        }
        await classes.update({
            class_code,
            class_year,
            schedule,
            room_number,
            subject_id
        });
        res.status(200).json({
            success: true,
            message: "Class Updated successfully",
            data: classes
        })
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Delete Classes (fixed variable name)
const deleteClasses = async (req, res) => {
    try {
        const classes = await Classes.findByPk(req.params.id); // Fixed: Changed from 'classes' to 'Classes' (capital C)
        if (!classes) {
            return res.status(404).json({
                success: false,
                message: "Class not found"
            });
        }
        await classes.destroy();
        res.status(200).json({
            success: true,
            messsage: "Class deleted Successfully"
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    getClasses,
    createClasses,
    getClassesById,
    updateClasses,
    deleteClasses
}