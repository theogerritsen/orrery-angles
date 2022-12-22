
$(function () {
    $("#jeu-btn").click(function() {
        document.querySelector('.inst-tab').classList.toggle("active");

        setTimeout(() => {
            alert('Now try to film your business card')
        }, "400")

    })
    $("#change").click(function() {
        window.location.href = "/orrery-angles/dist/index.html"
    })
});

const ARplanet = document.getElementById("ARplanet");

ARplanet.addEventListener('mouseenter', () => {
    document.querySelector('.centered').classList.add('active');
});

ARplanet.addEventListener('mouseleave', () => {
    document.querySelector('.centered').classList.remove('active');
});






