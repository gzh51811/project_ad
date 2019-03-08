$(function() {
	// 添加商品表单js
	// 
	// 
	$(".layui-form-label").css({
		width: "150px"
	})
	$(".layui-input-block").css({
		marginLeft: "150px"
	})
	layui.use(['form', 'layedit', 'laydate'], function(){
	  var form = layui.form
	  ,layer = layui.layer
	  ,layedit = layui.layedit
	  ,laydate = layui.laydate;
	  
	  //日期
	  laydate.render({
	    elem: '#date'
	  });
	  laydate.render({
	    elem: '#date1'
	  });
	  
	  //创建一个编辑器
	  var editIndex = layedit.build('LAY_demo_editor');
	 
	  //自定义验证规则
	  form.verify({
	    title: function(value){
	      if(value.length < 5){
	        return '标题至少得5个字符啊';
	      }
	    }
	    ,pass: [
	      /^[\S]{6,12}$/
	      ,'密码必须6到12位，且不能出现空格'
	    ]
	    ,content: function(value){
	      layedit.sync(editIndex);
	    }
	  });
	  
	  //监听指定开关
	  form.on('switch(switchTest)', function(data){
	    layer.msg('开关checked：'+ (this.checked ? 'true' : 'false'), {
	      offset: '6px'
	    });
	    layer.tips('温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF', data.othis)
	  });
	  
	  //监听提交
	  form.on('submit(demo1)', function(data){
	    layer.alert(JSON.stringify(data.field), {
	      title: '最终的提交信息'
	    })
	    return false;
	  });
	 
	  //表单初始赋值
	  // form.val('example', {
	  //   "username": "贤心" // "name": "value"
	  //   ,"password": "123456"
	  //   ,"interest": 1
	  //   ,"like[write]": true //复选框选中状态
	  //   ,"close": true //开关状态
	  //   ,"sex": "女"
	  //   ,"desc": "我爱 layui"
	  // })
	  
	  
	});
	// 
	// 
	// 
	layui.use('upload', function(){
	  var $ = layui.jquery
	  ,upload = layui.upload;

	  //多图片上传
	  upload.render({
	    elem: '#test2'
	    ,url: '/upload/'
	    ,multiple: true
	    ,before: function(obj){
	      //预读本地文件示例，不支持ie8
	      obj.preview(function(index, file, result){
	        $('#demo2').append('<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img" style="width:80px">')
	        alert("图片上传成功");
	      });
	    }
	    ,done: function(res){
	      //上传完毕
	    }
	  });
	  
	  	  //选完文件后不自动上传
	  upload.render({
	    elem: '#test8'
	    ,url: '/upload/'
	    ,auto: false
	    //,multiple: true
	    ,bindAction: '#test9'
	    ,done: function(res){
	      console.log(res)
	    }
	  });

	});




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
            $(".input-mc").val(res.data[0].Title);
            $(".input-bt").val(res.data[0].commodity);
            $(".input-jg").val("￥"+res.data[0].Price);
            $(".input-xs").val("￥"+res.data[0].Sale);
            $(".input-kc").val(res.data[0].freight);
            $(".input-ms").val(res.data[0].describe);
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


    $(".input-btn").on("click",function(){
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
	            console.log(res);
	            // 商品编辑渲染上所选数据
	            alert("修改成功")
	        }
	    }
	    xhr.open('post','/ModifyCommodity/modify',true);
	    // 传输方式跟路由
	    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	    

	    var mc = $(".input-mc").val();
		var bt = $(".input-bt").val();
		var jg = $(".input-jg").val().slice(1);
		var xs = $(".input-xs").val().slice(1);
		var kc = $(".input-kc").val();
		var ms = $(".input-ms").val();

	    let data = `_id=${_id}&Title=${mc}&commodity=${bt}&Price=${jg}&Sale=${xs}&freight=${kc}&describe=${ms}`;
	    // 定义你要查的东西
	    console.log(data)
	    xhr.send(data);
    })


})