import fs from 'fs';

//Import file as array split between each line
const inputArr: string[] = fs
  .readFileSync('./day4/day4-input.txt', 'utf-8')
  .split('\r\n');

let assignmentsSplit: string[][][] = [];

function splitAssignments() {
  let assignments: string[][] = [];

  inputArr.forEach((string) => {
    const splitString = string.split(',');
    assignments.push(splitString);
  });

  assignments.forEach((string, index) => {
    const string1 = string[0].split('-');
    const string2 = string[1].split('-');
    const concat = [string1, string2];
    assignmentsSplit.push(concat);
  });
}

function compareAssignments() {
  let overlaps: number = 0;

  assignmentsSplit.forEach((array) => {
    if (array[0][0] >= array[1][0] && array[0][1] <= array[1][1]) {
      overlaps++;
      return;
    }

    if (array[1][0] >= array[0][0] && array[1][1] <= array[0][1]) {
      overlaps++;
      return;
    }
  });

  console.log(overlaps);
}

splitAssignments();
compareAssignments();
