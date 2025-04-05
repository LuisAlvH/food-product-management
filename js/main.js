import * as metodosProducto from "./metodosProducto.js";

///INICIAL
const listProductos = JSON.parse(localStorage.getItem("productos")) || [];
metodosProducto.renderizadoInicial(listProductos);

///CLICK BOTÓN AGREGAR
const addProduc = document.querySelector(".btn-add-prod");

addProduc.addEventListener("click", (event) => {
  event.preventDefault();
  const nombre = document.querySelector('input[name="nombre"]');
  const precio = document.querySelector('input[name="precio"]');
  const id = Math.floor(Math.random() * 10000);

  if (nombre.value.trim() !== "" && precio.value.trim() !== "") {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.push(
      metodosProducto.creandoTextoProducto(nombre.value, precio.value, id)
    );
    localStorage.setItem("productos", JSON.stringify(productos));
    metodosProducto.agregandoComponenteProducto(
      metodosProducto.creandoComponenteProducto(nombre.value, precio.value, id)
    );

    nombre.value = "";
    precio.value = "";
  } else {
    metodosProducto.mostrarPopup();
  }
});

///CLICK BOTON ELIMINAR PRODUCTO
const contenedorProductos = document.querySelector(".container-produc");
contenedorProductos.addEventListener("click", (e) => {
  const btnEliminar = e.target.closest(".btn-delete-prod");

  if (btnEliminar) {
    const elementoConDataId = btnEliminar.closest("[data-id]");
    if (elementoConDataId) {
      const id = elementoConDataId.dataset.id;
      let productos = JSON.parse(localStorage.getItem("productos")) || [];
      productos = productos.filter((producto) => producto.id !== Number(id));
      localStorage.setItem("productos", JSON.stringify(productos));
      elementoConDataId.remove();
    }
  }
});
