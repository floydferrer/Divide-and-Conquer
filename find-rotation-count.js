function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middleIdx] < arr[middleIdx - 1]) {
            return middleIdx;
        } else if (arr[middleIdx] > arr[middleIdx + 1] ) {
            return middleIdx + 1;
        } else if (arr[leftIdx] > arr[middleIdx]) {
            rightIdx = middleIdx;
        } else if (arr[middleIdx] > arr[rightIdx]) {
            leftIdx = middleIdx;
        } else {
            return 0;
        }
    }
}

module.exports = findRotationCount