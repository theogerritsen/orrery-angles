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
$(function () {
    $("#jeu-btn").click(function() {
        document.querySelector('.inst-tab').classList.toggle("active");

        setTimeout(() => {
            alert('Now try to film your business card')
        }, "400")

    })
    $("#change").click(function() {
        window.location.href = "orrey.html"
    })
});

const ARplanet = document.getElementById("ARplanet");

ARplanet.addEventListener('mouseenter', () => {
    document.querySelector('.centered').classList.add('active');
});

ARplanet.addEventListener('mouseleave', () => {
    document.querySelector('.centered').classList.remove('active');
});






