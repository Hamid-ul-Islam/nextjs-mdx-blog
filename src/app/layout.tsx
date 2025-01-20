import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Lexend } from 'next/font/google'
import '@/styles/globals.css'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import App from '@/components/app'

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' })

export const metadata: Metadata = {
	title: {
		template: "%s | The Hamid-ul-Islam's Blog",
		default: "The Hamid-ul-Islam's Blog",
	},
	icons: {
		icon: '/favicon.png',
	},
	verification: {
		google: '2GPkgD0Z-LkM-aOI8Fxg_Tv_iuxIjXAsYafu2Qj464E',
	},
	keywords: [
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Blog',
		'Hamid-ul-Islam',
	],
	description:
		"Join 5.9k people who have read Hamid's 102 articles on JavaScript, TypeScript, React, Testing, Career, and more. Learn how to become a better developer.",

	// OpenGraph metadata
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://yourdomain.com', // Replace with your actual domain
		siteName: "The Hamid-ul-Islam's Blog",
		title: "The Hamid-ul-Islam's Blog",
		description:
			"Join 5.9k people who have read Hamid's 102 articles on JavaScript, TypeScript, React, Testing, Career, and more. Learn how to become a better developer.",
		images: [
			{
				url: '/og.png',
				width: 1200,
				height: 630,
				alt: "The Hamid-ul-Islam's Blog",
			},
		],
	},

	// Twitter metadata
	twitter: {
		card: 'summary_large_image',
		title: "The Hamid-ul-Islam's Blog",
		description:
			"Join 5.9k people who have read Hamid's 102 articles on JavaScript, TypeScript, React, Testing, Career, and more. Learn how to become a better developer.",
		images: ['/og.png'],
		creator: '@yourtwitterhandle', // Replace with your Twitter handle
	},

	// Additional metadata
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},

	authors: [
		{
			name: 'Hamid-ul-Islam',
			url: 'https://yourdomain.com/about', // Replace with your about page URL
		},
	],

	category: 'technology',
}

const fontCode = localFont({
	src: '../assets/fonts/GeistMonoVF.woff2',
	variable: '--font-code',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={cn(
					'min-h-screen antialiased font-lexend bg-background',
					lexend.variable,
					fontCode.variable,
				)}
			>
				<App>{children}</App>
			</body>
		</html>
	)
}
