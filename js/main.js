document.addEventListener('DOMContentLoaded', function(){
	var lazyLoadInstance = new LazyLoad({
	});

	//	menu

	const menuToggle = document.querySelector(".menu-toggle")
	const navbar = document.querySelector(".navbar")

	menuToggle.addEventListener("click", () => {
		menuToggle.classList.toggle("open-menu")
		navbar.classList.toggle("open")
	})

	$(".has-child__link").on("click", function(e) {
		if ( !($(this).parent().hasClass("show")) ) {
			e.preventDefault()
			$(this).parent().addClass("show")
		}
	})

	$(".footer-info__column p").on("click", function(e) {
		$(this).parent().toggleClass("open")
	})
	
})