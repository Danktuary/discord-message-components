export const parseTimestamp = (timestamp: Date | string): string => {
	if (!(timestamp instanceof Date)) timestamp = new Date(timestamp)
	const [month, day, year] = [timestamp.getMonth() + 1, timestamp.getDate(), timestamp.getFullYear()]
	return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`
}

export const defaultTimestamp = parseTimestamp(new Date())

