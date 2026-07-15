<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next'

withDefaults(
  defineProps<{
    href: string
    variant?: 'primary' | 'navy' | 'white' | 'outline'
    lg?: boolean
  }>(),
  { variant: 'primary', lg: false },
)
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="wa-btn"
    :class="[`wa-btn--${variant}`, { 'wa-btn--lg': lg }]"
  >
    <MessageCircle :size="lg ? 20 : 17" :stroke-width="2" />
    <slot />
  </a>
</template>

<style scoped>
.wa-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  border-radius: 9999px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease;
}

.wa-btn--lg {
  padding: 1rem 1.75rem;
  font-size: 1rem;
}

.wa-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.wa-btn:active {
  transform: translateY(0) scale(0.97);
}

.wa-btn--primary {
  background: var(--blue);
  color: #fff;
}

.wa-btn--navy {
  background: var(--navy);
  color: #fff;
}

.wa-btn--white {
  background: #fff;
  color: var(--navy);
}

.wa-btn--outline {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.45);
}
</style>
