const api_url = "https://api.quotable.io/random";
async function getquote(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  display(data);
  hii(data);
}
display = (data) => {
  quote = document.querySelector(".quote");
  author = document.querySelector(".author");
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
};
getquote(api_url);

newquote = document.querySelector(".newquote");
newquote.addEventListener("click", () => {
  getquote(api_url);
});

tweet = document.querySelector(".tweet");
tweet.addEventListener(
  "click",
  (hii = () => {
  author = document.querySelector(".author");

    quote = document.querySelector(".quote");
    window.open(
      "https://twitter.com/intent/tweet?text=" + quote.innerHTML+"--"+author.innerHTML,
      "tweetwindow",
      "width=600,height=300"
    );
  })
);
