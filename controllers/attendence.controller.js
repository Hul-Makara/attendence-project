const Attendance = require("../models/attendanceModel");
const Student = require("../models/studentModel");
const Teacher = require("../models/teacherModel");
const Subject = require("../models/subjectModel");

// Get all attendance records
const getAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findAll({
            include: [
                { model: Student },
                { model: Teacher },
                { model: Subject }
            ]
        });

        res.status(200).json({
            success: true,
            total: attendance.length,
            data: attendance
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};

// Create attendance record
const createAttendance = async (req, res) => {
    try {
        const { student_id, teacher_id, subject_id, attendance_date, status, notes } = req.body;

        const attendance = await Attendance.create({
            student_id,
            teacher_id,
            subject_id,
            attendance_date,
            status,
            notes
        });

        res.status(201).json({
            success: true,
            message: "Attendance created successfully",
            data: attendance
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};

// Get attendance by student ID
const getAttendanceByStudent = async (req, res) => {
    try {
        const attendance = await Attendance.findAll({
            where: { student_id: req.params.studentid },
            include: [
                { model: Student },
                { model: Teacher },
                { model: Subject }
            ]
        });

        res.status(200).json({
            success: true,
            total: attendance.length,
            data: attendance
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Get attendance by ID
const getAttendanceById = async (req, res) => {
    try {
        const attendance = await Attendance.findByPk(req.params.id, {
            include: [
                { model: Student },
                { model: Teacher },
                { model: Subject }
            ]
        });

        if (!attendance) {
            return res.status(404).json({
                success: false,
                message: "Attendance not found"
            });
        }

        res.status(200).json({
            success: true,
            data: attendance
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Update attendance
const updateAttendance = async (req, res) => {
    try {
        const { student_id, teacher_id, subject_id, attendance_date, status, notes } = req.body;

        const attendance = await Attendance.findByPk(req.params.id);

        if (!attendance) {
            return res.status(404).json({
                success: false,
                message: "Attendance not found"
            });
        }

        await attendance.update({
            student_id,
            teacher_id,
            subject_id,
            attendance_date,
            status,
            notes
        });

        res.status(200).json({
            success: true,
            message: "Attendance updated successfully",
            data: attendance
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Delete attendance
const deleteAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findByPk(req.params.id);

        if (!attendance) {
            return res.status(404).json({
                success: false,
                message: "Attendance not found"
            });
        }

        await attendance.destroy();

        res.status(200).json({
            success: true,
            message: "Attendance deleted successfully"
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
    getAttendance,
    createAttendance,
    getAttendanceByStudent,
    getAttendanceById,
    updateAttendance,
    deleteAttendance
};