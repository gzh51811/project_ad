$(function() {
	var z1 = document.getElementById('z1');
	var verifyUserNameMsg = document.getElementById('verifyUserNameMsg');
	var z3 = document.getElementById('z3');
	var z2 = document.getElementById('z2');

	//1.验证用户名
	/*
	验证用户名
	get
		guestbook/index.php
			m : index
			a : verifyUserName
			username : 要验证的用户名
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息具体返回信息
			}
	*/ 
	$('#z1').on('blur',function(){
		var val = z1.value;

		if(val.trim()) {
			//发送请求
			var url = '../api/guestbook/index.php';
			var data = 'm=index&a=verifyUserName&username=' + val;
			ajax('get', url, data, function(str) {
				console.log(str);
				var arr = JSON.parse(str);
				//				console.log(arr);
				//				console.log(arr.code);
				if(!arr.code) {
					//正确，用户名不存在，可以注册
					//					css(verifyUserNameMsg,'color','green');
					verifyUserNameMsg.style.color = 'green';
				} else {
					//					css(verifyUserNameMsg,'color','red');
					verifyUserNameMsg.style.color = 'red';
				}

				verifyUserNameMsg.innerHTML = arr.message;
			});
		} else {
			alert('不能为空');
		}
	});
		


	//注册功能
	/*
	用户注册
	get/post
		guestbook/index.php
			m : index
			a : reg
			username : 要注册的用户名
			password : 注册的密码
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/
	$('#zbtn').on('click',function() {
		var val1 = z1.value;
		var val2 = z2.value;
		var val3 = z3.value;

		if(val1.trim() && val2.trim() && val3.trim()) {
			if (val2.trim() == val3.trim()) {
				//发送请求
				var url = '../api/guestbook/index.php';
				var data = 'm=index&a=reg&username=' + val1 + '&password=' + val2;
				ajax('post', url, data, function(str) {
					var arr = JSON.parse(str);
					// console.log(arr);
					alert(arr.message);
					//				console.log(arr.code);

				});				
			}else{
				alert('密码不一致');
			}
		} else {
			alert('不能为空');
		}
	});

	var btn = document.getElementById('btn');
	var i1 = document.getElementById('i1');
	var i2 = document.getElementById('i2');
	var create = document.getElementById('create');
	// var login = document.getElementById('login');
	var user = document.getElementById('user');
	var userinfo = document.getElementById('userinfo');
	var logout = document.getElementById('logout');

	/*
	用户登陆
	get/post
		guestbook/index.php
			m : index
			a : login
			username : 要登陆的用户名
			password : 登陆的密码
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/
	$('#btn').on('click',function() {
		var val1 = i1.value;
		var val2 = i2.value;

		if(val1.trim() && val2.trim()) {
			//发送请求
			var url = '../api/guestbook/index.php';
			var data = 'm=index&a=login&username=' + val1 + '&password=' + val2;
			ajax('post', url, data, function(str) {
				var arr = JSON.parse(str);
				console.log(arr);
				alert(arr.message); //登陆成功，后端帮写入cookie
				update(); //刷新面板
			});
		} else {
			alert('不能为空');
		}
	});

	update(); //刷新面板

	function update() {
		//如果已经登陆：那就隐藏登陆和注册面板
		//如果是退出：隐藏退出面板
		//是否是登陆状态，只需要查看cookie是否有该用户即可
		var uid = cookie.get('uid'); //从cookie读出来的用户编号
		var name = cookie.get('username');
		if(uid) {
			//登陆中
			$('#create').css({
				display : 'none'
			});
			// login.style.display = 'none';
			$('#user').css({
				display : 'block'
			});
			userinfo.innerHTML = name;
		} else {
			//退出状态
			$('#create').css({
				display : 'block'
			});
			// login.style.display = 'block';
			$('#user').css({
				display : 'none'
			});
			userinfo.innerHTML = '';
		}
	}

	/*
	用户退出
	get/post
		guestbook/index.php
			m : index
			a : logout
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/

	$('#logout').on('click',function() {

		//发送请求
		var url = '../api/guestbook/index.php';
		var data = 'm=index&a=logout';
		ajax('post', url, data, function(str) {
			var arr = JSON.parse(str);
			console.log(arr);
			alert(arr.message);
			update(); //刷新面板
		});

	});
	
	/*
	留言
	post
		guestbook/index.php
			m : index
			a : send
			content : 留言内容
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				data : 返回成功的留言的详细信息
					{
						cid : 留言id	
						content : 留言内容 
						uid : 留言人的id
						username : 留言人的名称
						dateline : 留言的时间戳(秒)
						support : 当前这条留言的顶的数量
						oppose : 当前这条留言的踩的数量
					}
				message : 返回的信息 具体返回信息
			}
	*/
	// var btnPost = document.getElementById('btnPost');
	// var content = document.getElementById('content');
	// var list = document.getElementById('list');
	
// 	function setdata(data) {
// 		//渲染数据
// 		var html = `<dl>
// 						<dt>
// 							<strong>${data.username}</strong> 说 :
// 						</dt>
// 						<dd>${data.content}发布时间：xx年xx月xx日xx时xx分xx秒</dd>
// 						<dd class="t">
// 							<a href="javascript:;" class="support">顶(<span>${data.support}</span>)</a>
// 							 | 
// 							<a href="javascript:;" class="oppose">踩(<span>${data.oppose}</span>)</a>
// 						</dd>
// 					</dl>`;
// 		list.innerHTML += html;
// 	}
	
// 	btnPost.onclick = function() {
// 		//发送请求
// 		var url = '../api/guestbook/index.php';
// 		var data = 'm=index&a=send&content=' + content.value;
// 		ajax('post',url,data,function(str) {
// //			console.log(str);
// 			var arr = JSON.parse(str);
// //			console.log(arr);
// 			if(!arr.code) {
// 				//如果成功了，就做数据渲染
// 				setdata(arr.data);
// 				content.value = '';
// 				content.focus();//聚焦
// 			}
// 			alert(arr.message);
// 		});
// 	}












});