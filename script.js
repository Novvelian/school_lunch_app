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
// Saves the entered name and pickup time, updates the confirmation screen, and displays it.
function placeOrder() {
  // VARIABLE:
  // Reads the customer's name from the text input.
  let nameInput = document.getElementById("customer-name").value;

  if (nameInput === "") {
    customerName = "Friend";
  } else {
    customerName = nameInput;
  }

  // OUTPUT:
  // Updates the thank-you heading with the customer's name.
  document.getElementById("thank-you-message").textContent =
    "Thank you for placing your order, " + customerName + "!";

  // VARIABLE:
  // Reads the pickup time selected from the dropdown menu.
  let selectedTime = document.getElementById("pickup-time").value;

  // OUTPUT:
  // Displays the confirmed pickup time on the confirmation screen.
  document.getElementById("pickup-time-confirmation").textContent =
    "Your order will be ready at " + selectedTime + ".";

  showScreen("confirmation-screen");
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



// VARIABLE:
  // Reads the pickup time selected from the dropdown menu.
  let selectedTime = document.getElementById("pickup-time").value;

  // OUTPUT:
  // Displays the confirmed pickup time on the confirmation screen.
  document.getElementById("pickup-time-confirmation").textContent =
    "Your order will be ready at " + selectedTime + ".";






  // VARIABLE:
// Remembers which screen opened the calendar so "Back" returns there.
let previousScreen = "school-screen";

// FUNCTION:
// Saves the screen the user came from and opens the Calendar screen.
function openCalendar(fromScreen) {
  previousScreen = fromScreen;
  showScreen("calendar-screen");
}

// FUNCTION:
// Returns the user to the screen they were on before opening the Calendar.
function closeCalendar() {
  showScreen(previousScreen);
}





// FUNCTION:
// Populates the Current & Past Orders screen with the active order details and displays it.
function openOrderStatus() {
  // VARIABLE:
  // Reads the selected pickup time and chosen payment radio button.
  let selectedTime = document.getElementById("pickup-time").value;
  let selectedPayment = document.querySelector("input[name='payment']:checked").value;

  // OUTPUT:
  // Updates the pickup time and payment method text on the status screen.
  document.getElementById("status-ready-time").innerHTML =
    "<strong>It will be ready at " + selectedTime + "</strong>";

  document.getElementById("status-payment-info").innerHTML =
    "<strong>Total: $0.00 Paid for by " + selectedPayment + "</strong>";

  // OUTPUT:
  // Lists each ordered food item on the status screen.
  let statusList = document.getElementById("status-order-list");
  statusList.innerHTML = "";

  if (currentOrder.length === 0) {
    statusList.innerHTML = "<li>No items selected.</li>";
  } else {
    for (let i = 0; i < currentOrder.length; i++) {
      statusList.innerHTML += "<li>1x " + currentOrder[i] + " - $0.00</li>";
    }
  }

  showScreen("orders-screen");
}