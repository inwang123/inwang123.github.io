
function createNewCard() {

  
  
  
    const cardElement = document.createElement("div");
  
  
    cardElement.classList.add("card");
  
  
    cardElement.innerHTML =
      `<div class = "card-down"></div>
    <div class= "card-up"></div>`;
 
    return cardElement;
  
  }
  createNewCardTest();
  
  function appendNewCard(parentElement) {
  
    let cardElement = createNewCard();

  
    parentElement.appendChild(cardElement);

    return cardElement;
  
  }
  appendNewCardTest();
  
  function shuffleCardImageClasses() {
 
    let cardClasses = ["image-1", "image-1", "image-2", "image-2", "image-3", "image-3", "image-4", "image-4", "image-5", "image-5", "image-6", "image-6"];

    cardClasses = _.shuffle(cardClasses);

    return cardClasses;
  }
  shuffleCardImageClassesTest()
  
  
  function createCards(parentElement, shuffledImageClasses) {
  
    let cardArr = [];
 
  
    for (let i = 0; i < shuffledImageClasses.length; i++) {
  
      let createNewCard = appendNewCard(parentElement);
  
      createNewCard.classList.add(shuffledImageClasses[i]);
  
      let cardTotal = {
        index: i,
        element: createNewCard,
        imageClass: shuffledImageClasses[i],
      };
  
      cardArr.push(cardTotal);
  
    }
  
  
    return cardArr;
  
  }
  createCardsTest();
  
  
  function doCardsMatch(cardObject1, cardObject2) {

    return cardObject1.imageClass === cardObject2.imageClass;
  
  }
  doCardsMatchTest();
  
  let counters = {};
  
  
  function incrementCounter(counterName, parentElement) {
  
    if (counters[counterName] === undefined) {
  
      counters[counterName] = 0;
  
    }
  
    
    counters[counterName]++;
  
  
    parentElement.innerHTML = counters[counterName];
  
  }
  incrementCounterTest();
  
  let lastCardFlipped = null;
  
  
  function onCardFlipped(newlyFlippedCard) {
    
    incrementCounter("flips", document.getElementById("flip-count"));
  

    if (lastCardFlipped === null) {
  
      lastCardFlipped = newlyFlippedCard;
  
      return;
    }
  
   
    if (lastCardFlipped.imageClass != newlyFlippedCard.imageClass) {
  
      wrongAudio.play();
      lastCardFlipped.element.classList.remove("flipped");
      newlyFlippedCard.element.classList.remove("flipped");
      lastCardFlipped = null;
  
      return;
    }
  
    incrementCounter("matches", document.getElementById("match-count"));
  
    lastCardFlipped.element.classList.add("border-glow");
    newlyFlippedCard.element.classList.add("border-glow");
  
    console.log(counters["matches"]);
  
    if (counters["matches"] === 6) {
  
      winAudio.play();
  
    }
    else if (counters["matches"]) {
  
      matchAudio.play();
  
    }
  
  
    lastCardFlipped = null;
  
  }

  function resetGame() {
  
  
    let cardContainer = document.getElementById("card-container");
  
  
    while (cardContainer.firstChild != null) {
  
      cardContainer.removeChild(cardContainer.firstChild);
  
    }
  
  
    document.getElementById("flip-count").innerHTML = "0";
    document.getElementById("match-count").innerHTML = "0";

    counters = {};
 
    lastCardFlipped = null;

    setUpGame();
  
  }
  
  setUpGame();