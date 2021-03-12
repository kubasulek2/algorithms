type Memo = {[key: string]: number;};
type Fibo = {(n: number): number, memo: Memo;};

export const fibo = (() =>
{
	const f = <Fibo> function fibo (n: number): number
	{
		if (n <= 0) throw new RangeError("Fibonacci number must be positive integer");
		if (n in f.memo) return f.memo[n];
		f.memo[n] = fibo(n - 1) + fibo(n - 2);
		return f.memo[n];
	};
	f.memo = {1: 1, 2: 2} as Memo;
	return f;
})();