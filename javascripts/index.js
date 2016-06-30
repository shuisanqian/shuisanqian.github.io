$(function() {

	$('#dowebok').fullpage({
		'verticalCentered': false,
		'css3': true,
		'slidesColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
		'navigation': true,
		'navigationColor':'red',
		'navigationPosition': 'right',
		'navigationTooltips': ['home', 'project & works', 'Professions', 'Internship','thanks'],
		afterLoad:function(anchorLink,index){
			if(index==3){
				$('.Professions').find('div').find('span').fadeIn("slow");
				$('.h550').animate({'width':'85%'},1000);
				$('.h500').animate({'width':'70%'},1500);
				$('.h450').animate({'width':'68%'},1500);
				$('.h420').animate({'width':'65%'},2000);
				$('.h300').animate({'width':'35%'},2000);
				$('.h280').animate({'width':'5%'},2000);
			}else if(index==4){
				$('.Internship').addClass('internAnim');
			}
		}
	});
	
	
	
	$('.Professions').find('div').mouseenter(function(e){
		var tips = $('.tips');
		var index = $(this).attr('data-index');
		var inhtml  = "";
		var list = $('<ol></ol>').addClass('tips-list');
		switch (index){
			case '1':
				inhtml += "<li>熟练HTML/XHTML、CSS，熟悉页面架构和布局，对Web标准和标签语义化有深入理解；</li>"+
							"<li>能够独立完成对设计页面进行网页代码输出；</li>"+
							"<li>能使用合适的结构编写兼容主流浏览器的页面布局；</li>"+
							"<li>能熟练使用Chrome开发者工具、FireBug、Fiddler等工具辅助开发。</li>"+
							"<li>能适当运用CSS3使页面在现代浏览器上效果更佳；</li>";
				break;
			case '2':
				inhtml += "<li>对JavaScript基础知识的掌握，包括基本语法以及DOM操作;</li>"+
							"<li>对 JavaScript 面向对象编程的思想有一定的了解。</li>"+
							"<li>可以用面向对象的方式写一些小插件</li>";
				break;
			case '4':
				inhtml += "<li>可以通过使用 jQuery 应用 JavaScript 效果；</li>"+
				"<li>可以熟练执行类似隐藏、移动以及操作其内容等任务；</li>"+
				"<li>可以使用相应的jQuery 对象和函数来实现网页的动态效果。</li>";
				break;		
			case '3':
				inhtml += "<li>深入理解H5语义化标记的含义；</li>"+
				"<li>对HTML5的移动Web应用有一定的了解；</li>"+
				"<li>了解bootstrap的使用方法。</li>"+
				"<li>理解柵栏系统。</li>";
				break;				
			case '5':
				inhtml += "<li>了解过angular的MV*架构</li>";
				break;				
			default:
				inhtml += "";
				return;
				break;
		}
		tips.append(list.append(inhtml))
		tips.stop(false, true).fadeIn("slow");
	}).mouseleave(function(){
		$('.tips').stop(false, true).hide();
		$('.tips').find('ol').remove();
	})



})