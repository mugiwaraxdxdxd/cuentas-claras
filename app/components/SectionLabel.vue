<script setup lang="ts">
withDefaults(defineProps<{ light?: boolean }>(), { light: false })
</script>

<template>
  <p class="section-label" :class="{ 'section-label--light': light }">
    <slot />
  </p>
</template>

<style scoped>
.section-label {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
  color: var(--gold);
}

.section-label--light {
  color: rgba(232, 134, 58, 0.9);
}
</style>
