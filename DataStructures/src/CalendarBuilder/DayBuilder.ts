import { data } from './data.json';
export type DayItemsMatrix = (DayItem | null)[][];
export type CalendarEvent = typeof data["1"];
export type CalendarEvents = { [key: string]: CalendarEvent; };
export interface DayItem {
	render?: boolean;
	event: {
		eventID: number;
		width: number;
		leftOffset: number;
		topOffset?: 1;
		span: number;
	};
}
/**
 * This class takes array of events and builds a matrix with events ordered by hours and formated to take all available space 
 */
export class DayBuilder {
	private events: DayItemsMatrix;
	constructor (private eventArr: CalendarEvent[]) {
		this.events = Array.from(Array(48), () => []);
		this.build();
		this.setSize();
	}

	/**
	 * arrange events in two dimensional array, and fill empty indexes with nulls.
	 * @todo calculate topOffset from start date; work with real dates
	 */
	private build (): void {
		//process each row in constructor argument array
		this.eventArr.forEach(ev => {
			let position = 0;      // index in row for the event
			/* calculate start and end index from start and end date */
			const
				startIdx = ev.starts * 2,
				endIdx = ev.ends * 2,
				eventID = ev.id,
				event = { eventID, span: endIdx - startIdx, width: 0, leftOffset: 0 };

			/* iterate for all events rows injecting event reference in proper spots */
			for (let i = startIdx; i < endIdx; i++) {
				// calculate column in the first row
				if (i === startIdx) {
					if (this.events[i].length) {
						position = this.events[i].findIndex(el => !el);
						position = position === -1 ? this.events[i].length : position;
					}
					this.events[i][position] = { render: true, event };

				} else {
					this.events[i][position] = { event };
				}

			}
		});
		// calculate max array width
		const maxArrayWidth = this.events.reduce((acc, el) => acc = el.length > acc ? el.length : acc, 0);

		// make sure all rows will be same width and all empty spots will be nulls
		for (let i = 0; i < this.events.length; i++) {
			const row = this.events[i];
			for (let j = 0; j < maxArrayWidth; j++) {
				if (!row[j]) row[j] = null;
			}
		}

	}


	private calculateEventSize (event: DayItem['event'], row: number, column: number): void {
		const { span } = event;
		const rowLength = this.events[0].length;
		/* initialize max size for one cell, calculate it later */
		let maxSize = 1;

		// shift from the start of the row in percents
		event.leftOffset = Number((Math.floor((column / rowLength) * 10000) / 100).toFixed(2));

		/* iterate over event row span, chcecking possible */
		for (let i = row; i < row + span; i++) {
			// in first row, calculate maxSize
			if (i === row) {
				while (this.events[i][column + maxSize] === null) {
					maxSize++;
				}
				event.width = maxSize;
				// for performance reasons check next rows only if maxSize is bigger than one after first row 
			} else if (maxSize > 1) {
				maxSize = 1;
				while (this.events[i][column + maxSize] === null) {
					maxSize++;
				}
				// override maxsize if smaller than before, because it cent be bigger than in tightest row
				if (event.width > maxSize) event.width = maxSize;
				// break loop if maxsize === 1
			} else { break; }
		}
		// then calculate width in percents based on array width and maxSize
		event.width = Number((Math.floor((event.width / rowLength) * 10000) / 100).toFixed(2));
	}

	/**
	 * work through all events calculating its size
	 */
	private setSize (): void {
		// check each row
		for (let i = 0; i < this.events.length; i++) {
			const row = this.events[i];
			// check each event in a row
			for (let j = 0; j < Math.max(this.events[i].length, 3); j++) {
				const element = row[j];
				// only if event (can be null null), and event is encountered for the first time 
				// (element.render is set only once for each event), otherwise skip
				if (!element || !element.render) { continue; }
				const { event } = element;
				// calculate size for this particular event
				this.calculateEventSize(event, i, j);
			}
		}

	}
	/**
	 * get private events
	 */
	public getEvents (): Readonly<(DayItem | null)[][]> {
		return this.events;
	}

}

/*
[a,b,c] 0+0+0 length / 3
[a,d,d]
[a,d,d]
[a,d,d]
[a,e,e]
[f,f,f]
*/