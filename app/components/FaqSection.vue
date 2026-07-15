<script setup lang="ts"></script>

<template>
  <section class="faq">
    <div class="container-sm">
      <div class="faq__head">
        <SectionLabel v-reveal>Preguntas frecuentes</SectionLabel>
        <h2 v-reveal:up="0.1" class="faq__title">Tus dudas, resueltas.</h2>
      </div>

      <div v-reveal:up="0.15" class="faq__card">
        <FaqRow v-for="(f, i) in FAQS" :key="i" :q="f.q" :a="f.a" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  padding-block: 6rem;
  padding-inline: 1.5rem;
  background: var(--gold-light);
}

.faq__head {
  margin-bottom: 3rem;
}

.faq__title {
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: var(--navy);
}

@media (min-width: 768px) {
  .faq__title { font-size: 3rem; }
}

.faq__card {
  background: #fff;
  border-radius: 1rem;
  border: 1px solid var(--border);
  padding-inline: 2rem;
}
</style>
