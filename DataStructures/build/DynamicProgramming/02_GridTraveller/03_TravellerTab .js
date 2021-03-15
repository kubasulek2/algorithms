"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gridTab = void 0;
function gridTab(rows, cols) {
    /* Initial grid for traversal */
    const grid = Array.from(Array(rows + 1), () => Array(cols + 1).fill(0));
    /* Position [1][1] will reflect bascic one by one grid with exactly one way of traversing */
    grid[1][1] = 1;
    for (let r = 1; r < rows + 1; r++) {
        for (let c = 1; c < cols + 1; c++) {
            /* If not out of bound, increment right and  bottom neigbour by value of current grid cell */
            if (c + 1 <= cols)
                grid[r][c + 1] += grid[r][c];
            if (r + 1 <= rows)
                grid[r + 1][c] += grid[r][c];
        }
    }
    /* return last cell of a grid */
    return grid[rows][cols];
}
exports.gridTab = gridTab;
//# sourceMappingURL=03_TravellerTab%20.js.map