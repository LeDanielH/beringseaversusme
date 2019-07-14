import { SvgIcon } from './svg-icon'
import React, { HTMLAttributes } from 'react'
import { IIconCommonProps } from './Icon.types'
import { IconButton } from './icon-button'
import { theme } from '../../styles/theme'

const exportedSize = 20

type IconDownloadType = Pick<IIconCommonProps, 'size' | 'color'> &
	HTMLAttributes<HTMLElement>

export const IconDownload = ({
	size = exportedSize,
	color = theme.colors.black
}: IconDownloadType) => (
	<SvgIcon
		vbWidth={exportedSize}
		vbHeight={exportedSize}
		width={size}
		height={size}
	>
		<path
			d="M19 13v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4M5 8l5 5 5-5M10 13V1"
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</SvgIcon>
)

export const IconDownloadButton = ({ onClick, ...rest }: IconDownloadType) => (
	<IconButton onClick={onClick}>
		<IconDownload {...rest} />
	</IconButton>
)
