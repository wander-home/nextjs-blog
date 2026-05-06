import { puzzlesData } from "../puzzles/puzzlesData.js";
import { tagsData } from "../puzzles/tagsData.js";

export function getSortedPuzzlesData() {
  return puzzlesData.map((data, i) => {
    return { ...data, id: String(i) };
  });
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

export async function getPuzzlesWithTag(tag) {
  const puzzleData = getSortedPuzzlesData();
  return puzzleData.filter((puzzle) => {
    return puzzle.tags && puzzle.tags.includes(tag);
  });
}

export function getAllTagIds() {
  return tagsData.map((tag) => {
    return {
      params: {
        tag,
      },
    };
  });
}
