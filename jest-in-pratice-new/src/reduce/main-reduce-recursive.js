'use strict'

const isInitUndefined = (init) => init === undefined

const mainReduce = (arr, func, init) => {
    let acc = isInitUndefined(init) ? arr[0] : init
    let arrCopy = isInitUndefined(init) ? arr.slice(1) : arr

    return function reduceInternal(arrInternal, accInternal, counter) {
        const [head, ...tail] = arrInternal
        const accNext = () => func(accInternal, head, counter, arrCopy)
        return arrInternal.length === 0 ?
            accInternal :
            reduceInternal(tail, accNext(), ++counter)
    }(arrCopy, acc, 0)
}

export default mainReduce