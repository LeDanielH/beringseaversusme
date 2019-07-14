import { round } from '../utilities/numbers-mod'
import { rem } from 'polished'
import { SpacingSizes } from '../types/style'

const COLORS = {
	grayLightest: '#f7f7f7',
	grayLighter: '#ebebeb',
	gray: '#7a7a7a',
	black: '#393939',
	white: '#ffffff',
	red: '#df1600',
	blue: '#2cb1cb',
	boxShadow: '0 0.125em 0.275em 0 rgba(0,0,0,0.125)' // copied from previous web
}

const TRANSITION = {
	duration: 300,
	easing: 'ease',
	distance: 3
}

const TYPOGRAPHY = {
	ffHeadings: 'Oswald, sans-serif',
	ffBody: 'Arimo, sans-serif',
	lhBody: 1.7,
	fsBody: rem(14),
	fsBodyBigger: rem(16),
	fsTitle: rem(60),
	fsSubtitle: rem(40),
	fsQuote: rem(24),
	fsSmall: rem(10),
	fwBold: 700,
	fwRegular: 400,
	fwLight: 300
}

const SIZES = {
	btnHeight: 50, // px
	containerWidth: 860, // px
	baseSpacing: 15, // px
	iconSize: 20 //px
}

const BREAKPOINTS = {
	md: rem(768)
}

const BORDER = {
	radius: rem(4),
	width: rem(1)
}

export const SPACING_MAP: Record<SpacingSizes, string> = {
	big: rem(SIZES.baseSpacing * 2),
	default: rem(SIZES.baseSpacing),
	small: rem(SIZES.baseSpacing * 0.5)
}

const INPUTS = {
	height: 30
}

const THEME = {
	transition: {
		...TRANSITION
	},
	colors: {
		...COLORS,
		border: COLORS.grayLighter,
		text: COLORS.black
	},
	typography: {
		...TYPOGRAPHY
	},
	breakPoints: {
		...BREAKPOINTS
	},
	sizes: {
		...SIZES,
		btnHeightBig: round(SIZES.btnHeight * 1.2),
		navWidth: round(SIZES.containerWidth * 0.2),
		iconCircle: round(SIZES.iconSize * 1.3),
		iconButton: round(SIZES.iconSize * 2)
	},
	spacing: {
		...SPACING_MAP
	},
	border: {
		...BORDER
	},
	inputs: {
		...INPUTS
	}
}

export type ThemeType = typeof THEME

export const theme: ThemeType = THEME
