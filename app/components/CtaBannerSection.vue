<script setup lang="ts"></script>

<template>
  <section class="cta-banner">
    <div class="container">
      <div v-reveal class="cta-banner__card">
        <div>
          <p class="cta-banner__kicker">¿Es para ti?</p>
          <h2 class="cta-banner__title">Hecho para TCP, MIPYMES y emprendimientos en La Habana.</h2>
        </div>
        <div>
          <p class="cta-banner__desc">
            Si estás empezando o ya andas rodando, te ayudo a poner — y mantener — todo en orden. Sin enredos, sin estrés.
          </p>
          <WhatsappButton :href="WA_HERO" variant="white" lg>Escríbeme por WhatsApp</WhatsappButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-banner {
  padding-block: 6rem;
  padding-inline: 1.5rem;
}

.cta-banner__card {
  border-radius: 1.5rem;
  padding: 2.5rem 1.5rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2rem;
  align-items: center;
  background: var(--blue);
  transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease;
  overflow: hidden;
}

.cta-banner__card > div {
  min-width: 0;
}

.cta-banner__card:hover {
  box-shadow: 0 24px 60px rgba(22, 160, 133, 0.25);
}

@media (min-width: 768px) {
  .cta-banner__card {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 2.5rem;
    padding: 4rem;
  }
}

.cta-banner__kicker {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
}

.cta-banner__title {
  font-size: clamp(1.5rem, 6vw, 3rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  letter-spacing: -0.02em;
  overflow-wrap: break-word;
}

.cta-banner__desc {
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  overflow-wrap: break-word;
}
</style>
