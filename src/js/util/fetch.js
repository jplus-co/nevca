import cache from './cache'

const fetch = url => {
  // Check cache for url. If it alrady exists, access it via the cache
  if (cache.has(url)) {
    console.log('%cData loaded from cache.', 'color: palevioletred;')
    return Promise.resolve(cache.get(url))
  } else {
    // Or we'll fetch it
    return window.fetch(url)
      .then(res => res.json())
      .then(json => {
        cache.set(url, json)
        console.log('%cData loaded from API.', 'color: papayawhip;')
        return Promise.resolve(json)
      })
  }
}

export default fetch
