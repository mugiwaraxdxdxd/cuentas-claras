<script setup lang="ts">
const isScrolled = useIsScrolled(50)
</script>

<template>
  <nav class="nav" :class="{ 'is-scrolled': isScrolled }">
    <div class="container nav__inner">
      <div class="nav__brand enter-left">
        <BrandLogo :size="34" class="nav__logo" />
        <div class="nav__brand-text">
          <span class="nav__name">Cuentas Claras</span>
          <span class="nav__tag">Gestoría ONAT · La Habana</span>
        </div>
      </div>
      <div class="enter-right" style="animation-delay: 0.1s">
        <WhatsappButton :href="WA_HERO">Escríbeme</WhatsappButton>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  inset-inline: 0;
  top: 0;
  z-index: 50;
  background: rgba(247, 246, 243, 0);
  backdrop-filter: blur(0px);
  border-bottom: 1px solid rgba(17, 24, 39, 0);
  box-shadow: 0 1px 8px rgba(17, 24, 39, 0);
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.nav.is-scrolled {
  background: rgba(247, 246, 243, 0.96);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(17, 24, 39, 0.08);
  box-shadow: 0 1px 8px rgba(17, 24, 39, 0.06);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;
}

.nav__brand {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.nav__logo {
  flex-shrink: 0;
}

.nav__brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.nav__name {
  font-weight: 900;
  font-size: 1.125rem;
  letter-spacing: -0.01em;
  color: var(--navy);
}

.nav__tag {
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--text-muted);
}
</style>
