(function(global, $, undefined){
	'use strict';

	var $tab_menu = $('.tab-menu');

	var $status_on = null;
	$tab_menu.on('click', 'a', function(event){
		event.preventDefault(); 
		var $this = $(this);
		$tab_menu.find('a.on').removeClass('on');
		$status_on = $this.addClass('on');
	});

	
})(window, window.jQuery);