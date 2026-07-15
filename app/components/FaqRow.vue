<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

defineProps<{ q: string; a: string }>()
const open = ref(false)
</script>

<template>
  <div class="faq-row">
    <button class="faq-row__trigger" @click="open = !open">
      <span class="faq-row__question" :class="{ 'is-open': open }">{{ q }}</span>
      <ChevronDown :size="18" class="faq-row__chevron" :class="{ 'is-open': open }" />
    </button>
    <div class="faq-row__panel" :class="{ 'is-open': open }">
      <div class="faq-row__panel-inner">
        <p class="faq-row__answer">{{ a }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-row {
  border-bottom: 1px solid var(--border);
}

.faq-row:last-child {
  border-bottom: none;
}

.faq-row__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.25rem 0;
  background: none;
  border: none;
  text-align: left;
}

.faq-row__question {
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 1.4;
  color: var(--text);
  transition: color 0.2s ease;
}

.faq-row__question.is-open {
  color: var(--blue);
}

.faq-row__chevron {
  color: var(--blue);
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.faq-row__chevron.is-open {
  transform: rotate(180deg);
}

.faq-row__panel {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease;
}

.faq-row__panel.is-open {
  grid-template-rows: 1fr;
  opacity: 1;
}

.faq-row__panel-inner {
  overflow: hidden;
}

.faq-row__answer {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--text-muted);
  padding-bottom: 1.25rem;
}
</style>
