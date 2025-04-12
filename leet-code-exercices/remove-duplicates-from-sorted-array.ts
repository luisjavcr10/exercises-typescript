function removeDuplicates2(nums: number[]): number {
    let j= 0;
    while(j<nums.length){
        if(nums[j]==nums[j+1]){
            nums.splice(j,1);
        }else{
            j++;
        }
    }
    
    return nums.length;
};

function removeDuplicates(nums: number[]): number {
    let i= 0;
    for (let j = 1; j < nums.length; j++) {
        if(nums[i]!=nums[j]){
            i++;
            nums[i]= nums[j];
        }
    }
    return i+1;
};


console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));