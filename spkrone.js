setInterval(() => {
    if (!spillStartet || erUfoer || erPensjonist || spillFerdig) return
    const ny_krone = lagSpkrone()
    ny_krone.style.bottom = 50 + parseInt(Math.random() * 400) + "px"
    bane.appendChild(ny_krone)

    const speed = 1 + parseInt(Math.random() * 5)
    const timer = setInterval(() => {
        if (spillFerdig) return
        if (erKollisjon(ny_krone, spiller)) oppdaterPlukketVisning()
        if (ny_krone.offsetLeft < 0 || erKollisjon(ny_krone, spiller)) forsvinn(ny_krone, timer)

        ny_krone.style.right = +ny_krone.style.right.split("px")[0] + speed + "px"
    }, 20)
}, 500)

function lagSpkrone() {
    const spkrone = document.createElement("div")
    spkrone.classList.add("spkrone")
    spkrone.insertAdjacentHTML("afterbegin", '<img src="assets/COMMON/coin.png">')
    return spkrone
}

function erKollisjon(krone, spiller) {
    return (
        krone.offsetLeft < spiller.offsetLeft + spiller.offsetWidth &&
        krone.offsetLeft + krone.offsetWidth > spiller.offsetLeft &&
        krone.offsetTop < spiller.offsetTop + spiller.offsetHeight &&
        krone.offsetTop + krone.offsetHeight > spiller.offsetTop
    )
}

function forsvinn(krone, timer) {
    krone.remove()
    clearInterval(timer)
}

function oppdaterPlukketVisning() {
    if (erUfoer || erPensjonist || spillFerdig) return
    antallSpkronePlukket++
    document.querySelector("#antallSpkronePlukket").innerText = antallSpkronePlukket * spkroneVerdi
}
