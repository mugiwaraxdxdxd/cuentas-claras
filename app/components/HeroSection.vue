<script setup lang="ts">
import { CheckCircle } from 'lucide-vue-next'

const checklist = [
  'Organizo tus ingresos y gastos',
  'Calculo tu declaración ONAT',
  'Te aviso antes de cada vencimiento',
  'Visita semanal a tu negocio',
]
</script>

<template>
  <section class="hero">
    <div class="hero__blob hero__blob--blue" />
    <div class="hero__blob hero__blob--gold" />

    <div class="container hero__grid">
      <div class="hero__copy">
        <span class="hero__badge enter-up">TCP · MIPYMES · Emprendimientos</span>

        <h1 class="hero__title enter-up" style="animation-delay: 0.08s">
          La ONAT,<br />
          <span class="hero__title-accent">sin estrés.</span>
        </h1>

        <p class="hero__lead enter-up" style="animation-delay: 0.16s">
          Yo me encargo de tus impuestos y tus cuentas — para que tú te dediques a lo que de verdad importa: hacer crecer tu negocio.
        </p>

        <div class="hero__actions enter-up" style="animation-delay: 0.24s">
          <WhatsappButton :href="WA_HERO" variant="primary" lg>Escríbeme por WhatsApp</WhatsappButton>
          <span class="hero__note">
            <CheckCircle :size="14" class="hero__note-icon" />
            Sin compromiso
          </span>
        </div>
      </div>

      <div class="hero__aside">
        <div class="hero__card enter-scale" style="animation-delay: 0.4s">
          <p class="hero__card-title">Lo que hago por ti</p>
          <div class="hero__card-list">
            <div
              v-for="(item, i) in checklist"
              :key="item"
              class="hero__card-item enter-right"
              :style="{ animationDelay: `${0.6 + i * 0.1}s` }"
            >
              <span class="hero__card-check">
                <CheckCircle :size="12" />
              </span>
              <span>{{ item }}</span>
            </div>
          </div>
        </div>

        <div class="hero__tiles">
          <div class="hero__tile hero__tile--blue enter-scale" style="animation-delay: 0.6s">
            <p class="hero__tile-label">Trabajamos con</p>
            <p class="hero__tile-value">TCP, MIPYMES<br />& Emprendimientos</p>
          </div>
          <div class="hero__tile hero__tile--navy enter-scale" style="animation-delay: 0.75s">
            <p class="hero__tile-label">Resultado</p>
            <p class="hero__tile-value">Cero multas.<br />Todo al día. ✓</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container hero__footnote enter-up" style="animation-delay: 1.2s">
      <span class="hero__footnote-line" />
      Hecha para negocios en La Habana · WhatsApp como único canal
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 3rem;
  overflow: hidden;
}

.hero__blob {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
  animation: blob-pulse 6s ease-in-out infinite;
}

.hero__blob--blue {
  top: 6rem;
  right: 2rem;
  width: 18rem;
  height: 18rem;
  background: radial-gradient(circle, var(--blue-soft) 0%, transparent 70%);
}

.hero__blob--gold {
  bottom: 8rem;
  left: 2rem;
  width: 12rem;
  height: 12rem;
  background: radial-gradient(circle, rgba(232, 134, 58, 0.08) 0%, transparent 70%);
  animation-duration: 8s;
  animation-delay: 2s;
}

.hero__grid {
  position: relative;
  display: grid;
  gap: 4rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.hero__badge {
  display: inline-block;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
  border-radius: 9999px;
  padding: 0.375rem 0.75rem;
  color: var(--blue);
  border: 1px solid rgba(22, 160, 133, 0.19);
  background: var(--blue-soft);
}

.hero__title {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  color: var(--navy);
}

.hero__title-accent {
  color: var(--blue);
  animation: soft-pulse 3s ease-in-out infinite;
}

@media (min-width: 768px) {
  .hero__title { font-size: 3.75rem; }
}

@media (min-width: 1024px) {
  .hero__title { font-size: 4.5rem; }
}

.hero__lead {
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 28rem;
  margin-bottom: 2.5rem;
  color: var(--text-muted);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.hero__note {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.hero__note-icon {
  color: var(--blue);
}

.hero__aside {
  display: none;
}

@media (min-width: 1024px) {
  .hero__aside {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

.hero__card {
  background: #fff;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  padding: 2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  animation-name: enter-scale, float;
  animation-duration: 0.5s, 6s;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1), ease-in-out;
  animation-iteration-count: 1, infinite;
  animation-delay: 0.4s, 0.9s;
  animation-fill-mode: both, none;
}

.hero__card-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1.25rem;
  color: var(--text-muted);
}

.hero__card-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.hero__card-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text);
}

.hero__card-check {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: var(--blue-soft);
  color: var(--blue);
}

.hero__tiles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.hero__tile {
  border-radius: 1rem;
  padding: 1.5rem;
}

.hero__tile--blue { background: var(--blue); }
.hero__tile--navy { background: var(--navy); }

.hero__tile-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.hero__tile-value {
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3;
}

.hero__footnote {
  position: relative;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-muted);
}

.hero__footnote-line {
  width: 2rem;
  height: 1px;
  background: var(--border);
}
</style>
