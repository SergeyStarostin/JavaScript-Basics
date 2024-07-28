"use strict";

const cookingScedule = new Map([
  ["Пицца", "Виктор"],
  ["Суши", "Ольга"],
  ["Десерт", "Дмитрий"],
]);

const menu = new Map([
  ["Пицца", new Set(["Маргарита", "Пепперони"])],
  ["Суши", new Set(["Филадельфия", "Калифорния"])],
  ["Десерт", new Set(["Тирамису", "Чизкейк"])],
]);

class Client {
  constructor(firstname) {
    this.firstname = firstname;
  }
}

class Manager {
  finalOrder = new Map();
  count;
  newOrder(client, ...order) {
    this.count = 0;
    order.forEach((element) => {
      if (menu.get(element.type).has(element.name)) {
        this.count++;
      }
    });
    if (this.finalOrder.get(client) === undefined) {
      if (this.count === order.length) {
        this.finalOrder.set(client, order);
      }
    } else {
      if (this.count === order.length) {
        this.finalOrder.get(client).push(...order);
      }
    }
    if (this.count === order.length) {
      console.log(`Клиент ${client.firstname} заказал:`);
      const arr = formatArray(this.finalOrder.get(client));
      arr.forEach((e) => {
        const str = `${e.type} "${e.name}" готовит повар ${cookingScedule.get(e.type)}`;
        console.log(str);
      });
    }
  }
}

const formatArray = (array) => {
  let str = "";
  let index;
  for (let i = 0; i < array.length; i++) {
    str = array[i].name;
  }
  delete array[index];
  return array;
};

const manager = new Manager();

const clientAlex = new Client("Алексей");
manager.newOrder(
  clientAlex,
  { name: "Пепперони", type: "Пицца" },
  { name: "Тирамису", type: "Десерт" }
);

const clientMary = new Client("Мария");
manager.newOrder(
  clientMary,
  { name: "Калифорния", type: "Суши" },
  { name: "Маргарита", type: "Пицца" }
);

const clientIren = new Client("Ирина");
manager.newOrder(
  clientIren,
  { name: "Чизкейк", type: "Десерт" }
);
