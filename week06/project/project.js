//Presentation
document.getElementById('yourName').innerHTML = "visitor!";

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
//Object to append all the news
newsList = [];

//Function to filter and show all the news
function output(data) {
    newList = data;
    console.log(newList);
    newsArticle = newList["articles"];
    console.log(newsArticle);
        
    newsArticle.map(function(news){
    
    newsId = document.querySelector('#news');

    /*Creating html elements: 
    Keys to use:
    title
    source
    urlToImage
    url
    publishedAt
    */
    let article = document.createElement("article");
    let headingTitle = document.createElement("h3");
    let headingSource = document.createElement("h4");
    let image = document.createElement("img");
    let url = document.createElement("a");
    let parDate = document.createElement("h6")
    
    //Adding values
    headingTitle.textContent = news.title;
    url.textContent = news.desrcription;
    image.src = news.urlToImage;
    parDate.textContent = news.publishedAt;
    headingSource.textContent = news.source["name"];
    url.href = news.url;

    //Appending it into the html file as children and filter it 
    article.appendChild(headingTitle);
    article.appendChild(headingSource);
    article.appendChild(image);
    article.appendChild(url);
    url.innerHTML = "<p>More info</p>";
    article.appendChild(parDate);
    newsId.appendChild(article);

    });
}

//Receiving the news using API 
async function getNews() {
    const urlNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ad6e81177daa4389ab5a7119549d6772';
    /*api key ad6e81177daa4389ab5a7119549d6772
    Calling through JSON and fetch function*/
    const response = await fetch(urlNews);
    if (response.ok) {
        const data = await response.json();
        output(data);
    }
}

getNews(newsList);