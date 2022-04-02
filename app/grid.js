// test du js
document.querySelector("#is_js").innerHTML = "hello JS";

//init la grid
let grid = [];

//initalisation de la grille
for(let i = 0; i < 14; i++){
        grid.push(i);
        grid.push(i);
}

//melanger le tableau
function shuffleArray(inputArray){
        inputArray.sort(()=> Math.random() - 0.5);
    }
  
    shuffleArray(grid);
    console.log(grid);

// melanger les id
function createGrid(){
        for(let i = 0; i < 28; i++){
                let createImg =  document.createElement("img");
                createImg.setAttribute('src','assets/images/backRed.png')
                createImg.setAttribute("class","grid-item");
                createImg.setAttribute("id",i);
                createImg.setAttribute("data-value",grid[i]);

                createImg.addEventListener('click', flipCard)
                createImg.textContent = grid[i];       
                document.querySelector("#grid-container").appendChild(createImg); 
        }     
}

createGrid()

// attribuer les images au tableau
let arrayImages = [];

for(let i = 1; i < 15 ; i++){
        arrayImages.push(i+".png");
        arrayImages.push(i+".png");    
}
console.log(arrayImages);

//tableau de flip des cartes
let arrayFlip =  []

//comparer les deux tirages
let arrayComparaison = []
function flipCard(){
        
        // numero de la carte
        let card = this.getAttribute('data-value')
        card = parseInt(card)

        console.log('tableau de flip'+ arrayFlip)
        
        this.setAttribute('src','assets/images/' + card + '.png')
        
        arrayComparaison.push(card)
        
        if(arrayComparaison.length === 2){
                if(arrayComparaison[0] === arrayComparaison[1]){
                        console.log('gagne')
                        arrayComparaison.splice(0,2)                       
                } else {
                        setTimeout(laFonction,1000)
                        console.log('perdu')
                        arrayComparaison.splice(0,2)
                }       
        }
        console.log(arrayComparaison)
        console.log(card)
        
}

function laFonction(){
        console.log('tempo ok')
        
}
