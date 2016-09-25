/*Exercise 1.  Fill in the correct id to target the paragraph tag*/
  function fontSize(){
    document.getElementById("biggie").style.fontSize = "200%";
  }

 /*Exercise 2. change the font color to red*/
  function colorMeBadd(){
    document.getElementById("colors").style.color = 'red'; 
  }

/*Exercise 3. fill in the spaces to make this function operate:*/
  function showAnswer(){
    document.getElementById("pirate").innerHTML= " C (da sea get it?) arrrr!";
  }

/*Exercise 4.  Instruct the following function to display the message "My name is Lee, Brrruuuce Lee!" in a new paragraph element after the button is clicked.*/

  function kungfu(){
    document.getElementById("lee").innerHTML = "My name is Lee, Brrruuuce Lee!";
  }


//Event Listeners
//Please write your code inside the window.onload function for exerices 5 onward...

window.onload = function (){
/*Exercise 5. Add an event listener to the quotes button that will display a quote after it is clicked on.</p>*/

var firstQuote = "A day is neither good nor bad, but thinking makes it so.";

document.getElementById("Benjamin").addEventListener('click', sayQuote);

function sayQuote(){
  document.getElementById("lines").innerHTML= firstQuote;
}


/*Exercise 6. Add another event listener to the image below that will display an inspirational quote after it is clicked</p>*/
var quotable = "If you cannot explain it simply, you do not know it well enough.";
document.getElementById("khaled").addEventListener('click', einsteinQuote);

function einsteinQuote(){
  document.getElementById("wedabest").innerHTML = quotable;
};


/*Exercise 7.  Generate a random quote from clicking on a button*/
var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];

document.getElementById("change").addEventListener('click',randomQuote);

function randomQuote(){
var total = quotes.length;
var randomQ = Math.floor(Math.random()*total);
document.getElementById("displayQuotes").innerHTML = quotes[randomQ];
}

                                                   
/*Exercise 8. Create an event listener that will show and hide the message when clicking on the button.*/
document.getElementById("hideandseek").addEventListener('click',messageDisplay);

function messageDisplay(){
var message = document.getElementById("showmoney");
  if(message.style.display === 'none'){
    message.style.display = "block";
  }
  else{
    message.style.display = 'none';
  }
}


/*Final Boss:
Make a visual list of the items in the orders array. When clicking on the product, you must show and hide the price for that item.*/


var orders = [{product: "Finger Toothbrush", price: 9.99}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", price: 500.01}, {product: "Goldfish Aquairum Phone Booth", price: 199.99}, {product: "Woof Washer 360", price: 9.99}, {product: "Sauna Pants", price: 39.95}, {product: "Noiseless Mute Karaoke Microphone", price: 79.99}, {product: "Necktie Umbrella", price: 16.86}];


function printOrders(items){
  for (var i=0; i<items.length; i++){
  console.log(items[i]);
  console.log(items[i].product);
  console.log(items[i].price);

var orderContainer = document.createElement("div");
orderContainer.className="orders";
myOrders.appendChild(orderContainer);

var productContainer = document.createElement("div");
productContainer.className="products";
productContainer.innerHTML = items[i].product;
myOrders.appendChild(productContainer);

var priceContainer = document.createElement("div");
priceContainer.className = "price";
priceContainer.innerHTML = items[i].price;
console.log(items[i].price);
myOrders.appendChild(priceContainer);
}
}

printOrders(orders);
};
var productList = document.CreateElement("div");
printOrders.addEventListener('click',hidePrice);

