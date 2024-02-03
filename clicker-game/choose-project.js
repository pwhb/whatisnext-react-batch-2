const projects = [
    "Calculator",
    "Clicker Game",
    "Pomodoro Timer"
];

const getRandomFrom = (array) =>
{
    // 0 - 1
    // *= length
    // 0 - length
    const randIndex = Math.floor(Math.random() * array.length);
    return array[randIndex];
}; 

console.log(getRandomFrom(projects));