$(function() {

	$('#dowebok').fullpage({
		'verticalCentered': false,
		'css3': true,
		'slidesColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
		'navigation': true,
		'navigationColor':'red',
		'navigationPosition': 'right',
		'navigationTooltips': ['home', 'project & works', 'skill', 'education'],
		afterRender:function(){
			
			
		},
		afterLoad:function(anchorLink,index){
			if(index==2){
				
			}
			
		}
	});

})