showdr = function() {
	jQuery("#plus").hide()
	jQuery("#deaconreview").show()
	jQuery("#minus").show()	
}

hidedr = function() {
	jQuery("#plus").show()
	jQuery("#deaconreview").hide()
	jQuery("#minus").hide()	
}

gotofb = function () {
	jQuery(location).attr('href', 'https://www.facebook.com/BonapNotSoPetite')
}

gotoinsta = function () {
	jQuery(location).attr('href', 'https://www.instagram.com/bonap.not.so.petite/?hl=en')
}

setup = function() {
	jQuery("#deaconreview").hide()
	jQuery("#minus").hide()
	jQuery("#plus").click(showdr)
	jQuery("#minus").click(hidedr)
	jQuery("#insta").click(gotoinsta)
	jQuery("#fb").click(gotofb)
}
 
jQuery(document).ready(setup)

