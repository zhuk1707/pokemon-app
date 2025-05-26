export default function capitalizeWord(word: string): string  {
  if (word.length) return word[0].toUpperCase() + word.slice(1)
  return ''
}