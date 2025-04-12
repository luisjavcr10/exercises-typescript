

function removeElement(nums: number[], val: number): number {
    let j=0;
    while( j < nums.length){
        if(nums[j]===val){
            nums.splice(j,1);
        }else{
            j++;
        }
    }   
    return nums.length;
};


console.log(removeElement([3,2,2,3], 3)); // Output: 2, nums = [2,2]
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // Output: 5, nums = [0,1,4,0,3]