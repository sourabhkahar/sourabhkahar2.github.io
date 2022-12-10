//Animation Script
AOS.init();

// Dark Mode
const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

// BLink Cursor 
$(function(){
	$(".typed").typed({
		strings: ["Developers.", "Designers.", "Team."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});

	$(".scroll").click(function(e) {
		e.preventDefault()
		let sectionToScrool = $(this).attr('data-id')
		console.log(sectionToScrool);
		$('html, body').animate({
			scrollTop: $("#"+sectionToScrool).offset().top
		}, 2000);
	});
	// $('.closeNavigation').click((e)=>{
	// 	e.preventDefault()
	// 	if($(this).is(":checked"))
	// 		$(this).prop('checked', true);
			
	// })
});

