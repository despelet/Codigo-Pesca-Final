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

let cart = [];


// function addToCart(productName, productPrice) {
//     const existingProduct = cart.find(item => item.name === productName);
//     if (existingProduct) {
//         existingProduct.quantity++;
//     } else {
//         cart.push({ name: productName, price: productPrice, quantity: 1 });
//     }
//     if(productAdded) {
    
//     const avisos = document.querySelectorAll(".aviso");
//     const productAdded = cart.some(item => item.name === productName);

//     avisos.forEach(aviso => {
//         aviso.addEventListener("click", (event)=> {
//             event.preventDefault();
//             alert("Producto agregado exitosamente al carrito");
//         });
//     });
// } else {
//     console.error("Error: El producto no se agregó correctamente al carrito.");
//     }
//     updateCart();
// }

// function addToCart(productName, productPrice) {
//     const existingProduct = cart.find(item => item.name === productName);
//     if (existingProduct) {
//         existingProduct.quantity++;
//     } else {
//         cart.push({ name: productName, price: productPrice, quantity: 1 });
//     }

//     // Verificar si el producto se agregó correctamente al carrito
//     const productAdded = cart.some(item => item.name === productName);

//     if (productAdded) {
//         const avisos = document.querySelectorAll(".aviso");

//         avisos.forEach(aviso => {
//             aviso.addEventListener("click", (event) => {
//                 event.preventDefault();
//                 alert("Producto agregado exitosamente al carrito");
//             });
//         });
//     } else {
//         console.error("Error: El producto no se agregó correctamente al carrito.");
//     }

//     updateCart(); // Actualizar el carrito después de agregar el producto
// }

    
// function removeFromCart(productName) {
//     cart = cart.filter(item => item.name !== productName);
//     updateCart();
// }
    
// function updateQuantity(productName, quantity) {
//     const product = cart.find(item => item.name === productName);
//     if (product) {
//         product.quantity = parseInt(quantity, 10);
//         if (product.quantity <= 0) {
//             removeFromCart(productName);
//         }
//     }
//     updateCart();
// }
    
// function updateCart() {
// const cartItems = document.getElementById('cartItems');
// cartItems.innerHTML = '';
  
//     let total = 0;
//     let totalItems = 0;
    
//     cart.forEach((item) => {
//         const listItem = document.createElement('li');
//         listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
//         listItem.innerHTML = `
//             ${item.name} - $${item.price} x 
//             <input type="number" class="quantity-input form-control" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)" style="width: 60px;">
//             <button class="btn btn-danger btn-sm" onclick="removeFromCart('${item.name}')">Eliminar</button>
//         `;
//         cartItems.appendChild(listItem);
    
//         total += item.price * item.quantity;
//         totalItems += item.quantity;
//     });
    
//     document.getElementById('total').textContent = total.toFixed(2);
//     document.getElementById('cartCount').textContent = totalItems;
// }
    
// // Event listener for cart modal close to reset the form
// document.getElementById('cartModal').addEventListener('hidden.bs.modal', function () {
//     updateCart();
// });
    



function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    console.log('Producto agregado al carrito:', productName); // Verificar en la consola

    updateCart(); // Actualizar visualmente el carrito después de modificarlo

    // Mostrar mensaje de éxito al agregar al carrito
    alert("Producto agregado exitosamente al carrito");
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Limpiar contenido anterior del carrito

    let total = 0;

    cart.forEach((item, index) => {
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

    // Mostrar el total en el carrito
    document.getElementById('cartTotal').innerText = `$${total.toFixed(2)}`;
}

// Ejemplo de función para eliminar un producto del carrito
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
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
    updateCart();
}

// Añadir eventos de click a los botones de agregar al carrito
const avisos = document.querySelectorAll(".aviso");

avisos.forEach(aviso => {
    aviso.addEventListener("click", (event) => {
        event.preventDefault();
        const productName = aviso.getAttribute('data-product-name');
        const productPrice = parseFloat(aviso.getAttribute('data-product-price'));
        addToCart(productName, productPrice);
    });
});

