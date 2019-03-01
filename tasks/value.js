module.exports = ({ sources, match, from }, { success, failure }) => {
  const { field, equal } = match

  const source = sources.find((source) => {
    if (equal) {
      return source[field] === equal
    }
    return false
  })

  if (source) {
    return success({ data: source[from] })
  }
  return failure({ message: 'no match' })
}
