function getISODateFormat(date: Date | null | undefined): string | undefined {
  if (date === null) {
    return undefined
  }
  if (date === undefined) {
    return undefined
  }
  return date.toISOString().split('T')[0]
}

function getISODateWithoutTZ(date: Date | null | undefined): string | undefined {
  if (date === null) {
    return undefined
  }
  if (date === undefined) {
    return undefined
  }

  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

function dateTimeFormat() {
  return Intl.DateTimeFormat(Intl.DateTimeFormat().resolvedOptions().locale)
}

function getLocalDateFromString(date?: string): string {
  if (!date || undefined === date) {
    return ''
  }
  return dateTimeFormat().format(new Date(date))
}

function getLocalizedDateTime(data: string): string {
  const date = new Date(data)
  return date.toLocaleString()
}

export {
  dateTimeFormat,
  getLocalDateFromString,
  getISODateFormat,
  getISODateWithoutTZ,
  getLocalizedDateTime,
}
