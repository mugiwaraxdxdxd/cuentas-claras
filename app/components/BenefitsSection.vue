<script setup lang="ts">
import { CheckCircle } from 'lucide-vue-next'
</script>

<template>
  <section class="benefits">
    <div class="container">
      <div class="benefits__head">
        <p v-reveal class="benefits__label">Lo que ganas conmigo</p>
        <h2 v-reveal:up="0.1" class="benefits__title">Cinco razones para empezar hoy.</h2>
      </div>

      <div class="benefits__grid">
        <div
          v-for="({ label, desc }, i) in BENEFITS"
          :key="label"
          v-reveal:up="i * 0.09"
          class="benefits__card"
          :class="{ 'benefits__card--wide': i === 0 }"
        >
          <CheckCircle :size="22" class="benefits__icon" />
          <div>
            <h3 class="benefits__card-title">{{ label }}</h3>
            <p class="benefits__card-desc">{{ desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits {
  padding-block: 6rem;
  padding-inline: 1.5rem;
  background: var(--navy);
}

.benefits__head {
  margin-bottom: 3.5rem;
}

.benefits__label {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
  color: var(--gold);
}

.benefits__title {
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #fff;
}

@media (min-width: 768px) {
  .benefits__title { font-size: 3rem; }
}

.benefits__grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .benefits__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .benefits__grid { grid-template-columns: repeat(3, 1fr); }
}

.benefits__card {
  border-radius: 1rem;
  padding: 1.75rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.25s ease, border-color 0.25s ease;
}

.benefits__card:hover {
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(22, 160, 133, 0.35);
}

@media (min-width: 1024px) {
  .benefits__card--wide {
    grid-column: span 2 / span 2;
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }
}

.benefits__icon {
  color: var(--blue);
  flex-shrink: 0;
  margin-top: 0.125rem;
  margin-bottom: 0.75rem;
  display: block;
  transition: transform 0.25s ease;
}

.benefits__card:hover .benefits__icon {
  transform: scale(1.2) rotate(10deg);
}

.benefits__card-title {
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.benefits__card-desc {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  line-height: 1.6;
}
</style>
