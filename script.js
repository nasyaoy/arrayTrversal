let arr = [100, 200, 800, 1000, 1600];

for (let el of arr) {
    console.log(el)
}

for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i])
}

//метод forEach - последовательно перебирает все элементы массива.
//Метод в параметре получает функцию, которая выполняется для каждого элемента массива.
// В эту функцию МОЖНО передавать три параметра.
// Если эти параметри есть (они не обязательны), то в первый - элемент, второй - индекс, третий - массив.

/*
синтаксис:
массив.forEach(function(элемент,индекс, массив){
    код, который выполняется для всех элементов
})
 */

console.log('Метод forEach');
arr.forEach((el, ind, array) => {
    array[ind] = el * 2;
})

console.log(arr);

// console.log('цикл for')
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[1] * 2
// }
// console.log(arr)

// метод map - применяет заданную функцию для каждого элемента массива.
// при этом метод не изменяет исходный массив, а возвращает измененный.
// Метод в параметре получает функцию, которая выполняется для каждого элемента массива.
// То что вернет эта функция через return для элемента массива, станет новым значением это элемента

/*
    синтаксис: 
    let новый массив = массив.map((элемент, индекс, массив) =>{
        код
        return измененный элемент;
    })
*/

let array = [100, 300, 600, 200, 800];

console.log(array);

let mass = array.forEach((el) => {
    return el / 10
});

console.log(mass);

mass = array.map((el) => {
    return el / 10;
})

console.log(mass);

const list = document.querySelectorAll('li')

list.forEach((item) => {
    console.log(item);
})