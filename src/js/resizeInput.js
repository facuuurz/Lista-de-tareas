function autoResizeInput(input) {
    input.style.width = "1ch"; // reinicia el ancho
    input.style.width = (input.value.length + 1) + "ch";
}
