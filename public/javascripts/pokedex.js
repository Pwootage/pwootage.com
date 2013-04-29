if (!console.debug) console.debug=function(){};

$(function() {
	$(".pokeselect-wrapper").overscroll();
	$(".pokemon").click(function() {
		var num = $(this).attr("num");
		pokemonClicked(num);
	});
	$(window).resize(function(event) {
		resizeFullHeightDivs();
	});
	resizeFullHeightDivs();
	setTimeout(100, loadPoke(1));
});

function resizeFullHeightDivs() {
	var height = $(window).height() - 40;
	console.debug(height);
	$("#pokeselect").css("height", height + "px");
//	$("#pokeselect-wrapper").css("height", "100%");
	$("#pokeselect-wrapper").overscroll();
}

function loadPoke(num) {
	var div = $("<div />").addClass("pokemon");
	var img = $("<img />").attr("src", "/assets/images/sprites/bw/" + num + ".png");
	img.appendTo(div);
	div.appendTo($(".pokeselect-inner"));
//	$("#pokeselect").overscroll();
	if (num < 200) {
		setTimeout(100, loadPoke(num+1));
	} else {
		$(".pokeselect-wrapper").overscroll();
	}
}


function pokemonClicked(num) {
	closePokeselect();
}

function closePokeselect() {
	$("#pokeselect").addClass("pokeselect-closed");
	$(".pokeselect").overscroll();
}