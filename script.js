function validarTexto(texto) {
  if (texto.length >= 3) {
    return true;
  } else {
    return false;
  }
}

function mostrarAlerta() {
  var entradaTexto = document.getElementById("texto-alert");
  var textoMaiorTres = validarTexto(entradaTexto.value);
  if (textoMaiorTres === true) {
    alert(entradaTexto.value);
  } else {
    alert("Texto inválido");
  }
}
