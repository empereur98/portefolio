interface ContactFormData {
  name: string
  email: string
  message: string
}

export function useContactForm() {
  const form = reactive<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })

  const loading = ref(false)
  const success = ref(false)
  const error = ref<string | null>(null)

  const isValid = computed(() => {
    return (
      form.name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
      form.message.trim().length >= 10
    )
  })

  const submitForm = async () => {
    if (!isValid.value) {
      error.value = 'Veuillez remplir tous les champs correctement.'
      return
    }

    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await $fetch('/api/contact', {
        method: 'POST',
        body: {
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        },
      })

      success.value = true
      form.name = ''
      form.email = ''
      form.message = ''

      // Reset success message after 5 seconds
      setTimeout(() => {
        success.value = false
      }, 5000)
    } catch (err: any) {
      error.value = err.data?.message || 'Une erreur est survenue. Veuillez réessayer.'
    } finally {
      loading.value = false
    }
  }

  const resetForm = () => {
    form.name = ''
    form.email = ''
    form.message = ''
    error.value = null
    success.value = false
  }

  return {
    form,
    loading,
    success,
    error,
    isValid,
    submitForm,
    resetForm,
  }
}
