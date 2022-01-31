// 4 Необходимо реализовать функцию, которая подсчитывает среднюю длину каждого слова в строке.
// Результатом вычисления функции является вещественное число, округленное до двух знаков после запятой.
// При передаче в функцию новой строки, она должна учитывать результаты предыдущих вычислений. 
// 
// Пример:
// "Я хорошо знаю javascript" -> 5.25
// "Но некоторые вопросы вызывают трудности, например замыкания." -> 6.64


(() => {
    let totalSum = 0;
    let totalWord = 0;


    function averageWordLength(word) {
        word = word.replace(/[^a-zа-яё\s]/gi, '');
        const newArr = word.split(' ');
        totalWord += newArr.length;

        let sum = totalSum;

        newArr.forEach(el => {
            sum += el.length;
        });

        totalSum = sum;

        const averageSum = (sum / totalWord).toFixed(2);

        console.log(`Средняя длинна каждого слова в строке составляет: ${averageSum} `);
        // return averageSum;
    }



    averageWordLength("Я хорошо знаю javascript")
    averageWordLength("Но некоторые вопросы вызывают трудности, например замыкания.")
    

})()



