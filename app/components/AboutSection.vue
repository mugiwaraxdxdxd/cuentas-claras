<script setup lang="ts">
import { CheckCircle } from 'lucide-vue-next'

const tags = ['TCP y MIPYMES', 'La Habana', 'Al día con la tecnología', 'Trato siempre cercano']
</script>

<template>
  <section class="about">
    <div class="container about__content">
      <SectionLabel v-reveal>Sobre mí</SectionLabel>
      <h2 v-reveal:up="0.05" class="about__title">Detrás de Cuentas Claras estoy yo.</h2>
      <div v-reveal:up="0.1" class="about__copy">
        <p>Me dedico a que negocios como el tuyo cumplan con la ONAT sin dolores de cabeza.</p>
        <p>Soy de la nueva generación de gestores: ordenada, cercana y al día con la tecnología. Me gusta explicar las cosas claras y acompañarte de verdad — estar para ti mes a mes, no desaparecer después del primero.</p>
      </div>
      <div class="about__tags">
        <div v-for="(t, i) in tags" :key="t" v-reveal:left="0.4 + i * 0.08" class="about__tag">
          <CheckCircle :size="15" class="about__tag-icon" />
          {{ t }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding-block: 6rem;
  padding-inline: 1.5rem;
}

.about__content {
  max-width: 42rem;
}

.about__title {
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  color: var(--navy);
}

@media (min-width: 768px) {
  .about__title { font-size: 3rem; }
}

.about__copy {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--text-muted);
}

.about__tags {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.75rem;
}

@media (min-width: 480px) {
  .about__tags {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.about__tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text);
}

.about__tag-icon {
  color: var(--blue);
  flex-shrink: 0;
}
</style>
