function func(){
	var a = document.getElementById("pass").value;
	var b = document.getElementById("Cpass").value;
	if(a != b){
		document.getElementById("messagep").innerHTML="Password didn't match";
		return false;
	}
	else{
		document.getElementById("messagep").innerHTML="";
	}
	
	var c = document.getElementById("opt").value;
	if(c=="null"){
		document.getElementById("messagec").innerHTML="Please select city";
		return false;
	}
	else{
		document.getElementById("messagec").innerHTML="";
	}

	return true;
}

function effect(){
	anime({
		targets: 'div.box',
		translateY: [
			{value: 700, duration: 2500}],

		loop: false,
	});
}

var a = document.getElementById("a");

		a.onclick = function(){
			var morphing = anime({
                targets: '.polymorph',
                points: [
                	{ value: '0 0, 125 0, 125 100, 0 100' },
                	{ value: '0 0, 0 0, 125 100, 0 100' },
                	{ value: '0 0, 0 0, 36 100, 0 100' }
                ],
                easing: 'easeOutQuad',
                duration: 2000,
                loop: false
			});

			a.style.display="none";
			setTimeout(effect, 400)
		}