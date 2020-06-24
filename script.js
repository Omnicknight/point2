console.log('first');
console.dir('two');
console.info('three');
console.warn('four');
console.error('five');
let a = +prompt('Введите первое число:',);
let b = +prompt('Введите второе число:',);
let c = +prompt('Введите третье число:',);
let f = (a+b+c)/3;
console.log(f);
let year = +prompt('Введите год рождения:', 2000);
let age = 2020-year;
console.log(age);
let figures = prompt('Введите 3 числа через запятую:', '3,4,7' );
 let arr = figures.split(',');
var sum=0;
for(var i=0;i<arr.length;i++){
    sum = sum + parseInt(arr[i]);

}
console.log(sum/3);
