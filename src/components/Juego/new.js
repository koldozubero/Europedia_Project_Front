if (cont < juego.length-1) {
    let newJuego = [...juego]
    newJuego[cont].answer = (juego[cont].quest.nombre).toLowerCase() === input.toLowerCase() ? true : false
    setJuego(newJuego)
    setCont(cont + 1)
    setInput("")
    console.log(juego);
} else {
    let respuestasAcertadas = 0
    juego.forEach(j => {
        if (j.answer === true) {
            respuestasAcertadas++;
        }
    });
    setFin(respuestasAcertadas)
    alert(respuestasAcertadas)
}