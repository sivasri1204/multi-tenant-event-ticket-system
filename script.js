const events = [
{
id: 1,
title: "Future Tech Summit",
category: "Technology",
date: "November 14, 2026",
location: "Chennai Trade Centre",
price: 499,
vip: 1499,
available: 40,
symbol: "✳",
cover: "cover-tech"
},
{
id: 2,
title: "Rhythm Night Live",
category: "Music",
date: "November 21, 2026",
location: "Phoenix Arena, Chennai",
price: 799,
vip: 1999,
available: 25,
symbol: "♫",
cover: "cover-music"
},
{
id: 3,
title: "Startup Connect",
category: "Business",
date: "December 5, 2026",
location: "T. Nagar, Chennai",
price: 399,
vip: 999,
available: 60,
symbol: "↗",
cover: "cover-business"
},
{
id: 4,
title: "Colours of Culture",
category: "Arts",
date: "December 12, 2026",
location: "Museum Theatre, Chennai",
price: 299,
vip: 799,
available: 35,
symbol: "✿",
cover: "cover-arts"
},
{
id: 5,
title: "AI Innovation Day",
category: "Technology",
date: "December 19, 2026",
location: "IIT Research Park, Chennai",
price: 599,
vip: 1599,
available: 50,
symbol: "⌘",
cover: "cover-tech"
},
{
id: 6,
title: "Indie Music Festival",
category: "Music",
date: "January 9, 2027",
location: "ECR, Chennai",
price: 999,
vip: 2499,
available: 75,
symbol: "♫",
cover: "cover-music"
}
];

const grid = document.getElementById("event-grid");
const notice = document.getElementById("notice");

let selectedCategory = "All";
let selectedEvent = null;

function renderEvents() {
const filteredEvents = selectedCategory === "All"
? events
: events.filter(event => event.category === selectedCategory);

grid.innerHTML = filteredEvents.map(event => "<article class="event-card"> <div class="event-cover ${event.cover}"> <span>${event.category}</span> <strong>${event.symbol}</strong> </div> <div class="event-info"> <h3>${event.title}</h3> <p>📅 ${event.date}</p> <p>📍 ${event.location}</p> <p>🎟 ${event.available} sample tickets available</p> <div class="event-bottom"> <div class="event-price"> ₹${event.price} <small>Starting price</small> </div> <button class="book-button" data-event-id="${event.id}"> Book Tickets → </button> </div> </div> </article>").join("");

if (filteredEvents.length === 0) {
grid.innerHTML = "<p>No events found in this category.</p>";
}
}

document.querySelectorAll(".filter").forEach(button => {
button.addEventListener("click", () => {
selectedCategory = button.dataset.category;

document.querySelectorAll(".filter").forEach(filter => {
  filter.classList.remove("active");
});

button.classList.add("active");
notice.textContent = "";
renderEvents();

});
});

grid.addEventListener("click", event => {
const button = event.target.closest("[data-event-id]");

if (!button) return;

const eventId = Number(button.dataset.eventId);
selectedEvent = events.find(item => item.id === eventId);

showBookingOptions(selectedEvent);
});

function showBookingOptions(event) {
notice.innerHTML = `
<div class="booking-panel">
<h3>Reserve: ${event.title}</h3>
<p>Select your ticket category and quantity.</p>

  <label for="ticket-type">Ticket category</label>
  <select id="ticket-type">
    <option value="general">General Admission — ₹${event.price}</option>
    <option value="vip">VIP — ₹${event.vip}</option>
  </select>

  <label for="ticket-quantity">Number of tickets</label>
  <select id="ticket-quantity">
    <option value="1">1 ticket</option>
    <option value="2">2 tickets</option>
    <option value="3">3 tickets</option>
    <option value="4">4 tickets</option>
    <option value="5">5 tickets</option>
  </select>

  <p id="booking-total"></p>
  <button class="book-button" id="confirm-booking">
    Confirm Demo Reservation
  </button>
  <button class="filter" id="cancel-booking">Cancel</button>
</div>

`;

const type = document.getElementById("ticket-type");
const quantity = document.getElementById("ticket-quantity");
const total = document.getElementById("booking-total");

function updateTotal() {
const price = type.value === "vip" ? event.vip : event.price;
total.textContent = "Demo total: ₹${price * Number(quantity.value)}";
}

type.addEventListener("change", updateTotal);
quantity.addEventListener("change", updateTotal);
updateTotal();

document.getElementById("cancel-booking").addEventListener("click", () => {
notice.textContent = "";
selectedEvent = null;
});

document.getElementById("confirm-booking").addEventListener("click", () => {
const count = Number(quantity.value);
const ticketType = type.value;
const price = ticketType === "vip" ? event.vip : event.price;

if (count > event.available) {
  total.textContent = "Not enough sample tickets available.";
  return;
}

total.textContent =
  `Demo reservation selected: ${count} ${ticketType.toUpperCase()} ticket(s), total ₹${count * price}. ` +
  "No real ticket has been reserved and no payment has been taken.";

total.style.color = "#b69cff";

});
}

renderEvents();
