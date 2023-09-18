class ItemController {
    constructor(currentId = 0) {
      this.currentId = currentId;
      this.items = [];
      // console.log(this.items);
    }
  
    addItem(product) {
      const existingProduct = this.items.find(item => item.id === product.id);
      if (existingProduct) {
          existingProduct.quantity += 1; // Increment the quantity
      } else {
          this.items.push({ ...product, quantity: 1 }); // Add a new product entry
      }
      console.log(this.items);
      this.saveToLocalStorage();
  }}



const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cart = new Cart();

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const productElement = event.target.parentElement;
    const productName = productElement.querySelector('h2').textContent;
    const productPrice = parseFloat(productElement.querySelector('p').textContent.split('$')[1]);

    const product = new Product(productName, productPrice);
    cart.addToCart(product);
    cart.updateCartDisplay();
}