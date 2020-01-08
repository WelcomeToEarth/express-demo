var express = require('express');




var router = express.Router();

router.get('/', (req, res) => {
    res.send('zoos')
})

// router.post('/upload', upload.single('fei'), (req, res) => {
//     console.log(req.file, 'file')
//     res.send('success')
// })


module.exports = router