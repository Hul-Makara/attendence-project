const express = require('express');
const router = express.Router();
const subject = require('../models/subjectModel');

//  Get all subject
const getSubjects = async (req, res) => {
    try {
        const subjects = await subject.findAll();

        res.status(200).json({
            success: true,
            total: subjects.length,
            data : subjects
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

// create Subject
const createSubject = async (req, res) => {
    try {
        const { subject_name,subject_code,description} = req.body;
        const subject = await subject.create({
            subject_name,
            subject_code,
            description
        });
        res.status(201).json({
            success: true,
            message: "Subject created successfully",
            data: subject
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

// Get subject by id
const getSubjectById = async (req, res) => {
    try {
        const subject = await subject.findByPk(req.param.id);
        if (!subject){
             res.status(404).json({
                success: false,
                messsage: " subject not found"
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

// Update Subject
const updateSubject = async ( req, res) => {
    try {
        const { subject_name, subject_code, description} = req.body;
        const subject = await subject.findByPk(req.params.id);
        if (!subject){
            return res.status(404).json({
                success: false,
                message: " Subject not found"
            });
        }
        await subject.update({
            subject_name,
            subject_code,
            description
        });
        res.status(200).json({
            success: true,
            message: "Subject updated successfully",
            data: subject
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

// Delete Subject
const deleteSubject = async (req, res) => {
    try {
        const subject = await subject.findByPk(req.params.id);
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