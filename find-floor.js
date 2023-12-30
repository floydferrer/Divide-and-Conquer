function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if (val < arr[0]) {
        return -1;
    }
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
    if (val === arr[rightIdx + 1]) return arr[rightIdx + 1];
    return arr[rightIdx];
}

module.exports = findFloor