import { expect, test } from 'vitest'
import getPeriodicNumberFromUrl from '../utils/getPeriodicNumberFromUrl.ts'

test('pass "https://pokeapi.co/api/v2/pokemon/67/" to equal "67"', () => {
  expect(getPeriodicNumberFromUrl('https://pokeapi.co/api/v2/pokemon/67/')).toEqual('67')
})

test('pass "https://pokeapi.co/api/v2/pokemon/1/" to equal "1"', () => {
  expect(getPeriodicNumberFromUrl('https://pokeapi.co/api/v2/pokemon/1/')).toEqual('1')
})

test('pass "https://pokeapi.co/api/v2/pokemon/42" to equal "42"', () => {
  expect(getPeriodicNumberFromUrl('https://pokeapi.co/api/v2/pokemon/42')).toEqual('42')
})

test('pass "pokeapi.co/api/v2/pokemon/42" to equal "42"', () => {
  expect(getPeriodicNumberFromUrl('pokeapi.co/api/v2/pokemon/42')).toEqual('42')
})

test('pass "www.pokeapi.co/api/v2/pokemon/42" to equal "42"', () => {
  expect(getPeriodicNumberFromUrl('www.pokeapi.co/api/v2/pokemon/42')).toEqual('42')
})

test('pass "www.pokeapi.co/api/v3/pokemon/42" to equal "42"', () => {
  expect(getPeriodicNumberFromUrl('www.pokeapi.co/api/v3/pokemon/42')).toEqual('42')
})

test('pass "https://pokeapi.co/api/v2/pokemon/42///" to equal "42"', () => {
  expect(getPeriodicNumberFromUrl('https://pokeapi.co/api/v2/pokemon/42///')).toEqual('42')
})

test('pass "https://pokeapi.co/api/v2/pokemon/pikachu/" to equal "pikachu"', () => {
  expect(getPeriodicNumberFromUrl('https://pokeapi.co/api/v2/pokemon/pikachu')).toEqual('pikachu')
})


test('pass "hello" to equal "hello"', () => {
  expect(getPeriodicNumberFromUrl('hello')).toEqual('hello')
})

test('pass "" to equal ""', () => {
  expect(getPeriodicNumberFromUrl('')).toEqual('')
})

test('pass "1" to equal "1"', () => {
  expect(getPeriodicNumberFromUrl('1')).toEqual('1')
})