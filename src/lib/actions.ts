'use server'

import { createCanvas, loadImage } from 'canvas'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function generateThumbnail(title: string): Promise<string> {
	const canvasWidth = 800
	const canvasHeight = 400
	const padding = 20
	const lineHeight = 50 // Height between lines
	const maxTextWidth = canvasWidth - padding * 2 // Text area width

	// Create canvas
	const canvas = createCanvas(canvasWidth, canvasHeight)
	const ctx = canvas.getContext('2d')

	// Gradient background
	const gradient = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight)
	gradient.addColorStop(0, '#588157')
	gradient.addColorStop(1, '#344e41')
	ctx.fillStyle = gradient
	ctx.fillRect(10, 10, canvasWidth - 20, canvasHeight - 20)
	// Add text styling
	ctx.font = 'bold 40px Arial'
	ctx.fillStyle = '#ffffff'
	ctx.textAlign = 'center'
	ctx.textBaseline = 'middle'

	// Wrap text logic
	const words = title.split(' ')
	let lines: string[] = []
	let currentLine = words[0]

	for (let i = 1; i < words.length; i++) {
		const word = words[i]
		const width = ctx.measureText(currentLine + ' ' + word).width
		if (width < maxTextWidth) {
			currentLine += ' ' + word
		} else {
			lines.push(currentLine)
			currentLine = word
		}
	}
	lines.push(currentLine)

	// Center text vertically
	const totalTextHeight = lines.length * lineHeight
	let y = (canvasHeight - totalTextHeight) / 2 + lineHeight / 2

	// Draw each line
	for (const line of lines) {
		ctx.fillText(line, canvasWidth / 2, y)
		y += lineHeight
	}

	// Save the file
	const outputPath = path.join(
		process.cwd(),
		'public',
		'thumbnails',
		`${title}.png`,
	)
	const buffer = canvas.toBuffer('image/png')
	await writeFile(outputPath, buffer)

	return `/thumbnails/${title}.png`
}

export async function generateThumbnailWithImage(
	title: string,
): Promise<string> {
	const canvasWidth = 800
	const canvasHeight = 400
	const padding = 20
	const lineHeight = 50 // Height between lines
	const maxTextWidth = canvasWidth - padding * 2 // Text area width

	// Create canvas
	const canvas = createCanvas(canvasWidth, canvasHeight)
	const ctx = canvas.getContext('2d')

	// Load gradient image
	const gradientImagePath = path.join(
		process.cwd(),
		'public',
		'gradient-bg.png',
	)
	const gradientImage = await loadImage(gradientImagePath)
	ctx.drawImage(gradientImage, 0, 0, canvasWidth, canvasHeight)

	// Add text styling
	ctx.font = 'bold 40px Arial'
	ctx.fillStyle = '#ffffff'
	ctx.textAlign = 'center'
	ctx.textBaseline = 'middle'

	// Wrap text logic
	const words = title.split(' ')
	let lines: string[] = []
	let currentLine = words[0]

	for (let i = 1; i < words.length; i++) {
		const word = words[i]
		const width = ctx.measureText(currentLine + ' ' + word).width
		if (width < maxTextWidth) {
			currentLine += ' ' + word
		} else {
			lines.push(currentLine)
			currentLine = word
		}
	}
	lines.push(currentLine)

	// Center text vertically
	const totalTextHeight = lines.length * lineHeight
	let y = (canvasHeight - totalTextHeight) / 2 + lineHeight / 2

	// Draw each line
	for (const line of lines) {
		ctx.fillText(line, canvasWidth / 2, y)
		y += lineHeight
	}

	// Save the file
	const outputPath = path.join(
		process.cwd(),
		'public',
		'thumbnails',
		`${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`,
	)
	const buffer = canvas.toBuffer('image/png')
	await writeFile(outputPath, buffer)

	return `/thumbnails/${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`
}
