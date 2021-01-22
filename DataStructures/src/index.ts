import {performance} from 'perf_hooks'
import { areArraysAnagrams } from "./areArraysAnagrams";

function generateArrays (len: number) {
		return [0, 1].map(_ => Array.from({ length: len }, () => Math.floor(Math.random() * len / 3)));
}

const arrays_1 = generateArrays(1000);
const arrays_2 = generateArrays(10000);
const arrays_3 = generateArrays(100000);

const arrays_4 = generateArrays(1000000);
const performanceMeasure = (name: string, args: unknown[], cb: Function): void => {
	const start = performance.now();
	cb(...args)
	const stop = performance.now();
	const time = stop - start;
	console.log(`Time for ${name}: ${time}ms`)
}

performanceMeasure('1000s', arrays_1, areArraysAnagrams);
performanceMeasure('10000s', arrays_2, areArraysAnagrams);

performanceMeasure('100000s', arrays_3, areArraysAnagrams);
performanceMeasure('1000000s', arrays_4, areArraysAnagrams);
