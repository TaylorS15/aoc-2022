import fs from "fs";

//Import file as array split between each line
const inputArr = fs
	.readFileSync("./day2/day2-input.txt", "utf-8")
	.split("\r\n");

//Variable to add each lines game score to
let totalScorePartOne = 0;

inputArr.forEach((game) => {
	//split each game into an array of two values
	const splitGame = game.split(" ");

	// Total score combinations:
	// A+X = 1+3, A+Y = 2+6, A+Z = 3+0
	// B+X = 1+0, B+Y = 2+3, B+Z = 3+6
	// C+X = 1+6, C+Y = 2+0, C+Z = 3+3

	//Add individual game score to totalScore based on values of splitGame[0] and [1]
	switch (splitGame) {
		case splitGame[0] === "A" && splitGame[1] === "X" ? splitGame : false:
			totalScorePartOne += 4;
			break;
		case splitGame[0] === "A" && splitGame[1] === "Y" ? splitGame : false:
			totalScorePartOne += 8;
			break;
		case splitGame[0] === "A" && splitGame[1] === "Z" ? splitGame : false:
			totalScorePartOne += 3;
			break;

		case splitGame[0] === "B" && splitGame[1] === "X" ? splitGame : false:
			totalScorePartOne += 1;
			break;
		case splitGame[0] === "B" && splitGame[1] === "Y" ? splitGame : false:
			totalScorePartOne += 5;
			break;
		case splitGame[0] === "B" && splitGame[1] === "Z" ? splitGame : false:
			totalScorePartOne += 9;
			break;

		case splitGame[0] === "C" && splitGame[1] === "X" ? splitGame : false:
			totalScorePartOne += 7;
			break;
		case splitGame[0] === "C" && splitGame[1] === "Y" ? splitGame : false:
			totalScorePartOne += 2;
			break;
		case splitGame[0] === "C" && splitGame[1] === "Z" ? splitGame : false:
			totalScorePartOne += 6;
			break;
	}
});

//Part One Answer: After adding up scores, print sum of all game scores
console.log(totalScorePartOne);

//Part Two: If second column has X = lose, Y = draw, Z = win

//Variable to add each lines game score to
let totalScorePartTwo = 0;

inputArr.forEach((game) => {
	const splitGame = game.split(" ");

	/*
    Game scores after following instructions
    A+X = 3+0, A+Y = 1+3, A+Z = 2+6
    B+X = 1+0, B+Y = 2+3, B+Z = 3+6
    C+X = 2+0, C+Y = 3+3, C+Z = 1+6
  */

	//Add individual game score to totalScore based on values of splitGame[0] and [1]
	switch (splitGame) {
		case splitGame[0] === "A" && splitGame[1] === "X" ? splitGame : false:
			totalScorePartTwo += 3;
			break;
		case splitGame[0] === "A" && splitGame[1] === "Y" ? splitGame : false:
			totalScorePartTwo += 4;
			break;
		case splitGame[0] === "A" && splitGame[1] === "Z" ? splitGame : false:
			totalScorePartTwo += 8;
			break;

		case splitGame[0] === "B" && splitGame[1] === "X" ? splitGame : false:
			totalScorePartTwo += 1;
			break;
		case splitGame[0] === "B" && splitGame[1] === "Y" ? splitGame : false:
			totalScorePartTwo += 5;
			break;
		case splitGame[0] === "B" && splitGame[1] === "Z" ? splitGame : false:
			totalScorePartTwo += 9;
			break;

		case splitGame[0] === "C" && splitGame[1] === "X" ? splitGame : false:
			totalScorePartTwo += 2;
			break;
		case splitGame[0] === "C" && splitGame[1] === "Y" ? splitGame : false:
			totalScorePartTwo += 6;
			break;
		case splitGame[0] === "C" && splitGame[1] === "Z" ? splitGame : false:
			totalScorePartTwo += 7;
			break;
	}
});

//Part Two Answer: After adding up scores, print sum of all game scores
console.log(totalScorePartTwo);
