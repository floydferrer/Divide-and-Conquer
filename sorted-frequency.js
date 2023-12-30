function sortedFrequency(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx){
      let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
      let middleVal = arr[middleIdx];
      if (middleVal === val) {
          rightIdx = middleIdx - 1;
      } else if (middleVal <= val) {
          leftIdx = middleIdx + 1;
      } else if (middleVal >= val) {
          rightIdx = middleIdx - 1;
      }
    }
    if (leftIdx >= arr.length || rightIdx < 0) return -1;

    let startIdx = leftIdx;

    rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx){
      let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
      let middleVal = arr[middleIdx];
      if (leftIdx === middleIdx) {
        return leftIdx - startIdx + 1;
      } else if (middleVal === val) {
          leftIdx = middleIdx;
      } else if (middleVal <= val) {
          leftIdx = middleIdx + 1;
      } else if (middleVal >= val) {
          rightIdx = middleIdx - 1;
      }
    }
    let endIdx = leftIdx;

    return endIdx - startIdx;
}

// module.exports = sortedFrequency

sortedFrequency([2,2,2,2,3], 1);

//arr.length - 1 = 6
//([1,1,2,2,2,2,3], 2) should be 4
//([1,1,2,2,2,2,3], 3) should be 1