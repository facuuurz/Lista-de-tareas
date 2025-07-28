function autoResize(textArea) {
    textArea.style.height = "auto";

    const lineHeight = parseFloat(getComputedStyle(textArea).lineHeight);
    const maxHeight = lineHeight * 5; // 5 filas máximas

    if (textArea.scrollHeight <= maxHeight) {
        textArea.style.overflowY = "hidden";
        textArea.style.height = textArea.scrollHeight + "px";
    } else {
        textArea.style.overflowY = "auto";
        textArea.style.height = maxHeight + "px";
    }
}
