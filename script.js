// FUNCTION:
// Hides all screens, then shows only the screen with the matching ID.
function showScreen(screenId) {
  let screens = document.querySelectorAll(".screen");

  for (let i = 0; i < screens.length; i++) {
    screens[i].classList.add("hidden");
  }

  document.getElementById(screenId).classList.remove("hidden");
}



// VARIABLE (ARRAY):
// Stores the list of food items currently checked by the user.
let currentOrder = [];

// FUNCTION:
// Checks all menu checkboxes and updates the order review list.
function updateOrder() {
  let checkboxes = document.querySelectorAll("#school-screen input[type='checkbox']");
  let orderList = document.getElementById("menu-order-list");

  currentOrder = [];
  orderList.innerHTML = "";

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      currentOrder.push(checkboxes[i].value);
    }
  }

  if (currentOrder.length === 0) {
    orderList.innerHTML = "<li>No items selected yet.</li>";
  } else {
    for (let i = 0; i < currentOrder.length; i++) {
      orderList.innerHTML += "<li>1x " + currentOrder[i] + " - $0.00</li>";
    }
  }
}

// FUNCTION:
// Moves to the Checkout screen.
function goToCheckout() {
  showScreen("checkout-screen");
}


// FUNCTION:
// Copies the current order items to the Checkout screen and displays it.
function goToCheckout() {
  let checkoutList = document.getElementById("checkout-order-list");
  checkoutList.innerHTML = "";

  if (currentOrder.length === 0) {
    checkoutList.innerHTML = "<li>No items selected.</li>";
  } else {
    for (let i = 0; i < currentOrder.length; i++) {
      checkoutList.innerHTML += "<li>1x " + currentOrder[i] + " - $0.00</li>";
    }
  }

  showScreen("checkout-screen");
}

// VARIABLE:
// Stores the customer's entered name for the confirmation screen.
let customerName = "";

// FUNCTION:
// Saves the entered name and moves to the Confirmation screen.
function placeOrder() {
  let nameInput = document.getElementById("customer-name").value;

  if (nameInput === "") {
    customerName = "Friend";
  } else {
    customerName = nameInput;
  }

  showScreen("confirmation-screen");
}



// FUNCTION:
// Saves the entered name, updates the thank-you message, and shows Confirmation.
function placeOrder() {
  let nameInput = document.getElementById("customer-name").value;

  if (nameInput === "") {
    customerName = "Friend";
  } else {
    customerName = nameInput;
  }

  document.getElementById("thank-you-message").textContent =
    "Thank you for placing your order, " + customerName + "!";

  showScreen("confirmation-screen");
}

// FUNCTION:
// Switches to the Order Canceled screen.
function cancelOrder() {
  showScreen("canceled-screen");
}

// FUNCTION:
// Resets checkboxes, inputs, and order data, then returns to Home.
function resetAndGoHome() {
  currentOrder = [];
  customerName = "";

  let checkboxes = document.querySelectorAll("#school-screen input[type='checkbox']");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }

  document.getElementById("customer-name").value = "";
  updateOrder();
  showScreen("home-screen");
}