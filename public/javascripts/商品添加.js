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
	            alert("添加成功")
	        }
	    }
	    xhr.open('post','/ModifyCommodity/increase',true);
	    // 传输方式跟路由
	    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	    

	    var mc = $(".input-mc").val();
		var bt = $(".input-bt").val();
		var jg = $(".input-jg").val();
		var xs = $(".input-xs").val();
		var kc = $(".input-kc").val();
		var ms = $(".input-ms").val();
		// var sj = new Date();
		var sjhm = Date.now();
		var zhsj = setTimes(sjhm);
		var rqpj = zhsj.years+"/"+zhsj.mons+"/"+zhsj.days;
		// 毫秒转：年月日时分秒
		function setTimes(timer) {
			var time = new Date(timer);
			var year = time.getFullYear();//年
			var mon = toDB(time.getMonth() + 1);//0 
			var day = toDB(time.getDate());//24
			var hour = toDB(time.getHours());//时
			var min = toDB(time.getMinutes());//分
			var sec = toDB(time.getSeconds());//秒

			return {
				secs: sec,
				mins: min,
				hours: hour,
				days: day,
				mons: mon,
				years: year
			}

		}
	    function toDB(num) {
	      //补零操作
	      if(num < 10) {
	        return '0' + num;
	      } else {
	        return '' + num;
	      }
	    }
	    let data = `classification=其他&Title=${mc}&commodity=${bt}&Price=${jg}&Sale=${xs}&freight=12&describe=${ms}&Stock=${kc}&time=${rqpj}&state=ON`;
	    // 定义你要查的东西
	    console.log(data)
	    xhr.send(data);
    })


});