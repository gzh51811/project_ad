//a-b的随机整数
function sjs(a,b){
    var jg = parseInt(Math.random()*(b-a+1)+a);
    return jg;
}
//随机背景颜色
//返回值是rgb(数，数，数)
function sjrgb(){
    return 'rgb('+sjs(0,255)+','+sjs(0,255)+','+sjs(0,255)+')';
}
// 6.计算三个数字的大小，按从小到大顺序输出
function px(a,b,c){
    var dt = 0;
    a = arguments[0];
    b = arguments[1];
    c = arguments[2];
    if(a > b){
        dt = a;
        a = b;
        b = dt;
    }
    if(b > c){
        dt = b;
        b = c;
        c = dt;
    }
    if(a > c){
        dt = a;
        a = c;
        c = dt;
    }
    return shu ="" + a + b + c;
}
//排序实参传数组名
function xpx(a){
	a.sort(function(n1,n2){
		return n1-n2;
	})
	return a;
}
//封装找数组索引，没有返回-1
//a为数组b为要找的值
function zsy(a,b){
	for(var i=0;i<a.length;i++){
		if(a[i]==b){
			return i;
		}
	}
	return -1;
}
//封装找数组内容，返回true,false
//a为数组b为要找的值
function znr(a,b){
	for(var i=0;i<a.length;i++){
		if(a[i]==b){
			return true;
		}
	}
	return false;
}
//封装遍历数组，返回一个新数组
function map(fn) {
	var res = [];//存处理好的数据
	//处理过程
	for(var i=0; i<arr.length; i++){
		res.push(fn(arr[i]));
	}
	return res;
}
// 字符串转对象
function strToObj(str) {
    //key0=0&key1=1&key2=2
    var obj = {};
    var arr1 = str.split('&'); //[key0=0,key1=1,key2=2]
    for(var i = 0; i < arr1.length; i++) {
        var arr2 = arr1[i].split('='); //[key0,0]
        obj[arr2[0]] = arr2[1]; //键值对
    }
    return obj;
}

function glxx(srk){
var zfc = "草,泥马,尼玛,麻痹,妈逼,滚,fuck,干你,NM,智障,弱智,傻逼,脑残,狗,比,bitch,p,你妈,血逼".split(",");
var sk = '';
var str = zfc.join('|');
var reg = new RegExp(str, 'gi');
    sk = srk.replace(reg, "小可爱"); 
    return sk;ssss   
}
// 补零
function setDB(item){
    if(item<10){
        return '0'+item;
    }else{
        return ''+ item;
    }
}
// 升序
function paixu(arr){
    var brr = arr.sort(function(a,b){
        return a - b;
    })
}
// 判断滚轮方向
// istrue==true/false
function rollerDir(ele, callback) {
    var istrue = true;
    //IE 谷歌
    ele.onmousewheel = fn;

    //火狐
    if(ele.addEventListener) {
        ele.addEventListener('DOMMouseScroll', fn, false);
    }

    function fn(ev) {
        //判断滚轮方向
        var ev = ev || event;
        //true:向上滚了，false：向下滚了

        if(ev.wheelDelta) {
            //ie 谷歌  规定：大于0 上滚，小于0下滚
            istrue = ev.wheelDelta > 0 ? true : false;
        } else {
            //火狐
            istrue = ev.detail < 0 ? true : false;
        }

        callback(istrue);//实参
    }
    
}
// css(节点,'样式')获取样式
// css(节点，'样式'，'值')设置样式
function css() {
    if(arguments.length == 2) {
        return arguments[0].style[arguments[1]];
    }else if(arguments.length == 3) {
        arguments[0].style[arguments[1]] = arguments[2];
    }
}

// 表单验证
var checkReg = {
    phone : function(str) {
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },
    email : function(str) {
        var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return reg.test(str);
    },
    identity : function(str) {
        var reg = /^\d{15}|\d{17}[\dXx]$/;
        return reg.test(str);
    },
    username : function(str) {
        var reg = /\w{6,20}/;
        return reg.test(str);
    },
    nickname : function(str) {
        var reg = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
        return reg.test(str);
    },
    birthday : function(str) {
        var reg = /^\d{4}-\d{1,2}-\d{1,2}/;
        return reg.test(str);
    },
    password : function(str) {
        var reg = /^[a-zA-Z]\w{5,17}$/;
        return reg.test(str);
    },
    confirm_pwd : function(str) {
        var reg = /^[a-zA-Z]\w{5,17}$/;
        return reg.test(str);
    }
}

/*
    深度拷贝：deepClone() 很重要
    参数：对象（数组或json对象）
    返回值：新的对象（拷贝）
 */
function deepClone(obj) {
    var str = JSON.stringify(obj); //把对象转成字符串
    return JSON.parse(str); //把字符串转成对象
}

/*
    getstyle(obj,name)
    参数： 
    obj:对象名
    name ：要获取的样式属性名
    返回：样式值
*/

function getStyle(obj, name) { //用来获取样式
    if(getComputedStyle(obj, false)) {
        //主流  IE9+
        return getComputedStyle(obj, false)[name];
    } else {
        //IE8-
        return obj.currentStyle(name);
    }
}



// var sum = (a,b) => c => a + b * c;

// var sum = function(a,b){
//     return { function(c){
//         return a+b*c
//     }}
// }

// var sum = (a,b) => c => d =>({name:'lemon'});

// var sum = function(a,b){
//     return {function(c){
//         return {function(d){
//             name:'lemon';
//         }}
//     }}
// }


// 缓冲动画（改进）
// 1.定时器名字根据css属性进行命名,从而保证多个定时器赋值给的变量名不同，不会发生覆盖。
// 2.在一个动画函数里面，可以定义多个css属性同时改变
//  * 参数变成对象{attr:target}
//  * for...in遍历对象，拿到每个attr及对应target值
//      * 利用let，将attr、target的值保留在当前的块级作用域
//      * 利用函数的形参，将attr、target的值存在局部作用域。
// 3.需求：所有动画执行完毕后，进行一堆操作。
// （1）在清除定时器后再执行这堆操作，会出现执行多次的问题
//      * 统计出attr的个数，每次清除定时器就对个数进行--，直到为0，代表所有动画执行完毕。
// (2) 封装动画函数结束后，别人要做什么，我不知道。所以只能帮你执行。
    // 你需要把你要做的东西封装成函数，传参给我
//      * 别人不一定会传递回调函数，要判断。     
            // ele元素
            // obj{attr:target}
            // time时间
            // fn执行代码
function hcdhgj(ele,obj,time,fn){
    var count = 0;
    for(var key in obj){
        count++;
        var attr = key;
        var target = obj[key];
        show(attr,target);
    }
    function show(attr,target){
        target = attr == "opacity"? target*100:target;
        clearInterval(ele[attr+"Timer"]);
        ele[attr+"Timer"] = setInterval(function(){
            var current = window.getComputedStyle(ele)[attr];//200px   /[a-z]+/
            var unit = current.match(/[a-z]+$/);//提取单位
            unit = unit? unit[0] : "";
            current = parseFloat(current);//只获取数值
            current = attr == "opacity"? current*100 : parseInt(current);
            var speed = (target-current)/10;
            if(speed > 0){
                speed = Math.ceil(speed);
            }else if(speed < 0){
                speed = Math.floor(speed);
            }
            current += speed;
            ele.style[attr] = attr == "opacity"? current/100 :current + unit;
            if(current == target){
                clearInterval(ele[attr+"Timer"]);
                count--;
                if(count == 0 && fn && typeof(fn) == "function"){
                    fn();
                }
            }
        }, time)
    }
}

/*
    cookie的相关操作：var cookie = {}
    子功能：
        存 ：set
        取：get
        删：remove
        
 */

var cookie = {
    set: function(name, value, prop) {
        //name和value是必写参数。prop是json格式的数据
        var str = name + '=' + value; //必写的

        //prop
        //expires:设置失效时间
        if(prop.expires) {
            str += ';expires=' + prop.expires.toUTCString(); //把时间转成字符串 toUTCString
        }
        //prop.path :设置路径
        if(prop.path) {
            str += ';path=' + prop.path;
        }
        //设置访问权限domain
        if(prop.domain) {
            str += ';domain=' + prop.domain;
        }

        //设置：存
        document.cookie = str;

    },
    get: function(key) {
        //获取
        var str = document.cookie; //name=jingjing; psw=123456
        var arr = str.split('; '); //[name=jingjing , psw=123456]
        for(var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('='); //[name,jingjing] [psw,123456]
            if(key == arr2[0]) {
                return arr2[1]; //通过键名取键值
            }
        }
    },
    remove: function(key) {
        //cookie:设置时间失效，设置时间为过去的某个时间
        var now = new Date();
        now.setDate(now.getDate() - 1); //设置成昨天
        cookie.set(key, '', {
            expires: now
        });
    }
}


/*
    ajax(method,url,data,fn)
    参数一：请求方式   get  和  post
    参数二：路径
    参数三：数据   name=malin&psw=12345
    参数四：成功的回调    回调函数
*/

function ajax(method, url, data, fn) {
    //1.创建对象
    var xhr = new XMLHttpRequest();
    //告诉对象，要什么
    if(method == 'get' && data) {//如果是get的方式，data接在url后面
        //如果请求的地址是同一个地址，浏览器自动缓存
        url = url + '?day='+new Date()+'&'+ data ;
    }
    
    xhr.open(method,url,true);
    
    //2.发送请求
    if(method == 'get') {
        xhr.send(null);
    }else{
        //设置请求头
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(data);
    }
    
    //3.3号线去后台制作
    
    //4.号线。接收数据，做渲染
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            if(xhr.status == 200){
                //个性需求
                if(fn) {
                    fn(xhr.responseText);//实参
                }
            }else{
                alert('出错了，因为：' + xhr.status);//404找不到
        }
            
        }
    }
    
}


/*
    运动框架封装：startMove()过渡    jq animate()
    最终版：多对象，多属性，链式运动框架(运动队列)
    参数一：对象名
    参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
    参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

    clearInterval(obj.timer); //防止定时器叠加
    obj.timer = setInterval(function() {

        var istrue = true;

        //1.获取属性名，获取键名：属性名->初始值
        for(var key in json) {
            //          console.log(key); //width heigth opacity
            var cur = 0; //存初始值

            if(key == 'opacity') { //初始值
                cur = getStyle(obj, key) * 100; //透明度
            } else {
                cur = parseInt(getStyle(obj, key)); //width heigth borderwidth px为单位的

            }

            //2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
            //距离越大，速度越大,下面的公式具备方向
            var speed = (json[key] - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

            if(cur != json[key]) { //width 200 heigth 400
                istrue = false; //如果没有达到目标值，开关false
            } else {
                istrue = true; //true true
            }

            //3、运动
            if(key == 'opacity') {
                obj.style.opacity = (cur + speed) / 100;
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
            } else {
                obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
            }

        }

        //4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
        if(istrue) { //如果为true,证明以上属性都达到目标值了
            clearInterval(obj.timer);
            if(fnend) {
                fnend();
            }
        }

    }, 30); //obj.timer 每个对象都有自己定时器

}

/*
     1）、开定时器，让图片运动：旧图挪走，新图进入可视区
     2）、点击上下按钮：可以切换下一张和上一张
     3）、焦点跟随，点击焦点可以切到对应的图片

 */

function lunbo(ele, clsn) {

    var box = getid(ele); //最外层的节点
    var ul = box.getElementsByClassName('ul')[0];
    var alis = ul.getElementsByTagName('li');
    var iW = alis[0].offsetWidth;
    var light = box.getElementsByClassName('light')[0];
    var aspans = light.getElementsByTagName('span');
    var prevBtn = box.getElementsByClassName('prev')[0];
    var nextBtn = box.getElementsByClassName('next')[0];

    console.log(iW);

    //1.所有的图片放在右侧，第一张放在可视区
    for(var i = 0; i < alis.length; i++) {
        css(alis[i], 'left', iW + 'px');
    }
    //第一张放在可视区
    css(alis[0], 'left', 0);

    //2.开定时器，让图片自动轮播：旧图挪走，新图进入可视区
    var num = 0; //可视区的图片下标
    var timer = null;

    var next = () => {
        //旧图挪走 alis[now]
        startMove(alis[num], {
            'left': -iW
        });
        //新图进入可视区
        num = ++num >= alis.length ? 0 : num; //临界值的判断
        //快速把新图放在右侧：不需要过渡
        css(alis[num], 'left', iW + 'px');
        startMove(alis[num], {
            'left': 0
        });
        spanNow(); //调用
    }

    //焦点跟随
    var spanNow = () => {
        for(var i = 0; i < aspans.length; i++) {
            aspans[i].className = '';
        }
        aspans[num].className = clsn;
    }

    timer = setInterval(next, 2000); //每隔两秒切换一个图片

    //3.点击上下按钮：可以切换下一张和上一张

    //鼠标进入可视区，停止定时器，移开又开始自动轮播
    box.onmouseover = () => {
        clearInterval(timer);
    }

    box.onmouseout = () => {
        clearInterval(timer);
        timer = setInterval(next, 2000); //每隔两秒切换一个图片
    }

    //防止傻瓜操作行为 : 两次点击的时间太短，500毫秒内，就视为无效
    var old = new Date();
    nextBtn.onclick = () => {
        //点击切换下一张
        if(new Date() - old > 500) { //新旧时间差间隔
            next();
        }
        old = new Date();
    }

    var prev = () => {
        //旧图挪走：挪到右侧
        startMove(alis[num], {
            'left': iW
        });
        //新图：快速放在左侧，挪进可视区
        num = --num < 0 ? alis.length - 1 : num;
        css(alis[num], 'left', -iW + 'px');
        startMove(alis[num], {
            'left': 0
        });
        spanNow();
    }

    //点击切换上一张
    prevBtn.onclick = () => {
        prev();
    }

    //4.点击焦点可以切到对应的图片
    for(var i = 0; i < aspans.length; i++) {
        aspans[i].index = i;
        aspans[i].onclick = function() {
            console.log(this.index);
            if(num < this.index) {
                //新图从右侧切入可视区
                startMove(alis[num], {
                    'left': -iW
                });
                css(alis[this.index], 'left', iW + 'px');
            }

            if(num > this.index) {
                //新图从左侧切入可视区
                startMove(alis[num], {
                    'left': iW
                });
                css(alis[this.index], 'left', -iW + 'px');
            }
            startMove(alis[this.index], {
                'left': 0
            });
            num = this.index; //新图进入到可视区后，变旧图
            spanNow();

        }
    }
}

