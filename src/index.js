import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter, Route , Routes} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";


// Step 2. Use <Route> components to define client-side routes in our app
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/about" element = {<About />} />     
        <Route path="/login" element={<Login />}/> 
        <Route exact path="/" element={<Home />} />     
      </Routes>
    </div>
  
    
  );
}

// Step 3. Use <BrowserRouter> component to wrap the entire application and provide React Router context features
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);