let str = prompt('Nhập chuỗi:');
let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let LOWER = 'abcdefghijklmnopqrstuvwxyz';
let result = [];
for (let i = 0; i < str.length; i++) {
    if (UPPER.indexOf(str[i]) !== -1) {
        result.push(str[i].toLowerCase());
    } else if (LOWER.indexOf(str[i]) !== -1) {
        result.push(str[i].toUpperCase())
    } else {
        result.push(str[i]);
    }
}
console.log(result.join(''));