let num = prompt('Nhập số:');
let result = [num[0]];
console.log(result);
for (let i = 1; i < num.length; i++) {
    if (num[i - 1] % 2 === 0 && num[i] % 2 === 0) {
        result.push('-', num[i]);
    } else {
        result.push(num[i]);
    }
}
console.log(result.join(''));