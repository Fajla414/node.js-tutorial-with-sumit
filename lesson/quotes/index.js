/*
 * Title: Basic Node app example
 *Description: Simple node application that print random quotes per second interval.
 *Author: Fajla Rabby
 *Date: 01/11/2024

*/

const fs = require("fs");

const quotes = {};

quotes.allQuotes = function allQuotes() {
  const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, `utf-8`);

  const arrayQuotes = fileContents.split(/\r?\n/);
  return arrayQuotes;
};

module.exports = quotes;
