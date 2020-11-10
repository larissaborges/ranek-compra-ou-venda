export function serialize(obj) {
    let stringFinal = ""
    for (let key in obj) {
      stringFinal += `&${key}=${obj[key]}`
      }
      return stringFinal
}