function addBinary(a: string, b: string): string {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry > 0) {
        const digitA = i >= 0 ? Number(a[i]) : 0;
        const digitB = j >= 0 ? Number(b[j]) : 0;
        const sum = digitA + digitB + carry;

        result = (sum % 2).toString() + result;
        carry = Math.floor(sum / 2);

        i--;
        j--;
    }

    return result;
}
console.log(addBinary('11', '1')); 