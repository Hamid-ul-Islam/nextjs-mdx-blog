import Image from 'next/image'
import React from 'react'

export default function Thumbnail({ title }: { title: string }) {
	return (
		<div className="relative w-fit h-fit my-8">
			<Image
				src={'/gradient-bg.webp'}
				alt={title}
				width={720}
				height={405}
				priority
				className="border bg-muted transition-colors object-cover"
			/>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-2xl font-thin text-primary">
				{title}
			</div>
		</div>
	)
}
