
myName = "Willian";
document.getElementById('yourName').innerHTML = myName;
//Show the current time 
const date = new Date();

let dayOfWeek = date.getDay();

const nameWeek = ["Monday", "Tuesday", "Wednesday", "Thurdsay", "Friday", "Saturday", "Sunday"];
const nameMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentDay = date.getDate();
const currentWeek = nameWeek[date.getDay()];
const currentMonth = nameMonth[date.getMonth()];
const currentYear = date.getFullYear();

document.getElementById('currentDay').innerHTML = `${currentWeek} ${currentDay}, ${currentMonth} ${currentYear}.`;

/*Second part*/
newsList = [];

function output(data) {
    newsList = data;
    console.log(newsList);
}


async function getNews() {
    const urlNews = 'http://api.mediastack.com/v1/news?access_key=b859ef733e2609ad61e1723b75e411e9';
    const response = await fetch(urlNews);
    if (response.ok) {
        const data = await response.json();
        output(data);
    }
}

getNews(newsList);