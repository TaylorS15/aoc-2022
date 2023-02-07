import fs from "fs";

//Stringify input from filesystem read
const input = fs.readFileSync("./day1/day1-input.txt").toString();

/*
  Turns input into an array of the values of each line in the text file
  Returns array formatted as: ['5555', '', '4444', '6666']
*/
const inputArr = input.split("\r\n");

/*
  Set elfs to a number array of at least three numbers
  Set elf to be a temporary number array
*/
type ElfArray = [number, number, number, ...number[]];

let elfs: ElfArray = [0, 0, 0];
let elf: number[] = [];

inputArr.forEach((calorie: string) => {
	if (calorie !== "") {
		//Set the variable 'int' to the parsed number value of calorie
		let int = +calorie;

		//push that int value to elf
		elf.push(int);
	} else {
		//If calorie is an empty string then reduce elf to its total of all values and push total to elfs
		elfs.push(elf.reduce((partialSum, acc) => partialSum + acc, 0));

		//Then clear elf array
		elf = [];
	}
});

//Part One Answer: Find the highest calorie value in array elfs then print that value
const highestCalorie = Math.max(...elfs);
console.log(highestCalorie);

//Compare function to sort an array from greatest to least
const compareValues = (a: number, b: number): number => {
	return b - a;
};

//sort elfs from greatest to least
elfs.sort(compareValues);

//Set topThreeValues to the sum of the first three values of elfs after being sorted
let topThreeValues = elfs[0] + elfs[1] + elfs[2];

//Part Two Answer: Print topThreeValues
console.log(topThreeValues);
