function dateTimeFormat() {
  return Intl.DateTimeFormat(Intl.DateTimeFormat().resolvedOptions().locale)
}

function getLocalDateFromString(date?: string): string {
  if (!date || undefined === date) {
    return ''
  }
  return dateTimeFormat().format(new Date(date))
}

export { dateTimeFormat, getLocalDateFromString }
