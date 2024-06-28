const avisos = document.querySelectorAll(".aviso")

// avisos.forEach(aviso => {
//     aviso.addEventListener("click", (event)=> {
//         event.preventDefault(),
//         alert("Proximamente...")}
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

    const enviarMensaje = () => alert("ATENCIÓN: Esta acción borrará todos los cambos. ¿Confirma?")

    let cart = [];

    function addToCart(productName, productPrice) {
        const existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }
        updateCart();
    }
    
    function removeFromCart(productName) {
        cart = cart.filter(item => item.name !== productName);
        updateCart();
    }
    
    function updateQuantity(productName, quantity) {
        const product = cart.find(item => item.name === productName);
        if (product) {
            product.quantity = parseInt(quantity, 10);
            if (product.quantity <= 0) {
                removeFromCart(productName);
            }
        }
        updateCart();
    }
    
    function updateCart() {
        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = '';
    
        let total = 0;
        let totalItems = 0;
    
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
            totalItems += item.quantity;
        });
    
        document.getElementById('total').textContent = total.toFixed(2);
        document.getElementById('cartCount').textContent = totalItems;
    }
    
    // Event listener for cart modal close to reset the form
    document.getElementById('cartModal').addEventListener('hidden.bs.modal', function () {
        updateCart();
    });
    