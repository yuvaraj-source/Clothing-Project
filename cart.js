var total = 0;
var i = 1;
var message = "Please select a size";
var itemCost = [];   // empty array

function addToCart(n) {             // current cart
    var sizeId = "size" + n;        // size + 1
    var messageId = "message" + n;
    var size = document.getElementById(sizeId).value;
    
    // If the client don't select size, a message will show up
    if (size == "size"){
        document.getElementById(messageId).innerHTML = message;
        return 0;
    }

    var brand = "brand" + n;
    var priceId = "price" + n;
    var quantityId = "quantity" + n;
    
    var  name = document.getElementById(brand).innerText; 
    var price = document.getElementById(priceId).innerText;
    var quantity = document.getElementById(quantityId).value;

    var list = document.createElement("li");  // create list tag
    item = "item"+i;
    list.setAttribute("id", item);
    itemCost[i-1] = price * quantity;
    i += 1;

    var cartItems = document.createTextNode(name+" "+quantity+" x "+price+" ₹, size: "+ size);
    list.appendChild(cartItems);
    document.getElementById("items").appendChild(list);
    total += price * quantity;

    // update the total
    document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " ₹";
     // Add a remove button 
    document.getElementById(item).innerHTML += `<button onclick="removeFromCart('${item}')">Remove</button>`;
    // you have to respect the order of: '' and ""
    document.querySelector(".clear-list").innerHTML =  `<button class="clear-btn" onclick="clearCart()"> <span class="colored-word"> Clear My List</span></button> <br>`;
}
  
// delete message when the select element is clicked
function deleteMessage(eId) {
    document.getElementById(eId).innerHTML = ' ';
}

// Remove a product from the cart
function removeFromCart(eId){
    document.getElementById(eId).remove();
            // slice is string method
            // eId (element Id) contain root + number (ex: item4)
            // n is the number in eId 
        n = eId.slice(-1) - 1;
        // remove the cost of the product deleted from the cart
        total -= itemCost[n];
        // Updating the cost of products in the cart
        document.getElementById("total").innerHTML = "Total: ₹" + total.toFixed(2); 
}

function clearCart() {
    var ul = document.getElementById("items");
    var len = ul.children.length;

    for(var i=0;i<len;i++) {
        ul.removeChild(ul.children[0]);
    }
     // update the total
    total = 0;
    document.getElementById("total").innerHTML = "Total: ₹" + total.toFixed(2);
    var clearListButton = document.querySelector(".clear-btn");
    clearListButton.remove();
}