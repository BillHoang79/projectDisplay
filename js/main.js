// Readies document, fires off function
$(document).ready(function(){

	//runs function when clicked
	$('nav a').on('click', function() { 
		
		// Will assign the color class to clicked li in the navbar and remove it from previous selection
		$('nav li.current').removeClass('current')
		$(this).parent().addClass('current')

		// Set heading text according to nav bar selection
		$('h1#heading').text($(this).text())

		// Get & filters link text
		var category = $(this).text().toLowerCase().replace(' ', '-')

		// Remove hidden class if "all-projects" is selected
		if(category == 'all-projects') {
			// Will unhide hidden projects and fades them in slowly
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden')
		} else {
			$('ul#gallery li').each(function() {
				// Give it a class of hidden and hides them when "all-projects" not selected
				if(!$(this).hasClass(category)) {
					$(this).hide().addClass('hidden')
				} else {
					//fades them in slowly and removes hidden class
					$(this).fadeIn('slow').removeClass('hidden')
				}
			})
		}

		// Stops link behavior
		return false
	})

	// Mouseenter overlay, hover over function
	$('ul#gallery li').on('mouseenter', function() {
		// Get data attrtibute values(title and desc) from html 
		var title = $(this).children().data('title')
		var desc  = $(this).children().data('desc')

		// Validation
		if(desc == null) {
			desc = 'click to enlarge'
		}

		if(title == null) {
			title = ' '
		}

		// Create overlay div, the green blue screen that pops up when hovering over a picture
		$(this).append('<div class="overlay"></div>')

		// Grabs the overlay div and readies it
		var overlay = $(this).children('.overlay')

		// Add html(title and desc) to overlay div
		overlay.html('<h3>'+title+'</h3>'+desc+'</p>')

		// Fade in overlay
		overlay.fadeIn(800)
	})

	// Mouseleave overlay, executes this function when 
	// mouse cursor leaves a picture, after activating the mouseenter function
	$('ul#gallery li').on('mouseleave', function() {
		// Create overlay div
		$(this).append('<div class="overlay"></div>')

		// Get the overlay div
		var overlay = $(this).children('.overlay')

		// Fades out overlay
		overlay.fadeOut(500)

	})

})

