#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1, //base
  PKR: 278,
  AED: 3.67,
  EURO: 0.93,
};

const answer = await inquirer.prompt([
  {
    message: "Select from currency : ",
    type: "list",
    choices: ["USD", "PKR", "AED", "EURO"],
    name: "From",
  },
  {
    message: "Select TO currency : ",
    type: "list",
    choices: ["USD", "PKR", "AED", "EURO"],
    name: "TO",
  },
  {
    message: "Enter your amount : ",
    type: "number",
    name: "amount",
  },
]);

let fromAmount = currency[answer.From];
let toAmount = currency[answer.TO];
let amount = answer.amount;

let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);

//console.log(fromAmount, toAmount, answer.amount);
