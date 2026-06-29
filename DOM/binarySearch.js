let arr = [1, 2, 3, 4, 4, 5, 6];
let target = 4;

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            ans = mid;      // Store answer
            end = mid - 1;  // Search left side
        } 
        else if (arr[mid] > target) {
            end = mid - 1;
        } 
        else {
            start = mid + 1;
        }
    }

    return ans;
}

console.log(binarySearch(arr, target));