import { SvgIcon } from './svg-icon'
import React from 'react'
import { IIconCommonProps } from './Icon.types'
import { theme } from '../../styles/theme'
import { calculateSvgSize } from '../../utilities/styles'

const exportedWidth = 13
const exportedHeight = 8

type ChevronPropsTypes = 'color' | 'size' | 'direction' | 'withPointer'

export const IconChevron = ({
	size = exportedWidth,
	withPointer,
	direction,
	color = theme.colors.black
}: Pick<IIconCommonProps, ChevronPropsTypes>) => (
	<SvgIcon
		vbWidth={exportedWidth}
		vbHeight={exportedHeight}
		width={calculateSvgSize(size, exportedWidth, exportedHeight).width}
		height={calculateSvgSize(size, exportedWidth, exportedHeight).height}
		withPointer={withPointer}
		direction={direction}
	>
		<path
			d="M12 7L6.5 1 1 7"
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</SvgIcon>
)
