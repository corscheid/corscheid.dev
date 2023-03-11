export function formatDate(dateString: string) {
  const postDate = new Date(dateString)
  const year = postDate.getFullYear()
  const month =
    postDate.getMonth() + 1 < 10
      ? `0${postDate.getMonth() + 1}`
      : `${postDate.getMonth() + 1}`
  const day =
    postDate.getDate() < 10 ? `0${postDate.getDate()}` : `${postDate.getDate()}`
  return `${year}-${month}-${day}`
}
