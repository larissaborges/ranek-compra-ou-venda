export function serialize(obj) {
    let stringFinal = ""
    for (let key in obj) {
      stringFinal += `&${key}=${obj[key]}`
      }
      return stringFinal
}

export function mapFields(options) {
  const object = {}
  for(let x = 0; x < options.fields.length; x++) {
    const field = [options.fields[x]]
    object[field] = {
      get() {
        return this.$store.state[options.base][field]
      },
      set(value) {
        this.$store.commit(options.mutation, {[field]: value})
      }
    }
  }
  return object
}