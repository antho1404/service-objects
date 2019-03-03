module.exports = ({ sources, match, from }, { success }) => {
  const { field, equal, any } = match
  let data = { }

  sources.forEach((source) => {
    if (any ||
        (equal && source[field] === equal)) {
      data[source[field]] = source[from]
    }
  })

  return success({ data })
}
