// Hero section dynamic text
const texts = [
  "Delicious food delivered to your doorstep",
  "Fresh meals, fast delivery",
  "Order online & enjoy 25% off",
  "Hot & tasty food, anytime!",
];

let index = 0;
const textEl = document.getElementById("hero-text");

setInterval(() => {
  textEl.classList.remove("slide-text");

  void textEl.offsetWidth;

  index = (index + 1) % texts.length;
  textEl.textContent = texts[index];

  textEl.classList.add("slide-text");
}, 3000);

// Achievement slider auto-scroll
const slider = document.getElementById("achievement-slider");

let scrollAmount = 0;
const slideStep = 240;

setInterval(() => {
  scrollAmount += slideStep;

  if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0;
  }

  slider.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}, 2500);

// Food items data
const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 550,
    category: "pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
    image: "images/margherita-pizza.jpg",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    price: 650,
    category: "pizza",
    description: "Loaded with pepperoni and extra cheese",
    image: "images/pepperoni-pizza.jpg",
  },
  {
    id: 3,
    name: "Classic Burger",
    price: 350,
    category: "burger",
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    image: "images/classic-burger.jpg",
  },
  {
    id: 4,
    name: "Cheese Burger",
    price: 400,
    category: "burger",
    description: "Classic burger topped with melted cheddar cheese",
    image: "images/cheese-burger.jpg",
  },
  {
    id: 5,
    name: "Coca Cola",
    price: 60,
    category: "drinks",
    description: "Refreshing carbonated soft drink",
    image: "images/coca-cola.jpg",
  },
  {
    id: 6,
    name: "Chocolate Cake",
    price: 250,
    category: "dessert",
    description: "Rich and moist chocolate cake with chocolate frosting",
    image: "images/chocolate-cake.jpg",
  },
  {
    id: 7,
    name: "Chicken Biryani",
    price: 280,
    category: "biriyani",
    description: "Aromatic basmati rice with tender chicken and spices",
    image: "images/chicken-biryani.jpg",
  },
  {
    id: 8,
    name: "Mutton Biryani",
    price: 350,
    category: "biriyani",
    description: "Fragrant rice dish with succulent mutton pieces",
    image: "images/mutton-biryani.jpg",
  },
  {
    id: 9,
    name: "BBQ Chicken Pizza",
    price: 700,
    category: "pizza",
    description: "Smoky BBQ sauce with grilled chicken and red onions",
    image: "images/bbq-chicken-pizza.jpg",
  },
  {
    id: 10,
    name: "Vegetarian Pizza",
    price: 500,
    category: "pizza",
    description: "Loaded with fresh vegetables and mozzarella cheese",
    image: "images/vegetarian-pizza.jpg",
  },
  {
    id: 11,
    name: "Hawaiian Pizza",
    price: 650,
    category: "pizza",
    description: "Ham, pineapple, and cheese for a tropical twist",
    image: "images/hawaiian-pizza.jpg",
  },
  {
    id: 12,
    name: "Bacon Burger",
    price: 450,
    category: "burger",
    description: "Classic burger with crispy bacon strips",
    image: "images/bacon-burger.jpg",
  },
  {
    id: 13,
    name: "Veggie Burger",
    price: 320,
    category: "burger",
    description: "Plant-based patty with fresh vegetables",
    image: "images/veggie-burger.jpg",
  },
  {
    id: 14,
    name: "Double Cheese Burger",
    price: 500,
    category: "burger",
    description: "Two beef patties with double the cheese",
    image: "images/double-cheese-burger.jpg",
  },
  {
    id: 15,
    name: "Sprite",
    price: 60,
    category: "drinks",
    description: "Crisp and refreshing lemon-lime soda",
    image: "images/sprite.jpg",
  },
  {
    id: 16,
    name: "Orange Juice",
    price: 120,
    category: "drinks",
    description: "Freshly squeezed orange juice",
    image: "images/orange-juice.jpg",
  },
  {
    id: 17,
    name: "Iced Tea",
    price: 80,
    category: "drinks",
    description: "Chilled tea with lemon slices",
    image: "images/iced-tea.jpg",
  },
  {
    id: 18,
    name: "Vanilla Ice Cream",
    price: 150,
    category: "dessert",
    description: "Creamy vanilla ice cream in a cup",
    image: "images/vanilla-ice-cream.jpg",
  },
  {
    id: 19,
    name: "Cheesecake",
    price: 300,
    category: "dessert",
    description: "Rich and creamy New York style cheesecake",
    image: "images/cheesecake.jpg",
  },
  {
    id: 20,
    name: "Tiramisu",
    price: 350,
    category: "dessert",
    description: "Classic Italian dessert with coffee and mascarpone",
    image: "images/tiramisu.jpg",
  },
  {
    id: 21,
    name: "Fish Biryani",
    price: 320,
    category: "biriyani",
    description: "Delicious biryani with fresh fish and aromatic spices",
    image: "images/fish-biryani.jpg",
  },
  {
    id: 22,
    name: "Vegetable Biryani",
    price: 220,
    category: "biriyani",
    description: "Mixed vegetables cooked with basmati rice and spices",
    image: "images/vegetable-biryani.jpg",
  },
  {
    id: 23,
    name: "Prawn Biryani",
    price: 400,
    category: "biriyani",
    description: "Succulent prawns in flavorful biryani rice",
    image: "images/prawn-biryani.jpg",
  },
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.reduce(
      (total, item) => total + item.quantity,
      0,
    );
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function addToCart(itemId) {
  const item = foodItems.find((item) => item.id === itemId);
  const existingItem = cart.find((cartItem) => cartItem.id === itemId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  saveCart();
  alert(`${item.name} added to cart!`);
}

function buyNow(itemId) {
  addToCart(itemId);
  window.location.href = "order.html";
}

// Display food items
function displayFoodItems(items = foodItems) {
  const foodGrid = document.getElementById("food-items");
  if (!foodGrid) return;

  foodGrid.innerHTML = "";

  items.forEach((item) => {
    const foodCard = document.createElement("div");
    foodCard.className = "food-card";
    foodCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="food-image" onerror="this.src='images/placeholder.jpg'">
            <div class="food-info">
                <div class="food-name">${item.name}</div>
                <div class="food-price">৳${item.price}</div>
                <div class="food-description">${item.description}</div>
                <div class="food-actions">
                    <button class="btn secondary" onclick="addToCart(${item.id})">Add to Cart</button>
                    <button class="btn primary" onclick="buyNow(${item.id})">Buy Now</button>
                </div>
            </div>
        `;
    foodGrid.appendChild(foodCard);
  });
}

// Search and filter functionality
function setupSearchAndFilter() {
  const searchBar = document.getElementById("search-bar");
  const categoryBtns = document.querySelectorAll(".category-btn");

  if (searchBar) {
    searchBar.addEventListener("input", filterItems);
  }

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterItems();
    });
  });
}

function filterItems() {
  const searchTerm =
    document.getElementById("search-bar")?.value.toLowerCase() || "";
  const activeCategory =
    document.querySelector(".category-btn.active")?.dataset.category || "all";

  let filteredItems = foodItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm),
  );

  if (activeCategory !== "all") {
    filteredItems = filteredItems.filter(
      (item) => item.category === activeCategory,
    );
  }

  displayFoodItems(filteredItems);
}

// Order page functionality
function displayOrderItems() {
  const orderItemsContainer = document.getElementById("order-items");
  if (!orderItemsContainer) return;

  orderItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    orderItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const orderItem = document.createElement("div");
    orderItem.className = "order-item";
    orderItem.innerHTML = `
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="changeQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="changeQuantity(${index}, 1)">+</button>
                </div>
            </div>
            <div class="item-price">৳${item.price * item.quantity}</div>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;
    orderItemsContainer.appendChild(orderItem);
  });

  updatePricing();
}

function changeQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  displayOrderItems();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  displayOrderItems();
}

function updatePricing() {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const deliveryFee = 40;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + deliveryFee + tax;

  document.getElementById("subtotal").textContent = `৳${subtotal}`;
  document.getElementById("delivery-fee").textContent = `৳${deliveryFee}`;
  document.getElementById("tax").textContent = `৳${tax}`;
  document.getElementById("total").textContent = `৳${total}`;
}

function setupOrderPage() {
  displayOrderItems();

  const placeOrderBtn = document.getElementById("place-order-btn");
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }
      alert("Order placed successfully!");
      cart = [];
      saveCart();
      window.location.href = "index.html";
    });
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  if (document.getElementById("food-items")) {
    // Home page
    displayFoodItems();
    setupSearchAndFilter();
  } else if (document.getElementById("order-items")) {
    // Order page
    setupOrderPage();
  }
});
