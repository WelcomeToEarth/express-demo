var express = require('express');
var router = express.Router();

var maxId = 3

let bookList = [{
        _id: 1,
        name: '三国演义',
        price: 29
    },
    {
        _id: 2,
        name: '水浒传',
        price: 229
    },
    {
        _id: 3,
        name: '红楼梦',
        price: 256
    }
]

/* GET home page. */
router.get('/list', function(req, res) {
    res.send({
        code: 0,
        data: bookList
    });
});

router.post('/add', function(req, res) {
    let item = req.body;
    console.log(item)
    item._id = ++maxId
    bookList.push(item)
    res.send(item)
});

router.delete('/delete/:id', function(req, res, next) {

    // let item = req.body;
    let id = req.params.id
    let index = bookList.findIndex((item) => {
        return id == item._id
    })
    bookList.splice(index, 1)
    res.json({})
});


module.exports = router;