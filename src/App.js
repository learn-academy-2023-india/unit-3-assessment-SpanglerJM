import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["♥️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) this is just the name of the function, it is 'drawCard', followed by an arrow function and the curly brace that the code block is encapsulated in.
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) this is our new function (codeception) that is called draw, we have an array named rank and its values. we need to interpoloate it from the array toa string. Math.floor and Math.random is used to round down and produce a whole number. The Math.random also takes the rank array and .lenght methd and tells the code to use all the elements. then suit is called the same way to give a random value from the suit array on line 6.
    if (hand.indexOf(draw) === -1) {
      // 3) an if statement sets the condition saying, if the hands index that is givenf rom the draw function is equal to -1, to do something. .indexOf(draw) checks if the drawn card is already in the hand array.
      setHand([...hand, draw])
      // 4) this uses the setHand function to update the state in a commponent. Three dots is a spread operator to create a copy of the hand array and spreads them into a new one. draw adds the newlsy drawn card to the end of the array.
    } else if (hand.length !== 52) {
      // 5) this is just a continuation of our if else statement, its asking if the length of the array 'hand' is bangOperator !==, not equal to 52.
      drawCard()
      // 6) this one handles logic for drawing a card and updating the component.
    } else {
      // 7) this is a blank space left open for iputing another condition in case the ones above are not met. or if you mean the one below, it is an alert prompt to display to the user when youve ran out of cards
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^-^

  const shuffle = () => {
    // look to see if we have cards in our hand
    if (hand.length > 0) {
      // make a copy of the hand array so we dont modify the state 
      const shuffledHand = [...hand]

      // shuffle the cards using what ChatGPT calls 'Fisher-Yates' algorithim. i stole it and read up on it and it is specifically used for shuffle functions and is deemed unbiased.

      for (let i = shuffledHand.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [shuffledHand[i], shuffledHand[j]] = [shuffledHand[j], shuffledHand[i]]
      }
      // set thestate with the new shuffle of cards
      setHand(shuffledHand)
    } else {
      // and a prompt for when all cards have been drawn
      alert("Aint got none, Draw some cards fool!")
    }
  }

  const returnDaCardsNShuffle = () => {
    // Logic for cleaning the board off, nothing more
    setHand([])
  }

  return (
    <body>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={returnDaCardsNShuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </body>
  )
  }
// this above is the name of the game, with 2 buttons, one to draw and one that clears the board and shuffles
export default App
