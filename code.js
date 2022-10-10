var button = document.querySelector("button");
var h1 = document.querySelector("h1");
var input = document.querySelector("input");

function buttonHandler() {
  console.log("Clicked!");
  h1.textContent = input.value;
}

//CSS background-color: teal;
//JS background-color => backgroundColor: teal;

h1.addEventListener("mouseenter", function () {
  //   console.log("Mouse has entered h1");
  //   console.log(this);
  this.style.color = "red";
  this.style.backgroundColor = "teal";
});

h1.addEventListener("mouseleave", function () {
  this.style.color = "black";
  this.style.backgroundColor = "transparent";
});

button.addEventListener("click", buttonHandler);
