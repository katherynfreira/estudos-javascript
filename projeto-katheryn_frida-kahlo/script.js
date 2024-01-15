const formulario = document.querySelector("form");
const inputNome = document.querySelector("#input-nome");
const recado = document.querySelector("#recado");


function comSeuNome (evento) {
    evento.preventDefault();
    const seuNome = (inputNome.value)
    recado.innerHTML = `De frida kahlo para  ${seuNome}`;
}

formulario.addEventListener("submit", comSeuNome);