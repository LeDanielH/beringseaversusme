import React, { HTMLAttributes } from 'react'
import { SvgIconWrapper } from './Icon.styles'
import { Svg } from '../svg'
import { CssDirectionType } from '../../types/style'
import { IIconCommonProps } from './Icon.types'
import { round } from '../../utilities/numbers-mod'
import { MAX_PRECISION } from '../../constants/common'

export interface ISvgIconProps
	extends Pick<IIconCommonProps, 'size' | 'sizeRatio'> {
	width?: number // or you can use size directly
	height?: number
	vbWidth: number
	vbHeight: number
	children: React.ReactNode
	withPointer?: boolean
	direction?: CssDirectionType

	// these two you might not need - used for svg drawed charts - (e.g. stroke can overflow viewbox)
	overflowFixScaleRatio?: number
	overflowFixPosition?: number
}
export const SvgIcon = ({
	sizeRatio = 1,
	size,
	vbWidth,
	vbHeight,
	width,
	height,
	children,
	withPointer,
	direction,
	overflowFixScaleRatio,
	overflowFixPosition,
	...rest
}: ISvgIconProps & HTMLAttributes<HTMLElement>) => {
	const wrapperSize =
		size || round(Math.max(width, height) * sizeRatio, MAX_PRECISION)
	return (
		<SvgIconWrapper
			size={wrapperSize}
			withPointer={withPointer}
			direction={direction}
			{...rest}
		>
			<Svg
				vbWidth={vbWidth}
				vbHeight={vbHeight}
				width={width}
				height={height}
				size={size}
				sizeRatio={sizeRatio}
				overflowFixScaleRatio={overflowFixScaleRatio}
				overflowFixPosition={overflowFixPosition}
			>
				{children}
			</Svg>
		</SvgIconWrapper>
	)
}
