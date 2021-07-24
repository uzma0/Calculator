// Selectors
var viewAns = document.querySelector("#viewAnswer span");
var numbBtn = document.querySelectorAll(".numbers > .btnNumber");
var mathOperator = document.querySelectorAll("#mathOperator > .btnOprtr");
var equal = document.querySelector("#equal");
var clear = document.querySelector("#clear");
var cut = document.querySelector("#cut");
var ratio = document.querySelector("#ratio");
var sqr = document.querySelector("#sqr");
var sqrRoot = document.querySelector("#sqrRoot");
var plusAndMinus = document.querySelector("#plusAndMinus");

// Variables
var success = viewAns.textContent;

//Function
plusAndMinus.addEventListener("click", function () {
  success = "-";
  viewAns.textContent = success;
});

for (let i = 0; i < numbBtn.length; i++) {
  numbBtn[i].addEventListener("click", function () {
    viewAns.textContent += this.value;
    success += this.value;
    console.log(success);
  });
}
for (let i = 0; i < mathOperator.length; i++) {
  mathOperator[i].addEventListener("click", function () {
    success += this.value;
    viewAns.textContent = success;

    console.log("second one " + success);
  });
}

// answer function
equal.addEventListener("click", () => {
  success = eval(success).toString();
  viewAns.textContent = success;
  console.log(success);
});

// clear function
clear.addEventListener("click", function () {
  success = "";
  viewAns.textContent = "";
});

// cut function
cut.addEventListener("click", function () {
  success = success.slice(0, success.length - 1);
  viewAns.textContent = success;
});

// Ratio Square and SqrRoot function
ratio.addEventListener("click", function () {
  success = 1 / success;
  success = success.toString();
  viewAns.textContent = success;
});

sqr.addEventListener("click", function () {
  success = Number(success) * Number(success);
  success = success.toString();
  viewAns.textContent = success;
  console.log(success);
});

sqrRoot.addEventListener("click", function () {
  success = Math.sqrt(success);
  success = success.toString();
  viewAns.textContent = success;
  console.log(success);
});
