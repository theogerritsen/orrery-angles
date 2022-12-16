// let sidebarBox = document.querySelector('#box');
// let sidebarBtn = document.querySelector('#btn');

// sidebarBtn.addEventListener('click', function(event) {

// 		if (this.classList.contains('active')) {
// 				this.classList.remove('active');
// 				sidebarBox.classList.remove('active');
// 		} else {
// 				this.classList.add('active');
// 				sidebarBox.classList.add('active');
// 		}
// });

// window.addEventListener('keydown', function(event) {

// 		if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
// 				sidebarBtn.classList.remove('active');
// 				sidebarBox.classList.remove('active');
// 		}
// });
// // changer le chemin selon le fichier
// // on va chercher le nom du fichier dans lequel on est actuellement
// let tenmeter = document.querySelector('#tenmeters');
// tenmeter.addEventListener('click', function() {
//     if($(this).is(":checked")) {
//         $("#_10p").show();
//         $("#_10m").show();
//     } else {
//         $("#_10p").hide();
//         $("#_10m").hide();
//     }
// });
// let five = document.querySelector('#fivemeters');

// five.addEventListener('click', function() {
//     if($(this).is(":checked")) {
//         $("#_5p").show();
//         $("#_5m").show();
//     } else {
//         $("#_5p").hide();
//         $("#_5m").hide();
//     }
// });
// let one = document.querySelector('#onemeter');
// one.addEventListener('click', function() {
//     if($(this).is(":checked")) {
//         $("#_1p").show();
//     } else {
//         $("#_1p").hide();
//     }
// });
// let labels = document.querySelector('#labels');
// labels.addEventListener('click', function() {
//     if($(this).is(":checked")) {
//         $("#_10m").show();
//         $("#_5m").show();
//     } else {
//         $("#_10m").hide();
//         $("#_5m").hide();
//     }
// });
// let circle = document.querySelector('#circle');
// circle.addEventListener('click', function() {
//     if($(this).is(":checked")) {
//         $("#cercle").show();
//     } else {
//         $("#cercle").hide();
//     }
// });
    
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

let scene = document.querySelector('#etape3');

let nft = document.createElement('a-nft');
nft.setAttribute('markerhandler', '');
nft.setAttribute('registerevents', ''   );
nft.setAttribute('name', 'panneau2');
nft.setAttribute('type', 'nft');
nft.setAttribute('url', 'https://raw.githubusercontent.com/theogerritsen/AR_project/main/ar_files/ar_gltf/step3/etape3_p7');
nft.setAttribute('smooth', 'true');
nft.setAttribute('smoothCount', '10');
nft.setAttribute('smoothTolerance', '.01');
nft.setAttribute('smoothThreshold', '5');
//nft.setAttribute('raycaster', 'objects: .clickable');
nft.setAttribute('emitevents', 'true');
//nft.setAttribute('cursor', 'true: false; rayOrigin:mouse');


const infoPlane = document.createElement('a-plane');
infoPlane.setAttribute('id', 'info1');
infoPlane.setAttribute('height', '1');
infoPlane.setAttribute('width', '1');
infoPlane.setAttribute('position', '0 0 0');
infoPlane.setAttribute('rotation', '-100 0 0');
infoPlane.setAttribute('scale', '100 100 100');
infoPlane.setAttribute('src', '#info1');
infoPlane.setAttribute('look-at', '[gps-camera]');
//infoPlane.setAttribute('sound', 'on: click; src: ar_assets/sounds/click.ogg');
infoPlane.setAttribute('gesture-handler', 'minScale: 0.25; maxScale: 10');

infoPlane.addEventListener('mouseenter', () => {
    document.querySelector('.centered').classList.add('active');
    planeId = 'info1';
});

infoPlane.addEventListener('mouseleave', () => {
    document.querySelector('.centered').classList.remove('active');
});

scene.appendChild(nft);
nft.appendChild(infoPlane);

// on ajoute les NFT à la scène

// et on ajoute chaque panneau à l'intérieur du nft




