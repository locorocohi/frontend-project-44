import { getRndInt } from '../utils.js'
import readlineSync from 'readline-sync';

const input = () => {
const name = readlineSync.question('Your answer: ');
return name
}

const game = () => {

console.log('Welcome to the Brain Games!')
console.log("What's your name?")
const userName = input()
console.log(`Hello, ${userName}!`)

console.log('Answer "yes" if the number is even, otherwise answer "no".')


let correctAnswer = 0
let temp = ''

let numbers = []
for (let i = 0; i <= 3; i += 1){
    numbers.push(getRndInt(0, 99))
}


for(let number of numbers) {
    console.log(`Question: ${number}`)

    if (number % 2 === 0) {
    temp = 'yes'
    } else {
    temp ='no'
    }

let answer = input()

    if (answer === temp) {
    correctAnswer = correctAnswer + 1
    console.log('Correct!')
    } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was ${temp}.`)
    console.log(`Let's try again, ${userName}!`)
    break
}
}

if (correctAnswer === 3) {
    console.log(`Congratulations, ${userName}!`)
}
}
export default game