import fs from "fs";

//Stringify input from filesystem read
const input = fs.readFileSync("./day1/day1-input.txt").toString();

/*
  Turns input into an array of the values of each line in the text file
  Returns array formatted as: ['5555', '', '4444', '6666']
*/
const inputArr = input.split("\r\n");

/*
  Set elfs to nested number arrays
  Set _elf to be a temporary number array
*/
const elfs: number[][] = [];
let _elf: number[] = [];

inputArr.forEach((elf: string) => {
	if (elf !== "") {
		//Set the variable 'int' to the parsed number value of elf
		let int = +elf;

		//push that int value to _elf
		_elf.push(int);
	} else {
		//if elf is an empty string then push elf to elfs as its own number array, then clear _elf
		elfs.push(_elf);
		_elf = [];
	}
});

//Initially set the highestCalories variable to 0
let highestCalories: number = 0;
let threeHighestCalories: number[] = [0, 0, 0];

elfs.forEach((elf) => {
	//Reduce each elf array to the sum of its values as elfCalories
	let elfCalories = elf.reduce((partialSum, acc) => partialSum + acc, 0);

	//Setting highestCalories to new value if its bigger than initial value
	if (elfCalories > highestCalories) {
		highestCalories = elfCalories;
	}

	switch (elfCalories) {
		case elfCalories >= threeHighestCalories[0] ? elfCalories : false:
			threeHighestCalories[0] = elfCalories;
			break;
		case elfCalories >= threeHighestCalories[1] ? elfCalories : false:
			threeHighestCalories[1] = elfCalories;
			break;
		case elfCalories >= threeHighestCalories[2] ? elfCalories : false:
			threeHighestCalories[2] = elfCalories;
			break;
	}
});

//Prints answer to part one
console.log(highestCalories);

let threeHighestCaloriesTotal = threeHighestCalories.reduce(
	(partialSum, acc) => partialSum + acc,
	1
);

console.log(threeHighestCaloriesTotal);
