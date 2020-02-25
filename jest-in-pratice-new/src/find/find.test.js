'use strict'

import {expect} from 'chai'
import find from './find'

it('find should be a function', () => {
    expect(find).to.be.a('function')
})

it('find([],(item)=>item===undefined) should return undefined', () => {
    const before = find([], (item) => item === undefined)
    const after = undefined
    expect(before).to.be.equal(after)
})
it('find([],(item)=>item===1) should return undefined', () => {
    const before = find([], (item) => item === 1)
    const after = undefined
    expect(before).to.be.equal(after)
})
it('find([1,2,3],(item)=>item===2) should return 2', () => {
    const before = find([1, 2, 3], (item) => item === 2)
    const after = 2
    expect(before).to.be.deep.equal(after)
})
it('find([1,2,3],(item)=>item===3) should return 2', () => {
    const before = find([1, 2, 3], (item) => item === 3)
    const after = 3
    expect(before).to.be.deep.equal(after)
})

it('find([{nome:"a"},{nome:"b"},{nome:"c"}],(item)=>item.nome==="a") should return {nome:"a"}', () => {
    const before = find([{nome: "a"}, {nome: "b"}, {nome: "c"}], (item) => item.nome === "a")
    const after = {nome: "a"}
    expect(before).to.be.deep.equal(after)
})

it('find([1, 2, 3, 4], (item,index) => index > 1) should return 3', () => {
    const before = find([1, 2, 3, 4], (item, index) => index > 1)
    const after = 3
    expect(before).to.be.deep.equal(after)
})

it('find([1, 2, 2, 4], (item, index, arr) => arr[index] === index) should return 3', () => {
    const before = find([1, 2, 2, 4], (item, index, arr) => arr[index] === index)
    const after = 2
    expect(before).to.be.deep.equal(after)
})