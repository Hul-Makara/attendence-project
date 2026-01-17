const express = require('express');
const router = express.Router();
const Student = require("../models/studentModel");

//  Get all students
const getStudents = async (req, res) => {
    try {
        const students = await Student.findAll();

        res.status(200).json({
            success: true,
            total: students.length,
            data : students
        });
    } catch (error) {
        console.log("Error:", erroe);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};

// create Student
const createStudent = async (req, res) => {
    try {
        const { studentname_kh, studentname_en, gender} = req.body;
        const student = await Student.create({
            studentname_kh,
            studentname_en,
            gender
        });
        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: student
        })
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};

// Get student by id
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findByPk(req.param.id);
        if (!student){
             res.status(404).json({
                success: false,
                messsage: " student not found"
            });
            
        }
        
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            success: false,
            error : error.messsage
        });
    }
};

// Update Student
const updateStudent = async ( req, res) => {
    try {
        const { studentname_kh, studentname_en, ggender} = req.body;
        const student = await Student.findByPk(req.params.id);
        if (!student){
            return res.status(404).json({
                success: false,
                message: " Student not found"
            });
        }
        await student.update({
            studentname_kh,
            studentname_en,
            gender 
        });
        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: student
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error : error.message
        });
    }
};

// Delete Student
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student){
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }
        await student.destroy();
        res.status(200).json({
            success: true,
            message : "Student deleted successfully"
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
    getStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent
};