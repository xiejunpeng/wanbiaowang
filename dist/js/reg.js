"use strict";$(function(){var i=["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];function o(){var o=document.getElementById("verifyCanvas"),e=o.getContext("2d");e.fillStyle="cornflowerblue",e.fillRect(0,0,o.width,o.height),e.fillStyle="white",e.font="25px Arial";var t=new Array,n=new Array,r=new Array;aaa="";for(var a=0;a<5;a++)t[a]=i[Math.floor(Math.random()*i.length)],n[a]=16*a+10,r[a]=20*Math.random()+20,e.fillText(t[a],n[a],r[a]),aaa+=t[a];for(a=0;a<3;a++)l(o,e);for(a=0;a<30;a++)c(o,e);!function(o){document.getElementById("verifyCanvas").style.display="none";var e=document.getElementById("code_img");e.src=o.toDataURL("image/png")}(o)}function l(o,e){e.moveTo(Math.floor(Math.random()*o.width),Math.floor(Math.random()*o.height)),e.lineTo(Math.floor(Math.random()*o.width),Math.floor(Math.random()*o.height)),e.lineWidth=.5,e.strokeStyle="rgba(50,50,50,0.3)",e.stroke()}function c(o,e){var t=Math.floor(Math.random()*o.width),n=Math.floor(Math.random()*o.height);e.moveTo(t,n),e.lineTo(t+1,n+1),e.lineWidth=.2,e.stroke()}o(),document.getElementById("code_img").onclick=function(){$("#verifyCanvas").remove(),$("#verify").after('<canvas width="100" height="40" id="verifyCanvas"></canvas>'),o(),console.log(aaa)},$mobile=$("#mobile"),console.log($mobile),$i1=$("#i1"),console.log($i1),$verify=$("#verify"),console.log($verify),$i2=$("#i2"),console.log($i2),$i3=$("#i3"),console.log($i3),$getcaptcha=$("#getcaptcha"),console.log($getcaptcha),$password=$("#password"),console.log($password),$i4=$("#i4"),console.log($i4),$i5=$("#i5"),console.log($i5),$cPssword=$("#confirm_password"),console.log($cPssword),$register=$("#register"),console.log($register);var t=!1,n=!1,r=!1,a=!1,s=!1;$mobile.blur(function(){var o=$mobile.val().trim();o?checkReg.tel(o)?$.ajax({type:"get",url:"../api/checkname.php",data:{tel:o},success:function(o){if(console.log(o),console.log(o),"not"!=o)return $i1.html("可以注册"),$i1.css({background:"none",color:"#58bc58"}),t=!0;$i1.html("该用户太受欢迎啦!")}}):$i1.html("不符合规则"):$i1.html("用户名不能为空")}),$verify.blur(function(){if($verify.val().trim()==aaa)return $i2.html("验证通过"),$i2.css({background:"none",color:"#58bc58"}),n=!0;$i2.html("验证失败")}),verification("duanxin","auth_code","duanXi","i3");var e=document.getElementById("duanxin"),d=document.getElementById("auth_code"),h=document.getElementById("duanXi"),m=document.getElementById("i3");d.onclick=function(){u()},h.onclick=function(){this.style.display="none"};var f="";function u(){f=function(){f="";for(var o="0123456789",e=0;e<4;e++)f+=o.charAt(parseInt(Math.random()*o.length));return f=f.toLowerCase()}(),d.value=f;var o=function(o){if(16==o){o="0123456789abcdef";for(var e="#",t=0;t<6;t++)e+=o.charAt(parseInt(Math.random()*o.length));return e}if("rgb"==o)return"rgb("+parseInt(256*Math.random())+","+parseInt(256*Math.random())+","+parseInt(256*Math.random())+")";alert("参数传错了")}(16);d.style.background=o}u(),duanxin.onblur=function(){var o=e.value.trim();if(console.log(f),o){if(o!=f)return alert("图型有误"),!1;m.style.background="none",m.style.color="#58bc58",m.innerHTML="验证通过",r=!0}else m.innerHTML="请输入验证码"},$password.blur(function(){var o=$password.val().trim();if(o){if(checkReg.psweasy(o))return $i4.html("符合规则"),$i4.css({background:"none",color:"#58bc58"}),a=!0;$i4.html("不符合规则")}else $i4.html("不能为空")}),$cPssword.blur(function(){if($password.val().trim()==$cPssword.val().trim())return $i5.html("正确"),$i5.css({background:"none",color:"#58bc58"}),s=!0;$i5.html("两次输入不相同")}),$register.click(function(){if(t&&n&&r&&a&&s){var o=$mobile.val().trim(),e=$password.val().trim();$.ajax({type:"post",url:"../api/reg.php",data:{tel:o,psw:e},success:function(o){console.log(o),console.log(o),"yes"==o?location.href="login.html":alert("注册失败")}})}else console.log("不能为空")})});