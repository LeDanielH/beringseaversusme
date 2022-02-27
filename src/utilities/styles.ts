import { round } from './numbers-mod'
import { CssDirectionType, UnitType } from '../types/style'
import { MAX_PRECISION } from '../constants/common'

export const mediaMax = (maxWidth: string) => `@media (max-width: ${maxWidth})`

const directionToDegrees: Record<CssDirectionType, number> = {
	top: 0,
	right: 90,
	bottom: 180,
	left: 270
}

// element has to be initially pointing upwards for this to work as expected
export const getRotationBasedOnDirection = (
	direction: CssDirectionType
): number => directionToDegrees[direction]

// if viewBoxWidth and viewBoxHeight differs we use the size we defined to calculate the shorter side.
export const calculateSvgSize = (
	sizeWeDefined: number,
	exportedWidth: number,
	exportedHeight: number
) => {
	if (exportedHeight !== exportedWidth) {
		const maxSize = Math.max(exportedWidth, exportedHeight)
		const minSize = Math.min(exportedWidth, exportedHeight)
		const shorterSideCalculatedSize = round(
			sizeWeDefined / (maxSize / minSize),
			MAX_PRECISION
		)
		if (exportedHeight > exportedWidth) {
			return {
				width: shorterSideCalculatedSize,
				height: sizeWeDefined
			}
		} else {
			return {
				width: sizeWeDefined,
				height: shorterSideCalculatedSize
			}
		}
	} else {
		return {
			width: sizeWeDefined,
			height: sizeWeDefined
		}
	}
}

// easily return string with value with proper unit
export const withUnit = (value: number, unit: UnitType): string =>
	`${value}${unit}`

export const getCircleToSquareCorner = (size: number) =>
	round((size * Math.sqrt(2) - size) * 0.25, MAX_PRECISION)

export const sizeRounderWithUnit = (value: number, unit: UnitType) =>
	withUnit(round(value, MAX_PRECISION), unit)
