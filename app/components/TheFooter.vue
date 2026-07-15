<script setup lang="ts">
import { MessageCircle, Instagram } from 'lucide-vue-next'

const services = ['Declaración de impuestos', 'Control de ingresos y gastos', 'Visita semanal al negocio', 'Nómina de trabajadores']
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div>
          <div class="footer__brand-row">
            <BrandLogo :size="30" light />
            <p class="footer__brand">Cuentas Claras</p>
          </div>
          <p class="footer__tag">Gestoría ONAT · La Habana, Cuba</p>
          <a :href="WA_TEL" target="_blank" rel="noopener noreferrer" class="footer__phone">
            <MessageCircle :size="15" />+53 5614 5910
          </a>
        </div>

        <div>
          <p class="footer__heading">Servicios</p>
          <ul class="footer__list">
            <li v-for="s in services" :key="s">{{ s }}</li>
          </ul>
        </div>

        <div>
          <p class="footer__heading">Redes</p>
          <div class="footer__socials">
            <a :href="IG_URL" target="_blank" rel="noopener noreferrer" class="footer__social"><Instagram :size="15" /></a>
          </div>
          <p class="footer__handle">@cuentasclarash</p>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© 2024 Cuentas Claras · La Habana, Cuba</p>
        <p class="footer__quote">"Tu negocio, siempre al día."</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: 3.5rem;
  padding-inline: 1.5rem;
  background: var(--navy);
}

.footer__grid {
  display: grid;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 768px) {
  .footer__grid { grid-template-columns: repeat(3, 1fr); }
}

.footer__brand-row {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.25rem;
}

.footer__brand {
  font-weight: 900;
  color: #fff;
  font-size: 1.25rem;
}

.footer__tag {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.875rem;
  margin-bottom: 1.25rem;
}

.footer__phone {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--blue);
  transition: color 0.25s ease, transform 0.25s ease;
}

.footer__phone:hover {
  color: #1abc9c;
  transform: translateX(3px);
}

.footer__heading {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

.footer__list li {
  transition: color 0.25s ease, transform 0.25s ease;
  cursor: default;
}

.footer__list li:hover {
  color: rgba(255, 255, 255, 0.9);
  transform: translateX(4px);
}

.footer__socials {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.footer__social {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.7);
  transition: transform 0.25s ease, background-color 0.25s ease;
}

.footer__social:hover {
  transform: scale(1.15);
  background: rgba(255, 255, 255, 0.15);
}

.footer__handle {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.875rem;
}

.footer__bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.25);
  font-size: 0.75rem;
}

@media (min-width: 640px) {
  .footer__bottom { flex-direction: row; }
}

.footer__quote {
  font-style: italic;
}
</style>
