const dot = require('dot-object')
const minimatch = require('minimatch')

module.exports = ({ source, fields, flatten }, { success }) => {
  if (Array.isArray(source)) {
    const data = source.map((item) => {
      return selectObject({ source: item, fields, flatten })
    }).filter((item) => item)
    if (flatten) {
      return success({ data: [].concat.apply([], data) })
    }
    return success({ data })
  }
  return success({ data: selectObject({ source, fields, flatten }) })
}

function selectObject({ source, fields, flatten }) {
  let dotted = dot.dot(source)
  for (key in dotted) {
    const selected = fields.some((field) => minimatch(key, field))
    if (!selected) delete dotted[key]
  }

  const data = dot.object(dotted)
  if (!flatten) {
    return data
  }

  // first save non array fields into new object
  let _fields = {}
  for (key in data) {
    let val = data[key]
    if (!Array.isArray(val)) _fields[key] = val
  }

  // find out the first array type in the object since we only expect
  // one array.
  // merge non array fields to each child in the object type.
  let _data = []
  for (key in data) {
    let val = data[key]
    if (Array.isArray(val)) {
      val.forEach(v => _data.push(Object.assign(v, _fields)))
      return _data
    }
  }

  // always expect one array type when 'flatten' is used.
  return false
}