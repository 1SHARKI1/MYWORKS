const canvas = document.getElementById("game") //получение контейнера для игры
const ctx = canvas.getContext("2d") //задаем контейнеру тип игры "2d"

const ground = new Image() //создаем изображение и присваиваем ей путь к изображению поля
ground.src = "img/field.png"

const foodImg = new Image() //создаем изображение и присваиваем ей путь к изображению еды
foodImg.src = "img/food.png"

let box = 32 //создаем переменную в которой хранятся данные для обозначения размера поля для еды и змейки

let score = 0 //создаем переменную в которой хранится изачальное значения счета в игре

let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
} //создаем переменную которая отвечает за появление еды в рандомной точке на поле

let snake = [] //создаем змейку в виде массива данных
snake[0] = {
    x: 9 * box,
    y: 10 * box
} //задаем массиву данных (змейке) начальную позицую 

document.addEventListener("keydown", direction) //создаем обработчик события который вызывает функцию при нажатии определнных клавиш

let dir; //пуста переменная для записи движения

function direction(event) {
    if (event.keyCode == 37 && dir != "right")
      dir = "left"
    else if (event.keyCode == 38 && dir != "down")
      dir = "up"
    else if (event.keyCode == 39 && dir != "left")
      dir = "right" 
    else if (event.keyCode == 40 && dir != "up")
      dir = "down" 
} //задаем для переменной значения стрелочек

function eatTail(head, arr) {
    for(let i = 0; i < arr.length; i++) {
        if(head.x == arr[i].x && head.y == arr[i].y)
          clearInterval(game)
    }
} //создаем функцию в которой лежит массив которой проверяет не ест ли змейка сама себя

function drawGame() {
    ctx.drawImage(ground, 0, 0) //создаем функцию которая рисует изображение поля

    ctx.drawImage(foodImg, food.x, food.y) //создаем функцию которая рисует изображение еды по заданным коориданат x и y

    for(let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i == 0 ? "green" : "red";
        ctx.fillRect(snake[i].x, snake[i].y, box, box)
    } // создаем цикл в котором рисуем змейку и определяем её местоположение с помощью массива, который мы сделали до этого

    ctx.fillStyle = "white"
    ctx.font = "50px Arial"
    ctx.fillText(score, box * 2.5, box * 1.7) //прописываем положение для счетчика в игре

    let snakeX = snake[0].x
    let snakeY = snake[0].y //записываем в переменные начальне координаты змейки

    if(snakeX == food.x && snakeY == food.y) {
        score++
        food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box
        } //добавляем новый элемент в массив если змейка ест еду и добавляем новое место еды и увеличиваем счет
    } else {
        snake.pop(); //удаляем из массива последний элемент если ничего не произошло тем самым просто перемещаем змейку путем удаления старого элемента массива и создания нового на другом месте
    }

    if(snakeX < box || snakeX > box * 17
      || snakeY < 3 * box || snakeY > box * 17)
      clearInterval(game)//создаем условие при котором игра заканчивается когда змейка заходит на бортики

    if(dir == "left") snakeX -= box
    if(dir == "right") snakeX +=box
    if(dir == "up") snakeY -= box
    if(dir == "down") snakeY +=box //анимируем передвижение змейки по стрелочками

    let newHead = {
        x: snakeX,
        y: snakeY
    } //создаем переменную с новой головой змейки, чтобы уже этот объект двигался

    eatTail(newHead, snake) //вызываем  функцию, в качестве параметров передаем голову и тело змейки

    snake.unshift(newHead) //добавляем объяект с новыми координатами в наш массив
} 

let game = setInterval(drawGame, 100) //создаем переменную которая вызывает функцию каждые 100 милисекунд и получаем статичное изображение
