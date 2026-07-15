<script setup lang="ts">
import { XCircle, ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <section class="pains">
    <div class="container pains__grid">
      <div class="pains__intro">
        <SectionLabel v-reveal>¿Te suena esto?</SectionLabel>
        <h2 v-reveal:up="0.1" class="pains__title">
          Tener un negocio en Cuba ya es suficiente esfuerzo.
        </h2>
        <p v-reveal:up="0.2" class="pains__desc">
          Y encima, la ONAT. Si alguna de estas cosas te suena, llegaste al lugar correcto.
        </p>
      </div>

      <div class="pains__list">
        <div
          v-for="(p, i) in PAINS"
          :key="i"
          v-reveal:right="i * 0.1"
          class="pains__item"
        >
          <XCircle :size="18" class="pains__item-icon" />
          <p class="pains__item-text">{{ p }}</p>
        </div>
        <p v-reveal:up="0.2" class="pains__cta">
          Si dijiste que sí en alguna, puedo ayudarte. <ArrowUpRight :size="14" />
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pains {
  padding-block: 6rem;
  padding-inline: 1.5rem;
}

.pains__grid {
  display: grid;
  gap: 4rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .pains__grid {
    grid-template-columns: 1fr 1fr;
  }
  .pains__intro {
    position: sticky;
    top: 7rem;
  }
}

.pains__title {
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
  color: var(--navy);
}

@media (min-width: 768px) {
  .pains__title { font-size: 3rem; }
}

.pains__desc {
  line-height: 1.6;
  color: var(--text-muted);
}

.pains__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.pains__item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #fff;
  border-radius: 1rem;
  padding: 1.25rem;
  border: 1px solid var(--border);
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.25s ease, background-color 0.25s ease;
}

.pains__item:hover {
  transform: translateX(4px);
  border-color: #FCA5A5;
  background-color: rgba(254, 242, 242, 0.5);
}

.pains__item-icon {
  color: var(--destructive);
  flex-shrink: 0;
  margin-top: 0.125rem;
  transition: transform 0.25s ease;
}

.pains__item:hover .pains__item-icon {
  transform: rotate(15deg) scale(1.2);
}

.pains__item-text {
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.4;
  color: var(--text);
}

.pains__cta {
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.5rem;
  color: var(--blue);
}
</style>
