console.log("hello from index.js");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let input = event.target.elements.input.value;
  let output = event.target.elements.output;
  output.textContent = input.toUpperCase();
});
