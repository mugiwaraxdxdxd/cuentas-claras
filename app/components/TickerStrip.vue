<script setup lang="ts">
const items = [...TICKER, ...TICKER, ...TICKER, ...TICKER]
</script>

<template>
  <div class="ticker-strip">
    <div class="ticker-strip__track">
      <span v-for="(t, i) in items" :key="i" class="ticker-strip__item">
        <span class="ticker-strip__dot" :style="{ animationDelay: `${(i * 0.1) % 2}s` }" />
        {{ t }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.ticker-strip {
  overflow: hidden;
  border-block: 1px solid var(--border);
  background: #fff;
  padding-block: 1rem;
}

.ticker-strip__track {
  display: flex;
  gap: 3rem;
  white-space: nowrap;
  width: max-content;
  animation: ticker 32s linear infinite;
}

.ticker-strip__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--navy);
}

.ticker-strip__dot {
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 9999px;
  display: inline-block;
  background: var(--gold);
  animation: dot-scale 2s infinite;
}
</style>
