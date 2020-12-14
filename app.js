// NOTE Buttons for all upgrades
let giftButton= document.getElementById("gift-button")
let ornamentButton= document.getElementById("ornament-button")
let treeButton= document.getElementById("tree-button")
let elfButton= document.getElementById("elf-button")

// NOTE Variables
let cookieCount = 0
let cookiePerClick = 1
let cookiePerSecond = 0

// NOTE Variable Dictionary with 4 upgrades(2 click and 2 automatic)
let clickUpgrades = {
  gifts: {
    name: "Gifts",
    price: 50,
    level: 0,
    modifier: 1
  },
  ornaments: {
    name: "Ornaments",
    price: 200,
    level: 0,
    modifier: 10
  }
}
let automaticUpgrades = {
  trees: {
    name: "Trees",
    price: 450,
    level: 0,
    modifier: 100
  },
  elves: {
    name: "Elves",
    price: 2000,
    level: 0,
    modifier: 200
  }
}

// NOTE Show Count for displaying
let cookieCountElem = document.getElementById('cookie-count')
let cookiePerClickElem = document.getElementById('cookie-per-click')
let cookiePerSecondElem = document.getElementById('cookie-per-second')
// NOTE Level of 4 upgrades for displaying
let giftsLevelElem = document.getElementById('gifts-level')
let ornamentsLevelElem = document.getElementById('ornaments-level')
let treesLevelElem = document.getElementById('trees-level')
let elvesLevelElem = document.getElementById('elves-level')
// NOTE Price of 4 upgrades for displaying
let giftsPriceElem = document.getElementById('gifts-price')
let ornamentsPriceElem = document.getElementById('ornaments-price')
let treesPriceElem = document.getElementById('trees-price')
let elvesPriceElem = document.getElementById('elves-price')

// NOTE Declaration of levels for upgrades
let giftsLevel = clickUpgrades.gifts.level
let ornamentsLevel = clickUpgrades.ornaments.level
let treesLevel = automaticUpgrades.trees.level
let elvesLevel = automaticUpgrades.elves.level
// NOTE Declaration of price for upgrades
let giftsPrice = clickUpgrades.gifts.price
let ornamentsPrice = clickUpgrades.ornaments.price
let treesPrice = automaticUpgrades.trees.price
let elvesPrice = automaticUpgrades.elves.price
// NOTE Declaration of modifier for upgrades
let giftsMod = clickUpgrades.gifts.modifier
let ornamentsMod = clickUpgrades.ornaments.modifier
let treesMod = automaticUpgrades.trees.modifier
let elvesMod = automaticUpgrades.elves.modifier

// // NOTE Message center
let messageElem = document.getElementById("message")

// NOTE Start Game Here
function santaSpecial(){
  document.getElementById("song").play()
  cookieCount++
  checkUpgrades()
  drawUpgrades()
}

// NOTE Disabled Buttons check
function checkButtons(){
  if(cookieCount>=giftsPrice){
    giftButton.removeAttribute("disabled")
  }
  if(cookieCount>=ornamentsPrice){
    ornamentButton.removeAttribute("disabled")
  }
  if(cookieCount>=treesPrice){
    treeButton.removeAttribute("disabled")
  }
  if(cookieCount>=elvesPrice){
    elfButton.removeAttribute("disabled")
  }
}

function checkUpgrades(){
  checkButtons()
  giftsUpgrade()
  ornamentsUpgrade()
}
function giftsUpgrade(){
  if (giftsLevel > 0){
    cookieCount +=(giftsLevel * giftsMod)
  }
 }
function ornamentsUpgrade(){
  if (ornamentsLevel > 0){
    cookieCount +=(ornamentsLevel * ornamentsMod)
  }
}

// NOTE Display on screen
function drawUpgrades(){
  cookieCountElem.innerText = cookieCount.toString()
  cookiePerSecondElem.innerText = cookiePerSecond.toString()
  cookiePerClickElem.innerText = cookiePerClick.toString()
  giftsLevelElem.innerText = giftsLevel.toString()
  giftsPriceElem.innerText = giftsPrice.toString()
  ornamentsLevelElem.innerText = ornamentsLevel.toString()
  ornamentsPriceElem.innerText = ornamentsPrice.toString()
  treesLevelElem.innerText = treesLevel.toString()
  treesPriceElem.innerText = treesPrice.toString ()
  elvesLevelElem.innerText = elvesLevel.toString()
  elvesPriceElem.innerText = elvesPrice.toString()
}

// NOTE Buy Upgrades
function buyGifts(){
  if (cookieCount >= giftsPrice){
    giftsLevel++
    cookieCount = cookieCount - giftsPrice
    giftsPrice = (Math.round(giftsPrice * (giftsMod / 100))) + giftsPrice
    displayMessage(`gifts Upgrade Purchased`)
    cookiePerCountUpdate()
    drawUpgrades()
  }else{
    displayMessage(`Not enough money`)
  }
}
function buyOrnaments(){
  if (cookieCount >= ornamentsPrice){
    ornamentsLevel++
    cookieCount = cookieCount - ornamentsPrice
    ornamentsPrice = (Math.round(ornamentsPrice * (ornamentsMod / 150))) + ornamentsPrice
    displayMessage(`ornaments upgrade purchased`)
    cookiePerCountUpdate()
    drawUpgrades()
  }else{
    displayMessage(`Not enough money`)
  }
}
function buyTrees(){
  if (cookieCount >= treesPrice){
    treesLevel++
    cookieCount = cookieCount - treesPrice
    treesPrice = (Math.round(treesPrice * (treesMod / 200))) + treesPrice
    displayMessage(`trees upgrade purchased`)
    cookiePerSecondUpdate()
    drawUpgrades()
  }else{
    displayMessage(`Not enough money`)
  }
}
setInterval(function treesEngage(){
  if (treesLevel > 0){
    cookieCount += (treesLevel * treesMod)
    drawUpgrades()
   }
  }, 3000)


function buyElves(){
  document.getElementById("song").pause()
  if (cookieCount >= elvesPrice){
    elvesLevel++
    cookieCount = cookieCount - elvesPrice
    elvesPrice = (Math.round(elvesPrice * (elvesMod / 250))) + elvesPrice
    displayMessage(`elves upgrade purchased`)
    cookiePerSecondUpdate()
    drawUpgrades()
  }else{
    displayMessage(`Not enough money`)
  }
}
setInterval(function elvesEngage(){
  if (elvesLevel > 0){
    cookieCount += (elvesLevel * elvesMod)
    drawUpgrades()
  }
}, 3000)

// NOTE Message on screen
function displayMessage(message){
  messageElem.innerText = message.toString()
  setTimeout(() => {
    messageElem.innerText = ""
  }, 5000);
}

// NOTE Display cookie per click and cookie per second
function cookiePerSecondUpdate(){
  let cookieCombo = (treesMod * treesLevel) + (elvesMod * elvesLevel)
  cookiePerSecond = Math.floor(cookieCombo / 3)
}

function cookiePerCountUpdate(){
  let cookieCombo = (giftsMod * giftsLevel) + (ornamentsMod * ornamentsLevel)
  cookiePerClick = cookieCombo + 1
}

drawUpgrades()