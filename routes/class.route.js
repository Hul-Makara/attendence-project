const express = require('express');
const { createClasses, getClassesById, updateClasses, deleteClasses, getClasses } = require('../controllers/class.controller');


const router = express.Router();

router.get('/getall', getClasses);
router.post('/create', createClasses);
router.get('/:id', getClassesById);
router.put('/update/:id', updateClasses);
router.delete('/delete/:id', deleteClasses);
module.exports = router;