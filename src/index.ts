/* eslint-disable @typescript-eslint/no-non-null-assertion */
const _startAndEndDelimiter = /(^[\s._-]+)|([\s._-]+$)/g
const _allDelimiter = /[\s._-]+/g
const _preUpperCase = /(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/g
const _slashes = /[\\]+/g

const re = {
  get startAndEndDelimiter () {
    _startAndEndDelimiter.lastIndex = 0
    return _startAndEndDelimiter
  },
  get allDelimiter () {
    _allDelimiter.lastIndex = 0
    return _allDelimiter
  },
  get preUpperCase () {
    _preUpperCase.lastIndex = 0
    return _preUpperCase
  },
  get slashes () {
    _slashes.lastIndex = 0
    return _slashes
  }
}

/**
 * Разбивает строку по одному из вариантов:
 *
 * + Если есть известный разделитель, например `_|.`
 * + ... иначе по символу в верхнем регистре.
 */
function split (str: string): string[] {
  const cleaned = str.replace(re.startAndEndDelimiter, '')
  if (cleaned.length === 0) {
    return []
  }
  if (re.allDelimiter.test(cleaned)) {
    return cleaned.split(re.allDelimiter)
  }
  return cleaned.split(re.preUpperCase).filter((s) => s.length > 0)
}

/**
 * Преобразует строку к стилю 'Firstuppercase'.
 */
function firstUpperCase (str: string): string {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`
}

/**
 * Преобразует строку к стилю `camelCase`.
 *
 * @example
 * camelCase('UPPER_SNAKE_CASE')
 * // => 'upperSnakeCase'
 */
function camelCase (str: string): string {
  const splitted = split(str)
  return splitted.length > 1
    ? splitted.map((s, i) => i === 0 ? s.toLowerCase() : firstUpperCase(s)).join('')
    : splitted.length === 1
      ? splitted[0]!.toLowerCase()
      : ''
}

/**
 * Преобразует строку к стилю `PascalCase`.
 *
 * @example
 * pascalCase('UPPER_SNAKE_CASE')
 * // => 'UpperSnakeCase'
 */
function pascalCase (str: string): string {
  return split(str).map((s) => firstUpperCase(s)).join('')
}

/**
 * Преобразует строку к стилю `snake_case`.
 *
 * @example
 * snakeCase('PascalCase')
 * // => 'pascal_case'
 */
function snakeCase (str: string): string {
  return split(str).join('_').toLowerCase()
}

/**
 * Преобразует строку к стилю `dot.case`.
 *
 * @example
 * dotCase('UPPER_SNAKE_CASE')
 * // => 'upper.snake.case'
 */
function dotCase (str: string): string {
  return split(str).join('.').toLowerCase()
}

/**
 * Преобразует строку к стилю `kebab-case`.
 *
 * @example
 * kebabCase('UPPER_SNAKE_CASE')
 * // => 'upper-snake-case'
 */
function kebabCase (str: string): string {
  return split(str).join('-').toLowerCase()
}

/**
 * Преобразует строку к стилю `UPPER_SNAKE_CASE`.
 *
 * @example
 * upperSnakeCase('PascalCase')
 * // => 'PASCAL_CASE'
 */
function upperSnakeCase (str: string): string {
  return split(str).join('_').toUpperCase()
}

/**
 * Преобразует строку к стилю `UPPER.DOT.CASE`.
 *
 * @example
 * upperDotCase('snake_case')
 * // => 'SNAKE.CASE'
 */
function upperDotCase (str: string): string {
  return split(str).join('.').toUpperCase()
}

/**
 * Преобразует строку к стилю `UPPER-KEBAB-CASE`.
 *
 * @example
 * upperKebabCase('UPPER_SNAKE_CASE')
 * // => 'UPPER-SNAKE-CASE'
 */
function upperKebabCase (str: string): string {
  return split(str).join('-').toUpperCase()
}

/**
 * Преобразует строку к стилю `'Title Case'`.
 *
 * @example
 * titleCase('UPPER_SNAKE_CASE')
 * // => 'Upper Snake Case'
 */
function titleCase (str: string): string {
  return split(str).map((s) => firstUpperCase(s)).join(' ')
}

/**
 * Преобразует строку к стилю `'Sentence case'`.
 *
 * @example
 * sentenceCase('UPPER_SNAKE_CASE')
 * // => 'Upper snake case'
 */
function sentenceCase (str: string): string {
  const splitted = split(str)
  return splitted.length > 1
    ? splitted.map((s, i) => i === 0 ? firstUpperCase(s) : s.toLowerCase()).join(' ')
    : splitted.length === 1
      ? firstUpperCase(splitted[0]!)
      : ''
}

export {
  split,
  firstUpperCase,
  camelCase,
  pascalCase,
  snakeCase,
  dotCase,
  kebabCase,
  upperSnakeCase,
  upperDotCase,
  upperKebabCase,
  titleCase,
  sentenceCase
}
