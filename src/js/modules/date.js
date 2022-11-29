// Moment.js lib, Luxon
import { DateTime } from "luxon";
const dt = DateTime.now();

const timezoneOption = {
    'timezone': dt.zoneName,
    'week day': dt.weekday.toLocaleString(),
    'week year': dt.weekNumber.toLocaleString(),
}

document.querySelector('#week').innerHTML = timezoneOption['week year'];
document.querySelector('#day').innerHTML = timezoneOption['week day'];
document.querySelector('#timezone').innerHTML = timezoneOption.timezone;



