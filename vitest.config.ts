/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [
      './src/**/*.test.ts'
    ],
    coverage: {
      enabled: true,
      include: ['./src/**/*.ts'],
      exclude: ['./src/**/_*', './src/**/*.bench.ts'],
      provider: 'v8',
      reportsDirectory: '.temp/coverage'
    },
    // // Config https://vitest.dev/config/#benchmark
    // benchmark: {
    //   include: [
    //     './src/**/*.bench.ts'
    //   ]
    // }
  }
})
