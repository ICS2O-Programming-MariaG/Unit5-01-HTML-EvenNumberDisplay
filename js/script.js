// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: May 13, 2022
// This file contains the JS functions for index.html

"use strict"

function numbersSent() {
  //initializing the message variable to an empty string
  let numbers = "";
  let message = "";

  //getting the user values for the minimum and maximum numbers
  let minNumber = parseInt(document.getElementById("min-number").value);
  let maxNumber = parseInt(document.getElementById("max-number").value);

  //initializing the counter variable to the minNumber
  let counter = minNumber;
  
  //number % 2 == 0 gets makes sure remainder is 0, indicating that number is divisible by 2 (even number)
  while ((counter >= minNumber) && (counter <= maxNumber)) {
    counter = counter + 1;
    if ((counter <= maxNumber) && (counter % 2 == 0)) {
      numbers = numbers + counter + "<br>";
    }
  }
  document.getElementById("results").innerHTML = numbers;
}
