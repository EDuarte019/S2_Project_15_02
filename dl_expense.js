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
      var changingCells = document.querySelectorAll('table#travelExp input.sum');
      for (var i = 0; i < changingCells.length; i++) {
            changingCells[i].onchange = calcExp;
      }
      document.getElementById("submitButton").onclick = function () {
            validateSummary();
      };
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
//The function has a parameter of sumClass that is defined when getting sumClass by its class name. Then, sum total has an initial value of 0. Then, created a for loop for the sumFields that has an if with a condiion of itemValue as a number, if it is, it will add sumTotal to itemvalue.
function calcClass(sumClass) {
      var sumFields = document.getElementsByClassName(sumClass);
      var sumTotal = 0;
      for (var i = 0; i < sumFields.length; i++) {
            var itemValue = parseFloat(sumFields[i].value);
            if (!isNaN(itemValue)) {
                  sumTotal += itemValue;
            }
      }
      return sumTotal;
}
//The function calcExp has a variable of an object collections. Then, created a for loop for the expTable. element is retrieved by their id value. Then, set equal to the formatNumber function with parameters as a function with parameters of respected values. Also, two decimal places.
function calcExp() {
      var expTable = document.querySelectorAll("table#travelExp tbody tr");
      for (var i = 0; i < expTable.length; i++) {
            document.getElementById("subtotal" + i).value = formatNumber(calcClass("date" + i), 2);
      }
      document.getElementById("transTotal").value = formatNumber(calcClass("trans"), 2);
      document.getElementById("lodgeTotal").value = formatNumber(calcClass("lodge"), 2);
      document.getElementById("mealTotal").value = formatNumber(calcClass("meal"), 2);
      document.getElementById("otherTotal").value = formatNumber(calcClass("other"), 2);



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