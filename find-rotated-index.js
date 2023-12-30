function findRotatedIndex(arr, val) {
    //find smallest number index
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let smallestIdx;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middleIdx] > arr[middleIdx + 1]) {
            smallestIdx = middleIdx + 1;
            break;
        } else if (arr[middleIdx] < arr[middleIdx + 1]) {
            leftIdx = middleIdx;
        }
    }

    //find val index
    
    //check if val is on right half of array
    if (val <= arr[rightIdx]) {
        leftIdx = smallestIdx;
        rightIdx = arr.length - 1;    
        while (leftIdx <= rightIdx) {
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            let middleVal = arr[middleIdx];
            if (middleVal === val) {
                return middleIdx;
            } else if (middleVal < val) {
                leftIdx = middleIdx + 1;
            } else if (middleVal > val) {
                rightIdx = middleIdx - 1;
            }
        }
        return -1;
    }
    
    //if not, find val in left half of array
    leftIdx = 0;
    rightIdx = smallestIdx - 1;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        if (middleVal === val) {
            return middleIdx;
        } else if (middleVal < val) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        }
    }
    return -1
}

findRotatedIndex([37,44,66,102,10,22],14)

module.exports = findRotatedIndex