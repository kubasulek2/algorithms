export function fibTab(n: number) : number
{
	if(n < 0) throw new Error('Negative number means negative attitude');
	const tab = [0,1,1];
	for (let i = 3; i <= n; i++) {
		tab[i] = tab[i-1] + tab[i-2];	
	}
	return tab[n];
}