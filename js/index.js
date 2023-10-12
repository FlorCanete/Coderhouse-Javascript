//Productos
const products = [
    {id: 1, name: 'Joystick', price: 3500, image: './imagenes/Joystick.png'},
    {id: 2, name: 'Teclado Gamer', price: 10000, image: './imagenes/teclado.png'},
    {id: 3, name: 'Mouse Gamer', price: 5000, image: './imagenes/mouse.png'},
    {id: 4, name: 'Gabinete', price: 70000, image: './imagenes/gabinete.png'},
    {id: 6, name: 'Mousepad', price: 8000, image: './imagenes/mousepad.png'},
    {id: 7, name: 'Auriculares Gamer', price: 1500, image: './imagenes/auriculares.png'},
    {id: 8, name: 'Monitor 27 Pulgadas', price: 30000, image: './imagenes/monitor.png'},
    {id: 9, name: 'Parlante', price: 2000, image: './imagenes/parlante.png'},
];

//Carrito
const cart = [];

//Agregar
function MostrarProducto() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <div class="d-flex justify-content-around align-items-center flex-wrap m-2">
                <div class="items d-flex flex-column justify-content-center align-items-center rounded";>
                    <div class="item">
                        <img src="${product.image}" alt="" width="150px"  height="100px" >
                    </div>

                    <h3 class="text-center">${product.name}</h2>

                    <p>Precio: <span>$${product.price}</span></p>

                    <button class="add-to-cart btn btn-outline-success" onclick="AgregarCarrito(${product.id})" type="button">Add to cart</button>
                </div>
            </div>
            `;
        productsContainer.appendChild(productElement);
    });
}

//Añadir
function AgregarCarrito(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
    }
}

//Modal
function ModalCarrito() {
    const contenido = document.createElement('div');
    contenido.innerHTML = `
        <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="Carrito" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="Carrito">Tus Compras</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul id="cart-items">

                        </ul>
                        <p>Total: <span id="total">$0</span></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-success" id="ReadyCart">Realizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(contenido);
        //Actualizar
    const cartItemsModal = document.getElementById('cart-items');
    cartItemsModal.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const cartItemModal = document.createElement('li');

        cartItemModal.textContent = item.name;
        cartItemsModal.appendChild(cartItemModal);
        totalPrice += item.price;
    });

    document.getElementById('total').textContent = `$${totalPrice}`;

    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
}

document.getElementById('open-cart-button').addEventListener('click', ModalCarrito);

document.addEventListener('DOMContentLoaded', MostrarProducto);

$('#ReadyCart').click(function(){
    swal({
        title: 'Compra Realizada',
        icon: 'success',
        showCancelButton: true,
    })
})
