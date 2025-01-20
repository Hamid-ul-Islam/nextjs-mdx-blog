// app/sitemap.ts
import { MetadataRoute } from 'next'
import { blogs as posts } from '#site/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Create blog post URLs
	const blogUrls = posts
		.filter(post => post.published)
		.map(post => ({
			url: `https://hamidul-islam.vercel.app/blog/${post.slug}`,
			lastModified: new Date(post.date),
			changeFrequency: 'weekly' as const,
			priority: 0.7,
		}))

	// Define static routes
	const routes = [
		{
			url: `https://hamidul-islam.vercel.app`,
			lastModified: new Date(),
			changeFrequency: 'daily' as const,
			priority: 1,
		},
		{
			url: `https://hamidul-islam.vercel.app/blog`,
			lastModified: new Date(),
			changeFrequency: 'daily' as const,
			priority: 0.8,
		},
		// Add other static routes as needed
	]

	return [...routes, ...blogUrls]
}
