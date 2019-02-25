module.exports = ({ sources }, { success }) => {
  return success({ data: Object.assign(...sources) })
}
