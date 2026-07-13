import {
  guardarCarrito,
  obtenerCarrito,
  vaciarCarritoStorage,
} from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
  // funcion creada en storage.js
  const carrito = obtenerCarrito();
  carrito.push(producto);

  guardarCarrito(carrito); // guardamos con la funcion creada en storage.js

  actualizarContador(carrito); // usamos funciones de UI  que actualiza el Nº de carrito
  mostrarMensaje("producto agregado 👌"); // muestra msj
};

export const eliminarProducto = (indice) => {
  const carrito = obtenerCarrito();
  carrito.splice(indice, 1); // splice funcion que (id,borra,modifica)

  guardarCarrito(carrito); //actualizamos carrito
  actualizarContador(carrito); // actualizamos contador
  mostrarMensaje("Producto eliminado ☑️");
};

export const vaciarCarrito = () => {
  vaciarCarritoStorage();
  actualizarContador([]);
  mostrarMensaje("Carrito Vacio");
};
