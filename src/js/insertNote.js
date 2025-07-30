const formulario  = document.querySelector("#formulario");
const mainSection = document.querySelector("#mainSection");
const boton = document.querySelector('#botonConfirmar');

boton.addEventListener("click", (event) => {
    event.preventDefault();

    const formData = new FormData(formulario);

    const titulo = formData.get("titulo").trim();
    const descripcion = formData.get("descripcion").trim();
    const fecha = formData.get("fecha");

    if (!titulo || !descripcion || !fecha) return;

    const [año, mes, dia] = fecha.split("-");
    const nuevaFecha = `${dia}/${mes}/${año}`;

    const tarjeta = document.createElement("div");
    tarjeta.className = `bg-amber-50 text-gray-800 min-h-96 min-w-80 max-w-80 px-4 py-2 rounded-4xl 
                        flex flex-col justify-around opacity-0 scale-95 transition-all duration-500`;

    tarjeta.innerHTML = `
        <h3 class="text-3xl text-center">${titulo}</h3>
        <p class="break-words max-h-40 overflow-y-auto">${descripcion}</p>
        <p class="bg-green-400 inline-block w-[60%] py-5 px-1 text-center rounded-full">fecha: ${nuevaFecha}</p>`;

    mainSection.appendChild(tarjeta);

    setTimeout(() => {
        tarjeta.classList.remove("opacity-0", "scale-95");
        tarjeta.classList.add("opacity-100", "scale-100");
    }, 10);

    formulario.reset();
});

