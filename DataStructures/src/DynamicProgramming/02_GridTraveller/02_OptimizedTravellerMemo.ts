type Memo = {[size: string]: number;};
const memo: Memo = {};
let counter = 0;
export function optimizedGridTraveller (n: number, m: number): number
{
	if (n < 1 || m < 1) throw new Error('Only positive integers');
	counter++;
	const key = `${ n }:${ m }`;
	const reverseKey = `${ m }:${ n }`;
	if (n === 1 || m === 1) memo[key] = 1;
	if (memo[key] || memo[reverseKey]) return memo[key] || memo[reverseKey];

	


	memo[key] = optimizedGridTraveller(n - 1, m) + optimizedGridTraveller(n, m - 1);
	return memo[key];
}

function roughSizeOfObject (object: any)
{

	const objectList = [];
	const stack = [object];
	let bytes = 0;

	while (stack.length) {
		const value = stack.pop();

		if (typeof value === 'boolean') {
			bytes += 4;
		}
		else if (typeof value === 'string') {
			bytes += value.length * 2;
		}
		else if (typeof value === 'number') {
			bytes += 8;
		}
		else if
			(
			typeof value === 'object'
			&& objectList.indexOf(value) === -1
		) {
			objectList.push(value);

			for (const i in value) {
				stack.push(value[i]);
			}
		}
	}
	return bytes;
}
export function optimizedTravelAndCount (m: number, n: number): void
{
	console.log('grid size:', m, 'times', n);
	console.log('possible solutions:', optimizedGridTraveller(m, n));
	console.log('how many calls:', counter);
	counter = 0;
	console.log('memo size:', roughSizeOfObject(memo) / 1024, 'MB roughly');
	// console.log(memo);

}