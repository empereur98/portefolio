<template>
  <footer class="orido_tm_section">
    <div class="orido_tm_copyright">
      <div class="container">
        <div class="copyright_inner">
          <!-- Brand Logo / Name -->
          <div class="logo">
            <a href="#home" class="footer__logo">
              <span class="logo__dot">.</span>
              <span class="logo__text">TEGUE Franck</span>
            </a>
          </div>

          <!-- Copyright 2026 -->
          <div class="copy">
            <p>&copy; 2026 TEGUE Franck. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* ===================================================
   ORIDO COPYRIGHT / FOOTER
   Exact Background Color: #FFC448
   =================================================== */

.orido_tm_section {
  width: 100%;
  clear: both;
  position: relative;
}

.orido_tm_copyright {
  width: 100%;
  clear: both;
  background-color: #FFC448;
  padding: 32px 0;
  border-top: 1px solid rgba(18, 20, 29, 0.08);
  position: relative;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 30px;
}

.copyright_inner {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

/* Brand Name / Logo */
.footer__logo {
  display: inline-flex;
  align-items: baseline;
  text-decoration: none;
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 26px;
  font-weight: 800;
  color: #12141D;
  letter-spacing: -0.5px;
  transition: opacity 0.25s ease;
}

.footer__logo:hover {
  opacity: 0.85;
}

.logo__dot {
  font-size: 34px;
  color: #12141D;
  line-height: 1;
  margin-right: 2px;
}

.logo__text {
  color: #12141D;
}

/* Copyright 2026 */
.copy p {
  margin: 0;
  color: #12141D;
  font-family: var(--font-body, 'Inter', 'DM Sans', sans-serif);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
}

/* Responsive */
@media (max-width: 768px) {
  .orido_tm_copyright {
    padding: 24px 0;
  }

  .copyright_inner {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .footer__logo {
    font-size: 22px;
  }

  .copy p {
    font-size: 14px;
  }
}
</style>
