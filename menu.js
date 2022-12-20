

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


    // [...planets].forEach(function(ele) {
    //     let planetName = ele.innerText;


    //     let bodyRect = document.body.getBoundingClientRect(),
    //     elemRect = ele.getBoundingClientRect(),
    //     offsetTop = elemRect.top - bodyRect.top;
    //     offsetLeft = elemRect.left - bodyRect.left;


    //     console.log('offsettop', offsetTop);
    //     console.log('elemtop', elemRect.top);

    //     let planetNames = ele.firstChild;

    //     console.log('planetName', planetNames);

    //     console.log('top', offsetTop, 'left', offsetLeft);

    //     const width = bodyRect.width / 2;
    //     const height = bodyRect.height / 2;

    //     console.log('planetwidth', width, 'planetheight', height)

    //     const deltax = width - elemRect.left;
    //     const deltay = height - elemRect.top;

    //     const rad2 = Math.atan2(deltay, deltax);

    //     let deg2 = rad2 * (180 / Math.PI) - 180;

    //     if (deg2 < 0) {
    //         deg2 = (deg2 + 360) % 360;
    //     }
    //     deg2 = Math.round(deg2 * 100) / 100;
    //     let meters2 = Math.round((deg2 / 360 * 100) * 1000) / 1000;

    //     console.log("angle", deg2); 
    //     console.log("meters2", meters2);
        
    //     planetInnerText = planetName + meters2;

    //     console.log(planetInnerText);

    //     planetNames.innerText = '';


    //     planetNames.innerText = planetName + meters2;

    // });
    });
});

let planets = document.querySelectorAll(".planetSpot");

// let sun = planets[0];

// console.log(planets);
// console.log(planets.textContent)

// const universe = document.getElementById("universe");

// setTimeout(() => {

//     [...planets].forEach(function(ele) {
//         let bodyRect = document.body.getBoundingClientRect(),
//         elemRect = ele.getBoundingClientRect(),
//         offsetTop = elemRect.top - bodyRect.top;
//         offsetLeft = elemRect.left - bodyRect.left;


//         console.log('offsettop', offsetTop);
//         console.log('elemtop', elemRect.top);
//         console.log(ele.textContent)

//         console.log('top', offsetTop, 'left', offsetLeft);

//         const width = bodyRect.width / 2;
//         const height = bodyRect.height / 2;

//         console.log('planetwidth', width, 'planetheight', height)

//         const deltax = width - elemRect.left;
//         const deltay = height - elemRect.top;

//         const rad2 = Math.atan2(deltay, deltax);

//         let deg2 = rad2 * (180 / Math.PI) - 180;

//         if (deg2 < 0) {
//             deg2 = (deg2 + 360) % 360;
//         }
//         deg2 = Math.round(deg2 * 100) / 100;
//         let meters2 = Math.round((deg2 / 360 * 100) * 1000) / 1000;

//         console.log("angle", deg2); 
//         console.log("meters", meters2);
//     })
// }, "20000");

    
// $(function() {
//     $("#sentier-btn").click(function() {
//         window.location.href = "tracking.html"
//     });
//     $("#jeu-btn").click(function() {
//         document.querySelector('.inst-tab').classList.toggle("active");
//             document.querySelector('.img-tab').classList.toggle("active");
//     });
//     $("#img-btn").click(function() {
//         document.querySelector('.img-tab').classList.toggle("active");
//                 // si le score est déjà affiché alors on ne toggle pas la classe "active"
//         // pour éviter qu'il disparaisse
//         if (document.querySelector('.score').classList.contains("active")) {
//             return
//         } else {
//             document.querySelector('.score').classList.toggle("active");
//         };
//     });
//     $(".bx-menu").click(function() {
//         document.querySelector('.menu').classList.toggle("active");
//     });
// });

// let scene = document.querySelector('#etape3');

// let nft = document.createElement('a-nft');
// nft.setAttribute('markerhandler', '');
// nft.setAttribute('registerevents', ''   );
// nft.setAttribute('name', 'panneau2');
// nft.setAttribute('type', 'nft');
// nft.setAttribute('url', 'https://raw.githubusercontent.com/theogerritsen/AR_project/main/ar_files/ar_gltf/step3/etape3_p7');
// nft.setAttribute('smooth', 'true');
// nft.setAttribute('smoothCount', '10');
// nft.setAttribute('smoothTolerance', '.01');
// nft.setAttribute('smoothThreshold', '5');
// //nft.setAttribute('raycaster', 'objects: .clickable');
// nft.setAttribute('emitevents', 'true');
// //nft.setAttribute('cursor', 'true: false; rayOrigin:mouse');


// const infoPlane = document.createElement('a-plane');
// infoPlane.setAttribute('id', 'info1');
// infoPlane.setAttribute('height', '1');
// infoPlane.setAttribute('width', '1');
// infoPlane.setAttribute('position', '0 0 0');
// infoPlane.setAttribute('rotation', '-100 0 0');
// infoPlane.setAttribute('scale', '100 100 100');
// infoPlane.setAttribute('src', '#info1');
// infoPlane.setAttribute('look-at', '[gps-camera]');
// infoPlane.setAttribute('sound', 'on: click; src: ar_assets/sounds/click.ogg');
// infoPlane.setAttribute('gesture-handler', 'minScale: 0.25; maxScale: 10');

// infoPlane.addEventListener('mouseenter', () => {
//     document.querySelector('.centered').classList.add('active');
//     planeId = 'info1';
// });

// infoPlane.addEventListener('mouseleave', () => {
//     document.querySelector('.centered').classList.remove('active');
// });

// scene.appendChild(nft);
// nft.appendChild(infoPlane);

// on ajoute les NFT à la scène

// et on ajoute chaque panneau à l'intérieur du nft




