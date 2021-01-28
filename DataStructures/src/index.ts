import {DayBuilder} from './CalendarBuilder/DayBuilder';
import {data, data2} from './CalendarBuilder/data.json';

const calendarDay = new DayBuilder(Object.values(data2));
const events = calendarDay.getEvents()
events.forEach(row => console.log(row.map(e => e ? e.event.eventID + ' ' + e.event.width + '%' : null )))