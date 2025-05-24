const getPeriodicNumberFromUrl = (url: string): number => {
  return Number(url
    .replace('https://pokeapi.co/api/v2/pokemon/', '')
    .replace('/', ''))
}

export default getPeriodicNumberFromUrl