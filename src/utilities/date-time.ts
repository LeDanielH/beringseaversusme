import { format, isValid } from 'date-fns'
import cs from 'date-fns/locale/cs'

const defaultDateForm = 'Do M. YYYY'
const defaultDateTimeForm = 'D. M. YYYY H:mm'

export const formatWithLocale = (
	date: Date | number | string,
	form = defaultDateForm
) => {
	return format(date, form, { locale: cs })
}

export const formatDateTime = (
	date: Date | number | string,
	form = defaultDateTimeForm
) => {
	return format(date, form, { locale: cs })
}

export const getNextDay = (day: Date, offset: number = 1): Date => {
	const nextDay = new Date()
	nextDay.setDate(day.getDate() + offset)
	return nextDay
}

export const getBeginningOfNextDay = (day: Date): Date => {
	const beggOfNextDay = getNextDay(day)
	beggOfNextDay.setHours(0, 0, 0, 0)
	return beggOfNextDay
}

export const getTimeTillTomorrow = (today: Date): number => {
	return getBeginningOfNextDay(today).getTime() - today.getTime()
}

export const getDateOrUndefined = (value: any): Date | undefined => {
	const date = new Date(value)
	return value && isValid(date) ? date : undefined
}
