export default function getPages(pageCount: number, currentPage: number) {
  const pages = []
  let start = Math.max(1, currentPage - 2)
  let end = Math.min(pageCount, currentPage + 2)

  if (currentPage <= 3) {
    start = 1
    end = Math.min(5, pageCount)
  } else if (currentPage >= pageCount - 2) {
    start = Math.max(1, pageCount - 4)
    end = pageCount
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
}

