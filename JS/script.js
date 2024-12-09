// URL de la API de productos
const apiUrl = 'https://fakestoreapi.com/products';

// Obtener los elementos HTML
const productosContainer = document.getElementById('productos-container');
const carritoContainer = document.getElementById('carrito-container');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const totalElement = document.getElementById('total');
const finalizarCompraBtn = document.getElementById('finalizar-compra');

// Carrito almacenado en localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para mostrar los productos en el HTML
function mostrarProductos(productos) {
    productosContainer.innerHTML = '';
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
            <img src="${producto.image}" alt="${producto.title}" />
            <h3>${producto.title}</h3>
            <p>${producto.description}</p>
            <p>Precio: $${producto.price}</p>
            <button class="agregar-carrito" data-id="${producto.id}" data-title="${producto.title}" data-price="${producto.price}">Agregar al Carrito</button>
        `;
        productosContainer.appendChild(productoDiv);
    });

    // Agregar el evento a cada botón de "Agregar al Carrito"
    document.querySelectorAll('.agregar-carrito').forEach(button => {
        button.addEventListener('click', (event) => {
            const idProducto = event.target.getAttribute('data-id');
            const title = event.target.getAttribute('data-title');
            const price = parseFloat(event.target.getAttribute('data-price'));
            agregarAlCarrito(idProducto, title, price);
        });
    });
}

// Función para obtener los productos de la API
async function obtenerProductos() {
    const response = await fetch(apiUrl);
    const productos = await response.json();
    mostrarProductos(productos);
}

// Función para agregar productos al carrito
function agregarAlCarrito(id, title, price) {
    const producto = carrito.find(item => item.id === parseInt(id));
    if (producto) {
        producto.cantidad += 1;
    } else {
        carrito.push({ id: parseInt(id), title: title, cantidad: 1, price: price });
    }

    // Guardar el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    carritoContainer.innerHTML = '';
    let total = 0;
    carrito.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('producto-carrito');
        div.innerHTML = `
            <p><strong>${item.title}</strong></p>
            <p>Cantidad: ${item.cantidad}</p>
            <p>Subtotal: $${(item.cantidad * item.price).toFixed(2)}</p>
        `;
        carritoContainer.appendChild(div);
        total += item.cantidad * item.price;
    });
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Función para vaciar el carrito
vaciarCarritoBtn.addEventListener('click', () => {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
});

// Función para finalizar la compra
finalizarCompraBtn.addEventListener('click', () => {
    if (carrito.length === 0) {
        alert('El carrito está vacío. No puedes realizar una compra.');
    } else {
        alert('¡Compra finalizada! Total: ' + totalElement.textContent);
        carrito = []; // Vaciar el carrito
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
    }
});

// Llamada para obtener y mostrar los productos al cargar la página
obtenerProductos();
