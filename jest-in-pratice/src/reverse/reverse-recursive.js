'use strict'

const reverse = (arr) => {
    const [head, ...tail] = arr
    return (arr.length === 0) ? [] : reverse(tail).concat(head)
}

export default reverse