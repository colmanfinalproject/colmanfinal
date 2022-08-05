const express = require("express");
const { create, getAllItems } = require('../controllers/Item');

const router = express.Router();

router.get('/getAllItems', getAllItems);
router.post('/create', create);

module.exports = router;