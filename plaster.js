function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  setInterval(() => {
    if (spillFerdig) return
    if (antallPlasterPlukket >= 3) {
        erUfoer = false
        antallPlasterPlukket = 0
        return
    }
    if (!erUfoer) return
    if (Math.random() > 0.5) return
    const plaster = lagPlaster()
    plaster.style.bottom = 50 + parseInt(Math.random() * 400) + "px"
    bane.appendChild(plaster)

    const timer = setInterval(() => {
        if (spillFerdig) return
        if (erKollisjon(plaster, spiller)) plasterPlukket()
        if (plaster.offsetLeft < 0 || erKollisjon(plaster, spiller)) forsvinn(plaster, timer)

        plaster.style.right = +plaster.style.right.split("px")[0] + 2 + "px"
    }, 20)
}, 1000)

function lagPlaster() {
    console.log("ny plaster generert")
    const spkrone = document.createElement("div")
    spkrone.classList.add("plaster")
    spkrone.insertAdjacentHTML("afterbegin", '<img src="assets/COMMON/plaster.png">')
    spkrone.style = `animation-iteration-count: infinite; animation-name: ${Math.random() < 0.5 ? "spin" : "spin_rev"}; animation-duration: ${randomIntFromInterval(500, 3500)}ms;`


    
    
    
    return spkrone
}

function plasterPlukket() {
    if (!erUfoer) return
    antallPlasterPlukket++
    if (antallPlasterPlukket >= 3) {
        erUfoer = false
        antallPlasterPlukket = 0
        ufoer.classList.add("skjult")
        plaster.classList.add("skjult")
    }
    document.querySelector("#antallPlasterPlukket").innerText = antallPlasterPlukket + "/3"
}
