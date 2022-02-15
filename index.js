// We need import statements while using create-react-app
import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App/App'
import './styles/global.css'

// const incrementBtn = document.getElementById("increment-btn")
// const countDisplay = document.getElementById("count-display")

// let currentCount = 0
// incrementBtn.addEventListener("click", () => {
//     //alert("You clicked me")
//     currentCount++  //In order to increment the number
//     countDisplay.innerText = currentCount  //Making sure that the value of currentCount gets reflected to the webpage
// })

const reactContentRoot = document.getElementById("root")

//const myFirstElement = React.createElement("li", null, "item1")
//const myFirstElement = React.createElement("ul", null, [React.createElement("li", null, "item1"), React.createElement("li", null, "item2")])

// We can do this same thing using JSX and in a much more easier way
// It's an element (not component)
// const myJSXElement = (
//     <ul>
//         <li>item1</li>
//         <li>item2</li>
//     </ul>
// )

// Generally when we work with React, we are not just gonna work with elements
// but we are also going to work with components.

// It's a component (not an element)
// const App = () => {

//     return (
//         <ul>
//             <li>item1</li>
//             <li>item2</li>
//         </ul>
//     )

// }

//ReactDOM.render(myFirstElement, reactContentRoot)
//ReactDOM.render(myJSXElement, reactContentRoot)
ReactDOM.render(<App />, reactContentRoot)
// ReactDOM.render(App(), reactContentRoot)-> Another way of calling a component

//ReactDOM.render("Hello World", reactContentRoot)
// Hey ReactDOM! I want you to render the string "..." into reactContentRoot 