function updateClock() {
    var now = new Date();
    var dayName = now.getDay();
    var month = now.getMonth();
    var dayNumber = now.getDate();
    var year = now.getFullYear();
    var hour = now.getHours().toLocaleString(undefined, {minimumIntegerDigits:1});
    var minute = now.getMinutes().toLocaleString(undefined, {minimumIntegerDigits:2});
    var second = now.getSeconds().toLocaleString(undefined, {minimumIntegerDigits:2});
    var dayPeriod = "AM";

    if(hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        dayPeriod = "PM";
    } else {
        dayPeriod = "AM";
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["day-name", "month", "day-number", "year", "hour", "minute", "second", "period"];
    var values = [weekdays[dayName], months[month], String(dayNumber), String(year), hour, minute, second, dayPeriod];

    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = values[i]
        
    }
}

function initClock() {
    updateClock();
    window.setTimeout(initClock, 1000)
}
