import React from 'react';
import './Track-Transaction.css';

const TrackTransaction = () => {
  return (
    <div className="container">
      <header>
        <h1>Track Transaction</h1>
      </header>
      <main>
        <section className="transaction-details">
          <h2>Transaction Details</h2>
          <p>Transaction ID: <span className="transaction-id">123456</span></p>
          <p>Amount: <span className="transaction-amount">$100.00</span></p>
          <p>Status: <span className="transaction-status">Completed</span></p>
        </section>
        <section className="transaction-history">
          <h2>Transaction History</h2>
          <ul>
            <li>Transaction initiated - January 10, 2024</li>
            <li>Transaction completed - January 12, 2024</li>
            <li>Payment received - January 12, 2024</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TrackTransaction;
