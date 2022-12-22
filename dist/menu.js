let sidebarBox = document.querySelector('#box');
let sidebarBtn = document.querySelector('#btn');
sidebarBtn.addEventListener('click', function(event) {

		if (this.classList.contains('active')) {
				this.classList.remove('active');
				sidebarBox.classList.remove('active');
		} else {
				this.classList.add('active');
				sidebarBox.classList.add('active');
		}
});


window.addEventListener('keydown', function(event) {

		if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
				sidebarBtn.classList.remove('active');
				sidebarBox.classList.remove('active');
		}
});
// changer le chemin selon le fichier
// on va chercher le nom du fichier dans lequel on est actuellement
let tenmeter = document.querySelector('#tenmeters');
tenmeter.addEventListener('click', function() {
    if($(this).is(":checked")) {
        $("#_10p").show();
        $("#_10m").show();
    } else {
        $("#_10p").hide();
        $("#_10m").hide();
    }
});
let five = document.querySelector('#fivemeters');

five.addEventListener('click', function() {
    if($(this).is(":checked")) {
        $("#_5p").show();
        $("#_5m").show();
    } else {
        $("#_5p").hide();
        $("#_5m").hide();
    }
});
let one = document.querySelector('#onemeter');
one.addEventListener('click', function() {
    if($(this).is(":checked")) {
        $("#_1p").show();
    } else {
        $("#_1p").hide();
    }
});
let labels = document.querySelector('#labels');
labels.addEventListener('click', function() {
    if($(this).is(":checked")) {
        $("#_10m").show();
        $("#_5m").show();
    } else {
        $("#_10m").hide();
        $("#_5m").hide();
    }
});
let circle = document.querySelector('#circle');
circle.addEventListener('click', function() {
    if($(this).is(":checked")) {
        $("#cercle").show();
    } else {
        $("#cercle").hide();
    }
});

const output = document.querySelector('.output');
const degrees = document.querySelector('.degrees');

let planetLabels = document.querySelectorAll('.planetLabel');

window.addEventListener("touchstart", (e) => {

    ;[...e.changedTouches].forEach(touch => {

    const w = window.innerWidth / 2;
    const h = window.innerHeight / 2;
    const x = touch.clientX;
    const y = touch.clientY;
    
    console.log('window w', w, 'window h', h)

    const deltaX = w - x;
    const deltaY = h - y;

    const rad = Math.atan2(deltaY, deltaX);

    let deg = rad * (180 / Math.PI) - 180;

    if (deg < 0) {
        deg = (deg + 360) % 360;
    }

    deg = Math.round(deg * 100) / 100;
    let meters = Math.round((deg / 360 * 100) * 1000) / 1000;
    
    output.innerText = meters + " m";
    degrees.innerText = deg + "°";
    });
});

let planets = document.querySelectorAll(".planetSpot");
