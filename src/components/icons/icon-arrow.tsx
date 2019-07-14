import { SvgIcon } from './svg-icon'
import React from 'react'
import { IIconCommonProps } from './Icon.types'
import { theme } from '../../styles/theme'
import { calculateSvgSize } from '../../utilities/styles'

const exportedWidth = 14
const exportedHeight = 18

export const IconArrow = ({
	size = exportedHeight,
	direction,
	color = theme.colors.black
}: Pick<IIconCommonProps, 'color' | 'size' | 'direction'>) => (
	<SvgIcon
		vbWidth={exportedWidth}
		vbHeight={exportedHeight}
		width={calculateSvgSize(size, exportedWidth, exportedHeight).width}
		height={calculateSvgSize(size, exportedWidth, exportedHeight).height}
		direction={direction}
	>
		<path
			d="M7 17V1M1 7l6-6 6 6"
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</SvgIcon>
)
