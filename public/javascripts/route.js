if (!console.debug) console.debug=function(){};

$(function() {
	$(window).resize(function(event) {
		resizeFullHeightDivs();
	});
	resizeFullHeightDivs();
});

function resizeFullHeightDivs() {
	var height = $(window).height() - 40;
	console.debug(height);
	$("#pokeselect").css("height", height + "px");
}