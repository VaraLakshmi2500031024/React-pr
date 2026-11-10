
import React, { useState } from "react";
import "./App.css";
const initialFoods = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 180,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600",
    description: "Delicious spicy chicken biryani"
  },
  {
    id: 2,
    name: "Veg Pizza",
    price: 220,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    description: "Fresh vegetable cheesy pizza"
  },
  {
    id: 3,
    name: "Cheese Burger",
    price: 120,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    description: "Juicy burger with melted cheese"
  },
  {
    id: 4,
    name: "French Fries",
    price: 90,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600",
    description: "Golden crispy french fries"
  },
  {
    id: 5,
    name: "Sandwich",
    price: 100,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600",
    description: "Fresh and tasty sandwich"
  },
  {
    id: 6,
    name: "Ice Cream",
    price: 80,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600",
    description: "Creamy delicious ice cream"
  },
  {
    id: 7,
    name: "Italian Pasta",
    price: 160,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
    description: "Creamy Italian pasta"
  },
  {
    id: 8,
    name: "Masala Dosa",
    price: 70,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600",
    description: "Traditional crispy masala dosa"
  },
  {
    id: 9,
    name: "Chocolate Cake",
    price: 140,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    description: "Rich chocolate layer cake"
  },
  {
    id: 10,
    name: "Chicken Wings",
    price: 190,
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600",
    description: "Crispy spicy chicken wings"
  },
  {
    id: 11,
    name: "Paneer Tikka",
    price: 170,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600",
    description: "Smoky grilled paneer tikka"
  },
  {
    id: 12,
    name: "Veg Noodles",

    price: 130,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600",
    description: "Delicious vegetable noodles"
  },
  {
    id: 13,
    name: "Chocolate Milkshake",
    price: 110,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600",
    description: "Thick chocolate milkshake"
  },
  {
    id: 14,
    name: "Fresh Fruit Salad",
    price: 100,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
    description: "Fresh seasonal fruits"
  },
  {
    id: 15,
    name: "Chicken Pizza",
    price: 280,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600",
    description: "Loaded chicken and cheese pizza"
  },
  {
    id: 16,
    name: "Donuts",
    price: 90,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600",
    description: "Soft sweet glazed donuts"
  },
  {
    id: 17,
    name: "Grilled Sandwich",
    price: 120,
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600",
    description: "Grilled sandwich with vegetables"
  },
  {
    id: 18,
    name: "Chicken Fried Rice",
    price: 170,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
    description: "Tasty chicken fried rice"
  },
  {
    id: 19,
    name: "Pancakes",
    price: 150,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",
    description: "Fluffy pancakes with syrup"
  },
  {
    id: 20,
    name: "Cold Coffee",
    price: 100,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
    description: "Chilled creamy cold coffee"
  }
];
function readStorage(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function App() {

  const [page, setPage] = useState("auth");
  const [role, setRole] = useState("user");
  const [tab, setTab] = useState("login");

  const [currentUser, setCurrentUser] = useState(null);

  const [users, setUsers] = useState(() =>
    readStorage("bitebox_users", [])
  );

  const [foods, setFoods] = useState(() =>
    readStorage("bitebox_foods_v2", initialFoods)
  );

  const [orders, setOrders] = useState(() =>
    readStorage("bitebox_orders", [])
  );

  const [cart, setCart] = useState([]);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [activeSection, setActiveSection] = useState("dashboard");
  const [message, setMessage] = useState("");

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [foodForm, setFoodForm] = useState({
    name: "",
    category: "",
    price: "",
    image: ""
  });

  const saveUsers = (data) => {
    setUsers(data);
    localStorage.setItem("bitebox_users", JSON.stringify(data));
  };

  const saveFoods = (data) => {
    setFoods(data);
    localStorage.setItem("bitebox_foods_v2", JSON.stringify(data));
  };

  const saveOrders = (data) => {
    setOrders(data);
    localStorage.setItem("bitebox_orders", JSON.stringify(data));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");

    if (register.password.length < 6) {
      setMessage("Password must contain at least 6 characters.");
      return;
    }

    if (register.password !== register.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    const email = register.email.trim().toLowerCase();

    const exists = users.some((u) => u.email === email);

    if (exists) {
      setMessage("Email already registered!");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: register.name.trim(),
      email: email,
      password: register.password,
      role: role
    };

    saveUsers([...users, newUser]);

    setRegister({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    setMessage("Registration successful! Please login.");
    setTab("login");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");

    const foundUser = users.find(
      (u) =>
        u.email === login.email.trim().toLowerCase() &&
        u.password === login.password &&
        u.role === role
    );

    if (!foundUser) {
      setMessage("Invalid email, password or account type.");
      return;
    }

    setCurrentUser(foundUser);

    setLogin({
      email: "",
      password: ""
    });

    setActiveSection("dashboard");

    setPage(role === "admin" ? "admin" : "user");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCart([]);
    setPage("auth");
    setTab("login");
    setMessage("");
  };

  const addToCart = (food) => {
    setCart((oldCart) => {
      const existing = oldCart.find(
        (item) => item.id === food.id
      );

      if (existing) {
        return oldCart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...oldCart, { ...food, quantity: 1 }];
    });
  };

  const changeQuantity = (id, amount) => {
    setCart((oldCart) =>
      oldCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const newOrder = {
      id: Date.now(),
      customer: currentUser.name,
      email: currentUser.email,
      items: cart,
      total: total,
      status: "Pending",
      date: new Date().toLocaleString()
    };

    saveOrders([...orders, newOrder]);

    setCart([]);

    alert("Your order has been placed successfully!");

    setActiveSection("myorders");
  };

  const handleAddFood = (e) => {
    e.preventDefault();

    if (
      !foodForm.name.trim() ||
      !foodForm.category.trim() ||
      !foodForm.image.trim() ||
      Number(foodForm.price) <= 0
    ) {
      alert("Please enter valid food details.");
      return;
    }

    const newFood = {
      id: Date.now(),
      name: foodForm.name.trim(),
      category: foodForm.category.trim(),
      price: Number(foodForm.price),
      image: foodForm.image.trim(),
      description: "Fresh and delicious food"
    };

    saveFoods([...foods, newFood]);

    setFoodForm({
      name: "",
      category: "",
      price: "",
      image: ""
    });

    alert("Food added successfully!");
  };

  // ================= DELETE FOOD =================

  const deleteFood = (id) => {
    if (window.confirm("Do you want to delete this food?")) {
      saveFoods(foods.filter((food) => food.id !== id));
    }
  };

  // ================= UPDATE ORDER =================

  const updateOrder = (id, status) => {
    const updatedOrders = orders.map((order) =>
      order.id === id
        ? { ...order, status }
        : order
    );

    saveOrders(updatedOrders);
  };

  // ================= DELETE USER =================

  const deleteUser = (id) => {
    if (window.confirm("Do you want to delete this user?")) {
      saveUsers(users.filter((user) => user.id !== id));
    }
  };

  // ================= SEARCH AND CATEGORY =================

  const categories = [
    "All",
    ...new Set(foods.map((food) => food.category))
  ];

  const filteredFoods = foods.filter((food) => {
    const matchesSearch =
      `${food.name} ${food.category}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" ||
      food.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  // ================= LOGIN / REGISTER PAGE =================

  if (page === "auth") {
    return (
      <div className="auth-page">

        <div className="auth-card">

          <h1 className="brand">Welcome to BiteBox</h1>

          <p className="tagline">
            Please log in or register to access the platform
          </p>

          <div className="role-selector">

            <button
              className={role === "user" ? "role-active" : ""}
              onClick={() => {
                setRole("user");
                setMessage("");
              }}
            >
              User / Customer
            </button>

            <button
              className={role === "admin" ? "role-active" : ""}
              onClick={() => {
                setRole("admin");
                setMessage("");
              }}
            >
              Admin
            </button>

          </div>

          <div className="auth-tabs">

            <button
              className={tab === "login" ? "tab-active" : ""}
              onClick={() => {
                setTab("login");
                setMessage("");
              }}
            >
              Login
            </button>

            <button
              className={tab === "register" ? "tab-active" : ""}
              onClick={() => {
                setTab("register");
                setMessage("");
              }}
            >
              Register
            </button>

          </div>

          {tab === "login" ? (

            <form onSubmit={handleLogin}>

              <input
                type="email"
                placeholder="Email Address"
                value={login.email}
                onChange={(e) =>
                  setLogin({
                    ...login,
                    email: e.target.value
                  })
                }
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={login.password}
                onChange={(e) =>
                  setLogin({
                    ...login,
                    password: e.target.value
                  })
                }
                required
              />

              <button className="submit-btn" type="submit">
                Enter System
              </button>

            </form>

          ) : (

            <form onSubmit={handleRegister}>

              <input
                type="text"
                placeholder="Full Name"
                value={register.name}
                onChange={(e) =>
                  setRegister({
                    ...register,
                    name: e.target.value
                  })
                }
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={register.email}
                onChange={(e) =>
                  setRegister({
                    ...register,
                    email: e.target.value
                  })
                }
                required
              />

              <input
                type="password"
                placeholder="Create Password"
                value={register.password}
                onChange={(e) =>
                  setRegister({
                    ...register,
                    password: e.target.value
                  })
                }
                required
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={register.confirmPassword}
                onChange={(e) =>
                  setRegister({
                    ...register,
                    confirmPassword: e.target.value
                  })
                }
                required
              />

              <button className="submit-btn" type="submit">
                Register as {role === "admin" ? "Admin" : "User"}
              </button>

            </form>

          )}

          {message && (
            <p className="auth-message">{message}</p>
          )}

          <p className="auth-footer">
            {tab === "login"
              ? "New to BiteBox? Select Register to create an account."
              : "Already have an account? Select Login."}
          </p>

        </div>
      </div>
    );
  }

  // ================= USER MODULE =================

  if (page === "user" && currentUser?.role === "user") {

    const myOrders = orders.filter(
      (order) => order.email === currentUser.email
    );

    return (
      <div className="app-layout">

        <header className="topbar">

          <h1>BiteBox</h1>

          <div className="topbar-right">

            <span>Welcome, {currentUser.name}</span>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </header>

        <div className="user-layout">

          <aside className="sidebar">

            <h3>User Panel</h3>

            <button
              className={activeSection === "dashboard" ? "nav-active" : ""}
              onClick={() => setActiveSection("dashboard")}
            >
              Dashboard
            </button>

            <button
              className={activeSection === "menu" ? "nav-active" : ""}
              onClick={() => setActiveSection("menu")}
            >
              Food Menu
            </button>

            <button
              className={activeSection === "cart" ? "nav-active" : ""}
              onClick={() => setActiveSection("cart")}
            >
              My Cart ({cartCount})
            </button>

            <button
              className={activeSection === "myorders" ? "nav-active" : ""}
              onClick={() => setActiveSection("myorders")}
            >
              My Orders
            </button>

          </aside>

          <main className="main-content">

            {/* USER DASHBOARD */}

            {activeSection === "dashboard" && (

              <>

                <div className="hero">

                  <h2>Delicious Food, Delivered Fresh!</h2>

                  <p>
                    Order your favourite food with BiteBox.
                  </p>

                  <button
                    onClick={() => setActiveSection("menu")}
                  >
                    Explore Food
                  </button>

                </div>

                <h2>Popular Food</h2>

                <div className="food-grid">

                  {foods.slice(0, 8).map((food) => (

                    <FoodCard
                      key={food.id}
                      food={food}
                      addToCart={addToCart}
                    />

                  ))}

                </div>

                <div className="info-cards">

                  <div>
                    <h3>{foods.length}</h3>
                    <p>Food Items</p>
                  </div>

                  <div>
                    <h3>{myOrders.length}</h3>
                    <p>My Orders</p>
                  </div>

                  <div>
                    <h3>{cartCount}</h3>
                    <p>Cart Items</p>
                  </div>

                </div>

              </>

            )}

            {/* FOOD MENU */}

            {activeSection === "menu" && (

              <>

                <h2>Explore Our Delicious Menu</h2>

                <input
                  className="search-input"
                  placeholder="Search your favourite food..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <div className="category-buttons">

                  {categories.map((category) => (

                    <button
                      key={category}
                      className={
                        categoryFilter === category
                          ? "category-active"
                          : ""
                      }
                      onClick={() => setCategoryFilter(category)}
                    >
                      {category}
                    </button>

                  ))}

                </div>

                <div className="food-grid">

                  {filteredFoods.map((food) => (

                    <FoodCard
                      key={food.id}
                      food={food}
                      addToCart={addToCart}
                    />

                  ))}

                </div>

                {filteredFoods.length === 0 && (
                  <p>No food found.</p>
                )}

              </>

            )}

            {/* SHOPPING CART */}

            {activeSection === "cart" && (

              <>

                <h2>My Shopping Cart</h2>

                {cart.length === 0 ? (

                  <div className="panel">
                    <h3>Your cart is empty!</h3>
                    <p>Please add some delicious food.</p>

                    <button
                      className="submit-btn"
                      onClick={() => setActiveSection("menu")}
                    >
                      Explore Food
                    </button>
                  </div>

                ) : (

                  <div className="panel">

                    {cart.map((item) => (

                      <div className="cart-row" key={item.id}>

                        <div className="cart-product">

                          <img
                            src={item.image}
                            alt={item.name}
                          />

                          <span>{item.name}</span>

                        </div>

                        <span>₹{item.price}</span>

                        <div className="quantity">

                          <button
                            onClick={() => changeQuantity(item.id, -1)}
                          >
                            -
                          </button>

                          {item.quantity}

                          <button
                            onClick={() => changeQuantity(item.id, 1)}
                          >
                            +
                          </button>

                        </div>

                        <strong>
                          ₹{item.price * item.quantity}
                        </strong>

                      </div>

                    ))}

                    <h2 className="total">
                      Total: ₹{total}
                    </h2>

                    <button
                      className="submit-btn small-btn"
                      onClick={placeOrder}
                    >
                      Place Order
                    </button>

                  </div>

                )}

              </>

            )}

            {/* MY ORDERS */}

            {activeSection === "myorders" && (

              <>

                <h2>My Orders</h2>

                {myOrders.length === 0 ? (

                  <div className="panel">
                    <p>You have not placed any orders yet.</p>
                  </div>

                ) : (

                  myOrders.map((order) => (

                    <div className="panel order-card" key={order.id}>

                      <h3>Order #{order.id}</h3>

                      {order.items.map((item) => (

                        <div className="order-product" key={item.id}>

                          <img
                            src={item.image}
                            alt={item.name}
                          />

                          <span>
                            {item.name} x {item.quantity}
                          </span>

                        </div>

                      ))}

                      <p>Total: ₹{order.total}</p>

                      <p>
                        Status: <strong>{order.status}</strong>
                      </p>

                      <p>{order.date}</p>

                    </div>

                  ))

                )}

              </>

            )}

          </main>

        </div>

      </div>
    );
  }

  // ================= ADMIN MODULE =================

  if (page === "admin" && currentUser?.role === "admin") {

    const customerUsers = users.filter(
      (u) => u.role === "user"
    );

    return (

      <div className="app-layout">

        <header className="topbar">

          <h1>BiteBox Admin</h1>

          <div className="topbar-right">

            <span>Admin: {currentUser.name}</span>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </header>

        <div className="user-layout">

          <aside className="sidebar">

            <h3>Admin Panel</h3>

            <button
              className={activeSection === "dashboard" ? "nav-active" : ""}
              onClick={() => setActiveSection("dashboard")}
            >
              Dashboard
            </button>

            <button
              className={activeSection === "addfood" ? "nav-active" : ""}
              onClick={() => setActiveSection("addfood")}
            >
              Add Food
            </button>

            <button
              className={activeSection === "managefood" ? "nav-active" : ""}
              onClick={() => setActiveSection("managefood")}
            >
              Manage Food
            </button>

            <button
              className={activeSection === "orders" ? "nav-active" : ""}
              onClick={() => setActiveSection("orders")}
            >
              Manage Orders
            </button>

            <button
              className={activeSection === "users" ? "nav-active" : ""}
              onClick={() => setActiveSection("users")}
            >
              Manage Users
            </button>

          </aside>

          <main className="main-content">

            {/* ADMIN DASHBOARD */}

            {activeSection === "dashboard" && (

              <>

                <h2>Admin Dashboard</h2>

                <p>Welcome to BiteBox management system.</p>

                <div className="stats-grid">

                  <div className="stat-box">
                    <h2>{customerUsers.length}</h2>
                    <p>Total Customers</p>
                  </div>

                  <div className="stat-box">
                    <h2>{foods.length}</h2>
                    <p>Total Food Items</p>
                  </div>

                  <div className="stat-box">
                    <h2>{orders.length}</h2>
                    <p>Total Orders</p>
                  </div>

                  <div className="stat-box">
                    <h2>
                      ₹{orders.reduce(
                        (sum, order) => sum + order.total,
                        0
                      )}
                    </h2>
                    <p>Total Order Value</p>
                  </div>

                </div>

                <h2>Recent Orders</h2>

                {orders.slice(-5).reverse().map((order) => (

                  <div className="panel order-card" key={order.id}>

                    <strong>Order #{order.id}</strong>

                    <p>
                      {order.customer} - ₹{order.total}
                    </p>

                    <p>Status: {order.status}</p>

                  </div>

                ))}

                {orders.length === 0 && (
                  <p>No orders available.</p>
                )}

              </>

            )}

            {/* ADD FOOD */}

            {activeSection === "addfood" && (

              <>

                <h2>Add New Food Item</h2>

                <form
                  className="panel admin-form"
                  onSubmit={handleAddFood}
                >

                  <label>Food Name</label>

                  <input
                    value={foodForm.name}
                    onChange={(e) =>
                      setFoodForm({
                        ...foodForm,
                        name: e.target.value
                      })
                    }
                    placeholder="Enter food name"
                    required
                  />

                  <label>Category</label>

                  <input
                    value={foodForm.category}
                    onChange={(e) =>
                      setFoodForm({
                        ...foodForm,
                        category: e.target.value
                      })
                    }
                    placeholder="Enter food category"
                    required
                  />

                  <label>Price (₹)</label>

                  <input
                    type="number"
                    min="1"
                    value={foodForm.price}
                    onChange={(e) =>
                      setFoodForm({
                        ...foodForm,
                        price: e.target.value
                      })
                    }
                    placeholder="Enter food price"
                    required
                  />

                  <label>Food Image URL</label>

                  <input
                    type="url"
                    value={foodForm.image}
                    onChange={(e) =>
                      setFoodForm({
                        ...foodForm,
                        image: e.target.value
                      })
                    }
                    placeholder="Paste food image URL"
                    required
                  />

                  {foodForm.image && (

                    <img
                      src={foodForm.image}
                      alt="Food preview"
                      className="image-preview"
                    />

                  )}

                  <button className="submit-btn" type="submit">
                    Add Food
                  </button>

                </form>

              </>

            )}

            {/* MANAGE FOOD */}

            {activeSection === "managefood" && (

              <>

                <h2>Manage Food Items</h2>

                <div className="table-wrap">

                  <table>

                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Food Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>

                      {foods.map((food) => (

                        <tr key={food.id}>

                          <td>
                            <img
                              src={food.image}
                              alt={food.name}
                              className="admin-food-image"
                            />
                          </td>

                          <td>{food.name}</td>

                          <td>{food.category}</td>

                          <td>₹{food.price}</td>

                          <td>
                            <button
                              className="delete-btn"
                              onClick={() => deleteFood(food.id)}
                            >
                              Delete
                            </button>
                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              </>

            )}

            {/* MANAGE ORDERS */}

            {activeSection === "orders" && (

              <>

                <h2>Manage Customer Orders</h2>

                {orders.length === 0 ? (

                  <p>No orders received yet.</p>

                ) : (

                  orders.map((order) => (

                    <div className="panel order-card" key={order.id}>

                      <h3>Order #{order.id}</h3>

                      <p>Customer: {order.customer}</p>

                      <p>Email: {order.email}</p>

                      {order.items.map((item) => (

                        <div className="order-product" key={item.id}>

                          <img
                            src={item.image}
                            alt={item.name}
                          />

                          <span>
                            {item.name} x {item.quantity}
                          </span>

                        </div>

                      ))}

                      <p>Total: ₹{order.total}</p>

                      <label>Update Order Status:</label>

                      <select
                        value={order.status}
                        onChange={(e) =>
                          updateOrder(order.id, e.target.value)
                        }
                      >
                        <option>Pending</option>
                        <option>Preparing</option>
                        <option>Out for Delivery</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>
                      </select>

                    </div>

                  ))

                )}

              </>

            )}

            {/* MANAGE USERS */}

            {activeSection === "users" && (

              <>

                <h2>Manage Customers</h2>

                <div className="table-wrap">

                  <table>

                    <thead>

                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>

                    </thead>

                    <tbody>

                      {customerUsers.map((user) => (

                        <tr key={user.id}>

                          <td>{user.name}</td>

                          <td>{user.email}</td>

                          <td>

                            <button
                              className="delete-btn"
                              onClick={() => deleteUser(user.id)}
                            >
                              Delete
                            </button>

                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              </>

            )}

          </main>

        </div>

      </div>

    );

  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Session expired</h2>

        <button className="submit-btn" onClick={handleLogout}>
          Back to Login
        </button>
      </div>
    </div>
  );
}

// ================= FOOD CARD COMPONENT =================

function FoodCard({ food, addToCart }) {

  return (

    <div className="food-card">

      <div className="food-image-container">

        <img
          src={food.image}
          alt={food.name}
          className="food-image"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/600x400?text=Food+Image";
          }}
        />

        <span className="food-category">
          {food.category}
        </span>

      </div>

      <div className="food-details">

        <h3>{food.name}</h3>

        <p className="food-description">
          {food.description}
        </p>

        <div className="food-bottom">

          <h3 className="food-price">
            ₹{food.price}
          </h3>

          <button onClick={() => addToCart(food)}>
            + Add
          </button>

        </div>

      </div>

    </div>

  );
}

export default App;
