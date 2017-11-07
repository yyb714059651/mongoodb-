var express = require('express');
var router = express.Router();
//mongodb 连接设置
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectId;
var DB_CONN_STR = 'mongodb://localhost:27017/goodslist'; //本地数据库名

router.get("/api/:fenqile",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");

    MongoClient.connect(DB_CONN_STR, function( err, db) {
        //连接到表
        var collection = db.collection('goodslists');
        //查询数据
        var whereStr = {};
        collection.find(whereStr).toArray(function(err, result) {
            if(err)
            {
                console.log(1)

            }
            else{
            res.json({datas:result})

            }
        });
        db.close();
    });
})

//任务列表
router.get('/', function(req, res) {

    MongoClient.connect(DB_CONN_STR, function(err, db) {
        //连接到表
        var collection = db.collection('goodslists');
        //查询数据
        var whereStr = {};
        collection.find(whereStr).toArray(function(err, result) {
            if(err)
            {

                res.send('select error');
            }
            else{
                res.render('tasks/index',{title:"Todos index view",task_list:result});
            }
        });
        db.close();
    });
});

//显示添加任务表单
router.get('/new',function (req,res) {
    res.render('tasks/new',{title:"New task"});
});

//添加任务
router.post('/',function (req,res) {
    var task = req.body.task;
    console.log(task)
    var task1 = req.body.task1;
    console.log(task1)
    var task2 = req.body.task2;
    console.log(task2)
    var task3 = req.body.task3;
    console.log(task3)
    var task4 = req.body.task4;
    console.log(task4)
    var task5 = req.body.task5;
    console.log(task5)
    var task6 = req.body.task6;
    console.log(task6)
    var task7 = req.body.task7;
    console.log(task7)
    var task8 = req.body.task8;
    console.log(task8)
    var task9 = req.body.task9;
    console.log(task9)
    var task10 = req.body.task10;
    console.log(task10)
    var task11 = req.body.task11;
    console.log(task11)
    var task12 = req.body.task12;
    console.log(task12)
    var task13 = req.body.task13;
    console.log(task13)
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        //连接到表
        var collection = db.collection('goodslists');
        var data = {productname:task,shangmiaoshu:task1,spjiage:task2,shangpinyuanjia:task3,goodsImg:task4,fenqjge:task5,guige:task6,color:task7,shangpinshuliang:task8,pinjianeirong:task9,suoshudianpu:task10,ziying:task11,qal:task12,showorhide:task13};
        collection.insert(data,function (err,result) {
            if(err){
                res.send('insert error');
            }
            else{
                res.redirect('/tasks');
            }
        });
        db.close();
    });
});

//显示编辑任务表单
router.get('/edit/:id',function (req,res) {
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        //连接到表
        var collection = db.collection('goodslists');
        //查询数据
        var whereJson = {_id:ObjectID(req.params.id)};
        collection.findOne(whereJson,function(err, result) {
            console.log(result);
            if(err)
            {
                res.send('select error');
            }
            else{
                res.render('tasks/edit',{name:"编辑任务",task:result});
            }
        });
        db.close();
    });
})

//修改任务
router.put('/:id',function (req,res) {
    var id = req.params.id;
    var task = req.body.task;
    var task1 = req.body.task1;
    var task2 = req.body.task2;
    var task3 = req.body.task3;
    var task4 = req.body.task4;
    var task5 = req.body.task5;
    var task6 = req.body.task6;
    var task7 = req.body.task7;
    var task8 = req.body.task8;
    var task9 = req.body.task9;
    var task10 = req.body.task10;
    var task11 = req.body.task11;
    var task12 = req.body.task12;
    var task13 = req.body.task13;
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        //连接到表
        var collection = db.collection('goodslists');
        //查询数据
        var whereJson = {_id:ObjectID(req.params.id)};
        //修改数据
        var dataJson = {$set:{productname:task,shangmiaoshu:task1,spjiage:task2,shangpinyuanjia:task3,goodsImg:task4,fenqjge:task5,guige:task6,color:task7,shangpinshuliang:task8,pinjianeirong:task9,suoshudianpu:task10,ziying:task11,qal:task12,showorhide:task13}};
        collection.updateOne(whereJson,dataJson,function(err, result) {
            console.log(result);
            if(err)
            {
                res.send('update error');
            }
            else{
                res.redirect('/tasks');
            }
        });
        db.close();
    });
});

//删除任务
router.delete('/:id',function (req,res) {
    var id = req.params.id;
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        //连接到表
        var collection = db.collection('goodslists');
        //查询数据
        var whereJson = {_id:ObjectID(req.params.id)};
        collection.deleteOne(whereJson,function(err, result) {
            console.log(result);
            if(err)
            {

                res.send('delete error');
            }
            else{
                res.redirect('/tasks');
            }
        });
        db.close();
    });
})

module.exports = router;