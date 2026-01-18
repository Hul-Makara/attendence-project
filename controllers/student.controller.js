
const Student = require("../models/studentModel");

// Get all students
const getStudents = async (req, res) => {
    try {
        // REMOVE the include for now, or fix the association
        const students = await Student.findAll();

        res.status(200).json({
            success: true,
            total: students.length,
            data: students
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

// Create Student
const createStudent = async (req, res) => {
    try {
        const { class_id, studentname_kh, studentname_en, gender } = req.body;
        
        // Basic validation
        if (!studentname_kh || !studentname_en) {
            return res.status(400).json({
                success: false,
                message: "Student name (Khmer and English) is required"
            });
        }
        
        const student = await Student.create({
            studentname_kh,
            studentname_en,
            gender: gender || null,
            class_id: class_id || null
        });
        
        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: student
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

// Get student by id
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }
        
        res.status(200).json({
            success: true,
            data: student
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Update Student
const updateStudent = async (req, res) => {
    try {
        const { class_id, studentname_kh, studentname_en, gender } = req.body;
        const student = await Student.findByPk(req.params.id);
        
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }
        
        await student.update({
            studentname_kh: studentname_kh || student.studentname_kh,
            studentname_en: studentname_en || student.studentname_en,
            gender: gender || student.gender,
            class_id: class_id || student.class_id
        });
        
        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: student
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

// Delete Student
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }
        
        await student.destroy();
        res.status(200).json({
            success: true,
            message: "Student deleted successfully"
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
    getStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent
};
