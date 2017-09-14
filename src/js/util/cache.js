function cache () {
  const cache = {}

  return {
    set (id, payload) {
      cache[id] = payload
    },

    get (id) {
      return cache[id] || null
    },

    has (id) {
      return cache.hasOwnProperty(id)
    },

    inspect () {
      return cache
    }
  }
}

export default cache()
