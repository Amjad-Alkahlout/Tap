function findMissingNumber(nums) {
    const n = nums.length;
    for (let i = 0; i <= n; i++) {
        if (nums.indexOf(i) === -1) {
            return i;
        } 
    }
}
const nums1 = [3, 0,1,5,2 ];
const n1 = findMissingNumber(nums1);
console.log(n1); 



 