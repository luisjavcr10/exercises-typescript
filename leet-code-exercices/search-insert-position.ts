function searchInsert(nums: number[], target: number): number {
    let index = nums.indexOf(target);
    if(index != -1) {
        return index;
    }
    else{
        for (let i = 0; i < nums.length; i++) {
            if(nums[i]<target){
                (nums[i+1]>=target? index= i+1 : index=i+1 )
            }else{
                index = i;
                break;
            }
        }
        return index;
    }
};

function searchInsert2(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}


console.log(searchInsert2([1,3,5,6], 5)); // 2
console.log(searchInsert2([1,3,5,6], 2)); // 1
console.log(searchInsert2([1,3,5,6], 7)); // 4
console.log(searchInsert2([1,3,5,6], 0)); // 0