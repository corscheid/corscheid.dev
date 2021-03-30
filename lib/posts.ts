// Code from https://github.com/styfle/styfle.dev used with permission of original author
// Original file: https://github.com/styfle/styfle.dev/blob/main/utils/posts.ts
import matter from 'gray-matter'
import { resolve, join } from 'path'
import fs from 'fs'
const { readFile, readdir } = fs.promises

export interface BlogPost {
  title: string
  slug: string
  date: string
  description: string
  tags: string
  cover_image: string
  cover_alt: string
  series: string
  published: boolean
  content: string
}

function validate(fieldName: string, fieldValue: string, fileName: string): void {
  if (typeof fieldValue !== 'string') {
    throw new Error(
      `Expected string ${fieldName} but found: ${fieldValue}. ` +
      `Did you forget to add it to ${fileName}?`
    )
  }
}

export async function getPosts(): Promise<BlogPost[]> {
  const postsDirectory = resolve(process.cwd(), '_posts')
  const postFiles = await readdir(postsDirectory)

  const posts = await Promise.all(
    postFiles.map(async fileName => {
      const fullPath = join(postsDirectory, fileName)
      const markdown = await readFile(fullPath, 'utf8')
      const {
        data: { title, slug, date, description, tags, cover_image, cover_alt, series, published },
        content
      } = matter(markdown)

      const fields = [
        {name: 'title', value: title},
        {name: 'slug', value: slug},
        {name: 'date', value: date},
        {name: 'description', value: description},
        {name: 'tags', value: tags},
        {name: 'cover_image', value: cover_image},
        {name: 'cover_alt', value: cover_alt},
        {name: 'series', value: series},
        {name: 'published', value: published},
      ]

      fields.forEach(field => { validate(field.value, field.name, fileName) })

      return { title, slug, date, description, tags, cover_image, cover_alt, series, published, content }
    })
  )

  return posts
}
