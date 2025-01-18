import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { SOCIALS } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<section className="space-y-6 pb-8 md:pb-12 md:pt-10 lg:py-32">
			<div className="container mt-6 flex max-w-7xl flex-col items-center gap-4 text-center xl:mt-0">
				<div className="text-center">
					<div className="mb-8">
						<Image
							src={siteConfig.authorImage}
							alt={siteConfig.author}
							width={200}
							height={200}
							className="rounded-full mx-auto border-4  shadow-lg"
						/>
					</div>
					<h1 className="text-4xl text-primary font-bold mb-4">
						{siteConfig.author}
					</h1>
					<p className="text-xl  mb-8 max-w-md mx-auto">
						Full Stack{' '}
						<span className="text-yellow-300">JavaScript Developer</span>{' '}
						passionate about creating efficient and scalable web applications.
						Experienced in both frontend and backend technologies.
					</p>
					<div className="flex items-center justify-center space-x-2">
						{SOCIALS.map(social => (
							<Link
								key={social.label}
								href={social.path}
								rel="noreferrer"
								target="_blank"
								className={cn(
									buttonVariants({ variant: 'ghost' }),
									'text-primary px-0 hover:bg-primary transition-colors rounded-full p-2 size-8 fill-current',
								)}
							>
								<social.icon className="size-6" />
								<span className="sr-only">{social.label}</span>
							</Link>
						))}
					</div>
				</div>

				{/* my blog button */}
				<div className="space-x-4">
					<Link
						href="/blog"
						className={cn(
							buttonVariants({ size: 'lg', variant: 'secondary' }),
							'border hover:text-primary',
						)}
					>
						🎉My Blog
					</Link>
				</div>
			</div>
		</section>
	)
}
