export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito"); //el largo del carrito
  if (contador) {
    contador.textContent = carrito.length;
  }
};

export const mostrarMensaje = (texto) => {
  alert(texto);
};
