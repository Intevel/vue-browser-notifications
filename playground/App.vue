<template>
  <div>
    <h1>Hello World</h1>
    <button @click="testComposable">
      Test
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTestComposable } from '../src/index'
const { test } = useTestComposable()

const testComposable = () => {
  test()
}
</script>
