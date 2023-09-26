export default defineEventHandler(async (event) => {
  const { email, name, password } = await readBody(event)

  event.context.session.data = { email, name }

  return { email, name }
})
