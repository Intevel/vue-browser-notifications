<template>
  <div>
    <h1>Hello World</h1>
    <button @click="testComposable">
      Test
    </button>
  </div>
</template>

<script setup lang="ts">
import { useNotifications } from '../src/index'
const { requestPermission, sendNotification } = useNotifications(true, { icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' })

const testComposable = () => {
  sendNotification('Hello World', { body: 'Wie gehts' })
}
</script>
