import cache from './cache'

const fetch = (opts = {}) => {
  let url = typeof opts === 'string' ? opts : opts.url
  let callback = typeof opts === 'object' ? opts.callback : undefined

  // Check cache for url. If it already exists, access it via the cache
  if (cache.has(url)) {
    // Remove for production
    console.log(`%c${url}\n\nloaded from cache.\n\n`, 'color: palevioletred;')

    return Promise.resolve(cache.get(url))
  } else {
    // Or we'll fetch it
    return window.fetch(url)
      .then(res => {
        callback && callback(res)
        return res.json()
      })
      .then(json => {
        cache.set(url, json)
        // Remove for production
        console.log(`%c${url}\n\nloaded from API.\n\n`, 'color: papayawhip;')

        return Promise.resolve(json)
      })
  }
}

export default fetch
