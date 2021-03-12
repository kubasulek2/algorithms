/**
 * Move n number of disks from source rod to target rod using auxiliary rod.
 * Rods are ordered from smallest on top to largest on the bottom, and this order must be mantained durning moving disks around
 * Only one disk can be move at a time.
 */
function hanoiSolver (n, source = 'X', target = 'Y', auxiliary = 'Z') {
	const displayMove = (source, target) => console.log(`${source} -> ${target}`);
	if (n === 1) return displayMove(source, target);
	hanoiSolver(n - 1, source, auxiliary, target);
	displayMove(source, target);
	hanoiSolver(n - 1, auxiliary, target, source);
}

/**
 * Move n number of disks from source rod to target rod using auxiliary rod.
 * Rods are ordered from smallest on top to largest on the bottom, and this order must be mantained durning moving disks around
 * Only one disk can be move at a time.
 * @param {number} n - number of elements in source array
 * @param {number[]} source - source array, with extra property name attached
 * @param {string} source.name
 * @param {number[]} target - target array, with extra property name attached
 * @param {string} source.name
 * @param {number[]} auxiliary - auxiliary array, with extra property name attached
 * @param {string} source.name
 */
function hanoiArraySolver (n, source, target, auxiliary) {
	const displayMove = (element, source, target) => console.log(`${element} moving from ${source.name} to ${target.name}`);
	if (n > 0) {
		hanoiArraySolver(n - 1, source, auxiliary, target);
		const element = source.pop()
		displayMove(element, source, target);
		target.push(element);
		hanoiArraySolver(n - 1, auxiliary, target, source);
	}
	return target;
}

const source = [1, 2, 3, 4], target = [], auxiliary = [];
source.name = 'A', target.name = 'B', auxiliary.name = 'C';
console.log(hanoiArraySolver(3, source,target,auxiliary));