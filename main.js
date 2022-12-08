const bane = document.querySelector("#bane")
const spiller = document.querySelector("#spiller")
let erUfoer = false
let antallPlasterPlukket = 0
const ufoer = document.querySelector("#ufoer")
const plaster = document.querySelector("#plaster")
let erPensjonist = false
const utbetaltPensjon = document.querySelector("#totalUtbetaltPensjon")
let aarligUtbetaling = 0
let spillFerdig = false


let spillStartet = false


let antallSpkronePlukket = 0
const spkroneVerdi = 30000

let antallAarSomPensjonist = 0
const bestemtDoedsAlder = 85
let fonventetLevetidSomPensjonist = 0
const fonventetLevetidSomPensjonistKart = new Map()
    .set(62, 20)
    .set(63, 20)
    .set(64, 19)
    .set(65, 18)
    .set(66, 17)
    .set(67, 16)
    .set(68, 15)
    .set(69, 15)
    .set(70, 14)
    .set(71, 13)
    .set(72, 12)
    .set(73, 11)
    .set(74, 11)
    .set(75, 10)
    .set(76, 10)
    .set(77, 10)

function bliPensjonist() {
    if (erUfoer) spillFerdig = true
    erPensjonist = true
    document.querySelector("#kanBliPensjonist").classList.add("skjult")
    document.querySelector("#utbetaling").classList.remove("skjult")
    document.querySelector("#pensjonist").classList.remove("skjult")
    fonventetLevetidSomPensjonist = fonventetLevetidSomPensjonistKart.get(alder)
    aarligUtbetaling = (antallSpkronePlukket * spkroneVerdi) / fonventetLevetidSomPensjonist
}

const handleKeyDown = (event) => {
    console.log("User pressed: ", event.key);
}

let alder = 20;

function counter() {
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

    if (spillFerdig) return

    if (alder >= 62 && !erPensjonist) document.querySelector("#kanBliPensjonist").classList.remove("skjult")
    if (alder >= 74 && !erPensjonist) bliPensjonist()
    alder++
    const rootvalues = document.querySelector(":root")
    rootvalues.style.setProperty("--hopp-hoyde", (460 - alder * 2.3) + "px")
    document.getElementById("alder").innerHTML = alder;
    setTimeout(counter, 3000);
}

function startSpill() {
    counter()
    document.querySelector("#start-vindu").style.display = "none"



    spillStartet = true
}

document.querySelector("#start-knapp").onclick = startSpill