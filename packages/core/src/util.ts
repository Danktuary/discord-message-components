import colorToRgba from 'color-rgba'

export const defaultTimestamp = new Date()

export { default as markdownParser } from 'discord-markdown'

export const parseColorToRgba = (color?: string, alpha?: number): string | null => {
	if (!color) return null
	const [r, g, b, a] = colorToRgba(color) ?? []
	return `rgba(${r},${g},${b},${alpha ?? a})`
}

export const parseTimestamp = (timestamp: Date | string): string => {
	if (!(timestamp instanceof Date)) timestamp = new Date(timestamp)
	const [month, day, year] = [timestamp.getMonth() + 1, timestamp.getDate(), timestamp.getFullYear()]
	return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`
}

export const resolveImage = (images: { [key: string]: string }, image: string): string => {
	return images[image] ?? image ?? images?.default
}
