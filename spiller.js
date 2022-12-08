document.body.onkeydown = function (e) {
    if (alder >= 62 && e.key === "p") bliPensjonist()

    if ((e.key == " " || e.code == "ArrowUp" ||
        e.code == "Space" ||
        e.keyCode == 32 ||
        e.keyCode == 38) &&
        spiller.offsetTop > 490 // Fjerner flying
    ) {
        document.getElementById("spiller").classList.add("spiller-hopp")

        setTimeout(() => {
            document.getElementById("spiller").classList.remove("spiller-hopp")
        }, 400);
    }

    

    if ((
        e.code == "ArrowLeft")
    ) {
        document.getElementById("spiller").style.left = '100px';
    }
    

    if ((
        e.code == "ArrowRight")
    ) {
        document.getElementById("spiller").style.left = '250px';
    }
    


}



document.querySelectorAll('.running-button').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('active');
    });
});


