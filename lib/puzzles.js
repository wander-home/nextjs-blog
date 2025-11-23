import path from 'path';
import {blogPuzzlesObject, blogPuzzlesArray} from '../puzzles/blog.js';
 
const puzzlesDirectory = path.join(process.cwd(), 'puzzles');
 
export function getSortedPuzzlesData() {
    // Get all puzzle data from source files
    const allPuzzlesData = blogPuzzlesArray;
    // Sort posts by date
    return allPuzzlesData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    // Get all puzzle data from source files
    const allPuzzlesData = blogPuzzlesArray;
   
    return allPuzzlesData.map((puzzle) => {
      return {
        params: {
          id: puzzle.id,
        },
      };
    });
  }

export async function getPostData(id) {
    // Get all puzzle data from source files
    const allPuzzlesData = blogPuzzlesObject;

    return allPuzzlesData[id];
}