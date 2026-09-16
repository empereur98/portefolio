export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body || !body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Veuillez remplir tous les champs obligatoires (nom, email, message).'
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Veuillez fournir une adresse email valide.'
    })
  }

  // In production, send via Resend, Sendgrid, or nodemailer.
  console.log('Received contact message:', {
    name: body.name,
    email: body.email,
    message: body.message,
    timestamp: new Date().toISOString()
  })

  return {
    success: true,
    message: 'Votre message a bien été envoyé. Merci !'
  }
})
