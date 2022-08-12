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
lightingOptions = ["Default", "Night", "Dusk", "Sunset", "Bright", "Overcast"]
lightingVals = {
    "default": generateColors, 
    "night": generateNightColors, 
}
currLighting = lightingVals.default; 

generateButton.addEventListener('click', () => {
    currLighting() 
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

//copied code from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}
function numToHex(num) {
    var hex = num.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return "#" + numToHex(r) + numToHex(g) + numToHex(b);
}
//end of copied code 

lightingButton = document.getElementById("lighting-button")
defaultOp = document.getElementById("default")
nightOp = document.getElementById("night")
duskOp = document.getElementById("dusk")
sunsetOp = document.getElementById("sunset")
brightOp = document.getElementById("bright")
overcastOp = document.getElementById("overcast")

function changeLightingButton(newLighting) {
    lightingButton.textContent = newLighting; 
}

defaultOP.addEventListener('click', () => {
    
})
nightOp.addEventListener('click', () => { 
    currLighting = lightingVals.night; 
    changeLightingButton(lightingOptions[1])
})
function generateNightColors() {
    for (let i = 0; i < 5; i++){
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        rgbVal = hexToRgb(randomColor);  
        rgbVal.r = Math.floor(rgbVal.r * 0.5)
        rgbVal.g = Math.floor(rgbVal.g * 0.5)
        rgbVal.b = Math.floor(rgbVal.b * 0.5)
        newHex = rgbToHex(rgbVal.r, rgbVal.g, rgbVal.b)
        changeHex(newHex, i);
        changePanel(newHex, i);
    }
}




