import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

function Home() {
  return (
    <div>
      <div className="header">
        <h1>Expense Tracker</h1>
        <div className="links">
          <Link className="tab" to="/login">Login</Link>
          <Link className="tab" to="/signup">Signup</Link>
          <Link className="tab" to="/statement">Statement</Link>
          <Link className="tab" to="/tracktransaction">Track Transactions</Link>
          <Link className="tab" to="/account">Account</Link>
        </div>
      </div>
      
      <div className="container">
        <div className="info-box">
          <h2>Save Money with our Expense Tracker</h2>
        <p>Our Expense Tracker helps you manage your finances effectively, allowing you to track your expenses and save money for your financial goals.</p>
      </div>

      <div className="about-us">
        <h2>About Us</h2>
        <p>We are dedicated to providing you with a user-friendly platform to manage your finances. Our team is committed to helping you achieve your financial goals through our innovative tools and services.</p>
      </div>

        <div className="image-container">
          <img src="/savemoney.jpg" alt="Description of the image" />
        </div>
      </div>
    </div>    
  )
}

export default Home;


