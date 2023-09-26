export default defineEventHandler((event) => {
  if (!event.context.session.data) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Session not valid',
    })
  }
  return event.context.session.data
})
