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

export interface BlogProps {
  posts: BlogPost[]
}

export interface GitHubRepository {
  html_url: string
  name: string
  description: string
  created_at: string
  image_url: string
}

export interface Hyperlink {
  title: string
  href: string
}

export interface LayoutProps {
  title: string
  children: React.ReactNode
}

export interface NavItem {
  name: string
  dest: string
}

export interface Params {
  params: { slug: string }
}

export interface PostProps {
  slug: string
  title: string
  date: string
  html: string
}

export interface ProjectCardProps {
  repository: GitHubRepository
  priority: boolean
}

export interface ProjectsProps {
  projects: GitHubRepository[]
}

export interface SocialIconProps {
  name: string
}
