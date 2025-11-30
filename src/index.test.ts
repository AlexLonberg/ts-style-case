import { test, expect } from 'vitest'
import {
  split,
  firstUpperCase
  // camelCase,
  // pascalCase,
  // snakeCase,
  // dotCase,
  // kebabCase,
  // upperSnakeCase,
  // upperDotCase,
  // upperKebabCase,
  // titleCase,
  // sentenceCase
} from './index.ts'

import * as styleCase from './index.ts'

const styles = {
  camelCase: 'camelCase',
  pascalCase: 'PascalCase',
  snakeCase: 'snake_case',
  dotCase: 'dot.case',
  kebabCase: 'kebab-case',
  upperSnakeCase: 'UPPER_SNAKE_CASE',
  upperDotCase: 'UPPER.DOT.CASE',
  upperKebabCase: 'UPPER-KEBAB-CASE',
  titleCase: 'Title Case',
  sentenceCase: 'Sentence case'
}

test('split', () => {
  expect(split('')).toStrictEqual([])
  expect(split(' \n ')).toStrictEqual([])
  expect(split('.')).toStrictEqual([])
  expect(split('_')).toStrictEqual([])
  expect(split('-')).toStrictEqual([])
  expect(split('foo')).toStrictEqual(['foo'])
  expect(split('Foo')).toStrictEqual(['Foo'])
  expect(split('fooBar')).toStrictEqual(['foo', 'Bar'])
  expect(split('FooBar')).toStrictEqual(['Foo', 'Bar'])
  expect(split('FooBAR')).toStrictEqual(['Foo', 'BAR'])
  expect(split(' foo Bar \n ')).toStrictEqual(['foo', 'Bar'])
  expect(split('foo.Bar')).toStrictEqual(['foo', 'Bar'])
  expect(split('..foo..Bar  ')).toStrictEqual(['foo', 'Bar'])
  expect(split('foo-Bar-')).toStrictEqual(['foo', 'Bar'])
  expect(split('_foo_Bar')).toStrictEqual(['foo', 'Bar'])
})

test('firstUpperCase', () => {
  expect(firstUpperCase('')).toBe('')
  expect(firstUpperCase('x')).toBe('X')
  expect(firstUpperCase('abc XYZ')).toBe('Abc xyz')
})

test('stylecase', () => {
  for (const item of Object.keys(styles)) {
    // @ts-ignore
    expect(styleCase[item](item)).toBe(styles[item])
  }
})
