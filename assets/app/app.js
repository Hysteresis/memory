
// creation de la grille
let cardsArray = []
let cardPairArray = []

// Attribuer 14 cartes
function cards(){
    for(let i = 0 ; i < 14 ; i++){
        cardsArray[i] = i
    }
}
cards()

//construire les paires
function cardsPair(){
     for(let i = 0 ; i < 14 ; i++){
       cardPairArray.push( cardsArray[i])
       cardPairArray.push( cardsArray[i])
    }
}

cardsPair()

//! a decommenter pour Random le tableau
//melanger le tableau
// function shuffleArray(cardPairArray){
//         cardPairArray.sort(()=> Math.random() - 0.5);
//     }

//melanger le tableau
// shuffleArray(cardPairArray)


// creer les div
function createGrid(){
    for(let i = 0; i < 28; i++){

        let createCard = document.createElement("img");

        createCard.setAttribute("class", "card")
        createCard.setAttribute("data-id",i)
        createCard.setAttribute("data-value",cardPairArray[i])
        createCard.addEventListener("click", clickCard)

        document.querySelector("#grid-container").appendChild(createCard);
    }
}
createGrid()

// removeEventListener
function removeAddeventList(){
    for(let j = 0; j < 28; j++){
        console.log(j)
        document.querySelector(`[data-id="${j}"]`).removeEventListener("click", clickCard)
    }
}


let i = 0
let idArray = []
let comparePair = []
let victory = []
let is_victory = document.querySelector('#is_victory')



//=================================
let score = document.querySelector('#score')

function isVictory(){
    is_victory.innerHTML = "Victoire"
    clearInterval(laBarre)
    score.innerHTML = "Temps : " + (progressBar.value*0.5) + " secondes "
    removeAddeventList()
}

//=================================
function isDefaite(){
    is_victory.innerHTML = "Defaite"
    is_victory.style.color = "red"
    score.innerHTML = "Score : " + nbDePaires + " paires trouvées"
    removeAddeventList()
}

//=================================
let beginProgressBar = true
let laBarre
let nbDePaires = 0

function clickCard(){
    
    if(beginProgressBar){
        laBarre =  setInterval(animateProgressBar, 500)
        beginProgressBar = false
    }

    idCard = this.getAttribute('data-id')
    valueCard = this.getAttribute('data-value')
    // this.style.background = "green"
    this.style.backgroundImage = "url('assets/images/" + valueCard + ".png')"

    idArray[i] = idCard
    comparePair[i] = valueCard

    i++

    //comparer les paires
    if( i === 2 ){
        if ( comparePair[0] == comparePair[1] ){
            // ajouter a victory
            victory.push( comparePair[0])
            victory.push( comparePair[1])
            nbDePaires = nbDePaires + 1

            if(victory.length == 28){
                console.log('partie terminee')
                
                isVictory()
            // incrmenter le nombre de paires                
            }

            // RESET
            i = 0
            idArray.shift()      
            idArray.shift()     
            comparePair.shift()     
            comparePair.shift()            
        } 
        
        if(comparePair[0] !== comparePair[1] ){
            // console.log("perdu")     
        }    
    } 
    

    if( i === 3 ){
        if(comparePair[0] !== comparePair[1]  ){
            // init
            // this.style.backgroundImage = "url('assets/images/backRed.png')"
            let card0 = document.querySelector(`[data-id="${idArray[0]}"]`)
            let card1 = document.querySelector(`[data-id="${idArray[1]}"]`)
            
            card0.style.backgroundImage = "url('assets/images/backRed.png')"
            card1.style.backgroundImage = "url('assets/images/backRed.png')"

            i = 1
            idArray.shift()      
            idArray.shift()     
            comparePair.shift()     
            comparePair.shift()
        }      
    } 
    console.log("nbDePaires : " + nbDePaires)
}

//=================================
let progressBar = document.querySelector("progress")

function animateProgressBar(){
   progressBar.value = progressBar.value + 1
    if(progressBar.value >= progressBar.max){
        console.log('Temps écoulé')
        clearInterval(laBarre)
        isDefaite()      
    }
    if(progressBar.value <= (progressBar.max/2)){
        
        console.log("c est inf")
             
    }
}









