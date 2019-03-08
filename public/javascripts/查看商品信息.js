$(function() {
 	$(".spsq_2").css({
 		fontWeight:"900",
 		fontSize: "28px"
 	})
// 发送查请求接收数据渲染页面
    // 接收传过来的id
    var ufo = decodeURI(location.search).slice(1);
    console.log(ufo);
    var _id;

    // 发起ajax请求
    let xhr = new XMLHttpRequest();
    // 创建
    xhr.onload = ()=>{
        if(xhr.status == 200){
            let res = JSON.parse(xhr.responseText);
            // res传查回来的数据
            // if(res.ok){
            //     location.href = 'login.html';
            // }
            console.log(res.data[0]);
            // 商品编辑渲染上所选数据
            $(".spsq_1").html(res.data[0].classification);
            $(".spsq_2").text(res.data[0].commodity);
            $(".fgx1").html(res.data[0]._id);
            $(".fgx2").html(res.data[0].Title);
            $(".fgx3").html("￥"+res.data[0].Price);
            $(".fgx4").html("￥"+res.data[0].Sale);
            $(".fgx5").html("￥"+res.data[0].freight);
            $(".fgx6").html(res.data[0].Stock);
            $(".fgx7").html(res.data[0].state);
            $(".fgx8").html(res.data[0].describe);
            $(".fgx9").html(res.data[0].time);
            _id = res.data[0]._id;
        }
    }
    xhr.open('post','/ModifyCommodity',true);
    // 传输方式跟路由
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    

    let data = '_id='+ufo;
    // 定义你要查的东西
    console.log(data)
    xhr.send(data);
    // 传到后端
})