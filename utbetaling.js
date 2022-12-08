
setInterval(() => {
    if (spillFerdig) return
    if (!erPensjonist) return
    if (alder >= 73 && !erPensjonist) bliPensjonist()
    if (erUfoer && erPensjonist) {

        let total_beholdning = parseInt(antallSpkronePlukket * spkroneVerdi);
        let utbetalt_sum = parseInt(antallAarSomPensjonist * aarligUtbetaling);

        let diff = total_beholdning - utbetalt_sum;

        console.log("Du er Doed!")
        spillFerdig = true;

        let textString = diff > 0
            ? `Vi har donert resten av pensjonen din på ${diff} kr til Jørgens pensjonsoppsparing`
            : `DU HAR VUNNET! Du har fått utbetalt ${diff} mer i pensjon enn hva du har spart!`


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
    console.log("utbetaling!")

    console.log("")
    console.log("antallAarSomPensjonist", antallAarSomPensjonist)
    console.log("aarligUtbetaling", aarligUtbetaling)

    utbetaltPensjon.innerText = parseInt(++antallAarSomPensjonist * aarligUtbetaling)

}, 3000)