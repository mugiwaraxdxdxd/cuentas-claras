<script setup lang="ts"></script>

<template>
  <section class="solution">
    <div v-for="i in 3" :key="i" class="solution__ring" :style="{ width: `${i * 200}px`, height: `${i * 200}px`, animationDelay: `${i * 0.8}s`, animationDuration: `${4 + i}s` }" />

    <div class="container-lg solution__inner">
      <p v-reveal class="solution__label">La solución</p>
      <h2 v-reveal:up="0.1" class="solution__title">
        Respira.<br />
        <span class="solution__title-muted">Yo me encargo.</span>
      </h2>
      <p v-reveal:up="0.2" class="solution__desc">
        Organizo, calculo y preparo todo lo que tu negocio necesita para estar en regla — y te lo explico claro, sin palabras complicadas. Tú solo revisas y presentas.
      </p>
      <div v-reveal:up="0.3">
        <WhatsappButton :href="WA_HERO" variant="white" lg>Quiero tranquilidad</WhatsappButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solution {
  position: relative;
  overflow: hidden;
  padding-block: 6rem;
  padding-inline: 1.5rem;
  background: var(--navy);
}

.solution__ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  pointer-events: none;
  animation-name: ring-pulse;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.container-lg {
  max-width: 56rem;
  margin-inline: auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.solution__label {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
  color: var(--gold);
}

.solution__title {
  font-size: 2.25rem;
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .solution__title { font-size: 3.75rem; }
}

.solution__title-muted {
  color: rgba(255, 255, 255, 0.35);
}

.solution__desc {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 42rem;
  margin: 0 auto 2.5rem;
}
</style>
