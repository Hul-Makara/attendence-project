const express = require("express");
const router = express.Router();
const Teacher = require("../models/teacherModel");

// GET ALL Teachers
const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.findAll();
        res.status(200).json({
            success: true,
            total: teachers.length,
            data: teachers
        });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({
            success: false,
            message: "server error",
            error: err.message
        });
    }
};

// Create a teacher
const createTeacher = async (req, res) => {
    try {
        const { teachername_kh, teachername_en, phone } = req.body;
        const teacher = await Teacher.create({
            teachername_kh,
            teachername_en,
            phone
        });
        res.status(201).json({
            success: true,
            message: "Teacher created successfully",
            data: teacher
        })
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};

// Get teacher by id 
const getTeacherById = async (req, res) => {
    try {
        const teacher = await Teacher.findByPk(req.params.id);
        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: "Teacher not found"
            });
        }
        res.status(200).json({
            success: true,
            data: teacher
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
};


// Update Teacher

const updateTeacher = async (req, res) => {
    try {
        const { teachername_kh, teachername_en, phone } = req.body;
        const teacher = await Teacher.findByPk(req.params.id);

        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: "Teacher not found"
            });
        }
        await teacher.update({
            teachername_kh,
            teachername_en,
            phone
        });
        res.status(200).json({
            success: true,
            message: "Teacher updated successfully",
            data: teacher
        });

    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }

};

// Delete Teacher
const deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByPk(req.params.id);
        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: "Teacher not found"
            });
        }
        await teacher.destroy();
        res.status(200).json({
            success: true,
            message: "Teacher deleted successfully"
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};


module.exports = {
    getTeachers,
    createTeacher,
    getTeacherById,
    updateTeacher,
    deleteTeacher
}