const cartnewItems = document.getElementById('cartnew-items');

function displaynewCartItems() {
    

    
    const formcart=localStorage.getItem('cart2');
    if(formcart){
        const cartformItems = JSON.parse(formcart);
        console.log(cartformItems);
        i=9;  //product id continue from 9 for new items
        cartformItems.forEach(item => {
            const row = document.createElement('div');
            row.classList.add('row');
            row.innerHTML = `
            <div class="card col-12  product" data-product-id="${i}" style="width: 18rem;">
                <img src="${item.image}" class="card-img-top imgchange"
                    alt="image">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p><strong>${item.price}</strong></p>
                    <p class="card-text">${item.description}</p>
                <button onclick="addToCart1(${i}, '${item.name}', ${item.price}, '${item.image}')" class="btn btn-primary add-to-cart">Add to cart</button>
            
                </div>
            </div>
            <br/>
            `;  
            i++;  
            cartnewItems.appendChild(row);
        });
    }

}

// Display cart items when the cart page loads
window.addEventListener('DOMContentLoaded', displaynewCartItems);
