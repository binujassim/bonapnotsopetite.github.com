showdr = function() {
	jQuery("#plusdr").hide()
	jQuery("#deaconreview").show()
	jQuery("#minusdr").show()	
}

hidedr = function() {
	jQuery("#plusdr").show()
	jQuery("#deaconreview").hide()
	jQuery("#minusdr").hide()	
}

showcc = function() {
	jQuery("#pluscc").hide()
	jQuery("#cheesecake").show()
	jQuery("#minuscc").show()	
}

hidecc = function() {
	jQuery("#pluscc").show()
	jQuery("#cheesecake").hide()
	jQuery("#minuscc").hide()	
}

gotofb = function () {
	jQuery(location).attr('href', 'https://www.facebook.com/BonapNotSoPetite')
}

gotoinsta = function () {
	jQuery(location).attr('href', 'https://www.instagram.com/bonap.not.so.petite/?hl=en')
}

gotorecipes = function () {
	jQuery(location).attr('href', 'recipes.html')
}

gotoreviews = function() {
	jQuery(location).attr('href', 'index.html')

setup = function() {
	jQuery("#deaconreview").hide()
	jQuery("#cheesecake").hide()
	jQuery("#minusdr").hide()
	jQuery("#minuscc").hide()
	jQuery("#plusdr").click(showdr)
	jQuery("#minusdr").click(hidedr)
	jQuery("#insta").click(gotoinsta)
	jQuery("#fb").click(gotofb)
	jQuery("#recipes").click(gotorecipes)
	jQuery("#reviews").click(gotoreviews)
	jQuery("#pluscc").click(showcc)
	jQuery("#minuscc").click(hidecc)
}
 
jQuery(document).ready(setup)

