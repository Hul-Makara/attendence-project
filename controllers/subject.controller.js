
const express = require('express');
const router = express.Router();
// Make sure the import matches exactly with your model file export
const Subject = require('../models/subjectModel'); // This imports the 'subject' model as Subject

// Get all subjects
const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.findAll(); // Use Subject, not SubjectModel
        res.status(200).json({
            success: true,
            total: subjects.length,
            data: subjects
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

// Create Subject
const createSubject = async (req, res) => {
    try {
        const { subject_name, subject_code, description } = req.body;
        const newSubject = await Subject.create({ // Use Subject, not SubjectModel
            subject_name,
            subject_code,
            description
        });
        res.status(201).json({
            success: true,
            message: "Subject created successfully",
            data: newSubject
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

// Get subject by id
const getSubjectById = async (req, res) => {
    try {
        const foundSubject = await Subject.findByPk(req.params.id); // Use Subject
        if (!foundSubject) {
            return res.status(404).json({
                success: false,
                message: "Subject not found"
            });
        }
        res.status(200).json({
            success: true,
            data: foundSubject
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Update Subject
const updateSubject = async (req, res) => {
    try {
        const { subject_name, subject_code, description } = req.body;
        const foundSubject = await Subject.findByPk(req.params.id); // Use Subject
        if (!foundSubject) {
            return res.status(404).json({
                success: false,
                message: "Subject not found"
            });
        }
        await foundSubject.update({
            subject_name,
            subject_code,
            description
        });
        res.status(200).json({
            success: true,
            message: "Subject updated successfully",
            data: foundSubject
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};

// Delete Subject
const deleteSubject = async (req, res) => {
    try {
        const subject = await Subject.findByPk(req.params.id); // Use Subject
        if (!subject){
            return res.status(404).json({
                success: false,
                message: "Subject not found"
            });
        }
        await subject.destroy();
        res.status(200).json({
            success: true,
            message : "Subject deleted successfully"
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
    getSubjects,
    createSubject,
    getSubjectById,
    updateSubject,
    deleteSubject
};
