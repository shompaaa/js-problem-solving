const scores = [25,65,27,38,45,99,100,42,38,88,85,75]

function getHighestScores(scores){
    let highestScore = scores[0]
    for(score of scores){
        if(score > highestScore){
            highestScore = score;
        }
    }
    return highestScore
}

const highestScores = getHighestScores(scores)
console.log('The highest score is:', highestScores);