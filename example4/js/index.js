(function(global, $, undefined){
	'use strict';

	var $tab_menu = $('.tab-menu');

	var links = $tab_menu.find('a');
	var num = 0;
	var eq_num ;
	setInterval(function(	){
		eq_num = num%6;
		if (eq_num >0) {
			links.eq(eq_num-1).removeClass('on');
		} else {
			links.eq(5).removeClass('on');
		}
		links.eq(eq_num).addClass('on');
		num++;
	}, 500);

})(window, window.jQuery);