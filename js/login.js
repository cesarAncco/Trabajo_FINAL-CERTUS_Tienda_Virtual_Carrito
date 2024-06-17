$(document).ready(function () {
  $(`#botonIniciarSesion`).prop("disabled", true);

  const campos = {
    inputUsername: false,
    inputPassword: false,
  };

  const validarCampo = (input, campo) => {
    if ($(input).val()) {
      //$(`#${campo}`).addClass("is-valid").removeClass("is-invalid");
      campos[campo] = true;
    } else {
      //$(`#${campo}`).addClass("is-invalid").removeClass("is-valid");
      campos[campo] = false;
    }
  };

  const validarFormulario = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = $(target).attr("name");

    switch (name) {
      case "inputUsername":
        validarCampo(target, "inputUsername");
        break;
      case "inputPassword":
        validarCampo(target, "inputPassword");
        break;
    }

    if (
      campos["inputUsername"] &&
      campos["inputPassword"]
    ) {
      $(`#botonIniciarSesion`).prop("disabled", false);
    }
    
  };

  $("#formulario input").on("blur", validarFormulario);

  $(`#botonIniciarSesion`).click(function(event){
    event.preventDefault();
		window.location.href = '/catalogue.html';
  });

});
