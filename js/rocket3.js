var countdown = null;

var changepage = function(page){
	document.body.className = "a"+ page;
	clearInterval(countdown);
	var countdownnumber = 10;
	document.getElementById('countdown').innerHTML = countdownnumber;

	if (page == 2) {
		countdown = setInterval(function(){
			var countdownnumber = 10;
			document.getElementById('countdown').innerHTML = countdownnumber;
			countdownnumber = countdownnumber-1;

			if (countdownnumber == 0) {
			changepage(3);
			};
		},200);
	}else if (page == 3) {}
}
