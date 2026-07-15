<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <section class="steps">
    <div class="container">
      <div class="steps__head">
        <SectionLabel v-reveal>Cómo trabajamos</SectionLabel>
        <h2 v-reveal:up="0.1" class="steps__title">Así de fácil.</h2>
      </div>

      <div class="steps__grid">
        <div
          v-for="({ n, label, text }, i) in STEPS"
          :key="n"
          v-reveal:up="i * 0.12"
          class="steps__card"
        >
          <p class="steps__number">{{ n }}</p>
          <p class="steps__label">{{ label }}</p>
          <p class="steps__text">{{ text }}</p>
          <div v-if="i < STEPS.length - 1" class="steps__arrow" :style="{ animationDelay: `${i * 0.3}s` }">
            <ArrowUpRight :size="12" color="#fff" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.steps {
  padding-block: 6rem;
  padding-inline: 1.5rem;
  background: var(--gold-light);
}

.steps__head {
  margin-bottom: 3.5rem;
}

.steps__title {
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: var(--navy);
}

@media (min-width: 768px) {
  .steps__title { font-size: 3rem; }
}

.steps__grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .steps__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .steps__grid { grid-template-columns: repeat(4, 1fr); }
}

.steps__card {
  position: relative;
  background: #fff;
  border-radius: 1rem;
  padding: 1.75rem;
  border: 1px solid var(--border);
  transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease;
}

.steps__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.08);
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease;
}

.steps__number {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 0.75rem;
  margin-left: -0.25rem;
  color: rgba(17, 24, 39, 0.06);
  transition: color 0.25s ease;
}

.steps__card:hover .steps__number {
  color: rgba(22, 160, 133, 0.14);
}

.steps__label {
  font-weight: 700;
  margin-bottom: 0.375rem;
  color: var(--navy);
}

.steps__text {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.steps__arrow {
  display: none;
}

@media (min-width: 1024px) {
  .steps__arrow {
    display: flex;
    position: absolute;
    right: -0.75rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 9999px;
    align-items: center;
    justify-content: center;
    background: var(--gold);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    animation: arrow-nudge 1.5s ease-in-out infinite;
  }
}
</style>
