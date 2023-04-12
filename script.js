function pressedEnter() {
    if (document.getElementById("input").keydown = true) {
        checkCommand()
    }
}

function checkCommand() {
    if (player.setupDone == false) {
        doSetup()
    } else {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i] == document.getElementById("input").value) {
                executeCommand(i)
                break
            } else if (i == (inputs.length - 1)) {
                x = "Hmm, don't know what you're trying to do but it's not working. Try something else."
                output(x)
                clearInput()
            }
        }
    }
}

function doSetup() {
    if (player.playerName == null) {
        playerName()
    } else if (player.favFood == null) {
        playerFood()
    } else if (player.setupDone == false) {
        gameStart()
    }
}

function executeCommand(i) {
    locate(outputs[i])
    clearInput()
}

function locate(direction) {
    let xdirection = 0
    let ydirection = 0
    if (direction == "east") {
        xdirection = 1
    } else if (direction == "west") {
        xdirection = -1
    } else if (direction == "north") {
        ydirection = 1
    } else if (direction == "south") {
        ydirection = -1
    }
    areaNumeral = (player.playerLocation.xcoord + xdirection) + (player.playerLocation.ycoord -1 + ydirection) * 5
    let areaLocation = (areaNum[areaNumeral-1])
    player.playerLocation = areaLocation
    describe(areaLocation)
}

function describe(area) {
    let x = area.description
    output(x)
}

function playerInfo() {
    document.getElementById("output").innerHTML = "Welcome to the game. What is your name?"
}

function playerName() {
    player.playerName = document.getElementById("input").value
    clearInput()
    document.getElementById("output").innerHTML = `Hello ${player.playerName}. What is your favorite food?`
}

function playerFood() {
    player.favFood = document.getElementById("input").value
    clearInput()
    document.getElementById("output").innerHTML = `Lets try to find some ${player.favFood}. Are you ready to get started?`
}

function gameStart() {
    let pLocation = player.playerLocation
    document.getElementById("output").innerHTML = pLocation.description
    player.setupDone = true
    clearInput()
}

function output(output) {
    document.getElementById("output2").innerHTML = document.getElementById("output").innerHTML
    document.getElementById("output").innerHTML = output
}

function clearInput() {
    document.getElementById("input").value = ""
}

//Input Event
document.getElementById("input").addEventListener("change", pressedEnter)

//Area Objects
const unaccessible = {
    description: "Area unaccessible"
}

const pizzaPlace = {
    roomName: "Pizza Place",
    xcoord: 2,
    ycoord: 3,
    description: "You are in the Pizza place. It smells great in here. There is someone at the front counter. Also you notice some of your friends are here."
}

const startingArea = {
    xcoord: 3,
    ycoord: 3,
    description: "You are outside on main street. To the west there is a pizza joint. To the east there is a burger place. To the north and south there are more food places."
}

const burgerPlace = {
    xcoord: 4,
    ycoord: 3,
    description: "You are in the Burger place. It smells great in here. There is someone at the front counter. There is a creepy guy in the corner licking the wall."
}

const areaNum = [unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, pizzaPlace, startingArea, burgerPlace, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible, unaccessible]

//Player Object
const player = {
    playerName: null,
    playerLocation: startingArea,
    favFood: null,
    setupDone: false
}

//Commands
const commands = ["go", "talk", "fight", "take", "use"]

//go looks at directions
//talk, fight, and take look at player location
//use looks at player inventory (you can only use an item you have)

const go = {
    north: 1,
    south: -1,
    east: -1,
    west: 1
}

// const inputs = ["go north", "go south", "go east", "go west"]

// const outputs = ["north", "south", "east", "west"]

//Game Start
playerInfo()
