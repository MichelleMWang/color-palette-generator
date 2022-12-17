const api_url = "https://www.thecolorapi.com/id?hex="
modal1 = document.getElementById("modal1")
modal2 = document.getElementById("modal2")
modal3 = document.getElementById("modal3")
modal4 = document.getElementById("modal4")
modal5 = document.getElementById("modal5")

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
modalArr = [modal1, modal2, modal3, modal4, modal5]
lightingOptions = ["Default", "Night", "Dusk", "Sunset", "Bright", "Overcast"]
lightingVals = {
    "default": generateColors, 
    "night": generateNightColors, 
    "dusk": generateDuskColors, 
    "sunset": generateSunsetColors, 
    "bright": generateBrightColors, 
    "overcast": generateOvercastColors
}
currLighting = lightingVals.default; 
onPanelHover() 
getColor() 

generateButton.addEventListener('click', () => {
    currLighting() 
    onPanelHover() 
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

function onPanelHover(){
    for (let i = 0; i < hexArr.length; i++){
        panelArr[i].addEventListener('mouseover', ()=>{
            const hex = hexArr[i].textContent.substring(1).toUpperCase() 
            const data = getColor(hex, modalArr[i])
            modalArr[i].style.display = "block"
        })
        panelArr[i].addEventListener('mouseleave', () => {
            modalArr[i].style.display = "none"
        })
    }    
}

async function getColor(hex, modal) {
    const response = await fetch(api_url + hex);
    const data = await response.json(); 
    modal.textContent = "Name: " + data.name.value + "\n Hex: " + data.hex.value + 
    "\n CMYK: " + data.cmyk.value + "\n RGB: " + data.rgb.value + "\n HSL: " + data.hsl.value; 
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
optionsArr = [defaultOp, nightOp, duskOp, sunsetOp, brightOp, overcastOp]

function changeLightingButton(newLighting) {
    lightingButton.textContent = newLighting; 
}
function changeLightingButtonColor(text, color){
    lightingButton.style.color = text; 
    lightingButton.style.backgroundColor = color; 
}

defaultOp.addEventListener('click', () => {
    currLighting = lightingVals.default; 
    changeLightingButton(lightingOptions[0]); 
    changeLightingButtonColor("rgb(255, 255, 255", "rgb(106, 106, 194)"); 
})
nightOp.addEventListener('click', () => { 
    currLighting = lightingVals.night; 
    changeLightingButton(lightingOptions[1])
    changeLightingButtonColor("rgb(194, 197, 209)", "rgb(33, 29, 56)"); 
})
duskOp.addEventListener('click', () => {
    currLighting = lightingVals.dusk; 
    changeLightingButton(lightingOptions[2]); 
    changeLightingButtonColor("rgb(235, 235, 235)", "rgb(139, 127, 153)");
})
sunsetOp.addEventListener('click', () => { 
    currLighting = lightingVals.sunset; 
    changeLightingButton(lightingOptions[3])
    changeLightingButtonColor("rgb(255, 255, 255)", "rgb(235, 125, 106)");
})
brightOp.addEventListener('click', () => {
    currLighting = lightingVals.bright; 
    changeLightingButton(lightingOptions[4]); 
    changeLightingButtonColor("rgb(255, 255, 255)", "rgb(112, 3, 255)");
})
overcastOp.addEventListener('click', () => { 
    currLighting = lightingVals.overcast; 
    changeLightingButton(lightingOptions[5])
    changeLightingButtonColor("rgb(202, 205, 217)", "rgb(104, 106, 115)");
})




function generateNightColors() {
    for (let i = 0; i < 5; i++){
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        rgbVal = hexToRgb(randomColor);  
        rgbVal.r = Math.floor(rgbVal.r * 0.25)
        rgbVal.g = Math.floor(rgbVal.g * 0.25)
        rgbVal.b = Math.floor(rgbVal.b * 0.5)
        newHex = rgbToHex(rgbVal.r, rgbVal.g, rgbVal.b)
        changeHex(newHex, i);
        changePanel(newHex, i);
    }
}
function generateDuskColors() {
    for (let i = 0; i < 5; i++){
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        rgbVal = hexToRgb(randomColor);  
        rgbVal.r = Math.floor(rgbVal.r * 0.75)
        rgbVal.g = Math.floor(rgbVal.g * 0.5)
        rgbVal.b = Math.floor(rgbVal.b * 0.75)
        newHex = rgbToHex(rgbVal.r, rgbVal.g, rgbVal.b)
        changeHex(newHex, i);
        changePanel(newHex, i);
    }
}
function generateSunsetColors() {
    for (let i = 0; i < 5; i++){
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        rgbVal = hexToRgb(randomColor);  
        rgbVal.r = Math.floor(rgbVal.r * 1.5)
        rgbVal.g = Math.floor(rgbVal.g* 1.25)
        rgbVal.b = Math.floor(rgbVal.b * 0.75)
        newHex = rgbToHex(rgbVal.r, rgbVal.g, rgbVal.b)
        changeHex(newHex, i);
        changePanel(newHex, i);
    }
}
function generateBrightColors() {
    for (let i = 0; i < 5; i++){
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        randomNum = Math.floor(Math.random() * 2)
        console.log(randomNum); 
        rgbVal = hexToRgb(randomColor); 
        if (randomNum == 0) {
            rgbVal.r = 0 
        } else if (randomNum == 1){
            rgbVal.g = 0 
        } else {
            rgbVal.b = 0 
        }
 
        /* rgbVal.r = Math.floor(rgbVal.r )
        rgbVal.g = Math.floor(rgbVal.g )
        rgbVal.b = Math.floor(rgbVal.b ) */
        newHex = rgbToHex(rgbVal.r, rgbVal.g, rgbVal.b)
        changeHex(newHex, i);
        changePanel(newHex, i);
    }
}
function generateOvercastColors() {
    for (let i = 0; i < 5; i++){
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        rgbVal = hexToRgb(randomColor);  
        rgbVal.r = Math.floor(rgbVal.r * 0.75)
        rgbVal.g = Math.floor(rgbVal.g * 0.75)
        rgbVal.b = Math.floor(rgbVal.b * 0.75)
        newHex = rgbToHex(rgbVal.r, rgbVal.g, rgbVal.b)
        changeHex(newHex, i);
        changePanel(newHex, i);
    }
}

artistOnly = document.getElementById("lighting-options")
randomNav = document.getElementById("random-nav")
artistNav = document.getElementById("artist-nav")

randomNav.addEventListener('click', () => {
    artistOnly.style.display = "none"; 
    randomNav.style.color = "rgb(146, 146, 146)"; 
    artistNav.style.color = "rgb(83, 83, 83)"
})
artistNav.addEventListener('click', () => {
    artistOnly.style.display = "flex"; 
    artistNav.style.color = "rgb(146, 146, 146)"; 
    randomNav.style.color = "rgb(83, 83, 83)"
})

