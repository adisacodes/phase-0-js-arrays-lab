// Write your code here
let products = ["laptop", "phone", "headphones", "monitor"];


function logFirstProduct() {
  console.log("First product:", products[0]);
}


function addProduct(newProduct) {
  products.push(newProduct);
}


function updateProductName(index, newName) {
  products[index] = newName;
  }


  function removeLastProduct() {
    products.pop();
  }

  logFirstProduct();
  addProduct("mouse");
  console.log(products);

  updateProductName(1, "smartphone");
  console.log(products);

  removeLastProduct();
  console.log(products);



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
