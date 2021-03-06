
// @flow

export const selectUrlString = (url: Object|string) => {
  return url.toString ? url.toString() : url
}

export const selectBodyJSON = (body: Object|string) => {
  return typeof body === 'object' ? JSON.stringify(body) : body
}

/*
  selectStatusColor:
    helper that takes status code and returns hex color code.
*/

export const selectStatusColor = (status: number|null) => {
  if (!status) {
    return '#f00000'
  }

  if (status >= 100 && status < 200) {
    // 100s - informational
    return '#afafaf'
  } else if (status >= 200 && status < 300) {
    // 200s - ok
    return '#00ae25'
  } else if (status >= 300 && status < 400) {
    // 300s - redirection
    return '#ab00ff'
  } else if (status >= 400 && status < 500) {
    // 400s - client error
    return '#ff8200'
  } else {
    // 500s - server error
    return '#f00000'
  }
}
