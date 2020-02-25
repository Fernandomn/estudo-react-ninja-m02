'use strict'

const centerRule = ({ total, activePage }) => {
  return activePage - 1 <= 0
    ? 1
    : activePage === total
      ? activePage - 2
      : activePage - 1
}

const isNumber = (value) => typeof value === 'number'

const fixArrayBegin = (pages) => {
  let tempPages = pages
  let firstPage = tempPages[0]
  let secondPage = tempPages[1]

  if (secondPage === (firstPage + 2)) {
    tempPages = [firstPage, firstPage + 1, ...tempPages.slice(1)]
  }
  firstPage = tempPages[0]
  secondPage = tempPages[1]
  if (secondPage > (firstPage + 2)) {
    tempPages = [firstPage, '...', ...tempPages.slice(1)]
  }
  return tempPages
}

const fixArrayEnd = (pages) => {
  let tempPages = pages
  let penultimatePage = tempPages[tempPages.length - 2]
  let lastPage = tempPages[tempPages.length - 1]

  if (penultimatePage === (lastPage - 2)) {
    tempPages = [...tempPages.slice(0, -1), lastPage - 1, lastPage]
  }
  penultimatePage = tempPages[tempPages.length - 2]
  lastPage = tempPages[tempPages.length - 1]
  if (penultimatePage < (lastPage - 2)) {
    tempPages = [...tempPages.slice(0, -1), '...', lastPage]
  }
  return tempPages
}

const pagination = ({ total = 1, activePage = 1 } = {}) => {
  if (!isNumber(total)) {
    throw new TypeError('"total" should be a number.')
  }
  if (!isNumber(activePage)) {
    throw new TypeError('"activePage" should be a number.')
  }
  if (total <= 5) {
    return Array.from({
      length: total
    }, (_, i) => i + 1)
  }
  // Array.apply() vai gerar um array. o objeto {length:...} determina o tamanho dele.
  // map fará o preenchumento
  // Array.from9) é analogo, mas nao precisa do primerio aprametro this, e o map já está embutido na chamada
  const visiblePages = 3
  let pages = [
    1,
    ...Array.from({
      length: visiblePages
    }, (_, i) => i + centerRule({
      total,
      activePage
    })),
    total
  ]
  pages = pages.filter((page, index, array) => array.indexOf(page) === index)

  pages = fixArrayBegin(pages)
  pages = fixArrayEnd(pages)

  return pages
}

export default pagination
