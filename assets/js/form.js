$(document).ready(function() {
    const frmContacto = $('#frmContacto');
    const modalMessage = document.getElementById('messageModal');
    const innText = document.getElementById('TextVal');
    const host = window.location.href;



    frmContacto.submit(function(event) {

        const nombre = document.getElementById('nombre').value;
        event.preventDefault();
        const formData = $(this).serialize();
        // Hacer visible el modal usando Bootstrap


        $.ajax({
            type: "POST",
            url: host + "correo.php",
            data: formData,
            success: function(respuesta) {
                innText.innerHTML = `<div class="alert alert-primary text-center" role="alert">  Su mensaje fue enviado exitosamente </div>
        Estimado <b>${ nombre }</b>, pronto nos pondremos en contacto con usted.`
            },
            error: function() {
                innText.innerHTML = `<div class="alert alert-danger text-center" role="alert">  Ocurrio un problema </div>
        Estimado <b>${ nombre }</b>, intentélo más tarde.`;
            }
        });
        $(modalMessage).modal('show');
    });
});