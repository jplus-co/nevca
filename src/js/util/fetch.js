import cache from './cache'

const fetch = (opts = {}) => {
  let url = typeof opts === 'string' ? opts : opts.url
  let callback = typeof opts === 'object' ? opts.callback : undefined

  // Check cache for url. If it already exists, access it via the cache
  if (cache.has(url)) {
    // Remove for production
    console.log(`%c${url}\n\nloaded from cache.\n\n`, 'color: palevioletred;')

    const data = cache.get(url)

    callback && callback(data)

    return Promise.resolve(data)
  } else {
    // Or we'll fetch it
    return window.fetch(url)
      .then(res => {
        return {
          url,
          totalRecords: res.headers.get('X-WP-Total'),
          pageCount: res.headers.get('X-WP-TotalPages'),
          json: res.json()
        }
      })
      .then(data => {
        callback && callback(data)

        cache.set(url, data)

        // Remove for production
        console.log(`%c${url}\n\nloaded from API.\n\n`, 'color: papayawhip;')

        return Promise.resolve(data)
      })
  }
}

export default fetch
