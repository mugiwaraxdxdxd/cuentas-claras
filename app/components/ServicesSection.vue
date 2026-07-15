<script setup lang="ts">
import { FileText, Calculator, Bell, Shield, FolderOpen, Users } from 'lucide-vue-next'

const SERVICES = [
  { icon: FileText, title: 'Orden de ingresos y gastos', desc: 'Control de cada movimiento clasificado por tipo: ventas, compras, pagos fijos, salarios.' },
  { icon: Calculator, title: 'Tu declaración de impuestos', desc: 'Cálculo y llenado de formularios ONAT. Solo revisas y presentas.' },
  { icon: Bell, title: 'Control mensual + visita semanal', desc: 'Avisos antes de cada vencimiento y visita semanal. Cero multas por olvido.' },
  { icon: Shield, title: 'Listo ante fiscalizaciones', desc: 'Organizo y verifico recibos, facturas y extractos para que estés tranquilo.' },
  { icon: FolderOpen, title: 'Tus comprobantes, ordenados', desc: 'Guardamos tus soportes digital o físico, fáciles de consultar.' },
  { icon: Users, title: 'Nómina de tus trabajadores', desc: 'Revisión de salarios y movimientos de nómina, todo correcto y en regla.' },
]
</script>

<template>
  <section class="services">
    <div class="container">
      <div class="services__head">
        <SectionLabel v-reveal>En qué te ayudo</SectionLabel>
        <h2 v-reveal:up="0.1" class="services__title">Todo lo que necesitas para cumplir, en orden.</h2>
      </div>

      <div class="services__grid">
        <div
          v-for="({ icon, title, desc }, i) in SERVICES"
          :key="title"
          v-reveal:up="i * 0.07"
          class="services__card"
        >
          <div class="services__icon">
            <component :is="icon" :size="18" />
          </div>
          <h3 class="services__card-title">{{ title }}</h3>
          <p class="services__card-desc">{{ desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding-block: 6rem;
  padding-inline: 1.5rem;
}

.services__head {
  margin-bottom: 3.5rem;
}

.services__title {
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: -0.02em;
  max-width: 36rem;
  color: var(--navy);
}

@media (min-width: 768px) {
  .services__title { font-size: 3rem; }
}

.services__grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .services__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .services__grid { grid-template-columns: repeat(3, 1fr); }
}

.services__card {
  background: #fff;
  border-radius: 1rem;
  padding: 1.75rem;
  border: 1px solid var(--border);
  transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease, border-color 0.25s ease;
}

.services__card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(22, 160, 133, 0.12);
  border-color: rgba(22, 160, 133, 0.28);
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease, border-color 0.25s ease;
}

.services__icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  background: var(--blue-soft);
  border: 1px solid var(--border);
  color: var(--blue);
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.services__card:hover .services__icon {
  transform: scale(1.15) rotate(8deg);
  background: var(--blue);
  border-color: var(--blue);
  color: #fff;
}

.services__card-title {
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-size: 0.9375rem;
  color: var(--navy);
}

.services__card-desc {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--text-muted);
}
</style>
