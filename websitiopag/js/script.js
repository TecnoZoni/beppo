
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



// Cierra el menú cuando se hace clic en un enlace y fuera del menú
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.navbar-nav');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (!navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    }
});

//Cambiar imgen del banner para los dispositivos moviles

cambiarImagenResolucion = () => {
    var imagen = document.getElementById("imgBanner");
    var anchoPantalla = window.innerWidth;

    if (anchoPantalla < 768) {
        imagen.src = "img/carousel0-3(movil)6.png";
        imagen.style.height = "100%";
        imagen.style.objectFit = "cover";
        imagen.style.filter = "brightness(0.6)";
    } else {
        imagen.src = "img/carousel0-3.png";
        imagen.style.height = "100% ";
        imagen.style.objectFit = "fill ";
        imagen.style.filter = "brightness(0.6) ";
    }
};

window.addEventListener("load", cambiarImagenResolucion);
window.addEventListener("resize", cambiarImagenResolucion);

// Codigo para los modales de bootstrap
document.addEventListener("DOMContentLoaded", ()=> {
    const miModal = document.getElementById("MyModal");
    const miModalInstance = new bootstrap.Modal(miModal);
    const btnCloseModal = document.getElementById("close");

    miModalInstance.show();

    btnCloseModal.addEventListener('click', ()=>{
        miModalInstance.hide();
    })

});


