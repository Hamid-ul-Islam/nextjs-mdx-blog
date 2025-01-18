import React, { PropsWithChildren } from 'react'
import SiteHeader from '@/components/site-header'
import { siteConfig } from '@/config/site'
import Link from 'next/link'

export default function App({ children }: PropsWithChildren) {
	return (
		<div className="flex min-h-dvh flex-col space-y-6">
			<SiteHeader />
			<main className="container flex-1">{children}</main>
			<footer className=" container border-t border-t-secondary/60 py-3 text-center">
				<p className="text-xs text-muted-foreground">
					All rights reserved. &copy;{' '}
					<Link
						target="_blank"
						rel="noreferrer"
						href={siteConfig.social.github}
						className="text-primary"
					>
						{siteConfig.author}
					</Link>{' '}
					{new Date().getFullYear()}
				</p>
			</footer>
		</div>
	)
}
