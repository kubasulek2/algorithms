export class HashTable {
	private keyMap: [string, any][][];
	constructor (size = 53) {
		this.keyMap = new Array(size);
	}

	private _hash (key: string) {
		let total = 0;
		const PRIME_NUM = 43;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let val = key[i].codePointAt(0) as number - 96;
			total = (total * PRIME_NUM + val) % this.keyMap.length;
		}
		return total;
	}

	public set (key: string, val: any): void {
		const index = this._hash(key);
		this.keyMap[index] ?? (this.keyMap[index] = []);
		this.keyMap[index].push([key, val]);
	}
	public get (key: string): any | undefined {
		const index = this._hash(key);
		if (this.keyMap[index]) {
			for (const tuple of this.keyMap[index]) {
				if (tuple[0] === key) return tuple[1];
			}
		}
		return undefined;
	}

	public keys(): string[] {
		let keys: string[] = [];
		for(const element of this.keyMap) {
			if(element){
				for (const tuple of element) {
					keys.push(tuple[0]);
				}
			}
		}
		return keys;
	}

	public values(): any[] {
		let values: any[] = [];
		for(const element of this.keyMap) {
			if(element){
				for (const tuple of element) {
					values.push(tuple[1]);
				}
			}
		}
		return values;
	}

}