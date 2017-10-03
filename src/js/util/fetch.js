import cache from './cache'

const fetch = url => {
  // Check cache for url. If it already exists, access it via the cache
  if (cache.has(url)) {
    // Remove for production
    console.log(`%c${url}\n\nloaded from cache.\n\n`, 'color: palevioletred;')

    return Promise.resolve(cache.get(url))
  } else {
    // Or we'll fetch it
    return window.fetch(url)
      .then(res => res.json())
      .then(json => {
        cache.set(url, json)
        // Remove for production
        console.log(`%c${url}\n\nloaded from API.\n\n`, 'color: papayawhip;')

        return Promise.resolve(json)
      })
  }
}

export default fetch
