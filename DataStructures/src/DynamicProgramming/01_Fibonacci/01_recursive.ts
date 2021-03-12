export function fibo(n: number): number{
	if (n <= 0) throw new RangeError("Fibonacci number must be positive integer");
	else if (n<=2) return 1;

	return fibo(n-1) + fibo(n-2);
}