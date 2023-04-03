// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  //console.log(price.innerHTML);
  //console.log(quantity.value);
  const subtotal = price.innerHTML * quantity.value;
  //console.log(subtotal);
  const subtotalElem = product.querySelector('.subtotal span');
  subtotalElem.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName("product");
  //console.log(allProducts); 
  let total = 0; 
  for (let i = 0; i < allProducts.length; i++){
    total = total + updateSubtotal(allProducts[i]);
  }
  const totalValue =  document.querySelector('#total-value span');
  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
