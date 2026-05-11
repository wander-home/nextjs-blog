import { puzzlesData } from "../puzzles/puzzlesData.js";
import { tagsData, genres } from "../puzzles/tagsData.js";

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

export function getPuzzleData(id) {
  return puzzlesData[id];
}

export function getMostRecentPuzzle() {
  const lastId = puzzlesData.length - 1;
  return { ...getPuzzleData(lastId), id: String(lastId) };
}

export function getPuzzlesWithTag(tag) {
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

export function getNumberOfPuzzlesByGenre() {
  const puzzlesPerGenre = {};
  const genreTags = genres;
  puzzlesData.forEach((data) => {
    for (const tag of data.tags) {
      if (genreTags.includes(tag)) {
        puzzlesPerGenre[tag] = puzzlesPerGenre[tag]
          ? puzzlesPerGenre[tag] + 1
          : 1;
      }
    }
  });
  return puzzlesPerGenre;
}
