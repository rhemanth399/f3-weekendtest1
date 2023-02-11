// Define the API endpoint
const endpoint = 'https://dummyjson.com/products';

// Make the GET request to the API endpoint
fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Extract the relevant information about the products
    const products = data.products;

    // Create the HTML elements to display the product information
    const productList = document.createElement('div');
    productList.setAttribute('class', 'product-list');
console.log(products)
    products.forEach(product => {
      const productContainer = document.createElement('div');
      productContainer.setAttribute('class', 'product-container');

      const productName = document.createElement('h3');
      productName.textContent = product.name;
      productContainer.appendChild(productName);

      const productImage = document.createElement('img');
      productImage.setAttribute('src', product.images[0]);
      productImage.style.width='100px';
      console.log(productImage)
      productContainer.appendChild(productImage);

      const productId = document.createElement('p');
      productId.textContent = 'Product ID: ' + product.id;
      productContainer.appendChild(productId);

      const productDiscount = document.createElement('p');
      productDiscount.textContent = 'Discount: ' + product.discountPercentage + '%';
      productContainer.appendChild(productDiscount);

      const productStock = document.createElement('p');
      productStock.textContent = 'Stock: ' + product.stock;
      productContainer.appendChild(productStock);

      productList.appendChild(productContainer);
    });

    // Display the product information in the HTML
    document.body.appendChild(productList);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
