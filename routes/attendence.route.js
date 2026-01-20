const express = require('express');
const { getAttendance, createAttendance, getAttendanceById, updateAttendance, deleteAttendance, uploadAttendance } = require('../controllers/attendence.controller');
const multer = require('multer');
const path = require('path');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /xlsx|xls/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (extname) {
            return cb(null, true);
        }
        cb(new Error('Only Excel files are allowed'));
    }
});

const router = express.Router();

router.get('/getall', getAttendance);
router.post('/upload', upload.single('file'), uploadAttendance);
router.post('/create', createAttendance);
router.get('/:id', getAttendanceById);
router.put('/update/:id', updateAttendance);
router.delete('/delete/:id', deleteAttendance);
module.exports = router;
