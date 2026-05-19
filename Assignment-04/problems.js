/**Problem-01: Train TT will charge a fine who don't have a ticket with */
function totalFine(fare) {
  if (typeof fare !== "number" || typeof fare <= 0) {
    return "Invalid";
  }
  const fine = fare + fare * 0.2 + 30;
  return fine;
}
// const result = totalFine(200)
// console.log(result);




/**Problem-02: A function which remove all the space and make all the characters into upper from a string */
function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  const formatedStr = str.replaceAll(" ", "").toUpperCase();
  return formatedStr;
}
// const result = onlyCharacter("Cy   bar- At  tac k  ")
// console.log(result);




/**Problem-03: A function who decide which team was fair most  in the game and give them a fair play award. */
function bestTeam(team1, team2) {
  const team1Foul = team1.foul + team1.cardY + team1.cardR;
  const team2Foul = team2.foul + team2.cardY + team2.cardR;
  if (typeof team1 !== "object" || typeof team2 !== "object") {
    return "Invalid";
  }
  if (team1Foul < team2Foul) {
    return team1.name;
  } else if (team1Foul === team2Foul) {
    return "Tie";
  } else {
    return team2.name;
  }
}
// const result = bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
// { name: "Argentina", foul: 7, cardY: 0, cardR: 0 })
// console.log('Fair Play Award Goes to:',result);




/**Problem-04: A function will check if the two array length and all the elements are same or not */
function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  if (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  ) {
    return "true";
  } else {
    return "false";
  }
}
// const result = isSame([1, 2, 3] , [1 , 2 , 3]);
// console.log(result);



