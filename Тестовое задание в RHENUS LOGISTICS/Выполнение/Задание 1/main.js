// Необходимо реализовать функцию, которая возвращает сумму пропущенных чисел.
// Функция принимает массив целых чисел. 
// Результатом вычисления является сумма пропущенных чисел в 
// промежутке между минимальным и максимальным значением элементов переданного массива.

// Пример:

// [45, 48] //-> 93
// [1, 2, 3] //-> 0


(() => {

   const arr = [1, 3, 4, 6] //-> 7

   function sumMissedNumber(array) {
      let newArr = [];
      let i = Math.min.apply(null, array)
      for (i; i <= Math.max.apply(null, array); i++) {
         if (!array.includes(i)) {
            newArr.push(i);
         } else {
            newArr.push(0);
         }
      }
      const result = newArr.reduce((a, b) => a + b);
      return result;
   }

   let result = sumMissedNumber(arr);
   console.log(result);

})()