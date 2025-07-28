const botonAgregar = document.querySelector("#buttonAdd");
const mainSeccion = document.querySelector('#mainSection');
const modalForm = document.querySelector('#modalForm');
const botonConfirmar = document.querySelector('#botonConfirmar')
const mascara = document.querySelector('#mascara')

botonAgregar.addEventListener("click", () => {
    mascara.classList.add("main-blur");
    modalForm.classList.remove("hidden");
    mainSeccion.classList.remove("z-40");
    mainSeccion.classList.add("z-30")
})

botonConfirmar.addEventListener("click", () => {
    modalForm.classList.add("hidden");
    mascara.classList.remove("main-blur");
    mainSeccion.classList.remove("z-30");
    mainSeccion.classList.add("z-40")
})