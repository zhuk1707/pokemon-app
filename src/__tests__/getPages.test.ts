import { expect, test } from 'vitest'
import getPages from '../utils/getPages.ts'

test('getPages(1, 1) should return [1]', () => {
  expect(getPages(1, 1)).toEqual([1])
})

test('getPages(2, 1) should return [1, 2]', () => {
  expect(getPages(2, 1)).toEqual([1, 2])
})

test('getPages(3, 1) should return [1, 2, 3]', () => {
  expect(getPages(3, 1)).toEqual([1, 2, 3])
})

test('getPages(4, 1) should return [1, 2, 3, 4]', () => {
  expect(getPages(4, 1)).toEqual([1, 2, 3, 4])
})

test('getPages(5, 1) should return [1, 2, 3, 4, 5]', () => {
  expect(getPages(5, 1)).toEqual([1, 2, 3, 4, 5])
})

test('getPages(6, 1) should return [1, 2, 3, 4, 5, 6]', () => {
  expect(getPages(6, 1)).toEqual([1, 2, 3, 4, 5])
})

test('getPages(10, 1) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
  expect(getPages(10, 1)).toEqual([1, 2, 3, 4, 5])
})

test('getPages(1, 2) should return [ 1 ]', () => {
  expect(getPages(1, 2)).toEqual([1])
})

test('getPages(2, 2) should return [ 1, 2 ]', () => {
  expect(getPages(2, 2)).toEqual([1, 2])
})

test('getPages(3, 2) should return [ 1, 2, 3 ]', () => {
  expect(getPages(3, 2)).toEqual([1, 2, 3])
})

test('getPages(4, 2) should return [ 1, 2, 3, 4 ]', () => {
  expect(getPages(4, 2)).toEqual([1, 2, 3, 4])
})

test('getPages(5, 2) should return [ 1, 2, 3, 4, 5 ]', () => {
  expect(getPages(5, 2)).toEqual([1, 2, 3, 4, 5])
})

test('getPages(6, 2) should return [ 1, 2, 3, 4, 5 ]', () => {
  expect(getPages(6, 2)).toEqual([1, 2, 3, 4, 5])
})

test('getPages(8, 2) should return [ 1, 2, 3, 4, 5 ]', () => {
  expect(getPages(8, 2)).toEqual([1, 2, 3, 4, 5])
})

test('getPages(1, 3) should return [ 1 ]', () => {
  expect(getPages(1, 3)).toEqual([1])
})

test('getPages(2, 3) should return [ 1, 2 ]', () => {
  expect(getPages(2, 3)).toEqual([1, 2])
})

test('getPages(3, 3) should return [ 1, 2, 3 ]', () => {
  expect(getPages(3, 3)).toEqual([1, 2, 3])
})

test('getPages(4, 3) should return [ 1, 2, 3, 4 ]', () => {
  expect(getPages(4, 3)).toEqual([1, 2, 3, 4])
})

test('getPages(5, 3) should return [ 1, 2, 3, 4, 5 ]', () => {
  expect(getPages(5, 3)).toEqual([1, 2, 3, 4, 5])
})

test('getPages(6, 3) should return [ 1, 2, 3, 4, 5 ]', () => {
  expect(getPages(6, 3)).toEqual([1, 2, 3, 4, 5])
})

test('getPages(8, 3) should return [ 1, 2, 3, 4, 5 ]', () => {
  expect(getPages(8, 3)).toEqual([1, 2, 3, 4, 5])
})

test('getPages(1, 4) should return [1]', () => {
  expect(getPages(1, 4)).toEqual([1])
})

test('getPages(2, 4) should return [1, 2]', () => {
  expect(getPages(2, 4)).toEqual([1, 2])
})

test('getPages(3, 4) should return [1, 2, 3]', () => {
  expect(getPages(3, 4)).toEqual([1, 2, 3])
})

test('getPages(4, 4) should return [1, 2, 3, 4]', () => {
  expect(getPages(4, 4)).toEqual([1, 2, 3, 4])
})

test('getPages(5, 4) should return [1, 2, 3, 4, 5]', () => {
  expect(getPages(5, 4)).toEqual([1, 2, 3, 4, 5])
})

test('getPages(6, 4) should return [2, 3, 4, 5, 6]', () => {
  expect(getPages(6, 4)).toEqual([2, 3, 4, 5, 6])
})

test('getPages(8, 4) should return [2, 3, 4, 5, 6]', () => {
  expect(getPages(8, 4)).toEqual([2, 3, 4, 5, 6])
})

test('getPages(8, 5) should return [3, 4, 5, 6, 7]', () => {
  expect(getPages(8, 5)).toEqual([3, 4, 5, 6, 7])
})

test('getPages(8, 6) should return [4, 5, 6, 7, 8]', () => {
  expect(getPages(8, 6)).toEqual([4, 5, 6, 7, 8])
})

test('getPages(8, 7) should return [4, 5, 6, 7, 8]', () => {
  expect(getPages(8, 7)).toEqual([4, 5, 6, 7, 8])
})

test('getPages(8, 8) should return [4, 5, 6, 7, 8]', () => {
  expect(getPages(8, 8)).toEqual([4, 5, 6, 7, 8])
})

test('getPages(42, 12) should return [10, 11, 12, 13, 14]', () => {
  expect(getPages(42, 12)).toEqual([10, 11, 12, 13, 14])
})

test('getPages(12, 42) should return [8, 9, 10, 11, 12]', () => {
  expect(getPages(12, 42)).toEqual([8, 9, 10, 11, 12])
})

test('getPages(42, 1) should return [1, 2, 3, 4, 5]', () => {
  expect(getPages(42, 1)).toEqual([1, 2, 3, 4, 5])
})

test('getPages(1, 42) should return [1]', () => {
  expect(getPages(1, 42)).toEqual([1])
})

test('getPages(42, 42) should return [38, 39, 40, 41, 42]', () => {
  expect(getPages(42, 42)).toEqual([38, 39, 40, 41, 42])
})

test('getPages(0, 0) should return [38, 39, 40, 41, 42]', () => {
  expect(getPages(0, 0)).toEqual([])
})

test('getPages(0, 12) should return []', () => {
  expect(getPages(0, 12)).toEqual([])
})

test('getPages(12, 0) should return [1, 2, 3, 4, 5]', () => {
  expect(getPages(12, 0)).toEqual([1, 2, 3, 4, 5])
})

test('getPages(0, 12) should return []', () => {
  expect(getPages(0, 12)).toEqual([])
})