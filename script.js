generateButton = document.getElementById("generate-button"); 
panel1 = document.getElementById("1"); 
panel2 = document.getElementById("2"); 
panel3 = document.getElementById("3"); 
panel4 = document.getElementById("4"); 
panel5 = document.getElementById("5"); 
hex1 = document.getElementById("1h"); 
hex2 = document.getElementById("2h"); 
hex3 = document.getElementById("3h"); 
hex4 = document.getElementById("4h"); 
hex5 = document.getElementById("5h"); 

panelArr = [panel1, panel2, panel3, panel4, panel5]; 
hexArr = [hex1, hex2, hex3, hex4, hex5];

generateButton.addEventListener('click', () => {
    generateColors(); 
})

function generateColors(){
    for (let i = 0; i < 5; i++){
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        withHash = '#' + randomColor; 
        changeHex(withHash, i);
        changePanel(withHash, i);  
    }
}
function changeHex(hex, index){
    hexDiv = hexArr[index] 
    hexDiv.textContent = hex; 
}
function changePanel(hex, index){
    panelDiv = panelArr[index] 
    panelDiv.style.backgroundColor = hex; 
}

