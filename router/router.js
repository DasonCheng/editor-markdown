var express = require('express');
var router = express.Router();


router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function(req, res) {
    var Ojson=[{
                "id": 1349,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品一号",
                "price": 499,
                "brokerage": 50,
                "salesCount": 10
            },
            {
                "id": 2,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品二号",
                "price": 400,
                "brokerage": 50,
                "salesCount": 10
            },
            {
                "id": 1349,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品三号",
                "price": 300,
                "brokerage": 50,
                "salesCount": 10
            },
            {
                "id": 1349,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品四号",
                "price": 200,
                "brokerage": 50,
                "salesCount": 10
            },
            {
                "id": 2,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品五号",
                "price": 400,
                "brokerage": 50,
                "salesCount": 10
            },
            {
                "id": 1349,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品六号",
                "price": 300,
                "brokerage": 50,
                "salesCount": 10
            },
            {
                "id": 1349,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品七号",
                "price": 300,
                "brokerage": 50,
                "salesCount": 10
            },
            {
                "id": 1349,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品八号",
                "price": 300,
                "brokerage": 50,
                "salesCount": 10
            },
            {
                "id": 1349,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品九号",
                "price": 300,
                "brokerage": 50,
                "salesCount": 10
            },
            {
                "id": 1349,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品十号",
                "price": 300,
                "brokerage": 50,
                "salesCount": 10
            }
        ];
    res.render('index',{
        dataValue:Ojson
    });
});
router.post('/', function (req, res) {
    var Ojson={
        "count": 6,
        "items": [{
                "id": 1349,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品1号",
                "price": 499,
                "brokerage": 50,
                "salesCount": 10
            },
            {
                "id": 2,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品2号",
                "price": 400,
                "brokerage": 50,
                "salesCount": 10
            },
            {
                "id": 1349,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品3号",
                "price": 300,
                "brokerage": 50,
                "salesCount": 10
            },
            {
                "id": 1349,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品4号",
                "price": 200,
                "brokerage": 50,
                "salesCount": 10
            },
            {
                "id": 2,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品5号",
                "price": 400,
                "brokerage": 50,
                "salesCount": 10
            },
            {
                "id": 1349,
                "image": "http://7xiav1.com2.z0.glb.qiniucdn.com/4dc1451094771f6e34e66cb08bf11fa2.jpg",
                "name": "商品6号",
                "price": 300,
                "brokerage": 50,
                "salesCount": 10
            }
        ]
    };
    res.send(Ojson);
});

module.exports = router;