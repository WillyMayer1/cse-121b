
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
    newList = data;
    console.log(newList);
    newsArticle = newList["articles"];
    console.log(newsArticle);
        
    newsArticle.map(function(news){
    
    newsId = document.querySelector('#news');

    let article = document.createElement("article");
    let headingTwo = document.createElement("h2");
    let headingThree = document.createElement("h3");
    let image = document.createElement("img");
    let par = document.createElement("p");
    let parDate = document.createElement("h6")
    let headingFourSource = document.createElement("h4");
    let urlInfo = document.createElement("a");

    headingThree.textContent = news.title;
    par.textContent = news.desrcription;
    image.src = news.urlToImage;
    parDate.textContent = news.publishedAt;
    headingFourSource.textContent = news.source["name"];
    urlInfo.href = news.url;

    article.appendChild(headingThree)
    article.appendChild(headingFourSource);
    article.appendChild(par);
    article.appendChild(image);
    article.appendChild(urlInfo);
    urlInfo.innerHTML = "<p>More info</p>";
    article.appendChild(parDate);
    newsId.appendChild(article);

    });
}


async function getNews() {
    const urlNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ad6e81177daa4389ab5a7119549d6772';
    //api key ad6e81177daa4389ab5a7119549d6772
    const response = await fetch(urlNews);
    if (response.ok) {
        const data = await response.json();
        output(data);
    }
}

getNews(newsList);