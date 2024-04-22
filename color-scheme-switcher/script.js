const divs = document.querySelectorAll("div");
const body = document.querySelector("body");
const resetButton = document.querySelector("#resetButton");

for (let div of divs) {
  div.addEventListener("click", (e) => {
    e.stopPropagation();
    let id = e.target.id;
    switch (id) {
      case "aqua":
      case "aquamarine":
      case "darkcyan":
      case "deeppink":
      case "powderblue":
        body.style.backgroundColor = id;
        console.log(body.style.backgroundColor);
        break;
    }
  });
}

resetButton.addEventListener("click", () => {
  body.style.backgroundColor = "";
  console.log(body.style.backgroundColor);
});

 
