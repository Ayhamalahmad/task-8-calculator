// Select relevant elements
let col2 = document.querySelector(".colums");
let text = document.querySelector(".text");
let buttons = document.querySelectorAll("button");
// Initialize variable to track if the last character was an operator
let lastCharWasOperator = false;
// loop throught the buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
     // Handle button clicks for numbers and operators
    if (
      e.target.dataset.value !== "del" &&
      e.target.dataset.value !== "ac" &&
      e.target.dataset.value !== "="
    ) {
    if (e.target.dataset.value.match(/[+\-*/]/) && lastCharWasOperator) {
        // Replace the last operator with the new operator
        text.textContent =
          text.textContent.slice(0, -1) + e.target.dataset.value;
        lastCharWasOperator = true;
      } else {
        text.textContent += e.target.dataset.value;
        if (e.target.dataset.value.match(/[+\-*/]/)) {
          lastCharWasOperator = true;
        } else {
          lastCharWasOperator = false;
        }
      }
    }
      // Handle the "Delete" button
    if (e.target.dataset.value === "del") {
      if (text.value !== "") {
        text.textContent = text.textContent.slice(0, -1);
      }
    }
  // Handle the "Clear All" button
    if (e.target.dataset.value === "ac") {
      text.textContent = "";
      lastCharWasOperator = false;
    }
   // Handle the "Calculate" button
    if (e.target.dataset.value === "=") {
      text.textContent = eval(text.textContent);
      lastCharWasOperator = false;
    }
  });
});


// let col2 = document.querySelector(".colums");
// let text = document.querySelector(".text");
// let buttons = document.querySelectorAll("button");
// // loop throught the buttons
// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (
//       e.target.dataset.value !== "del" &&
//       e.target.dataset.value !== "ac" &&
//       e.target.dataset.value !== "="
//     ) {
//       text.textContent += e.target.dataset.value;
//     }
//     // Delete 
//     if (e.target.dataset.value === "del") {
//       if (text.value !== "") {
//         text.textContent = text.textContent.slice(0, -1);
//       }
//     }
//     // Clear All
//     if (e.target.dataset.value === "ac") {
//       text.textContent = "";
//     }
//     // calculate 
//     if (e.target.dataset.value === "=") {
//       text.textContent = eval(text.textContent);
//     }
//   });
// });
