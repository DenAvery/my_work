// 3 Необходимо реализовать функцию, подсчитывающую рейтинг. 
// На вход передается массив из пяти целых чисел, где каждое число отображает количество 
// голосов пользователей на звезду. Первый элемент содержит количество оценок «1 звезда», последний – количество оценок, когда пользователь нажал на 5 звезд.
// Функция возвращает массив, где первое значение — это средний рейтинг звезд, округленный до двух знаков. Второй элемент массив отображает рейтинг в виде строки «***».

// Пример:
(() => {

    const arrOne = [0, 2, 0, 1, 23] //-> [4.73, "*****"]
    const arrTwo = [16, 17, 23, 40, 45] //-> [3.57, "****"]
    const arrThree = [55, 67, 98, 115, 61] //-> [3.15, "***"]
    
    
    function getSum(array) {
        let sum = 0;
        array.forEach(element => {
            sum += element;
        });
        return(sum);
    }
    
    function getStars(num) {
        num = Math.round(num);
        let stars = '';
        for(let i = 0; i < num; i++) {
            stars += '*';
        }
        return stars;
    }
    
    function checkRaring(array) {
        const newArr = [];
        array.forEach(el => {
            newArr.push(el * (array.indexOf(el) + 1));
        })
    
        const totalValue = getSum(newArr);
        const totalVotes = getSum(array);
        const ratingValue = totalValue / totalVotes;
        const rating = +ratingValue.toFixed(2);
    
        const ratingArray = [];
    
        ratingArray.push(rating, getStars(rating))
        return ratingArray;
    }
    
    const result = checkRaring(arrOne)
    console.log(result);

})()