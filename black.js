const min = 1;
const max = 2;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(min, max)
console.log("rndInts:")
console.log(rndInt)

// Instant redirect for DEBUG
window.location.replace("interruption.html")

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// HTTP redirect after random amount of minutes (between min and max minutes)
delay(rndInt*60*1000).then(() => window.location.replace("interruption.html"));