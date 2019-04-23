"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 2

   Author:Evelyn Duarte
   Date: 04.18.19 
   
   Filename: dl_expenses.js
   
   Function List
   =============
   
   validateSummary()
      Validates the data entry in the summary field.
   
   calcClass(sumClass)
      Sums up all of the data values for elements of the sumClass class.
      
   calcExp()
      Calculates the travel expenses from all categories and dates.
      
   formatNumber(val, decimals)
      Formats the value, "val" to the number of decimals indicated 
      by "decimals", adding thousands separators.
      
   formatUSCurrency(val)
      Formats the value, "val", as U.S. currency.
      
*/
// When the page loads, there is an anonymous function that will control the submit button by defining that the submit button should equal to the validateSummary function when clicked.
window.addEventListener("load", function () {
      var changingCells = document.querySelectorAll('input[class="sum"]');
      for (var i = 0; i < changingCells.length; i++) {
            changingCells[i].onchange = calcExp;
      }
      document.getElementById("submitButton").onclick = validateSummary;
});
// The function validateSummary has a variable that will get the summary id. Then, if validate is missing, a message will pop up. If not, there will be nothing which is defined by an empty text string.
function validateSummary() {
      var validate = document.getElementById("summary");
      if (validate.validity.valueMissing) {
            validate.setCustomValidity("You must include a summary of the trip in your report.")
      } else {
            validate.setCustomValidity("");
      };
}

function calcClass(sumClass) {
      var sumFields = document.getElementsByClassName("sumClass");
      var sumTotal = 0;
      for (var i = 0; i < sumFields.length; i++) {
            var itemValue = parseFloat(sumFields);
            if (itemValue === isNaN()) {

            } else {

            }
      }
      return sumTotal;
};

function calcExp() {
      var expTable = document.querySelectorAll(tr);
      for (var i = 0; i < expTable.length; i++) {
            calcClass(dateIndex) = subtotalIndex;
      }
      var transTotal = calcClass(trans);
      var lodgeTotal = calcClass(lodge);
      var mealTotal = calcClass(meal);
      var otherTotal = calcClass(other);
}



function formatNumber(val, decimals) {
      return val.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
      });
}

function formatUSCurrency(val) {
      return val.toLocaleString('en-US', {
            style: "currency",
            currency: "USD"
      });
}