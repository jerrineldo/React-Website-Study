import React, { Component } from "react"; //required for rendering to the DOM
import "./App.css";

import Expenses from "./components/Expenses/Expenses";

// function App() {
// const para = document.createElement('p');
// para.textContent = 'This is also visible';
// document.getElementsById('root').append(para);
// This is cumbersome, when its a very big application

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses} />
    </div>
    //here above we just define what the desired end result is
  );
};

export default App;
