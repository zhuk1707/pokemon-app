import { expect, test } from 'vitest'
import capitalizeWord from './capitalizeWord.ts';

test('pass "wORD" to equal "WORD"', () => {
  expect(capitalizeWord('wORD')).toBe('WORD');
});

test('pass "WORD" to equal "WORD"', () => {
  expect(capitalizeWord('WORD')).toBe('WORD');
});

test('pass "hello world" to equal "Hello world"', () => {
  expect(capitalizeWord('hello world')).toBe('Hello world');
});

test('pass an empty string to return an empty string', () => {
  expect(capitalizeWord('')).toBe('');
});

test('pass a single character "x" to equal "X"', () => {
  expect(capitalizeWord('x')).toBe('X');
});

test('pass a string "123" to equal "123"', () => {
  expect(capitalizeWord('123')).toBe('123');
});

test('pass a string "w123" to equal "W123"', () => {
  expect(capitalizeWord('w123')).toBe('W123');
});