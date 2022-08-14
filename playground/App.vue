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
const { requestPermission, sendNotification } = useTestComposable(true)

const testComposable = () => {
  sendNotification('Hello World', { body: 'Wie gehts', icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' })
}
</script>
