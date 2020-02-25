'use strict'

'use strict'

const mainReduce = (arr, func, init) => {
    let acc = init
    let arrCopy = arr
    if (init === undefined) {
        acc = arr[0]
        arrCopy = arr.slice(1)
    }
    for (let i = 0; i < arrCopy.length; i++) {
        acc = func(acc, arrCopy[i], i, arrCopy)
    }
    return acc
}

export default mainReduce