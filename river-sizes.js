function riverSizes(matrix) {
  const sizes = [];
  const visited = matrix.map(row => row.map(() => false));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;

      traverseRiver(i, j, matrix, visited, sizes);
    }
  }

  return sizes;
}

function traverseRiver(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;
  const stack = [[i, j]];

  while (stack.length > 0) {
    const [row, col] = stack.pop();

    if (visited[row][col]) continue;
    visited[row][col] = true;

    if (matrix[row][col] === 0) continue;

    currentRiverSize++;

    const neighbors = getUnvisitedNeighbors(row, col, matrix, visited);
    for (const neighbor of neighbors) {
      stack.push(neighbor);
    }
  }

  if (currentRiverSize > 0) {
    sizes.push(currentRiverSize);
  }
}

function getUnvisitedNeighbors(row, col, matrix, visited) {
  const neighbors = [];

  if (row > 0 && !visited[row - 1][col]) neighbors.push([row - 1, col]);
  if (row < matrix.length - 1 && !visited[row + 1][col]) neighbors.push([row + 1, col]);
  if (col > 0 && !visited[row][col - 1]) neighbors.push([row, col - 1]);
  if (col < matrix[row].length - 1 && !visited[row][col + 1]) neighbors.push([row, col + 1]);

  return neighbors;
}


const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
];

console.log(riverSizes(matrix));
// Output: [2, 1, 5, 2, 2] (order may vary)

/**
"I iterate through every cell in the matrix.
Whenever I encounter a 1 that hasn’t been visited, I start a DFS from that cell to explore the entire river.
During the DFS, I count all horizontally and vertically connected 1s and mark them visited to avoid double counting.
Once the traversal ends, I store the river size.
This ensures every cell is processed once, giving linear time complexity."

If They Ask: Why DFS?
"Because a river is essentially a connected component in a grid, and DFS is a natural way to show connectivity."

If They Ask: Time & Space Complexity
"Time complexity is O(w * h) since every cell is visited once.
Space complexity is also O(w * h) due to the visited matrix and DFS stack."

If They Ask: Why a Visited Matrix?
"Without it, we’d revisit the same cells and overcount rivers. It guarantees correctness."
 */
