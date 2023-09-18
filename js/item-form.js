// item-form.js
function displaynewformItems()  {
    const productForm = document.getElementById('product-form');

    productForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const imageInput = document.getElementById('image');
        const name = document.getElementById('name').value;
        const price = parseFloat(document.getElementById('price').value);
        const description=document.getElementById("productDescription").value;

        if (!imageInput.files.length) {
            alert('Please select an image.');
            return;
        }

        const selectedImage = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            const imageBase64 = event.target.result;

            const newProduct = {
                id: name,
                name: name,
                description: description,
                price: price,
                quantity: 1,
                image: imageBase64 // Store as Base64-encoded string
            };

            cart.addItemfromform(newProduct);
            alert('New product created!');

            productForm.reset();
        };

        reader.readAsDataURL(selectedImage);
    });
}


window.addEventListener('DOMContentLoaded', displaynewformItems());



