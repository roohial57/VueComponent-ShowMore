<template>
  <button class="my-btn">
    <slot>Click me</slot>
  </button>
</template>

<script setup>
  // اینجا می‌تونی props, emits, ... تعریف کنی
</script>

<style scoped>
.my-btn {
  background: #42b883;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
</style>
