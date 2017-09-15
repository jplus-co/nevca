import cache from './cache'

const wpFetch = context => url => {
  // Set loading flag to true
  !context.state.loading && context.setState({ loading: true })

  // Check cache for url. If it alrady exists, access it via the cache
  if (cache.has(url)) {
    context.setState({
      [url]: cache.get(url),
      loading: false
    }, console.log('data loaded from cache'))
  } else {
    // Or we'll fetch it
    fetch(url)
    .then(res => res.json())
    .then(json => {
      cache.set(url, json)
      context.setState({
        [url]: json,
        loading: false
      }, console.log('data loaded from api'))
    })
  }
}

export default wpFetch
