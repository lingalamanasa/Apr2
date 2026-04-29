/*-TASK2
import React from "react";
import UserCard from "./UserCard";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>User Details</h1>

      <UserCard 
        name="Manasa"
        email="manasa@gmail.com"
        role="Frontend Developer"
       />

      <UserCard 
        name="Ravi"
        email="ravi@gmail.com"
        role="Backend Developer"
      />

      <UserCard 
        name="Priya"
        email="priya@gmail.com"
        role="UI Designer"
       />

      <UserCard 
        name="Kiran"
        email="kiran@gmail.com"
        role="Full Stack Developer"
      />

      <UserCard 
        name="Sneha"
        email="sneha@gmail.com"
        role="Software Engineer"
       />

     </div>
   );
 };

 export default App;
 */
/*-TASK-3
import React, { useState } from "react";
import "./App.css";

const App = () => {

  // list data
  const usersData = [
    { id: 1, name: "Manasa", role: "Frontend Developer" },
    { id: 2, name: "Ravi", role: "Backend Developer" },
    { id: 3, name: "Priya", role: "UI Designer" },
    { id: 4, name: "Kiran", role: "Full Stack Developer" },
    { id: 5, name: "Sneha", role: "Software Engineer" }
  ];

  // state
  const [show, setShow] = useState(true);
  const [filter, setFilter] = useState("All");

  // filter logic
  const filteredUsers =
    filter === "All"
      ? usersData
      : usersData.filter((user) =>
          user.role.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div className="container">

      <h1>Employee Dashboard</h1>
      /*
      {/* Show/Hide Button */
      /*
      <button onClick={() => setShow(!show)}>
        {show ? "Hide List" : "Show List"}
      </button>

      {/* Filter Buttons */
      /*
      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Frontend")}>Frontend</button>
        <button onClick={() => setFilter("Backend")}>Backend</button>
      </div>

      {/* Conditional Rendering */
      /*
      {show ? (
        filteredUsers.length > 0 ? (
          <div className="list">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="card"
                style={{
                  backgroundColor:
                    user.role === "Frontend Developer"
                      ? "#d1e7ff"
                      : "#fff"
                }}
              >
                <h2>{user.name}</h2>
                <p>{user.role}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-data">No Data Available</p>
        )
      ) : (
        <p className="hidden-text">List is Hidden</p>
      )}
    </div>
  );
};

export default App;
*/
/*
import React, { useState } from "react";
import "./App.css";

function App() {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle Sign In
  const handleLogin = () => {
    if (email && password) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter email and password");
    }
  };

  // Handle Sign Out
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="card">
        {/* Conditional Rendering */
        /*
        {isLoggedIn ? (
          <>
        
            <h2>Welcome </h2>
            <p>You are successfully logged in</p>
            <button onClick={handleLogout}>Sign Out</button>
            
          </>
        ) : (
          <>
          
            <h2>Sign In</h2>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Sign In</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
*/

/*--TASK 5
import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    // Name
    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    // Email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone must be 10 digits";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    // Confirm Password
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Address
    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    // City
    if (!formData.city) {
      newErrors.city = "City is required";
    }

    // State
    if (!formData.state) {
      newErrors.state = "State is required";
    }

    // Country
    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    // Zip
    if (!formData.zip) {
      newErrors.zip = "Zip Code is required";
    } else if (formData.zip.length !== 6) {
      newErrors.zip = "Zip must be 6 digits";
    }

    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully");
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <input name="name" placeholder="Name" onChange={handleChange} />
        <p className="error">{errors.name}</p>

        <input name="email" placeholder="Email" onChange={handleChange} />
        <p className="error">{errors.email}</p>

        <input name="phone" placeholder="Phone Number" onChange={handleChange} />
        <p className="error">{errors.phone}</p>

        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <p className="error">{errors.password}</p>

        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
        <p className="error">{errors.confirmPassword}</p>

        <input name="address" placeholder="Address" onChange={handleChange} />
        <p className="error">{errors.address}</p>

        <input name="city" placeholder="City" onChange={handleChange} />
        <p className="error">{errors.city}</p>

        <input name="state" placeholder="State" onChange={handleChange} />
        <p className="error">{errors.state}</p>

        <input name="country" placeholder="Country" onChange={handleChange} />
        <p className="error">{errors.country}</p>

        <input name="zip" placeholder="Zip Code" onChange={handleChange} />
        <p className="error">{errors.zip}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
*/
/*--TASK 6

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // useEffect for timer
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }

    // cleanup function
    return () => clearInterval(interval);
  }, [isRunning]);

  // Start
  const handleStart = () => {
    setIsRunning(true);
  };

  // Stop
  const handleStop = () => {
    setIsRunning(false);
  };

  // Reset
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  // Format Time (HH:MM:SS)
  const formatTime = () => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Stopwatch</h1>

        <h2>{formatTime()}</h2>

        <div className="buttons">
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

*/
/*--TASK 7

import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const fileInputRef = useRef(null); // reference for file input
  const [image, setImage] = useState(
    "https://via.placeholder.com/150"
  ); // default image

  // Open file picker
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Profile Image</h2>

        /* Image Preview */
        /*
        <img src={image} alt="Profile" className="profile-img" />

        /* Hidden File Input */
        /*
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />

        /* Button */
        /*
        <button onClick={handleButtonClick}>
          Upload / Change Image
        </button>
      </div>
    </div>
  );
}

export default App;
*/
/*--TASK 8
import React from "react";
import "./App.css";

// Child 5 (Deepest Component)
const Child5 = ({ message }) => {
  return (
    <div className="box">
      <h3>Child 5</h3>
      <p>Message from Parent: {message}</p>
    </div>
  );
};

// Child 4
const Child4 = ({ message }) => {
  return (
    <div className="box">
      <h3>Child 4</h3>
      <Child5 message={message} />
    </div>
  );
};

// Child 3
const Child3 = ({ message }) => {
  return (
    <div className="box">
      <h3>Child 3</h3>
      <Child4 message={message} />
    </div>
  );
};

// Child 2
const Child2 = ({ message }) => {
  return (
    <div className="box">
      <h3>Child 2</h3>
      <Child3 message={message} />
    </div>
  );
};

// Child 1
const Child1 = ({ message }) => {
  return (
    <div className="box">
      <h3>Child 1</h3>
      <Child2 message={message} />
    </div>
  );
};

// Parent Component
function App() {
  const message = "Hello from Parent Component ";

  return (
    <div className="container">
      <h1>Props Drilling Example</h1>
      <Child1 message={message} />
    </div>
  );
}

export default App;
*/

/*--TASK 9
import React, { createContext, useState, useContext } from "react";
import "./App.css";

// Create Context
const AppContext = createContext();

// Fields Component
const Fields = () => {
  const { formData, handleChange } = useContext(AppContext);

  return (
    <div className="fields">
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />
    </div>
  );
};

// Button Component (Theme Toggle)
const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

// Form Component
const Form = () => {
  const { theme } = useContext(AppContext);

  return (
    <div className={`form ${theme}`}>
      <h2>Registration Form</h2>
      <Fields />
      <ThemeButton />
    </div>
  );
};

// Parent Component
function App() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: ""
  });

  // Theme State
  const [theme, setTheme] = useState("light");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AppContext.Provider
      value={{ formData, handleChange, theme, toggleTheme }}
    >
      <div className="container">
        <Form />
      </div>
    </AppContext.Provider>
  );
}

export default App;
*/
/*--TASK 10
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";

import Services from "./Components/Services";
import WebDevelopment from "./Components/Webdev";
import AppDevelopment from "./Components/Appdev";
import UIUX from "./Components/UIUX";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />

        {/* Nested Routing */
        /*
        <Route path="/services" element={<Services />}>
          <Route path="web" element={<WebDevelopment />} />
          <Route path="app" element={<AppDevelopment />} />
          <Route path="uiux" element={<UIUX />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/
/*
import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
*/
/*-TASK 11
import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./Components/UserList";
import UserDetails from "./Components/UserDetails";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>User App</h1>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
*/

/*-TASK 12
import React, { useState } from "react";
import "./App.css";

function App() {
  // State for input value
  const [message, setMessage] = useState("");

  // State for messages list
  const [messages, setMessages] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle send message
  const handleSend = () => {
    if (message.trim() === "") return;

    // Add new message to list
    setMessages([...messages, message]);

    // Clear input field
    setMessage("");
  };

  return (
    <div className="container">
      <div className="chat-box">
        <h2>Mini Chat App</h2>

        {/* Input + Button */
        /*
        <div className="input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleChange}
          />
          <button onClick={handleSend}>Send Message</button>
        </div>

        {/* Messages List */
        /*
        <div className="messages">
          {messages.map((msg, index) => (
            <p key={index} className="msg">
              {msg}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
*/
/*
import React from "react";
import useFetchUsers from "./Components/useFetchUsers";
import "./App.css";

function App() {
  const { users, loading, error } = useFetchUsers();

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <h1>User Details</h1>

      <div className="card-container">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <h3>{user.name}</h3>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>City:</strong> {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
*/
//TASK 14
/*
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // GET (Fetch Data)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 5))); // limit data
  }, []);

  //  CREATE (Add User)
  const handleAdd = () => {
    if (!name || !email) return;

    if (editId) {
      // UPDATE
      const updatedUsers = users.map((user) =>
        user.id === editId ? { ...user, name, email } : user
      );
      setUsers(updatedUsers);
      setEditId(null);
    } else {
      // CREATE
      const newUser = {
        id: Date.now(),
        name,
        email
      };
      setUsers([...users, newUser]);
    }

    setName("");
    setEmail("");
  };

  // EDIT
  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  // DELETE
  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div className="container">
      <h1>CRUD App</h1>

      {/* Form */
      /*
      <div className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleAdd}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {/* Table */
      /*
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
*/
// TASK 15
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import MenuDetails from "./pages/MenuDetails";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Nested */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<MenuDetails />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;



