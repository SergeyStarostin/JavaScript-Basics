"use strict";

const courseScedule = [
  {
    id: 1,
    name: "Йога",
    time: "10:00 - 11:00",
    maxParticipants: 15,
    currentParticipants: 8,
  },
  {
    id: 2,
    name: "Пилатес",
    time: "11:30 - 12:30",
    maxParticipants: 10,
    currentParticipants: 5,
  },
  {
    id: 3,
    name: "Кроссфит",
    time: "13:00 - 14:00",
    maxParticipants: 20,
    currentParticipants: 20,
  },
  {
    id: 4,
    name: "Танцы",
    time: "14:30 - 15:30",
    maxParticipants: 12,
    currentParticipants: 12,
  },
  {
    id: 5,
    name: "Бокс",
    time: "16:00 - 17:00",
    maxParticipants: 8,
    currentParticipants: 6,
  },
];

const storageKey = "signUpTraining";
const section = document.querySelector(".container");

courseScedule.forEach((element) => {
  let cancelButtonAttribute = "disabled";
  let signUpButtonAttribute = "";
  if (element.currentParticipants >= element.maxParticipants) {
    signUpButtonAttribute = "disabled";
  }
  const array = JSON.parse(localStorage.getItem(storageKey));
  if (array != null) {
    array.forEach((elem) => {
      if (elem.id === element.id) {
        element.currentParticipants += 1;
        cancelButtonAttribute = "";
        signUpButtonAttribute = "disabled";
      }
    });
  }

  section.insertAdjacentHTML(
    "afterbegin",
    dataOutput(element, signUpButtonAttribute, cancelButtonAttribute)
  );
});

function dataOutput(item, signUp, cancel) {
  return `
      <div class="itemTraining">
        <h4>Занятие: ${item.name}</h4>
            <p>Время проведения: ${item.time}</p>
            <p>Максимальное количество мест: ${item.maxParticipants}</p>
            <p class="currentParticipants">Текущее количеставо участников: <span class="countCurrentParticipants">${item.currentParticipants}</span></p>
            <button ${signUp} onClick="signUp(this, ${item.id})" class="sign-up-button">Записаться</button>
            <button ${cancel} onClick="cancelRecording(this, ${item.id})" class="cancel-button">Отменить запись</button>
         <hr>
      </div>
   `;
}

function signUp(item, id) {
  const countCurrentParticipants = item.parentElement.getElementsByClassName(
    "countCurrentParticipants"
  );

  const cancelButton = item.parentElement.getElementsByClassName(
    "cancel-button"
  );

  countCurrentParticipants.item(0).textContent =
    Number(countCurrentParticipants.item(0).textContent) + 1;

    cancelButton.item(0).disabled = false;

  item.disabled = true;

  saveLocalStorage(id);
}

function cancelRecording(item, id) {
  const countCurrentParticipants = item.parentElement.getElementsByClassName(
    "countCurrentParticipants"
  );

  const signUpButton =
    item.parentElement.getElementsByClassName("sign-up-button");

  countCurrentParticipants.item(0).textContent =
    Number(countCurrentParticipants.item(0).textContent) - 1;

    signUpButton.item(0).disabled = false;

  item.disabled = true;

  removeLocalStorage(id);
}

function saveLocalStorage(id) {
  let record = localStorage.getItem(storageKey);
  if (record === null) {
    record = JSON.stringify([{ id: id }]);
  } else {
    const arr = JSON.parse(record);
    arr.push({ id: id });
    record = JSON.stringify(arr);
  }
  localStorage.setItem(storageKey, record);
}

function removeLocalStorage(id) {
  let arr;
  let record = localStorage.getItem(storageKey);
  if (record !== null) {
    arr = JSON.parse(record);
    const index = arr.indexOf(arr.find((it) => it.id === id));
    arr.splice(index, 1);
    record = JSON.stringify(arr);
  }
  if (arr.length !== 0) {
    localStorage.setItem(storageKey, record);
  } else {
    localStorage.removeItem(storageKey);
  }
}
