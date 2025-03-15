<script setup lang="ts" name="HomePage">
import { ref } from 'vue'
import  JButton from '@/6-shared/ui/components/JButton.vue'

const count = ref(0)

</script>

<template>
  <div class="flex flex-col">
    <h1>Home Page</h1>
    <JButton><h1>Title</h1></JButton>
    <p>Count: {{ count }}</p>
  </div>
</template>