$(function() {
	showForm();
	function showForm() {
		var create = document.getElementById("create");
		var bg = document.getElementsByClassName("background")[0];
		var form = document.getElementById("form");
		var links = document.getElementsByClassName("close");
		// 关掉登录框
		for(var i=0;i<links.length;i++) {
			links[i].onclick = function() {
				form.style.display = "none";
				bg.style.display = "none";
			}
		}
		// 点击登陆
		create.onclick = function() {
			form.style.display = "block";
			bg.style.display = "block";
		}

		// 登陆
		$("#btn").on("click",function(){
			if($("#i1").val().trim() && $("#i2").val().trim()) {
				if ($("#sryzm").val().toLowerCase() == $("#yzm").text().toLowerCase()) {
					window.location.href ="../public/center.html";
				}else{
					confirm("验证码错误")
				}
				
			}else{
				confirm("管理员帐号密码不能为空")//确定取消弹窗
			}
		})
		// 验证码

	}
	yzm();
	$("#yzm").on("click",function(){
		yzm();
	})
	function yzm(){
		var arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var a = arr[parseInt(Math.random()*60)];
 		var b = arr[parseInt(Math.random()*60)];
 		var c = arr[parseInt(Math.random()*60)];
 		var d = arr[parseInt(Math.random()*60)];
 		var e = arr[parseInt(Math.random()*60)];
 		var f = arr[parseInt(Math.random()*60)];
 		var s1 = parseInt(Math.random()*256);
		var s2 = parseInt(Math.random()*256);
		var s3 = parseInt(Math.random()*256);


 		$("#yzm").text(a + '' + b + '' + c + '' + d +e+f);
 		$("#sryzm").css({
 			width:"130"
 		})
 		$("#yzm").css({
 			display:"inline-block",
 			background : "rgb("+s1+","+s2+","+s3+")",
 			width: "85px",
 			marginRight: "-46px",
 			height:"23px"
 		});
 	}
})