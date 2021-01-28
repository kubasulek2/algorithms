"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DayBuilder_1 = require("./CalendarBuilder/DayBuilder");
const data_json_1 = require("./CalendarBuilder/data.json");
const calendarDay = new DayBuilder_1.DayBuilder(Object.values(data_json_1.data2));
const events = calendarDay.getEvents();
events.forEach(row => console.log(row.map(e => e ? e.event.eventID + ' ' + e.event.width + '%' : null)));
//# sourceMappingURL=index.js.map