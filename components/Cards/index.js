// // STEP 3: Create Article cards.
// // -----------------------
// // Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// // Stduy the response data you get back, closely.
// // You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
const cardsContainer = document.querySelector(".cards-container");
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    Object.keys(response.data.articles).forEach(tab => {
      response.data.articles[tab].forEach(article => {
        cardsContainer.appendChild(cardCreator(article));
      });
    });
  })
  .catch(error => { console.log(error)});
// // Create a function that will programmatically create the following DOM component:
// //
// // <div class="card">
// //   <div class="headline">{Headline of article}</div>
// //   <div class="author">
// //     <div class="img-container">
// //       <img src={url of authors image} />
// //     </div>
// //     <span>By {authors name}</span>
// //   </div>
// // </div>

function cardCreator(article) {
  const cardDiv = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImgContainer = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardSpan = document.createElement("span");

  cardDiv.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImgContainer.classList.add("img-container");

  cardHeadline.textContent = article.headline;
  cardImg.setAttribute("src", article.authorPhoto);
  cardSpan.textContent = `By ${article.authorName}`;

  cardDiv.appendChild(cardHeadline);
  cardDiv.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImgContainer);
  cardImgContainer.appendChild(cardImg);
  cardAuthor.appendChild(cardSpan);

  return cardDiv;
}
// //
// // Create a card for each of the articles and add the card to the DOM.

