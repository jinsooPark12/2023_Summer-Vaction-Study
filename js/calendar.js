const calendar = document.querySelector("#calendar");
const dayofWeek = document.querySelector("#day-week");
const dayofWeekList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getCalendar() {
    const date = new Date();
    const day = String(date.getDate());
    const month = String(date.getMonth() + 1);
    const year = String(date.getFullYear());
    const todayWeek = date.getDay();
    calendar.innerText = `${year} - ${month} - ${day}`;
    dayofWeek.innerText = `${dayofWeekList[todayWeek]}`;
    if (todayWeek == 6){
        dayofWeek.classList.remove("sun", "weekday");
        dayofWeek.classList.add("sat");
    }
    else if (todayWeek == 0) {
        dayofWeek.classList.remove("sun", "weekday");
        dayofWeek.classList.add("sat");
    }
    else if (todayWeek == 0) {
        dayofWeek.classList.remove("sat", "weekday");
        dayofWeek.classList.add("sun");
    }
    else {
        dayofWeek.classList.remove("sun", "sat");
        dayofWeek.classList.add("weekday");
    }
}
getCalendar();