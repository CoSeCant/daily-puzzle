const competitors = []
const accruedPoints = []
const numCompetitors = 99

//Until we get a userbase, this will be used to generate a random number of unique users for the leaderboards (in a random order)
for (i = 1; i <= numCompetitors; i++) {
    randomInt = Math.floor(Math.random() * 100)
    randomScore = Math.floor(Math.random() * 1000) //Generates a random number up to 999
    if (competitors.indexOf('rBmro9965B5NmsrMwYzfnwyfJvE7HbcVS' + randomInt) === -1) {
        competitors.push('rBmro9965B5NmsrMwYzfnwyfJvE7HbcVS' + randomInt)
        accruedPoints.push(randomScore)
    }
}

accruedPoints.sort(function(a, b) { //Sorts the random scores that were generated from largest to smallest
    return b - a;
})

console.log(accruedPoints)
