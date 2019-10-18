/*Задание №1---*/

let arr: number[] = [2, 10, 500150, 645, 1000, 685, 3987, 1, 555, 0];
console.log(' Arr', arr);
let max = Math.max(...arr);
let min = Math.min(...arr);
console.log('Максимальное значение', max, 'Минимальное значение', min);

let a: number = 0, b: number = 0;
arr.forEach(function (item, i) {
    if (item ===max) a = i;
    if (item === min) b = i;
});

arr[a] = arr.splice(b, 1, arr[a])[0];
console.log(' Новый массив', arr);

/*Задание №2---*/

let arrA: number[] = [0, 100500, 56, 889];
console.log('arrA', arrA);
let arrB: number[] = arrA.slice();
console.log(' ArrA (Copy of ArrB) ', arrB);


/*Задание №3---*/

function Random(min: number = 0, max: number = 0): number {
    return Math.random() * (max - min) + min;
}

(function (path: number = Random(10, 999), time: number = Random(10, 999)): void {
    console.log(' скорость', `${Math.round(path / time)} км/м`);
}());

console.log('Задание №3');