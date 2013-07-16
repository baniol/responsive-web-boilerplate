$ ->
	# check if works
	if Modernizr.touch then FastClick.attach document.body

	jPM = $.jPanelMenu
		menu: '#main-nav',
		trigger: '.open-menu',
		duration: 300

	# stretch container vertically
	# setHeight()

	jRes = jRespond([
		{
			label: 'small',
			enter: 0,
			exit: 640
		},{
			label: 'large',
			enter: 640,
			exit: 10000
		}
	]);

	jRes.addFunc({
		breakpoint: 'small',
		enter: ->
			jPM.on();
			$('#jPanelMenu-menu').removeClass('horizontal').addClass('side')
			$('.main-nav.horizontal').hide()
		exit: ->
			jPM.off();
			$('.main-nav.horizontal').show()
	});

	return

setHeight = ->
	dh = $(document).height()
	$('section.main-wrapper').height dh

# $(window).resize ->
# 	setHeight()


