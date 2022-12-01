// Luxon.js from Moment.js
import { DateTime } from "luxon";
import moment from "moment-timezone";

const dayOfYear = DateTime.fromObject().toFormat('ooo').toString();
const week = DateTime.fromObject({}, { day: "local" }).weekNumber.toLocaleString();
const day = DateTime.fromObject ({}, { day: "local" }).weekday.toLocaleString();

document.querySelector('#dayOfYear').innerHTML = dayOfYear;
document.querySelector('#week').innerHTML = week;
document.querySelector('#day').innerHTML = day;

// Moment.js / Set timezone
const timeZoneName = moment.tz.guess();
const timeZoneAbbr = moment.tz(timeZoneName).format('z');

document.querySelector('#timezone').innerHTML = timeZoneName;
document.querySelector('#shortNameZone').innerHTML = timeZoneAbbr;



