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

showbw = function() {
	jQuery("#plusbw").hide()
	jQuery("#bobbywing").show()
	jQuery("#minusbw").show()	
}

hidebw = function() {
	jQuery("#plusbw").show()
	jQuery("#bobbywing").hide()
	jQuery("#minusbw").hide()	
}

showst = function() {
	jQuery("#plusst").hide()
	jQuery("#salathai").show()
	jQuery("#minusst").show()	
}

hidest = function() {
	jQuery("#plusst").show()
	jQuery("#salathai").hide()
	jQuery("#minusst").hide()	
}

showcd = function() {
	jQuery("#pluscd").hide()
	jQuery("#crispy").show()
	jQuery("#minuscd").show()	
}

hidecd = function() {
	jQuery("#pluscd").show()
	jQuery("#crispy").hide()
	jQuery("#minuscd").hide()	
}

showlc = function() {
	jQuery("#pluslc").hide()
	jQuery("#lemoncups").show()
	jQuery("#minuslc").show()	
}

hidelc = function() {
	jQuery("#pluslc").show()
	jQuery("#lemoncups").hide()
	jQuery("#minuslc").hide()	
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
}

setup = function() {
	jQuery(hidedr);
	jQuery(hidecc);
	jQuery(hidebw);
	jQuery(hidest);
	jQuery(hidecd);
	jQUery(hidelc);
	jQuery("#plusdr").click(showdr);
	jQuery("#minusdr").click(hidedr);
	jQuery("#insta").click(gotoinsta);
	jQuery("#fb").click(gotofb);
	jQuery("#recipes").click(gotorecipes);
	jQuery("#reviews").click(gotoreviews);
	jQuery("#pluscc").click(showcc);
	jQuery("#minuscc").click(hidecc);
	jQuery("#plusbw").click(showbw);
	jQuery("#minusbw").click(hidebw);
	jQuery("#plusst").click(showst);
	jQuery("#minusst").click(hidest);
	jQuery("#pluscd").click(showcd);
	jQuery("#minuscd").click(hidecd);
	jQuery("#pluslc").click(showlc);
	jQuery("#minuslc").click(hidelc);
}
 
jQuery(document).ready(setup)
