// Mantiene gurdado los productos en el carrito en formato Json
const KEY = "carrito"; // variable para reutilizar

export const guardarCarrito = (carrito) => {
  localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const vaciarCarritoStorage = () => {
  // Elimina el carrito guardado de localStorage
  localStorage.removeItem(KEY);
};
