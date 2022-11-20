function validarContraseña() {
  let pass = __("pass").value;
  let pass2 = __("pass2").value;
  if (pass != "" && pass2 != "") {
    if (pass != pass2) {
      __("resultado").innerHTML =
        '<p class="error"><strong>Error: </strong>¡Las contraseñas no coinciden!</p>';
    } else {
      __("form").innerHTML =
        "<p class=correcto><strong>✓ Correcto: </strong>Los datos son correctos :)</p>";
    }
  } else {
    __("resultado").innerHTML =
      '<p class="error"><strong>Error: </strong>¡Los campos no deben estar vacios!</p>';
  }
}
