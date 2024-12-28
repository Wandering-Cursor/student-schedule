const getLastPart = (url: string) => {
  if (url.endsWith('/')) {
    url = url.slice(0, -1)
  }
  const parts = url.split('/')
  return parts[parts.length - 1]
}

export { getLastPart }
