// document.getElementById("count").innerText = 5

// let firstBatch = 5
// let secondBatch = 7
// let count= firstBatch + secondBatch

// console.log(count)
 
// let myAge=20
// console.log(myAge)
// let myAge = 20
// let humanDogRatio = 7
// let myDogAge = myAge*humanDogRatio
// // console.log(myDogAge)
// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function increment(){
//     console.log("The button was clicked")
// }
// increment()

// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()

// function Janhavi(){
//     console.log(42)
// }
// Janhavi()

// let lapsCompleted = 0

// function Satyam(){
//     lapsCompleted = lapsCompleted + 1
// }

// Satyam()
// Satyam()
// Satyam()

// console.log(lapsCompleted)
// let countEl = document.getElementById("count-el")


// let count = 0

// function increment(){
//     count=count+1
//     countEl.innerText = count

// }

// function save(){
//     console.log(count)

// }
// let username = "per"
// let message="You have three new notifications"
// let messageToUser = message + ", "+ username + "!"
// console.log(messageToUser)
// let name = "Janhavi"
// let greeting = "Hi,my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// let welcomeEl=document.getElementById("welcome-el")
// let name = "Janhavi"
// let greeting = "Hi,my name is "
// welcomeEl.innerText = greeting + name
// welcomeEl.innerText = welcomeEl.innerText + "e"

let count = 0
let saveEl=document.getElementById("save-el")
let countEl = document.getElementById("count-el")


function increment(){
    count+=1
    countEl.textContent = count

}

function save(){
    let countStr= count + " - " 
    saveEl.textContent+= countStr 
    countEl.textContent = 0
    count = 0

}

console.log("Lets count people on the subway!")

