type Memo = {[size: string]: number;};
/**
 * keys shape like follows: '2:3', '4:6'
 */
const memo: Memo = {};

let counter = 0;

export function gridTraveller (n: number, m: number): number
{
	counter++;
	if (memo[`${ n }:${ m }`]) return memo[`${ n }:${ m }`];
	if (n <= 0 || m <= 0) return 0;
	if (n === 1 || m === 1) {
		memo[`${ n }:${ m }`] = 1;
		memo[`${ m }:${ n }`] = 1;
		return 1;
	}


	memo[`${ n }:${ m }`] = memo[`${ m }:${ n }`] = gridTraveller(n - 1, m) + gridTraveller(n, m - 1);
	return memo[`${ n }:${ m }`];
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



export function travelAndCount (m: number, n: number): void
{
	console.log('grid size:', m, 'times', n);
	console.log('possible solutions:', gridTraveller(m, n));
	console.log('how many calls:', counter);
	counter = 0;
	console.log('memo size:', roughSizeOfObject(memo) / 1024, 'MB roughly');

}





