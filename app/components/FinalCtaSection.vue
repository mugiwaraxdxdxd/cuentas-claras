<script setup lang="ts"></script>

<template>
  <section class="final-cta">
    <div class="final-cta__glow" />
    <div class="container-lg">
      <SectionLabel v-reveal>Da el primer paso</SectionLabel>
      <h2 v-reveal:up="0.1" class="final-cta__title">
        Pon tus<br />cuentas<br />
        <span class="final-cta__title-accent">claras.</span>
      </h2>
      <p v-reveal:up="0.2" class="final-cta__desc">
        Escríbeme hoy y te hago un diagnóstico gratis de cómo está tu negocio con la ONAT. Sin compromiso.
      </p>
      <div v-reveal:up="0.3">
        <WhatsappButton :href="WA_CTA" variant="primary" lg>Escríbeme por WhatsApp</WhatsappButton>
        <p class="final-cta__footnote">Sin compromiso · Diagnóstico gratis</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.final-cta {
  position: relative;
  overflow: hidden;
  padding-block: 8rem;
  padding-inline: 1.5rem;
}

.final-cta__glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(ellipse at center, var(--blue-soft) 0%, transparent 70%);
  animation: soft-pulse 5s ease-in-out infinite;
}

.container-lg {
  max-width: 56rem;
  margin-inline: auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.final-cta__title {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
  color: var(--navy);
}

@media (min-width: 768px) {
  .final-cta__title { font-size: 4.5rem; }
}

.final-cta__title-accent {
  color: var(--blue);
  animation: soft-pulse 2.5s ease-in-out infinite;
}

.final-cta__desc {
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 32rem;
  margin: 0 auto 2.5rem;
  color: var(--text-muted);
}

.final-cta__footnote {
  font-size: 0.75rem;
  margin-top: 1rem;
  color: var(--text-muted);
}
</style>
