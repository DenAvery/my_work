// Необходимо расширить список стандартных методов массива, путем добавления новой функции объединения двух массивов.
// Расширяемый метод не должен переопределять метод массива, если такой уже определен.
// Результатом работы функции является новый массив, включающий элементы первого и второго массива, отсортированные в порядке возрастания. 
// В реализация функции запрещено использовать сортировку массивов. Если исходные массивы не отсортированы в порядке возрастания, необходимо вызвать исключение.
// 
// Пример:
// [1, 3, 4], [1, 2, 6] -> [1, 1, 2, 3, 4, 6]
// [1, 2, 3, 4], [2, 5, 10] -> [1, 2, 2, 3, 4, 5, 10]
// [1, 3, 2], [1, 2, 3] -> Error



(() => {
    const array1 = [1, 2, 3, 4];
    const array2 = [2, 5, 10];


    function isSort(array) {
        for (let i = 0; i < array.length - 1; i++) {
            let next = array[i + 1];
            if (array[i] > next) {
                return false;
            }
        }
        return true;
    }


    function compareArray(a, b) {
        if (!(isSort(a) && isSort(b))) {
            return console.error(`Error: Array "a" or "b" is not sorted`);
        }
        else {
            let arr = a.concat(b);
            return arr;
        }
    }


    function sortArray(array) {
        if (array) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] > array[i + 1]) {
                    let c = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = c;
                }
            }

            while (!isSort(array)) {
                sortArray(array);
            }
            return array;
        } else {
            return;
        }
    }

    let result = sortArray(compareArray(array1, array2));
    console.log(result)
})()