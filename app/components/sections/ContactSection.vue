<template>
  <section class="contact section" id="contact">
    <div class="container">
      <div class="contact__inner">
        <!-- Left info column -->
        <div class="contact__info animate-on-scroll fade-left">
          <UiSectionTitle
            label="Get in Touch"
            title="Let's build your next breakthrough"
            subtitle="Whether you have an upcoming project, a challenging engineering question, or just want to connect, feel free to send a message."
          />

          <div class="contact__details">
            <div class="contact__detail-item">
              <div class="contact__detail-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <span class="contact__detail-label">Email</span>
                <a :href="`mailto:${email}`" class="contact__detail-value">{{ email }}</a>
              </div>
            </div>

            <div class="contact__detail-item">
              <div class="contact__detail-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <span class="contact__detail-label">Location</span>
                <span class="contact__detail-value">Worldwide (Remote / On-site)</span>
              </div>
            </div>

            <div class="contact__detail-item">
              <div class="contact__detail-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <span class="contact__detail-label">Response Time</span>
                <span class="contact__detail-value">Within 24 hours</span>
              </div>
            </div>
          </div>

          <!-- Social networks -->
          <div class="contact__socials">
            <span class="contact__socials-label">Follow Me</span>
            <div class="contact__socials-links">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="contact__social-link"
                :aria-label="social.name"
              >
                <component :is="social.icon" />
              </a>
            </div>
          </div>
        </div>

        <!-- Right form column -->
        <div class="contact__form-col animate-on-scroll fade-right">
          <div class="contact__form-card">
            <h3 class="contact__form-title">Send a Message</h3>
            <p class="contact__form-subtitle">Fill in the fields below and I'll get back to you promptly.</p>

            <form @submit.prevent="submitForm" class="contact__form">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="e.g. John Doe"
                  required
                  autocomplete="name"
                />
              </div>

              <div class="form-group">
                <label for="email">Your Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="e.g. john@example.com"
                  required
                  autocomplete="email"
                />
              </div>

              <div class="form-group">
                <label for="message">Your Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>

              <div v-if="error" class="contact__alert contact__alert--error">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                {{ error }}
              </div>

              <div v-if="success" class="contact__alert contact__alert--success">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Message sent successfully! I will reply soon.
              </div>

              <button
                type="submit"
                class="btn btn--primary btn--full"
                :disabled="loading"
              >
                <span v-if="loading" class="contact__btn-loading">
                  <span class="projects__spinner projects__spinner--sm"></span>
                  Sending...
                </span>
                <span v-else>
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    email?: string
  }>(),
  {
    email: 'contact@portfolio.dev'
  }
)

const { form, loading, success, error, submitForm } = useContactForm()

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'currentColor' }, [
      h('path', {
        d: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'
      })
    ])
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'currentColor' }, [
      h('path', {
        d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
      })
    ])
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'currentColor' }, [
      h('path', {
        d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
      })
    ])
  }
]
</script>

<style scoped>
.contact {
  background: var(--color-bg-secondary);
  position: relative;
}

.contact__inner {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: var(--space-4xl);
  align-items: flex-start;
}

.contact__details {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);
}

.contact__detail-item {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.contact__detail-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-circle);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact__detail-label {
  display: block;
  font-size: var(--fs-small);
  color: var(--color-text-tertiary);
  margin-bottom: 2px;
}

.contact__detail-value {
  font-size: var(--fs-body);
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
  transition: color var(--duration-fast);
}

a.contact__detail-value:hover {
  color: var(--color-accent);
}

.contact__socials-label {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--space-md);
}

.contact__socials-links {
  display: flex;
  gap: var(--space-md);
}

.contact__social-link {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-circle);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--duration-fast) var(--ease-out);
}

.contact__social-link:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-bg-primary);
  transform: translateY(-3px);
}

.contact__form-card {
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-3xl);
  box-shadow: var(--shadow-card);
}

.contact__form-title {
  font-size: var(--fs-h3);
  font-weight: var(--fw-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
}

.contact__form-subtitle {
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2xl);
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.contact__alert {
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  font-size: var(--fs-small);
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.contact__alert--error {
  background: rgba(255, 71, 87, 0.12);
  border: 1px solid rgba(255, 71, 87, 0.3);
  color: #ff4757;
}

.contact__alert--success {
  background: rgba(0, 212, 170, 0.12);
  border: 1px solid rgba(0, 212, 170, 0.3);
  color: var(--color-accent);
}

.contact__btn-loading {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
}

.projects__spinner--sm {
  width: 18px;
  height: 18px;
  border-width: 2px;
}

@media (max-width: 992px) {
  .contact__inner {
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
  }

  .contact__form-card {
    padding: var(--space-2xl);
  }
}
</style>
