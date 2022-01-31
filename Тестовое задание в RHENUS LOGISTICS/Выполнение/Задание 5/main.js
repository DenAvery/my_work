// Необходимо реализовать функцию, которая находит все различные пути между двумя точками, находящимися на прямоугольной сетке.
// Аргументом функции является объект с координатами точки, причем координаты точки представлены в виде натуральных чисел. 
// Перемещаться разрешено только по горизонтали или вертикали вдоль сетки таким образом, чтобы расстояние между точками не увеличивалось. 
// Цель задачи – вернуться к началу координат. 
// Путем считается минимальное общее количество вертикальных и горизонтальных шагов. Два пути различны, 
// если на этом пути есть хотя бы один шаг, который отличается, даже если большинство шагов одинаковы.
// Функция возвращает количество различных путей.
// 
// Пример: 
// {x: 0, y: 1} -> 1
// {x: 1, y: 1} -> 2
// {x: 2, y: 2} -> 6

(() => {
    let array = [];

const point = {x: 1, y: 1};

let way = []



function searchWays(start, end = {x: 0, y: 0}) {
    
    if(start.x === end.x && start.y === end.y) {
        way.push(end);
        array.push(way)
    }

    else {
         if(start.x != end.x) {
            way.push({x: start.x, y: start.y})
             start.x -= 1;
             searchWays(start)
         }

         else if(start.y != end.y) {
            way.push({x: start.x, y: start.y})
            start.y -= 1;
            searchWays(start)
         }
    }
    
} 




searchWays(point);
console.log(array)
}) ()


// К сожалению, я не смог решить эту задачу … Думаю, что рекурсия это правильный выбор, а вот дальше у меня не хватило знаний и опыта. 
// Я очень хочу стать разработчиком, познакомиться с единомышленниками, воплощать проекты в реальность и стать частью классной команды.
// Спасибо, что заметили меня! Буду ждать Вашего решения. 
// 
// P.S. Большая просьба дать обратную связь, если решение по моей кандидатуре будет отрицательное. 
// Мне очень важно работать над собой и своими ошибками, также, если возможно, пришлите, пожалуйста, решение 5-ой задачи – я ее разберу. Заранее большое спасибо!   
