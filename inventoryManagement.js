// Write your code here
let products = ["laptop", "phone", "headphones", "monitor"];


function logFirstProduct() {
  console.log("First product:", products[0]);
}
logFirstProduct();

function addProduct(newProduct) {
  products.push(newProduct);
  return products;
}
addProduct("mouse");
  console.log(products);

function updateProductName(index, newName) {
  products[index] = newName;
  return products;
  }
updateProductName(1, "smartphone");
  console.log(products);

  function removeLastProduct() {
    products.pop();
    return products;
  }
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
