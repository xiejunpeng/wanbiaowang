"use strict";$(function(){var o=!1,t=!1,e=!1;$(".phone_num").blur(function(){var n=$(".phone_num").val().trim();console.log(n),n?(o=!0,$("#i1").html("通过"),$("#i1").focus(),$("#i1").css({background:"none",color:"#58bc58"})):$("#i1").html("失败")}),$("#loginTab span").click(function(){$(this).css("color","#cc5252").siblings().css("color",""),$("#tab .con").eq($(this).index()).css("display","block").siblings().css("display","none")});var i=["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];function n(){var n=document.getElementById("verifyCanvas"),o=n.getContext("2d");o.fillStyle="cornflowerblue",o.fillRect(0,0,n.width,n.height),o.fillStyle="white",o.font="25px Arial";var t=new Array,e=new Array,a=new Array;aaa1="";for(var r=0;r<5;r++)t[r]=i[Math.floor(Math.random()*i.length)],e[r]=16*r+10,a[r]=20*Math.random()+20,o.fillText(t[r],e[r],a[r]),aaa1+=t[r];for(r=0;r<3;r++)l(n,o);for(r=0;r<30;r++)c(n,o);!function(n){document.getElementById("verifyCanvas").style.display="none";var o=document.getElementById("code_img");o.src=n.toDataURL("image/png")}(n)}function l(n,o){o.moveTo(Math.floor(Math.random()*n.width),Math.floor(Math.random()*n.height)),o.lineTo(Math.floor(Math.random()*n.width),Math.floor(Math.random()*n.height)),o.lineWidth=.5,o.strokeStyle="rgba(50,50,50,0.3)",o.stroke()}function c(n,o){var t=Math.floor(Math.random()*n.width),e=Math.floor(Math.random()*n.height);o.moveTo(t,e),o.lineTo(t+1,e+1),o.lineWidth=.2,o.stroke()}n(),document.getElementById("code_img").onclick=function(){$("#verifyCanvas").remove(),$("#verify").after('<canvas width="96" height="44" id="verifyCanvas"></canvas>'),n(),console.log(aaa1)},$i2=$("#i2"),$("#verify").blur(function(){var n=$("#verify").val().trim();console.log(aaa1),console.log(n),n==aaa1?(t=!0,$("#i2").html("通过"),$("#i2").css({background:"none",color:"#58bc58"})):$("#i2").html("失败")});var a=document.getElementById("note_code"),r=document.getElementById("auth_code"),s=document.getElementById("duanXi"),h=document.getElementById("i3");r.onclick=function(){m()},s.onclick=function(){this.style.display="none"};var d="";function m(){d=function(){d="";for(var n="0123456789",o=0;o<4;o++)d+=n.charAt(parseInt(Math.random()*n.length));return d=d.toLowerCase()}(),r.value=d;var n=function(n){if(16==n){n="0123456789abcdef";for(var o="#",t=0;t<6;t++)o+=n.charAt(parseInt(Math.random()*n.length));return o}if("rgb"==n)return"rgb("+parseInt(256*Math.random())+","+parseInt(256*Math.random())+","+parseInt(256*Math.random())+")";alert("参数传错了")}(16);r.style.background=n}m(),a.onblur=function(){var n=a.value.trim();console.log(d),n?n==d?(h.style.background="none",h.style.color="#58bc58",h.innerHTML="验证通过",e=!0):h.innerHTML="有错误":h.innerHTML="请输入验证码"},$("#user_login2").click(function(){console.log(123);var n=$(".phone_num").val().trim();console.log(n),o&&t&&e&&$.ajax({type:"post",dataType:"html",url:"../api/login.php",data:{tel:n},success:function(n){if(console.log(n),"yes"==n){var o=$(".phone_num").val().trim();setCookie("name",o),location.href="../index.html"}}})})});