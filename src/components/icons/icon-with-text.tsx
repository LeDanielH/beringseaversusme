import React from 'react'
import styled from 'styled-components'

import { IIconCommonProps } from './Icon.types'
import { FlexParent, FlexChild } from '../layout-flex'
import { theme } from '../../styles/theme'
import { sizeRounderWithUnit } from '../../utilities/styles'

type IconWithTextProps = Pick<IIconCommonProps, 'sizeRatio' | 'color'>

const IconWithTextStyled = styled(({ ...rest }) => (
	<FlexParent {...rest} justifyContent="center" alignItems="center" />
))<IconWithTextProps>(
	({ sizeRatio, color = theme.colors.text }: IconWithTextProps) => ({
		borderColor: color,
		borderStyle: 'solid',
		borderWidth: sizeRounderWithUnit(2 * sizeRatio, 'px'),
		borderRadius: sizeRounderWithUnit(4 * sizeRatio, 'px'),
		height: sizeRounderWithUnit(
			theme.sizes.iconSize * 1.5 * sizeRatio,
			'px'
		),
		padding: '0.1rem'
	})
)

const IconWithTextText = styled('span')<IconWithTextProps>`
	font-size: ${({ sizeRatio }) =>
		sizeRounderWithUnit(0.4 * sizeRatio, 'rem')};
	color: ${({ color }) => color};
	color: ${theme.colors.black};
	font-family: ${theme.typography.ffHeadings};
	text-transform: uppercase;
	text-align: center;
	font-weight: bold;
`

export interface IIconWithText {
	shortText: string
}

export const IconWithText = ({
	sizeRatio = 1,
	shortText = 'ext',
	color = theme.colors.text
}: IconWithTextProps & IIconWithText) => (
	<IconWithTextStyled sizeRatio={sizeRatio} color={color}>
		<FlexChild noFontSize>
			<IconWithTextText sizeRatio={sizeRatio} color={color}>
				{shortText}
			</IconWithTextText>
		</FlexChild>
	</IconWithTextStyled>
)
