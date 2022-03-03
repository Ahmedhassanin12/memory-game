//card options
const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];
// make random sort array
cardArray.sort(() => 0.5 - Math.random());
// select the element in html
let ahmed = document.querySelector(".ahmed");
const gridDisplay = document.getElementById("grid");
const resultDisplay = document.querySelector("#result");
// uses empty arrays
let cardChosen = [];
let cardChosenId = [];
let cardWon = []
// function make element and loop and click event 
function createBoard() {
  for (let i = 0; i < 12; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();
function checkMatch() {
  // select all imgs
  let cards = document.querySelectorAll("img");
  let optionOneId = cardChosenId[0];
  let optionTwoId = cardChosenId[1];
  if (optionOneId == optionTwoId) {
    alert("You Have Clicked Same Image");
  }
  // if card index 0 === card index 2 this is match and remove event  
  if (cardChosen[0] == cardChosen[1]) {
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard)
    cards[optionTwoId].removeEventListener("click", flipCard)
    cardWon.push(cardChosen)
    
  } else {
    // if the do not match reset the img again
     cards[optionOneId].setAttribute("src", "images/blank.png");
     cards[optionTwoId].setAttribute("src", "images/blank.png");
    
    // and make him complate playing
    ahmed.classList.toggle("hidden");
    ahmed.style.transition = "3s all"
    ahmed.addEventListener("click", function () {
      ahmed.classList.add("hidden");
    });
  }
  // than rset the arrays to complate playing 
  resultDisplay.textContent = cardWon.length;
  cardChosen = [];
  cardChosenId = []
  // if found them all he/she wins
  if (cardWon.length === (cardArray.length/2)) {
    resultDisplay.innerHTML = "congratulations you found them All!😂💖"
    document.body.style.backgroundColor = "#42f548";
    document.body.style.transition = "2s";
    let img = document.createElement("img");
    img.src = "images/1.jpg"
    img.style.width = "100%"
    img.style.height = "100%"
    gridDisplay.appendChild(img);
    cards.remove()
  }
}
// function get the attribute element we clicked and push the name at empty array
function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 100)
  }
  
}
console.log(cardArray);
window.onclick = function () {
  ahmed.classList.add("hidden")
}