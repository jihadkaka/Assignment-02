console.log("hi")
let value = 0;
let sub = 0;
const imageArray = [
   {
      url: "./images/food1.jfif",
      name: "Enchilade",
      ratting: "4.8",
      price: "$13.3"
   },
   {
      url: "./images/food2.jfif",
      name: "EnchiladeJihad",
      ratting: "3.8",
      price: "$10.3"
   },
   {
      url: "./images/food3.jfif",
      name: "Enchilade",
      ratting: "4.3",
      price: "$17.3"
   },
   {
      url: "./images/thai-tossed-green-salad-recipe-3217707-hero-01-8782b0ef1cbd404680af8a51769140ba%201.png",
      name: "Jihadi",
      ratting: "3.8",
      price: "$11.3"
   },
   {
      url: "./images/food4.jfif",
      name: "Chilade",
      ratting: "4.5",
      price: "$14.5"
   },
   {
      url: "./images/food5.jfif",
      name: "Enchilpani",
      ratting: "3.9",
      price: "$10.3"
   }

];


function show() {
   if (value === 0) {
      const cartContainerr = document.querySelector(".cartContainer")

      for (const element of imageArray) {

         cartContainerr.innerHTML = cartContainerr.innerHTML + `<div class="cart more-cart">
                        <div class="image">
                        <img src=${element.url} alt="">
                    </div>

                    <div class="cartBottom">
                        <div class="cartName">
                            <h4>${element.name}</h4>
                            <p>Add To Cart</p>
                        </div>

                        <div class="ratting">
                            <img height="12px" src="images/star.svg" alt=""> <span>${element.ratting}</span>
                            <p>${element.price}</p>
                        </div>
                        </div>`;

      }
      value = 1;
      document.getElementById("span").innerText = "Show Less";

   }
   else {
      document.querySelectorAll(".more-cart").forEach(e => {
         e.remove()
      })
      value = 0;
      document.getElementById("span").innerText = "Show More Products";


   }


}
document.getElementById("emailForm").addEventListener('submit', function (event) {
   event.preventDefault();


   var email = document.getElementById('emailInput').value;
   if (sub === 0) {
      const container = document.querySelector(".subscribe")
      container.innerHTML = container.innerHTML + `<p>Subscribed Successfully</p>`
   }
   sub = 1

});