'use strict'

const map = (arr = [], func = (item) => item) => {
    if (!Array.isArray(arr)) {
        throw new TypeError("The first parameter must be an array")
    }
    if (typeof func !== 'function') {
        throw new TypeError("The Second Parameter must be a function")
    }
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i], i, arr))
    }
    return newArr
}
export default map
