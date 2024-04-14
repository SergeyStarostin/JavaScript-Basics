"use strict";

function decodeHTMLEntities(inputString) {
  const doc = new DOMParser().parseFromString(inputString, "text/html");
  return doc.documentElement.textContent;
}

const content = document.querySelector(".movies");
const data = JSON.parse(dataInfo);
data.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("item");

  const img = document.createElement("img");
  img.classList.add("item-img");
  img.src = item.thumb_url;
  img.alt = `${decodeHTMLEntities(item.name)} (${item.year})`;
  div.append(img);

  const itemContent = document.createElement("div");
  itemContent.classList.add("item-content");
  div.append(itemContent);

  const title = document.createElement("h2");
  title.classList.add("item-title");
  title.innerHTML = `<a href="https://www.imdb.com/${item.imdb_url}" target="_blank">${item.name}</a>`;
  itemContent.append(title);

  const year = document.createElement("h4");
  year.classList.add("item-year");
  year.textContent = item.year;
  itemContent.append(year);

  const rating = document.createElement("h4");
  rating.classList.add("item-rating");
  rating.textContent = `\u2605 ${item.rating}`;
  itemContent.append(rating);

  const genre = document.createElement("h4");
  genre.classList.add("item-genre");
  genre.textContent = `Genre: ${decodeHTMLEntities(item.genre.join(", "))}`;
  itemContent.append(genre);

  const directors = document.createElement("h3");
  directors.classList.add("item-cast");
  directors.textContent = `Director: ${decodeHTMLEntities(
    item.directors.join(", ")
  )}`;
  itemContent.append(directors);

  const actors = document.createElement("h3");
  actors.classList.add("item-cast");
  actors.textContent = `Cast: ${decodeHTMLEntities(item.actors.join(", "))}`;
  itemContent.append(actors);

  const desc = document.createElement("p");
  desc.classList.add("item-desc");
  desc.textContent = decodeHTMLEntities(item.desc);
  itemContent.append(desc);

  content.prepend(div);
});
