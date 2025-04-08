// archivo para los scripts 

function colorAleatorio() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function cambiarFondoTitulo() {
    const titulo = document.querySelector("h1");
    const color1 = colorAleatorio();
    const color2 = colorAleatorio();
    const color3 = colorAleatorio();

    titulo.style.background = `linear-gradient(to right, ${color1}, ${color2}, ${color3})`;
    titulo.style.color = "#fff"; 
    titulo.style.padding = "10px"; 
    titulo.style.borderRadius = "8px";
}

const navbar = document.getElementById("navbar");

navbar.addEventListener("click", function () {

    cambiarFondoTitulo();
});
