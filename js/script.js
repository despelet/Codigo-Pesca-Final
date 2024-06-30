// const avisos = document.querySelectorAll(".aviso")

// avisos.forEach(aviso => {
//     aviso.addEventListener("click", (event)=> {
//         event.preventDefault(),
//         alert("Producto agregado exitosamente al carrito")}
//     )
// })
   
function valFormulario() {
    let nombre = document.getElementById("nombre").value.trim();

    if (nombre === "" || nombre.lenght == 0) {
        alert("No puede dejar vacío el espacio Nombre");
        return false;
    } else {
        alert("REGISTRACIÓN exitosa");
    }
    }

    const enviarMensaje = () => alert("ATENCIÓN: Esta acción borrará todos los cambios. ¿Confirma?")

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Asegúrate de que el script se ejecute después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    updateCart();
    updateCartCount(); // Inicializar el número de elementos en el carrito
});

// funcion para actualizar el numero de elementos de un carrito
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;
}

function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart(); // Actualizar visualmente el carrito después de modificarlo
    updateCartCount();
    
    // Mostrar mensaje de éxito al agregar al carrito
    alert("Producto agregado exitosamente al carrito");
    console.log('Producto agregado al carrito:', productName); // Verificar en la consola
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML = `
                ${item.name} - $${item.price} x 
                <input type="number" class="quantity-input form-control" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)" style="width: 60px;">
                <button class="btn btn-danger btn-sm" onclick="removeFromCart('${item.name}')">Eliminar</button>
            `;
            cartItems.appendChild(listItem);
            total += item.price * item.quantity;
        });

        document.getElementById('cartTotal').innerText = `$${total.toFixed(2)}`;
    }
    updateCartCount();
}

// Ejemplo de función para eliminar un producto del carrito
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    updateCartCount();
}

// Ejemplo de función para actualizar la cantidad de un producto en el carrito
function updateQuantity(productName, quantity) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity = parseInt(quantity, 10);
        if (product.quantity <= 0) {
            removeFromCart(productName);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    updateCartCount();
}

// Añadir eventos de click a los botones de agregar al carrito
const avisos = document.querySelectorAll(".aviso");

avisos.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product-name');
        const productPrice = parseFloat(this.getAttribute('data-product-price'));
        
    });
});



