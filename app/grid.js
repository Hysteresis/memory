// test du js
document.querySelector("#is_js").innerHTML = "hello JS";

//init la grid
let grid = [];

//creer une div


//initalisation de la grille
for(let i = 0; i < 28; i++){
        grid.push(i);
}


for(let i = 0; i < 28; i++){
        
        let createDiv =  document.createElement("div");
        createDiv.setAttribute("class","grid-item");
        createDiv.setAttribute("id",i);
        createDiv.textContent = i;
      
        
        document.querySelector("#grid-container").appendChild(createDiv);

        console.log(grid[i]);

}




