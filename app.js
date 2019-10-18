/*Задание №1---*/
var arr = [2, 10, 500150, 645, 1000, 685, 3987, 1, 555, 0];
console.log(' Arr', arr);
var max = Math.max.apply(Math, arr);
var min = Math.min.apply(Math, arr);
console.log('Максимальное значение', max, 'Минимальное значение', min);
var a = 0, b = 0;
arr.forEach(function (item, i) {
    if (item === max)
        a = i;
    if (item === min)
        b = i;
});
arr[a] = arr.splice(b, 1, arr[a])[0];
console.log(' Новый массив', arr);
/*Задание №2---*/
var arrA = [0, 100500, 56, 889];
console.log('arrA', arrA);
var arrB = arrA.slice();
console.log(' ArrA (Copy of ArrB) ', arrB);
/*Задание №3---*/
function Random(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 0; }
    return Math.random() * (max - min) + min;
}
(function (path, time) {
    if (path === void 0) { path = Random(10, 999); }
    if (time === void 0) { time = Random(10, 999); }
    console.log(' скорость', Math.round(path / time) + " \u043A\u043C/\u043C");
}());
console.log('Задание №3');
