<script setup lang="ts">
const progress = useScrollProgress()
</script>

<template>
  <div class="progress-bar" :style="{ transform: `scaleX(${progress})` }" />
</template>

<style scoped>
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 60;
  background: var(--blue);
  transform-origin: left;
  transition: transform 0.1s linear;
}
</style>
