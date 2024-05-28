/*
Напишите HTTP сервер и реализуйте два обработчика, где:
— По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
— А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
— Также реализуйте обработку несуществующих роутов (404).
— * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница. */

const http = require('http');

let about_cnt=0;
let main_cnt=0;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
    });
    res.end(`<a href="/about">About</a><br>Counter ${++about_cnt}`)
    
    } else if (req.url === '/about') {
        res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
    });
    res.end(`<a href="/">Main</a><br>Counter ${++main_cnt}`)
    } else {
        res.writeHead(404, {
        'Content-Type': 'text/html; charset=UTF-8'
    });
    res.end('<h1>Страница не найдена</h1>')
    }

    console.log("Запрос получен");
})
const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})