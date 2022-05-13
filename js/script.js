// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: May 13, 2022
// This file contains the JS functions for index.html

"use strict"

function numbersSent() {
  //initializing the counter to zero and the message variable to an empty string
  let counter = 0;
  let message = "";

  //getting the user values for the minimum and maximum numbers
  let minNumber = parseInt(document.getElementById("min-number").value);
  let maxNumber = parseInt(document.getElementById("max-number").value);

  //using a while loop to display all the even numbers between the minimum and maximum numbers
  while ((counter >= minNumber) && (counter <= maxNumber)) {
    //number % 2 == 0
  }
}
