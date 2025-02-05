function findFloor(arr, val, low = 0, high = arr.length -1) {
    if (low > high){
        return -1
    }

    if (val >= arr[high]){
        return arr[high]
    }
    
    let mid = Math.floor((low + high)/2)
    if (arr[mid] === val){
        return arr[mid]
    }

    if (mid > 0 && arr[mid - 1] <= val && val < arr[mid]){
        return arr[mid - 1]
    }

    if (val < arr[mid]) {
        return findFloor(arr, val, low, mid - 1)
    }

    return findFloor(arr, val, mid -1, high)
}

module.exports = findFloor





