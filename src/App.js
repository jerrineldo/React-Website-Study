import React, { Component } from "react"; //required for rendering to the DOM
import "./App.css";
//import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ],
//     otherstate: 'some other value'
//   }

//   switchNameHandler = (newName) => {
//     //console.log('Was clicked');
//     //DONT DO THIS : this.state.person[0].name = 'Maxmilian';
//     this.setState({
//       persons: [
//         { name: newName, age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//     })
//   }

//   nameChangedHandler = (event) => {
//     this.setState( {
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: event.target.value, age: 29 },
//         { name: 'Stephanie', age: 26 }
//       ]
//     } )
//   }
//   render() {

//     const style = {
//       backgroundColor : 'white',
//       font:'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };

//     return (
//       <div className="App">
//         <h1>Jerrin here</h1>
//         <p>This is really working </p>
//         <button
//           style={style}
//           onClick = {this.switchNameHandler.bind(this,'Maximillian')}>Switch Name</button>
//         <Person
//           name = {this.state.persons[0].name}
//           age = {this.state.persons[0].age}/>
//         <Person
//           name = {this.state.persons[1].name}
//           age = {this.state.persons[1].age}
//           click = {this.switchNameHandler.bind(this,'Max!')}
//           changed = {this.nameChangedHandler }>My hobbies: Racing
//         </Person>
//         <Person
//           name = {this.state.persons[2].name}
//           age = {this.state.persons[2].age} />
//       </div>
//     );
//     // Writing code in React and not in JSx Like above
//     // return React.createElement('div',null,'h1','Hi I am Jerrin');
//     // Below code is the compiled version of the JSx Code above written in JSx
//     //return React.createElement('div', {className:'App'} ,React.createElement('h1',null,'Does this work now?'));
//   }
// }

// export default App;

import Expenses from "./components/Expenses";

function App() {
  // const para = document.createElement('p');
  // para.textContent = 'This is also visible';
  // document.getElementsById('root').append(para);
  //This is cumbersome, when its a very big application

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
}

export default App;
