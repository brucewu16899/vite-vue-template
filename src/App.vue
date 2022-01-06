<script setup lang="ts">
let count = $ref(0)

function add() {
  count++
}
</script>

<template>
  <button type="button" @click="add">count is: {{ count }}</button>
</template>
