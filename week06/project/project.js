
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
    /*newsList = data;
    console.log(newsList);*/
    let newsData = data["data"];
    console.log(newsData);
    /*
    Keys:
    author;
    description;
    image;
    source;
    title;
    url;
    */
    
    newsData.map(function(news){
    
    newsId = document.querySelector('#news');

    let article = document.createElement("article");
    let headingTwo = document.createElement("h2");
    let headingThree = document.createElement("h3");
    let image = document.createElement("img");
    let par = document.createElement("P");

    headingThree.textContent = news.title;
    par.textContent = news.desrcription;

    article.appendChild(headingThree)
    article.appendChild(par);
    newsId.appendChild(article);
    });
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