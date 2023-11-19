function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light-mode.png")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
    }

    if (html.classList.contains("light")) {
        img.setAttribute("alt", "Foto de Igor Maestro Sorrindo, usando terno social, barba e fundo meio alaranjado")
    } else {
        img.setAttribute("alt", "Foto de Igor Maestro Sorrindo, usando terno social, barba e fundo azul")
    }
}