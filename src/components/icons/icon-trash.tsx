import { SvgIcon } from './svg-icon'
import React, { HTMLAttributes } from 'react'

import { IIconCommonProps } from './Icon.types'
import { IconButton } from './icon-button'
import { theme } from '../../styles/theme'
import { calculateSvgSize } from '../../utilities/styles'

const exportedWidth = 20
const exportedHeight = 22
type IconTrashType = Pick<IIconCommonProps, 'size' | 'color'> &
	HTMLAttributes<HTMLElement>

export const IconTrash = ({
	size = exportedHeight,
	color = theme.colors.black
}: IconTrashType) => (
	<SvgIcon
		vbWidth={exportedWidth}
		vbHeight={exportedHeight}
		width={calculateSvgSize(size, exportedWidth, exportedHeight).width}
		height={calculateSvgSize(size, exportedWidth, exportedHeight).height}
	>
		<path
			d="M1 5h18"
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M18 5a1 1 0 1 0-2 0h2zM4 5a1 1 0 0 0-2 0h2zm1 0a1 1 0 0 0 2 0H5zm8 0a1 1 0 1 0 2 0h-2zm3 0v14h2V5h-2zm0 14a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1H5v2h10v-2zM5 20a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3v-2zm-1-1V5H2v14h2zM7 5V3H5v2h2zm0-2a1 1 0 0 1 1-1V0a3 3 0 0 0-3 3h2zm1-1h4V0H8v2zm4 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v2h2V3h-2z"
			fill={color}
		/>
	</SvgIcon>
)

export const IconTrashButton = ({ onClick, ...rest }: IconTrashType) => (
	<IconButton>
		<IconTrash {...rest} />
	</IconButton>
)
