import React from 'react'
import './App.css'
import illo from './illo.svg'
import p1 from './p1 (1).svg'
import p2 from './p2 (1).svg'
import chef from './chef.svg'

/* TO DO:
    fix styling: how to pass styles down?
    fix grid of image on title screen
    fix spacing it is very ugly oops
    do interactive parts
    implement interactivity
*/
// images

// functions
function Heading (props) {
  return (
    <div>
      <h3>{props.head1}</h3>
      <h1>{props.head2}</h1>
    </div>
  )
}

function Heading2 (props) {
  return (
    <div>
      <h1>{props.head1}</h1>
      <h3>{props.head2}</h3>
    </div>
  )
}

// frames
function Title () {
  return (
    <div className = "light frame">
        <Heading head1="WELCOME TO" head2="Buffer Buffet" ></Heading>
        <div className = "flex-container">
          <div>
            <p>Did you say “table for one”? Thanks for visiting Buffer Buffet! Today, we’ll be serving you a full-course meal on the concept of buffer overflow, courtesy of your favorite code chefs from Teach LA.</p>
          </div>
          <div>
            <img text-align="center" src={illo} alt="Couldn't Find Image" />
          </div>
        </div>
      </div>
  )
}

function Introduction () {
  return (
    <div className = "dark frame">
        <Heading head1="INTRODUCTION" head2="What is Buffer Overflow?"></Heading>
        <p>To satisfy your hunger for knowledge, we’ll start with a quick intro
        of what buffer overflow is.</p>
    <br/>

    <h4 className = "lightBlue"> Ok, so what’s a buffer?</h4>
    <p>
      <span style = { { textDecorationLine: 'underline' } }>Buffers</span> are areas of memory set aside to hold data temporaily as it is
      being transferred from one region to another. It can hold anything
      from character strings to arrays of integers. As is in memory systems
      or programs, the sizes of these buffers are typically well-defined.
    </p>
    <p>
      For example, a program could contain a 8-byte buffer for a user to
      enter their password.
    </p>

    <div> <img text-align="center" src={p1} alt="Couldn't Find Image" /> </div>

    <h4 className = "lightBlue">How do buffers overflow?</h4>
    <p>
    <span style = { { textDecorationLine: 'underline' } }>Buffer overflow</span> happens when a program attempts to input more data in
      a buffer than it can hold. As a result, the program ends up going past
      the buffer&#39;s boundary and overwrites adjacent memory locations.
    </p>

    <br/>

    <img src={p2} alt="Couldn't Find Image"/>

    <br/>

    <p>
      Using the example above, the buffer would overflow if a user attempts
      to enter in data that exceeds the 8 bytes alloted.
    </p>

    </div>
  )
}

function Transition () {
  return (
    <div className = "light frame">
        <Heading head1="AN ANALOGY" head2="Buffer Overflow in the Kitchen" ></Heading>
        <p>To better illustrate the concept of buffer overflow, let’s cook up an analogy. Say you’re eating at a restaurant - what usually happens is that a waiter comes over, takes your order, writes it down on a notepad, then hands over these orders to the chef.</p>
        <img text-align="center" src={chef} alt="Couldn't Find Image" />
      </div>
  )
}

// INTERACTIVE STUFF

function MenuItem (props) {
  return (
    <div className = "MenuItem">
      <label className="container"> {props.item}
      <input type="checkbox"/>
      <span className="checkmark"></span>
      </label>
    </div>
  )
}

function Menu () {
  return (
    <div className = "Menu">
      <h3>MENU</h3>
      <MenuItem item = "Chicken Wings"></MenuItem>
      <MenuItem item = "Apple Pie"></MenuItem>
      <MenuItem item = "Pancakes"></MenuItem>
      <MenuItem item = "Grilled Cheese"></MenuItem>
      <MenuItem item = "Caesar Salad"></MenuItem>
      <button>Submit</button>
    </div>
  )
}

function OrderItem (props) {
  return (
    <div className = "OrderItem">
      <p>{props.item1}</p>
      <p>{props.item2}</p>
    </div>
  )
}

function Orders () {
  return (
    <div className = "Orders">
      <h3>ORDERS</h3>
        <OrderItem item1 = "Chicken Wings" item2 = "Chicken Wings"></OrderItem>
        <OrderItem item1 = "Apple Pie" item2 = "Chicken Wings"></OrderItem>
        <OrderItem item1 = "Pancakes" item2 = "Chicken Wings"></OrderItem>
        <OrderItem item1 = "Grilled Cheese" item2 = "Chicken Wings"></OrderItem>
        <OrderItem item1 = "Caesar Salad" item2 = "Chicken Wings"></OrderItem>
    </div>
  )
}

function Interactive (props) {
  return (
    <div className = "dark frame">
        <Heading2 head1={props.head1} head2={props.head2} ></Heading2>
        <Menu></Menu>
        <Orders></Orders>
    </div>
  )
}

// END OF INTERACTIVE STUFF

function SmallTransition (props) {
  return (
    <div className = "light frame">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
  )
}

function App () {
  return (
    <div className="App">
      <Title/>
      <Introduction/>
      <Transition/>
      <Interactive head1 = 'Make some orders' head2 = "PICK 2 THINGS OFF THE MENU"></Interactive>
      <SmallTransition heading = "Now let's cause a buffer overflow..." text = ""></SmallTransition>
      <Interactive head1 = 'Make a long order' head2 = "PICK 3 OR MORE THINGS OFF THE MENU"></Interactive>
      <SmallTransition heading = "That's Buffer Overflow!" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu. Lacinia quis vel eros donec ac odio tempor orci dapibus. Now try it with code!"></SmallTransition>
  {/* <body>

  </div>
    <div className = "light frame">
      <h3 className = "darkGreen">AN ANALOGY</h3>
      <h1 className = "darkGreen">Buffer Overflow in the Kitchen</h1>

    </div>
  </body> */}
  </div>
  )
}

export default App
