'use strict'

import {expect} from 'chai'
import filter from './filter'

it('filter should be a func', () => {
    expect(filter).to.be.a('function')
})

it('filter([1,2],(item)=>item) should return [1,2]', () => {
    expect(filter([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('filter([0,1,2],(item)=>item) should return [1,2]', () => {
    expect(filter([0, 1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('filter([1,2],(item)=>true) should return [1,2]', () => {
    expect(filter([1, 2], (item) => true)).to.be.deep.equal([1, 2])
})

it('filter([2,3],(item)=>true) should return [2,3]', () => {
    expect(filter([2, 3], (item) => true)).to.be.deep.equal([2, 3])
})

it('filter([1, 2, 3, 5], (item, index) => item === index+1)) should return [2,4]', () => {
    expect(filter([1, 2, 3, 5], (item, index) => item === index + 1)).to.be.deep.equal([1, 2, 3])
})

it('filter([1,2,3,4,5],(item)=>item%2===0) should return [2,4]', () => {
    expect(filter([1, 2, 3, 4, 5], (item) => item % 2 === 0)).to.be.deep.equal([2, 4])
})

it('filter([1,2,3,4,5],(item)=>item-3>0) should return [4,5]', () => {
    expect(filter([1, 2, 3, 4, 5], (item) => item - 3 > 0)).to.be.deep.equal([4, 5])
})
it('filter([1,2,3],(item, index)=>index) should return [2,3]', () => {
    expect(filter([1, 2, 3], (item, index) => index)).to.be.deep.equal([2, 3])
})
it('filter([1,2,3],(item, index,array)=>array) should return [1,2,3]', () => {
    expect(filter([1, 2, 3], (item, index, array) => array)).to.be.deep.equal([1, 2, 3])
})
it('filter([1,2,3,2,1,5],(item, index,array)=>index===array.indexOf(item)) should return [1,2,3,5]', () => {
    expect(filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item))).to.be.deep.equal([1, 2, 3, 5])
})
