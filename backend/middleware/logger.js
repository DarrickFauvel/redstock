const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const date = new Date()

  console.log(`[${date.toISOString()}] ${method} ${url}`)

  next()
}

export default logger
