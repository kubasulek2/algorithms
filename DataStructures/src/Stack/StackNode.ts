import { StackNode } from './Stack';

export class SNode<T> implements StackNode<T> {
	public next = null;
	constructor (public value: T) { }
}

