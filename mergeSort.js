// Divide and Conquer, split an array
function mergeSort(arr) {
    if(arr.length <= 1) return arr
    const middle = Math.floor(arr.length / 2)
    const arr1 = arr.slice(0, middle)
    const arr2 = arr.slice(middle)

    return mergeArr(mergeSort(arr1), mergeSort(arr2))
}


// Merge two arrays
function mergeArr(arr1, arr2) {
    const final = []
    let i = 0
    let j = 0

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            final.push(arr1[i])
            i++
        } else {
            final.push(arr2[j])
            j++
        }
    }
    final.push(...arr1.slice(i))
    final.push(...arr2.slice(j))
    return final
}

const unsortedArray = [3, 27, 38, 43, 9, 10, 17, 82]
const sortedArray = mergeSort(unsortedArray)
console.log(sortedArray)