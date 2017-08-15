$(function(){
	/*搜索区域二级菜单*/
	var erji=$('#search .menu li .erjicaidan');
	var li=$('#search .menu li');
	var ul=$('#search .menu');
	var seew=$('body').width();
	erji.css({'width':seew+'px','margin-left':-seew/2+'px'});
	$(window).resize(function(){
		var seew=$('body').width();
		erji.css({'width':seew+'px','margin-left':-seew/2+'px'});
	})
	li.mouseenter(function(){
		$(this).find('.erjicaidan').show().stop().animate({'height':'299px'},200);
		$(this).siblings('li').find('.erjicaidan').css({'height':'299px'}).hide();
	})
	ul.mouseleave(function(){
	    erji.stop().animate({'height':'0px'},200).hide();
	})
	/*搜索区域二级菜单*/
	
	/*搜索区域搜索栏*/
	
	/*搜索区域搜索栏结束*/
	var sinput=$('#search .sousuo input');
	/*focus文本框获取焦点事件*/
	sinput.focus(function(){
		/*让文本框的蓝色边框消失*/
		$(this).css({'outline':'none'});
		$(this).parent('.sousuo').css({'border-color':'#FF6700'})
		.find('.kuchun').show();
		$(this).parent('.sousuo').find('.hongmi').hide();
		$(this).parent('.sousuo').find('.xiaomi').hide();
		$(this).siblings('.fdj').css({'border-left-color':'#FF6700'});
	})
	sinput.blur(function(){
		/*blur失去焦点事件*/
		sinput.css({'border':'none'});
		sinput.parent('.sousuo').css({'border-color':'#E0E0E0'})
		.find('.kuchun').hide();
		$(this).parent('.sousuo').find('.hongmi').show();
		$(this).parent('.sousuo').find('.xiaomi').show();
		sinput.siblings('.fdj').css({'border-left-color':'#E0E0E0'});
	})
	/*轮播图Tab切换区域*/
	var caidai=$('#lunbotubox .left .caidan li');
	var erjicaidan=$('#lunbotubox .left .erjicaidan');
	caidai.hover(function(){
		index=$(this).index();
		erjicaidan.eq(index).addClass('enter');
		erjicaidan.hover(function(){
			$(this).addClass('enter');
		},function(){
			$(this).removeClass('enter');
		})
	},function(){
		erjicaidan.eq(index).removeClass('enter');
	})

    /*轮播图Tab切换区域结束*/
   
   /*轮播图区域*/
  var num=0;
  var timer1;
  var timer2;
  var pics=$('#lunbotubox .pic img');
  var lists=$('#lunbotubox .list li');
  function publick(){
  	pics.eq(num).stop().fadeIn(500).siblings('img').fadeOut(300);
  	lists.eq(num).stop().addClass('active').siblings('li').removeClass('active');
  }
  function run(){
  	num++;
  	if(num==6){
  		num=0;
  	}
  	publick();
  }
  timer1=setInterval(run,3000);
  
 $('#lunbotubox .leftbtn').click(function(){
  	num--;
  	if(num==-1){
  		num=5;
  	}
  	publick();
  })
  $('#lunbotubox .rightbtn').click(function(){
  	num++;
  	if(num==6){
  		num=0;
  	}
  	publick();
  })
  lists.hover(function(){
  	num=$(this).index();
  	clearInterval(timer1);
  	timer2=setTimeout(publick,500);
  	
  },function(){
  	clearTimeout(timer2);
  	timer1=setInterval(run,3000);
  })
  /*轮播图区域结束*/
 
 
  /*明星单品tab切换*/
  var dnum=0;
  var dtimer;
  var danpinbox=$('#star .danpinbox');
  var left_btn=$('#star .btn .left_btn');
  var right_btn=$('#star .btn .right_btn');
  var dbtn=$('#star .btn span');
  function dpublick(){
  	var dl=-1226*dnum;
  	danpinbox.stop().animate({'left':dl+'px'},500);
  	dbtn.eq(dnum).addClass('danpinactive')
  	.siblings('span').removeClass('danpinactive');
  }
  function drun(){
  	dnum++;
  	if(dnum==2){
  		dnum=0;
  	}
  	dpublick();
  }
  dtimer=setInterval(drun,3000);
  dbtn.click(function(){
  	dnum=$(this).index();
  	dpublick();
  })
  
  dbtn.hover(function(){
  	var i=$(this).index();
  	if(i!==dnum){
  		$(this).addClass('danpinbtnactive');
  	}
  },function(){
  	 var i=$(this).index();
  	 if(i!==dnum){
  		$(this).removeClass('danpinbtnactive');
  	}
  })
    /*明星单品tab切换结束*/
   
   /*灰色区域p标签显示隐藏*/
//var huiseli=$('#huise #jiadian .hezi .right li');
//huiseli.hover(function(){
//	$(this).find('p').stop().animate({'height':'75px'},200);
//},function(){
//	$(this).find('p').stop().animate({'height':'0px'},200);
//})
  /*灰色区域p标签显示隐藏结束*/
  
  /*灰色区域tab切换*/
    var anniou=$('#huise #jiadian .jiadianbtn .anniou');
    anniou.mouseenter(function(){
    	var d=$(this).index();
    	$(this).addClass('yiru').parents('#jiadian').find('.hezi .right').eq(d).addClass('huisehover');
    	$(this).siblings('.anniou').removeClass('yiru');
    	$(this).parents('#jiadian').find('.hezi .right').eq(d).siblings('.right').removeClass('huisehover');
    })
 /*灰色区域tab切换结束*/

/*为你推荐区域tab切换*/
var tjnum=0;
var tjleft=$('#huise #tuijian .btn .left_btn');
var tjright=$('#huise #tuijian .btn .right_btn');
var tjbox=$('#huise #tuijian .tuijianbox');

tjright.click(function(){
	//tjleft.removeClass('tuijianactive');
	tjnum++;
	if(tjnum>=2){
		tjnum=2;
		tjright.css({'color':'#e0e0e0'});
	}else{
		$(this).css({'color':'#b0b0b1'});
	}
	
	var tjleft=-1226*tjnum;
	tjbox.stop().animate({'left':tjleft+'px'});
	
	$(this).siblings('.left_btn').css({'color':'#b0b0b1'});
	
})

tjleft.click(function(){
	tjnum--;
	if(tjnum<=0){
		tjnum=0;
		$(this).css({'color':'#e0e0e0'});
	}else{
		$(this).css({'color':'#b0b0b1'});
	}
	
	var tjleft=-1226*tjnum;
	tjbox.stop().animate({'left':tjleft+'px'});
	$(this).siblings('.right_btn').css({'color':'#b0b0b1'});
})
tjleft.hover(function(){
	if(tjnum>0){
		//alert(tjnum);
		$(this).css({'color':'#ff6709'});
		//$(this).css({'color':'#ff6709'});
	}
},function(){
	if(tjnum>0){
		$(this).css({'color':'#b0b0b1'});
		//$(this).css({'color':'#b0b0b1'});
	}
})
tjright.hover(function(){
	if(tjnum<2){
		console.log(tjnum);
		$(this).css({'color':'#ff6709'});
	}
},function(){
	//console.log(tjnum);
	if(tjnum<2){
		$(this).css({'color':'#b0b0b1'});
	}
})
/*为你推荐tab切换结束*/
    /*内容复用切换区域*/
   var contentkuai=$('#huise #content .contentbox .contentkuai');
   /*循环每个contentkuai元素*/
   contentkuai.each(function(){
   	/*获得js的原生对象*/
   	var jsthis=$(this)[0];
   	/*为了防止this的指向发生变化将它存到一个变量里*/
   	var jqthis=$(this);
   	/*设置变量，相对于向每个contentkuai对象添加一个属性*/
   	jsthis.c=0;
   jqthis.hover(function(){
  
   	jqthis.find('.btn').css({'display':'block'});
   	
   	jqthis.find('.btn').hover(function(){
   	
   		$(this).addClass('buttonactive').siblings('a').removeClass('buttonactive');
   	},function(){
   		$(this).removeClass('buttonactive');
   	})
   	
   	function cpublick(){
   		jqthis.find('ul').stop().animate({'left':-297*jsthis.c+'px'},500);
   		jqthis.find('.yuandian a').eq(jsthis.c).addClass('yuandianactive')
   		.siblings('a').removeClass('yuandianactive');
   	}
   	jqthis.find('.left_btn').off('click');
 	jqthis.find('.left_btn').click(function(){
 		jsthis.c--;
 		if(jsthis.c==-1){
 			jsthis.c=0;
 		}
 		cpublick();
 	})
 	/*清理点击事件，防止多次移入，变量增加多次*/
 	jqthis.find('.right_btn').off('click');
 	jqthis.find('.right_btn').click(function(){
 		/*让jsthis里的属性自增*/
 		jsthis.c++;
 		/*判断界限*/
 		if(jsthis.c==jqthis.find('ul li').length){
 			jsthis.c=jqthis.find('ul li').length-1;
 		}
 		cpublick();
 	})
   	jqthis.find('.yuandian a').click(function(){
   		jsthis.c=$(this).index();
 		cpublick();
   	})
   },function(){
   	var jqthis=$(this);
   	jqthis.find('.btn').css({'display':'none'});
   })
   
   })
// contentkuai.hover(functionc)
// 	jqthis.find('.right_btn').off('click');
// 	jqthis.find('.right_btn').click(function(){
// 		alert()(){
// 	var jsthis = $(this)[0];
// 	var jqthis = $(this);
// 	console.log(jsthis.
// 		jsthis.c= jsthis.c+1;
// 		 	console.log(jsthis.c)
// 		jqthis.find('ul').stop().animate({'left':-297*jsthis.c+'px'},500);
// 		jqthis.find('.yuandian a').eq(jsthis.c).addClass('yuandianactive')
// 		.siblings('a').removeClass('yuandianactive');
// 		
// 	})
// 	
// },function(){
// 	
// })
   /*内容复用切换区域结束*/
})

