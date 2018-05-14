var timer = null;

var changepage = function(page){
	document.body.className = "a"+ page;
	clearInterval(timer);
	var countdownnumber = 10;
	document.getElementById('countdown').innerHTML = countdownnumber;

	if (page == 2) {
		var countdownnumber = 10;
		timer = setInterval(function(){
			countdownnumber = countdownnumber-1;
			document.getElementById('countdown').innerHTML = countdownnumber;

			if(countdownnumber==0){
				changepage(3);
			};
		},200);
	}else if (page == 3) {
		var success = setTimeout(function(){
			var randomnumber = Math.round(Math.random()*100)
			console.log('The random number was ' + randomnumber + '.')
			if (randomnumber >= 50) {
				changepage(4);
			}else{
				changepage(5);
			}
		},4000);
	};
}
