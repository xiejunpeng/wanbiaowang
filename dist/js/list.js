"use strict";$(function(){$(".close_slider").on("click",function(){$(".W_top_banner ").animate({height:0},500,"linear")}),$(".sort_con01 a").click(function(){console.log($(this)),$(this).addClass("on").siblings().removeClass("on")}),$(".menu_box").hover(function(){$index=$(this).index(),$(".sub_menu").eq($index).css("display","block"),$(".menu_line").eq($index).css("display","block"),$(this).css("background","#fff")},function(){$(".sub_menu").eq($index).css("display","none"),$(".menu_line").eq($index).css("display","none"),$(this).css("background","#E8E8E8")});var e=document.querySelector(".matter1"),i=document.querySelector(".list_page");function o(n){var a=n.datalist.map(function(n){return'<li data-id="'+n.id+'">\n                        <a target="_blank" href="goods.html?id='+n.gid+'" class="s_goods_img">\n                            <img class=" lazy-load" src="'+n.img+'" alt="">\n                        </a>\n                        <div class="goods_txt">\n                            <p class="tPrc">\n                                <span class="s_price">\n                                    ¥\n                                    <em>'+n.price+"</em>\n                                </span>\n                                <del >¥"+n.sPrice+'</del>\n                            </p>\n                            <a target="_blank" href="goods.html" class="s_goods_name elps2">\n                                '+n.content+'\n                            </a>\n\n                            <div class="goods_sale">\n                                <em class="s_sale_num">销量'+n.sales+'</em>\n                            </div>\n                            <a href="goods.html" class="s_shop">'+n.shop+'</a>\n                            <p class="sale_tags">\n                                <span>自营</span>\n                            </p>\n                            <div class="goods_hover">\n                                <a href="javascript:;" class="add_to_keep">加入收藏</a>\n                                <a href="javascript:;" class="add_to_cart">加入购物车</a>\n                            </div>\n                        </div>\n                    </li>'}).join("");e.innerHTML=a}ajax("GET","../api/list.php","page=1&qty=24",function(n){var a=JSON.parse(n);o(a);for(var e=Math.ceil(a.total/a.qty),s="",t=0;t<e;t++)s+="<span>"+(t+1)+"</span>";i.innerHTML=s,i.children[0].className="active"}),i.onclick=function(n){if("span"==(n=n||window.event).target.tagName.toLowerCase()){var s=n.target.innerText;ajax("GET","../api/list.php","page="+s+"&qty=24",function(n){var a=JSON.parse(n);console.log(a),o(a);for(var e=0;e<i.children.length;e++)i.children[e].className="";i.children[s-1].className="active"})}};var n=document.querySelector(".sort_mul"),a=document.querySelector(".sort_sale"),s=document.querySelector(".sort_price "),t=document.querySelector(".sort_news");n.onclick=function(){ajax("GET","../api/list.php","page=1&qty=24&paixu=1",function(n){o(JSON.parse(n))})},a.onclick=function(){ajax("GET","../api/list.php","page=1&qty=24&paixu=2",function(n){o(JSON.parse(n))})},s.onclick=function(){ajax("GET","../api/list.php","page=1&qty=24&paixu=3",function(n){o(JSON.parse(n))})},t.onclick=function(){ajax("GET","../api/list.php","page=1&qty=24&paixu=4",function(n){o(JSON.parse(n))})};var c=$("#shopdibu").offset();$(".matter1").on("click",".add_to_cart",function(n){var a=$(this).parent().parent().parent().find(".s_goods_img").children().attr("src");console.log(a),$('<img width="50" heigh="50"  class="flyer-img" src="'+a+'"/>').fly({start:{left:n.clientX,top:n.clientY},end:{left:c.left,top:c.top},autoPlay:!0,speed:1.2,vertex_Rtop:20,onEnd:function(){$("#tip").show().animate({width:"200px"},500).fadeOut(500),this.destory()}})})});