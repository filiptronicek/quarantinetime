const startDate = '2020-03-15';

const timeDiff  = (new Date(startDate)) - new Date();
const days      = timeDiff / (1000 * 60 * 60 * 24);

document.getElementById("counter").innerText = Math.abs(days.toFixed(0))

console.log(days);