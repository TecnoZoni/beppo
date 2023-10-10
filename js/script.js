
// Ventana emergente hacia la carpeta de informacion de la carrera.

const abrirVentanaEmergente = (direccion) => {
    var url = "https://drive.google.com/drive/folders/" + direccion;
    var opciones = "width=800,height=800";
    window.open(url, "_blank", opciones);
}

// Configuracion para el envio de correos a travez de Email Js

const btn = document.getElementById('button');
const inName = document.getElementById('name');
const inEmail = document.getElementById('email');
const inMessage = document.getElementById('message');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'service_vvj9phc';
        const templateID = 'template_ats2r0r';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                inName.value = '';
                inEmail.value = '';
                inMessage.value = '';

                alert('Mensaje Enviado!');
            }, (err) => {
                btn.value = 'Enviar';
                inName.value = '';
                inEmail.value = '';
                inMessage.value = '';
                alert(JSON.stringify(err));
            });
    });