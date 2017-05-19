const express = require('express');
const router = express.Router();
const pug = require('pug');
const multer = require('multer');

router.get('/', (req, res) => {
    res.render('content');
});

router.post('/fileupload', multer().single('fileupload'), (req, res) => {
    res.send({ size: req.file['size']});
});

module.exports = router;