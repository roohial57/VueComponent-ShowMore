<template>
  <div class="app-container">
    <div class="demo-card">
      <h2>ShowMore Demo</h2>
      <show-more tooltipHeader="1111" :showTooltip="false">
        Hello from Demo!Hello from Demo!Hello from Demo!Hello from Demo!Hello from Demo!Hello from Demo!Hello
        from Demo!Hello from Demo!Hello from Demo!Hello from Demo!Hello from Demo!Hello from Demo!
      </show-more>
    </div>
  </div>
</template>

<script setup>
import { ShowMore } from '../src/index.js'
</script>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
}
.demo-card {
  background: #fff;
  padding: 32px 24px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  min-width: 340px;
  max-width: 480px;
  text-align: center;
}
h2 {
  margin-bottom: 18px;
  color: #1976d2;
  font-weight: 700;
}
</style>
