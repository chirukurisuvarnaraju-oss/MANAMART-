let cart=Number(localStorage.getItem("cart")||0);

function addCart(){
  cart++;
  localStorage.setItem("cart",cart);
  alert("Product Cart lo add ayyindi.");
}

function goSeller(){
  location.href="seller.html";
}