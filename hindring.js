setInterval(() => {
    if (spillFerdig) return
    if (!erPensjonist && Math.random() > 0.5) return
    if (erPensjonist && Math.random() > 0.9) return
    if (!spillStartet) return

    if (Math.random() > 0.5) return
    const hindring = lagHindring()
    bane.appendChild(hindring)

    const timer = setInterval(() => {
        if (spillFerdig) return
        if (erKollisjon(hindring, spiller)) hindringTruffet()
        if (hindring.offsetLeft < 0 || erKollisjon(hindring, spiller)) forsvinn(hindring, timer)

        hindring.style.right = +hindring.style.right.split("px")[0] + 4 + "px"
    }, 20)
}, 1000)

function lagHindring() {
    const spkrone = document.createElement("div")
    spkrone.classList.add("hindring")
    spkrone.insertAdjacentHTML("afterbegin", '<img src="assets/COMMON/fire.gif">')
    return spkrone
}

function hindringTruffet() {
    if (erPensjonist) {

        let total_beholdning = parseInt(antallSpkronePlukket * spkroneVerdi);
        let utbetalt_sum = parseInt(antallAarSomPensjonist * aarligUtbetaling);

        let diff = total_beholdning - utbetalt_sum;

        console.log("Du er Doed!")
        spillFerdig = true;

        let textString = diff > 0
            ? `Vi har donert resten av pensjonen din på ${diff} kr til Jørgens pensjonsoppsparing`
            : `DU HAR VUNNET! Du har fått utbetalt ${-diff} mer i pensjon enn hva du har spart!`


        document.querySelector("#spillover-score").innerText = textString;

        document.querySelector("#spillover").classList.remove("skjult")

        document.getElementById("spiller").remove();
        const para = document.createElement("img");
        para.setAttribute("id", "spiller-dor");
        para.setAttribute("src", "assets/COMMON/dead.png");

        const node = document.createTextNode("This is new.");
        para.appendChild(node);
        const element = document.getElementById("bane");
        element.appendChild(para);
        para.classList.add("spiller-doed")

        return

    }
    if (erUfoer && antallPlasterPlukket > 0) {
        antallPlasterPlukket--
        document.querySelector("#antallPlasterPlukket").innerText = antallPlasterPlukket + "/3"
    }
    else {
        ufoer.classList.remove("skjult")
        plaster.classList.remove("skjult")
        erUfoer = true
    }
}
