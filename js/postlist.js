const cartItemsTable = document.getElementById('cart-items');
const cart = JSON.parse(localStorage.getItem('cart')) || [];
function displayCartItems() {
    cartItemsTable.innerHTML = `
        <tr>
            <th> Image</th>
            <th> Name</th>
            <th> Price</th>
            <th> Quantity</th>
            <th> Total</th>
        </tr>
    `;

    let totalAmount = 0; // Initialize total amount

    const storedCart = localStorage.getItem('cart1');
    if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        // console.log(cartItems);
        cartItems.forEach((item,index )=> {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img class="imgchange" src="${item.image}" alt="${item.name}" /></td>
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
                <td>$${item.price * item.quantity}</td>
                <td><button onclick="removeFromCart(${index})"  style="background-color:lightgreen;">remove</button></td>
            `;
            cartItemsTable.appendChild(row);
            totalAmount += item.price * item.quantity; // Update total amount
           
            row.addEventListener('click', removeFromCart);


            // const removeButton = document.querySelector('.remove-button');
            function removecart() {
                if(item.quantity>1){
                    item.quantity -= 1;
                    totalAmount -= item.price;
                    row.innerHTML = `
                    <td><img class="imgchange" src="${item.image}" alt="${item.name}" /></td>
                    <td>${item.name}</td>
                    <td>$${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>$${item.price * item.quantity}</td>
                    <td><button onclick="removecart()">remove</button></td>
                    `;
                    // cartItemsTable.appendChild(row);
                    const totalRow = document.querySelector('#total-row');
                    totalRow.innerHTML = `<td colspan="4"></td><td><button><a href="https://www.phonepe.com">Pay now Total Amount: $${totalAmount}</a></button></td>`;
                }
                else{
                    totalAmount -= item.price * item.quantity; // Update total amount
                    row.remove(); // Remove the entire row from the DOM
            
                // Update the total row with the new total amount
                    const totalRow = document.querySelector('#total-row');
                    totalRow.innerHTML = `<td colspan="4"></td><td><button><a href="https://www.phonepe.com">Pay now Total Amount: $${totalAmount}</a></button></td>`;
                }
            }

            
        
            
            
            

        });
    }

    
    // Add a row for the total amount
    const totalRow = document.createElement('tr');
    totalRow.id = 'total-row';
    function PhonePe() {
        // Replace the URL with the appropriate PhonePe URL for payment
        window.location.href = "https://www.phonepe.com";
      }
    // PhonePe();
    totalRow.innerHTML = `
        <td colspan="4"></td>
        <td><button><a href="https://www.phonepe.com">Pay now Total Amount: $${totalAmount}</a></button></td>
    `;

    cartItemsTable.appendChild(totalRow);
    
}

function updateQuantity(index, newQuantity) {
    const cart = JSON.parse(localStorage.getItem('cart1')) || [];
    if (index >= 0 && index < cart.length) {
      cart[index].quantity = parseInt(newQuantity);
      localStorage.setItem('cart1', JSON.stringify(cart));
      displayCartItems();
    }
  }

  function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart1')) || [];
    if (index >= 0 && index < cart.length) {
      cart.splice(index, 1);
      localStorage.setItem('cart1', JSON.stringify(cart));
      displayCartItems();
    }
  }

// Display cart items when the cart page loads
window.addEventListener('DOMContentLoaded', displayCartItems);
