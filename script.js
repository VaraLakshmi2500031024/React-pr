// --- Mock Data ---
let menuItems = [
    { id: 1, name: "Chicken Dum Biriyani", restaurant: "Hot Spot", category: "Biriyanis", price: 499.00, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/10/chicken-dum-biryani.jpg" },
    { id: 2, name: "Mutton Biriyani", restaurant: "Hot Spot", category: "Biriyanis", price: 499.00, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/mutton-biryani-recipe.jpg" },
    { id: 3, name: "Prawn Biriyani", restaurant: "Hot Spot", category: "Biriyanis", price: 499.00, image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/12/Prawn-Biryani-Recipe.jpg" },
    { id: 4, name: "Veg Biriyani", restaurant: "Hot Spot", category: "Biriyanis", price: 299.00, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/veg-biryani-recipe.jpg" },
    { id: 5, name: "Paneer Biriyani", restaurant: "Hot Spot", category: "Biriyanis", price: 399.00, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-biryani-recipe.jpg" },
    { id: 6, name: "Mushroom Biriyani", restaurant: "Hot Spot", category: "Biriyanis", price: 399.00, image: "https://www.cookwithkushi.com/wp-content/uploads/2015/09/best_quick_easy_veg_mushroom_biryani.jpg" },
    { id: 7, name: "Andhra/Telangana Thali", restaurant: "Naidu Gari Military Hotel", category: "South Indian Thali", price: 299.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06SvbZB2XoASuzRixOgFHuOWdfzTVM9GBOQkPXtm337FDVrmAFDzIrj4&s=10" },
    { id: 8, name: "Rayalaseema Thali", restaurant: "Naidu Gari Military Hotel", category: "South Indian Thali", price: 269.00, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/n1jresjhawbi2aawps2t" },
    { id: 9, name: "Tamil Nadu Sapad Thali", restaurant: "Naidu Gari Military Hotel", category: "South Indian Thali", price: 230.00, image: "https://themagicsaucepan.com/wp-content/uploads/2017/03/33235488471_5cb2dc58da_k.jpg" },
    { id: 10, name: "Kerala Sadya Thali", restaurant: "Naidu Gari Military Hotel", category: "South Indian Thali", price: 220.00, image: "https://img.etimg.com/photo/msid-113362555,imgsize-1860995/Sadhyameal.jpg" },
    { id: 11, name: "Gulab Jamun (3 Pcs)", restaurant: "Sweet Magic", category: "Sweets", price: 89.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1e7kXhlu_6YIRlOj7hRjZKDdzqP09_YZRdua19tYHQ&s=10" },
    { id: 12, name: "Rasgulla (3 Pcs)", restaurant: "Sweet Magic", category: "Sweets", price: 109.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVqac4QyEDCbuO1s9rr4FBpg-_hk6ShAuJkLqt9q-vIw&s=10" },
    { id: 13, name: "Kaju Katli (5 Pcs)", restaurant: "Sweet Magic", category: "Sweets", price: 195.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksD5NtdHtc2BgKBj3eKjm2398ljPeRv0nECKQLLMQsQ&s=10" },
    { id: 14, name: "Avocado Salad Bowl", restaurant: "Green Life", category: "Healthy", price: 229.00, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
    { id: 15, name: "Paneer & Millet Protein Bowl", restaurant: "Green Life", category: "Healthy", price: 199.00, image: "https://mykitchendiaries.com/wp-content/uploads/2025/08/1624702f-e6c9-46e3-98b8-0cb654b2e366.webp" },
    { id: 16, name: "Sugar-Free Chia Seed Fruit Pudding", restaurant: "Pure & Pour", category: "Healthy", price: 149.00, image: "https://www.twospoons.ca/wp-content/uploads/2019/05/How-to-make-easy-chia-pudding-Just-3-ingredients-required-SO-thick-and-creamy-and-delicious-every-time-vegan-glutenfree-chiapudding-recipe-twospoons-9.jpg" },
    { id: 17, name: "Mango Smoothie", restaurant: "Pure & Pour", category: "Healthy", price: 129.00, image: "https://cdn.aboutamom.com/uploads/2024/09/mango-smoothie-recipe-a_aam_mango_smoothie_feature_4.jpeg" },
    { id: 18, name: "Strawberry Banana Smoothie", restaurant: "Pure & Pour", category: "Healthy", price: 129.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG782TR4_5QbV00_7GpBOzISsArm5rEvQVQGKcMAhqGg&s=10" },
    { id: 19, name: "Frozen Fruit Smoothie", restaurant: "Pure & Pour", category: "Healthy", price: 129.00, image: "https://cdn.foodfaithfitness.com/uploads/2024/09/Frozen-Fruit-Smoothie-Recipe-A_FFF_Frozen_Fruit_Smoothie_Feature_3.jpg" },
    { id: 20, name: "Naked Nutella Waffle", restaurant: "Belgian Waffles", category: "Waffles", price: 189.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jJJ1wB9KfV1HWWW6sjzz-KvjS6QtStSyTbfF8r0XVw&s=10" },
    { id: 21, name: "Triple Chocolate Waffle", restaurant: "Belgian Waffles", category: "Waffles", price: 199.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRei_Wfaay0R6Cbl7NexCTcsYBOpOhcfTI1gjn7HXYujQ&s=10" },
    { id: 22, name: "Almond Cocoa Butter Waff-wich Waffle", restaurant: "Belgian Waffles", category: "Waffles", price: 169.00, image: "https://api.thebelgianwaffle.co/uploads/belgian_img/product/Almond_Cocoa_Butter_Waff-wich__1__ttcCEuQGI.jpg?tr=orig-true" },
    { id: 23, name: "Kitkat Waff-wich Waffle", restaurant: "Belgian Waffles", category: "Waffles", price: 149.00, image: "https://b.zmtcdn.com/data/dish_photos/027/35a3295158a85f9030ec2b90d99bd027.jpeg" },
    { id: 24, name: "Red Velvet Waffle", restaurant: "Belgian Waffles", category: "Waffles", price: 179.00, image: "https://b.zmtcdn.com/data/dish_photos/539/b0a60c579a2cf67b30f24b93a6ab0539.jpg" },
    { id: 25, name: "Classic Cheeseburger", restaurant: "McDonald's", category: "Burger", price: 149.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgDYAc6S3Ldk6oZfYMNDAquLhh2McDQCpi2gvqUc2ynMX8uSlxfuZ2qk&s=10" },
    { id: 26, name: "McVeggie Burger", restaurant: "McDonald's", category: "Burger", price: 159.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsKKIRO3SswJzd9WyaPtnX3IkrcMxFijqr4bP2HrPyQ&s=10" },
    { id: 27, name: "McChicken Burger", restaurant: "McDonald's", category: "Burger", price: 125.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ipro6RNUOAUmwdC4TC-agI0rbSFSyYSpuxhcISViow&s=10" },
    { id: 28, name: "McAloo Tikki Burger", restaurant: "McDonald's", category: "Burger", price: 139.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDfP_PvNvQci-5K0bVhPwKOsE6M_-qxbPC5mYnD4HGw&s=10" },
    { id: 29, name: "Margherita Pizza", restaurant: "Dominos", category: "Pizza", price: 345.00, image: "https://www.dominos.co.in/blog/wp-content/uploads/2019/12/new_double_cheese_margherita.jpg" },
    { id: 30, name: "Peppy Paneer Pizza", restaurant: "Dominos", category: "Pizza", price: 299.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3tcq1stZ2I_ThLD-mdef6sw9hJwKDos8M9WORWSpnw&s=10" },
    { id: 31, name: "Chicken Fiesta Pizza", restaurant: "Dominos", category: "Pizza", price: 269.00, image: "https://b.zmtcdn.com/data/dish_photos/062/145f5278e5754c76336270967c5e9062.jpeg" },
    { id: 32, name: "Veggie Paradise Pizza", restaurant: "Dominos", category: "Pizza", price: 299.00, image: "https://www.dominos.co.in/files/upload/images/57afe85d86c7d64defd7a37c5ce68cc7.png" },
    { id: 33, name: "Pearl Black Milk Tea", restaurant: "BobaHolic", category: "Beverages", price: 295.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcmzeNxk0z2Tai7WwNeB-i_k-YwfdKEvZ6GQM5oHt8hA&s=10" },
    { id: 34, name: "Matcha Latte Boba", restaurant: "BobaHolic", category: "Beverages", price: 295.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3c86NuHf-QSwosFBU5VwxZWFDyi4AwzdOU4_nJCsyg&s=10" },
    { id: 35, name: "Taro Bubble Milk Tea", restaurant: "BobaHolic", category: "Beverages", price: 359.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IZOU7SdVXfcE3Yhx_b77DC7KNwJU9bmgWy4rnqQ1PQ&s=10" },
    { id: 36, name: "Vanilla Cold Brew", restaurant: "StarBucks", category: "Beverages", price: 345.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSlKE2uaQhtoxe0EJ2ZsugAG9yGM0BJsiwD2u89jqrA&s=10" },
    { id: 37, name: "Iced Caramel Macchiato", restaurant: "StarBucks", category: "Beverages", price: 349.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOJQKPsYJ0uQ0-1Our1VETv2PNBlgMf_jCllNQrKUKw&s=10" },
    { id: 38, name: "Nutella Hazlenut Cold Coffee", restaurant: "StarBucks", category: "Beverages", price: 369.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZPb4Q01tGMXcI5L5_gzcIPYLAwbW3HJM9Jo_pe_l0w&s=10" },
    { id: 39, name: "Virgin Blue Lagoon", restaurant: "Mocktail Magic", category: "Beverages", price: 149.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmiUaCN0Jkwi4WueSuPVTcnKl7G-iT38HU7EuKO8iAeA&s=10" },
    { id: 40, name: "Watermelon Basil Fizz", restaurant: "Mocktail Magic", category: "Beverages", price: 159.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_7qXcAkKXbP3-19l3SQoEE5f8l5QpHyR1LYEpEGT0Cg&s=10" }
];

let cart = [];
let orders = [];

// Default account setup
let initialUsers = [
    { id: 1, name: "Nandini", email: "nandini@gmail.com", password: "nandini1234" }
];

let users = JSON.parse(localStorage.getItem('bitebox_users')) || initialUsers;
if (!localStorage.getItem('bitebox_users')) {
    localStorage.setItem('bitebox_users', JSON.stringify(users));
}

let currentUser = JSON.parse(localStorage.getItem('bitebox_current_user')) || null;
let currentRole = 'customer'; 
let selectedLoginType = 'user'; // 'user' or 'admin'

// Admin Credentials
const ADMIN_EMAIL = "admin@bitebox.com";
const ADMIN_PASS = "admin123";

// --- Mandatory Entry Authentication Logic ---
const authModal = document.getElementById('authModal');
const tabLoginBtn = document.getElementById('tabLoginBtn');
const tabRegisterBtn = document.getElementById('tabRegisterBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const typeUserBtn = document.getElementById('typeUserBtn');
const typeAdminBtn = document.getElementById('typeAdminBtn');
const adminRoleBtn = document.getElementById('adminRoleBtn');
const authTabs = document.getElementById('authTabs');
const userNameDisplay = document.getElementById('userNameDisplay');
const logoutBtn = document.getElementById('logoutBtn');

function checkAuthenticationState() {
    if (!currentUser) {
        authModal.style.display = 'flex';
    } else {
        authModal.style.display = 'none';
        userNameDisplay.textContent = `Hi, ${currentUser.name}`;
        
        if (currentUser.role === 'admin') {
            adminRoleBtn.classList.remove('hidden');
            switchRoleView('admin');
        } else {
            adminRoleBtn.classList.add('hidden');
            switchRoleView('customer');
        }
    }
}

// Mode Selection (User vs Admin)
typeUserBtn.onclick = () => {
    selectedLoginType = 'user';
    typeUserBtn.classList.add('active');
    typeAdminBtn.classList.remove('active');
    authTabs.classList.remove('hidden');
};

typeAdminBtn.onclick = () => {
    selectedLoginType = 'admin';
    typeAdminBtn.classList.add('active');
    typeUserBtn.classList.remove('active');
    authTabs.classList.add('hidden');
    tabLoginBtn.click();
};

// Form Tab Controls
tabLoginBtn.onclick = () => {
    tabLoginBtn.classList.add('active');
    tabRegisterBtn.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
};

tabRegisterBtn.onclick = () => {
    tabRegisterBtn.classList.add('active');
    tabLoginBtn.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
};

// Handle Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (selectedLoginType === 'admin') {
        if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
            currentUser = { name: "Admin", email: ADMIN_EMAIL, role: "admin" };
            localStorage.setItem('bitebox_current_user', JSON.stringify(currentUser));
            checkAuthenticationState();
            loginForm.reset();
        } else {
            alert("Invalid Admin Credentials!");
        }
    } else {
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            return alert("Invalid Email or Password.");
        }
        currentUser = { name: user.name, email: user.email, role: "customer" };
        localStorage.setItem('bitebox_current_user', JSON.stringify(currentUser));
        checkAuthenticationState();
        loginForm.reset();
    }
});

// Handle User Registration
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (users.find(u => u.email === email)) {
        return alert("User email already registered!");
    }

    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem('bitebox_users', JSON.stringify(users));
    
    currentUser = { name: newUser.name, email: newUser.email, role: "customer" };
    localStorage.setItem('bitebox_current_user', JSON.stringify(currentUser));
    
    checkAuthenticationState();
    registerForm.reset();
});

logoutBtn.onclick = () => {
    currentUser = null;
    localStorage.removeItem('bitebox_current_user');
    checkAuthenticationState();
};

// --- View Router ---
const roleBtns = document.querySelectorAll('.role-btn');
const views = document.querySelectorAll('.view-section');

function switchRoleView(role) {
    currentRole = role;
    roleBtns.forEach(b => b.classList.remove('active'));
    views.forEach(v => v.classList.remove('active'));
    
    const activeBtn = document.querySelector(`.role-btn[data-role="${role}"]`);
    if(activeBtn) activeBtn.classList.add('active');
    
    document.getElementById(`${role}View`).classList.add('active');
    
    renderRestaurantView();
    renderDeliveryView();
    renderCustomerTracking();
    renderAdminView();
}

roleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        switchRoleView(btn.dataset.role);
    });
});

// --- Customer View Logic ---
const dishesGrid = document.getElementById('dishesGrid');
const searchInput = document.getElementById('searchInput');
const catPills = document.querySelectorAll('.cat-pill');

function renderDishes(items) {
    dishesGrid.innerHTML = items.map(dish => `
        <div class="dish-card">
            <img src="${dish.image}" alt="${dish.name}" class="dish-img">
            <div class="dish-info">
                <h4>${dish.name}</h4>
                <div class="restaurant-name">${dish.restaurant}</div>
                <div class="dish-bottom">
                    <span class="price">₹${dish.price.toFixed(2)}</span>
                    <button class="add-btn" onclick="addToCart(${dish.id})"><i class="fa-solid fa-plus"></i> Add</button>
                </div>
            </div>
        </div>
    `).join('');
}

catPills.forEach(pill => {
    pill.addEventListener('click', () => {
        catPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.dataset.category;
        const filtered = cat === 'all' ? menuItems : menuItems.filter(i => i.category === cat);
        renderDishes(filtered);
    });
});

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = menuItems.filter(i => 
        i.name.toLowerCase().includes(term) || i.restaurant.toLowerCase().includes(term)
    );
    renderDishes(filtered);
});

// --- Cart System ---
const cartDrawer = document.getElementById('cartDrawer');
const cartToggleBtn = document.getElementById('cartToggleBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');

cartToggleBtn.addEventListener('click', () => cartDrawer.classList.add('open'));
closeCartBtn.addEventListener('click', () => cartDrawer.classList.remove('open'));

function addToCart(id) {
    const dish = menuItems.find(i => i.id === id);
    const existing = cart.find(i => i.id === id);
    
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...dish, qty: 1 });
    }
    updateCartUI();
    cartDrawer.classList.add('open');
}

function updateCartUI() {
    cartCount.textContent = cart.reduce((acc, i) => acc + i.qty, 0);
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty!</p>';
        cartTotal.textContent = '₹0.00';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong>
                <div style="font-size: 0.8rem; color: #666;">₹${item.price.toFixed(2)} x ${item.qty}</div>
            </div>
            <div>
                <strong>₹${(item.price * item.qty).toFixed(2)}</strong>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
    cartTotal.textContent = `₹${total.toFixed(2)}`;
}

document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) return alert("Cart is empty!");

    const deliveryTime = document.getElementById('deliveryTime').value;
    const timeText = deliveryTime === 'now' ? 'ASAP' : `In ${deliveryTime} mins`;

    const newOrder = {
        id: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
        userEmail: currentUser.email,
        userName: currentUser.name,
        items: [...cart],
        total: cart.reduce((acc, i) => acc + (i.price * i.qty), 0),
        status: 'placed',
        scheduled: timeText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    orders.push(newOrder);
    cart = [];
    updateCartUI();
    cartDrawer.classList.remove('open');
    renderCustomerTracking();
    alert("Order Placed Successfully!");
});

// --- Customer Orders Tracking ---
function renderCustomerTracking() {
    const container = document.getElementById('customerActiveOrders');
    const userOrders = currentUser ? orders.filter(o => o.userEmail === currentUser.email) : [];

    if (userOrders.length === 0) {
        container.innerHTML = '<p class="empty-msg">No active orders found.</p>';
        return;
    }

    container.innerHTML = userOrders.slice().reverse().map(ord => `
        <div class="order-card">
            <div class="order-header">
                <span>${ord.id} (${ord.scheduled})</span>
                <span class="status-badge ${ord.status}">${ord.status}</span>
            </div>
            <div style="font-size:0.85rem;">
                ${ord.items.map(i => `${i.qty}x${i.name}`).join(', ')}
            </div>
            <strong style="display:block; margin-top:0.4rem; font-size:0.9rem;">Total: ₹${ord.total.toFixed(2)}</strong>
        </div>
    `).join('');
}

// --- Restaurant Management View ---
function renderRestaurantView() {
    const menuContainer = document.getElementById('restaurantMenuList');
    menuContainer.innerHTML = menuItems.map(item => `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem; border-bottom:1px solid #eee; padding-bottom:0.4rem;">
            <div>
                <strong>${item.name}</strong> - ₹${item.price.toFixed(2)}
                <div style="font-size:0.75rem; color:#777;">${item.restaurant}</div>
            </div>
        </div>
    `).join('');

    const ordersContainer = document.getElementById('restaurantOrdersList');
    if (orders.length === 0) {
        ordersContainer.innerHTML = '<p class="empty-msg">No orders received.</p>';
        return;
    }

    ordersContainer.innerHTML = orders.map(ord => `
        <div class="order-card">
            <div class="order-header">
                <span>${ord.id}</span>
                <span class="status-badge ${ord.status}">${ord.status}</span>
            </div>
            <div style="font-size:0.85rem; margin-bottom:0.5rem;">
                ${ord.items.map(i => `${i.qty}x${i.name}`).join(', ')}
            </div>
            ${ord.status === 'placed' ? `
                <button class="btn btn-primary" style="padding:0.3rem 0.6rem; font-size:0.8rem;" onclick="updateOrderStatus('${ord.id}', 'preparing')">Start Preparing</button>
            ` : ''}
            ${ord.status === 'preparing' ? `
                <button class="btn btn-success" style="padding:0.3rem 0.6rem; font-size:0.8rem;" onclick="updateOrderStatus('${ord.id}', 'delivering')">Ready for Pickup</button>
            ` : ''}
        </div>
    `).join('');
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        renderRestaurantView();
        renderDeliveryView();
        renderCustomerTracking();
        renderAdminView();
    }
}

// Add Item Modal
const addModal = document.getElementById('addModal');
document.getElementById('addMenuBtn').onclick = () => addModal.style.display = 'flex';
document.getElementById('closeAddModal').onclick = () => addModal.style.display = 'none';

document.getElementById('addItemForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newItem = {
        id: Date.now(),
        name: document.getElementById('itemName').value,
        restaurant: document.getElementById('itemRest').value,
        price: parseFloat(document.getElementById('itemPrice').value),
        category: document.getElementById('itemCat').value,
        image: document.getElementById('itemImg').value
    };
    
    menuItems.push(newItem);
    renderDishes(menuItems);
    renderRestaurantView();
    renderAdminView();
    addModal.style.display = 'none';
    e.target.reset();
});

// --- Delivery Personnel View ---
function renderDeliveryView() {
    const container = document.getElementById('deliveryOrdersList');
    const activeDeliveries = orders.filter(o => o.status === 'delivering' || o.status === 'delivered');

    if (activeDeliveries.length === 0) {
        container.innerHTML = '<p class="empty-msg">No active orders ready for pickup or delivery.</p>';
        return;
    }

    container.innerHTML = activeDeliveries.map(ord => `
        <div class="order-card">
            <div class="order-header">
                <span>${ord.id}</span>
                <span class="status-badge ${ord.status}">${ord.status}</span>
            </div>
            <p style="font-size:0.85rem;"><strong>Schedule:</strong> ${ord.scheduled}</p>
            <p style="font-size:0.85rem; margin-bottom:0.8rem;"><strong>Items:</strong> ${ord.items.map(i => `${i.qty}x${i.name}`).join(', ')}</p>
            
            ${ord.status === 'delivering' ? `
                <button class="btn btn-success btn-block" onclick="updateOrderStatus('${ord.id}', 'delivered')">Mark as Delivered</button>
            ` : '<span style="color:var(--success); font-weight:600; font-size:0.85rem;"><i class="fa-solid fa-check"></i> Complete</span>'}
        </div>
    `).join('');
}

// --- Admin Module Logic ---
function renderAdminView() {
    const totalRevenue = orders.reduce((acc, o) => acc + o.total, 0);
    document.getElementById('adminTotalRevenue').textContent = `₹${totalRevenue.toFixed(2)}`;
    document.getElementById('adminTotalOrders').textContent = orders.length;
    document.getElementById('adminTotalItems').textContent = menuItems.length;

    const ordersContainer = document.getElementById('adminOrdersList');
    if (orders.length === 0) {
        ordersContainer.innerHTML = '<p class="empty-msg">No active orders on system.</p>';
    } else {
        ordersContainer.innerHTML = orders.slice().reverse().map(ord => `
            <div class="order-card">
                <div class="order-header">
                    <span>${ord.id} - ${ord.userName}</span>
                    <span class="status-badge ${ord.status}">${ord.status}</span>
                </div>
                <div style="font-size:0.85rem;">
                    ${ord.items.map(i => `${i.qty}x${i.name}`).join(', ')}
                </div>
                <strong style="display:block; margin-top:0.4rem; font-size:0.9rem;">Total: ₹${ord.total.toFixed(2)}</strong>
            </div>
        `).join('');
    }

    const menuContainer = document.getElementById('adminMenuList');
    menuContainer.innerHTML = menuItems.map(item => `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem; border-bottom:1px solid #eee; padding-bottom:0.4rem;">
            <div>
                <strong>${item.name}</strong> - ₹${item.price.toFixed(2)}
                <div style="font-size:0.75rem; color:#777;">${item.restaurant}</div>
            </div>
            <button class="btn" style="padding:0.2rem 0.5rem; color:red; border: 1px solid red; background:none;" onclick="deleteMenuItem(${item.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
    `).join('');
}

function deleteMenuItem(id) {
    menuItems = menuItems.filter(item => item.id !== id);
    renderDishes(menuItems);
    renderRestaurantView();
    renderAdminView();
}

// System Initialization
checkAuthenticationState();
renderDishes(menuItems);