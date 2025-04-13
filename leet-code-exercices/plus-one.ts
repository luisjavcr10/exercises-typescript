function plusOne2(digits: number[]): number[] {
    const number = Number(digits.join('')) + 1;
    const result = (String(number).split('')).map((num)=>Number(num));
    return result;
};

function plusOne(digits: number[]): number[] {
    if(digits[digits.length-1]===9){
        for (let i = digits.length-1; i >= 0 ; i--) {
            if(digits[i]===9){
                digits[i]=0;
                (i===0?digits.unshift(1) :'') 
            }else{
                digits[i]++;
                break;
            }
        }
    }else{
        digits[digits.length-1]++;
    }
    return digits;
}


console.log(plusOne([1,9,9,9,9,9,9,9,9])); // 124