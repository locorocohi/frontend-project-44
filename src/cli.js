import readlineSync from 'readline-sync';

export default () => {
const name = readlineSync.question('Your answer: ');
return name
}
