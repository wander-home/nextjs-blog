import path from 'path';
import {puzzlesData} from '../puzzles/puzzlesData.js';
 
export function getSortedPuzzlesData() {
    // Sort posts by date
    return puzzlesData.map((data, i) => {return {...data, id: String(i)}});
}

export function getAllPuzzleIds() {   
    return puzzlesData.map((puzzle, i) => {
      return {
        params: {
          id: String(i),
        },
      };
    });
  }

export async function getPuzzleData(id) {
    return puzzlesData[id];
}