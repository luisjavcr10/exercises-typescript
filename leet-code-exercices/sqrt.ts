function mySqrt(x: number): number {
    if (x < 2) return x;
    let left = 1, right = x;
    let result = 1;

    while(left<=right){
        const mid = Math.floor((left+right)/2);
        const square = mid * mid;

        if(square===x){
            console.log('hola?')
            return mid;
        }else if(square<x){
            result= mid;
            left= mid+1;
        }else{
            right=mid-1;
        }
    }
    return result;  
};

console.log(mySqrt(4))