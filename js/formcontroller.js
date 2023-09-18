
class FormController {
    constructor(currentId = 0) {
      this.currentId = currentId;
      this.items = [];
      this.loadFromLocalStorage();
      // console.log(this.items);
    }
  

  
  addItemfromform(product) {
    const existingProduct = this.items.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increment the quantity
    } else {
        this.items.push({ ...product, quantity: 1 }); // Add a new product entry
    }
    console.log(this.items);
    this.saveToformLocalStorage();
  }
  
  saveToformLocalStorage() {
    localStorage.setItem('cart2', JSON.stringify(this.items));
  }

  loadFromLocalStorage() {
    const cartData = localStorage.getItem('cart2');
    this.items = cartData ? JSON.parse(cartData) : [];
  }
  
  }
  
  const cart = new FormController();
  
  
  
  function addToCart(productId, productName, price) {
    const product = {
        id: productId,
        name: productName,
        price: price,
        image: `images/product${productId}.jpg`
    };
    cart.addItem(product);
    console.log(`Product ${productName} added to cart.`);
    alert('Added to cart!');
  
  }
  
  function addToCart1(productId, productName, price, image) {
    const product = {
        id: productId,
        name: productName,
        price: price,
        image: image
    };
    cart.addItem(product);
    console.log(`Product ${productName} added to cart.`);
    alert('Added to cart!');
  
  }
  
  
  
  // Sample products with image paths
  const product1 = {
    id: 1,
    image: 'images/product1.jpg',
    name: 'Laptop',
    price: 30000,
    quantity: 1,
    
  };
  
  const product2 = {
    id: 2,
    image: 'images/product2.jpg',
    name: 'Apple iphone',
    price: 15000,
    quantity: 1,
    
  };
  
  const product3 = {
    id: 3,
    image: 'images/product3.jpg',
    name: 'Ear buds',
    price: 1500,
    quantity: 1,
  };
  
  // // Adding products to cart
  // addToCart(product1.id, product1.image, product1.name, product1.price, product1.quantity);
  // addToCart(product2.id, product2.image, product2.name, product2.price, product2.quantity);
  // addToCart(product3.id, product3.image, product3.name, product3.price, product3.quantity);
  
  console.log(cart.items);
  