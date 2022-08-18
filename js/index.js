function updateSubtotal(product) {
   
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')
  let newPrice = price.innerText
  let newQuantity = quantity.value
  let subT = newPrice * newQuantity
  
  subtotal.innerText = subT  
  return subT
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

const products = document.querySelectorAll('.product')
let preTotal = 0
products.forEach(element => {
  preTotal += updateSubtotal(element)
})
  
const totalValue = document.querySelector('#total-value span')
totalValue.innerText = preTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target)
  
 
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const rmvBt = document.querySelectorAll('.btn btn-remove')
  rmvBt.addEventListener('click', removeProduct)

});
