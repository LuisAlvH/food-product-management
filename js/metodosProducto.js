export function agregandoComponenteProducto(componente) {
  const contenedorProductos = document.querySelector(".container-produc");
  let fragmento = document.createDocumentFragment();
  fragmento.appendChild(componente);
  contenedorProductos.appendChild(fragmento);
}

export function creandoComponenteProducto(nombre, precio, id) {
  const contenedorProducto = document.createElement("DIV");
  contenedorProducto.className = "row";
  contenedorProducto.setAttribute("data-id", `${id}`);
  contenedorProducto.innerHTML = `
    
          <div class="col s12 l12">
            <div class="card horizontal indigo lighten-2 z-depth-2">
              <div class="card-image"></div>
              <div class="card-stacked">
                <div class="card-content white-text flow-text">
                  <p>${nombre}</p>
                  <p>${precio}</p>
                    <button class="btn-delete-prod">
                  <i class="material-icons">delete</i>
                </button>
                </div>
              </div>
            </div>
          </div>
       
    `;

  return contenedorProducto;
}

export function creandoTextoProducto(nombre, precio, id) {
  let producto = {
    nombre: nombre,
    precio: precio,
    id: id,
  };

  return producto;
}

export function renderizadoInicial(listProductos) {
  listProductos.forEach((producto) => {
    agregandoComponenteProducto(
      creandoComponenteProducto(producto.nombre, producto.precio, producto.id)
    );
  });
}
