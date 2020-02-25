'use strict'

const reverse = (arr) => {
    const newArr = []

    for (let i = arr.length; i--;) {
        newArr.push(arr[i])
    }
    return newArr
}

export default reverse