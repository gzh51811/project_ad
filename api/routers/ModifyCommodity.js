const Router = require('koa-router');
const db = require('../db');
// 创建路由
var router = new Router();

router.post('/',async (ctx,next)=>{
    // ctx.body = 'denglu';
    // let {_id} = ctx.request.body;
    var ObjectId = require('mongodb').ObjectId;//引入mongodb的_id方法
    let {_id} = ctx.request.body;
    // console.log(ctx.request.body)
    _id = {_id: ObjectId(_id)};
    // console.log({id})
    // console.log(ctx.request.body)
    let res = await db.find('spsj',_id);

    // res = res[0];

    
    // let obj = {"code":0,"msg":"","count":1000,"data":res};
    // ctx.body = obj;
    
    // res.map(function (item) {
    //     return (); 
    // });
    // let arr = JSON.parse(str);
    // console.log(res)
    // if(res){
        ctx.body = {
            
            code:0,
            msg:"",
            count:1000,
            data:res
        }
    // console.log(ctx.body);
});



// '/Mod/jingjing'
router.post('/modify',async (ctx,next)=>{
    // 修改_id
    var ObjectId = require('mongodb').ObjectId;//引入mongodb的_id方法
    let {_id} = ctx.request.body;
    // console.log(ctx.request.body)
    _id = {_id: ObjectId(_id)};

    let {Title,commodity,Price,Sale,freight,describe} = ctx.request.body;
    // console.log(Title,commodity,Price,Sale,freight,describe)
    // console.log(str)
    let str = await db.update('spsj',_id,{
                Title,
                commodity,
                Price,
                Sale,
                freight,
                describe
            });

        ctx.body = {
            
            code:0,
            msg:"",
            count:1000,
            data:ctx.request.body
        }
    // console.log(ctx.body);
});
// module.exports = router;



// 增加
router.post('/increase',async (ctx,next)=>{

    let {state,time,Stock,classification,Title,commodity,Price,Sale,freight,describe} = ctx.request.body;
    // console.log(classification,Title,commodity,Price,Sale,freight,describe)
    // console.log(str)
    let str = await db.insert('spsj',{
                classification,
                Title,
                commodity,
                Price,
                Sale,
                freight,
                describe,
                Stock,
                time,
                state
            });

        ctx.body = {
            
            code:0,
            msg:"",
            count:1000,
            data:ctx.request.body
        }
    // console.log(ctx.body);
});
// module.exports = router;


// 删除

router.post('/delete',async (ctx,next)=>{
    // 修改_id
    var ObjectId = require('mongodb').ObjectId;//引入mongodb的_id方法
    let {_id} = ctx.request.body;
    // console.log(ctx.request.body)
    _id = {_id: ObjectId(_id)};
    console.log(_id);
    // console.log(ctx.request.body)
    // let res = await db.delete('spsj',_id);
    let res = await db.delete('spsj',_id);

    // res = res[0];

    
    // let obj = {"code":0,"msg":"","count":1000,"data":res};
    // ctx.body = obj;
    
    // res.map(function (item) {
    //     return (); 
    // });
    // let arr = JSON.parse(str);
    // console.log(res)
    // if(res){
        ctx.body = {
            
            code:0,
            msg:"",
            count:1000,
            data:res
        }
    // console.log(ctx.body);
});
module.exports = router;