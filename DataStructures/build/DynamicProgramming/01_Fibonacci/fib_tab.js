"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibTab = void 0;
function fibTab(n) {
    if (n < 0)
        throw new Error('Negative number means negative attitude');
    const tab = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        tab[i] = tab[i - 1] + tab[i - 2];
    }
    return tab[n];
}
exports.fibTab = fibTab;
//# sourceMappingURL=fib_tab.js.map