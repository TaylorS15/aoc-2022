import fs from "fs";

//Import file as array split between each line
const inputArr: string[] = fs
	.readFileSync("./day3/day3-input.txt", "utf-8")
	.split("\r\n");

//Set variable to array of strings
let duplicates: string[] = [];

inputArr.forEach((string) => {
	//Separate each half of string into two different array values
	const firstHalf = string.slice(0, string.length / 2).split("");
	const secondHalf = string.slice(string.length / 2).split("");

	firstHalf.every((letter: string) => {
		//If secondHalf array includes current firstString letter, push that letter to duplicates and exit loop.
		//If not check next firstString letter.
		if (secondHalf.includes(letter)) {
			duplicates.push(letter);
			return false;
		} else {
			return true;
		}
	});
});

//Set every lowercase and uppercase letter to its own index value
const priorityValues = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

//Start sum of priority values at 0
let sumOfPriorityValues = 0;

duplicates.forEach((letter) => {
	priorityValues.find((value, index) => {
		//For each duplicate letter find its corresponding index value in priorityValues and add it to sumOfPriorityValues
		if (letter === value) {
			sumOfPriorityValues += index + 1;
		}
	});
});

//Part One Answer
console.log(sumOfPriorityValues);

//
let groupsOfThree: string[][] = [];
let groupOfThree: string[] = [];

for (let i = 0; i <= 99; i++) {
	groupOfThree.push(inputArr[3 * i], inputArr[3 * i + 1], inputArr[3 * i + 2]);
	groupsOfThree.push(groupOfThree);
	groupOfThree = [];
}

groupsOfThree.forEach((array) => {});
