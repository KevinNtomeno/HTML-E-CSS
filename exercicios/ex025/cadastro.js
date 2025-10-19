const formulario = document.getElementsById("formulario");

formulario.addEventListener('submit', (e) => {
    e.preventDefaut();
    const nome = document.getElementsById("inome").value;
    console.log(nome);
});