const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    document.getElementById("card-content").innerHTML = flashcards[currentIndex].term;
}

function addCards(){
    currentIndex = flashcards.length;
    let newCard = {term: document.getElementById("new-term").value, 
                definition: document.getElementById("new-definition").value}
    flashcards.push(newCard)
    document.getElementById("new-term").value = "";
    document.getElementById("new-definition").value = "";
    displayCard()
}


// This line will display the card when the page is refreshed
window.onload = displayCard;

// The rest of the code you will write is apart of event listeners
document.getElementById("add-card-btn").addEventListener('click', addCards);
document.getElementById("add-card-btn").addEventListener('keydown', function(event){
    if (event.key === "Enter")
        addCards()
})
document.getElementById("new-term").addEventListener('keydown', function(event){
    if (event.key === "Enter")
        addCards()
})
document.getElementById("new-definition").addEventListener('keydown', function(event){
    if (event.key === "Enter")
        addCards()
})
document.getElementById("next-btn").addEventListener('click', function(){
    if (currentIndex < flashcards.length - 1){
        currentIndex += 1
        displayCard()
    }
})

document.getElementById("prev-btn").addEventListener('click', function(){
    if (currentIndex > 0){
        currentIndex -= 1
        displayCard()
    }
})

document.getElementById("flashcard").addEventListener('click', function(){
    if (showingTerm){
        document.getElementById("card-content").innerHTML = flashcards[currentIndex].definition;
        showingTerm = false
    } else {
        document.getElementById("card-content").innerHTML = flashcards[currentIndex].term;
        showingTerm = true;
    }
})

