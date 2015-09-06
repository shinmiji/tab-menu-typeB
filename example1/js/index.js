(function(global, $, undefined){
	'use strict';

	var $tab_menu = $('.tab-menu');

	$tab_menu.on('click', 'a', function(event){
		event.preventDefault(); 
		$(this).addClass('on');
	});

})(window, window.jQuery);