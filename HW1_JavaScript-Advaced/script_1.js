"use strict";

const composition = [
  {title: "Камнем по голове", artist: "Король и Шут", year: "1996"},
  {title: "Ride the Lightning", artist: "Metallica", year: "1984"},
  {title: "Abbey Road", artist: "The Beatles", year: "1969"},
  {title: "Группа крови", artist: "Кино", year: "1988"},
  {title: "The Wall", artist: "Pink Floyd", year: "1979"},
];

const musicCollection = {
  composition,
  *[Symbol.iterator]() {
    for (let i = 0; i < this.composition.length; i++) {
      yield `${this.composition[i].title} - ${this.composition[i].artist} (${this.composition[i].year})`;
    }
  }
};

for (const composition of musicCollection) {
  console.log(composition);
}