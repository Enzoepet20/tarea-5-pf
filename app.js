function sendForm() {
    const form = document.getElementById('form');
    const infoForm = {
        name: form.name.value,
        mail: form.mail.value,
        curso: form.curso.value,
        mensaje: form.mensaje.value
    };
    console.log(infoForm);
   console.log(JSON.stringify(infoForm));
}